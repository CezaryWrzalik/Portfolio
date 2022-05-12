import {
  ImagePortfolio,
  ImagePortfolioMobile,
  ImageStarwars,
  ImageStarwarsMobile,
  ImageTictactoe,
  ImageTictactoeMobile,
} from "@shared/images";

export const projectsData = [
  {
    title: "Tic-tac-toe",
    year: "2021",
    description:
      "Basic Tic tac toe game with minimax algorithm.",
    technologies: ["HTML/CSS", "RWD", "TypeScript", "Next.js", "Styled-Components", "Next-auth", "Recoil", "MongoDB"],
    stage: "Singleplayer finished. Multiplayer in progress",
    previewLink: "https://github.com/CezaryWrzalik/Tic-tac-toe-v2",
    pageLink: "https://tic-tac-toe-v2-eight.vercel.app/",
    images: {
      dekstop: ImageTictactoe,
      mobile: ImageTictactoeMobile,
    },
  },
  {
    title: "Starwars",
    year: "2022",
    description: "Page displaying info about characters, vechiles, movies, etc. ",
    technologies: ["HTML/CSS", "RWD", "TypeScript", "Next.js", "Styled-Components", "Next-auth", "Redux-toolkit"],
    stage: "In Progress",
    previewLink: "https://github.com/CezaryWrzalik/Starwars-v2",
    pageLink: "https://starwars-v2.vercel.app/",
    images: {
      dekstop: ImageStarwars,
      mobile: ImageStarwarsMobile,
    },
  },
  {
    title: "Portfolio",
    year: "2022",
    description:
      "My personal page. I placed it here mainly for fast access to Github page",
    technologies: ["HTML/CSS", "RWD", "TypeScript", "Next.js", "Styled-Components", "Figma", "Storybook"],
    stage: "Finished",
    previewLink: "https://github.com/CezaryWrzalik/Portfolio",
    pageLink: "#",
    images: {
      dekstop: ImagePortfolio,
      mobile: ImagePortfolioMobile,
    },
  },
];
