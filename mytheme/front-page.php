<?php
/**
 * The front page template file - Homepage for school website
 *
 * @package MyTheme
 * @since 1.0.0
 */

get_header(); ?>

<main id="content" class="min-h-screen">
    <!-- Hero sekce -->
    <section class="hero-section flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-black-20"></div>
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('<?php echo esc_url(mytheme_get_featured_image(get_the_ID(), 'full')); ?>')"></div>
        
        <div class="container mx-auto px-4 relative" style="z-index: 10;">
            <div class="fade-in text-center" style="max-width: 64rem; margin-left: auto; margin-right: auto;">
                <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
                    <?php _e('Vítejte na stránkách', 'mytheme'); ?>
                    <span class="block text-gradient"><?php echo esc_html(mytheme_get_school_info('name')); ?></span>
                </h1>
                <p class="text-xl text-white mb-8 font-medium" style="opacity: 0.9;">
                    <?php echo esc_html(mytheme_get_school_info('motto')); ?>
                </p>
                <p class="text-lg text-white mb-12" style="max-width: 32rem; margin-left: auto; margin-right: auto; opacity: 0.8;">
                    <?php _e('Moderní vzdělávání s individuálním přístupem v příjemném prostředí malotřídní školy', 'mytheme'); ?>
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('o-skole'))); ?>" class="btn-school-primary">
                        <?php _e('Prozkoumat školu', 'mytheme'); ?>
                        <span style="margin-left: 0.5rem;">→</span>
                    </a>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('kontakty'))); ?>" class="btn-school-primary" style="background-color: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.3);">
                        <?php _e('Kontaktujte nás', 'mytheme'); ?>
                        <span style="margin-left: 0.5rem;">📞</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- O škole sekce -->
    <section class="py-20" style="background: linear-gradient(180deg, white 0%, hsl(210, 40%, 98%) 100%);">
        <div class="container mx-auto px-4">
            <div class="fade-in text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    <?php _e('Naše škola v číslech', 'mytheme'); ?>
                </h2>
                <p class="text-lg" style="max-width: 32rem; margin-left: auto; margin-right: auto; color: hsl(213, 20%, 45%);">
                    <?php _e('Malotřídní základní škola pro 1. stupeň s moderním vybavením a kvalitním zázemím', 'mytheme'); ?>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div class="fade-in school-card text-center">
                    <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: hsl(210, 85%, 65%, 0.1);">
                        <span style="color: hsl(210, 85%, 65%); font-size: 2rem;">👥</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-2"><?php echo esc_html(mytheme_get_school_info('current_students')); ?></h3>
                    <p style="color: hsl(213, 20%, 45%);"><?php _e('Současných žáků', 'mytheme'); ?></p>
                </div>

                <div class="fade-in school-card text-center">
                    <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: hsl(142, 45%, 75%, 0.1);">
                        <span style="color: hsl(142, 45%, 75%); font-size: 2rem;">📚</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">5</h3>
                    <p style="color: hsl(213, 20%, 45%);"><?php _e('Ročníků (1. - 5.)', 'mytheme'); ?></p>
                </div>

                <div class="fade-in school-card text-center">
                    <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: hsl(48, 95%, 75%, 0.1);">
                        <span style="color: hsl(48, 95%, 75%); font-size: 2rem;">⭐</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-2"><?php echo esc_html(mytheme_get_school_info('capacity')); ?></h3>
                    <p style="color: hsl(213, 20%, 45%);"><?php _e('Maximální kapacita', 'mytheme'); ?></p>
                </div>

                <div class="fade-in school-card text-center">
                    <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style="background-color: hsl(210, 85%, 65%, 0.1);">
                        <span style="color: hsl(210, 85%, 65%); font-size: 2rem;">❤️</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-2"><?php echo esc_html(mytheme_get_school_info('teachers_count')); ?></h3>
                    <p style="color: hsl(213, 20%, 45%);"><?php _e('Zkušených pedagogů', 'mytheme'); ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Proč si vybrat naši školu -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="fade-in text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    <?php _e('Proč si vybrat naši školu', 'mytheme'); ?>
                </h2>
                <p class="text-lg" style="max-width: 32rem; margin-left: auto; margin-right: auto; color: hsl(213, 20%, 45%);">
                    <?php _e('Poskytujeme kvalitní vzdělání s individuálním přístupem v bezpečném a přátelském prostředí', 'mytheme'); ?>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="fade-in school-card" style="border-color: hsl(210, 85%, 65%, 0.2);">
                    <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4" style="background-color: hsl(210, 85%, 65%, 0.1);">
                        <span style="color: hsl(210, 85%, 65%); font-size: 2rem;">💻</span>
                    </div>
                    <h3 class="text-xl font-bold mb-4"><?php _e('Moderní vybavení', 'mytheme'); ?></h3>
                    <p style="color: hsl(213, 20%, 45%);">
                        <?php _e('Interaktivní tabule, počítačová učebna, notebooky a tablety pro každého žáka. Moderní technologie podporují efektivní a zajímavé vyučování.', 'mytheme'); ?>
                    </p>
                </div>

                <div class="fade-in school-card" style="border-color: hsl(142, 45%, 75%, 0.2);">
                    <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4" style="background-color: hsl(142, 45%, 75%, 0.1);">
                        <span style="color: hsl(142, 45%, 75%); font-size: 2rem;">👥</span>
                    </div>
                    <h3 class="text-xl font-bold mb-4"><?php _e('Individuální přístup', 'mytheme'); ?></h3>
                    <p style="color: hsl(213, 20%, 45%);">
                        <?php _e('Malé třídy umožňují učitelům věnovat se každému žákovi individuálně. Podporujeme talent každého dítěte a pomáháme překonávat obtíže.', 'mytheme'); ?>
                    </p>
                </div>

                <div class="fade-in school-card" style="border-color: hsl(48, 95%, 75%, 0.2);">
                    <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4" style="background-color: hsl(48, 95%, 75%, 0.1);">
                        <span style="color: hsl(48, 95%, 75%); font-size: 2rem;">🛡️</span>
                    </div>
                    <h3 class="text-xl font-bold mb-4"><?php _e('Bezpečné prostředí', 'mytheme'); ?></h3>
                    <p style="color: hsl(213, 20%, 45%);">
                        <?php _e('Klidné venkovské prostředí, částečně bezbariérový přístup, školní družina a jídelna. Vaše děti jsou u nás v bezpečí.', 'mytheme'); ?>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Aktuality -->
    <section class="py-20" style="background: linear-gradient(180deg, hsl(210, 40%, 98%) 0%, white 100%);">
        <div class="container mx-auto px-4">
            <div class="fade-in text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    <?php _e('Aktuality ze školy', 'mytheme'); ?>
                </h2>
                <p class="text-lg" style="color: hsl(213, 20%, 45%);">
                    <?php _e('Sledujte nejnovější události a důležitá oznámení', 'mytheme'); ?>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $recent_posts = new WP_Query(array(
                    'posts_per_page' => 3,
                    'post_status' => 'publish'
                ));

                if ($recent_posts->have_posts()) :
                    while ($recent_posts->have_posts()) : $recent_posts->the_post();
                ?>
                    <article class="fade-in school-card">
                        <header class="mb-4">
                            <h3 class="text-lg font-bold mb-2">
                                <a href="<?php the_permalink(); ?>" class="hover:text-primary"><?php the_title(); ?></a>
                            </h3>
                            <p class="text-sm" style="color: hsl(213, 20%, 45%);"><?php echo get_the_date(); ?></p>
                        </header>
                        <div class="mb-4" style="color: hsl(213, 20%, 45%);">
                            <?php echo mytheme_get_excerpt(get_the_ID(), 15); ?>
                        </div>
                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-sm hover:text-primary">
                            <?php _e('Více informací', 'mytheme'); ?>
                            <span style="margin-left: 0.5rem;">→</span>
                        </a>
                    </article>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                ?>
                    <!-- Fallback static content if no posts -->
                    <article class="fade-in school-card">
                        <header class="mb-4">
                            <h3 class="text-lg font-bold mb-2"><?php _e('Zápis do 1. třídy 2025/2026', 'mytheme'); ?></h3>
                            <p class="text-sm" style="color: hsl(213, 20%, 45%);">15. prosince 2024</p>
                        </header>
                        <div class="mb-4" style="color: hsl(213, 20%, 45%);">
                            <?php _e('Informace o zápisu budoucích prvňáčků na školní rok 2025/2026. Termín zápisu a potřebné dokumenty.', 'mytheme'); ?>
                        </div>
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('dokumenty'))); ?>" class="inline-flex items-center text-sm hover:text-primary">
                            <?php _e('Více informací', 'mytheme'); ?>
                            <span style="margin-left: 0.5rem;">→</span>
                        </a>
                    </article>

                    <article class="fade-in school-card">
                        <header class="mb-4">
                            <h3 class="text-lg font-bold mb-2"><?php _e('Vánoční představení', 'mytheme'); ?></h3>
                            <p class="text-sm" style="color: hsl(213, 20%, 45%);">18. prosince 2024</p>
                        </header>
                        <div class="mb-4" style="color: hsl(213, 20%, 45%);">
                            <?php _e('Žáci naší školy připravili krásné vánoční představení pro rodiče a veřejnost. Srdečně zveme všechny!', 'mytheme'); ?>
                        </div>
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('fotogalerie'))); ?>" class="inline-flex items-center text-sm hover:text-primary">
                            <?php _e('Zobrazit fotky', 'mytheme'); ?>
                            <span style="margin-left: 0.5rem;">→</span>
                        </a>
                    </article>

                    <article class="fade-in school-card">
                        <header class="mb-4">
                            <h3 class="text-lg font-bold mb-2"><?php _e('Nový jídelníček', 'mytheme'); ?></h3>
                            <p class="text-sm" style="color: hsl(213, 20%, 45%);">1. ledna 2025</p>
                        </header>
                        <div class="mb-4" style="color: hsl(213, 20%, 45%);">
                            <?php _e('Od ledna máme nový jídelníček se zdravými a chutným jídly. Podívejte se na aktuální nabídku.', 'mytheme'); ?>
                        </div>
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('jidelnicek'))); ?>" class="inline-flex items-center text-sm hover:text-primary">
                            <?php _e('Zobrazit jídelníček', 'mytheme'); ?>
                            <span style="margin-left: 0.5rem;">→</span>
                        </a>
                    </article>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Rychlý kontakt -->
    <section class="py-20" style="background-color: hsl(210, 85%, 65%, 0.05);">
        <div class="container mx-auto px-4">
            <div class="fade-in text-center" style="max-width: 64rem; margin-left: auto; margin-right: auto;">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    <?php _e('Máte otázky?', 'mytheme'); ?>
                </h2>
                <p class="text-lg mb-8" style="color: hsl(213, 20%, 45%);">
                    <?php _e('Rádi vám zodpovíme všechny dotazy ohledně naší školy', 'mytheme'); ?>
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div class="text-center">
                        <span style="color: hsl(210, 85%, 65%); font-size: 2rem; display: block; margin-bottom: 0.5rem;">📞</span>
                        <p class="font-medium"><?php _e('Telefon', 'mytheme'); ?></p>
                        <p style="color: hsl(213, 20%, 45%);"><?php echo esc_html(mytheme_get_school_info('phone')); ?></p>
                    </div>
                    <div class="text-center">
                        <span style="color: hsl(210, 85%, 65%); font-size: 2rem; display: block; margin-bottom: 0.5rem;">✉️</span>
                        <p class="font-medium"><?php _e('Email', 'mytheme'); ?></p>
                        <p style="color: hsl(213, 20%, 45%);"><?php echo esc_html(mytheme_get_school_info('email')); ?></p>
                    </div>
                    <div class="text-center">
                        <span style="color: hsl(210, 85%, 65%); font-size: 2rem; display: block; margin-bottom: 0.5rem;">📍</span>
                        <p class="font-medium"><?php _e('Adresa', 'mytheme'); ?></p>
                        <p style="color: hsl(213, 20%, 45%);"><?php echo esc_html(mytheme_get_school_info('address')); ?></p>
                    </div>
                </div>

                <a href="<?php echo esc_url(get_permalink(get_page_by_path('kontakty'))); ?>" class="btn-school-primary">
                    <?php _e('Kontaktujte nás', 'mytheme'); ?>
                    <span style="margin-left: 0.5rem;">→</span>
                </a>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>