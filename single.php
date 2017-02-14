<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package tinderbox
 */

get_header(); ?>
<div class="social_share_notice animated">
	<p>Due to this content being used for demonstration purposes, sharing on social media has been disabled.</p>
</div>
<div class="section page">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<?php the_post_thumbnail('wide'); ?>
	<div class="col-xs-12">
		<h2><?php the_title(); ?></h2>
		<?php the_content(); ?>	
	</div>
	<?php endwhile; else: ?>
		<p>Intet at se her!</p>
	<?php endif;?>



</div>

<?php
get_footer();