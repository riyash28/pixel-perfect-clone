import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import AboutPraanroot from "./pages/AboutPraanroot";
import Founders from "./pages/Founders";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Consult from "./pages/Consult";
import TrackOrder from "./pages/TrackOrder";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import FloatingChatButton from "./components/FloatingChatButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/about/praanroot" element={<AboutPraanroot />} />
            <Route path="/about/founders" element={<Founders />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consult" element={<Consult />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingChatButton />
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
