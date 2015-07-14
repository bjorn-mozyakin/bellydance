<?php
/*
Template Name: zrak-wp
*/
?>
<?php get_header(); ?>
<div id="wrapper-main">
  <div id="main" class="clearfix">
    <div id="content">
      <?php if ( have_posts() ) : ?>
      <h2 class="search-results">Результаты поиска для: <?php the_search_query(); ?></h2>
      <?php while ( have_posts() ) : the_post(); ?>
        <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
        <p class="article-info"><img src="<?php bloginfo('template_url'); ?>/images/icons/date.png" /> <?php the_time('j F Y'); ?> | <!--<?php the_author_posts_link(); ?> | --><?php the_category(', '); ?><!--в <?php the_time('G:i'); ?> | <?php comments_number('Нет комментариев', '1 комментарий', '% comments'); ?>--></p>
         <!--<?php the_date_xml(); ?>-->
        <!--<?php the_excerpt(); ?>-->
         <p><?php the_post_thumbnail(); ?></p>
        <p><?php the_content(); ?></p>
        <p class="tags"><?php the_tags(); ?></p>
        <p><a href="<?php the_permalink() ?>">Узнать, что было дальше</a></p>
        <hr />
       <?php endwhile; else: ?>
      <h2 class="search-results">Результаты поиска для: <?php the_search_query(); ?></h2>

        <p>Ничего не найдено</p>
      <?php endif; ?>
      <div class="pagination">
        <?php posts_nav_link(); ?>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>