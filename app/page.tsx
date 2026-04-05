import type { ReactNode } from "react";
import { Great_Vibes, Manrope, Playfair_Display } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const accentFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-accent",
});

const navLinks = [
  { label: "Dishes", href: "#signature-dishes" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Opening", href: "#opening-experience" },
  { label: "Location", href: "#location" },
];

const featuredCards = [
  {
    title: "Signature Rolls",
    description:
      "Hand-crafted rolls layered with fresh seafood, delicate textures, and bold umami flavor for a refined yet inviting first impression.",
    image: "/dish-sushi-rolls.jpg",
    kicker: "Guest Favourite",
  },
  {
    title: "House Dumplings",
    description:
      "Steamed dumplings finished with house-made sauces and elevated presentation, designed to feel both comforting and memorable.",
    image: "/dish-dumplings.jpg",
    kicker: "Chef Selected",
  },
  {
    title: "Late Night Pours",
    description:
      "Curated cocktails and late-night pours designed to complement the menu and carry the atmosphere from dinner into the evening.",
    image: "/dish-cocktail.jpg",
    kicker: "Bar Feature",
  },
];

const socialGallery = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
];

const valuePoints = [
  {
    title: "Atmosphere",
    text: "Warm lighting, rich textures, and a calm, intimate setting designed to make every visit feel elevated without ever feeling overdone.",
  },
  {
    title: "Dining",
    text: "A menu experience centered around refined plates, shareable moments, and bold flavors that feel both thoughtful and inviting.",
  },
  {
    title: "Experience",
    text: "From the first pour to the last bite, every detail is designed to feel intentional, memorable, and worthy of coming back for.",
  },
];

const openingExperienceCards = [
  {
    title: "A Space With Intention",
    text: "A warm, modern setting designed for conversation, connection, and evenings that unfold at the right pace.",
  },
  {
    title: "Refined First Impressions",
    text: "Guests can expect an elevated atmosphere, curated dishes, and a brand experience that feels polished from the moment they arrive.",
  },
  {
    title: "Opening Week Energy",
    text: "A new destination on the Gold Coast bringing together fresh plates, intimate ambiance, and late-night dining appeal.",
  },
];

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

function GoldAccent({ children }: { children: ReactNode }) {
  return (
    <span
      className="text-[#b88945]"
      style={{ fontFamily: "var(--font-accent), cursive" }}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  title,
  accent,
  subcopy,
  light = false,
}: {
  title: string;
  accent?: string;
  subcopy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <h2
        className={`text-[2.8rem] leading-[0.98] tracking-[-0.03em] sm:text-[3.6rem] lg:text-[4.75rem] ${
          light ? "text-white" : "text-[#17130f]"
        }`}
        style={{ fontFamily: "var(--font-heading), serif" }}
      >
        {title}
        {accent ? (
          <>
            {" "}
            <GoldAccent>{accent}</GoldAccent>
          </>
        ) : null}
      </h2>

      {subcopy ? (
        <p
          className={`mt-6 max-w-2xl text-[1.02rem] leading-8 ${
            light ? "text-white/72" : "text-[#544a40]"
          }`}
          style={{ fontFamily: "var(--font-body), sans-serif" }}
        >
          {subcopy}
        </p>
      ) : null}
    </div>
  );
}

function MicroLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.42em] ${
        light ? "text-white/45" : "text-[#b88945]"
      }`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      {children}
    </p>
  );
}

function Divider({ light = false }: { light?: boolean }) {
  return <div className={`h-px w-full ${light ? "bg-white/12" : "bg-black/10"}`} />;
}

function FilledButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex min-h-[54px] items-center justify-center border px-7 text-sm font-semibold tracking-[0.08em] transition duration-300 ${className}`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      {children}
    </button>
  );
}

function OutlineButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex min-h-[54px] items-center justify-center border bg-transparent px-7 text-sm font-semibold tracking-[0.08em] transition duration-300 ${className}`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      {children}
    </button>
  );
}

function GoldFilledButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <FilledButton
      className={`!border-[#b88945] !bg-[#b88945] !text-white hover:opacity-90 ${className}`}
    >
      {children}
    </FilledButton>
  );
}

function WhiteGoldButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <FilledButton
      className={`!border-[#b88945] !bg-white !text-[#b88945] hover:opacity-90 ${className}`}
    >
      {children}
    </FilledButton>
  );
}

function WhiteOutlineButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <OutlineButton
      className={`!border-white/70 !text-white hover:bg-white/10 ${className}`}
    >
      {children}
    </OutlineButton>
  );
}

function GoldOutlineButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <OutlineButton
      className={`!border-[#b88945] !text-[#b88945] hover:bg-[#b88945] hover:text-white ${className}`}
    >
      {children}
    </OutlineButton>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <MicroLabel light>{title}</MicroLabel>
      <div
        className="mt-4 space-y-2 text-[0.95rem] leading-7 text-white/68"
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main
      className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} bg-[#f6f1e8] text-[#17130f]`}
    >
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden border-b border-black/10 bg-[#0f0d0b]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-restaurant.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.32),rgba(0,0,0,0.58),rgba(0,0,0,0.78))]" />

        <Container className="relative z-10 flex min-h-screen flex-col pb-10 pt-6">
          <header className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-white">
              <div
                className="flex h-12 w-12 items-center justify-center border border-[#d6b27a] text-[10px] font-semibold uppercase tracking-[0.34em] text-white"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                JIN
              </div>

              <div className="min-w-0">
                <p
                  className="text-[1.15rem] uppercase tracking-[0.26em] text-white"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  Jin Izakaya
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-semibold uppercase tracking-[0.34em] !text-white transition hover:!text-[#d6b27a]"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <GoldFilledButton>Reserve Opening Week</GoldFilledButton>
            </div>
          </header>

          <div className="grid flex-1 items-center gap-16 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:pt-24">
            <div className="max-w-4xl">
              <MicroLabel light>Opening Soon • Gold Coast • Mermaid Beach</MicroLabel>

              <h1
                className="mt-6 text-[4.6rem] leading-[0.88] tracking-[-0.05em] text-white sm:text-[5.7rem] lg:text-[8.5rem]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Jin Izakaya
              </h1>

              <p
                className="mt-3 text-[3rem] leading-none text-[#d7ab67] sm:text-[3.8rem] lg:text-[4.5rem]"
                style={{ fontFamily: "var(--font-accent), cursive" }}
              >
                opening soon
              </p>

              <p
                className="mt-8 max-w-2xl text-[1.2rem] leading-8 text-white/86"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                A modern Japanese dining experience bringing refined flavors,
                intimate ambiance, and late-night energy to Mermaid Beach.
              </p>

              <p
                className="mt-5 max-w-2xl text-[1.05rem] leading-9 text-white/70"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                Designed to feel calm, elevated, and memorable from the first
                pour to the last plate, Jin Izakaya introduces a polished new
                destination for dinner, drinks, and slow evenings on the Gold
                Coast.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <GoldFilledButton>View Menu</GoldFilledButton>
                <WhiteOutlineButton>Reserve Opening Week</WhiteOutlineButton>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-auto max-w-[460px] border border-white/16 bg-[rgba(255,255,255,0.06)] p-4 backdrop-blur-sm">
                <img
                  src="/about-interior.jpg"
                  alt="Jin Izakaya interior"
                  className="h-[470px] w-full object-cover"
                />

                <div className="border-x border-b border-white/10 px-6 py-7">
                  <MicroLabel light>Interior Concept</MicroLabel>

                  <h3
                    className="mt-4 text-[2.3rem] leading-[1.15] text-white"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    Warm textures, soft lighting, and a dining atmosphere
                    designed to feel intimate, modern, and intentional.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 border-t border-white/12 pt-6 md:grid-cols-3">
            <div>
              <MicroLabel light>Concept</MicroLabel>
              <p
                className="mt-3 max-w-sm text-[1rem] leading-7 text-white/76"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                Refined Japanese dining with an elevated yet welcoming feel.
              </p>
            </div>

            <div>
              <MicroLabel light>Location</MicroLabel>
              <p
                className="mt-3 max-w-sm text-[1rem] leading-7 text-white/76"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                Mermaid Beach, Gold Coast.
              </p>
            </div>

            <div>
              <MicroLabel light>Status</MicroLabel>
              <p
                className="mt-3 max-w-sm text-[1rem] leading-7 text-white/76"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                Opening Soon.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SIGNATURE DISHES */}
      <section
        id="signature-dishes"
        className="border-b border-black/10 bg-[#f6f1e8] py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              title="Signature"
              accent="dishes"
              subcopy="A curated preview of the refined plates, shareable favorites, and late-night pairings designed to shape the Jin Izakaya experience."
            />

            <div className="lg:justify-self-end">
              <GoldOutlineButton>View Full Menu</GoldOutlineButton>
            </div>
          </div>

          <div className="mt-14 grid gap-8 xl:grid-cols-[1.12fr_0.88fr_0.88fr]">
            <article className="border border-black/10 bg-white">
              <img
                src="/dish-steak-plate.jpg"
                alt="House standout plate"
                className="h-[580px] w-full object-cover"
              />

              <div className="border-t border-black/10 p-8 sm:p-10">
                <MicroLabel>Chef Featured</MicroLabel>

                <h3
                  className="mt-4 text-[2.5rem] leading-[1.08] tracking-[-0.03em] text-[#17130f] sm:text-[3rem]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  House Standout Plate
                </h3>

                <p
                  className="mt-5 max-w-xl text-[1rem] leading-8 text-[#544a40]"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  A signature plate designed to reflect Jin Izakaya’s approach
                  to balance, detail, and modern Japanese presentation.
                </p>
              </div>
            </article>

            {featuredCards.slice(0, 2).map((item) => (
              <article
                key={item.title}
                className="border border-black/10 bg-[#fbf8f2]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[360px] w-full object-cover"
                />

                <div className="border-t border-black/10 p-8">
                  <MicroLabel>{item.kicker}</MicroLabel>

                  <h3
                    className="mt-4 text-[2rem] leading-[1.1] tracking-[-0.03em] text-[#17130f] sm:text-[2.35rem]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-4 text-[1rem] leading-8 text-[#544a40]"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
            <article className="border border-black/10 bg-[#fbf8f2]">
              <img
                src={featuredCards[2].image}
                alt={featuredCards[2].title}
                className="h-[360px] w-full object-cover"
              />

              <div className="border-t border-black/10 p-8">
                <MicroLabel>{featuredCards[2].kicker}</MicroLabel>

                <h3
                  className="mt-4 text-[2rem] leading-[1.1] tracking-[-0.03em] text-[#17130f] sm:text-[2.35rem]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  {featuredCards[2].title}
                </h3>

                <p
                  className="mt-4 text-[1rem] leading-8 text-[#544a40]"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {featuredCards[2].description}
                </p>
              </div>
            </article>

            <div className="border border-[#b88945] bg-[#b88945] px-8 py-10 sm:px-10 sm:py-12">
              <p
                className="text-[2.6rem] leading-none text-white sm:text-[3.5rem]"
                style={{ fontFamily: "var(--font-accent), cursive" }}
              >
                special offers
              </p>

              <h3
                className="mt-4 text-[2.7rem] leading-[1.02] tracking-[-0.04em] text-white sm:text-[4.3rem]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Opening Week Highlights
              </h3>

              <p
                className="mt-6 max-w-3xl text-[1.05rem] leading-9 text-white/88"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                A first look at the atmosphere, signature plates, and dining
                moments that will define Jin Izakaya from opening week onward.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div
                  className="border border-white/35 bg-white px-5 py-6 text-[1rem] font-medium leading-7 text-[#b88945]"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  Signature dining moments
                </div>

                <div
                  className="border border-white/35 bg-white px-5 py-6 text-[1rem] font-medium leading-7 text-[#b88945]"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  Elevated late-night atmosphere
                </div>
              </div>

              <div className="mt-8">
                <WhiteOutlineButton>Explore Specials</WhiteOutlineButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-b border-black/10 bg-[#f8f3eb] py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
            <div className="border border-black/10 bg-white p-4">
              <img
                src="/about-interior.jpg"
                alt="About Jin Izakaya"
                className="h-[680px] w-full object-cover"
              />
            </div>

            <div className="max-w-3xl">
              <SectionHeading
                title="A Modern Take on"
                accent="Japanese Dining"
                subcopy="Crafted dishes, bold flavors, and an elevated dining experience designed for slow evenings and unforgettable nights."
              />

              <p
                className="mt-6 max-w-2xl text-[1.04rem] leading-9 text-[#544a40]"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                Jin Izakaya is designed to feel polished yet inviting, bringing
                together refined presentation, warm interiors, and a dining
                atmosphere that encourages guests to stay awhile.
              </p>

              <p
                className="mt-6 max-w-2xl text-[1.04rem] leading-9 text-[#544a40]"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                From signature dishes to curated late-night pours, the concept
                is rooted in creating an experience that feels intimate,
                memorable, and distinctly modern.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <GoldFilledButton className="!border-white/70">
                  Explore the Concept
                </GoldFilledButton>
                <WhiteGoldButton>View Menu</WhiteGoldButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-b border-black/10 bg-[#ead7b8] py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-14 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
            <div className="border border-black/10 bg-white p-4">
              <img
                src="/experience-dining-room.jpg"
                alt="Jin Izakaya dining room"
                className="h-[720px] w-full object-cover"
              />
            </div>

            <div className="max-w-2xl">
              <SectionHeading
                title="Designed for"
                accent="slow evenings"
                subcopy="An atmosphere designed for connection, conversation, and slow dining. From warm lighting to curated interiors, every detail is intentional."
              />

              <div className="mt-10 space-y-8">
                {valuePoints.map((point, index) => (
                  <div key={point.title}>
                    {index !== 0 ? <Divider /> : null}
                    <div className={index !== 0 ? "pt-8" : ""}>
                      <h3
                        className="text-[2rem] leading-tight tracking-[-0.03em] text-[#17130f] sm:text-[2.35rem]"
                        style={{ fontFamily: "var(--font-heading), serif" }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="mt-3 max-w-xl text-[1rem] leading-8 text-[#473d34]"
                        style={{ fontFamily: "var(--font-body), sans-serif" }}
                      >
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <WhiteGoldButton>Reserve Your Table</WhiteGoldButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OPENING EXPERIENCE */}
      <section
        id="opening-experience"
        className="border-b border-black/10 bg-[#f6f1e8] py-24 lg:py-32"
      >
        <Container>
          <SectionHeading
            title="Opening"
            accent="experience"
            subcopy="A first look at what guests can expect from Jin Izakaya — from the atmosphere to the pacing, menu energy, and overall feel of the evening."
          />

          <div className="mt-14 grid gap-8 xl:grid-cols-3">
            {openingExperienceCards.map((card) => (
              <article
                key={card.title}
                className="border border-black/10 bg-white p-8 sm:p-10"
              >
                <h3
                  className="text-[2rem] leading-[1.1] tracking-[-0.03em] text-[#17130f] sm:text-[2.35rem]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  {card.title}
                </h3>

                <p
                  className="mt-5 text-[1rem] leading-8 text-[#544a40]"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA STRIP */}
      <section className="border-b border-black/10 bg-[#17110d] py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[1fr_auto] xl:items-center">
            <div className="max-w-4xl">
              <p
                className="text-[3rem] leading-none text-[#d7ab67] sm:text-[4rem]"
                style={{ fontFamily: "var(--font-accent), cursive" }}
              >
                reserve now
              </p>

              <h2
                className="mt-3 text-[3rem] leading-[0.98] tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[5rem]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Be among the first to experience Jin Izakaya.
              </h2>

              <p
                className="mt-6 max-w-2xl text-[1.05rem] leading-9 text-white/72"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                A modern Japanese dining destination designed for refined
                evenings, signature flavors, and a memorable first impression on
                the Gold Coast.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row xl:flex-col">
              <GoldFilledButton>Reserve Your Table</GoldFilledButton>
              <WhiteOutlineButton>Join Opening List</WhiteOutlineButton>
            </div>
          </div>
        </Container>
      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="border-b border-black/10 bg-[#f6f1e8] py-24 lg:py-32"
      >
        <Container>
          <div className="grid gap-12 xl:grid-cols-[0.85fr_1.15fr] xl:items-center">
            <div className="max-w-2xl">
              <SectionHeading
                title="Find Us in"
                accent="Mermaid Beach"
                subcopy="Located in Mermaid Beach, Gold Coast — Jin Izakaya brings a new standard of Japanese dining to the area."
              />

              <div className="mt-10 space-y-6">
                <div>
                  <Divider />
                  <div className="pt-6">
                    <MicroLabel>Address</MicroLabel>
                    <p
                      className="mt-3 text-[1.1rem] leading-8 text-[#17130f]"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}
                    >
                      Shop 12, 2563 Gold Coast Highway, Mermaid Beach
                    </p>
                  </div>
                </div>

                <div>
                  <Divider />
                  <div className="pt-6">
                    <MicroLabel>Opening</MicroLabel>
                    <p
                      className="mt-3 text-[1.1rem] leading-8 text-[#17130f]"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}
                    >
                      Opening Soon
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <WhiteGoldButton>Get Directions</WhiteGoldButton>
              </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-[0.7fr_1.3fr]">
              <div className="border border-black/10 bg-white p-4">
                <img
                  src="/location-front.jpg"
                  alt="Jin Izakaya location"
                  className="h-[320px] w-full object-cover xl:h-full"
                />
              </div>

              <div className="border border-black/10 bg-[#fbf8f2] p-4">
                <div className="flex h-[460px] items-center justify-center border border-black/10 bg-[#ece4d8] px-6 text-center">
                  <div>
                    <MicroLabel>Map Placeholder</MicroLabel>

                    <p
                      className="mt-4 text-[2.3rem] leading-tight tracking-[-0.03em] text-[#17130f] sm:text-[3rem]"
                      style={{ fontFamily: "var(--font-heading), serif" }}
                    >
                      Mermaid Beach, Gold Coast
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* STAY CONNECTED */}
      <section className="border-b border-white/10 bg-[#2a2521] py-24 lg:py-32">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[1fr_auto] xl:items-end">
            <SectionHeading
              title="Stay"
              accent="connected"
              subcopy="Follow the build, opening updates, and the first look at the atmosphere, dishes, and dining moments still to come."
              light
            />

            <div className="xl:justify-self-end">
              <WhiteOutlineButton>Follow on Instagram</WhiteOutlineButton>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {socialGallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="border border-white/10 bg-[#312b26] p-3"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="h-[320px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#17130f] py-16 text-white">
        <Container>
          <div className="grid gap-12 border-b border-white/10 pb-12 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-xl">
              <p
                className="text-[2.4rem] leading-none tracking-[-0.03em] text-white sm:text-[3rem]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Jin Izakaya
              </p>

              <p
                className="mt-5 text-[1rem] leading-8 text-white/68"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                Modern Japanese dining, refined late-night atmosphere, and a
                new opening soon in Mermaid Beach.
                <br />
                Gold Coast, Australia
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <GoldFilledButton>Reserve Your Table</GoldFilledButton>
                <WhiteGoldButton>View Menu</WhiteGoldButton>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <FooterColumn
                title="Visit"
                items={[
                  "Shop 12, 2563 Gold Coast Highway",
                  "Mermaid Beach",
                  "Opening Soon",
                ]}
              />
              <FooterColumn
                title="Connect"
                items={[
                  "@jin.izakaya",
                  "jin.izakaya1@gmail.com",
                  "Bookings Coming Soon",
                ]}
              />
              <FooterColumn
                title="Hours"
                items={[
                  "Launching Soon",
                  "Dinner Service",
                  "Late Night Dining",
                ]}
              />
            </div>
          </div>

          <div
            className="flex flex-col gap-4 pt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/35 md:flex-row md:items-center md:justify-between"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            <p>Designed by Ashanti Yow from The Social Infinity</p>
            <p>Homepage concept mockup</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}