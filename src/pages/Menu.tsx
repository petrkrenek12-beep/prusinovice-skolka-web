import { UtensilsCrossed, Calendar, Clock, Phone, AlertCircle, Info, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Menu = () => {
  const weekDays = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek"];
  
  const currentWeekMenu = [
    {
      day: "Pondělí",
      date: "6.1.2025",
      soup: "Fazolová polévka",
      main: "Smažený řízek, bramborová kaše, okurka",
      dessert: "Ovoce"
    },
    {
      day: "Úterý", 
      date: "7.1.2025",
      soup: "Gulášová polévka",
      main: "Špagety s masovou omáčkou, strouhaný sýr",
      dessert: "Jogurt"
    },
    {
      day: "Středa",
      date: "8.1.2025", 
      soup: "Bramborová polévka",
      main: "Pečené kuřecí stehno, rýže, okurkový salát",
      dessert: "Pudink"
    },
    {
      day: "Čtvrtek",
      date: "9.1.2025",
      soup: "Zeleninová polévka",
      main: "Hovězí guláš, houskový knedlík",
      dessert: "Ovoce"
    },
    {
      day: "Pátek", 
      date: "10.1.2025",
      soup: "Rajská polévka",
      main: "Smažená ryba, vařené brambory, špenát",
      dessert: "Zmrzlina"
    }
  ];

  const nextWeekMenu = [
    {
      day: "Pondělí",
      date: "13.1.2025",
      soup: "Květáková polévka",
      main: "Svíčková na smetaně, houskový knedlík",
      dessert: "Ovoce"
    },
    {
      day: "Úterý",
      date: "14.1.2025", 
      soup: "Hovězí vývar s nudlemi",
      main: "Kuřecí řízek, bramborové hranolky, zelný salát",
      dessert: "Tvarohový krém"
    },
    {
      day: "Středa",
      date: "15.1.2025",
      soup: "Čočková polévka",
      main: "Sekaná pečeně, dušené zelí, brambory",
      dessert: "Kompot"
    },
    {
      day: "Čtvrtek", 
      date: "16.1.2025",
      soup: "Drůbeží polévka",
      main: "Těstoviny s kuřecím masem a zeleninou",
      dessert: "Jogurt"
    },
    {
      day: "Pátek",
      date: "17.1.2025", 
      soup: "Kapustná polévka",
      main: "Vepřový guláš, bramborový knedlík",
      dessert: "Ovoce"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero sekce */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Jídelníček
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Zdravá a chutná strava pro naše žáky
            </p>
            <p className="text-lg text-muted-foreground">
              Každý den připravujeme čerstvé a vyvážené obědy se zaměřením na kvalitu a pestrost
            </p>
          </div>
        </div>
      </section>

      {/* Důležité informace */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Alert className="fade-in">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Odhlášení obědů:</strong> Do 7:30 na tel. 702 047 927
              </AlertDescription>
            </Alert>
            <Alert className="fade-in">
              <Phone className="h-4 w-4" />
              <AlertDescription>
                <strong>Jídelna:</strong> Výdejna stravy - tel. 702 047 927
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Aktuální týden */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tento týden (6. - 10. ledna 2025)
            </h2>
            <p className="text-muted-foreground">Aktuální jídelníček</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {currentWeekMenu.map((day, index) => (
              <Card key={index} className="fade-in school-card border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2">
                    <UtensilsCrossed className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-center text-lg">{day.day}</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">{day.date}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Polévka</p>
                    <p className="text-sm">{day.soup}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1">Hlavní chod</p>
                    <p className="text-sm">{day.main}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-accent-foreground uppercase tracking-wide mb-1">Moučník/Ovoce</p>
                    <p className="text-sm">{day.dessert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Příští týden */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Příští týden (13. - 17. ledna 2025)
            </h2>
            <p className="text-muted-foreground">Plánovaný jídelníček</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {nextWeekMenu.map((day, index) => (
              <Card key={index} className="fade-in school-card border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mx-auto mb-2">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-center text-lg">{day.day}</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">{day.date}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">Polévka</p>
                    <p className="text-sm">{day.soup}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1">Hlavní chod</p>
                    <p className="text-sm">{day.main}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-accent-foreground uppercase tracking-wide mb-1">Moučník/Ovoce</p>
                    <p className="text-sm">{day.dessert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informace o stravování */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Naše zásady stravování
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dbáme na kvalitu, čerstvost a vyváženost všech podávaných jídel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="fade-in school-card text-center border-primary/20">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Čerstvé suroviny</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Používáme pouze čerstvé a kvalitní suroviny od ověřených dodavatelů.
                  Jídla připravujeme denně čerstvá.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center border-secondary/20">
              <CardHeader>
                <UtensilsCrossed className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Vyvážená strava</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Naše jídelníčky jsou sestavovány s ohledem na potřeby dětí a obsahují 
                  všechny potřebné živiny.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in school-card text-center border-accent/20">
              <CardHeader>
                <AlertCircle className="w-12 h-12 text-accent-foreground mx-auto mb-4" />
                <CardTitle className="text-xl">Speciální diety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Přizpůsobujeme se individuálním potřebám dětí s alergiemi 
                  nebo speciálními dietními požadavky.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Praktické informace */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in max-w-4xl mx-auto">
            <Card className="school-card">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-center">Praktické informace</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      Časy stravování
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Svačina: 9:30 - 9:45</p>
                      <p>Oběd 1. směna: 11:30 - 12:00</p>
                      <p>Oběd 2. směna: 12:00 - 12:30</p>
                      <p>Svačina (družina): 14:30 - 15:00</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-2" />
                      Odhašování obědů
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Telefon:</strong> 702 047 927</p>
                      <p><strong>Doba:</strong> Do 7:30 ráno</p>
                      <p><strong>SMS:</strong> Možnost odhlášení SMS</p>
                      <p><strong>Nemoc:</strong> Při nemoci nad 3 dny automatické odhlášení</p>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Cena oběda: 35 Kč pro žáky, 45 Kč pro zaměstnance. 
                    Platba předem na účet školy nebo hotově v kanceláři.
                  </AlertDescription>
                </Alert>

                <div className="text-center">
                  <Button className="btn-school-primary mr-4">
                    <Phone className="w-4 h-4 mr-2" />
                    Kontaktovat jídelnu
                  </Button>
                  <Button variant="outline">
                    Více informací
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;