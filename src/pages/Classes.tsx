import { Users, BookOpen, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const classData = [
  {
    grade: "1. ročník",
    teacher: "Mgr. Petra Zicháčková",
    description: "Nejmenší žáci začínají svou školní cestu. Učíme se číst, psát a počítat hravou formou.",
    href: "/tridy/1-rocnik",
    color: "primary"
  },
  {
    grade: "2. ročník", 
    teacher: "Mgr. Eva Benešová",
    description: "Prohlubujeme základní dovednosti a objevujeme svět kolem nás.",
    href: "/tridy/2-rocnik",
    color: "secondary"
  },
  {
    grade: "3. ročník",
    teacher: "Mgr. Martina Ševčíková", 
    description: "Rozšiřujeme znalosti a učíme se samostatnosti a odpovědnosti.",
    href: "/tridy/3-rocnik",
    color: "accent"
  },
  {
    grade: "4. ročník",
    teacher: "Mgr. Michaela Vrubelová",
    description: "Připravujeme se na vyšší ročník a rozvíjíme kritické myšlení.",
    href: "/tridy/4-rocnik", 
    color: "primary"
  },
  {
    grade: "5. ročník",
    teacher: "Mgr. Jarmila Kratinohová",
    description: "Nejvyšší ročník připravuje žáky na přechod na 2. stupeň ZŠ.",
    href: "/tridy/5-rocnik",
    color: "secondary"
  }
];

const Classes = () => {
  return (
    <div className="min-h-screen">
      {/* Hero sekce */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Naše třídy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Poznámte jednotlivé ročníky a jejich třídní učitele
            </p>
            <p className="text-lg text-muted-foreground">
              Každá třída má svého zkušeného učitele, který se věnuje dětem s láskou a individuálním přístupem
            </p>
          </div>
        </div>
      </section>

      {/* Přehled tříd */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classData.map((classInfo, index) => (
              <Card key={index} className={`fade-in school-card border-${classInfo.color}/20 group hover:scale-105 transition-transform duration-300`}>
                <CardHeader>
                  <div className={`w-16 h-16 bg-${classInfo.color}/10 rounded-full flex items-center justify-center mb-4`}>
                    <BookOpen className={`w-8 h-8 text-${classInfo.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{classInfo.grade}</CardTitle>
                  <p className="text-muted-foreground font-medium">
                    Třídní učitel: {classInfo.teacher}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {classInfo.description}
                  </p>
                  <Link to={classInfo.href}>
                    <Button className="w-full btn-school-primary">
                      Zobrazit třídu
                      <Users className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informace o výuce */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Náš přístup k výuce
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              V malotřídní škole můžeme každému dítěti věnovat individuální pozornost 
              a přizpůsobit výuku jeho potřebám a schopnostem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="fade-in school-card text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Individuální přístup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Každé dítě je jedinečné. Věnujeme se jeho silným stránkám 
                  a pomáháme překonávat obtíže.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Moderní metody</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Používáme nejnovější vyučovací metody a technologie 
                  pro efektivní a zajímavé vzdělávání.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
                <CardTitle className="text-xl">Rozvoj talentů</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Podporujeme všestranný rozvoj dětí a pomáháme 
                  objevovat jejich skryté talenty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Chcete se dozvědět více?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rádi vám ukážeme naši školu a odpovíme na všechny vaše otázky
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakty">
                <Button className="btn-school-primary">
                  Kontaktujte nás
                </Button>
              </Link>
              <Link to="/o-skole">
                <Button variant="outline">
                  Více o škole
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;