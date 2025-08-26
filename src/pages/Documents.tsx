import { FileText, Download, Calendar, AlertCircle, Info, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Documents = () => {
  const documentCategories = [
    {
      title: "Zápis do školy",
      icon: BookOpen,
      description: "Dokumenty pro zápis do 1. třídy",
      documents: [
        { name: "Přihláška k zápisu", type: "PDF", size: "120 KB", updated: "15.12.2024" },
        { name: "Informace o zápisu 2025/2026", type: "PDF", size: "85 KB", updated: "10.12.2024" },
        { name: "Požadované doklady", type: "PDF", size: "95 KB", updated: "1.12.2024" },
        { name: "Školní řád", type: "PDF", size: "340 KB", updated: "1.9.2024" }
      ]
    },
    {
      title: "Formuláře",
      icon: FileText,
      description: "Různé formuláře pro rodiče",
      documents: [
        { name: "Omluvenka", type: "PDF", size: "45 KB", updated: "1.9.2024" },
        { name: "Žádost o uvolnění z vyučování", type: "PDF", size: "68 KB", updated: "1.9.2024" },
        { name: "Souhlas s fotografováním", type: "PDF", size: "52 KB", updated: "1.9.2024" },
        { name: "Přihláška do školní družiny", type: "PDF", size: "110 KB", updated: "15.8.2024" }
      ]
    },
    {
      title: "Výroční zprávy",
      icon: Calendar,
      description: "Výroční zprávy o činnosti školy",
      documents: [
        { name: "Výroční zpráva 2023/2024", type: "PDF", size: "1.2 MB", updated: "30.9.2024" },
        { name: "Výroční zpráva 2022/2023", type: "PDF", size: "1.1 MB", updated: "30.9.2023" },
        { name: "Výroční zpráva 2021/2022", type: "PDF", size: "980 KB", updated: "30.9.2022" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero sekce */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dokumenty
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Důležité formuláře a dokumenty ke stažení
            </p>
            <p className="text-lg text-muted-foreground">
              Zde najdete všechny potřebné dokumenty, formuláře a výroční zprávy naší školy
            </p>
          </div>
        </div>
      </section>

      {/* Upozornění */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Alert className="fade-in max-w-4xl mx-auto">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Všechny dokumenty jsou ve formátu PDF. Pokud nemáte nainstalovanou aplikaci pro čtení PDF souborů, 
              můžete si zdarma stáhnout např. Adobe Acrobat Reader.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Kategorie dokumentů */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {documentCategories.map((category, index) => (
              <div key={index} className="fade-in">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.documents.map((doc, docIndex) => (
                    <Card key={docIndex} className="school-card border-border/50 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-6 h-6 text-primary" />
                            <div>
                              <CardTitle className="text-lg">{doc.name}</CardTitle>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {doc.type}
                                </span>
                                <span className="text-xs text-muted-foreground">{doc.size}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Aktualizováno: {doc.updated}
                            </span>
                          </div>
                          <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                            <Download className="w-4 h-4 mr-2" />
                            Stáhnout
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zápis do školy - zvýrazněná sekce */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Card className="fade-in max-w-4xl mx-auto school-card border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl md:text-3xl">Zápis do 1. třídy 2025/2026</CardTitle>
                  <p className="text-muted-foreground">Důležité informace pro rodiče budoucích prvňáčků</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Calendar className="h-4 w-4" />
                <AlertDescription>
                  <strong>Termín zápisu:</strong> 7. - 8. dubna 2025 od 14:00 do 17:00 hodin
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Co je potřeba k zápisu:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Vyplněnou přihlášku k zápisu</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Rodný list dítěte (originál + kopii)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Doklad o trvalém bydlišti dítěte</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span>Občanský průkaz zákonného zástupce</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-school-primary">
                  <Download className="w-4 h-4 mr-2" />
                  Stáhnout přihlášku
                </Button>
                <Button variant="outline">
                  <Info className="w-4 h-4 mr-2" />
                  Více informací
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kontakt pro další informace */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Potřebujete další informace?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pokud nenajdete dokument, který hledáte, nebo máte jakékoliv dotazy, 
              neváhejte nás kontaktovat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-school-primary">
                Kontaktovat školu
              </Button>
              <Button variant="outline">
                Zobrazit všechny kontakty
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;