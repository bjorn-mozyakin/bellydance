<?php
/*
Template Name: zrak-wp
*/
?>
<?php get_header(); ?>
<div id="wrapper-main">
  <div id="main" class="clearfix">
    <div id="content">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
       <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
        <?php the_content(); ?>
             <?php endwhile; else: ?>
        <h2 class="title-style">Не найдено ни одного материала.</h2>
      <?php endif; ?>
      </div>
    </div>
  </div>
<?php get_footer(); ?>

