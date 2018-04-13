/* ©2014 Didier Berck */

/** @usage
* var iL = new ImageLoader('PATH_TO_IMAGE' | 'IMAGE_ARRAY);
* addEvent(document, 'images:loaded', handler);
* 
* @other usage
* var iL = new ImageLoader();
* iL.loadImage('PATH_TO_IMAGE');
*/

var ImageLoader = function(images) {
	this.loaded = 0;
	if(undefined != images) {
		this.images = (typeof images == 'string') ? new Array(images) : images;
		for(var i=0; i<this.images.length; i++) {
			this.loadImage(this.images[i]);
		}
	} else this.images = null;
}
ImageLoader.prototype.loadImage = function(image) {
	var img = document.createElement('img');
	img.src = image;
	addEvent(img, 'load', function(evt) {
		this.loaded++;
		if(null == this.images || this.loaded == this.images.length) {
			triggerEvent(document, 'images:loaded');
		}
	}.bind(this));
}

// bind() polyfill
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  };
}
// addEventListener() polyfill
function addEvent(elt, evt, func) {
	if(elt.addEventListener) elt.addEventListener(evt, func, false);
	else if(elt.attachEvent) elt.attachEvent("on"+evt, func);
}
function removeEvent(elt, evt, func) {
	if(elt.removeEventListener) elt.removeEventListener(evt, func);
	else if(elt.detachEvent) elt.detachEvent("on"+evt, func);
}
// dispatchEvent() polyfill
function triggerEvent(el,eventName){
	var event;
	if(document.createEvent) {
		event = document.createEvent('HTMLEvents');
		event.initEvent(eventName,true,true);
	} else if(document.createEventObject) {// IE < 9
		event = document.createEventObject();
		event.eventType = eventName;
	}
	event.eventName = eventName;
	if(el.dispatchEvent) {
		el.dispatchEvent(event);
	} else if(el.fireEvent && htmlEvents['on'+eventName]) {// IE < 9
		el.fireEvent('on'+event.eventType,event);// can trigger only real event (e.g. 'click')
	} else if(el[eventName]) {
		el[eventName]();
	} else if(el['on'+eventName]) {
		el['on'+eventName]();
	}
}

