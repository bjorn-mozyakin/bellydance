<?php

add_action('init', 'register_nav_menus_on_init');

function register_nav_menus_on_init() {
	register_nav_menus(array(
		'top-pages-menu' => 'Top Pages Menu',
		// 'top-cats-menu' => 'Top Categories Menu',
	));
}



if (function_exists('register_sidebar'))
register_sidebar(array('name' => 'primary')); //регистрируем сайдбар
//register_sidebar(array('name' => 'secondary')); //регистрируем еще один сайдбар

add_theme_support('post-thumbnails'); //добавляем поддержку миниатюр для каждого поста
set_post_thumbnail_size(200, '', false); //определяем размер миниатюры и то как ее сжимать: пропорционально - false, или с обрезанием по центру - true

if (function_exists('add_theme_support')) {
 add_theme_support('menus');
}

// function my_search_form( $form ) {
// 	$form = '<form role="search" method="get" id="searchform" class="searchform" action="' . home_url( '/' ) . '" >
// 	<div><label class="screen-reader-text" for="s">' . __( 'Search for:' ) . '</label>
// 	<input type="text" value="' . get_search_query() . '" name="s" id="s" />
// 	<input type="submit" id="searchsubmit" value="'. esc_attr__( 'Search' ) .'" />
// 	</div>
// 	</form>';

// 	return $form;
// }

// add_filter( 'get_search_form', 'my_search_form' );

?>