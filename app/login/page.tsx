import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
              Student portal
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-5xl">
              Personalize your next step with confidence.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Log in to see your current roadmap, keep your profile current, and receive clear recommendations built around your goals, strengths, and timeline.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Profile</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Save your goals</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Guidance</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Get focused recommendations</p>
              </div>
            </div>
          </div>

          <LoginForm />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
