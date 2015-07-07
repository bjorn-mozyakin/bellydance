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
       <p class="article-info"><img src="<?php bloginfo('template_url'); ?>/images/icons/date.png" alt="Иконка календаря" /> <?php the_time('j F Y'); ?> | <!--<?php the_author_posts_link(); ?> | --><?php the_category(', '); ?><!--в <?php the_time('G:i'); ?> | <?php comments_number('Нет комментариев', '1 комментарий', '% comments'); ?>--></p>
      <!--<?php the_date_xml(); ?>-->
      <!--<?php the_excerpt(); ?>-->
      <?php the_content(); ?>
      <?php endwhile; else: ?>
        <h2 class="title-style">Не найдено ни одного материала.</h2>
      <?php endif; ?>
      <?php get_sidebar('secondary'); ?>
      <div class="article-prev-next">
        <div class="article-prev"><?php previous_post_link(); ?></div>
        <div class="article-next"><?php next_post_link(); ?></div>
      </div>

      <!-- Put this div tag to the place, where the Comments block will be -->
      <!--<div id="vk_comments"></div>
      <script type="text/javascript">
        VK.Widgets.Comments("vk_comments", {limit: 10, width: "100%", attach: "*"});
      </script>

      <div class="fb-comments" data-href="http://tamdaleko.ru" data-numposts="10" width="100%" data-colorscheme="light"></div>-->

    </div>
  </div>
</div>
<?php get_footer(); ?>

