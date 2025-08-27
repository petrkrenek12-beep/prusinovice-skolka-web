<?php
/**
 * The template for displaying all pages
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
            get_template_part('template-parts/content/content-page');
            
        endwhile;
        ?>
    </div>
</main>

<?php
get_sidebar();
get_footer();