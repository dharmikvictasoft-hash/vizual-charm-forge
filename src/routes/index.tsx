import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Sparkles, Zap, Smartphone, Bell, Palette, BarChart3,
  Rocket, ShieldCheck, Play, ArrowRight, Check, Star,
  TrendingUp, Layers, Globe
} from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victa — Turn Your Shopify Store Into a Mobile App" },
      { name: "description", content: "No-code mobile app builder for Shopify. Boost conversions 5X with native iOS & Android apps. Drag & drop, unlimited push notifications." },
    ],
  }),
  component: Index,
});

const brands = ["SHOPIFY", "STRIPE", "META", "GOOGLE", "APPLE", "PAYPAL", "KLAVIYO", "TIKTOK"];

const features = [
  { icon: Palette, title: "Drag & Drop Builder", desc: "Design pixel-perfect screens visually. No code, no designers needed.", color: "from-fuchsia-500 to-purple-500" },
  { icon: Bell, title: "Unlimited Push", desc: "Re-engage customers with free unlimited push notifications.", color: "from-cyan-400 to-blue-500" },
  { icon: Zap, title: "5X Faster Checkout", desc: "Native one-tap checkout that converts browsers into buyers.", color: "from-emerald-400 to-teal-500" },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Track every tap, sale, and user journey in one dashboard.", color: "from-amber-400 to-orange-500" },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "SOC2 compliant with end-to-end encryption baked in.", color: "from-rose-500 to-pink-500" },
  { icon: Globe, title: "Global CDN", desc: "Lightning load times in 190+ countries out of the box.", color: "from-violet-500 to-indigo-500" },
];

const steps = [
  { n: "01", title: "Connect Store", desc: "One-click Shopify sync. Products, inventory & orders live instantly." },
  { n: "02", title: "Design Visually", desc: "Pick a template or build from scratch with our drag-drop canvas." },
  { n: "03", title: "Preview Live", desc: "Scan a QR and test your app on a real device in seconds." },
  { n: "04", title: "Publish to Stores", desc: "We handle App Store & Google Play submission for you." },
];

const testimonials = [
  { name: "Sarah Chen", role: "Founder, Lumen Apparel", text: "Conversions jumped 4.7X in the first month. The push notifications alone pay for the platform.", rating: 5 },
  { name: "Marcus Reid", role: "CEO, NorthGrid", text: "We launched in 6 days. No developers, no agency fees. Game changer for our DTC brand.", rating: 5 },
  { name: "Aisha Patel", role: "CMO, Bloomtide", text: "The analytics dashboard is gorgeous. Finally I can see what actually drives revenue in mobile.", rating: 5 },
];

const plans = [
  { name: "Starter", price: "29", desc: "For new stores testing the waters.", features: ["1 mobile app", "Up to 1,000 MAU", "Basic templates", "Email support"], cta: "Start Free Trial", highlight: false },
  { name: "Growth", price: "99", desc: "For scaling brands ready to win.", features: ["Unlimited apps", "Up to 50,000 MAU", "All templates + custom", "Unlimited push", "Priority chat support", "Advanced analytics"], cta: "Get Growth", highlight: true },
  { name: "Enterprise", price: "Custom", desc: "For high-volume merchants.", features: ["Everything in Growth", "Unlimited MAU", "Dedicated CSM", "SSO & SOC2", "SLA guarantee", "Custom integrations"], cta: "Talk to Sales", highlight: false },
];

function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-hero shadow-glow flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">Victa</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Customers</a>
        </div>
        <Button size="sm" className="bg-gradient-hero hover:opacity-90 shadow-glow rounded-full">Get Started</Button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="glass border-primary/30 text-foreground gap-2 py-2 px-4 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              5X Conversions. Zero Guesswork.
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
              Turn Your Shopify Into A{" "}
              <span className="text-gradient">Mobile Empire</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              No code. No designers. Just results. Build native iOS & Android apps with drag-and-drop simplicity. Boost conversions by 5X with unlimited free push notifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow rounded-full text-base h-14 px-8">
                Start Building Free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="glass rounded-full text-base h-14 px-8 border-border">
                <Play className="mr-2 w-4 h-4" /> Watch 90-sec demo
              </Button>
            </div>
            <div className="flex gap-10 pt-4">
              <div>
                <div className="flex items-center gap-2 text-3xl font-bold">
                  <TrendingUp className="w-6 h-6 text-neon" />
                  <span className="text-gradient">+45%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Avg. sales boost</p>
              </div>
              <div className="border-l border-border pl-10">
                <div className="text-3xl font-bold text-gradient">5X</div>
                <p className="text-sm text-muted-foreground mt-1">Customer retention</p>
              </div>
              <div className="border-l border-border pl-10">
                <div className="text-3xl font-bold text-gradient">10k+</div>
                <p className="text-sm text-muted-foreground mt-1">Stores launched</p>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-30 rounded-full" />
            <img
              src={heroPhone}
              alt="Victa mobile app preview"
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-card w-full"
            />
            <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-glow animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neon/20 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Push delivered</p>
                  <p className="text-sm font-semibold">+2,341 opens</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-neon animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Today's revenue</p>
                  <p className="text-sm font-semibold text-neon">$12,498</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
        Powering brands integrated with
      </p>
      <div className="flex overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="text-2xl font-black text-muted-foreground/60 tracking-tight">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge className="glass mb-4 rounded-full">Everything you need</Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Built for <span className="text-gradient">serious commerce</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every tool a modern Shopify brand needs to dominate mobile — bundled in one beautiful platform.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="glass border-border p-8 group hover:shadow-glow transition-all duration-500 hover:-translate-y-1 bg-gradient-card">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge className="glass mb-4 rounded-full">Lightning fast setup</Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Launch in <span className="text-gradient">4 simple steps</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <Card className="glass bg-gradient-card border-border p-8 h-full hover:shadow-glow transition-all">
                <div className="text-6xl font-black text-gradient mb-4">{s.n}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Card>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-5 w-6 h-6 text-primary/50 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge className="glass mb-4 rounded-full">Loved by 10,000+ brands</Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Don't take our <span className="text-gradient">word for it</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="glass bg-gradient-card border-border p-8 hover:shadow-glow transition-all">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-neon text-neon" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge className="glass mb-4 rounded-full">Simple pricing</Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Pricing that <span className="text-gradient">scales with you</span>
          </h2>
          <p className="text-muted-foreground text-lg">14-day free trial. No credit card required. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <Card
              key={i}
              className={`p-8 border-border transition-all hover:-translate-y-2 ${
                p.highlight
                  ? "bg-gradient-hero shadow-glow scale-105 border-transparent"
                  : "glass bg-gradient-card hover:shadow-glow"
              }`}
            >
              {p.highlight && (
                <Badge className="mb-4 bg-neon text-neon-foreground rounded-full">Most Popular</Badge>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${p.highlight ? "text-primary-foreground" : ""}`}>{p.name}</h3>
              <p className={`text-sm mb-6 ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mb-8">
                <span className={`text-5xl font-black ${p.highlight ? "text-primary-foreground" : "text-gradient"}`}>
                  {p.price === "Custom" ? p.price : `$${p.price}`}
                </span>
                {p.price !== "Custom" && (
                  <span className={`text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/mo</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm ${p.highlight ? "text-primary-foreground" : ""}`}>
                    <Check className={`w-4 h-4 ${p.highlight ? "text-neon" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full h-12 ${
                  p.highlight ? "bg-background text-foreground hover:bg-background/90" : "bg-gradient-hero shadow-glow"
                }`}
              >
                {p.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-hero p-16 text-center shadow-glow">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative max-w-3xl mx-auto">
            <Layers className="w-12 h-12 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-4xl md:text-6xl font-black text-primary-foreground tracking-tight mb-6">
              Your mobile empire starts today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join 10,000+ Shopify brands shipping faster, converting higher and growing smarter with Victa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full h-14 px-8 text-base">
                Start Building Free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full h-14 px-8 text-base bg-transparent">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold">Victa</span>
            <span className="text-muted-foreground text-sm ml-3">© 2026 All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
