import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Users, Camera, Phone, FileText, UtensilsCrossed, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Domů", href: "/", icon: Home },
  { name: "O škole", href: "/o-skole", icon: GraduationCap },
  { 
    name: "Třídy", 
    href: "/tridy", 
    icon: Users,
    submenu: [
      { name: "1. ročník", href: "/tridy/1-rocnik" },
      { name: "2. ročník", href: "/tridy/2-rocnik" },
      { name: "3. ročník", href: "/tridy/3-rocnik" },
      { name: "4. ročník", href: "/tridy/4-rocnik" },
      { name: "5. ročník", href: "/tridy/5-rocnik" },
    ]
  },
  { name: "Fotogalerie", href: "/fotogalerie", icon: Camera },
  { name: "Kontakty", href: "/kontakty", icon: Phone },
  { name: "Dokumenty", href: "/dokumenty", icon: FileText },
  { name: "Jídelníček", href: "/jidelnicek", icon: UtensilsCrossed },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  return (
    <nav className={cn(
      "sticky-nav transition-all duration-300",
      isScrolled ? "py-2 shadow-md" : "py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">ZŠ Prusinovice</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Malá škola s velkým srdcem</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    "nav-link flex items-center space-x-2",
                    location.pathname === item.href && "active"
                  )}
                  onMouseEnter={() => item.submenu && setOpenSubmenu(item.name)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>

                {/* Submenu */}
                {item.submenu && openSubmenu === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-50"
                       onMouseEnter={() => setOpenSubmenu(item.name)}
                       onMouseLeave={() => setOpenSubmenu(null)}>
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-muted rounded-lg mx-2",
                            location.pathname === subItem.href && "bg-primary/10 text-primary font-medium"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="space-y-1 pt-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg",
                      location.pathname === item.href 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-muted"
                    )}
                    onClick={() => item.submenu && setOpenSubmenu(
                      openSubmenu === item.name ? null : item.name
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>

                  {/* Mobile Submenu */}
                  {item.submenu && openSubmenu === item.name && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={cn(
                            "block px-4 py-2 text-sm rounded-lg",
                            location.pathname === subItem.href 
                              ? "bg-primary/10 text-primary font-medium" 
                              : "hover:bg-muted"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};