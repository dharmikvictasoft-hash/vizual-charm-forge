import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Sparkles, LayoutDashboard, Palette, Bell, Smartphone, Apple,
  ChevronDown, ChevronRight, BookOpen, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation — Victa Mobile App Builder for Shopify" },
      { name: "description", content: "Complete guide to using Victa — the no-code mobile app builder for Shopify. Setup, design, push notifications, and store submission." },
      { property: "og:title", content: "Documentation — Victa" },
      { property: "og:description", content: "Step-by-step guide to launching your Shopify mobile app with Victa." },
    ],
  }),
  component: Documentation,
});

type Item = { id: string; q: string; a: React.ReactNode };
type Section = { id: string; title: string; subtitle: string; icon: any; items: Item[] };

const sections: Section[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    subtitle: "Get to know how Victa fits into your Shopify workflow",
    icon: LayoutDashboard,
    items: [
      {
        id: "about-victa",
        q: "About Victa",
        a: (
          <>
            <p>Victa is a no-code platform that turns any Shopify store into a polished native iOS and Android app. Connect your store, design with drag-and-drop blocks, preview live on a real device, and publish to the App Store and Google Play — all without writing a single line of code.</p>
            <p className="mt-3">Your product catalog, inventory, customers and orders stay in sync with Shopify in real time, so the app is always a true reflection of your storefront.</p>
          </>
        ),
      },
      {
        id: "key-benefits",
        q: "Key benefits",
        a: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Up to 5× higher conversion rates compared to mobile web checkout.</li>
            <li>Free unlimited push notifications to bring shoppers back at zero cost per send.</li>
            <li>One-tap native checkout powered by Shopify, with Apple Pay and Google Pay support.</li>
            <li>Beautifully crafted templates plus a visual builder for full creative control.</li>
            <li>Real-time analytics so you can see exactly what drives revenue inside your app.</li>
            <li>Hands-on launch help — we even submit your app to both stores for you.</li>
          </ul>
        ),
      },
      {
        id: "how-victa-works",
        q: "How Victa works",
        a: (
          <ol className="list-decimal pl-5 space-y-2">
            <li>Install the Victa app from the Shopify App Store and authorize access to your store.</li>
            <li>Pick a starter template or build a layout from scratch using the visual editor.</li>
            <li>Preview the app live on your phone by scanning a QR code from the dashboard.</li>
            <li>Send your branded assets to our team and we handle the App Store and Google Play submission.</li>
            <li>Once approved, use Victa's dashboard to send push campaigns and track performance.</li>
          </ol>
        ),
      },
      {
        id: "who-is-this-for",
        q: "Who is this for?",
        a: (
          <p>Victa is built for Shopify merchants who want a mobile presence without hiring an agency — from new brands shipping their first app, to established DTC stores looking to grow repeat purchases through a faster, more personal mobile experience. If you have an active Shopify store and a logo, you're ready to go.</p>
        ),
      },
      {
        id: "before-you-launch",
        q: "Before you launch",
        a: (
          <ul className="list-disc pl-5 space-y-2">
            <li>An active Shopify plan (Basic or higher) with at least a few published products.</li>
            <li>A high-resolution logo (1024×1024 PNG) and a basic brand color palette.</li>
            <li>Apple Developer Program membership ($99/year) for iOS publishing.</li>
            <li>Google Play Console account (one-time $25 fee) for Android publishing.</li>
            <li>App name, short description, and a few screenshots or product images for store listings.</li>
          </ul>
        ),
      },
    ],
  },
  {
    id: "build-your-app",
    title: "Build Your App",
    subtitle: "Design every screen visually with the Victa editor",
    icon: Palette,
    items: [
      {
        id: "choose-template",
        q: "Choose a starting template",
        a: <p>Pick from a library of conversion-tested templates organized by category — fashion, beauty, food, electronics and more. Each template is fully editable, so it's just a launchpad. You can also start from a blank canvas if you'd prefer to design your app from scratch.</p>,
      },
      {
        id: "design-screens",
        q: "Design screens with drag & drop",
        a: <p>Use the visual builder to add blocks like hero banners, product carousels, collection grids, countdown timers, video and rich text. Reorder them by dragging, tweak colors, fonts and spacing in the inspector, and instantly see the result in the live preview.</p>,
      },
      {
        id: "navigation-menus",
        q: "Set up navigation & menus",
        a: <p>Configure your bottom tab bar, side drawer and shortcut menus. Link each item to a collection, product, custom page or external URL. Victa automatically generates a native experience that feels right on both iOS and Android.</p>,
      },
      {
        id: "preview-on-device",
        q: "Preview live on your device",
        a: <p>Download the Victa Preview app on your phone, scan the QR code shown in the dashboard, and your in-progress design loads instantly. Every change you save shows up on the device within seconds.</p>,
      },
      {
        id: "publish-changes",
        q: "Publish updates anytime",
        a: <p>Most updates — banners, products, menus, colors — ship over the air with one click. You don't need to resubmit to the stores for routine content changes.</p>,
      },
    ],
  },
  {
    id: "push-notification",
    title: "Push Notification",
    subtitle: "Re-engage shoppers with unlimited free push campaigns",
    icon: Bell,
    items: [
      {
        id: "why-push",
        q: "Why push notifications matter",
        a: <p>Push has open rates of 5–10× email, and Victa includes unlimited sends on every plan. Use it to recover carts, announce drops, reward loyal customers and drive flash sales — without paying per message.</p>,
      },
      {
        id: "create-campaign",
        q: "Create a campaign",
        a: <p>From the Push tab, pick a campaign type, write a headline and body, attach an image and choose a deep-link destination (a product, collection, page or cart). Preview how it will look on iOS and Android before scheduling or sending.</p>,
      },
      {
        id: "segments-automations",
        q: "Segments & automations",
        a: <p>Target by behavior — first-time buyers, recent visitors, cart abandoners, VIPs — or set up automations that trigger on events like a back-in-stock restock or a price drop. Smart send-time optimization picks the moment each shopper is most likely to open.</p>,
      },
      {
        id: "measure-results",
        q: "Measure results",
        a: <p>Each campaign reports delivery, opens, clicks and attributed revenue. Compare campaigns side-by-side and export to CSV for deeper analysis.</p>,
      },
    ],
  },
  {
    id: "google-play-store",
    title: "Google Play Store",
    subtitle: "Publish your Android app on Google Play",
    icon: Smartphone,
    items: [
      {
        id: "play-console",
        q: "Create a Play Console account",
        a: <p>Head to play.google.com/console and pay the one-time $25 registration fee. Choose an Organization or Personal account based on how your business is set up. Verification typically completes within 48 hours.</p>,
      },
      {
        id: "play-app-listing",
        q: "Prepare your app listing",
        a: <p>Gather a 512×512 icon, a 1024×500 feature graphic, at least two phone screenshots, a short description (80 chars), and a full description (4000 chars). Victa's dashboard provides a checklist and templates you can copy from.</p>,
      },
      {
        id: "play-upload",
        q: "Upload & submission",
        a: <p>Share your assets with the Victa team and we'll build your signed Android bundle, upload it to your Play Console, and submit it for review. Google reviews usually take 1–3 days for a first submission.</p>,
      },
      {
        id: "play-updates",
        q: "Future updates",
        a: <p>Content updates ship over the air via Victa with no review needed. Only structural updates — new native features or SDK upgrades — require a new build, which Victa handles for you automatically every few weeks.</p>,
      },
    ],
  },
  {
    id: "apple-app-store",
    title: "Apple App Store",
    subtitle: "Publish your iOS app on the Apple App Store",
    icon: Apple,
    items: [
      {
        id: "apple-developer",
        q: "Apple Developer Program",
        a: <p>Enroll at developer.apple.com/programs ($99/year). Use an Apple ID tied to your business and confirm two-factor authentication. Approval normally takes 24–48 hours, sometimes longer for organizations.</p>,
      },
      {
        id: "appstore-connect",
        q: "Set up App Store Connect",
        a: <p>Create an app record in App Store Connect, reserve your app name, choose a bundle ID, and fill in basic metadata (category, age rating, contact info). Victa will give you the exact values to enter.</p>,
      },
      {
        id: "appstore-assets",
        q: "Prepare app store assets",
        a: <p>You'll need a 1024×1024 icon, screenshots for 6.7" and 6.5" iPhones, a promotional text, a description, keywords, and a privacy policy URL. Templates in your Victa dashboard make this quick.</p>,
      },
      {
        id: "appstore-submission",
        q: "Submission & review",
        a: <p>The Victa team uploads your build via Xcode, submits to TestFlight for QA, and then to App Review. Apple's review typically takes 24–48 hours. If Apple requests changes, we handle the back-and-forth on your behalf.</p>,
      },
      {
        id: "appstore-launch",
        q: "Launch day",
        a: <p>Once approved, you can release immediately or schedule a launch date. We recommend pairing your launch with a push campaign and a homepage banner on your Shopify store to drive your first wave of installs.</p>,
      },
    ],
  },
];

function Accordion({ item, index }: { item: Item; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`group relative rounded-2xl border bg-card transition-all duration-300 overflow-hidden ${
        open
          ? "border-primary/30 shadow-md"
          : "border-border/70 shadow-sm hover:border-primary/30 hover:shadow-md"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-5 w-full py-5 px-5 text-left"
      >
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold tracking-wide ring-1 transition-colors ${
            open
              ? "bg-primary/10 text-primary ring-primary/20"
              : "bg-primary/5 text-primary/80 ring-primary/10 group-hover:bg-primary/10"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-base md:text-lg font-semibold text-foreground leading-snug">
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            open
              ? "bg-primary/10 text-primary rotate-180"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 pl-[4.75rem] text-muted-foreground leading-relaxed text-sm md:text-base">
            {item.a}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  const activeIndex = sections.findIndex((s) => s.id === active);
  return (
    <div className="lg:sticky lg:top-24">
      <div className="rounded-2xl border border-border/70 bg-muted/40 p-4 shadow-sm">
        <div className="mb-5 flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow">
            <BookOpen className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Docs</p>
            <p className="text-sm font-semibold leading-none mt-1">Contents</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {sections.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelect(s.id)}
                className={`group flex items-center justify-between gap-3 w-full py-2.5 px-3 rounded-xl text-sm transition-all ${
                  isActive
                    ? "bg-card shadow-sm ring-1 ring-border"
                    : "hover:bg-card/70"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-gradient-hero text-primary-foreground shadow-glow"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <div className="min-w-0 text-left">
                    <p className={`truncate text-sm ${isActive ? "font-semibold text-foreground" : "font-medium text-foreground/80"}`}>
                      {s.title}
                    </p>
                    <p className="truncate text-[11px] text-muted-foreground mt-0.5">
                      {s.items.length} articles
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 flex-shrink-0 transition-opacity ${
                    isActive ? "text-muted-foreground/60 opacity-100" : "text-muted-foreground/40 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </nav>
        <div className="mt-6 px-2">
          <div className="flex justify-between text-[11px] font-semibold text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{activeIndex + 1}/{sections.length}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/60">
            <div
              className="h-full bg-gradient-hero rounded-full transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function Documentation() {
  const [active, setActive] = useState(sections[0].id);
  const current = sections.find((s) => s.id === active)!;

  return (
    <main className="min-h-screen bg-background">
      {/* Top nav (consistent with home) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-hero shadow-glow flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">Victa</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/documentation" className="text-foreground font-medium">Resources</Link>
            <a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>
          <Button size="sm" className="bg-gradient-hero hover:opacity-90 shadow-glow rounded-full">Get Started</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-background">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            color: "var(--primary)",
          }}
        />
        <div className="container mx-auto px-6 relative text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            Resources
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-foreground">
            Victa <span className="text-gradient">Documentation</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to launch and grow a native mobile app for your Shopify store — from your first preview to your hundredth push campaign.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-6 relative max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-72 flex-shrink-0">
              <Sidebar active={active} onSelect={setActive} />
            </aside>

            <div className="flex-1 min-w-0">
              <div className="rounded-3xl border border-border bg-card p-6 lg:p-10 shadow-sm">
                <header className="mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {current.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{current.subtitle}</p>
                </header>
                <div className="space-y-4">
                  {current.items.map((item, i) => (
                    <Accordion key={item.id} item={item} index={i} />
                  ))}
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border">
                  {sections.findIndex((s) => s.id === active) > 0 ? (
                    <Button
                      variant="outline"
                      className="rounded-full"
                      onClick={() => {
                        const i = sections.findIndex((s) => s.id === active);
                        setActive(sections[i - 1].id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      ← {sections[Math.max(0, sections.findIndex((s) => s.id === active) - 1)].title}
                    </Button>
                  ) : <span />}

                  {sections.findIndex((s) => s.id === active) < sections.length - 1 && (
                    <Button
                      className="bg-gradient-hero shadow-glow rounded-full"
                      onClick={() => {
                        const i = sections.findIndex((s) => s.id === active);
                        setActive(sections[i + 1].id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {sections[Math.min(sections.length - 1, sections.findIndex((s) => s.id === active) + 1)].title}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold">Victa</span>
            <span className="text-muted-foreground text-sm ml-3">© 2026 All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <Link to="/documentation" className="hover:text-foreground">Resources</Link>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
