<?php
/**
 * Template part for displaying single posts
 *
 * @package MyTheme
 * @since 1.0.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('fade-in'); ?>>
    
    <header class="entry-header mb-8 text-center">
        <?php the_title('<h1 class="entry-title text-4xl md:text-5xl font-bold mb-6">', '</h1>'); ?>
        
        <div class="entry-meta text-lg" style="color: hsl(213, 20%, 45%);">
            <time class="published" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                <?php echo get_the_date(); ?>
            </time>
            
            <?php if (get_the_author()) : ?>
                <span class="byline">
                    • <?php printf(__('Autor: %s', 'mytheme'), '<span class="author vcard font-medium">' . esc_html(get_the_author()) . '</span>'); ?>
                </span>
            <?php endif; ?>
            
            <?php if (mytheme_get_reading_time()) : ?>
                <span class="reading-time">
                    • <?php printf(_n('%d minuta čtení', '%d minut čtení', mytheme_get_reading_time(), 'mytheme'), mytheme_get_reading_time()); ?>
                </span>
            <?php endif; ?>
        </div>
        
        <?php if (has_category()) : ?>
            <div class="post-categories mt-4">
                <?php
                $categories = get_the_category();
                foreach ($categories as $category) {
                    echo '<a href="' . esc_url(get_category_link($category->term_id)) . '" class="category-tag inline-block px-3 py-1 text-sm rounded-full mr-2 hover:underline" style="background-color: hsl(210, 85%, 65%, 0.1); color: hsl(210, 85%, 65%);">';
                    echo esc_html($category->name);
                    echo '</a>';
                }
                ?>
            </div>
        <?php endif; ?>
    </header>

    <?php if (has_post_thumbnail()) : ?>
        <div class="post-thumbnail mb-8">
            <?php 
            the_post_thumbnail('large', array(
                'class' => 'w-full h-auto rounded-xl',
                'alt' => the_title_attribute(array('echo' => false)),
            ));
            ?>
        </div>
    <?php endif; ?>

    <div class="entry-content prose prose-lg max-w-none">
        <?php
        the_content();
        
        wp_link_pages(array(
            'before' => '<div class="page-links mt-8 p-4 rounded-lg" style="background-color: hsl(210, 40%, 96%);"><strong>' . esc_html__('Stránky:', 'mytheme') . '</strong>',
            'after'  => '</div>',
            'link_before' => '<span class="page-link inline-block px-3 py-1 mx-1 rounded" style="background-color: white; border: 1px solid hsl(213, 30%, 88%);">',
            'link_after' => '</span>',
        ));
        ?>
    </div>

    <footer class="entry-footer mt-12 pt-8" style="border-top: 1px solid hsl(213, 30%, 88%);">
        <?php
        $tags = get_the_tags();
        if ($tags) {
            echo '<div class="post-tags mb-6">';
            echo '<h3 class="font-bold text-lg mb-3">' . __('Štítky:', 'mytheme') . '</h3>';
            echo '<div class="flex flex-wrap gap-2">';
            foreach ($tags as $tag) {
                echo '<a href="' . esc_url(get_tag_link($tag->term_id)) . '" class="tag-link inline-block px-3 py-2 text-sm rounded-lg hover:underline transition-colors" style="background-color: hsl(142, 45%, 75%, 0.1); color: hsl(142, 45%, 75%); border: 1px solid hsl(142, 45%, 75%, 0.2);">';
                echo esc_html($tag->name);
                echo '</a>';
            }
            echo '</div>';
            echo '</div>';
        }
        ?>
        
        <!-- Social sharing -->
        <div class="social-sharing mb-6">
            <h3 class="font-bold text-lg mb-3"><?php _e('Sdílet:', 'mytheme'); ?></h3>
            <div class="flex space-x-3">
                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" 
                   target="_blank" 
                   rel="noopener"
                   class="share-button inline-flex items-center px-4 py-2 text-sm rounded-lg hover:opacity-80 transition-opacity"
                   style="background-color: #1877f2; color: white;">
                    <?php _e('Facebook', 'mytheme'); ?>
                </a>
                <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" 
                   target="_blank" 
                   rel="noopener"
                   class="share-button inline-flex items-center px-4 py-2 text-sm rounded-lg hover:opacity-80 transition-opacity"
                   style="background-color: #1da1f2; color: white;">
                    <?php _e('Twitter', 'mytheme'); ?>
                </a>
                <a href="mailto:?subject=<?php echo urlencode(get_the_title()); ?>&body=<?php echo urlencode(get_permalink()); ?>" 
                   class="share-button inline-flex items-center px-4 py-2 text-sm rounded-lg hover:opacity-80 transition-opacity"
                   style="background-color: hsl(213, 20%, 45%); color: white;">
                    <?php _e('Email', 'mytheme'); ?>
                </a>
            </div>
        </div>
        
        <!-- Author bio (if available) -->
        <?php if (get_the_author_meta('description')) : ?>
            <div class="author-bio p-6 rounded-lg" style="background-color: hsl(210, 40%, 96%);">
                <div class="flex items-start space-x-4">
                    <?php echo get_avatar(get_the_author_meta('ID'), 64, '', '', array('class' => 'rounded-full')); ?>
                    <div>
                        <h3 class="font-bold text-lg mb-2"><?php echo esc_html(get_the_author()); ?></h3>
                        <p style="color: hsl(213, 20%, 45%);"><?php echo wp_kses_post(get_the_author_meta('description')); ?></p>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </footer>
    
</article>