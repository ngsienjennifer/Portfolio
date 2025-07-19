/* Change this file to get your personal Portfolio */

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
  username: "Ng Si En Jennifer",
  title: "Hi all, I'm Jennifer",
  subTitle: emoji(
    "A Robotics Systems Engineering student at the Singapore Institute of Technology with a strong foundation in industrial operations and administrative work. My experience spans backend support, logistics coordination, and customer service—blending technical learning with real-world application and fueling my passion for robotics as a tool to solve problems and improve lives."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1yoHOL1Ldhe-xBTG8zSZCt4nqtIZA7VUp0sU--pMgNS4/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ngsienjennifer/Portfolio",
  linkedin: "https://www.linkedin.com/in/jennifer-ng-si-en/",
  gmail: "jxnn19ng@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Robotics Systems Engineering student exploring technology and automation with operations and admin experience",
  skills: [
    emoji("🤖 Currently studying robotics systems to understand automation and system integration"),
    emoji("📊 Skilled in operations, administration, logistics and project support"),
    emoji("💻Familiar with C/C++, web development tools, and microcontroller environments (STM32)"),
    emoji("🎨 Experienced with tools like Canva, Tableau, Minitab, and AutoCAD")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "STM32Cube",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "AutoCAD",
      fontAwesomeClassname: "fas fa-drafting-compass"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Microsoft Office",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Magento",
      fontAwesomeClassname: "fab fa-magento"
    },
    {
      skillName: "Canva",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Singapore Institute of Technology",
      logo: require("./assets/images/SITLogo.png"),
      subHeader: "Bachelor of Engineering in Robotics Systems Engineering",
      duration: "September 2024 – Present",
      desc: "Pursuing a degree focused on robotics, automation, systems engineering, and programming.",
      descBullets: [
        "Working on projects involving ROS and autonomous navigation using LIMO robot",
        "Learning systems engineering approaches to apply in real-world problems"
      ]
    },
    {
      schoolName: "Republic Polytechnic",
      logo: require("./assets/images/RPLogo.png"),
      subHeader: "Diploma in Industrial and Operations Management",
      duration: "April 2020 – April 2023",
      desc: "Graduated with a foundation in operations planning, analytics, and project management.",
      descBullets: [
        "Learned tools like Tableau, AutoCAD, Minitab, and Microsoft Excel for process improvement",
        "Completed industry-based internship in operations and customer support"
      ]
    },
    {
      schoolName: "Greenridge Secondary School",
      logo: require("./assets/images/GRSSLogo.png"),
      subHeader: "GCE 'O' Levels",
      duration: "January 2016 – December 2019",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "English", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mandarin Chinese",
      progressPercentage: "70%"
    },
    {
      Stack: "Tagalog",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Temp Admin Assistant",
      company: "Fraser and Neave",
      companylogo: require("./assets/images/FNlogo.png"),
      date: "Sep 2023 – Dec 2023",
      desc: "Provided backend operations support in a fast-paced consumer goods company.",
      descBullets: [
        "Verified and filed invoices for accuracy and audit compliance",
        "Processed staff claims and calculated monthly commissions",
        "Managed scanning, data entry, discrepancy tracking and reporting"
      ]
    },
    {
      role: "Operations Intern",
      company: "BedandBasics",
      companylogo: require("./assets/images/BnBLogo.png"),
      date: "Sep 2022 – Jan 2023",
      desc: "Supported logistics, customer service, and marketing at a home furnishing startup.",
      descBullets: [
        "Handled customer inquiries via calls, emails and live chat",
        "Processed online orders and supported logistics coordination",
        "Assisted in showroom sales, created QR labels, and ran backend livestream setups using OBS"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle: "MAJOR PROJECTS REFLECTING MY TECHNICAL AND ENGINEERING GROWTH",
  projects: [
    {
      image: require("./assets/images/SEP1_Arena.png"),
      projectName: "Systems Engineering Project 1",
      projectDesc: "Developed a miniature arena inspired by Changi Airport's Canopy Park to simulate complex navigation tasks. Applied SEBoK's Systems Approach methodology to define stakeholder needs, conceptualize the system, and implement ROS1-based control. Integrated a LIMO robot for autonomous path planning and execution across segmented zones.",
      footerLink: [
        {
          name: "Watch Demo Video",
          url: "assets/videos/SEP1_LimoDemo.mp4",
        },
        {
          name: "View Project Code",
          url: "https://github.com/ngsienjennifer/Portfolio", // replace with git next time
        },
        {
          name: "About the Project (PDF)",
          url: "assets/docs/SEP1_Overview.pdf", 
        },
      ],
    },
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/SITLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/SITLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/SITLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+65 82237746",
  email_address: "jxnn19ng@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  twitterDetails,
  isHireable,
  resumeSection
};
