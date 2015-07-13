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
<script src="<?php bloginfo('template_url'); ?>/js/scripts.js"></script>
<!-- Adding Google font to the site -->
<!--<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen,projection" />  -->

<?php wp_head(); ?>

<!--Imitation media quieries для IE8-->
<!--[if lt IE 9]>
<script src="<?php bloginfo('template_url'); ?>/js/respond.min.js"></script>
<![endif]-->

</head>
<body>
<div id="wrapper">
  <header id="header" class="clearfix">
    <div class="logo-block clearfix">
      <div class="logo">
        <a href="<?php echo get_option('home'); ?>/">
          <img src="<?php bloginfo('template_url'); ?>/images/logo.png" title="На главную страницу сайта bellydance-samara.ru"
          alt="Обучение восточным танцам, танцам живота в Самаре." />
        </a>
      </div>
      <div class="title">Школа восточного танца</div>
    </div>
    <div class="info-block">
      <div class="phone">Позвоните нам: <span>8 (927) 701-86-69</span></div>
      <div class="search">
        <?php get_search_form(); ?>
      </div>
    </div>
  </header>

  <nav class="main-menu clearfix">
    <?php wp_nav_menu( array( 'theme_location' => 'top-pages-menu' ) ); ?>
  </nav>