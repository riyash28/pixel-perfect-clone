import { Minus, Plus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const CartDrawer = () => {
  const { items, increaseQuantity, decreaseQuantity, removeItem, subtotal, isCartOpen, setCartOpen } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-display text-xl font-bold text-foreground">
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <p className="font-body text-sm text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              {items.map((item) => (
                <div key={item.id} className="mb-4 flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="font-body text-sm font-bold text-primary">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2 rounded-full border border-border px-1">
                      <button onClick={() => decreaseQuantity(item.id)} className="p-1 text-muted-foreground hover:text-foreground">
                        <Minus size={14} />
                      </button>
                      <span className="w-5 text-center font-body text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} className="p-1 text-muted-foreground hover:text-foreground">
                        <Plus size={14} />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="ml-1 p-1 text-muted-foreground hover:text-destructive">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <div className="mb-4 flex items-center justify-between font-body">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-bold text-foreground">₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <Button className="mb-2 w-full rounded-full py-5 font-body text-base font-semibold">Checkout</Button>
              <Button variant="outline" className="w-full rounded-full py-5 font-body text-base font-semibold">View Cart</Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
