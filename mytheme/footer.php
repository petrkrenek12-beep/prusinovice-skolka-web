<?php
/**
 * The template for displaying the footer
 *
 * @package MyTheme
 * @since 1.0.0
 */
?>

</main>

<?php get_template_part('template-parts/footer/site-footer-widgets'); ?>

<footer id="colophon" class="site-footer" role="contentinfo">
    <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Kontaktní informace -->
            <div>
                <h3 class="font-bold text-lg mb-4"><?php echo esc_html(mytheme_get_school_info('name')); ?></h3>
                <div class="space-y-3 text-sm" style="color: hsl(213, 20%, 45%);">
                    <div class="flex items-center space-x-2">
                        <span style="color: hsl(210, 85%, 65%);">📍</span>
                        <span><?php echo esc_html(mytheme_get_school_info('address')); ?></span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span style="color: hsl(210, 85%, 65%);">📞</span>
                        <span><?php echo esc_html(mytheme_get_school_info('phone')); ?></span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span style="color: hsl(210, 85%, 65%);">✉️</span>
                        <span><?php echo esc_html(mytheme_get_school_info('email')); ?></span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span style="color: hsl(210, 85%, 65%);">🏢</span>
                        <span><?php printf(__('IČO: %s', 'mytheme'), mytheme_get_school_info('ico')); ?></span>
                    </div>
                </div>
            </div>

            <!-- Vedení školy -->
            <div>
                <h3 class="font-bold text-lg mb-4"><?php _e('Vedení školy', 'mytheme'); ?></h3>
                <div class="space-y-3 text-sm" style="color: hsl(213, 20%, 45%);">
                    <div>
                        <p class="font-medium"><?php _e('Ředitelka', 'mytheme'); ?></p>
                        <p><?php echo esc_html(mytheme_get_school_info('principal')); ?></p>
                    </div>
                    <div>
                        <p class="font-medium"><?php _e('Zástupkyně ředitelky', 'mytheme'); ?></p>
                        <p><?php echo esc_html(mytheme_get_school_info('deputy')); ?></p>
                    </div>
                </div>
            </div>

            <!-- Kontakty služeb -->
            <div>
                <h3 class="font-bold text-lg mb-4"><?php _e('Školní služby', 'mytheme'); ?></h3>
                <div class="space-y-3 text-sm" style="color: hsl(213, 20%, 45%);">
                    <div>
                        <p class="font-medium"><?php _e('Školní jídelna', 'mytheme'); ?></p>
                        <p><?php printf(__('Tel: %s', 'mytheme'), mytheme_get_school_info('canteen_phone')); ?></p>
                    </div>
                    <div>
                        <p class="font-medium"><?php _e('Školní družina', 'mytheme'); ?></p>
                        <p><?php printf(__('Tel: %s', 'mytheme'), mytheme_get_school_info('club_phone')); ?></p>
                        <p class="text-xs"><?php _e('(7:35 a od 12:00)', 'mytheme'); ?></p>
                    </div>
                </div>
            </div>

            <!-- Zřizovatel -->
            <div>
                <h3 class="font-bold text-lg mb-4"><?php _e('Zřizovatel', 'mytheme'); ?></h3>
                <div class="space-y-3 text-sm" style="color: hsl(213, 20%, 45%);">
                    <p><?php _e('Obec Prusinovice', 'mytheme'); ?></p>
                    <div class="flex items-center space-x-2">
                        <span style="color: hsl(210, 85%, 65%);">🕐</span>
                        <span><?php _e('Úřední hodiny:', 'mytheme'); ?></span>
                    </div>
                    <p><?php _e('Pondělí: 8:00 - 17:00', 'mytheme'); ?></p>
                    <p><?php _e('Středa: 8:00 - 17:00', 'mytheme'); ?></p>
                </div>
            </div>
        </div>

        <div class="border-t mt-8 pt-8 text-center text-sm" style="border-color: hsl(213, 30%, 88%); color: hsl(213, 20%, 45%);">
            <p>&copy; <?php echo date('Y'); ?> <?php echo esc_html(mytheme_get_school_info('name')); ?>. <?php _e('Všechna práva vyhrazena.', 'mytheme'); ?></p>
            <p class="mt-2"><?php echo esc_html(mytheme_get_school_info('motto')); ?></p>
            
            <?php if (has_nav_menu('footer')) : ?>
                <nav class="footer-navigation mt-4" role="navigation" aria-label="<?php esc_attr_e('Footer navigace', 'mytheme'); ?>">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'container' => false,
                        'menu_class' => 'footer-menu flex justify-center space-x-4 text-sm',
                        'depth' => 1,
                        'fallback_cb' => false,
                        'link_before' => '',
                        'link_after' => '',
                    ));
                    ?>
                </nav>
            <?php endif; ?>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>