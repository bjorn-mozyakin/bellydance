<div id="sidebar-primary">
	<ul>
		<?php if(!function_exists('dynamic_sidebar') || !dynamic_sidebar(primary)) : ?>
			<p>Ничего не выведено в сайдбар</p>
		<?php endif; ?>
		<?php get_links_list(); ?>
	</ul>
</div>