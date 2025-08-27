<?php
/**
 * Template part for displaying posts
 *
 * @package MyTheme
 * @since 1.0.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('fade-in school-card'); ?>>
    
    <?php if (has_post_thumbnail()) : ?>
        <div class="post-thumbnail mb-4">
            <a href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
                <?php 
                the_post_thumbnail('medium', array(
                    'class' => 'w-full h-48 object-cover rounded-lg',
                    'alt' => the_title_attribute(array('echo' => false)),
                ));
                ?>
            </a>
        </div>
    <?php endif; ?>
    
    <header class="entry-header mb-4">
        <?php
        if (is_singular()) :
            the_title('<h1 class="entry-title text-2xl md:text-3xl font-bold mb-4">', '</h1>');
        else :
            the_title('<h2 class="entry-title text-xl font-bold mb-2"><a href="' . esc_url(get_permalink()) . '" class="hover:text-primary">', '</a></h2>');
        endif;
        ?>
        
        <div class="entry-meta text-sm" style="color: hsl(213, 20%, 45%);">
            <time class="published" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                <?php echo get_the_date(); ?>
            </time>
            
            <?php if (get_the_author()) : ?>
                <span class="byline">
                    • <?php printf(__('Autor: %s', 'mytheme'), '<span class="author vcard">' . esc_html(get_the_author()) . '</span>'); ?>
                </span>
            <?php endif; ?>
            
            <?php if (!is_singular() && mytheme_get_reading_time()) : ?>
                <span class="reading-time">
                    • <?php printf(_n('%d minuta čtení', '%d minut čtení', mytheme_get_reading_time(), 'mytheme'), mytheme_get_reading_time()); ?>
                </span>
            <?php endif; ?>
            
            <?php if (has_category()) : ?>
                <div class="post-categories mt-2">
                    <?php
                    $categories = get_the_category();
                    foreach ($categories as $category) {
                        echo '<span class="category-tag inline-block px-2 py-1 text-xs rounded" style="background-color: hsl(210, 85%, 65%, 0.1); color: hsl(210, 85%, 65%); margin-right: 0.5rem;">';
                        echo '<a href="' . esc_url(get_category_link($category->term_id)) . '" class="hover:underline">' . esc_html($category->name) . '</a>';
                        echo '</span>';
                    }
                    ?>
                </div>
            <?php endif; ?>
        </div>
    </header>

    <div class="entry-content">
        <?php
        if (is_singular()) {
            the_content(sprintf(
                wp_kses(
                    __('Pokračovat ve čtení<span class="screen-reader-text"> "%s"</span>', 'mytheme'),
                    array(
                        'span' => array(
                            'class' => array(),
                        ),
                    )
                ),
                wp_kses_post(get_the_title())
            ));
            
            wp_link_pages(array(
                'before' => '<div class="page-links">' . esc_html__('Stránky:', 'mytheme'),
                'after'  => '</div>',
            ));
        } else {
            echo '<div class="entry-summary mb-4" style="color: hsl(213, 20%, 45%);">';
            echo mytheme_get_excerpt(get_the_ID(), 25);
            echo '</div>';
            
            echo '<a href="' . esc_url(get_permalink()) . '" class="read-more-link inline-flex items-center text-sm hover:text-primary">';
            _e('Číst více', 'mytheme');
            echo '<span style="margin-left: 0.5rem;">→</span>';
            echo '</a>';
        }
        ?>
    </div>

    <?php if (is_singular() && (has_tag() || get_the_tags())) : ?>
        <footer class="entry-footer mt-6 pt-4" style="border-top: 1px solid hsl(213, 30%, 88%);">
            <?php
            $tags = get_the_tags();
            if ($tags) {
                echo '<div class="post-tags">';
                echo '<span class="tags-label font-medium">' . __('Štítky:', 'mytheme') . ' </span>';
                foreach ($tags as $tag) {
                    echo '<a href="' . esc_url(get_tag_link($tag->term_id)) . '" class="tag-link inline-block px-2 py-1 text-xs rounded mr-2 mb-1 hover:underline" style="background-color: hsl(142, 45%, 75%, 0.1); color: hsl(142, 45%, 75%);">';
                    echo esc_html($tag->name);
                    echo '</a>';
                }
                echo '</div>';
            }
            ?>
        </footer>
    <?php endif; ?>
    
</article>