"use client";

import {
  Activity,
  AlertTriangle,
  Battery,
  BrainCircuit,
  ChevronDown,
  Crosshair,
  Gauge,
  Map,
  Navigation,
  Radio,
  Settings,
  ShieldCheck,
  Signal,
  Target,
  Zap,
} from "lucide-react";

const drones = [
  {
    id: "AN-001",
    name: "Scout Alpha",
    status: "IN FLIGHT",
    battery: "87%",
    altitude: "124 m",
  },
  {
    id: "AN-002",
    name: "Scout Beta",
    status: "STANDBY",
    battery: "96%",
    altitude: "0 m",
  },
  {
    id: "AN-003",
    name: "Scout Gamma",
    status: "CHARGING",
    battery: "42%",
    altitude: "0 m",
  },
];

const telemetry = [
  ["Altitude", "124 m"],
  ["Velocity", "18.4 m/s"],
  ["Heading", "042°"],
  ["Distance", "2.84 km"],
];

export default function CommandCenter() {
  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      {/* TOP BAR */}
      <header className="flex h-16 items-center justify-between border-b border-white/[0.08] bg-[#07090d] px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06]">
            <Crosshair className="h-4 w-4 text-cyan-300" />
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.18em]">
              AERONAV
            </div>
            <div className="text-[8px] tracking-[0.25em] text-zinc-600">
              COMMAND CENTER
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-xs text-zinc-500 md:flex">
          <span className="text-white">Operations</span>
          <span>Fleet</span>
          <span>Missions</span>
          <span>Analytics</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 text-[10px] text-emerald-400 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ALL SYSTEMS NOMINAL
          </div>

          <button className="rounded-lg border border-white/10 p-2 text-zinc-500 hover:text-white">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="grid min-h-[calc(100vh-64px)] lg:grid-cols-[220px_1fr]">
        {/* SIDEBAR */}
        <aside className="hidden border-r border-white/[0.07] bg-[#07090d] p-4 lg:block">
          <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            Navigation
          </div>

          <nav className="mt-4 space-y-1">
            <NavItem icon={Activity} label="Overview" active />
            <NavItem icon={Map} label="Mission Map" />
            <NavItem icon={Navigation} label="Mission Planner" />
            <NavItem icon={Radio} label="Telemetry" />
            <NavItem icon={BrainCircuit} label="AI Decisions" />
          </nav>

          <div className="mt-10 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            Fleet
          </div>

          <nav className="mt-4 space-y-1">
            <NavItem icon={Signal} label="Drone Fleet" />
            <NavItem icon={Target} label="Mission History" />
          </nav>

          <div className="absolute bottom-5">
            <div className="flex items-center gap-2 text-[10px] text-zinc-600">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
              Secure connection
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <section className="overflow-hidden">
          {/* PAGE HEADER */}
          <div className="flex flex-col gap-4 border-b border-white/[0.07] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-cyan-400">
                Operations
              </div>

              <h1 className="mt-1 text-xl font-medium">
                Mission Control
              </h1>
            </div>

            <button className="flex items-center gap-2 self-start rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">
              Mission 0042
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="p-5">
            {/* STAT CARDS */}
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                icon={Activity}
                label="Active mission"
                value="01"
                detail="Autonomous"
              />

              <StatCard
                icon={Signal}
                label="Connected drones"
                value="03"
                detail="Fleet online"
              />

              <StatCard
                icon={Zap}
                label="System health"
                value="98.7%"
                detail="Nominal"
              />

              <StatCard
                icon={Gauge}
                label="Mission progress"
                value="68%"
                detail="On schedule"
              />
            </div>

            {/* MAP + TELEMETRY */}
            <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_300px]">
              {/* MAP */}
              <div className="relative min-h-[500px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#070a0e]">
                <div className="absolute left-4 top-4 z-10">
                  <div className="rounded-lg border border-white/10 bg-black/60 px-3 py-2 backdrop-blur">
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                      <Map className="h-3.5 w-3.5 text-cyan-300" />
                      Live navigation map
                    </div>
                  </div>
                </div>

                {/* Map grid */}
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />

                {/* Simulated terrain */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 900 500"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-20 360 C100 280 150 400 280 330 S500 230 620 310 S800 400 920 300"
                    stroke="#202b38"
                    strokeWidth="2"
                  />

                  <path
                    d="M-20 390 C100 310 150 430 280 360 S500 260 620 340 S800 430 920 330"
                    stroke="#1a2430"
                    strokeWidth="2"
                  />

                  <path
                    d="M-20 420 C100 340 150 460 280 390 S500 290 620 370 S800 460 920 360"
                    stroke="#151e28"
                    strokeWidth="2"
                  />

                  {/* Flight route */}
                  <path
                    d="M130 400 C220 350 230 240 350 270 C470 300 490 170 600 190 C690 205 720 120 800 90"
                    stroke="rgba(34,211,238,0.15)"
                    strokeWidth="12"
                  />

                  <path
                    d="M130 400 C220 350 230 240 350 270 C470 300 490 170 600 190 C690 205 720 120 800 90"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                  />
                </svg>

                {/* Waypoints */}
                <MapPoint className="left-[14%] top-[78%]" label="START" />
                <MapPoint className="left-[39%] top-[52%]" label="WP-02" />
                <MapPoint className="left-[66%] top-[37%]" label="WP-03" />
                <MapPoint className="right-[9%] top-[16%]" label="TARGET" />

                {/* Drone marker */}
                <div className="absolute left-[52%] top-[42%]">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.08]">
                    <div className="absolute h-7 w-7 rounded-full border border-cyan-300/50" />
                    <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                  </div>

                  <div className="absolute left-14 top-2 whitespace-nowrap">
                    <div className="text-[10px] font-medium text-cyan-200">
                      AN-001
                    </div>
                    <div className="text-[8px] text-zinc-600">
                      SCOUT ALPHA
                    </div>
                  </div>
                </div>

                {/* Coordinates */}
                <div className="absolute bottom-4 left-4 text-[9px] font-mono text-zinc-700">
                  31.1048° N&nbsp;&nbsp;77.1734° E
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-md border border-white/10 bg-black/50 px-3 py-2 text-[9px] text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  GPS LOCKED
                </div>
              </div>

              {/* TELEMETRY */}
              <div className="rounded-xl border border-white/[0.08] bg-[#070a0e]">
                <div className="border-b border-white/[0.07] px-4 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                        Selected drone
                      </div>

                      <div className="mt-1 text-sm font-medium">
                        Scout Alpha
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[9px] text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      ACTIVE
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {telemetry.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-3"
                      >
                        <div className="text-[8px] uppercase text-zinc-600">
                          {label}
                        </div>

                        <div className="mt-1 font-mono text-sm">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Battery */}
                  <div className="mt-5 rounded-lg border border-white/[0.07] p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Battery className="h-3.5 w-3.5 text-cyan-300" />
                        <span className="text-[9px] text-zinc-500">
                          Battery
                        </span>
                      </div>

                      <span className="font-mono text-xs">87%</span>
                    </div>

                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                      <div className="h-full w-[87%] rounded-full bg-cyan-300" />
                    </div>
                  </div>

                  {/* AI status */}
                  <div className="mt-5 rounded-lg border border-cyan-400/10 bg-cyan-400/[0.03] p-3">
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="h-3.5 w-3.5 text-cyan-300" />
                      <span className="text-[9px] uppercase tracking-[0.15em] text-cyan-300">
                        AI Navigation
                      </span>
                    </div>

                    <div className="mt-3 text-xs text-zinc-300">
                      Replanning route
                    </div>

                    <div className="mt-1 text-[9px] leading-4 text-zinc-600">
                      Obstacle detected 42m ahead. Selecting alternate path.
                    </div>
                  </div>

                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-2.5 text-xs text-zinc-300 hover:bg-white/[0.06]">
                    Open telemetry
                    <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
                  </button>
                </div>
              </div>
            </div>

            {/* FLEET */}
            <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#070a0e]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-4">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    Fleet
                  </div>
                  <div className="mt-1 text-sm font-medium">
                    Drone status
                  </div>
                </div>

                <button className="text-[10px] text-cyan-300">
                  View all
                </button>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {drones.map((drone) => (
                  <div
                    key={drone.id}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-6 px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10">
                        <Crosshair className="h-3.5 w-3.5 text-zinc-500" />
                      </div>

                      <div>
                        <div className="text-xs font-medium">
                          {drone.name}
                        </div>
                        <div className="text-[9px] text-zinc-600">
                          {drone.id}
                        </div>
                      </div>
                    </div>

                    <div className="hidden text-right sm:block">
                      <div className="text-[9px] text-zinc-600">
                        BATTERY
                      </div>
                      <div className="mt-1 font-mono text-xs">
                        {drone.battery}
                      </div>
                    </div>

                    <div className="text-right">
                      <div
                        className={`text-[9px] ${
                          drone.status === "IN FLIGHT"
                            ? "text-cyan-300"
                            : drone.status === "STANDBY"
                              ? "text-zinc-400"
                              : "text-amber-400"
                        }`}
                      >
                        {drone.status}
                      </div>

                      <div className="mt-1 text-[9px] text-zinc-600">
                        ALT {drone.altitude}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI DECISION */}
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-[#070a0e] p-5">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4 text-cyan-300" />
                  <span className="text-xs font-medium">
                    Latest AI decision
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                  <div>
                    <div className="text-sm text-zinc-200">
                      Alternate route selected
                    </div>

                    <p className="mt-2 text-xs leading-5 text-zinc-600">
                      The navigation model detected an obstacle along the
                      original trajectory and generated a lower-risk path.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-amber-400/10 bg-amber-400/[0.02] p-5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <span className="text-xs font-medium">
                    System notice
                  </span>
                </div>

                <p className="mt-4 text-xs leading-5 text-zinc-500">
                  Wind conditions increased by 12% in the current operating
                  area. Autonomous controller has compensated automatically.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: typeof Activity;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${
        active
          ? "bg-white/[0.06] text-white"
          : "text-zinc-600 hover:bg-white/[0.03] hover:text-zinc-300"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof Activity;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#070a0e] p-4">
      <div className="flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-600">
          {label}
        </span>

        <Icon className="h-3.5 w-3.5 text-zinc-600" />
      </div>

      <div className="mt-4 text-2xl font-medium tracking-tight">
        {value}
      </div>

      <div className="mt-1 text-[9px] text-emerald-400">
        {detail}
      </div>
    </div>
  );
}

function MapPoint({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="h-2.5 w-2.5 rounded-full border border-cyan-200 bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
      <div className="mt-1 whitespace-nowrap text-[8px] text-zinc-600">
        {label}
      </div>
    </div>
  );
}