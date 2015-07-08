<?php
/*
Template Name: zrak-wp
*/
?>

<?php get_header(); ?>
<div id="wrapper-main">
  <div id="main" class="clearfix">
    <div id="content">
      <div class="article-brief clearfix">
        <div class="article-thumbnail"><?php the_post_thumbnail(); ?></div>
        <?php the_content(); ?>
      </div>

<!--       <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
      <p class="article-info"><img src="<?php bloginfo('template_url'); ?>/images/icons/date.png" alt="Иконка календаря"/> <?php the_time('j F Y'); ?> | <?php the_author_posts_link(); ?> |<?php the_category(', '); ?>в <?php the_time('G:i'); ?> | <?php comments_number('Нет комментариев', '1 комментарий', '% comments'); ?><br />Автор: <?php the_author_posts_link(); ?></p>
       -->
      <!--<?php the_date_xml(); ?>-->
      <!--<?php the_excerpt(); ?>-->



<!--       <p class="tags"><?php the_tags(); ?></p>
      <p><a href="<?php the_permalink() ?>">Узнать, что было дальше</a></p>
      <hr />
      <?php endwhile; else: ?>
        <h2 class="title-style">Не найдено ни одного материала.</h2>
      <?php endif; ?>
      <div class="pagination">
        <?php posts_nav_link(); ?>
      </div>
    </div>
 -->

    </div>
  </div>
</div>
<div id="wrapper-footer">22
</div>
<!--<?php get_footer(); ?>-->