<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes() ?>>
<head>
<title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<meta name="description" content="" />
<meta name="keywords" content="" />

<!--Disable auto scale on mobile devices-->
<meta name="viewport" content="initial-scale=1" />

<!--Point VK and FB thumbnail for displaying-->
<!--<meta property="og:image" content="http://tamdaleko.ru/wp-content/themes/zrak-wp/images/logo-socnet.png" />-->

<link rel="shortcut icon" type="image/png" href="<?php bloginfo('template_url'); ?>/favicon.ico" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/css/normalize.css" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/style.css" />

<?php wp_head(); ?>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<!--Imitation media quieries для IE8-->
<!--[if lt IE 9]>
<script src="<?php bloginfo('template_url'); ?>/js/respond.min.js"></script>
<![endif]-->

<script src="<?php bloginfo('template_url'); ?>/js/scripts.js"></script>

</head>
<body>
<div id="wrapper">
  <header id="header" class="clearfix">
    <div class="clearfix">
      <div class="logo-block clearfix">
        <div class="logo">
          <a href="<?php echo get_option('home'); ?>/">
            <img src="<?php bloginfo('template_url'); ?>/images/logo.png" title="На главную страницу сайта bellydance-samara.ru"
            alt="Обучение восточным танцам, танцам живота в Самаре." />
          </a>
        </div>
        <div class="title"><a href="/">Школа восточного танца</a></div>
      </div>
      <div class="info-block">
        <div class="phone">Позвоните нам: <span>8 (927) 701-86-69</span></div>
        <div class="search">
          <?php get_search_form(); ?>
        </div>
      </div>
    </div>
    <nav class="main-menu clearfix">
      <?php wp_nav_menu( array( 'theme_location' => 'top-pages-menu' ) ); ?>
    </nav>
  </header>
