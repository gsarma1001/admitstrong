import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload || typeof payload !== "object") {
      return NextResponse.json({ error: "Invalid profile payload." }, { status: 400 });
    }

    const client = getSupabaseAdminClient();

    if (!client) {
      return NextResponse.json(
        { error: "Supabase is not configured. Add env values for NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY." },
        { status: 503 },
      );
    }

    const profile = {
      email: String(payload.email ?? "").trim(),
      name: String(payload.name ?? "Student").trim(),
      grade_level: payload.gradeLevel ?? "10th grade",
      school_zip: payload.schoolZip ?? "",
      school_state: payload.schoolState ?? "",
      gpa: payload.gpa ?? "",
      sat_score: payload.satScore ?? "",
      act_score: payload.actScore ?? "",
      target_major: payload.targetMajor ?? "",
      school_type: payload.schoolType ?? "",
      goals: payload.goals ?? "",
      college_goals: payload.collegeGoals ?? "",
      career_goals: payload.careerGoals ?? "",
      courses_taken: payload.coursesTaken ?? "",
      clubs_participating: payload.clubsParticipating ?? "",
      extracurriculars: payload.extracurriculars ?? "",
      interests: payload.interests ?? "",
      current_activities: payload.currentActivities ?? "",
      volunteer_experience: payload.volunteerExperience ?? "",
      internships: payload.internships ?? "",
      strengths: payload.strengths ?? "",
      financial_need: payload.financialNeed ?? "",
      profile_complete: Boolean(payload.profileComplete),
      updated_at: new Date().toISOString(),
      profile_data: payload,
    };

    const { data, error } = await client
      .from("student_profiles")
      .upsert(profile, { onConflict: "email" })
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Student profile saved successfully.",
      profile: data?.[0] ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unknown server error while saving the student profile.",
      },
      { status: 500 },
    );
  }
}
