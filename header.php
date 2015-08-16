<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes() ?>>
<head>
<title><?php bloginfo('name'); ?><?php wp_title(); ?></title>
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<meta name="description" content="" />
<meta name="keywords" content="" />

<!--Disable auto scale on mobile devices-->
<meta name="viewport" content="initial-scale=1" />

<link rel="shortcut icon" type="image/png" href="<?php bloginfo('template_url'); ?>/favicon.ico" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/css/normalize.css" />
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/style.css" />

<?php wp_head(); ?>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <!-- Imitation media quieries for IE9- -->
  <!--[if lte IE 9]>
  <script src="<?php bloginfo('template_url'); ?>/js/respond.min.js"></script>
  <script src="<?php bloginfo('template_url'); ?>/js/html5shiv.js"></script>
  <script src="//cdn.polyfill.io/v1/polyfill.min.js"></script>
  <![endif]-->

<script src="<?php bloginfo('template_url'); ?>/js/scripts.js"></script>

<!-- Google Analytics BEGIN -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-57266940-1', 'auto');
  ga('send', 'pageview');
</script>
<!-- END Google Analytica -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter25984036 = new Ya.Metrika({
                    id:25984036,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/25984036" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

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
        <div class="phone"><span class="text">Позвоните нам:</span><span class="number">8 (927) 701-86-69</span></div>
        <div class="search">
          <?php get_search_form(); ?>
        </div>
      </div>
    </div>
    <nav class="main-menu clearfix">
      <?php wp_nav_menu( array( 'theme_location' => 'top-pages-menu' ) ); ?>
    </nav>
  </header>
