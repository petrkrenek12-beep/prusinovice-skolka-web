<?php
/**
 * The template for displaying all single posts
 *
 * @package MyTheme
 * @since 1.0.0
 */

get_header(); ?>

<main id="content" class="min-h-screen">
    <div class="container mx-auto px-4 py-20">
        
        <?php mytheme_breadcrumbs(); ?>
        
        <?php
        while (have_posts()) :
            the_post();
            get_template_part('template-parts/content/content-single');
            
            // Post navigation
            mytheme_post_navigation();
            
            // If comments are open or there are comments, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
            
        endwhile;
        ?>
    </div>
</main>

<?php
get_sidebar();
get_footer();