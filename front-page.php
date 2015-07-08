<?php
/*
Template Name: zrak-wp
*/
?>
<?php get_header(); ?>
  <aside class="sidebar-primary">
    <?php get_sidebar('primary'); ?>
  </aside>
  <main id="content" class="clearfix">

    <section class="sidebar-news-on-main-page">
      <?php get_sidebar('news-on-main-page'); ?>
    </section>

    <section class="hello">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
      <?php endwhile; else: ?>
        <h1 class="title-style">Не найдено ни одного материала.</h1>
      <?php endif; ?>
    </section>

  </main>
<?php get_footer(); ?>

