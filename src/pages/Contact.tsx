import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-display text-4xl font-bold text-foreground">Contact Us</h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span className="font-body text-sm text-foreground">+91 73828 38383</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span className="font-body text-sm text-foreground">support@zeroharm.in</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-primary" />
                  <span className="font-body text-sm text-foreground">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-lg border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-lg border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="resize-none rounded-lg border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button className="rounded-lg bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-zh-green-light">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
