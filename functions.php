<?php

/**
 * tinderbox functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tinderbox
 */

add_theme_support('post-thumbnails');
/**
 * Enqueue scripts and styles.
 */
  function tinderbox_scripts() {
    wp_enqueue_style('bootstrapcss', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css', array(), '', false);

    wp_enqueue_style('slickcss', 'http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css', array(), '', false);

    wp_enqueue_style('tinderbox-style', get_stylesheet_uri());

    wp_deregister_script('jquery');

    wp_enqueue_script('jquery', 'http://code.jquery.com/jquery.js', array(), '', false);

    wp_enqueue_script('slickjs', 'http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js', array(), '', false);

    wp_enqueue_script('main', get_template_directory_uri() . '/js/main.js', array('jquery'));
}

add_action('wp_enqueue_scripts', 'tinderbox_scripts');




function artists() {

    $labels = array(
        'name' => _x('artists', 'Post Type General Name', 'text_domain'),
        'singular_name' => _x('artist', 'Post Type Singular Name', 'text_domain'),
        'menu_name' => __('Artists', 'text_domain'),
        'name_admin_bar' => __('Artists', 'text_domain'),
        'archives' => __('Item Archives', 'text_domain'),
        'parent_item_colon' => __('Parent Item:', 'text_domain'),
        'all_items' => __('All artists', 'text_domain'),
        'add_new_item' => __('Add new artist', 'text_domain'),
        'add_new' => __('Add new', 'text_domain'),
        'new_item' => __('New artist', 'text_domain'),
        'edit_item' => __('Edit artist', 'text_domain'),
        'update_item' => __('Update artist', 'text_domain'),
        'view_item' => __('View artist', 'text_domain'),
        'search_items' => __('Search artist', 'text_domain'),
        'not_found' => __('Not found', 'text_domain'),
        'not_found_in_trash' => __('Not found in Trash', 'text_domain'),
        'featured_image' => __('Featured Image', 'text_domain'),
        'set_featured_image' => __('Set featured image', 'text_domain'),
        'remove_featured_image' => __('Remove featured image', 'text_domain'),
        'use_featured_image' => __('Use as featured image', 'text_domain'),
        'insert_into_item' => __('Insert into item', 'text_domain'),
        'uploaded_to_this_item' => __('Uploaded to this item', 'text_domain'),
        'items_list' => __('Items list', 'text_domain'),
        'items_list_navigation' => __('Items list navigation', 'text_domain'),
        'filter_items_list' => __('Filter items list', 'text_domain'),
    );
    $args = array(
        'label' => __('artist', 'text_domain'),
        'description' => __('Artister', 'text_domain'),
        'labels' => $labels,
        'supports' => array('title', 'editor', 'thumbnail',),
        'taxonomies' => array('post_tag'),
        'hierarchical' => true,
        'menu_icon' => 'dashicons-format-audio',
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'can_export' => true,
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'page',
    );
    register_post_type('artists', $args);
}

add_action('init', 'artists', 0);

// Register Custom Taxonomy
function genre_taxonomy() {

    $labels = array(
        'name' => _x('genres', 'Taxonomy General Name', 'text_domain'),
        'singular_name' => _x('genre', 'Taxonomy Singular Name', 'text_domain'),
        'menu_name' => __('Genres', 'text_domain'),
        'all_items' => __('All genres', 'text_domain'),
        'parent_item' => __('Parent Item', 'text_domain'),
        'parent_item_colon' => __('Parent Item:', 'text_domain'),
        'new_item_name' => __('New genre', 'text_domain'),
        'add_new_item' => __('Add new genre', 'text_domain'),
        'edit_item' => __('Edit genre', 'text_domain'),
        'update_item' => __('Update genre', 'text_domain'),
        'view_item' => __('View genre', 'text_domain'),
        'separate_items_with_commas' => __('Separate items with commas', 'text_domain'),
        'add_or_remove_items' => __('Add or remove items', 'text_domain'),
        'choose_from_most_used' => __('Choose from the most used', 'text_domain'),
        'popular_items' => __('Popular Items', 'text_domain'),
        'search_items' => __('Search Items', 'text_domain'),
        'not_found' => __('Not Found', 'text_domain'),
        'no_terms' => __('No items', 'text_domain'),
        'items_list' => __('Items list', 'text_domain'),
        'items_list_navigation' => __('Items list navigation', 'text_domain'),
    );
    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud' => true,
    );
    register_taxonomy('genre', array('artists'), $args);
}

add_action('init', 'genre_taxonomy', 0);

// Register Custom Taxonomy
function artist_stage() {

    $labels = array(
        'name' => _x('stages', 'Taxonomy General Name', 'text_domain'),
        'singular_name' => _x('stage', 'Taxonomy Singular Name', 'text_domain'),
        'menu_name' => __('Stage', 'text_domain'),
        'all_items' => __('All stages', 'text_domain'),
        'parent_item' => __('Parent Item', 'text_domain'),
        'parent_item_colon' => __('Parent Item:', 'text_domain'),
        'new_item_name' => __('New Item Name', 'text_domain'),
        'add_new_item' => __('Add new stage', 'text_domain'),
        'edit_item' => __('Edit stage', 'text_domain'),
        'update_item' => __('Update stage', 'text_domain'),
        'view_item' => __('View stage', 'text_domain'),
        'separate_items_with_commas' => __('Separate items with commas', 'text_domain'),
        'add_or_remove_items' => __('Add or remove items', 'text_domain'),
        'choose_from_most_used' => __('Choose from the most used', 'text_domain'),
        'popular_items' => __('Popular Items', 'text_domain'),
        'search_items' => __('Search Items', 'text_domain'),
        'not_found' => __('Not Found', 'text_domain'),
        'no_terms' => __('No items', 'text_domain'),
        'items_list' => __('Items list', 'text_domain'),
        'items_list_navigation' => __('Items list navigation', 'text_domain'),
    );
    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud' => true,
    );
    register_taxonomy('stage', array('artists'), $args);
}

add_action('init', 'artist_stage', 0);




// Register Foodstalls
function foodstalls() {

    $labels = array(
        'name' => _x('foodstalls', 'Post Type General Name', 'text_domain'),
        'singular_name' => _x('foodstall', 'Post Type Singular Name', 'text_domain'),
        'menu_name' => __('Food stalls', 'text_domain'),
        'name_admin_bar' => __('Food Stalls', 'text_domain'),
        'archives' => __('Item Archives', 'text_domain'),
        'parent_item_colon' => __('Parent Item:', 'text_domain'),
        'all_items' => __('All food stalls', 'text_domain'),
        'add_new_item' => __('Add new food stall', 'text_domain'),
        'add_new' => __('Add new', 'text_domain'),
        'new_item' => __('New food stall', 'text_domain'),
        'edit_item' => __('Edit food stall', 'text_domain'),
        'update_item' => __('Update food stall', 'text_domain'),
        'view_item' => __('View Item', 'text_domain'),
        'search_items' => __('Search Item', 'text_domain'),
        'not_found' => __('Not found', 'text_domain'),
        'not_found_in_trash' => __('Not found in Trash', 'text_domain'),
        'featured_image' => __('Featured Image', 'text_domain'),
        'set_featured_image' => __('Set featured image', 'text_domain'),
        'remove_featured_image' => __('Remove featured image', 'text_domain'),
        'use_featured_image' => __('Use as featured image', 'text_domain'),
        'insert_into_item' => __('Insert into item', 'text_domain'),
        'uploaded_to_this_item' => __('Uploaded to this item', 'text_domain'),
        'items_list' => __('Items list', 'text_domain'),
        'items_list_navigation' => __('Items list navigation', 'text_domain'),
        'filter_items_list' => __('Filter items list', 'text_domain'),
    );
    $args = array(
        'label' => __('madbod', 'text_domain'),
        'description' => __('Madboder', 'text_domain'),
        'labels' => $labels,
        'supports' => array('title', 'editor', 'thumbnail',),
        'taxonomies' => array('post_tag','category'),
        'hierarchical' => false,
        'menu_icon' => 'dashicons-carrot',
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'can_export' => true,
        'has_archive' => true,
        'exclude_from_search' => false,
        'publicly_queryable' => true,
        'capability_type' => 'page', // if set to post, user with a role of Author will see it if is set to page, wont
    );
    register_post_type('foodstalls', $args);
}

add_action('init', 'foodstalls', 0);

// Register Custom Taxonomy
function foodstall_type() {

    $labels = array(
        'name' => _x('Types', 'Taxonomy General Name', 'text_domain'),
        'singular_name' => _x('type', 'Taxonomy Singular Name', 'text_domain'),
        'menu_name' => __('Type', 'text_domain'),
        'all_items' => __('Alle types', 'text_domain'),
        'parent_item' => __('Parent Item', 'text_domain'),
        'parent_item_colon' => __('Parent Item:', 'text_domain'),
        'new_item_name' => __('New type', 'text_domain'),
        'add_new_item' => __('Add new type', 'text_domain'),
        'edit_item' => __('Edit type', 'text_domain'),
        'update_item' => __('Update type', 'text_domain'),
        'view_item' => __('View type', 'text_domain'),
        'separate_items_with_commas' => __('Separate items with commas', 'text_domain'),
        'add_or_remove_items' => __('Add or remove items', 'text_domain'),
        'choose_from_most_used' => __('Choose from the most used', 'text_domain'),
        'popular_items' => __('Popular Items', 'text_domain'),
        'search_items' => __('Search Items', 'text_domain'),
        'not_found' => __('Not Found', 'text_domain'),
        'no_terms' => __('No items', 'text_domain'),
        'items_list' => __('Items list', 'text_domain'),
        'items_list_navigation' => __('Items list navigation', 'text_domain'),
    );
    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'public' => true,
        'show_ui' => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud' => true,
    );
    register_taxonomy('foodstall_type', array('foodstalls'), $args);
}

add_action('init', 'foodstall_type', 0);




// Hide admin bar
add_filter('show_admin_bar', '__return_false');



add_action('init', 'my_remove_editor_from_post_type');
function my_remove_editor_from_post_type() {
    remove_post_type_support( 'page', 'editor' );
}















