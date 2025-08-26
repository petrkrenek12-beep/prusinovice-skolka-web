import { Phone, Mail, MapPin, Clock, Users, UtensilsCrossed, User, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  const contacts = [
    {
      title: "Vedení školy",
      icon: User,
      items: [
        {
          name: "Mgr. Ivona Kratochvílová",
          position: "Ředitelka školy",
          email: "reditelka@zsprus.cz",
          phone: "573 386 139"
        },
        {
          name: "Mgr. Petra Zicháčková",
          position: "Zástupkyně ředitelky",
          email: "zastupkyne@zsprus.cz",
          phone: "702 021 879"
        }
      ]
    },
    {
      title: "Školní družina",
      icon: Users,
      items: [
        {
          name: "Školní družina",
          position: "Provozní doba: 6:30 - 17:00",
          email: "druzina@zsprus.cz",
          phone: "601 595 104",
          note: "Volejte do 7:35 a od 12:00"
        }
      ]
    },
    {
      title: "Školní jídelna",
      icon: UtensilsCrossed,
      items: [
        {
          name: "Výdejna stravy",
          position: "Přihlášení/odhlášení obědů",
          email: "jidelna@zsprus.cz",
          phone: "702 047 927",
          note: "Obědy je nutné odhlašovat do 7:30"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero sekce */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kontakty
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Spojte se s námi - jsme tu pro vás
            </p>
            <p className="text-lg text-muted-foreground">
              Neváhejte nás kontaktovat s jakýmikoliv dotazy ohledně naší školy
            </p>
          </div>
        </div>
      </section>

      {/* Kontaktní informace */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Základní údaje */}
            <Card className="fade-in school-card">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Základní škola Prusinovice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Adresa</p>
                    <p className="text-muted-foreground">Hlavní 77</p>
                    <p className="text-muted-foreground">768 42 Prusinovice</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">573 386 139 (ředitelna)</p>
                    <p className="text-muted-foreground">702 021 879 (kancelář)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">reditelka@zsprus.cz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Úřední hodiny</p>
                    <p className="text-muted-foreground">Pondělí - Pátek: 7:00 - 15:00</p>
                    <p className="text-muted-foreground">Nebo po telefonické domluvě</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zřizovatel */}
            <Card className="fade-in school-card">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Zřizovatel školy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium">Obec Prusinovice</p>
                    <p className="text-muted-foreground">Hlavní 47</p>
                    <p className="text-muted-foreground">768 42 Prusinovice</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">573 386 301</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">obecni.urad@prusinovice.cz</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-muted-foreground">
                    IČO školy: 75024624
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Datová schránka: abc123def
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Kontakty na jednotlivé služby */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((section, index) => (
              <Card key={index} className="fade-in school-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <section.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.items.map((contact, contactIndex) => (
                      <div key={contactIndex} className="space-y-2">
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-muted-foreground">{contact.position}</p>
                        
                        {contact.email && (
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="text-sm">{contact.email}</span>
                          </div>
                        )}
                        
                        {contact.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-primary" />
                            <span className="text-sm">{contact.phone}</span>
                          </div>
                        )}
                        
                        {contact.note && (
                          <p className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                            {contact.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa a návod */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Jak se k nám dostanete
            </h2>
            <p className="text-lg text-muted-foreground">
              Naše škola se nachází v centru obce Prusinovice
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground">Interaktivní mapa</p>
                  <p className="text-muted-foreground">Zde bude umístěna mapa</p>
                </div>
              </div>
            </div>

            <div className="fade-in space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Dopravní spojení</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">🚗</span>
                  </div>
                  <div>
                    <p className="font-medium">Autem</p>
                    <p className="text-sm text-muted-foreground">
                      Parkování možné před školou nebo na náměstí
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">🚌</span>
                  </div>
                  <div>
                    <p className="font-medium">Autobusem</p>
                    <p className="text-sm text-muted-foreground">
                      Zastávka "Prusinovice, náměstí" - 2 minuty chůze
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-foreground">🚶</span>
                  </div>
                  <div>
                    <p className="font-medium">Pěšky</p>
                    <p className="text-sm text-muted-foreground">
                      Škola je dostupná z celé obce během několika minut chůze
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="btn-school-primary w-full">
                  Zobrazit na mapě
                  <MapPin className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;