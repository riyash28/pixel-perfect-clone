import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, MoreHorizontal, Lock, ShoppingBag, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const baseInputClass =
  "h-12 rounded-lg border-[#c9cccf] bg-background px-3 text-[15px] focus-visible:ring-2 focus-visible:ring-black focus-visible:border-black transition-colors";
const errorInputClass =
  "border-red-500 bg-red-50 focus-visible:ring-red-500 focus-visible:border-red-500";

type FormFields = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  pin: string;
  phone: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const Checkout = () => {
  const { items, subtotal } = useCart();
  const [payment, setPayment] = useState("razorpay");
  const [billing, setBilling] = useState("same");
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState<string | null>(() => localStorage.getItem("email"));

  const [form, setForm] = useState<FormFields>({
    email: localStorage.getItem("email") || "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const fieldRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const setField = (key: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim()) e.email = "This field is required";
    else if (!emailRegex.test(form.email.trim())) e.email = "Enter a valid email address";

    if (!form.firstName.trim()) e.firstName = "This field is required";
    if (!form.lastName.trim()) e.lastName = "This field is required";
    if (!form.address.trim()) e.address = "This field is required";
    if (!form.city.trim()) e.city = "This field is required";
    if (!form.state.trim()) e.state = "This field is required";

    if (!form.pin.trim()) e.pin = "This field is required";
    else if (!/^\d{6}$/.test(form.pin.trim())) e.pin = "Enter a valid 6-digit PIN code";

    if (!form.phone.trim()) e.phone = "This field is required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s+/g, ""))) e.phone = "Enter a valid 10-digit phone number";

    return e;
  };

  const fieldOrder: (keyof FormFields)[] = [
    "email",
    "firstName",
    "lastName",
    "address",
    "city",
    "state",
    "pin",
    "phone",
  ];

  const scrollToFirstError = (errs: FormErrors) => {
    const firstKey = fieldOrder.find((k) => errs[k]);
    if (!firstKey) return;
    const el = fieldRefs.current[firstKey];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => el.focus(), 300);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setUserEmail(null);
  };

  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal;

  // ✅ PAYMENT FUNCTION (UNCHANGED BACKEND)
  const handlePayment = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: subtotal,
        }),
      });

      const data = await res.json();

      const options = {
        key: "rzp_test_SaX6nNxc7RjT3E",
        amount: data.amount,
        currency: "INR",
        name: "Praanroot",
        description: "Order Payment",
        order_id: data.id,

        handler: async function (response: any) {
          const verifyRes = await fetch("http://localhost:5000/api/payment/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            alert("Payment Successful 🎉");
            navigate("/success");
          } else {
            alert("Payment Failed ❌");
          }
        },

        prefill: {
          name: "Customer",
          email: userEmail || "test@gmail.com",
          contact: "9999999999",
        },

        theme: {
          color: "#000000",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err);
      alert("Something went wrong ❌");
    }
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      scrollToFirstError(errs);
      return;
    }
    setErrors({});
    if (payment === "cod") {
      alert("Order placed with COD ✅");
      navigate("/success");
    } else {
      handlePayment();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
          <Link to="/" className="text-2xl font-bold text-primary">
            PRAANROOT
          </Link>
          <ShoppingBag size={22} />
        </div>
      </header>

      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-[1fr_420px]">
        {/* LEFT SIDE */}
        <div className="px-6 py-10">
          {/* CONTACT */}
          <h2 className="text-xl font-semibold mb-3">Contact</h2>

          {userEmail ? (
            <div className="flex items-center gap-3 border rounded-lg p-3 mb-6">
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
                {userEmail?.charAt(0)}
              </div>
              <p className="flex-1">{userEmail}</p>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreHorizontal size={18} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut size={16} className="mr-2" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="mb-6">
              <Input
                ref={(el) => (fieldRefs.current.email = el)}
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={setField("email")}
                className={`${baseInputClass} ${errors.email ? errorInputClass : ""}`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          )}

          {/* DELIVERY */}
          <h2 className="text-xl font-semibold mb-3">Delivery</h2>

          <div className="space-y-3">
            <Select defaultValue="india">
              <SelectTrigger className={baseInputClass}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
              </SelectContent>
            </Select>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Input
                  ref={(el) => (fieldRefs.current.firstName = el)}
                  placeholder="First name"
                  value={form.firstName}
                  onChange={setField("firstName")}
                  className={`${baseInputClass} ${errors.firstName ? errorInputClass : ""}`}
                />
                {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
              </div>
              <div>
                <Input
                  ref={(el) => (fieldRefs.current.lastName = el)}
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={setField("lastName")}
                  className={`${baseInputClass} ${errors.lastName ? errorInputClass : ""}`}
                />
                {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <Input
                ref={(el) => (fieldRefs.current.address = el)}
                placeholder="Address"
                value={form.address}
                onChange={setField("address")}
                className={`${baseInputClass} ${errors.address ? errorInputClass : ""}`}
              />
              {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
            </div>

            <Input
              placeholder="Apartment (optional)"
              value={form.apartment}
              onChange={setField("apartment")}
              className={baseInputClass}
            />

            <div className="grid grid-cols-3 gap-3">
              <div>
                <Input
                  ref={(el) => (fieldRefs.current.city = el)}
                  placeholder="City"
                  value={form.city}
                  onChange={setField("city")}
                  className={`${baseInputClass} ${errors.city ? errorInputClass : ""}`}
                />
                {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
              </div>
              <div>
                <Input
                  ref={(el) => (fieldRefs.current.state = el)}
                  placeholder="State"
                  value={form.state}
                  onChange={setField("state")}
                  className={`${baseInputClass} ${errors.state ? errorInputClass : ""}`}
                />
                {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
              </div>
              <div>
                <Input
                  ref={(el) => (fieldRefs.current.pin = el)}
                  placeholder="PIN code"
                  inputMode="numeric"
                  maxLength={6}
                  value={form.pin}
                  onChange={setField("pin")}
                  className={`${baseInputClass} ${errors.pin ? errorInputClass : ""}`}
                />
                {errors.pin && <p className="mt-1 text-xs text-red-500">{errors.pin}</p>}
              </div>
            </div>

            <div>
              <Input
                ref={(el) => (fieldRefs.current.phone = el)}
                placeholder="Phone"
                inputMode="tel"
                maxLength={10}
                value={form.phone}
                onChange={setField("phone")}
                className={`${baseInputClass} ${errors.phone ? errorInputClass : ""}`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>
          </div>

          {/* SHIPPING */}
          <h2 className="text-xl font-semibold mt-6 mb-3">Shipping method</h2>
          <div className="bg-gray-100 p-4 rounded">Enter your shipping address to view shipping methods.</div>

          {/* PAYMENT */}
          <h2 className="text-xl font-semibold mt-6 mb-3">Payment</h2>

          <RadioGroup value={payment} onValueChange={setPayment}>
            <div className="border rounded-lg overflow-hidden">
              <label className="flex justify-between items-center p-4 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <RadioGroupItem value="razorpay" />
                  Razorpay (UPI, Cards, Wallets)
                </div>
              </label>

              {payment === "razorpay" && (
                <div className="bg-gray-100 p-6 text-center">
                  <Lock size={20} className="mx-auto mb-2" />
                  Secure payment via Razorpay
                </div>
              )}

              <label className="flex gap-2 p-4 border-t cursor-pointer">
                <RadioGroupItem value="cod" />
                Cash on Delivery
              </label>
            </div>
          </RadioGroup>

          {/* BILLING */}
          <h2 className="text-xl font-semibold mt-6 mb-3">Billing address</h2>

          <RadioGroup value={billing} onValueChange={setBilling}>
            <div className="border rounded-lg">
              <label className="flex gap-2 p-4 cursor-pointer">
                <RadioGroupItem value="same" />
                Same as shipping address
              </label>

              <label className="flex gap-2 p-4 border-t cursor-pointer">
                <RadioGroupItem value="diff" />
                Use different billing address
              </label>
            </div>
          </RadioGroup>

          {/* PAY BUTTON */}
          <Button
            onClick={handleSubmit}
            className="w-full mt-6 h-14 bg-black text-white"
          >
            Pay now
          </Button>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-100 p-6 sticky top-0 h-screen overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between mb-4 items-center">
              <div className="flex gap-3 items-center">
                <img src={item.image} className="w-14 h-14 rounded border" />
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <p>₹{item.price * item.quantity}</p>
            </div>
          ))}

          <hr />

          <div className="flex justify-between mt-4">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>

          <div className="flex justify-between mt-2">
            <p>Shipping</p>
            <p>--</p>
          </div>

          <div className="flex justify-between mt-4 font-bold text-lg">
            <p>Total</p>
            <p>₹{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
