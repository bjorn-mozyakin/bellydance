<?php
/*
Template Name: zrak-wp
*/
?>
<?php get_header(); ?>
<div id="wrapper-main">
  <div id="main" class="clearfix">
    <div id="content">
      <h2 class='pagetitle'>Ошибка 404 - страница не найдена</h2>
      <p><strong>Возможные причины:</strong></p>
      <ul>
        <li>неправильно введен адрес;</li>
        <li>адрес страницы изменился после обновления сайта;</li>
        <li>просроченная закладка/избранное;</li>
        <li>поисковый механизм, у которого просрочен список для этого сайта;</li>
        <li>и др.</li>
      </ul>
      <p><strong>Пожалуйста, попробуйте перейти на <a href="/" target="_self" title="Главная страница">главную страницу</a> сайта.</strong></p>
    </div>
    <?php get_sidebar('primary'); ?>
  </div>
</div>
<?php get_footer(); ?>