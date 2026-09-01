/* =====================================================================
   SITE CONTENT — this is the ONLY file you edit to update your site.
   Add a paper? Add an object to `publications`.
   Add a project? Add an object to `projects.research` (or `.course`).
   Everything renders automatically. No HTML needed.
   ---------------------------------------------------------------------
   Tips:
   - Images live in  images/   Videos live in  Videos/
   - For a video thumbnail use  media: { type: "video", src: "Videos/x.mp4" }
   - For an image thumbnail use  media: { type: "image", src: "images/x.png" }
   - Any link key is optional; only the ones you list will show.
   ===================================================================== */

const CONTENT = {

  /* ---------- BASIC INFO ---------- */
  profile: {
    name: "Prakrut Kotecha",
    role: "Ph.D. Student @ IISc Bangalore",
    photo: "images/profile.jpg",
    // Each paragraph is one entry. Use <strong> and <a> freely.
    bio: [
      `I am a Ph.D. researcher in <strong>Cyber-Physical Systems</strong> at the Indian Institute of Science (IISc), Bangalore, working under <a href="https://cps.iisc.ac.in/people/shishir-ny/">Prof. Shishir NY</a> as part of <a href="https://www.stochlab.com/">Stoch Lab</a>. My research focuses on <strong>learning-based dynamics models and optimal control for robots</strong>, with the goal of enabling robust and adaptive robotic locomotion.`,
      `My interest in robotics began during my undergraduate studies at <strong>VNIT Nagpur</strong>, where I was an active member of <strong>IvLabs</strong> under the mentorship of Prof. Shital Chiddarwar. Since then, I have been deeply engaged in advancing intelligent and physically grounded control strategies for complex robotic systems.`,
      `I am always open to research collaborations and discussions related to robotics, learning-based control, and dynamic systems.`
    ],
    interests: [
      "Quadrupedal Locomotion & Dynamics",
      "Learning-based Control",
      "Model Predictive Control",
      "Reinforcement Learning for Robotics",
      "Reconfigurable Robotic Systems"
    ],
    socials: [
      { type: "email",    url: "mailto:prakrutpk@iisc.ac.in" },
      { type: "github",   url: "https://github.com/prakrutk" },
      { type: "linkedin", url: "https://www.linkedin.com/in/prakrut-kotecha-044093189/" },
      { type: "scholar",  url: "https://scholar.google.com/citations?user=LPDasNEAAAAJ&hl=en" }
    ]
  },

  /* ---------- NEWS (leave [] to hide the section) ---------- */
  news: [
    // { date: "2026", text: `Presented a Late Breaking Result at <strong>ICRA 2026</strong>.` },
  ],

  /* ---------- PUBLICATIONS & PATENTS ---------- */
  publications: [
    // {
    //   title: "STRIDE: Structured Lagrangian and Stochastic Residual Dynamics via Flow Matching",
    //   authors: "<strong>Prakrut Kotecha</strong>, et al.",
    //   venue: "2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    //   status: "Under Review",
    //   media: { type: "video", src: "Videos/stride.mp4" },
    //   links: { Paper: "https://arxiv.org/abs/2603.08478", Website: "project-stride.html" }
    // },
    {
      title: "Neural Predictive Control using Lagrangian Neural Networks for Quadruped Locomotion",
      authors: "<strong>Prakrut Kotecha</strong>, et al.",
      venue: "2026 IEEE 22nd Conference on Automation Science and Engineering (CASE)",
      status: "Accepted",
      award: "🏅 IEEE RAS Travel Grant, 2026 ✈️",
      media: { type: "video", src: "Videos/Lagrangian.mp4" },
      links: { Paper: "https://arxiv.org/abs/2603.14333", Website: "https://www.stochlab.com/PEPC/" }
    },
    {
      title: "Real-Time Gait Adaptation for Quadrupeds using Model Predictive Control and Reinforcement Learning",
      authors: "<strong>Prakrut Kotecha</strong>, et al.",
      venue: "2025 Eleventh Indian Control Conference (ICC-11)",
      status: "Published",
      media: { type: "video", src: "Videos/gait-adaptation.mp4" },
      links: { Paper: "https://arxiv.org/abs/2510.20706", Website: "https://sites.google.com/iisc.ac.in/autogait/home?authuser=0" }
    },
    {
      title: "Investigating Lagrangian Neural Networks for Infinite Horizon Planning in Quadrupedal Locomotion",
      authors: "<strong>Prakrut Kotecha</strong>, et al.",
      venue: "7th International Conference of The Robotics Society, Advances In Robotics 2025",
      award: "⭐ 🏆 Best Poster Award 🏆 ⭐",
      status: "Published",
      media: { type: "image", src: "images/Main_fig copy.png" },
      links: { Paper: "https://www.arxiv.org/abs/2506.16079" }
    },
    {
      title: "A Hierarchical Manipulation Planning Framework Combining Striking, Pushing, and Pick & Place Motion Primitives",
      authors: "<strong>Prakrut Kotecha</strong>, et al.",
      venue: "IEEE Conference on Automation Science and Engineering (CASE) 2024",
      status: "Published",
      award: "🏅 IEEE RAS Travel Grant, 2024 ✈️",
      media: { type: "image", src: "Videos/non-prehensile.gif" },
      links: { Paper: "https://ieeexplore.ieee.org/document/10711645", Video: "https://youtu.be/ePORvzIond8" }
    },
    {
      title: "Navigation System for a vehicle and a method for navigation",
      authors: "<strong>Prakrut Kotecha</strong>, et al.",
      venue: "CBR Ref. Number: 201921049473 (2018)",
      status: "Published Patent",
      media: { type: "video", src: "Videos/pixguide-short.mp4" },
      links: { Video: "https://youtu.be/ePORvzIond8" }
    }
  ],

  /* ---------- AWARDS & CONTRIBUTIONS ---------- */
  recognition: [
    { type: "Award", icon: "🏆", title: "Best Poster Award", detail: "Advances in Robotics 2025" },
    { type: "Award", icon: "🏅", title: "IEEE RAS Travel Grant", detail: "CASE 2024" },
    { type: "Award", icon: "🏅", title: "IEEE RAS Travel Grant", detail: "CASE 2026" },
    { type: "Contribution", icon: "🎓", title: "Teaching Assistant", detail: "Foundation of Robotics, IISc" },
    { type: "Contribution", icon: "🤝", title: "Volunteer", detail: "Cyber-Physical Systems Symposium (CyPhySS) 2024" },
    { type: "Contribution", icon: "🛠️", title: "IEEE Student Chapter Workshops", detail: "Image processing, microcontrollers, and CAD for 100+ students" }
  ],

  /* ---------- WORKSHOP / LATE-BREAKING (no thumbnail) ---------- */
  workshops: [
    {
      title: "PhysFlow: Physics-Grounded Visual World Models via Flow Matching and Lagrangian Neural Networks",
      venue: "CVPR 2026 Workshop on Embodied AI"
    },
    {
      title: "STRIDE: Structured Lagrangian and Stochastic Residual Dynamics via Flow Matching",
      venue: "ICRA 2026 Workshop on Contact-Rich Control and Representation"
    },
    {
      title: "Real-Time Gait Adaptation for Quadrupeds using Model Predictive Control and Reinforcement Learning",
      venue: "2025 IEEE-RAS 24th International Conference on Humanoid Robots (Late Breaking Results)"
    }
  ],

  /* ---------- PROJECTS ---------- */
  // `homepageFeatured` lists the 3 project ids shown on the homepage.
  projects: {
    homepageFeatured: ["video2robot", "non-prehensile", "lagrangian-nn"],
    research: [
      { id: "video2robot", title: "Video 2 Robot", page: "project-video2robot.html",
        media: { type: "video", src: "Videos/Bharatnatyam_Mujoco.mp4" },
        blurb: "End-to-end pipeline for motion imitation from videos. Extracts human pose and retargets to humanoid robots with mjlab training and RoboJuDo deployment.",
        tags: ["Motion Imitation", "Humanoid Robotics", "mjlab"] },
      { id: "stride", title: "STRIDE — Structured Lagrangian & Stochastic Residual Dynamics", page: "project-stride.html",
        media: { type: "video", src: "Videos/stride.mp4" },
        blurb: "Physics-guided dynamics learning combining Lagrangian Neural Networks with Flow Matching for stochastic contact modeling.",
        tags: ["Dynamics Learning", "Flow Matching", "Quadrupedal Locomotion"] },
      { id: "qhumus", title: "QHuMuS — Reconfigurable Robots", page: "project-qhumus.html",
        media: { type: "video", src: "Videos/Qhumus_s2h.mp4" },
        blurb: "A novel system that transitions between serpentine, wheeled-quadruped, and humanoid modes without rearrangement.",
        tags: ["Reconfigurable Robotics", "Morphology", "Multi-modal Locomotion"] },
      { id: "quadruped-gait", title: "Real-Time Gait Adaptation for Quadrupeds", page: "project-quadruped-gait.html",
        media: { type: "video", src: "Videos/gait-adaptation.mp4" },
        blurb: "Adaptive gait generation using MPC integrated with RL for dynamic quadrupedal locomotion.",
        tags: ["Quadrupedal Locomotion", "MPC", "Gait Optimization"] },
      { id: "lagrangian-nn", title: "Lagrangian Neural Networks for Quadrupedal Locomotion", page: "project-lagrangian-nn.html",
        media: { type: "video", src: "Videos/Lagrangian.mp4" },
        blurb: "Physics-informed neural networks for infinite horizon planning in quadrupedal locomotion.",
        tags: ["Deep Learning", "Physics-Informed ML", "Dynamics"] },
      { id: "non-prehensile", title: "Non-Prehensile Manipulation", page: "project-non-prehensile.html",
        media: { type: "image", src: "Videos/non-prehensile.gif" },
        blurb: "Framework combining striking, pushing, and pick & place motion primitives.",
        tags: ["Manipulation", "Trajectory Optimization", "Gripper Design"] },
      { id: "quadruped-control", title: "Control and Design of Quadruped Robot", page: "project-quadruped-control.html",
        media: { type: "image", src: "Videos/quadruped-control.gif" },
        blurb: "Hybrid Dynamics-based controller for dynamic walking gait generation.",
        tags: ["Quadruped", "Hybrid Dynamics", "Control Design"] },
      { id: "biped-optimization", title: "Gait and Trajectory Optimization for Bipeds", page: "project-biped-optimization.html",
        media: { type: "image", src: "Videos/biped-optimization.gif" },
        blurb: "Trajectory optimization on a 5-link kneed walker with non-linear dynamics and chaos theory.",
        tags: ["Bipedal", "Trajectory Optimization", "Chaos Theory"] },
      { id: "pixguide", title: "PixGuide Navigation Device", page: "project-pixguide.html",
        media: { type: "video", src: "Videos/pixguide-short.mp4" },
        blurb: "Hardware navigation device for two-wheelers developed at IvLabs.",
        tags: ["Hardware", "Navigation", "Embedded Systems"] }
    ],
    course: [
      { id: "bipedal-rl-mpc", title: "Combining RL and MPC for Bipedal Walking", page: "project-bipedal-rl-mpc.html",
        media: { type: "video", src: "Videos/bipedal-rl-mpc.mp4" },
        blurb: "A hybrid control strategy combining Reinforcement Learning with Model Predictive Control.",
        tags: ["Bipedal Robots", "RL", "MPC"] },
      { id: "collision-cbf", title: "Collision Cone Control Barrier Function", page: "project-collision-cbf.html",
        media: { type: "video", src: "Videos/cbf.mp4" },
        blurb: "Safety barriers for UAV obstacle avoidance using Control Barrier Functions.",
        tags: ["UAV", "Control Barrier Functions", "Safety"] },
      { id: "hierarchical-manipulation", title: "Hierarchical Manipulation Planning", page: "project-hierarchical-manipulation.html",
        media: { type: "video", src: "Videos/IL.mp4" },
        blurb: "Framework combining striking, pushing, and pick & place motion primitives.",
        tags: ["Manipulation Planning", "Motion Primitives"] },
      { id: "kimera-perception", title: "KIMERA — Visual SLAM Perception", page: "project-kimera-perception.html",
        media: { type: "video", src: "Videos/Perception_part1.mp4" },
        blurb: "Visual SLAM using KIMERA for real-time metric-semantic localization and mapping.",
        tags: ["Visual SLAM", "KIMERA", "Robotics"] },
      { id: "mpc-ugv", title: "MPC for UGVs in Unknown Environments", page: "project-mpc-ugv.html",
        media: { type: "video", src: "Videos/UGV.mp4" },
        blurb: "Waypoint generation and navigation controls for obstacle avoidance using MPC.",
        tags: ["UGV", "MPC", "Navigation"] }
    ]
  },

  /* ---------- EXPERIENCE ---------- */
  experience: [
    { title: "Research Intern", org: "Advanced Humanoid Research Lab, Infosys Limited",
      date: "Feb 2026 – Present", logo: "images/Infosys_logo.png",
      desc: "Humanoid robotics research and development." },
    { title: "Research Intern", org: "Robotics Research Centre (RRC), IIIT Hyderabad",
      date: "Jan 2022 – Mar 2023", logo: "images/rrc_logo.jpeg",
      desc: `Developed a framework for Hybrid Manipulation using a mobile manipulator under <a href="https://www.iiitdm.ac.in/people/faculty/nagamanikandan.g@iiitdm.ac.in">Prof. Nagamanikandan Govindan</a>.` },
    { title: "Summer Intern", org: "Indian Institute of Space Science and Technology",
      date: "May 2021 – Sep 2021", logo: "images/Indian_Institute_of_Space_Science_and_Technology_Logo.jpg",
      desc: `Worked on a hybrid dynamics-based controller to produce dynamic walking gait for quadrupeds under <a href="https://www.iist.ac.in/people-faculty-profile/sam-k-zachariah">Prof. Sam Zachariah</a>.` },
    { title: "Researcher", org: "IvLabs Robotics Club, VNIT Nagpur",
      date: "2019 – 2022", logo: "images/ivlabs_vnit_logo.jpeg",
      desc: `Robotics projects and Alumni Secretary at IvLabs under <a href="https://scholar.google.com/citations?user=B9InqKQAAAAJ&hl=en">Prof. Shital Chiddarwar</a>.` }
  ],

  /* ---------- TALKS & PRESENTATIONS ---------- */
  talks: [
    { title: "Oral Presentation", venue: "2026 IEEE 22nd Conference on Automation Science and Engineering (CASE)", img: "images/CASE2026talk.jpeg" },
    { title: "RL Tutorial", venue: "Walmart Centre for Tech Excellence RL Workshop, 2025 & 2026", img: "images/RL_workshop_new.jpg" },
    { title: "Late Breaking Result", venue: "IEEE-RAS 24th Intl. Conference on Humanoid Robots, 2025", img: "images/humanoid.jpg" },
    { title: "Oral Presentation", venue: "Neuromorphic Engineering Workshop, 2025", img: "images/neuromorphic.jpg" },
    { title: "Oral Presentation", venue: "IEEE Conference on Automation Science and Engineering (CASE), 2024", img: "images/case.jpg" },
    { title: "Oral Presentation", venue: "Cyber-Physical Systems Symposium (CyPhySS), 2024", img: "images/cyphyss.png" },
    { title: "Poster Presentation", venue: "IEEE-RAS ICRA 2026 Workshop on Contact-Rich Control and Representation", img: "images/STRIDE_ICRA_poster.png" }
  ]
};

/* Make the content available to the renderer (do not remove). */
if (typeof window !== "undefined") window.CONTENT = CONTENT;
