import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("mockUserEmail", email);
    navigate("/checkout");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-12 animate-fade-in">
      <div className="w-full max-w-md rounded-2xl border border-[#e5e5e5] bg-background p-8 shadow-sm">
        <Link to="/" className="mb-6 block text-center font-display text-2xl font-bold text-primary">
          PRAANROOT
        </Link>
        <h1 className="mb-1 text-center font-display text-2xl font-semibold text-foreground">
          Log in
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Welcome back. Enter your details to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="h-12 rounded-lg"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-12 rounded-lg"
            />
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-lg bg-foreground text-base font-semibold text-background hover:bg-foreground/90"
          >
            Log in
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here?{" "}
          <Link to="/checkout" className="text-foreground underline underline-offset-2">
            Continue as guest
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;