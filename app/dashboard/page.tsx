import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StudentProfileForm } from "@/components/student/student-profile-form";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">Dashboard</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-900">
            Your college roadmap
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Keep your profile current so AdmitStrong can suggest the most useful actions for your admissions journey and future academic opportunities.
          </p>
        </div>

        <StudentProfileForm />
      </main>

      <SiteFooter />
    </div>
  );
}
