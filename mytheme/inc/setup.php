<?php
/**
 * Theme setup functions
 *
 * @package MyTheme
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function mytheme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Add custom image sizes
    add_image_size('mytheme-featured', 800, 400, true);
    add_image_size('mytheme-thumbnail', 300, 200, true);

    // This theme uses wp_nav_menu() in multiple locations.
    register_nav_menus(array(
        'primary' => __('Hlavní menu', 'mytheme'),
        'footer'  => __('Footer menu', 'mytheme'),
    ));

    // Switch default core markup for search form, comment form, and comments to output valid HTML5.
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for custom logo.
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Add theme support for editor styles.
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');

    // Add support for full and wide align images.
    add_theme_support('align-wide');

    // Add support for responsive embedded content.
    add_theme_support('responsive-embeds');

    // Add support for block styles.
    add_theme_support('wp-block-styles');
}
add_action('after_setup_theme', 'mytheme_setup');