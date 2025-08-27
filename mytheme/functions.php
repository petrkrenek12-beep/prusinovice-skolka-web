<?php
/**
 * MyTheme functions and definitions
 *
 * @package MyTheme
 * @since 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define theme constants
define('MYTHEME_VERSION', '1.0.0');
define('MYTHEME_PATH', get_template_directory());
define('MYTHEME_URL', get_template_directory_uri());

/**
 * Load theme textdomain for translations
 */
function mytheme_load_textdomain() {
    load_theme_textdomain('mytheme', MYTHEME_PATH . '/languages');
}
add_action('after_setup_theme', 'mytheme_load_textdomain');

/**
 * Include theme setup and functionality
 */
require_once MYTHEME_PATH . '/inc/setup.php';
require_once MYTHEME_PATH . '/inc/enqueue.php';
require_once MYTHEME_PATH . '/inc/widgets.php';
require_once MYTHEME_PATH . '/inc/template-tags.php';
require_once MYTHEME_PATH . '/inc/blocks.php';
require_once MYTHEME_PATH . '/inc/custom-post-types.php';
require_once MYTHEME_PATH . '/inc/custom-taxonomies.php';

/**
 * Custom function to get featured image with fallback
 */
function mytheme_get_featured_image($post_id = null, $size = 'large', $fallback = true) {
    $post_id = $post_id ?: get_the_ID();
    
    if (has_post_thumbnail($post_id)) {
        return get_the_post_thumbnail_url($post_id, $size);
    }
    
    if ($fallback) {
        return MYTHEME_URL . '/assets/img/school-hero.jpg';
    }
    
    return false;
}

/**
 * Custom excerpt function with better control
 */
function mytheme_get_excerpt($post_id = null, $length = 25) {
    $post_id = $post_id ?: get_the_ID();
    $excerpt = get_the_excerpt($post_id);
    
    if (!$excerpt) {
        $content = get_post_field('post_content', $post_id);
        $excerpt = wp_trim_words(strip_shortcodes($content), $length);
    }
    
    return $excerpt;
}

/**
 * Get reading time estimate
 */
function mytheme_get_reading_time($post_id = null) {
    $post_id = $post_id ?: get_the_ID();
    $content = get_post_field('post_content', $post_id);
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200); // Average reading speed
    
    return max(1, $reading_time);
}

/**
 * Custom breadcrumbs function
 */
function mytheme_breadcrumbs() {
    if (is_front_page()) {
        return;
    }
    
    $breadcrumbs = array();
    $breadcrumbs[] = '<a href="' . home_url('/') . '">' . __('Domů', 'mytheme') . '</a>';
    
    if (is_category() || is_single()) {
        $category = get_the_category();
        if ($category) {
            $breadcrumbs[] = '<a href="' . get_category_link($category[0]->term_id) . '">' . $category[0]->name . '</a>';
        }
    }
    
    if (is_single()) {
        $breadcrumbs[] = get_the_title();
    } elseif (is_page()) {
        $breadcrumbs[] = get_the_title();
    } elseif (is_category()) {
        $breadcrumbs[] = single_cat_title('', false);
    } elseif (is_tag()) {
        $breadcrumbs[] = single_tag_title('', false);
    } elseif (is_404()) {
        $breadcrumbs[] = __('404 - Stránka nenalezena', 'mytheme');
    }
    
    if (!empty($breadcrumbs)) {
        echo '<div class="breadcrumbs" role="navigation" aria-label="' . esc_attr__('Navigace stránkami', 'mytheme') . '">';
        echo implode(' / ', $breadcrumbs);
        echo '</div>';
    }
}

/**
 * Custom post navigation
 */
function mytheme_post_navigation() {
    $prev_post = get_previous_post();
    $next_post = get_next_post();
    
    if (!$prev_post && !$next_post) {
        return;
    }
    
    echo '<nav class="post-navigation" role="navigation" aria-label="' . esc_attr__('Navigace mezi příspěvky', 'mytheme') . '">';
    echo '<div class="nav-links flex justify-between items-center">';
    
    if ($prev_post) {
        echo '<div class="nav-previous">';
        echo '<a href="' . get_permalink($prev_post) . '" class="btn-school-primary">';
        echo '← ' . esc_html__('Předchozí příspěvek', 'mytheme');
        echo '</a>';
        echo '</div>';
    }
    
    if ($next_post) {
        echo '<div class="nav-next">';
        echo '<a href="' . get_permalink($next_post) . '" class="btn-school-primary">';
        echo esc_html__('Další příspěvek', 'mytheme') . ' →';
        echo '</a>';
        echo '</div>';
    }
    
    echo '</div>';
    echo '</nav>';
}

/**
 * Get school contact information
 */
function mytheme_get_school_info($key = '') {
    $school_info = array(
        'name' => __('Základní škola Prusinovice', 'mytheme'),
        'address' => __('Hlavní 77, 768 42 Prusinovice', 'mytheme'),
        'phone' => '573 386 139',
        'mobile' => '702 021 879',
        'email' => 'reditelka@zsprus.cz',
        'ico' => '75024985',
        'principal' => __('Mgr. Ivona Kratochvílová', 'mytheme'),
        'deputy' => __('Mgr. Petra Zicháčková', 'mytheme'),
        'canteen_phone' => '702 047 927',
        'club_phone' => '601 595 104',
        'motto' => __('Malá škola s velkým srdcem', 'mytheme'),
        'capacity' => '110',
        'current_students' => '65',
        'grades' => '1.-5.',
        'teachers_count' => '7'
    );
    
    if ($key && isset($school_info[$key])) {
        return $school_info[$key];
    }
    
    return $key ? '' : $school_info;
}

/**
 * Get teachers list
 */
function mytheme_get_teachers() {
    return array(
        1 => array(
            'name' => __('Mgr. Petra Zicháčková', 'mytheme'),  
            'grade' => __('1. ročník', 'mytheme'),
            'role' => __('Třídní učitelka', 'mytheme')
        ),
        2 => array(
            'name' => __('Mgr. Eva Benešová', 'mytheme'),
            'grade' => __('2. ročník', 'mytheme'),
            'role' => __('Třídní učitelka', 'mytheme')
        ),
        3 => array(
            'name' => __('Mgr. Martina Ševčíková', 'mytheme'),
            'grade' => __('3. ročník', 'mytheme'),
            'role' => __('Třídní učitelka', 'mytheme')
        ),
        4 => array(
            'name' => __('Mgr. Michaela Vrubelová', 'mytheme'),
            'grade' => __('4. ročník', 'mytheme'),
            'role' => __('Třídní učitelka', 'mytheme')
        ),
        5 => array(
            'name' => __('Mgr. Jarmila Kratinohová', 'mytheme'),
            'grade' => __('5. ročník', 'mytheme'),
            'role' => __('Třídní učitelka', 'mytheme')
        )
    );
}

/**
 * Handle React hydration point
 */
function mytheme_react_hydration_point($component, $props = array()) {
    $data = wp_json_encode($props);
    echo '<div data-component="' . esc_attr($component) . '" data-props="' . esc_attr($data) . '"></div>';
}

/**
 * Custom login page styling
 */
function mytheme_login_styles() {
    wp_enqueue_style('mytheme-login', MYTHEME_URL . '/assets/css/login.css', array(), MYTHEME_VERSION);
}
add_action('login_enqueue_scripts', 'mytheme_login_styles');

/**
 * Customize login logo URL
 */
function mytheme_login_logo_url() {
    return home_url();
}
add_filter('login_headerurl', 'mytheme_login_logo_url');

/**
 * Customize login logo title
 */
function mytheme_login_logo_url_title() {
    return mytheme_get_school_info('name');
}
add_filter('login_headertext', 'mytheme_login_logo_url_title');