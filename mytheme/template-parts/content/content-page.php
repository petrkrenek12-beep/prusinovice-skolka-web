<?php
/**
 * Template part for displaying page content
 *
 * @package MyTheme
 * @since 1.0.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('fade-in'); ?>>
    
    <header class="entry-header mb-8 text-center">
        <?php the_title('<h1 class="entry-title text-4xl md:text-5xl font-bold mb-6">', '</h1>'); ?>
        
        <?php if (has_excerpt()) : ?>
            <div class="page-excerpt text-xl" style="color: hsl(213, 20%, 45%); max-width: 48rem; margin-left: auto; margin-right: auto;">
                <?php the_excerpt(); ?>
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

    <?php if (comments_open() || get_comments_number()) : ?>
        <footer class="entry-footer mt-12 pt-8" style="border-top: 1px solid hsl(213, 30%, 88%);">
            <?php comments_template(); ?>
        </footer>
    <?php endif; ?>
    
</article>