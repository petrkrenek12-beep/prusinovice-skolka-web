<?php
/**
 * Enqueue scripts and styles
 *
 * @package MyTheme
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue scripts and styles.
 */
function mytheme_scripts() {
    $theme_version = wp_get_theme()->get('Version');
    
    // Main stylesheet
    wp_enqueue_style(
        'mytheme-style',
        get_stylesheet_uri(),
        array(),
        $theme_version
    );
    
    // Main compiled CSS
    if (file_exists(get_template_directory() . '/assets/css/style.css')) {
        wp_enqueue_style(
            'mytheme-main',
            get_template_directory_uri() . '/assets/css/style.css',
            array('mytheme-style'),
            filemtime(get_template_directory() . '/assets/css/style.css')
        );
    }
    
    // React hydration script
    if (file_exists(get_template_directory() . '/assets/js/app.js')) {
        wp_enqueue_script(
            'mytheme-app',
            get_template_directory_uri() . '/assets/js/app.js',
            array('wp-element'),
            filemtime(get_template_directory() . '/assets/js/app.js'),
            true
        );
    }
    
    // Navigation script
    wp_enqueue_script(
        'mytheme-navigation',
        get_template_directory_uri() . '/assets/js/navigation.js',
        array(),
        $theme_version,
        true
    );
    
    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'mytheme_scripts');