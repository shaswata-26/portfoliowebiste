"use client";

import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Globe,
  Layers3,
  Mail,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { FadeUp, FloatCard } from "./motion";
import { motion } from "framer-motion";

const projects = [
  {
    title: "79ER Travel Platform",
    description:
      "A full-stack travel booking platform with dynamic UI, admin workflows, and scalable architecture.",
    tag: "Full Stack Platform",
    url: "https://79er.co",
  },
  {
    title: "KundliVeda",
    description:
      "An AI-powered astrology platform with chatbot, subscriptions, and real-time user flow.",
    tag: "AI SaaS Product",
    url: "https://kundliveda.com",
  },
  {
    title: "Hercules Sports",
    description:
      "A CMS-based product catalog system with category hierarchy and admin management.",
    tag: "CMS Platform",
    url: "https://hercules.hiremyrecruiter.com/",
  },
];

const services = [
  "Premium responsive websites",
  "Frontend architecture and animations",
  "Full-stack product development",
  "Admin dashboards and CMS systems",
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}

function Header() {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan text-white shadow-glow">
            SP
          </span>
          Shaswata Panda
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan/40 hover:bg-white/15"
        >
          Let’s Talk
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-20"
    >
      <div>
        <FadeUp>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
            <Sparkles className="h-4 w-4" /> Full-Stack Developer
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            I build{" "}
            <span className="gradient-text">modern full-stack products</span>{" "}
            with premium UI, strong performance, and scalable architecture.
          </h1>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            I’m Shaswata Panda, a freelance full-stack developer focused on
            React, Next.js, Node.js, and MongoDB. I create responsive digital
            products with clean code, smooth interactions, and production-ready
            systems.
          </p>
        </FadeUp>

        <FadeUp delay={0.24} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.02]"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cyan/50 hover:bg-white/10"
          >
            Contact Me
          </a>
        </FadeUp>

        <FadeUp
          delay={0.3}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            ["3+", "Major client projects"],
            ["2+", "Years of development"],
            ["100%", "Responsive build focus"],
          ].map(([value, label]) => (
            <div key={label} className="section-shell p-5">
              <div className="text-2xl font-semibold text-white">{value}</div>
              <div className="mt-2 text-sm text-white/70">{label}</div>
            </div>
          ))}
        </FadeUp>
      </div>

      <FloatCard className="relative">
        <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-accent/25 via-transparent to-cyan/20 blur-3xl" />
        <div className="section-shell overflow-hidden p-4 shadow-glow sm:p-6">
          <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-white/70">Featured Project</p>
                <h2 className="mt-1 text-xl font-semibold text-white">
                  KundliVeda
                </h2>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                Live Product
              </span>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Panel
                title="Frontend UI"
                value="Next.js"
                icon={<Zap className="h-4 w-4" />}
              />
              <Panel
                title="Animations"
                value="Framer Motion"
                icon={<Layers3 className="h-4 w-4" />}
              />
              <Panel
                title="Backend APIs"
                value="Node + MongoDB"
                icon={<Globe className="h-4 w-4" />}
              />
              <Panel
                title="User Flow"
                value="Subscription System"
                icon={<Star className="h-4 w-4" />}
              />
            </div>

            <div className="mt-5 rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-white/80">Product Preview</span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Case Study
                </span>
              </div>
              <div className="grid gap-3">
                <div className="h-24 rounded-2xl bg-gradient-to-r from-accent/40 to-cyan/30" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-white/10" />
                  <div className="h-20 rounded-2xl bg-white/10" />
                  <div className="h-20 rounded-2xl bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatCard>
    </section>
  );
}

function Panel({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-sm text-white/80">
        {icon}
        {title}
      </div>
      <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="section-shell grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_.9fr] lg:p-10"
    >
      <FadeUp>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">
          About Me
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Full-stack development with strong frontend focus and product
          thinking.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
          I’m Shaswata Panda, a freelance full-stack developer who enjoys
          building modern web applications with polished UI and scalable backend
          systems. My work focuses heavily on frontend quality using React,
          Next.js, Tailwind CSS, and Framer Motion, while also handling backend
          APIs, databases, and admin systems using Node.js, Express.js, and
          MongoDB.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
          I have worked on real client products such as 79ER, KundliVeda, and
          Hercules Sports, where I handled responsive UI development, full-stack
          feature implementation, API integration, admin panels, and
          production-level improvements.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85"
            >
              {service}
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard
            icon={<Code2 className="h-5 w-5" />}
            title="Frontend Excellence"
            text="Responsive interfaces, clean component architecture, and premium UI polish."
          />
          <InfoCard
            icon={<Award className="h-5 w-5" />}
            title="Full-Stack Delivery"
            text="End-to-end product development with APIs, database integration, and admin systems."
          />
          <InfoCard
            icon={<BriefcaseBusiness className="h-5 w-5" />}
            title="Client Projects"
            text="Hands-on experience building real freelance products across multiple domains."
          />
          <InfoCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Motion & UX"
            text="Smooth transitions and interactions that make products feel modern and refined."
          />
        </div>
      </FadeUp>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-5">
      <div className="inline-flex rounded-2xl bg-white/10 p-3 text-cyan">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-white/70">{text}</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell p-6 sm:p-8 lg:p-10">
      <FadeUp>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Real freelance projects built with modern stacks and strong UI
              focus.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70">
            These projects reflect my work across full-stack product
            development, frontend systems, responsive design, and scalable admin
            workflows.
          </p>
        </div>
      </FadeUp>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeUp key={project.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              className="group h-full rounded-[28px] border border-white/10 bg-white/5 p-5 transition hover:shadow-glow"
            >
              <div className="rounded-[24px] bg-gradient-to-br from-accent/25 via-white/5 to-cyan/20 p-5">
                <div className="h-44 rounded-[20px] border border-white/10 bg-slate-950/50" />
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
                {project.tag}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/75">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-cyan"
              >
                View Live <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.2} className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
          >
            {skill}
          </span>
        ))}
      </FadeUp>
    </section>
  );
}

function Experience() {
  const items = [
    {
      title: "Freelance Full-Stack Developer",
      company: "Independent Client Work",
      period: "2023 — Present",
      summary:
        "Working with clients on full-stack web products, premium landing pages, admin dashboards, and dynamic CMS-style systems using React, Next.js, Node.js, and MongoDB.",
    },
    {
      title: "Frontend-Focused Product Development",
      company: "79ER & KundliVeda",
      period: "2023 — 2024",
      summary:
        "Built responsive interfaces, integrated APIs, improved UX flows, handled subscription and timer-based features, and maintained clean frontend architecture for live products.",
    },
    {
      title: "CMS & Catalog Platform Development",
      company: "Hercules Sports",
      period: "2024 — Present",
      summary:
        "Developed a scalable product hierarchy system with main categories, subcategories, items, admin-side operations, and dynamic user-facing pages for a sports equipment platform.",
    },
  ];

  return (
    <section id="experience" className="section-shell p-6 sm:p-8 lg:p-10">
      <FadeUp>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">
          Experience
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Freelance work focused on real products, scalable systems, and
          polished UI.
        </h2>
      </FadeUp>

      <div className="mt-8 space-y-4">
        {items.map((item, index) => (
          <FadeUp key={item.title} delay={index * 0.08}>
            <div className="grid gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-cyan">{item.company}</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
                  {item.summary}
                </p>
              </div>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/75">
                {item.period}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell p-6 sm:p-8 lg:p-10">
      <FadeUp>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Let’s build something modern, scalable, and visually strong.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
              I’m available for freelance work, frontend-heavy full-stack
              projects, and premium web experiences.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-5 sm:p-6">
            <div className="space-y-4">
              <a
                href="mailto:your-email@gmail.com"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85 transition hover:border-cyan/40"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan" /> shaswat273@gmail.com
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#top"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85 transition hover:border-cyan/40"
              >
                <span>Back to top</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
