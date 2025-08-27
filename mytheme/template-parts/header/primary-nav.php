<?php
/**
 * Template part for displaying primary navigation
 *
 * @package MyTheme
 * @since 1.0.0
 */
?>

<nav class="sticky-nav" role="navigation" aria-label="<?php esc_attr_e('Hlavní navigace', 'mytheme'); ?>">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-3 site-branding-nav">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background-color: hsl(210, 85%, 65%);">
                    <span style="color: white; font-size: 1.5rem;">🎓</span>
                </div>
                <div>
                    <h1 class="font-bold text-lg"><?php _e('ZŠ Prusinovice', 'mytheme'); ?></h1>
                    <p class="text-sm hidden sm:block" style="color: hsl(213, 20%, 45%);"><?php echo esc_html(mytheme_get_school_info('motto')); ?></p>
                </div>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-1">
                <?php if (has_nav_menu('primary')) : ?>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'primary-menu flex items-center space-x-1',
                        'depth' => 2,
                        'fallback_cb' => 'mytheme_fallback_menu',
                        'walker' => new Mytheme_Walker_Nav_Menu(),
                    ));
                    ?>
                <?php else : ?>
                    <?php mytheme_fallback_menu(); ?>
                <?php endif; ?>
            </div>

            <!-- Mobile menu button -->
            <button class="lg:hidden mobile-menu-toggle" 
                    type="button" 
                    aria-controls="mobile-menu" 
                    aria-expanded="false"
                    style="border: 1px solid hsl(213, 30%, 88%); padding: 0.5rem; border-radius: 0.375rem; background: white;">
                <span class="sr-only"><?php _e('Otevřít hlavní menu', 'mytheme'); ?></span>
                <svg class="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <svg class="close-icon hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div class="lg:hidden mt-4 pb-4 border-t mobile-menu hidden" id="mobile-menu" style="border-color: hsl(213, 30%, 88%);">
            <div class="space-y-1 pt-4">
                <?php if (has_nav_menu('primary')) : ?>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'mobile-menu-items space-y-1',
                        'depth' => 2,
                        'fallback_cb' => 'mytheme_fallback_mobile_menu',
                        'walker' => new Mytheme_Walker_Nav_Menu_Mobile(),
                    ));
                    ?>
                <?php else : ?>
                    <?php mytheme_fallback_mobile_menu(); ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</nav>

<script>
// Simple mobile menu toggle without jQuery
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', function() {
            const isOpen = !mobileMenu.classList.contains('hidden');
            
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                toggleButton.setAttribute('aria-expanded', 'false');
            } else {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                toggleButton.setAttribute('aria-expanded', 'true');
            }
        });
    }
});
</script>

<?php
/**
 * Fallback menu for when no menu is assigned
 */
function mytheme_fallback_menu() {
    $menu_items = array(
        '/' => __('Domů', 'mytheme'),
        '/o-skole/' => __('O škole', 'mytheme'),
        '/tridy/' => __('Třídy', 'mytheme'),
        '/fotogalerie/' => __('Fotogalerie', 'mytheme'),
        '/kontakty/' => __('Kontakty', 'mytheme'),
        '/dokumenty/' => __('Dokumenty', 'mytheme'),
        '/jidelnicek/' => __('Jídelníček', 'mytheme'),
    );
    
    echo '<div class="primary-menu flex items-center space-x-1">';
    foreach ($menu_items as $url => $label) {
        $current_url = $_SERVER['REQUEST_URI'] ?? '';
        $is_current = ($url === '/' && $current_url === '/') || ($url !== '/' && strpos($current_url, $url) === 0);
        $class = $is_current ? 'nav-link active' : 'nav-link';
        echo '<a href="' . esc_url(home_url($url)) . '" class="' . $class . '">' . esc_html($label) . '</a>';
    }
    echo '</div>';
}

/**
 * Fallback mobile menu for when no menu is assigned
 */
function mytheme_fallback_mobile_menu() {
    $menu_items = array(
        '/' => __('Domů', 'mytheme'),
        '/o-skole/' => __('O škole', 'mytheme'),
        '/tridy/' => __('Třídy', 'mytheme'),
        '/fotogalerie/' => __('Fotogalerie', 'mytheme'),
        '/kontakty/' => __('Kontakty', 'mytheme'),
        '/dokumenty/' => __('Dokumenty', 'mytheme'),
        '/jidelnicek/' => __('Jídelníček', 'mytheme'),
    );
    
    echo '<div class="mobile-menu-items space-y-1">';
    foreach ($menu_items as $url => $label) {
        $current_url = $_SERVER['REQUEST_URI'] ?? '';
        $is_current = ($url === '/' && $current_url === '/') || ($url !== '/' && strpos($current_url, $url) === 0);
        $class = $is_current ? 'block px-4 py-3 rounded-lg font-medium' : 'block px-4 py-3 rounded-lg hover:bg-gray-100';
        if ($is_current) {
            $class .= ' text-primary';
        }
        echo '<a href="' . esc_url(home_url($url)) . '" class="' . $class . '">' . esc_html($label) . '</a>';
    }
    echo '</div>';
}

/**
 * Custom Walker for primary navigation
 */
class Mytheme_Walker_Nav_Menu extends Walker_Nav_Menu {
    
    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"sub-menu absolute top-full left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-50 hidden group-hover:block\">\n";
    }
    
    function end_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul>\n";
    }
    
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        
        if ($depth === 0) {
            $class_names = $class_names ? ' class="' . esc_attr($class_names) . ' nav-item relative group"' : ' class="nav-item relative group"';
        } else {
            $class_names = $class_names ? ' class="' . esc_attr($class_names) . ' sub-menu-item"' : ' class="sub-menu-item"';
        }
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $output .= $indent . '<li' . $id . $class_names .'>';
        
        $attributes = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target) ? ' target="' . esc_attr($item->target) .'"' : '';
        $attributes .= ! empty($item->xfn) ? ' rel="'    . esc_attr($item->xfn) .'"' : '';
        $attributes .= ! empty($item->url) ? ' href="'   . esc_attr($item->url) .'"' : '';
        
        if ($depth === 0) {
            $link_class = in_array('current-menu-item', $classes) ? 'nav-link active' : 'nav-link';
            $attributes .= ' class="' . $link_class . '"';
        } else {
            $link_class = in_array('current-menu-item', $classes) ? 'block px-4 py-2 text-sm rounded-lg bg-primary text-white' : 'block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg mx-2';
            $attributes .= ' class="' . $link_class . '"';
        }
        
        $item_output = $args->before ?? '';
        $item_output .= '<a' . $attributes .'>';
        $item_output .= ($args->link_before ?? '') . apply_filters('the_title', $item->title, $item->ID) . ($args->link_after ?? '');
        $item_output .= '</a>';
        $item_output .= $args->after ?? '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
    
    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= "</li>\n";
    }
}

/**
 * Custom Walker for mobile navigation
 */
class Mytheme_Walker_Nav_Menu_Mobile extends Walker_Nav_Menu {
    
    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<div class=\"ml-8 mt-2 space-y-1 submenu-mobile\">\n";
    }
    
    function end_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</div>\n";
    }
    
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $attributes = ! empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target) ? ' target="' . esc_attr($item->target) .'"' : '';
        $attributes .= ! empty($item->xfn) ? ' rel="'    . esc_attr($item->xfn) .'"' : '';
        $attributes .= ! empty($item->url) ? ' href="'   . esc_attr($item->url) .'"' : '';
        
        if ($depth === 0) {
            $link_class = in_array('current-menu-item', $classes) ? 'flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary text-white font-medium' : 'flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100';
        } else {
            $link_class = in_array('current-menu-item', $classes) ? 'block px-4 py-2 text-sm rounded-lg bg-primary text-white font-medium' : 'block px-4 py-2 text-sm rounded-lg hover:bg-gray-100';
        }
        
        $attributes .= ' class="' . $link_class . '"';
        
        $item_output = $args->before ?? '';
        $item_output .= '<a' . $attributes .'>';
        
        // Add icons for main menu items in mobile
        if ($depth === 0) {
            $icons = array(
                'domů' => '🏠',
                'o škole' => '🎓', 
                'třídy' => '👥',
                'fotogalerie' => '📷',
                'kontakty' => '📞',
                'dokumenty' => '📄',
                'jídelníček' => '🍽️'
            );
            $title_lower = strtolower($item->title);
            $icon = $icons[$title_lower] ?? '📄';
            $item_output .= '<span>' . $icon . '</span>';
        }
        
        $item_output .= '<span>' . apply_filters('the_title', $item->title, $item->ID) . '</span>';
        $item_output .= '</a>';
        $item_output .= $args->after ?? '';
        
        $output .= $indent . $item_output . "\n";
    }
}