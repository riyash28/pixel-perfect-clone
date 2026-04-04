import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const resetFields = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setShowPassword(false);
  };

  const switchMode = (newMode: "login" | "signup") => {
    resetFields();
    setMode(newMode);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) { onClose(); setTimeout(() => setMode("login"), 300); } }}>
      <DialogContent className="max-w-md rounded-2xl p-8">
        <DialogHeader className="text-center">
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            {mode === "login" ? "Login" : "Create Account"}
          </DialogTitle>
          {mode === "signup" && (
            <DialogDescription className="text-sm text-muted-foreground">
              Sign up for a new account
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-4">
          {mode === "signup" && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="rounded-full pl-10"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={mode === "login" ? "Enter your email or phone" : "Email address"}
              className="rounded-full pl-10"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "login" ? "Enter your password" : "Password"}
              className="rounded-full pl-10 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          <Button className="mt-2 w-full rounded-full py-5 font-body text-base font-semibold">
            {mode === "login" ? "Login" : "Create Account"}
          </Button>

          <div className="text-center font-body text-sm text-muted-foreground">
            {mode === "login" ? (
              <div className="flex items-center justify-between">
                <button className="text-primary hover:underline">Forgot password?</button>
                <button onClick={() => switchMode("signup")} className="text-primary font-semibold hover:underline">
                  Create account
                </button>
              </div>
            ) : (
              <p>
                Already have an account?{" "}
                <button onClick={() => switchMode("login")} className="text-primary font-semibold hover:underline">
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
