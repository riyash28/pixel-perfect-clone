import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MoreHorizontal, ChevronDown, Lock, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";

const inputClass =
  "h-12 rounded-lg border-[#c9cccf] bg-background px-3 text-[15px] focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-0 focus-visible:border-foreground";

const Checkout = () => {
  const { items, subtotal } = useCart();
  const [payment, setPayment] = useState("razorpay");
  const [billing, setBilling] = useState("same");

  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal;

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Top bar */}
      <header className="border-b border-[#e5e5e5] bg-background">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 lg:px-10">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-primary">
            PRAANROOT
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            <ShoppingBag size={22} />
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-0 lg:grid-cols-[1fr_440px]">
        {/* LEFT — FORM */}
        <div className="px-6 py-8 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-[560px] space-y-10">
            {/* Contact */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
                <Link to="#" className="text-sm text-muted-foreground underline">
                  Log in
                </Link>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-[#c9cccf] bg-background px-3 py-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  P
                </div>
                <div className="flex-1">
                  <p className="text-[15px] text-foreground">priya@example.com</p>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </section>

            {/* Delivery */}
            <section>
              <h2 className="mb-3 font-display text-xl font-semibold text-foreground">Delivery</h2>
              <div className="space-y-3">
                <div>
                  <Label className="sr-only">Country/Region</Label>
                  <Select defaultValue="india">
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Country/Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input className={inputClass} placeholder="First name" />
                  <Input className={inputClass} placeholder="Last name" />
                </div>

                <div className="relative">
                  <Input className={`${inputClass} pr-10`} placeholder="Address" />
                  <Search
                    size={18}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                </div>

                <Input className={inputClass} placeholder="Apartment, suite, etc. (optional)" />

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <Input className={inputClass} placeholder="City" />
                  <Select>
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Maharashtra",
                        "Karnataka",
                        "Delhi",
                        "Tamil Nadu",
                        "Gujarat",
                        "Rajasthan",
                        "West Bengal",
                      ].map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input className={inputClass} placeholder="PIN code" />
                </div>

                <Input className={inputClass} placeholder="Phone" />
              </div>
            </section>

            {/* Shipping method */}
            <section>
              <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
                Shipping method
              </h2>
              <div className="rounded-lg bg-muted px-4 py-4 text-[14px] text-muted-foreground">
                Enter your shipping address to view available shipping methods.
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground">Payment</h2>
              <p className="mb-3 text-sm text-muted-foreground">
                All transactions are secure and encrypted.
              </p>

              <RadioGroup value={payment} onValueChange={setPayment} className="overflow-hidden rounded-lg border border-[#c9cccf]">
                {/* Razorpay */}
                <label
                  htmlFor="pay-razorpay"
                  className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-3.5 transition-colors ${
                    payment === "razorpay" ? "bg-accent/10" : "bg-background"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem id="pay-razorpay" value="razorpay" />
                    <span className="text-[15px] text-foreground">
                      Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="rounded bg-[#1a1f71] px-1.5 py-0.5 text-[10px] font-bold text-white">
                      VISA
                    </span>
                    <span className="rounded bg-[#eb001b] px-1.5 py-0.5 text-[10px] font-bold text-white">
                      MC
                    </span>
                    <span className="rounded bg-[#097939] px-1.5 py-0.5 text-[10px] font-bold text-white">
                      UPI
                    </span>
                    <span className="text-xs text-muted-foreground">+15</span>
                  </div>
                </label>

                {payment === "razorpay" && (
                  <div className="border-t border-[#c9cccf] bg-muted/40 px-6 py-8 text-center animate-fade-in">
                    <div className="mx-auto mb-3 flex h-14 w-20 items-center justify-center rounded-md border border-dashed border-[#c9cccf] bg-background">
                      <Lock size={20} className="text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      After clicking "Pay now", you will be redirected to Razorpay Secure to
                      complete your purchase securely.
                    </p>
                  </div>
                )}

                {/* COD */}
                <label
                  htmlFor="pay-cod"
                  className={`flex cursor-pointer items-center gap-3 border-t border-[#c9cccf] px-4 py-3.5 transition-colors ${
                    payment === "cod" ? "bg-accent/10" : "bg-background"
                  }`}
                >
                  <RadioGroupItem id="pay-cod" value="cod" />
                  <span className="text-[15px] text-foreground">Cash on Delivery (COD)</span>
                </label>
              </RadioGroup>
            </section>

            {/* Billing */}
            <section>
              <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
                Billing address
              </h2>
              <RadioGroup
                value={billing}
                onValueChange={setBilling}
                className="overflow-hidden rounded-lg border border-[#c9cccf]"
              >
                <label
                  htmlFor="bill-same"
                  className={`flex cursor-pointer items-center gap-3 px-4 py-3.5 transition-colors ${
                    billing === "same" ? "bg-accent/10" : "bg-background"
                  }`}
                >
                  <RadioGroupItem id="bill-same" value="same" />
                  <span className="text-[15px] text-foreground">Same as shipping address</span>
                </label>
                <label
                  htmlFor="bill-diff"
                  className={`flex cursor-pointer items-center gap-3 border-t border-[#c9cccf] px-4 py-3.5 transition-colors ${
                    billing === "diff" ? "bg-accent/10" : "bg-background"
                  }`}
                >
                  <RadioGroupItem id="bill-diff" value="diff" />
                  <span className="text-[15px] text-foreground">
                    Use a different billing address
                  </span>
                </label>
              </RadioGroup>
            </section>

            {/* CTA */}
            <Button className="h-14 w-full rounded-lg bg-foreground text-base font-semibold text-background hover:bg-foreground/90">
              Pay now
            </Button>

            {/* Footer links */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-[#e5e5e5] pt-6 text-xs text-muted-foreground">
              {["Refund policy", "Shipping", "Privacy policy", "Terms of service", "Contact"].map(
                (l) => (
                  <Link key={l} to="#" className="underline-offset-2 hover:underline">
                    {l}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <aside className="border-t border-[#e5e5e5] bg-muted/40 px-6 py-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-[420px] space-y-5">
            {items.length === 0 ? (
              <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-16 w-16 overflow-hidden rounded-lg border border-[#c9cccf] bg-background">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-muted-foreground px-1.5 text-[11px] font-medium text-background">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex gap-2">
              <Input
                className={`${inputClass} flex-1`}
                placeholder="Discount code or gift card"
              />
              <Button
                variant="secondary"
                className="h-12 rounded-lg border border-[#c9cccf] bg-background px-5 text-sm font-medium text-foreground hover:bg-muted"
              >
                Apply
              </Button>
            </div>

            <div className="space-y-2 border-t border-[#e5e5e5] pt-4 text-[15px]">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-foreground">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Enter shipping address</span>
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-[#e5e5e5] pt-4">
              <span className="text-base font-medium text-foreground">Total</span>
              <div className="text-right">
                <span className="mr-2 text-xs text-muted-foreground">INR</span>
                <span className="font-display text-2xl font-semibold text-foreground">
                  ₹{total.toLocaleString("en-IN")}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  Including ₹{taxes.toLocaleString("en-IN")} in taxes
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;