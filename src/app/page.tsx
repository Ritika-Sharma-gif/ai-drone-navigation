"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  Crosshair,
  Eye,
  Gauge,
  Menu,
  Navigation,
  Radio,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    title: "Perception",
    description:
      "Understand terrain, obstacles, objects and environmental conditions in real time.",
  },
  {
    icon: BrainCircuit,
    title: "Decision",
    description:
      "AI evaluates the environment and selects the safest and most efficient action.",
  },
  {
    icon: Navigation,
    title: "Navigation",
    description:
      "Generate adaptive flight paths and continuously re-plan as conditions change.",
  },
];

const metrics = [
  ["01", "Perception", "Real-time environmental understanding"],
  ["02", "Decision", "Autonomous AI reasoning"],
  ["03", "Navigation", "Adaptive path planning"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(24,124,255,0.12),transparent_35%),radial-gradient(circle_at_20%_60%,rgba(0,210,255,0.06),transparent_30%)]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10">
            <Crosshair className="h-5 w-5 text-cyan-300" />
          </div>

          <div>
            <div className="text-sm font-semibold tracking-[0.18em]">
              AERONAV
            </div>
            <div className="text-[9px] tracking-[0.3em] text-zinc-500">
              AUTONOMOUS SYSTEMS
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a className="transition hover:text-white" href="#technology">
            Technology
          </a>
          <a className="transition hover:text-white" href="#platform">
            Platform
          </a>
          <a className="transition hover:text-white" href="#research">
            Research
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition hover:text-white">
            Sign in
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
            Explore platform
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <button className="rounded-lg border border-white/10 p-2 md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Hero copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs text-cyan-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
              Autonomous flight intelligence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[76px]"
            >
              Autonomous flight.
              <br />
              <span className="text-zinc-500">Intelligent navigation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg"
            >
              AeroNav AI combines computer vision, intelligent decision-making
              and autonomous navigation into one flight intelligence platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <button className="group flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
                Explore the platform
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06]">
                View technology
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/[0.08]"
            >
              {metrics.map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-r border-white/[0.08] px-4 py-5 first:pl-0 last:border-r-0"
                >
                  <div className="text-[10px] text-zinc-600">{number}</div>
                  <div className="mt-2 text-sm font-medium">{title}</div>
                  <div className="mt-1 text-[10px] leading-4 text-zinc-500">
                    {description}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Flight visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#080c11] shadow-2xl">
              {/* Map grid */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Terrain lines */}
              <svg
                className="absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 600 600"
                fill="none"
              >
                <path
                  d="M-20 420 C100 350 150 460 250 390 S430 300 620 350"
                  stroke="#334155"
                  strokeWidth="1"
                />
                <path
                  d="M-20 455 C100 385 150 495 250 425 S430 335 620 385"
                  stroke="#334155"
                  strokeWidth="1"
                />
                <path
                  d="M-20 490 C100 420 150 530 250 460 S430 370 620 420"
                  stroke="#334155"
                  strokeWidth="1"
                />
              </svg>

              {/* Route */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 600 600"
                fill="none"
              >
                <path
                  d="M80 480 C150 420 160 340 245 330 C330 320 315 235 400 205 C455 185 480 140 520 90"
                  stroke="rgba(34,211,238,0.18)"
                  strokeWidth="10"
                />

                <motion.path
                  d="M80 480 C150 420 160 340 245 330 C330 320 315 235 400 205 C455 185 480 140 520 90"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>

              {/* Destination */}
              <div className="absolute right-[12%] top-[11%]">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-cyan-300" />
                  <span className="text-[10px] text-cyan-200">
                    MISSION TARGET
                  </span>
                </div>
                <div className="mt-1 text-[9px] text-zinc-600">
                  31.1048° N · 77.1734° E
                </div>
              </div>

              {/* Drone */}
              <motion.div
                animate={{
                  x: [0, 12, 0, -8, 0],
                  y: [0, -7, 2, -4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[39%] top-[48%]"
              >
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.07]">
                  <div className="absolute h-7 w-7 rounded-full border border-cyan-300/50" />
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                </div>
              </motion.div>

              {/* Telemetry panel */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Radio className="h-3.5 w-3.5 text-cyan-300" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      Live telemetry
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ONLINE
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-[9px] text-zinc-600">ALTITUDE</div>
                    <div className="mt-1 font-mono text-sm">124 m</div>
                  </div>

                  <div>
                    <div className="text-[9px] text-zinc-600">SPEED</div>
                    <div className="mt-1 font-mono text-sm">18.4 m/s</div>
                  </div>

                  <div>
                    <div className="text-[9px] text-zinc-600">BATTERY</div>
                    <div className="mt-1 font-mono text-sm">87%</div>
                  </div>
                </div>
              </div>

              <div className="absolute left-5 top-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Navigation simulation
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className="border-y border-white/[0.07] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-300">
              The autonomy stack
            </div>

            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Intelligence at every stage of flight.
            </h2>

            <p className="mt-5 text-zinc-500">
              AeroNav connects perception, reasoning and navigation into one
              continuous autonomous loop.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#080b0f] p-7 transition hover:bg-[#0b1016]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06]">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div className="mt-8 text-lg font-medium">{item.title}</div>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-xs text-zinc-600">
                    0{index + 1}
                    <div className="h-px w-8 bg-white/10" />
                    AUTONOMY LAYER
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Mission control
            </div>

            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              See what your autonomous system sees.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-500">
              A unified command environment for planning missions, monitoring
              telemetry and understanding every AI decision made during flight.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Mission planning and route generation",
                "Real-time telemetry monitoring",
                "AI decision inspection",
                "Mission history and analytics",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b0f] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-cyan-300" />
                <span className="text-xs font-medium">
                  AERONAV COMMAND CENTER
                </span>
              </div>

              <span className="text-[10px] text-zinc-600">
                MISSION 0042
              </span>
            </div>

            <div className="grid grid-cols-[1fr_140px]">
              <div className="relative min-h-[330px] border-r border-white/[0.07] bg-[#06090d]">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />

                <div className="absolute left-[25%] top-[25%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />
                <div className="absolute left-[48%] top-[45%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]" />
                <div className="absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-emerald-400" />

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 500 330"
                  fill="none"
                >
                  <path
                    d="M125 85 C190 120 200 180 240 150 C300 105 330 220 410 95"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeDasharray="7 7"
                  />
                </svg>

                <div className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-black/60 px-3 py-2 backdrop-blur">
                  <div className="text-[9px] text-zinc-600">CURRENT MODE</div>
                  <div className="mt-1 text-xs text-cyan-300">
                    AUTONOMOUS
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="text-[9px] uppercase tracking-widest text-zinc-600">
                  Flight data
                </div>

                <div className="mt-5 space-y-5">
                  {[
                    ["Altitude", "124 m"],
                    ["Velocity", "18.4 m/s"],
                    ["Heading", "042°"],
                    ["Battery", "87%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="text-[9px] text-zinc-600">{label}</div>
                      <div className="mt-1 font-mono text-xs">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/[0.07] pt-4">
                  <div className="flex items-center gap-2 text-[9px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    SYSTEM NOMINAL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section
        id="research"
        className="border-y border-white/[0.07] bg-[#070a0e]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Research
              </div>

              <h2 className="mt-4 text-3xl font-medium tracking-tight">
                Built for the next generation of autonomous systems.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                <h3 className="mt-6 font-medium">
                  Intelligent perception
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Vision systems designed to understand complex environments
                  and changing flight conditions.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
                <Zap className="h-5 w-5 text-cyan-300" />
                <h3 className="mt-6 font-medium">Adaptive autonomy</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Navigation decisions continuously adapt to new information
                  instead of following static routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-16 text-center sm:px-12">
          <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 bg-cyan-400/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07]">
              <Route className="h-5 w-5 text-cyan-300" />
            </div>

            <h2 className="mx-auto mt-7 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              The future of flight is autonomous.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-zinc-500">
              Explore the AeroNav platform and build intelligent flight
              systems that can see, decide and navigate.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200">
              Enter AeroNav
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <Crosshair className="h-3.5 w-3.5 text-cyan-300" />
            AERONAV AI
          </div>

          <div>Autonomous flight. Intelligent navigation.</div>

          <div>© 2026 AeroNav AI</div>
        </div>
      </footer>
    </main>
  );
}