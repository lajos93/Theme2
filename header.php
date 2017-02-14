<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tinderbox
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<link rel="profile" href="http://gmpg.org/xfn/11">

<!-- Favicon -->  

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<p class="favorite_add_status"></p>
	<p class="favorite_remove_status"></p>
	<div class="single_underlay"></div>
	<div class="navigation_overlay animated">
		<img class="close_button" src="<?php bloginfo('template_directory'); ?>/svg/close.svg">
		<ul>
			<li><a class="red" href="<?php echo home_url(); ?>">Home</a></li>
			<li><a href="<?php echo home_url(); ?>/schedule">Schedule</a></li>
			<li><a class="azure" href="<?php echo home_url(); ?>/map">Map</a></li>
			<li><a id="quiz_link" href="<?php echo home_url(); ?>/quiz">Quiz</a></li>
			<li><a class="yellow" href="<?php echo get_post_type_archive_link( 'foodstalls' ); ?>">Food</a></li>
			<li><a href="<?php echo home_url(); ?>/news">News</a></li>
			<li><a class="red" href="<?php echo get_post_type_archive_link( 'artists' ); ?>">Artists</a></li>
			<?php if(is_user_logged_in()): ?>
			<li><a href="<?php echo wp_logout_url( home_url() ); ?>">Log out</a></li>
			<?php endif; ?>
		</ul>
		
	</div>
		
	

    
	<div class="container-fluid">
		<div class="section header">
			<div class="row">
				<div class="col-xs-12">
					<div class="navigation">
						<div class="col-xs-4">
							<?php if (is_user_logged_in()) { ?>
							    <a href="<?php echo home_url() ?>/profile"><img class="user" src="<?php bloginfo('template_directory'); ?>/svg/user.svg"></a>
							<?php } else { ?>
							    <a class="login_button" id="show_login" href=""><img class="user" src="<?php bloginfo('template_directory'); ?>/svg/user.svg"></a>
							<?php } ?>
						</div>
						<div class="col-xs-4">
							<a href="<?php echo home_url(); ?>"><img class="tuborg" src="http://localhost/PRACTISE/wp/wp-content/uploads/2016/12/tuborg_dark.png"></a>
						</div>
						<div class="col-xs-4">
							<img class="hamburger" src="<?php bloginfo('template_directory'); ?>/svg/hamburger.svg">
						</div>	
					</div>
				</div>
				<div class="col-xs-12">
					<div class="slider_wrapper">
						<h2>Currently playing:</h2>
						<div class="currently_playing">
							<?php 
		
							$args = array(
								'post_type' => 'artists',
							);
							
							$the_query = new WP_Query( $args );	    
						    if ( $the_query->have_posts() ) : ?>
								<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
									
									<div>
										<a href="<?php the_permalink(); ?>">
											<h1>
											<?php the_title(); ?>
											<?php $terms = wp_get_post_terms( $post->ID, 'stage' );
											if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
											    foreach ( $terms as $term ) {
											        echo $term->name . ' ';
											    }
											} ?>
											</h1>
										</a>
									</div>
									
								<?php endwhile; ?>
								<?php wp_reset_postdata(); ?>		
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>