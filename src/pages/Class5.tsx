import { BookOpen, Users, Calendar, Camera, Clock, User, Star, Heart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Class5 = () => {
  const schedule = [
    { day: "Pondělí", subjects: ["Český jazyk", "Matematika", "Přírodověda", "Tělesná výchova", "Anglický jazyk"] },
    { day: "Úterý", subjects: ["Matematika", "Český jazyk", "Vlastivěda", "Hudební výchova", "Pracovní činnosti"] },
    { day: "Středa", subjects: ["Český jazyk", "Matematika", "Tělesná výchova", "Výtvarná výchova", "Anglický jazyk"] },
    { day: "Čtvrtek", subjects: ["Matematika", "Český jazyk", "Přírodověda", "Hudební výchova", "Vlastivěda"] },
    { day: "Pátek", subjects: ["Český jazyk", "Matematika", "Pracovní činnosti", "Tělesná výchova", "Výtvarná výchova"] }
  ];

  const galleryImages = [
    { title: "Prezentace projektů", description: "Vystoupení před třídou", category: "Český jazyk" },
    { title: "Řešíme úlohy", description: "Komplexní matematické problémy", category: "Matematika" },
    { title: "Laboratorní práce", description: "Experimenty a pozorování", category: "Přírodověda" },
    { title: "Dějiny regionu", description: "Výzkumná práce", category: "Vlastivěda" },
    { title: "Anglický projekt", description: "Komunikace v angličtině", category: "Anglický jazyk" },
    { title: "Závěrečná oslava", description: "Rozloučení s 1. stupněm", category: "Slavnostní akce" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero sekce */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              5. ročník
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Třídní učitelka: Mgr. Jarmila Kratinohová
            </p>
            <p className="text-lg text-muted-foreground">
              Nejvyšší ročník připravuje žáky na přechod na 2. stupeň ZŠ.
            </p>
          </div>
        </div>
      </section>

      {/* Informace o třídě */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="fade-in school-card">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">O naší třídě</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium">Počet žáků</p>
                    <p className="text-muted-foreground">11 žáků (5 dívek, 6 chlapců)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <BookOpen className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium">Zaměření výuky</p>
                    <p className="text-muted-foreground">
                      Komplexní příprava na druhý stupeň základní školy. Zdokonalování 
                      všech dovedností a znalostí potřebných pro úspěšný přechod.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium">Náš motto</p>
                    <p className="text-muted-foreground">
                      "Jsme nejstarší na škole a s tím přichází odpovědnost. 
                      Jsme vzorem pro mladší a připravujeme se na nové výzvy."
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium">Speciální aktivity</p>
                    <p className="text-muted-foreground">
                      Přijímací testy na gymnázia, závěrečné projekty, 
                      mentoring mladších žáků, organizace školních akcí.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="fade-in school-card">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Třídní učitelka</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Mgr. Jarmila Kratinohová</h3>
                  <p className="text-muted-foreground">Učitelka 1. stupně</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm uppercase tracking-wide text-secondary mb-2">Vzdělání</p>
                    <p className="text-muted-foreground">
                      Magisterské studium na Pedagogické fakultě, 
                      specializace na český jazyk a přípravu na 2. stupeň
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-sm uppercase tracking-wide text-secondary mb-2">Praxe</p>
                    <p className="text-muted-foreground">
                      20 let pedagogické praxe, dlouholetá zkušenost s přípravou žáků na přechod
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-sm uppercase tracking-wide text-secondary mb-2">Filozofie</p>
                    <p className="text-muted-foreground">
                      "Můj cíl je vychovat samostatné, sebevědomé a zodpovědné 
                      žáky, kteří budou připraveni na výzvy života."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Příprava na 2. stupeň */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Příprava na 2. stupeň
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systematicky připravujeme naše žáky na úspěšný přechod na druhý stupeň základní školy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="fade-in school-card text-center border-primary/20">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Akademické dovednosti</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Prohlubování znalostí ve všech předmětech, 
                  rozvoj samostatného učení a studijních návyků.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center border-secondary/20">
              <CardHeader>
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Sociální dovednosti</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rozvoj komunikačních dovedností, týmové práce 
                  a schopnosti prezentace vlastních myšlenek.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center border-accent/20">
              <CardHeader>
                <Award className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
                <CardTitle className="text-xl">Přijímací zkoušky</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cílená příprava na přijímací zkoušky 
                  na víceletá gymnázia a střední školy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rozvrh hodin */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rozvrh hodin
            </h2>
            <p className="text-lg text-muted-foreground">
              Týdenní rozvrh pro 5. ročník
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {schedule.map((day, index) => (
                <Card key={index} className="fade-in school-card">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mx-auto mb-2">
                      <Calendar className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-center text-lg">{day.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {day.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="flex items-center space-x-3 p-2 bg-muted/30 rounded-lg">
                          <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-xs font-bold text-secondary">
                            {subIndex + 1}
                          </div>
                          <span className="text-sm">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="fade-in school-card mt-8">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mx-auto mb-2">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-center text-lg">Časové rozmezí hodin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">1. hodina</p>
                    <p className="text-sm text-muted-foreground">8:00 - 8:45</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">2. hodina</p>
                    <p className="text-sm text-muted-foreground">8:55 - 9:40</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">Velká přestávka</p>
                    <p className="text-sm text-muted-foreground">9:40 - 10:00</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">3. hodina</p>
                    <p className="text-sm text-muted-foreground">10:00 - 10:45</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">4. hodina</p>
                    <p className="text-sm text-muted-foreground">10:55 - 11:40</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium">5. hodina</p>
                    <p className="text-sm text-muted-foreground">11:50 - 12:35</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fotogalerie třídy */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fotogalerie naší třídy
            </h2>
            <p className="text-lg text-muted-foreground">
              Zachycené okamžiky z našeho školního života
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="fade-in school-card group hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-secondary/30 group-hover:to-primary/30 transition-colors">
                    <Camera className="w-12 h-12 text-secondary/60" />
                  </div>
                  <CardTitle className="text-lg">{image.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{image.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                    <Button variant="outline" size="sm">
                      Zobrazit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-school-primary">
              Zobrazit všechny fotografie
              <Camera className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Kontakt na třídu */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Máte otázky k naší třídě?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Neváhejte kontaktovat třídní učitelku nebo vedení školy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-school-primary">
                Kontaktovat školu
              </Button>
              <Button variant="outline">
                Zobrazit kontakty
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class5;