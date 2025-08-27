<?php
/**
 * The main template file
 *
 * @package MyTheme
 * @since 1.0.0
 */

get_header(); ?>

<main id="content" class="min-h-screen">
    <div class="container mx-auto px-4 py-20">
        <?php if (have_posts()) : ?>
            
            <header class="page-header mb-16 text-center fade-in">
                <?php if (is_home() && !is_front_page()) : ?>
                    <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        <?php single_post_title(); ?>
                    </h1>
                <?php elseif (is_category()) : ?>
                    <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        <?php printf(__('Kategorie: %s', 'mytheme'), single_cat_title('', false)); ?>
                    </h1>
                    <?php if (category_description()) : ?>
                        <div class="text-lg text-muted-foreground">
                            <?php echo category_description(); ?>
                        </div>
                    <?php endif; ?>
                <?php elseif (is_tag()) : ?>
                    <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        <?php printf(__('Štítek: %s', 'mytheme'), single_tag_title('', false)); ?>
                    </h1>
                <?php elseif (is_author()) : ?>
                    <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        <?php printf(__('Autor: %s', 'mytheme'), get_the_author()); ?>
                    </h1>
                <?php elseif (is_date()) : ?>
                    <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        <?php
                        if (is_year()) {
                            printf(__('Rok: %s', 'mytheme'), get_the_date('Y'));
                        } elseif (is_month()) {
                            printf(__('Měsíc: %s', 'mytheme'), get_the_date('F Y'));
                        } else {
                            printf(__('Den: %s', 'mytheme'), get_the_date());
                        }
                        ?>
                    </h1>
                <?php else : ?>
                    <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        <?php _e('Blog', 'mytheme'); ?>
                    </h1>
                    <p class="text-lg text-muted-foreground">
                        <?php _e('Nejnovější příspěvky a aktuality ze školy', 'mytheme'); ?>
                    </p>
                <?php endif; ?>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                while (have_posts()) :
                    the_post();
                    get_template_part('template-parts/content/content');
                endwhile;
                ?>
            </div>

            <?php
            // Custom pagination
            $pagination = paginate_links(array(
                'prev_text' => '← ' . __('Předchozí', 'mytheme'),
                'next_text' => __('Další', 'mytheme') . ' →',
                'type' => 'array',
                'before_page_number' => '<span class="screen-reader-text">' . __('Stránka', 'mytheme') . ' </span>',
            ));

            if ($pagination) :
            ?>
                <nav class="pagination-wrapper mt-16 fade-in" role="navigation" aria-label="<?php esc_attr_e('Stránkování příspěvků', 'mytheme'); ?>">
                    <ul class="pagination flex justify-center items-center space-x-2">
                        <?php foreach ($pagination as $page) : ?>
                            <li class="page-item">
                                <?php echo $page; ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
            <?php endif; ?>

        <?php else : ?>
            <?php get_template_part('template-parts/content/content-none'); ?>
        <?php endif; ?>
    </div>
</main>

<?php
get_sidebar();
get_footer();