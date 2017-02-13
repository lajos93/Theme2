<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package tinderbox
 */

get_header(); ?>

	<div class="section featured">
		<div class="col-xs-6">
			<div class="artists">
			<?php

			$args = array(
				'post_type' => 'artists',
			);

			$the_query = new WP_Query( $args ); ?>

			<?php if ( $the_query->have_posts() ) : ?>
				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
		
				<a href="<?php the_permalink(); ?>">
					<div class="artist">
						<?php the_post_thumbnail('featured'); ?>
						<div class="artist_overlay">
							<h2><?php the_title(); ?></h2>
							<h5>
								<?php $terms = wp_get_post_terms( $post->ID, 'stage' );
								if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
								    foreach ( $terms as $term ) {
								        echo $term->name . ' ';

								    }
								} ?>
							</h5>
						</div>
					</div>
				</a>
			
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
			<?php else : ?>
				<p>Intet at se her!</p>
			<?php endif; ?>
			</div>
		</div>
		<div class="col-xs-6">
			<a href="#">
				
				<div class="instagram">
					
					<div>
						<img src="<?php bloginfo('template_directory'); ?>/img/instagram_img.png">
					</div>
				</div>
			</a>
		</div>	

		<div class="col-xs-12">
			<a class="quiz_call_to_action" href="<?php echo home_url(); ?>/quiz">
				<div class="quiz_countdown">
					<h3>Current quiz ends in</h3>
					
					<div id="clockdiv">
				      <div>
				         <span class="hours"></span>
				         <div class="smalltext">:</div>
				      </div>
				      <div>
				         <span class="minutes"></span>
				         <div class="smalltext">:</div>
				      </div>
				      <div>
				         <span class="seconds"></span>
				         <div class="smalltext"></div>
				      </div>
				   </div>
				   
				</div>
			</a>
		</div>
		</div>

	
			



	<div class="section">
		<div class="col-xs-12">
	<?php 

		$args = array(
			'post_type' => 'page',
		);
		
		$the_query = new WP_Query( $args );	    
	    if ( $the_query->have_posts() ) : ?>
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>			
				 <?php if ( $post->post_name  == 'foodstalls') : ?>
						<?php the_post_thumbnail('wide'); ?>
						<a href="<?php the_permalink(); ?>">
							<div class="food_link">
								<h2><?php the_title(); ?></h2>
								<p>&#8594;</p>
							</div>
						</a>

				<?php endif; ?>
			<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>		
		<?php else : ?>
			<p>Intet at se her!</p>
		<?php endif; ?>
		</div>
	</div>


	
	<div class="section news">
		<?php 	
		$args = array(
			'post_type' => 'post',
			'posts_per_page' => 3,
		);
		
		$the_query = new WP_Query( $args );	    
	    if ( $the_query->have_posts() ) : ?>
		<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>			
			<div class="col-xs-12">
				<div class="news_block">
					<a href="<?php the_permalink(); ?>">
						<?php the_post_thumbnail('wide'); ?>
						<div class="news_overlay"><h2><?php the_title(); ?></h2></div>
					</a>
				</div>
			</div>
		<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>		
		<?php else : ?>
			<p>Intet at se her!</p>
		<?php endif; ?>
	</div>
</div>

<?php
get_footer();
