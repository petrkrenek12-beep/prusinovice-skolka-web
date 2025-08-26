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
import Class1 from "./pages/Class1";
import Class2 from "./pages/Class2"; 
import Class3 from "./pages/Class3";
import Class4 from "./pages/Class4";
import Class5 from "./pages/Class5";
import PhotoGallery from "./pages/PhotoGallery";
import Contacts from "./pages/Contacts";
import Documents from "./pages/Documents";
import Menu from "./pages/Menu";
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
            <Route path="/tridy/1-rocnik" element={<Class1 />} />
            <Route path="/tridy/2-rocnik" element={<Class2 />} />
            <Route path="/tridy/3-rocnik" element={<Class3 />} />
            <Route path="/tridy/4-rocnik" element={<Class4 />} />
            <Route path="/tridy/5-rocnik" element={<Class5 />} />
            {/* Other routes */}
            <Route path="/fotogalerie" element={<PhotoGallery />} />
            <Route path="/kontakty" element={<Contacts />} />
            <Route path="/dokumenty" element={<Documents />} />
            <Route path="/jidelnicek" element={<Menu />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
