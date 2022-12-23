import { bitsLogo, stevensLogo } from "./assets/images";

export const subHeadingsMapper = {
  education: "Education",
  academicProjects: "Academic Projects",
  workExperience: "Work Experience",
  skills: "Skills",
  achievements: "Achievements",
  aboutMe: "About Me",
};

export const subHeadings = [
  subHeadingsMapper.education,
  subHeadingsMapper.academicProjects,
  subHeadingsMapper.workExperience,
  subHeadingsMapper.skills,
  subHeadingsMapper.achievements,
  subHeadingsMapper.aboutMe,
];

export const EductionData = [
  {
    key: "masters",
    institute: "Stevens Institute of Technology",
    degree: "Master of Science",
    branch: "Computer Science",
    logo: stevensLogo,
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
