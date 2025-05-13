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
 username: "Steven Liu",
 title: "Hello, 初めまして, 你好        I'm Steven Liu",
 subTitle: emoji(
  // "A passionate UX designer and creative device developer 🚀, " +
  // "dedicated to exploring the intersection of design, technology, and human experience. " +
  // "My work spans HCI research, interactive systems, and the development of intuitive, user-centered hardware and software solutions. " +
 "A UX designer and creative device developer who explores the intersection of design, technology, and human experience 🚀. " +
"Based on research in HCI (Human-Computer Interaction), I am engaged in developing intuitive and user-centered hardware and software systems."
),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "lytssnmdl@gmail.com",
  weixin: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  // bilibili: "https://space.bilibili.com/2098446?spm_id_from=333.1007.0.0",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "UXデザインとHCIを軸に、創造的な体験をかたちにする研究者・開発者",
  skills: [
    emoji("⚡ Design and prototype user-centric experiences across physical and digital interfaces"),
  emoji("⚡ Develop interactive systems and creative devices integrating sensors and real-time feedback"),
  emoji("⚡ Conduct HCI research on embodied interaction, affective computing, and music-based interfaces")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "SolidEdge",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "DAW",
      fontAwesomeClassname: "fas fa-music"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Tokyo",
      logo: require("./assets/images/UTokyo_Logotype_B_Color_RGB20240401.png"),
      subHeader: "Ph.D. course of Human & Environment Informatics Lab, Department of Human and Engineered Environmental Studies, Graduate School of Frontier Sciences",
      duration: "September 2023 – Present",
      desc: "Participated in the research of AI, HCI and music and published 3 papers.",
      descBullets: [
        "劉羽童, 福井類, 「A wearable music generation device for arousing leisure motivation using the effect of self-efficacy」, 日本機械学会ロボティクス・メカトロニクス講演会2024講演論文集, 宇都宮, 2024年6月, 講演番号: 1P2-H01.",
        "劉羽童, 本田功輝, 福井類, 「意味に基づくリストバンド型音楽生成システムの設計 －象徴的手法と比較した自己効力感の向上－」, 第30回ロボティクスシンポジア予稿集, 愛媛県松山市, 2025年3月, pp.166-168.",
        "Yutong Liu, Koki Honda, Rui Fukui, Design of a Semantic-Based Wrist-Worn Music Generation System: Enhancing Self-Efficacy Compared to Traditional Symbolic-Based Methods."
      ]
    },
    {
      schoolName: "Tongji University",
      logo: require("./assets/images/TongjiLogo.png"),
      subHeader: "Master of Interaction Design, College of Design & Innovation",
      duration: "September 2019 – July 2022",
      desc: "Ranked top 10% in the college. Took courses about UX design, Service Design, Interaction Design, ...",
      descBullets: ["Y. Liu, Research on the Design of Digital Twin System for Construction Safety, In Proceedings of 2nd International Signal Processing, Communications and Engineering Management Conference (ISPCEM), Montreal, ON, Canada, 2022, pp. 254-258."]
    },
    {
      schoolName: "Shanghai University",
      logo: require("./assets/images/ShanghaiLogo.png"),
      subHeader: "Bachelor of Communication Engineering, College of Communication and Information Engineering",
      duration: "September 2014 – July 2018",
      desc: "Acquired knowledge in information processing and embedded technologies; independently developed several IoT projects.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UX/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Embedded Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portfolio",
  subtitle: "CHECK OUT MY UX JOURNEY IN SHANGHAI！",
  projects: [
    {
      image: require("./assets/images/Portfolio.webp"),
      projectName: "My UX Portfolio",
      projectDesc: "UX works developed during my postgraduate studies in interaction design",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://drive.google.com/file/d/1oprPGkPR_rJ1XWOz6bp70VnXhWaioHpm/preview"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Ongoing Projects 🚀 "),
  subtitle:
    "Some interesting projects I'm currently working on or collaborating with a team !",

  achievementsCards: [
    {
      title: "Semantic Gesture-Based Music Generation System",
      subtitle:
        "An intuitive music generation system that empowers users to create expressive music through natural gestures and emotion-driven input.",
      image: require("./assets/images/music2.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Paper",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Video",
          url: "https://youtu.be/KCtLg8ClEvc"
        },
        {
          name: "Slides",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Digital Twin of Construction Site Safety Management",
      subtitle:
        "Design of an AR digital twin safety management system for on-site construction safety officers.",
      image: require("./assets/images/DT2.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Paper",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
     {
      title: "Mind-Align",
      subtitle:
        "AI schedule management service for predicting daytime productivity based on sleep physiological data.",
      image: require("./assets/images/mind.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Slides",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Miyazaki Prefecture's Digital Human Tourism Promotion",
      subtitle: "AI digital human reception and promotion system for tourism development in Miyazaki Prefecture.",
      image: require("./assets/images/miyazaki.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
       
        {
          name: "Coming Soon",
          url: "https://www.pref.miyazaki.lg.jp/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Papers 📄",
  subtitle:
    "With Love for Developing cool stuff, I published research outcomes and papers:",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://ieeexplore.ieee.org/abstract/document/10070318",
      title: "Research on the Design of Digital Twin System for Construction Safety",
      description:
        "A user-centered digital twin system is proposed to enhance construction safety management and on-site usability."
    },
    {
      url: "https://www.jstage.jst.go.jp/article/jsmermd/2024/0/2024_1P2-H01/_article/-char/ja/",
      title: "A wearable music generation device for arousing leisure motivation using the effect of self-efficacy",
      description:
        "A wearable device that enhances leisure motivation by turning music listeners into active creators through improved self-efficacy."
    }
    
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
  title: emoji("My Music 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2070743668&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+92-080-7509-7583",
  email_address: "lytssnmdl@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "tapple_official", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
