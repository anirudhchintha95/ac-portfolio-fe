import { bitsLogo, stevensLogo } from "./assets/images";

export const subHeadingsMapper = {
  education: "Education",
  academicProjects: "Academic Projects",
  workExperience: "Work Experience",
  skills: "Skills",
  achievements: "Achievements",
  contactMe: "Contact Me",
};

export const subHeadings = [
  subHeadingsMapper.education,
  subHeadingsMapper.academicProjects,
  subHeadingsMapper.workExperience,
  subHeadingsMapper.skills,
  subHeadingsMapper.achievements,
  subHeadingsMapper.contactMe,
];

export const EducationData = [
  {
    key: "masters",
    institute: "Stevens Institute of Technology",
    degree: "Master of Science",
    branch: "Computer Science",
    logo: stevensLogo,
    gpa: 4,
    maxGpa: 4,
    graduationDate: "May 2024",
    graduated: false,
  },
  {
    key: "bachelors",
    institute: "Birla Institute of Technology and Sciences, Pilani - Hyderabad Campus",
    degree: "Msc. Tech(Integrated Course)",
    branch: "Information Systems",
    logo: bitsLogo,
    gpa: 6.93,
    maxGpa: 10,
    graduationDate: "December 2016",
    graduated: true,
  },
];

export const WorkExperienceData = [
  {
    key: 1,
    title: "Senior Software Development Engineer",
    company: "West Agile Labs Pvt. Ltd",
    location: "Hyderabad, Telangana, India",
    from: "Jul 2021",
    to: "Jul 2022",
    current: false,
    type: "Full-time",
    description: [
      "Helped develop and release an essential customer-facing mobile-friendly order management ReactJS application. Worked in NodeJS on occasion to release the burden on the backend team.",
      "Helped set up unit-testing framework in Jest and React Testing Library and wrote unit tests for components.",
      "Gathered feature requirements and led multiple meetings to plan and estimate the upcoming sprints.",
      "Led a team of more than 12 members while delivering tasks and features on time.",
      "Considered the primary reviewer and decision maker for all the ReactJS applications.",
      "Won Mountain Mover Award in 2 separate quarters for my exemplary work and being one of the highest achievers among 350+ employees.",
      "Considered to be approachable, and friendly and helped the organization by conducting interviews and mentoring juniors.",
    ],
  },
  {
    key: 2,
    title: "Software Development Engineer",
    company: "West Agile Labs Pvt. Ltd",
    location: "Hyderabad, Telangana, India",
    from: "Jun 2017",
    to: "Jun 2021",
    current: false,
    type: "Full-time",
    description: [
      "Worked as a Backend Engineer focusing on Ruby, and Ruby on Rails while also working on HTML and, CSS",
      "Released a closed library(gem) for a project in Ruby on Rails called password_rules that helps maintain and manage the password restrictions at the Model level.",
      "Learned VueJS in 3 months and helped develop a project while working on the backend in ROR.",
      "Unofficially led the Backend ROR team in a project while also learning and implementing ReactJS with the newly released hooks.",
    ],
  },
];
