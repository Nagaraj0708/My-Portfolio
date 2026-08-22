import React from "react";
import {
  Camera,
  Film,
  MessageSquare,
  Calculator,
  Sparkles,
  Globe,
  UserPlus,
  Users,
  CalendarClock,
  CalendarCheck,
  FileText,
  Stethoscope,
  BarChart3,
  ShieldCheck,
  GitMerge,
  CreditCard,
  Lock,
  Search,
  ShoppingCart,
  Package,
  Boxes,
  BellRing,
  Code2,
  Smartphone,
  Zap,
  Trophy,
  Activity,
  HardDrive,
  Layers,
  Server,
  Workflow,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Compass,
  TrendingUp,
  Award,
  BadgeCheck,
  Flame,
  Layout,
  Terminal,
  Cpu,
  Clock,
  Filter,
  KeyRound,
  FileSpreadsheet,
} from "lucide-react";

export interface FeatureIconConfig {
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

export function getFeatureIcon(feature: string): FeatureIconConfig {
  const text = feature.toLowerCase();

  if (text.includes("photo") || text.includes("portfolio") || text.includes("gallery")) {
    return { icon: Camera, colorClass: "text-amber-500 dark:text-amber-400", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/30" };
  }
  if (text.includes("video") || text.includes("cinema") || text.includes("film")) {
    return { icon: Film, colorClass: "text-purple-500 dark:text-purple-400", bgClass: "bg-purple-500/10", borderClass: "border-purple-500/30" };
  }
  if (text.includes("biometric") || text.includes("telemetry") || text.includes("hud") || text.includes("vo2")) {
    return { icon: Activity, colorClass: "text-emerald-500 dark:text-emerald-400", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/30" };
  }
  if (text.includes("spin") || text.includes("cycling") || text.includes("strength") || text.includes("rig")) {
    return { icon: Flame, colorClass: "text-rose-500 dark:text-rose-400", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" };
  }
  if (text.includes("cryo") || text.includes("sauna") || text.includes("plunge") || text.includes("contrast")) {
    return { icon: Zap, colorClass: "text-cyan-500 dark:text-cyan-400", bgClass: "bg-cyan-500/10", borderClass: "border-cyan-500/30" };
  }
  if (text.includes("qr pass") || text.includes("activation") || text.includes("pass")) {
    return { icon: BadgeCheck, colorClass: "text-indigo-500 dark:text-indigo-400", bgClass: "bg-indigo-500/10", borderClass: "border-indigo-500/30" };
  }
  if (text.includes("popcorn") || text.includes("gourmet") || text.includes("flavor") || text.includes("snack")) {
    return { icon: Sparkles, colorClass: "text-amber-500 dark:text-amber-400", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/30" };
  }
  if (text.includes("coupon") || text.includes("discount") || text.includes("festive") || text.includes("special")) {
    return { icon: Zap, colorClass: "text-amber-500 dark:text-amber-400", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/30" };
  }
  if (text.includes("gift") || text.includes("gifting") || text.includes("box")) {
    return { icon: Package, colorClass: "text-blue-500 dark:text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" };
  }
  if (text.includes("tea") || text.includes("chai") || text.includes("blossom") || text.includes("terroir") || text.includes("estate")) {
    return { icon: Sparkles, colorClass: "text-amber-500 dark:text-amber-400", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/30" };
  }
  if (text.includes("sommelier") || text.includes("steep") || text.includes("brewing") || text.includes("ritual") || text.includes("gaiwan")) {
    return { icon: Clock, colorClass: "text-emerald-500 dark:text-emerald-400", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/30" };
  }
  if (text.includes("canister") || text.includes("subscription") || text.includes("eco") || text.includes("earth")) {
    return { icon: Package, colorClass: "text-teal-500 dark:text-teal-400", bgClass: "bg-teal-500/10", borderClass: "border-teal-500/30" };
  }
  if (text.includes("whatsapp") || text.includes("booking") || text.includes("message")) {
    return { icon: MessageSquare, colorClass: "text-emerald-500 dark:text-emerald-400", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/30" };
  }
  if (text.includes("calculator") || text.includes("pricing") || text.includes("cost")) {
    return { icon: Calculator, colorClass: "text-blue-500 dark:text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" };
  }
  if (text.includes("seo") || text.includes("vercel") || text.includes("performance")) {
    return { icon: Zap, colorClass: "text-cyan-500 dark:text-cyan-400", bgClass: "bg-cyan-500/10", borderClass: "border-cyan-500/30" };
  }
  if (text.includes("patient") || text.includes("medical") || text.includes("emr") || text.includes("ehr")) {
    return { icon: Stethoscope, colorClass: "text-rose-500 dark:text-rose-400", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" };
  }
  if (text.includes("appointment") || text.includes("scheduling") || text.includes("queue")) {
    return { icon: CalendarClock, colorClass: "text-indigo-500 dark:text-indigo-400", bgClass: "bg-indigo-500/10", borderClass: "border-indigo-500/30" };
  }
  if (text.includes("report") || text.includes("clinical reporting") || text.includes("analytics")) {
    return { icon: BarChart3, colorClass: "text-sky-500 dark:text-sky-400", bgClass: "bg-sky-500/10", borderClass: "border-sky-500/30" };
  }
  if (text.includes("role") || text.includes("permission") || text.includes("auth") || text.includes("security")) {
    return { icon: ShieldCheck, colorClass: "text-emerald-500 dark:text-emerald-400", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/30" };
  }
  if (text.includes("employee") || text.includes("workforce") || text.includes("talent")) {
    return { icon: Users, colorClass: "text-violet-500 dark:text-violet-400", bgClass: "bg-violet-500/10", borderClass: "border-violet-500/30" };
  }
  if (text.includes("recruitment") || text.includes("pipeline")) {
    return { icon: GitMerge, colorClass: "text-amber-500 dark:text-amber-400", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/30" };
  }
  if (text.includes("leave") || text.includes("approval")) {
    return { icon: CalendarCheck, colorClass: "text-teal-500 dark:text-teal-400", bgClass: "bg-teal-500/10", borderClass: "border-teal-500/30" };
  }
  if (text.includes("payroll") || text.includes("salary") || text.includes("finance")) {
    return { icon: CreditCard, colorClass: "text-emerald-500 dark:text-emerald-400", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/30" };
  }
  if (text.includes("performance") || text.includes("evaluation")) {
    return { icon: TrendingUp, colorClass: "text-blue-500 dark:text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" };
  }
  if (text.includes("search") || text.includes("sku") || text.includes("lookup")) {
    return { icon: Search, colorClass: "text-cyan-500 dark:text-cyan-400", bgClass: "bg-cyan-500/10", borderClass: "border-cyan-500/30" };
  }
  if (text.includes("order") || text.includes("creation") || text.includes("cart")) {
    return { icon: ShoppingCart, colorClass: "text-orange-500 dark:text-orange-400", bgClass: "bg-orange-500/10", borderClass: "border-orange-500/30" };
  }
  if (text.includes("inventory") || text.includes("stock") || text.includes("logistics")) {
    return { icon: Package, colorClass: "text-blue-500 dark:text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" };
  }
  if (text.includes("alert") || text.includes("notification")) {
    return { icon: BellRing, colorClass: "text-rose-500 dark:text-rose-400", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" };
  }
  if (text.includes("api") || text.includes("integration") || text.includes("webhook")) {
    return { icon: Code2, colorClass: "text-purple-500 dark:text-purple-400", bgClass: "bg-purple-500/10", borderClass: "border-purple-500/30" };
  }
  if (text.includes("responsive") || text.includes("ui") || text.includes("mobile")) {
    return { icon: Smartphone, colorClass: "text-indigo-500 dark:text-indigo-400", bgClass: "bg-indigo-500/10", borderClass: "border-indigo-500/30" };
  }
  if (text.includes("heirloom") || text.includes("album") || text.includes("keepsake")) {
    return { icon: BookOpen, colorClass: "text-amber-500 dark:text-amber-400", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/30" };
  }

  return { icon: CheckCircle2, colorClass: "text-blue-500 dark:text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" };
}

export function getArchitectureLayerIcon(layerId: string) {
  switch (layerId) {
    case "presentation":
    case "ui":
      return { icon: Layout, colorClass: "text-blue-500 dark:text-blue-400", bgClass: "bg-blue-500/10", label: "Client UI Layer" };
    case "state":
    case "motion":
      return { icon: Workflow, colorClass: "text-indigo-500 dark:text-indigo-400", bgClass: "bg-indigo-500/10", label: "State & Events" };
    case "api":
    case "services":
      return { icon: Server, colorClass: "text-purple-500 dark:text-purple-400", bgClass: "bg-purple-500/10", label: "API Services" };
    case "backend":
      return { icon: Cpu, colorClass: "text-pink-500 dark:text-pink-400", bgClass: "bg-pink-500/10", label: "Backend Logic" };
    case "data":
    case "cdn":
    case "edge":
    default:
      return { icon: HardDrive, colorClass: "text-emerald-500 dark:text-emerald-400", bgClass: "bg-emerald-500/10", label: "Data & Edge CDN" };
  }
}

export function getEngineeringDecisionIcon(decisionText: string, index: number) {
  const text = decisionText.toLowerCase();
  if (text.includes("static") || text.includes("optimization") || text.includes("rendering") || text.includes("speed")) {
    return { icon: Zap, colorClass: "text-amber-500 dark:text-amber-400", bgClass: "bg-amber-500/10" };
  }
  if (text.includes("role") || text.includes("access") || text.includes("auth") || text.includes("security") || text.includes("guard")) {
    return { icon: ShieldCheck, colorClass: "text-emerald-500 dark:text-emerald-400", bgClass: "bg-emerald-500/10" };
  }
  if (text.includes("whatsapp") || text.includes("api") || text.includes("integration") || text.includes("rest")) {
    return { icon: Code2, colorClass: "text-blue-500 dark:text-blue-400", bgClass: "bg-blue-500/10" };
  }
  if (text.includes("state") || text.includes("rxjs") || text.includes("form") || text.includes("motion")) {
    return { icon: Activity, colorClass: "text-purple-500 dark:text-purple-400", bgClass: "bg-purple-500/10" };
  }
  if (text.includes("sql") || text.includes("query") || text.includes("schema") || text.includes("database")) {
    return { icon: HardDrive, colorClass: "text-cyan-500 dark:text-cyan-400", bgClass: "bg-cyan-500/10" };
  }
  
  const icons = [Zap, ShieldCheck, Code2, Activity, HardDrive, Cpu];
  const IconComp = icons[index % icons.length];
  return { icon: IconComp, colorClass: "text-blue-500 dark:text-blue-400", bgClass: "bg-blue-500/10" };
}

export function getChallengeIcon(index: number) {
  const icons = [Flame, AlertTriangle, Zap, Filter];
  const IconComp = icons[index % icons.length];
  return IconComp;
}
