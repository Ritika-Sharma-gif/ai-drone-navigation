"use client";

import {
  ArrowLeft,
  Battery,
  ChevronDown,
  Clock3,
  Crosshair,
  Map,
  Navigation,
  Play,
  Radio,
  Route,
  Save,
  Settings2,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

const waypoints = [
  {
    id: "WP-01",
    name: "Launch Point",
    coordinates: "31.1048° N · 77.1734° E",
    altitude: "0 m",
  },
  {
    id: "WP-02",
    name: "Survey Area",
    coordinates: "31.1082° N · 77.1811° E",
    altitude: "120 m",
  },
  {
    id: "WP-03",
    name: "Inspection Point",
    coordinates: "31.1126° N · 77.1894° E",
    altitude: "140 m",
  },
  {
    id: "WP-04",
    name: "Mission Target",
    coordinates: "31.1164° N · 77.1962° E",
    altitude: "125 m",
  },
];

export default function MissionPlanner() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      {/* HEADER */}
      <header className="flex min-h-16 items-center justify-between gap-4 border-b border-white/[0.08] bg-[#07090d] px-5 py-3">
        <div className="flex items-center gap-3">
          <a
            href="/command-center"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition hover:bg-white/[0.04] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </a>

          <div>
            <div className="text-xs font-semibold tracking-[0.18em]">
              MISSION PLANNER
            </div>
            <div className="text-[8px] tracking-[0.25em] text-zinc-600">
              AERONAV AUTONOMOUS SYSTEMS
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/[0.04] hover:text-white">
            <Save className="h-3.5 w-3.5" />
            Save draft
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-zinc-200">
            <Play className="h-3.5 w-3.5" />
            Prepare mission
          </button>
        </div>
      </header>

      <div className="grid min-h-[calc(100vh-64px)] xl:grid-cols-[330px_1fr]">
        {/* CONFIGURATION */}
        <aside className="border-b border-white/[0.07] bg-[#07090d] xl:border-b-0 xl:border-r">
          <div className="p-5">
            <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
              Mission configuration
            </div>

            <h1 className="mt-2 text-lg font-medium">
              New autonomous mission
            </h1>

            <p className="mt-2 text-xs leading-5 text-zinc-600">
              Configure the aircraft, route and autonomy parameters before
              starting the mission.
            </p>

            {/* Mission name */}
            <div className="mt-7">
              <label className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                Mission name
              </label>

              <input
                defaultValue="Mountain Survey 0043"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/40"
              />
            </div>

            {/* Drone */}
            <div className="mt-5">
              <label className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                Aircraft
              </label>

              <button className="mt-2 flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-400/[0.07]">
                    <Crosshair className="h-3.5 w-3.5 text-cyan-300" />
                  </div>

                  <div>
                    <div className="text-xs">Scout Alpha</div>
                    <div className="text-[9px] text-emerald-400">
                      AN-001 · 87% battery
                    </div>
                  </div>
                </div>

                <ChevronDown className="h-3.5 w-3.5 text-zinc-600" />
              </button>
            </div>

            {/* Flight mode */}
            <div className="mt-5">
              <label className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                Flight mode
              </label>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <button className="rounded-lg border border-cyan-400/30 bg-cyan-400/[0.07] px-3 py-2.5 text-xs text-cyan-300">
                  Autonomous
                </button>

                <button className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 text-xs text-zinc-500">
                  Manual
                </button>
              </div>
            </div>

            {/* Parameters */}
            <div className="mt-7">
              <div className="flex items-center gap-2">
                <Settings2 className="h-3.5 w-3.5 text-zinc-600" />

                <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                  Flight parameters
                </span>
              </div>

              <div className="mt-3 space-y-3">
                <Parameter
                  label="Cruising altitude"
                  value="120 m"
                />

                <Parameter
                  label="Maximum speed"
                  value="20 m/s"
                />

                <Parameter
                  label="Return-to-home"
                  value="Enabled"
                />

                <Parameter
                  label="Obstacle avoidance"
                  value="Enabled"
                />
              </div>
            </div>

            {/* Safety */}
            <div className="mt-7 rounded-lg border border-emerald-400/10 bg-emerald-400/[0.02] p-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />

                <span className="text-[9px] uppercase tracking-[0.15em] text-emerald-400">
                  Safety systems ready
                </span>
              </div>

              <p className="mt-2 text-[9px] leading-4 text-zinc-600">
                GPS, obstacle avoidance and return-to-home systems are
                available for this mission.
              </p>
            </div>
          </div>
        </aside>

        {/* MAP AREA */}
        <section className="relative min-h-[700px] bg-[#06090d]">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
            }}
          />

          {/* Map controls */}
          <div className="absolute left-5 top-5 z-10">
            <div className="rounded-lg border border-white/10 bg-black/60 p-1 backdrop-blur-xl">
              <button className="flex items-center gap-2 rounded-md bg-white/[0.06] px-3 py-2 text-[10px] text-white">
                <Map className="h-3.5 w-3.5 text-cyan-300" />
                Satellite
              </button>
            </div>
          </div>

          {/* Map information */}
          <div className="absolute right-5 top-5 z-10 hidden rounded-lg border border-white/10 bg-black/60 p-4 backdrop-blur-xl sm:block">
            <div className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
              Mission area
            </div>

            <div className="mt-2 font-mono text-xs">
              31.1048° N · 77.1734° E
            </div>

            <div className="mt-1 text-[9px] text-zinc-600">
              Himachal Pradesh · India
            </div>
          </div>

          {/* Terrain */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1000 700"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-50 510 C100 400 170 550 300 450 S500 320 620 410 S850 540 1050 360"
              stroke="#1d2834"
              strokeWidth="2"
            />

            <path
              d="M-50 550 C100 440 170 590 300 490 S500 360 620 450 S850 580 1050 400"
              stroke="#18222d"
              strokeWidth="2"
            />

            <path
              d="M-50 590 C100 480 170 630 300 530 S500 400 620 490 S850 620 1050 440"
              stroke="#141d26"
              strokeWidth="2"
            />

            {/* Planned route glow */}
            <path
              d="M100 570 C190 500 210 380 350 400 C490 420 500 270 650 300 C760 325 800 210 900 120"
              stroke="rgba(34,211,238,0.12)"
              strokeWidth="18"
            />

            {/* Planned route */}
            <path
              d="M100 570 C190 500 210 380 350 400 C490 420 500 270 650 300 C760 325 800 210 900 120"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeDasharray="9 8"
            />

            {/* Alternative route */}
            <path
              d="M100 570 C180 500 280 530 380 470 C500 400 530 350 650 300"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray="5 8"
            />
          </svg>

          {/* Waypoints */}
          <Waypoint
            className="left-[10%] top-[79%]"
            number="01"
            label="LAUNCH"
          />

          <Waypoint
            className="left-[35%] top-[57%]"
            number="02"
            label="SURVEY"
          />

          <Waypoint
            className="left-[65%] top-[43%]"
            number="03"
            label="INSPECTION"
          />

          <Waypoint
            className="right-[8%] top-[16%]"
            number="04"
            label="TARGET"
          />

          {/* Drone */}
          <div className="absolute left-[48%] top-[51%]">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] shadow-[0_0_35px_rgba(34,211,238,0.08)]">
              <div className="absolute h-8 w-8 rounded-full border border-cyan-300/50" />

              <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            </div>

            <div className="absolute left-16 top-3 whitespace-nowrap">
              <div className="text-[10px] font-medium text-cyan-200">
                AN-001
              </div>

              <div className="text-[8px] text-zinc-600">
                CURRENT POSITION
              </div>
            </div>
          </div>

          {/* Bottom mission summary */}
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
              <Summary
                icon={Route}
                label="Route distance"
                value="6.82 km"
              />

              <Summary
                icon={Clock3}
                label="Estimated time"
                value="08:42"
              />

              <Summary
                icon={Battery}
                label="Battery required"
                value="34%"
              />

              <Summary
                icon={Zap}
                label="Mission confidence"
                value="97.4%"
              />
            </div>
          </div>

          {/* Floating status */}
          <div className="absolute bottom-32 right-5 hidden rounded-lg border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-xl md:block">
            <div className="flex items-center gap-2 text-[9px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              NAVIGATION SYSTEM READY
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-white/10 bg-[#07090d]/95 p-3 backdrop-blur-xl sm:hidden">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-xs text-zinc-400">
          <Save className="h-3.5 w-3.5" />
          Save
        </button>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-3 text-xs font-medium text-black">
          <Play className="h-3.5 w-3.5" />
          Prepare
        </button>
      </div>
    </main>
  );
}

function Parameter({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5">
      <span className="text-[10px] text-zinc-500">{label}</span>

      <span className="text-[10px] text-zinc-300">{value}</span>
    </div>
  );
}

function Waypoint({
  className,
  number,
  label,
}: {
  className: string;
  number: string;
  label: string;
}) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/40 bg-[#071017] text-[8px] font-medium text-cyan-300">
          {number}
        </div>

        <div>
          <div className="text-[9px] font-medium text-zinc-300">
            {label}
          </div>

          <div className="text-[7px] text-zinc-700">
            WAYPOINT
          </div>
        </div>
      </div>
    </div>
  );
}

function Summary({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Route;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#080c11] p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-cyan-300" />
        <span className="text-[8px] uppercase tracking-[0.15em] text-zinc-600">
          {label}
        </span>
      </div>

      <div className="mt-2 font-mono text-sm">{value}</div>
    </div>
  );
}