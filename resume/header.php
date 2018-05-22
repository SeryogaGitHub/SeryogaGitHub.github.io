<?php 
  if(!isset($title_page)){
    $title_page = "Page";
  }

  class activeHref{
    public $title_page;
    public $href_page;

    public function comparison($title_page, $href_page){
      $this->href_page = $href_page;
      $this->href_page = $href_page;

      if($title_page == $href_page){
        echo "class='active'";
      }
    }
  }

  $ob = new activeHref();
?>
<!DOCTYPE html>
<html lang="ua">
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-114440108-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-114440108-1');
  </script>

  <meta charset="UTF-8">
  <title><?php echo $title_page; ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta http-equiv="x-rim-auto-match" content="none">
  
  <link rel="stylesheet" href="css/libs.min.css">
  <link rel="stylesheet" href="css/style.min.css">
    
</head>
<body>
  <header>
    <div class="center">
      <nav>
        <ul>
          <li>
            <a href="/resume/" <?php $ob->comparison($name_page, "index"); ?>>Головна</a>
          </li>
          <li>
            <a href="/resume/portfolio.php" <?php $ob->comparison($name_page, "portfolio"); ?>>Портфоліо</a>
          </li>
          <li>
            <a href="/resume/contacts.php" <?php $ob->comparison($name_page, "contacts"); ?>>Контакти</a>
          </li>
        </ul>
      </nav>
    </div><!-- .center -->
  </header>