import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md rounded-2xl p-8">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            Login
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block font-body text-sm font-medium text-foreground">
              Email or Phone
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or phone"
              className="rounded-lg"
            />
          </div>

          <div>
            <label className="mb-1.5 block font-body text-sm font-medium text-foreground">
              Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="rounded-lg"
            />
          </div>

          <Button className="mt-2 w-full rounded-full py-5 font-body text-base font-semibold">
            Login
          </Button>

          <div className="flex items-center justify-between font-body text-sm">
            <button className="text-primary hover:underline">Forgot password?</button>
            <button className="text-primary hover:underline">Create account</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
