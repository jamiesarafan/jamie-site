export const site = {
  name: "Jamie Sarafan",
  tagline:
    "Historian of American religion, focusing on evangelicalism, gender, and religious innovation in the nineteenth and early twentieth centuries.",
  bio: [
    "Her current research examines the early Pentecostal serpent-handling movement and the first generation of the Church of God, recovering the role of women in shaping religious authority and practice. She is also developing new research at the intersection of religion and environmental history, exploring how outdoor religious practices—particularly camping and revival culture—reshaped American evangelical life.",
  ],
  links: {
    email: "jamie.sarafan@colorado.edu",
    linkedin: "www.linkedin.com/in/jamie-sarafan-166857124",
    cvPdfPath: "/cv.pdf",
  },
  research: {
    currentFocus:
      "Early Pentecostal serpent handling; first-generation Church of God; gendered authority and religious legitimacy in evangelical contexts.",
    <a
  href="/sarafan-masters-thesis.pdf"
  className="underline hover:no-underline"
  target="_blank"
>
  “The Women and the Word: Serpent Handling and the Women of the Church of God, 1914-1935” (M.A. thesis, University of Colorado Boulder, 2021)
</a>
    emergingDirection:
      "Religion and environmental history, with particular attention to outdoor religious practice (camping, revival culture, and mediated encounters with landscape).",
    publications: [
      {
        title: "The Women and the Word: Serpent Handling, Devotional Writing, and the Women in the Church of God, 1914-1936",
        venue: "Journal of Southern Religion (forthcoming)",
        note: "2025",
        link: "",
      },
    ],
  },
  writing: {
    academic: [
      {
        title: "[Article title]",
        venue: "Journal of Southern Religion (forthcoming)",
        blurb: "One-sentence description of the argument (keep it plain).",
        link: "",
      },
    ],
    public: [
      {
        title: "[Essay title]",
        venue: "[Publication], [Year]",
        blurb: "Short blurb.",
        link: "",
      },
    ],
  },
  professional: {
    komoot:
      "Senior Editor and project lead for U.S. and international route development. I design editorial workflows, manage distributed teams, and build tracking systems that improve quality control, publishing cadence, and cross-team coordination.",
    earlier:
      "(Optional) A brief line about outdoor education / instruction, kept short and professional.",
  },
  teaching: {
    approach:
      "(2–5 sentences. Keep it concrete: how you structure class time, what students do, what you assess.)",
    courses: ["World Mythology (community college)", "[Add others]"],
    quotes: [
      "“[…]” — course eval",
      "“[…]” — course eval",
    ],
  },
} as const;
