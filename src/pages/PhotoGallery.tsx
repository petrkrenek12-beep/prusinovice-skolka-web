import { Camera, Calendar, Users, Heart, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PhotoGallery = () => {
  const galleryCategories = [
    {
      title: "Školní akce",
      description: "Oslavy, představení a různé školní události",
      icon: Star,
      images: [
        "Vánoční představení 2024",
        "Den dětí 2024", 
        "Pasování prvňáčků",
        "Školní akademie"
      ]
    },
    {
      title: "Výlety a exkurze",
      description: "Poznávací výlety a vzdělávací exkurze",
      icon: Camera,
      images: [
        "Výlet do ZOO Brno",
        "Exkurze u hasičů",
        "Návštěva knihovny",
        "Výlet na hrad"
      ]
    },
    {
      title: "Sportovní dny",
      description: "Sportovní aktivity a soutěže",
      icon: Award,
      images: [
        "Sportovní den 2024",
        "Atletické závody",
        "Florbalový turnaj", 
        "Zimní olympiáda"
      ]
    },
    {
      title: "Vyučování",
      description: "Výuka ve třídách a praktické aktivity",
      icon: Users,
      images: [
        "Hodina přírodovědy",
        "Projektová výuka",
        "Počítačová učebna",
        "Výtvarné dílny"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero sekce */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fotogalerie
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Zachycené okamžiky ze života naší školy
            </p>
            <p className="text-lg text-muted-foreground">
              Prohlédněte si fotografie z různých školních akcí, výletů a každodenního života našich žáků
            </p>
          </div>
        </div>
      </section>

      {/* Galerie kategorií */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryCategories.map((category, index) => (
              <Card key={index} className="fade-in school-card group hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {category.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                        <Camera className="w-5 h-5 text-primary" />
                        <span className="text-sm">{image}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full btn-school-primary">
                    Zobrazit fotografie
                    <Camera className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nejnovější fotografie */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nejnovější fotografie
            </h2>
            <p className="text-lg text-muted-foreground">
              Aktuální snímky z posledních akcí a událostí
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Vánoční představení", date: "18. prosince 2024", category: "Školní akce" },
              { title: "Adventní tvoření", date: "12. prosince 2024", category: "Výtvarné aktivity" },
              { title: "Mikulášská besídka", date: "6. prosince 2024", category: "Oslavy" },
              { title: "Projektový den", date: "29. listopadu 2024", category: "Vyučování" },
              { title: "Podzimní výlet", date: "15. listopadu 2024", category: "Výlety" },
              { title: "Sportovní odpoledne", date: "8. listopadu 2024", category: "Sport" }
            ].map((photo, index) => (
              <Card key={index} className="fade-in school-card">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Camera className="w-12 h-12 text-primary/60" />
                  </div>
                  <CardTitle className="text-lg">{photo.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {photo.category}
                    </span>
                    <Button variant="outline" size="sm">
                      Zobrazit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informace pro rodiče */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in bg-primary/5 rounded-2xl p-8 text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Fotografie vašich dětí
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Všechny fotografie jsou pořizovány s vědomím a souhlasem rodičů.
              Pokud máte dotazy nebo požadavky, neváhejte nás kontaktovat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-school-primary">
                Kontaktovat školu
              </Button>
              <Button variant="outline">
                Zásady ochrany soukromí
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;