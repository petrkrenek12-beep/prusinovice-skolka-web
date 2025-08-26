import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

// Pages
import Index from "./pages/Index";
import AboutSchool from "./pages/AboutSchool";
import Classes from "./pages/Classes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-skole" element={<AboutSchool />} />
            <Route path="/tridy" element={<Classes />} />
            {/* Class detail routes */}
            <Route path="/tridy/1-rocnik" element={<div>1. ročník - Coming Soon</div>} />
            <Route path="/tridy/2-rocnik" element={<div>2. ročník - Coming Soon</div>} />
            <Route path="/tridy/3-rocnik" element={<div>3. ročník - Coming Soon</div>} />
            <Route path="/tridy/4-rocnik" element={<div>4. ročník - Coming Soon</div>} />
            <Route path="/tridy/5-rocnik" element={<div>5. ročník - Coming Soon</div>} />
            {/* Other routes */}
            <Route path="/fotogalerie" element={<div>Fotogalerie - Coming Soon</div>} />
            <Route path="/kontakty" element={<div>Kontakty - Coming Soon</div>} />
            <Route path="/dokumenty" element={<div>Dokumenty - Coming Soon</div>} />
            <Route path="/jidelnicek" element={<div>Jídelníček - Coming Soon</div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
