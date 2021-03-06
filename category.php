<?php
/*
Template Name: zrak-wp
*/
?>
<?php get_header(); ?>
  <main id="content" class="clearfix">
    <h1><?php single_cat_title(); ?></h1>

    <?php if (is_category('Новости')) : ?>
      <div class="news-container">
    <?php elseif (is_category('Отзывы')) : ?>
      <div class="reviewes-container">
    <?php endif; ?>

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <?php if (is_category('Новости')) : ?>
        <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
        <p class="article-info"><img src="<?php bloginfo('template_url'); ?>/images/icons/date.png" /> <?php the_time('j F Y'); ?></p>
        <p><?php the_post_thumbnail(); ?></p>
        <?php the_content(); ?>
        <p class="tags"><?php the_tags(); ?></p>
        <p><a href="<?php the_permalink() ?>">Подробнее...</a></p>
      <?php elseif (is_category('Отзывы')) : ?>
        <h2><?php the_title(); ?></h2>
        <p class="article-info"><img src="<?php bloginfo('template_url'); ?>/images/icons/date.png" /> <?php the_time('j F Y'); ?></p>
        <div class="review"><?php the_content(); ?></div>
      <?php endif; ?>
      <?php endwhile; else: ?>
      <h2 class="title-style">Не найдено ни одного материала.</h2>
    <?php endif; ?>

    </div>
    <div class="pagination">
      <?php posts_nav_link(); ?>
    </div>
  </main>
<?php get_footer(); ?>

