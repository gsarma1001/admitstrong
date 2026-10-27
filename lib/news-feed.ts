export type NewsCategory =
  | "Admissions"
  | "SAT/ACT"
  | "AP Courses"
  | "Scholarships"
  | "Financial Aid"
  | "High School";

export type NewsItem = {
  title: string;
  source: string;
  sourceUrl: string;
  publishedAt?: string;
  description: string;
  category: NewsCategory;
  url: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    title: "AP Exam Resources and Policies",
    source: "College Board",
    sourceUrl: "https://apstudents.collegeboard.org/",
    publishedAt: "2025-03-10",
    description:
      "Official AP exam guidance, testing policies, and student resources from the College Board.",
    category: "AP Courses",
    url: "https://apstudents.collegeboard.org/",
  },
  {
    title: "ACT Test Dates and Registration",
    source: "ACT",
    sourceUrl: "https://www.act.org/",
    publishedAt: "2025-02-17",
    description:
      "Official ACT testing dates, registration information, and preparation guidance.",
    category: "SAT/ACT",
    url: "https://www.act.org/content/act/en/products-and-services/the-act/test-dates.html",
  },
  {
    title: "FAFSA Application and Financial Aid Guidance",
    source: "Federal Student Aid",
    sourceUrl: "https://studentaid.gov/",
    publishedAt: "2025-01-20",
    description:
      "Official FAFSA guidance, deadlines, and financial-aid information for students and families.",
    category: "Financial Aid",
    url: "https://studentaid.gov/",
  },
  {
    title: "Common App Information and Application Support",
    source: "Common App",
    sourceUrl: "https://www.commonapp.org/",
    publishedAt: "2025-01-02",
    description:
      "Official college application guidance, member resources, and application-planning information.",
    category: "Admissions",
    url: "https://www.commonapp.org/",
  },
  {
    title: "Education Updates and School Guidance",
    source: "U.S. Department of Education",
    sourceUrl: "https://www.ed.gov/",
    publishedAt: "2024-12-12",
    description:
      "Official public education updates and school-planning resources relevant to students and families.",
    category: "High School",
    url: "https://www.ed.gov/",
  },
  {
    title: "Scholarship and Aid Planning Guidance",
    source: "Federal Student Aid",
    sourceUrl: "https://studentaid.gov/",
    publishedAt: "2024-11-28",
    description:
      "Official scholarship and aid-planning resources for students preparing for college costs.",
    category: "Scholarships",
    url: "https://studentaid.gov/",
  },
];
