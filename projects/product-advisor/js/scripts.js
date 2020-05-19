'use strict';

let productChecked = {
  anesthesia: {
    default: ['l15'],
    checked1: {
      title: 'Superficial',
      products: 'l15'
    },
    checked2: {
      title: 'Deep (Hip, Facts, Sciatic)',
      products: 'c3'
    },
    checked3: {
      title: 'Budget for 2 scanners',
    },
    checked12: 'l7',
    checked123First: 'l15',
    checked123Next: 'c3',
  },
  criticalCare: {
    default: ['c3'],
    checked1: {
      title: 'Mostly cardiac',
      products: 'pa'
    },
    checkedNull: 'c3',
  },
  generalSurgery: {
    default: ['l15'],
    checked1: {
      title: 'Superficial',
      products: 'l15'
    },
    checked2: {
      title: 'Deep (>5cm)',
      products: 'c3'
    },
    checked3: {
      title: 'Budget for 2 scanners',
    },
    checked12: 'c3',
    checked123First: 'l15',
    checked123Next: 'c3',
  },
  veterinaryMedicine: {
    default: ['c7vet', 'l7vet', 'c3vet'],
    checked1: {
      title: 'Small animals',
      products: 'c7vet'
    },
    checked2: {
      title: 'Large animals',
      products: 'c3vet'
    },
    checked3: {
      title: 'Equine tendons',
      products: 'l7vet'
    },
    checked12: ['c7vet', 'c3vet'],
    checked13: ['c7vet', 'l7vet'],
    checked23: ['c3vet', 'l7vet'],
    checked123: ['c7vet', 'l7vet', 'c3vet']
  },
};

$(document).ready(function() {
  let $specialtyList = $('#specialty-list');
  let $dropdownContainer = $specialtyList.find('.dropdown-container');
  let $scannersContainer = $('#scanners-container');
  let $scannerItems = $scannersContainer.children('.scanner-item');
  let $filterProducts = $('#filter-products');
  let $step1 = $('.step-1');
  let $step2 = $('.step-2');
  let productName = "";
  let checked1 = $('#products-1');
  let checked2 = $('#products-2');
  let checked3 = $('#products-3');
  let activeCheckbox = "";
  let $checkbox1 = $filterProducts.find('.checkbox-1');
  let $checkbox2 = $filterProducts.find('.checkbox-2');
  let $checkbox3 = $filterProducts.find('.checkbox-3');

  let closeDropdown = () => {
    $dropdownContainer.stop().slideUp();
    $specialtyList.removeClass('open');
  };

  let twoStepActive = () => {
    $step1.removeClass('active');
    $step2.addClass('active');
  };

  let firstStepActive = () => {
    $step1.addClass('active');
    $step2.removeClass('active');
  };

  let scannerEach = (id, id2) => {
    $scannerItems.each(function () {
      let scanner = $(this);
      let scannerId = scanner.attr('data-id');

      if(scannerId === id || scannerId === id2){
        scanner.show();
      } else {
        scanner.hide();
      }
    });
  };

  // показати відповідний товар
  let showChangeItem = (item) => {
    let id = item.attr('data-id');
    let id2 = item.attr('data-id-2');

    scannerEach(id, id2);
  };

  const showScanners = (scanners) => {
    let id = [...scanners];

    id.forEach(id => {
      return $(`.scanner-item[data-id=${id}`).show();
    })
  };

  // показати назви вибір товарів трьох
  let showCheckboxItems = () => {
    $('#label-products-1').text(productChecked[productName].checked1.title);
    $('#label-products-2').text(productChecked[productName].checked2.title);
    $('#label-products-3').text(productChecked[productName].checked3.title);
  };

  // показати назви вибіро товарів одного і приховує немотрібні чекбокси
  let showCheckboxOne = () => {
    $('#label-products-1').text(productChecked[productName].checked1.title);

    $checkbox1.removeClass('active');
    $checkbox2.removeClass('active');
  };

  // відкриття dropdown
  $specialtyList.on("click", '.toggle', function (e) {
    $dropdownContainer.stop().slideToggle();
    $specialtyList.toggleClass('open');
  });

  // показати товари вобору трьох товарів
  let showDetailItems = () => {
    let id = "";

    $scannerItems.hide();

    if(!checked1.is(":checked") && !checked2.is(":checked") && !checked3.is(":checked")){
      id = productChecked[productName].checked1.products;
      $checkbox3.removeClass('active');
      checked3.attr('checked', false);

      $(`.scanner-item[data-id=${id}`).show();
      return;
    }

    if(checked1.is(":checked") && checked2.is(":checked") && checked3.is(":checked")){
      let idFirst = productChecked[productName].checked123First;
      let idNext = productChecked[productName].checked123Next;
      id = productChecked[productName].checked1.products;

      $checkbox3.addClass('active');

      $(`.scanner-item[data-id=${idFirst}`).show();
      $(`.scanner-item[data-id=${idNext}`).show();
    } else if(checked1.is(":checked") && !checked2.is(":checked")){
      id = productChecked[productName].checked1.products;
      $checkbox3.removeClass('active');
      checked3.attr('checked', false);

    } else if(!checked1.is(":checked") && checked2.is(":checked")){
      id = productChecked[productName].checked2.products;
      $checkbox3.removeClass('active');
      checked3.attr('checked', false);

    } else if(checked1.is(":checked") && checked2.is(":checked")){
      id = productChecked[productName].checked12;
      $checkbox3.addClass('active');
    }

    $(`.scanner-item[data-id=${id}`).show();
  };

  const defoultActive = () => {
    if(activeCheckbox !== "checkboxListVet"){
      if(!checked1.is(":checked") && !checked2.is(":checked") && !checked3.is(":checked")){
        $this.prop('checked', true);
        console.log(checked1);
        e.preventDefault();
      }
    }
  };

  // показати товари вобору трьох товарів
  let showDetailItemsVet = () => {
    let id = "";

    $scannerItems.hide();

    if(!checked1.is(":checked") && !checked2.is(":checked") && !checked3.is(":checked")){
      showScanners(productChecked[productName].default);
      return;
    }

    if(checked1.is(":checked") && !checked2.is(":checked") && !checked3.is(":checked")){
      id = productChecked[productName].checked1.products;

    } else if(!checked1.is(":checked") && checked2.is(":checked") && !checked3.is(":checked")){
      id = productChecked[productName].checked2.products;

    } else if(!checked1.is(":checked") && !checked2.is(":checked") && checked3.is(":checked")){
      id = productChecked[productName].checked3.products;

    } else if(checked1.is(":checked") && checked2.is(":checked") && !checked3.is(":checked")){
      showScanners(productChecked[productName].checked12);

      return;
    } else if(checked1.is(":checked") && !checked2.is(":checked") && checked3.is(":checked")){
      showScanners(productChecked[productName].checked13);

      return;
    } else if(!checked1.is(":checked") && checked2.is(":checked") && checked3.is(":checked")){
      showScanners(productChecked[productName].checked23);

      return;
    } else if(checked1.is(":checked") && checked2.is(":checked") && checked3.is(":checked")){
      showScanners(productChecked[productName].checked123);

      return;
    }

    $(`.scanner-item[data-id=${id}`).show();
  };

  // показати товари вобору де є один варіант
  let oneShowDetailItems = () => {
    let id = "";
    $scannerItems.hide();

    if(checked1.is(":checked")){
      id = productChecked[productName].checked1.products;
    } else {
      id = productChecked[productName].checkedNull;
    }

    $(`.scanner-item[data-id=${id}`).show();
  };

  // зміна назви товара в перемикачі, відображення відповідного вибраного товару
  $specialtyList.on("click", '.item', function (e) {
    let $this = $(this);
    let text = $this.text();
    let $dropdown = $(this).parents('#specialty-list');
    let id = "";

    // добавляємо назву продукда для пошуку по обєкту
    productName = $this.attr('data-checked');

    // приховати всі елементи
    $scannerItems.hide();

    // відновлює дефолтне значення елементів
    checked1.attr("checked", false);
    checked2.attr("checked", false);
    checked3.attr("checked", false);
    $checkbox2.addClass("active");
    $checkbox3.removeClass("active");


    // зміна назви товара в перемикачі
    $dropdown.find('.toggle').text(text);

    closeDropdown();

    if($this.hasClass('features-less')){
      $scannersContainer.addClass('features-less');
    } else if($this.hasClass('features-none')){
      $scannersContainer.addClass('features-none');
    } else {
      $scannersContainer.removeClass('features-less').removeClass('features-none');
    }

    // показати дефолтний сканер

    if($this.hasClass('checkbox-list')){
      // присвоюємо значення для методів вибору
      activeCheckbox = "checkboxList";
      twoStepActive();
      showCheckboxItems();
      showScanners(productChecked[productName].default);
      checked1.prop('checked', true);

    } else if($this.hasClass('one-checkbox')) {
      activeCheckbox = "oneCheckbox";
      twoStepActive();
      showCheckboxOne();
      showScanners(productChecked[productName].default);

    } else if($this.hasClass('checkbox-list-vet')) {
      activeCheckbox = "checkboxListVet";
      twoStepActive();
      showCheckboxItems();
      showScanners(productChecked[productName].default);
      $checkbox3.addClass('active');

    } else {
      firstStepActive();
      showChangeItem($this);
    }
  });

  // перемикання по checkbox
  $filterProducts.on('click', '.checkbox', function (e) {
    if(activeCheckbox === "checkboxList"){
      if(!checked1.is(":checked") && !checked2.is(":checked") && !checked3.is(":checked")){
        checked1.prop('checked', true);
      }
      showDetailItems();
    } else if(activeCheckbox === "oneCheckbox"){
      oneShowDetailItems();
    } else if(activeCheckbox === "checkboxListVet"){
      showDetailItemsVet();
    }
  });

  // serch
  $('#search-product').on("keyup", function (e) {
    let val = $(this).val();
    val = val.toLowerCase();

    $('#specialty-list .item').each(function () {
      let $this = $(this);
      let text = $(this).text();
      text = text.toLowerCase();

      if(!text.match(val)){
        $this.hide();
      } else {
        $this.show();
      }
    });
  });

  // закриття dropdown в не поля
  $(document).mouseup(function (e){
    if (!$specialtyList.is(e.target)
      && $specialtyList.has(e.target).length === 0) {
      closeDropdown();
    }
  });
});
