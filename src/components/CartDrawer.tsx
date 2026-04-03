import { Minus, Plus, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { bestSellers } from "@/data/products";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockCart = [
  { product: bestSellers[0], qty: 1 },
  { product: bestSellers[2], qty: 2 },
];

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const subtotal = mockCart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-display text-xl font-bold text-foreground">
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {mockCart.map((item, i) => (
            <div key={i} className="mb-4 flex items-center gap-3 rounded-xl border border-border bg-card p-3">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="font-body text-sm font-semibold text-foreground">{item.product.name}</p>
                <p className="font-body text-sm font-bold text-primary">₹{item.product.price}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border px-1">
                <button className="p-1 text-muted-foreground hover:text-foreground"><Minus size={14} /></button>
                <span className="w-5 text-center font-body text-sm font-medium">{item.qty}</span>
                <button className="p-1 text-muted-foreground hover:text-foreground"><Plus size={14} /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-4">
          <div className="mb-4 flex items-center justify-between font-body">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="text-lg font-bold text-foreground">₹{subtotal.toLocaleString()}</span>
          </div>
          <Button className="mb-2 w-full rounded-full py-5 font-body text-base font-semibold">
            Checkout
          </Button>
          <Button variant="outline" className="w-full rounded-full py-5 font-body text-base font-semibold">
            View Cart
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
