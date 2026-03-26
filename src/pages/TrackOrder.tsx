import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package } from "lucide-react";

const TrackOrder = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-md px-4 text-center">
          <Package size={48} className="mx-auto text-primary" />
          <h1 className="mt-4 font-display text-3xl font-bold text-foreground">Track Your Order</h1>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Enter your order ID to track your shipment
          </p>
          <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Enter Order ID"
              className="rounded-lg border bg-card px-4 py-3 text-center font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <button className="rounded-lg bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-zh-green-light">
              Track Order
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TrackOrder;
