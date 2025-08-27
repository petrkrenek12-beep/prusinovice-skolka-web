<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @package MyTheme
 * @since 1.0.0
 */
?>

<section class="no-results not-found fade-in">
    <div class="container mx-auto px-4 py-20 text-center">
        <div class="max-w-2xl mx-auto">
            
            <div class="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center" style="background-color: hsl(210, 85%, 65%, 0.1);">
                <span style="color: hsl(210, 85%, 65%); font-size: 3rem;">🔍</span>
            </div>
            
            <header class="page-header mb-8">
                <h1 class="page-title text-3xl md:text-4xl font-bold mb-4">
                    <?php if (is_search()) : ?>
                        <?php printf(__('Výsledky hledání pro: %s', 'mytheme'), '<span class="text-primary">' . get_search_query() . '</span>'); ?>
                    <?php else : ?>
                        <?php _e('Nic nenalezeno', 'mytheme'); ?>
                    <?php endif; ?>
                </h1>
            </header>

            <div class="page-content">
                <?php if (is_home() && current_user_can('publish_posts')) : ?>
                    <p class="text-lg mb-6" style="color: hsl(213, 20%, 45%);">
                        <?php printf(__('Jste připraveni publikovat svůj první příspěvek? <a href="%1$s" class="text-primary hover:underline">Začněte zde</a>.', 'mytheme'), esc_url(admin_url('post-new.php'))); ?>
                    </p>

                <?php elseif (is_search()) : ?>
                    <p class="text-lg mb-6" style="color: hsl(213, 20%, 45%);">
                        <?php _e('Omlouváme se, ale nic neodpovídá vašemu hledání. Zkuste to prosím znovu s jinými klíčovými slovy.', 'mytheme'); ?>
                    </p>
                    
                    <div class="search-form-wrapper max-w-md mx-auto mb-8">
                        <?php get_search_form(); ?>
                    </div>
                    
                    <div class="search-suggestions">
                        <h3 class="text-xl font-bold mb-4"><?php _e('Možná vás bude zajímat:', 'mytheme'); ?></h3>
                        <div class="flex flex-wrap justify-center gap-2">
                            <a href="<?php echo esc_url(home_url('/o-skole/')); ?>" class="suggestion-link inline-block px-3 py-2 text-sm rounded-lg hover:underline" style="background-color: hsl(210, 85%, 65%, 0.1); color: hsl(210, 85%, 65%);">
                                <?php _e('O škole', 'mytheme'); ?>
                            </a>
                            <a href="<?php echo esc_url(home_url('/tridy/')); ?>" class="suggestion-link inline-block px-3 py-2 text-sm rounded-lg hover:underline" style="background-color: hsl(142, 45%, 75%, 0.1); color: hsl(142, 45%, 75%);">
                                <?php _e('Třídy', 'mytheme'); ?>
                            </a>
                            <a href="<?php echo esc_url(home_url('/kontakty/')); ?>" class="suggestion-link inline-block px-3 py-2 text-sm rounded-lg hover:underline" style="background-color: hsl(48, 95%, 75%, 0.1); color: hsl(48, 95%, 75%);">
                                <?php _e('Kontakty', 'mytheme'); ?>
                            </a>
                            <a href="<?php echo esc_url(home_url('/dokumenty/')); ?>" class="suggestion-link inline-block px-3 py-2 text-sm rounded-lg hover:underline" style="background-color: hsl(210, 85%, 65%, 0.1); color: hsl(210, 85%, 65%);">
                                <?php _e('Dokumenty', 'mytheme'); ?>
                            </a>
                        </div>
                    </div>

                <?php else : ?>
                    <p class="text-lg mb-6" style="color: hsl(213, 20%, 45%);">
                        <?php _e('Zdá se, že na této stránce nelze najít to, co hledáte. Možná pomůže hledání níže.', 'mytheme'); ?>
                    </p>
                    
                    <div class="search-form-wrapper max-w-md mx-auto mb-8">
                        <?php get_search_form(); ?>
                    </div>

                <?php endif; ?>
                
                <!-- Recent posts -->
                <?php
                $recent_posts = new WP_Query(array(
                    'posts_per_page' => 3,
                    'post_status' => 'publish',
                    'ignore_sticky_posts' => true
                ));

                if ($recent_posts->have_posts()) :
                ?>
                    <div class="recent-posts-section mt-12">
                        <h3 class="text-xl font-bold mb-6"><?php _e('Nejnovější příspěvky:', 'mytheme'); ?></h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <?php while ($recent_posts->have_posts()) : $recent_posts->the_post(); ?>
                                <div class="recent-post school-card text-left">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <div class="post-thumbnail mb-3">
                                            <a href="<?php the_permalink(); ?>">
                                                <?php the_post_thumbnail('medium', array('class' => 'w-full h-32 object-cover rounded-lg')); ?>
                                            </a>
                                        </div>
                                    <?php endif; ?>
                                    <h4 class="font-bold mb-2">
                                        <a href="<?php the_permalink(); ?>" class="hover:text-primary"><?php the_title(); ?></a>
                                    </h4>
                                    <p class="text-sm mb-3" style="color: hsl(213, 20%, 45%);">
                                        <?php echo mytheme_get_excerpt(get_the_ID(), 12); ?>
                                    </p>
                                    <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-sm hover:text-primary">
                                        <?php _e('Číst více', 'mytheme'); ?>
                                        <span style="margin-left: 0.5rem;">→</span>
                                    </a>
                                </div>
                            <?php endwhile; wp_reset_postdata(); ?>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="mt-8">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-school-primary">
                    <?php _e('Zpět na hlavní stránku', 'mytheme'); ?>
                    <span style="margin-left: 0.5rem;">🏠</span>
                </a>
            </div>
            
        </div>
    </div>
</section>