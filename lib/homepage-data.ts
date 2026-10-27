import type { FeatureIconType } from "@/components/ui/feature-icon";

type Feature = {
  title: string;
  description: string;
  icon: FeatureIconType;
};

export const roadmapSteps = [
  {
    number: "01",
    title: "Build your profile",
    description:
      "Tell us about your academics, interests, activities, goals, and college preferences.",
  },
  {
    number: "02",
    title: "Understand where you stand",
    description:
      "See your strengths, opportunities, and the areas that deserve your attention.",
  },
  {
    number: "03",
    title: "Receive your roadmap",
    description:
      "Get clear, personalized recommendations based on your goals and current stage.",
  },
  {
    number: "04",
    title: "Keep adapting as you grow",
    description:
      "Your roadmap evolves as your interests, accomplishments, and priorities change.",
  },
] as const;

export const features: readonly Feature[] = [
  {
    title: "A complete student profile",
    description:
      "Bring academics, activities, accomplishments, interests, and aspirations together in one place.",
    icon: "profile",
  },
  {
    title: "Personalized guidance",
    description:
      "Get recommendations designed for the individual student—not generic advice for everyone.",
    icon: "compass",
  },
  {
    title: "An evolving roadmap",
    description:
      "See what matters now, what is coming next, and how each decision supports long-term goals.",
    icon: "roadmap",
  },
  {
    title: "College and major discovery",
    description:
      "Explore colleges, majors, and opportunities that align with the student's strengths and priorities.",
    icon: "college",
  },
  {
    title: "Affordability awareness",
    description:
      "Consider financial priorities early instead of waiting until college decisions arrive.",
    icon: "cost",
  },
  {
    title: "Progress without pressure",
    description:
      "Stay organized and move forward with encouraging guidance rather than fear and comparison.",
    icon: "progress",
  },
] as const;
