import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Timeline = lazy(() => import("./pages/Timeline"));
const Themes = lazy(() => import("./pages/Themes"));
const PeoplePlaces = lazy(() => import("./pages/PeoplePlaces"));
const Sources = lazy(() => import("./pages/Sources"));
const HijrahJourney = lazy(() => import("./pages/HijrahJourney"));
const CompleteSeerah = lazy(() => import("./pages/CompleteSeerah"));

const queryClient = new QueryClient();

const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;

const Loading = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-sm text-muted-foreground">Loading…</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccessibilityProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Layout>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/themes" element={<Themes />} />
                <Route path="/people-places" element={<PeoplePlaces />} />
                <Route path="/sources" element={<Sources />} />
                <Route path="/hijrah" element={<HijrahJourney />} />
                <Route path="/complete-seerah" element={<CompleteSeerah />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </AccessibilityProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
