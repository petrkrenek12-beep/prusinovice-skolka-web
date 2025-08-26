import { ArrowRight, Users, BookOpen, Shield, Heart, Star, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import schoolHeroImage from "@/assets/school-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero sekce */}
      <section className="hero-section flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${schoolHeroImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="fade-in max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vítejte na stránkách
              <span className="block text-gradient bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
                Základní školy Prusinovice
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              Malá škola s velkým srdcem
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Moderní vzdělávání s individuálním přístupem v příjemném prostředí malotřídní školy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/o-skole">
                <Button className="btn-school-primary">
                  Prozkoumat školu
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/kontakty">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Kontaktujte nás
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O škole sekce */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Naše škola v číslech
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Malotřídní základní škola pro 1. stupeň s moderním vybavením a kvalitním zázemím
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="fade-in school-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">65</h3>
              <p className="text-muted-foreground">Současných žáků</p>
            </div>

            <div className="fade-in school-card text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">5</h3>
              <p className="text-muted-foreground">Ročníků (1. - 5.)</p>
            </div>

            <div className="fade-in school-card text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">110</h3>
              <p className="text-muted-foreground">Maximální kapacita</p>
            </div>

            <div className="fade-in school-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">7</h3>
              <p className="text-muted-foreground">Zkušených pedagogů</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proč si vybrat naši školu */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proč si vybrat naši školu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poskytujeme kvalitní vzdělání s individuálním přístupem v bezpečném a přátelském prostředí
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="fade-in school-card border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Moderní vybavení</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interaktivní tabule, počítačová učebna, notebooky a tablety pro každého žáka. 
                  Moderní technologie podporují efektivní a zajímavé vyučování.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Individuální přístup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Malé třídy umožňují učitelům věnovat se každému žákovi individuálně. 
                  Podporujeme talent každého dítěte a pomáháme překonávat obtíže.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Bezpečné prostředí</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Klidné venkovské prostředí, částečně bezbariérový přístup, 
                  školní družina a jídelna. Vaše děti jsou u nás v bezpečí.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aktuality */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Aktuality ze školy
            </h2>
            <p className="text-lg text-muted-foreground">
              Sledujte nejnovější události a důležitá oznámení
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="fade-in school-card">
              <CardHeader>
                <CardTitle className="text-lg">Zápis do 1. třídy 2025/2026</CardTitle>
                <p className="text-sm text-muted-foreground">15. prosince 2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Informace o zápisu budoucích prvňáčků na školní rok 2025/2026. 
                  Termín zápisu a potřebné dokumenty.
                </p>
                <Link to="/dokumenty">
                  <Button variant="outline" size="sm">
                    Více informací
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="fade-in school-card">
              <CardHeader>
                <CardTitle className="text-lg">Vánoční představení</CardTitle>
                <p className="text-sm text-muted-foreground">18. prosince 2024</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Žáci naší školy připravili krásné vánoční představení pro rodiče a veřejnost. 
                  Srdečně zveme všechny!
                </p>
                <Link to="/fotogalerie">
                  <Button variant="outline" size="sm">
                    Zobrazit fotky
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="fade-in school-card">
              <CardHeader>
                <CardTitle className="text-lg">Nový jídelníček</CardTitle>
                <p className="text-sm text-muted-foreground">1. ledna 2025</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Od ledna máme nový jídelníček se zdravými a chutným jídly. 
                  Podívejte se na aktuální nabídku.
                </p>
                <Link to="/jidelnicek">
                  <Button variant="outline" size="sm">
                    Zobrazit jídelníček
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rychlý kontakt */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="fade-in max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Máte otázky?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rádi vám zodpovíme všechny dotazy ohledně našej školy
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Telefon</p>
                <p className="text-muted-foreground">573 386 139</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">reditelka@zsprus.cz</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Adresa</p>
                <p className="text-muted-foreground">Hlavní 77, Prusinovice</p>
              </div>
            </div>

            <Link to="/kontakty">
              <Button className="btn-school-primary">
                Kontaktujte nás
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;