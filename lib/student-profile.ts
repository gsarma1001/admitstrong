export type StudentProfile = {
  id?: string;
  name: string;
  email: string;
  gradeLevel: string;
  schoolZip: string;
  schoolState: string;
  gpa: string;
  satScore: string;
  actScore: string;
  targetMajor: string;
  schoolType: string;
  goals: string;
  collegeGoals: string;
  careerGoals: string;
  coursesTaken: string;
  clubsParticipating: string;
  extracurriculars: string;
  interests: string;
  currentActivities: string;
  volunteerExperience: string;
  internships: string;
  strengths: string;
  financialNeed: string;
  profileComplete?: boolean;
};

export type RecommendationAction = {
  title: string;
  reason: string;
  due: string;
  priority: "High" | "Medium" | "Low";
  category: "Academic" | "Experience" | "Planning";
};

export type RecommendationSummary = {
  headline: string;
  summary: string;
  nextAction: string;
  readinessScore: number;
  focusAreas: string[];
  recommendedActions: RecommendationAction[];
  futureOpportunities: string[];
};

export const emptyStudentProfile: StudentProfile = {
  name: "",
  email: "",
  gradeLevel: "10th grade",
  schoolZip: "",
  schoolState: "",
  gpa: "3.5",
  satScore: "",
  actScore: "",
  targetMajor: "Computer Science",
  schoolType: "4-year university",
  goals: "I want to build a strong application profile and stay on track for college admissions.",
  collegeGoals: "I want to find colleges where I can grow academically, contribute to campus life, and stay affordable.",
  careerGoals: "I want to explore careers in STEM and build experience that helps me clarify my path.",
  coursesTaken: "Algebra II, Biology, English II, World History, Computer Science",
  clubsParticipating: "Robotics club, debate team, coding club",
  extracurriculars: "School newspaper, mock trial, science fair, community tutoring",
  interests: "STEM, research, and problem solving",
  currentActivities: "Robotics club, debate team, coding projects",
  volunteerExperience: "Library volunteer, community tutoring",
  internships: "",
  strengths: "strong academics, leadership, curiosity",
  financialNeed: "I want to keep college choices realistic and affordable.",
  profileComplete: false,
};

export function parseList(value: string | undefined | null): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(/[\n,]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function loadStudentProfile(): StudentProfile | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const rawValue = window.localStorage.getItem("admitstrong-profile");
    if (!rawValue) {
      return null;
    }

    const parsed = JSON.parse(rawValue) as StudentProfile;
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    return {
      ...emptyStudentProfile,
      ...parsed,
    };
  } catch {
    return null;
  }
}

export function saveStudentProfile(profile: StudentProfile) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem("admitstrong-profile", JSON.stringify(profile));
}

export function loadSession(): { name: string; email: string } | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem("admitstrong-session");
    return value ? (JSON.parse(value) as { name: string; email: string }) : null;
  } catch {
    return null;
  }
}

export function saveSession(session: { name: string; email: string }) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem("admitstrong-session", JSON.stringify(session));
}

export function generateRecommendation(profile: StudentProfile): RecommendationSummary {
  const gpa = Number(profile.gpa || 0);
  const sat = Number(profile.satScore || 0);
  const act = Number(profile.actScore || 0);
  const activities = parseList(profile.currentActivities).length || parseList(profile.clubsParticipating).length;
  const volunteering = parseList(profile.volunteerExperience).length;
  const internships = parseList(profile.internships).length;

  let readinessScore = 56;

  if (gpa >= 3.8) readinessScore += 18;
  else if (gpa >= 3.5) readinessScore += 12;
  else if (gpa >= 3.0) readinessScore += 6;
  else readinessScore -= 8;

  if (sat >= 1300 || act >= 29) readinessScore += 10;
  else if (sat >= 1200 || act >= 25) readinessScore += 5;

  if (activities >= 4) readinessScore += 10;
  else if (activities >= 2) readinessScore += 5;

  if (volunteering >= 2) readinessScore += 8;
  else if (volunteering === 1) readinessScore += 3;

  if (internships >= 1) readinessScore += 8;

  if (profile.targetMajor) readinessScore += 4;

  readinessScore = Math.max(0, Math.min(100, readinessScore));

  const focusAreas = [
    "Academic performance and course rigor",
    "Meaningful extracurricular depth",
    "Service and leadership contribution",
    "A realistic college strategy",
  ];

  const futureOpportunities = [
    "Summer enrichment programs",
    "Volunteer leadership roles",
    "Industry or research internships",
    "Academic competitions and mentorship",
  ];

  let headline = "Build a stronger application profile this semester.";
  let summary =
    "Your current profile is promising, but the strongest application strategy is to deepen the experiences that show initiative, leadership, and sustained contribution.";
  let nextAction = "Choose one academic stretch, one leadership activity, and one practical opportunity to add this term.";

  if (readinessScore >= 80) {
    headline = "You are on a strong path for competitive college admissions.";
    summary =
      "Your academic profile and current activities suggest momentum. The next step is to turn that momentum into more specific evidence of growth and fit.";
    nextAction = "Target a high-impact summer opportunity and refine your college list around your strongest academic and personal fit.";
  } else if (readinessScore >= 65) {
    headline = "Your foundation is solid and ready for a strategic push.";
    summary =
      "You already have a useful base. The best gains will come from improving both academic depth and the quality of your extracurricular profile.";
    nextAction = "Add one visible leadership initiative and one focused academic or project-based improvement this semester.";
  } else if (gpa < 3.0) {
    headline = "Your immediate priority is academic stability and upward momentum.";
    summary =
      "A stronger transcript will unlock more options later. The most useful guidance now is to improve your performance in core courses and reduce gaps in rigor.";
    nextAction = "Prioritize the next grading period in math, science, and writing, then choose one enrichment activity that supports your long-term goals.";
  }

  const recommendedActions: RecommendationAction[] = [];

  if (gpa < 3.5) {
    recommendedActions.push({
      title: "Improve core academic performance",
      reason: "A stronger transcript makes every other part of the application more credible and opens a wider set of college options.",
      due: "Within the next grading period",
      priority: "High",
      category: "Academic",
    });
  }

  if (activities < 3) {
    recommendedActions.push({
      title: "Add two high-quality activities with clear commitment",
      reason: "Depth matters more than quantity. A few sustained commitments often signal greater initiative than a long list of short-term interests.",
      due: "By the end of this semester",
      priority: "High",
      category: "Experience",
    });
  }

  if (volunteering < 2) {
    recommendedActions.push({
      title: "Create a service or community impact role",
      reason: "Volunteer work demonstrates character, responsibility, and a broader investment in your community, which is highly valued in admissions.",
      due: "This academic term",
      priority: "Medium",
      category: "Experience",
    });
  }

  if (internships < 1) {
    recommendedActions.push({
      title: "Explore a structured summer or internship opportunity",
      reason: "Practical experience helps you discover your interests while showing initiative and real-world engagement in your target field.",
      due: "Before the next application cycle",
      priority: "Medium",
      category: "Experience",
    });
  }

  recommendedActions.push({
    title: `Build a stronger plan around ${profile.targetMajor || "your intended field"}`,
    reason: "Alignment between your goals and your activities is more persuasive than a generic profile. The application should show a clear pattern of interest and growth.",
    due: "Within the next 30 days",
    priority: "High",
    category: "Planning",
  });

  return {
    headline,
    summary,
    nextAction,
    readinessScore,
    focusAreas,
    recommendedActions: recommendedActions.slice(0, 4),
    futureOpportunities,
  };
}
