import { Users, BookOpen, Monitor, Shield, Heart, Award, Building, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSchool = () => {
  return (
    <div className="min-h-screen">
      {/* Hero sekce */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              O naší škole
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Moderní malotřídní základní škola s tradicí a inovativním přístupem ke vzdělávání
            </p>
          </div>
        </div>
      </section>

      {/* Základní informace */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Základní škola Prusinovice
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Naše škola poskytuje vzdělání pro žáky 1. stupně základní školy (1. - 5. ročník) 
                v klidném venkovském prostředí obce Prusinovice. Věnujeme se každému dítěti individuálně 
                a podporujeme jeho všestranný rozvoj.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                S kapacitou 110 žáků a současným počtem 65 dětí můžeme zajistit opravdu osobní přístup 
                a kvalitní vzdělávání v malých třídách.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary">65</h3>
                  <p className="text-sm text-muted-foreground">Současných žáků</p>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <h3 className="text-2xl font-bold text-secondary">5</h3>
                  <p className="text-sm text-muted-foreground">Ročníků</p>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <Card className="school-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="w-6 h-6 text-primary" />
                    <span>Základní údaje</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Oficiální název</p>
                    <p className="text-muted-foreground">Základní škola Prusinovice</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adresa</p>
                    <p className="text-muted-foreground">Hlavní 77, 768 42 Prusinovice</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">IČO</p>
                    <p className="text-muted-foreground">75024985</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Zřizovatel</p>
                    <p className="text-muted-foreground">Obec Prusinovice</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Typ školy</p>
                    <p className="text-muted-foreground">Malotřídní ZŠ, 1. stupeň (1.-5. ročník)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vedení školy */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vedení školy
            </h2>
            <p className="text-lg text-muted-foreground">
              Zkušení pedagogové s láskou k dětem a vzdělávání
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="fade-in school-card text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Ředitelka školy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Mgr. Ivona Kratochvílová
                </p>
                <p className="text-muted-foreground mb-4">
                  Zkušená pedagogička s dlouholetou praxí v oblasti elementárního vzdělávání. 
                  Vede školu s důrazem na individuální přístup a moderní vyučovací metody.
                </p>
                <p className="text-sm text-muted-foreground">
                  Email: reditelka@zsprus.cz
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-xl">Zástupkyně ředitelky</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Mgr. Petra Zicháčková
                </p>
                <p className="text-muted-foreground mb-4">
                  Koordinuje pedagogickou činnost školy a zajišťuje vysokou kvalitu vzdělávacího procesu. 
                  Specializuje se na metodiku výuky mladších žáků.
                </p>
                <p className="text-sm text-muted-foreground">
                  Zároveň třídní učitelka
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pedagogický sbor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pedagogický sbor
            </h2>
            <p className="text-lg text-muted-foreground">
              Kvalifikovaní učitelé a vychovatelky se starají o výchovu a vzdělávání našich žáků
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mgr. Eva Benešová", role: "Učitelka" },
              { name: "Mgr. Jarmila Kratinohová", role: "Učitelka" },
              { name: "Mgr. Martina Ševčíková", role: "Učitelka" },
              { name: "Mgr. Michaela Vrubelová", role: "Učitelka" },
              { name: "Martina Smolková", role: "Vychovatelka" },
              { name: "Ing. Lucie Marková", role: "Vychovatelka" },
            ].map((person, index) => (
              <Card key={index} className="fade-in school-card text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vybavení a služby */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vybavení a služby
            </h2>
            <p className="text-lg text-muted-foreground">
              Moderní technologie a kvalitní zázemí pro efektivní vzdělávání
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="fade-in school-card text-center">
              <CardHeader>
                <Monitor className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Moderní technologie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Interaktivní tabule, počítačová učebna, notebooky a tablety
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Školní družina</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Kvalitní péče o děti po vyučování s bohatým programem
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-accent-foreground mx-auto mb-2" />
                <CardTitle className="text-lg">Školní jídelna</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Výdejna stravy s kvalitními a chutným jídly
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Bezbariérovost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Částečně bezbariérový přístup pro všechny žáky
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ZUŠ pobočka */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in max-w-4xl mx-auto">
            <Card className="school-card border-accent/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Základní umělecká škola</CardTitle>
                    <p className="text-muted-foreground">Pobočka v budově školy</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  V budově naší školy také sídlí pobočka Základní umělecké školy, 
                  která rozšiřuje vzdělávací nabídku o umělecké obory. Děti si tak mohou 
                  rozvíjet své talenty v oblasti hudby, výtvarného umění a dalších 
                  kreativních aktivitách.
                </p>
                <p className="text-muted-foreground">
                  Tato spolupráce umožňuje komplexní rozvoj osobnosti našich žáků 
                  a vytváří jedinečné vzdělávací prostředí v naší malé škole.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSchool;