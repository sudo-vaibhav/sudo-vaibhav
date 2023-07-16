/* Change this file to get your personal Portfolio */
import React from "react"
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vaibhav Chopra",
  title: "H, I'm Vaibhav",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building highly available applications with NodeJS / Python / Docker  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://github.com/sudo-vaibhav/my-resume/raw/master/Vaibhav's%20Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sudo-vaibhav",
  linkedin: "https://www.linkedin.com/in/vc2001/",
  gmail: "mailvaibhavchopra@gmail.com",
  medium: "https://medium.com/@sudo-vaibhav",
  stackoverflow: "https://stackoverflow.com/users/11605919/vaibhav-chopra",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Build cloud-native, scalable backend applications with Docker and Kubernetes"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Solidity",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "SQL and MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vellore Institute of Technology, Vellore",
      logo: require("./assets/images/vit.png"),
      subHeader: "B.Tech in Computer Science, CGPA: 9.39",
      duration: "July 2019 - Present",
      desc: "Performed excellently in academics and co-curricular activities and also became Program Representative.",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Blockchain Fellow",
      company: "The Celo Foundation",
      companylogo: require("./assets/images/celo.png"),
      date: "June 2021 - August 2021",
      desc: "",
      descBullets: [
        "Developed several decentralized applications involving the using the WEB3 SDK.",
        "Contributed to open source and assisted in documenting core libraries using Storybook and Docusaurus.",
        "Conducted several presentations and talks on Celo."
      ]
    },
    {
      role: "Software Developer",
      company: "Prisha Insurance Brokers",
      companylogo: require("./assets/images/prishapolicy.png"),
      date: "Mar 2021 - Apr 2022",
      desc: "",
      descBullets: [
        "Developed several applications responsible for vital operation from scratch.",
        "Spearheaded the use of cutting-edge technologies like GraphQL, Gatsby, MongoDB, React, and Progressive Web Apps to enhance developer and customer experience.",
        "Optimized the digital footprint and increased unique visitors by 50%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Organizations",
  subtitle: "Some student organizations where I had the fortune to both learn and teach.",
  projects: [
    {
      image: require("./assets/images/stc.png"),
      projectName: "Student Technical Community",
      projectDesc: "A student community aimed at enhancing skills in various domains through quality projects and events tailored for cutting edge skill development. We have a passion for innovation and excellence.",
      footerLink: [
        {
          name: "VISIT",
          url: "http://stcvit.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/iste.png"),
      projectName: "Indian Society for Technical Education",
      projectDesc: "The major objective of ISTE is to assist and contribute in the production and development of top quality professional engineers and technicians needed by the industry.",
      footerLink: [
        {
          name: "VISIT",
          url: "https://istevit.in/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Winner at DEVSOC 2021",
      subtitle:
        <p>My team Sic Parvis Magna won best UI/UX and NFT track prize by <a href="https://rarible.com/" target="_blank" rel="noopener noreferrer">Rarible</a></p>,
      image: require("./assets/images/devsoc.png"),
      footerLink: [
        {
          name: "ANNOUNCEMENT",
          url: "https://www.instagram.com/p/COiYD03N8an/"
        },
      ]
    },
    {
      title: "Winner at Hackout",
      subtitle:
        <p>Secured third prize in the nation-wide hackathon organized by <a href="https://www.headout.com" target="_blank" rel="noopener noreferrer">Headout Inc</a></p>,
      image: require("./assets/images/hackout.png"),
      footerLink: [
        {
          name: "PRESENTATION",
          url: "https://youtu.be/34hC7XRbnUU?t=1050"
        }
      ]
    },
    {
      title: "Rated Knight on Leetcode",
      subtitle: "Top 25% site-wide in timed contests (<9000 worldwide)",
      image: require("./assets/images/leetcode.png"),
      footerLink: [
        { name: "PROFILE", url: "https://leetcode.com/vaibhavchopra/" },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Blogs are a great way for me to express and share my experiences, I love to write and teach others whatever I learn.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "How to Win a Hack?",
      subtitle: "A fun talk on my experiences and tips on how to excel at hackathons in college.",
      slides_url: "https://github.com/sudo-vaibhav/technica-slide-deck/raw/main/ISTE-hack-slide-deck%20.pdf",
      event_url: "https://youtu.be/gBeyfPTC_zg?t=1302"
    },
    {
      title: "Intro To CSS Grid",
      subtitle: "An interactive tutorial explaining the basics of the CSS grid to help web developers make a 2-Dimensional layout for websites.",
      slides_url: "https://github.com/sudo-vaibhav/css-grid/raw/master/An%20Intro%20to%20CSS%20Grid.pptx",
      event_url: "https://youtu.be/ugYSubqZf0I?t=560"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embedded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "mailvaibhavchopra@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
