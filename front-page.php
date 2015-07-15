<?php
/*
Template Name: zrak-wp
*/
?>
<?php get_header(); ?>
  <aside class="sidebar-primary">
    <?php get_sidebar('primary'); ?>

    <div class="sidebar-primary-reviews-wrapper">
      <div class="sidebar-primary-reviews">
        <h2>Отзывы</h2>
        <?php $the_query = new WP_Query('category_name=Отзывы&orderby=rand&showposts=1'); ?>
        <?php while ($the_query->have_posts() ) : $the_query->the_post(); ?>
          <strong><?php the_title(); ?></strong>
          <?php the_content(); ?>
        <?php endwhile; ?>
        <?php wp_reset_postdata();?>
        <p class="more"><a href="">Посмотреть остальные отзывы...</a></p>
      </div>
    </div>
  </aside>
  <main id="content" class="clearfix">

    <section class="sidebar-news-on-main-page">
      <?php /*get_sidebar('news-on-main-page');*/?>
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

