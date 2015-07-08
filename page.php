<?php
/*
Template Name: zrak-wp
*/
?>
<?php get_header(); ?>
  <main id="content" class="clearfix">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
     <h1><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
      <?php the_content(); ?>
    <?php endwhile; else: ?>
      <h1 class="title-style">Не найдено ни одного материала.</h1>
    <?php endif; ?>
  </main>
<?php get_footer(); ?>

