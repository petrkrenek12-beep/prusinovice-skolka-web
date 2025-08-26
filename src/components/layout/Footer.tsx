import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kontaktní informace */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Základní škola Prusinovice</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Hlavní 77, 768 42 Prusinovice</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>573 386 139</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>reditelka@zsprus.cz</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-primary" />
                <span>IČO: 75024985</span>
              </div>
            </div>
          </div>

          {/* Vedení školy */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Vedení školy</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Ředitelka</p>
                <p>Mgr. Ivona Kratochvílová</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Zástupkyně ředitelky</p>
                <p>Mgr. Petra Zicháčková</p>
              </div>
            </div>
          </div>

          {/* Kontakty služeb */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Školní služby</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Školní jídelna</p>
                <p>Tel: 702 047 927</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Školní družina</p>
                <p>Tel: 601 595 104</p>
                <p className="text-xs">(7:35 a od 12:00)</p>
              </div>
            </div>
          </div>

          {/* Zřizovatel */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Zřizovatel</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Obec Prusinovice</p>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Úřední hodiny:</span>
              </div>
              <p>Pondělí: 8:00 - 17:00</p>
              <p>Středa: 8:00 - 17:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Základní škola Prusinovice. Všechna práva vyhrazena.</p>
          <p className="mt-2">Malá škola s velkým srdcem</p>
        </div>
      </div>
    </footer>
  );
};