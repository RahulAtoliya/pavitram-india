import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-navy"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4 text-white">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white font-display">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-white/70">
          Something went wrong. Try refreshing or head back home.
        </p>
        {error?.message && (
          <div className="mt-4 p-4 bg-red-950/40 border border-red-500/30 rounded-xl text-left overflow-auto max-h-48">
            <p className="text-xs font-mono text-red-400 font-bold">
              {error.name}: {error.message}
            </p>
            {error.stack && (
              <pre className="mt-2 text-[11px] font-mono text-red-300/80 whitespace-pre-wrap">
                {error.stack}
              </pre>
            )}
          </div>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:border-gold hover:text-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

import FAVICON from "@/assets/pavitram-logo.jpg";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pavitram India — Intellectual Citizen · Prosperous Family · Self-Reliant Society" },
      {
        name: "description",
        content:
          "Pavitram India is a cooperative self-reliant community connecting members across daily needs, education, health, real estate and essential services.",
      },
      { name: "author", content: "Pavitram India" },
      { property: "og:title", content: "Pavitram India" },
      {
        property: "og:description",
        content:
          "A cooperative self-reliant community building Intellectual Citizens, Prosperous Families and a Self-Reliant Society.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: FAVICON },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'hi',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
          defer
        />
        <style>{`
          /* Hide editor badge overlay if present */
          #lovable-badge, [data-lovable-badge], a[href*="lovable.dev"][class*="badge"] { display: none !important; }
          
          /* Hide Google Translate top bar and elements */
          .skiptranslate, .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame {
            display: none !important;
          }
          body {
            top: 0 !important;
          }
        `}</style>
      </head>
      <body>
        <div id="google_translate_element" style={{ display: "none" }}></div>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { Navbar, Footer, ScrollToTop, ToastHost } from "@/components/site";
import { AnimatePresence, motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";

function AnimatedOutlet() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-haze">
        <Navbar />
        <main className="min-h-screen">
          <AnimatedOutlet />
        </main>
        <Footer />
        <ScrollToTop />
        <ToastHost />
      </div>
    </QueryClientProvider>
  );
}
