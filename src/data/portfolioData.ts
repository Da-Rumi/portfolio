import { Project, EducationalGuide, IntersectionItem, CommunityRole, TeachingAudience, Essay, SkillGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Mahbub Mahbub',
  title: 'Medical Student | AI Builder | Software Engineer | Community Educator',
  tagline: 'Building at the intersection of medicine, technology, education, and AI.',
  location: 'Harar / Addis Ababa, Ethiopia',
  github: 'https://github.com/Da-Rumi',
  githubUser: 'Da-Rumi',
  linkedin: 'https://et.linkedin.com/in/mahbub-mahbub-611660238',
  tiktok: 'https://www.tiktok.com/@wezena1',
  tiktokUser: '@wezena1',
  email: 'mahbub.darumi@gmail.com',
  bio: `I am a medical student and certified software engineer exploring how artificial intelligence, software, and community education converge. Rather than viewing these fields as isolated silos, I look for the leverage points where they intersect: building custom clinical learning systems for medical rotations, architecting platforms for grassroots student academies, and designing distraction-free digital environments tailored to human cognition.`,
  corePhilosophy: `I do not want to spend my life fitting myself into one category. I want to learn across fields, find unexpected connections, and build things that are useful. The most interesting problems often sit between disciplines, and I think AI is making it easier for individuals to explore those spaces.`,
  longTermGoal: `To keep learning, keep building, and keep finding intersections where ideas from different worlds can become something new.`
};

export const STATS = [
  { value: '100+', label: 'Students Mentored', sub: 'At Wezena Academy & community' },
  { value: '5+', label: 'Custom Platforms Built', sub: 'Across medicine, education & productivity' },
  { value: '2', label: 'Clinical Survival Guides', sub: 'Surgery & Internal Medicine attachments' },
  { value: '4', label: 'Teaching Audiences', sub: 'Med students, clinicians, accountants, devs' }
];

export const EDUCATION_DATA = [
  {
    institution: 'Haramaya University',
    role: 'Medical Student',
    period: 'Current',
    location: 'Ethiopia',
    description: 'Pursuing medical education with clinical and surgical attachments. Deep hands-on training with clinical reasoning, bedside learning, patient interaction, medical literature synthesis, structured study methods, and navigating the practical cognitive challenges students face during demanding hospital rotations.',
    badges: ['Clinical Reasoning', 'Surgical Attachments', 'Bedside Learning', 'Medical Literature']
  },
  {
    institution: 'ALX Software Engineering Program',
    role: 'Certified Software Engineer',
    period: 'Completed Foundation',
    location: 'Online / Africa',
    description: 'Developed a rigorous foundation in software engineering principles, low-level and high-level programming, web technologies, Linux environments, Git version control, and scalable application architecture.',
    badges: ['Software Engineering', 'Web Development', 'Linux / Bash', 'System Architecture']
  }
];

export const INTERSECTIONS_DATA: IntersectionItem[] = [
  {
    id: 'med-software',
    title: 'Medicine + Software',
    primaryField: 'Medicine',
    secondaryField: 'Software Engineering',
    iconName: 'Stethoscope',
    description: 'Designing active recall software, clinical revision flashcards, and diagnostic case-structuring tools for medical students and clinicians navigating intense hospital rotations.',
    concreteOutputs: [
      'Medical Student Flashcard Platform for clinical revision',
      'Clinical logbook and active study companion tools',
      'Structured diagnostic case note organizers'
    ],
    quote: 'Medical education generates immense cognitive load. Software allows us to structure bedside experiences into retained clinical instincts.'
  },
  {
    id: 'edu-ai',
    title: 'Education + AI',
    primaryField: 'Education',
    secondaryField: 'Artificial Intelligence',
    iconName: 'Sparkles',
    description: 'Transforming dense textbooks and complex syllabi into personalized, gamified, and adaptive learning workflows that meet learners at their exact zone of proximal development.',
    concreteOutputs: [
      'Gamified 3,000-word vocabulary retention engine at Wezena',
      'AI-assisted curriculum summarization & syllabus decomposition',
      'Adaptive prompt frameworks for multi-disciplinary learners'
    ],
    quote: 'Instead of passive reading, AI enables interactive dialogue with dense literature, turning passive studying into active interrogation.'
  },
  {
    id: 'community-tech',
    title: 'Community + Technology',
    primaryField: 'Grassroots Community',
    secondaryField: 'Digital Platforms',
    iconName: 'Users',
    description: 'Building accessible hubs, coding labs, and peer associations in Harar to democratize technical skills, software literacy, and collaborative medical learning.',
    concreteOutputs: [
      'Wezena Academy: Expanded from 10 students in a room to ~100 learners',
      'HararDev Center: Community coding lab for Python, Web & Linux',
      'Harari Medical Association: Peer clinical collaboration network'
    ],
    quote: 'Technology achieves its highest leverage when it brings local learners together to teach and elevate one another.'
  },
  {
    id: 'productivity-ai',
    title: 'Productivity + AI',
    primaryField: 'Intentional Living',
    secondaryField: 'Custom Tooling',
    iconName: 'Cpu',
    description: 'Moving from generic commercial SaaS to bespoke software tailored around individual cognitive workflows, multi-interest tracking, and distraction-free learning.',
    concreteOutputs: [
      'Personal Polymath Tracking Application (habits, guitar, writing, code)',
      'Customized Distraction-Free YouTube learning environment',
      'AI-assisted research synthesis and information structuring protocols'
    ],
    quote: 'Instead of asking "Which app should I buy?", I ask "What would the ideal tool for this exact cognitive friction look like, and can I build it?"'
  },
  {
    id: 'culture-tech',
    title: 'Local Culture + Technology',
    primaryField: 'Cultural Heritage',
    secondaryField: 'Modern E-Commerce',
    iconName: 'Globe',
    description: 'Exploring how modern software infrastructure can connect Harari artisans, local businesses, and unique cultural products with global audiences.',
    concreteOutputs: [
      'Hararmagala: Digital marketplace concept for local Harari products',
      'Digital preservation of local educational and cultural initiatives',
      'High-impact community outreach frameworks'
    ],
    quote: 'Software allows regional heritage and specialized craftsmanship to find resonance and sustainability far beyond geographic borders.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'med-flashcards',
    title: 'Medical Student Flashcard Platform',
    tagline: 'Focused, accessible spaced-repetition revision engineered for clinical hospital rotations.',
    category: 'medicine',
    intersections: ['Medicine', 'Software', 'AI'],
    description: 'A purpose-built web application engineered to solve the acute retention dilemma faced by medical students during intensive clinical attachments. Traditional textbook reading evaporates quickly after long ward hours; this platform converts high-yield clinical reasoning into active recall prompts.',
    problem: 'Medical students struggle to retain vast volumes of surgical and medical knowledge while managing demanding clinical hours and bedside fatigue.',
    solution: 'Designed and deployed an intuitive, low-latency flashcard revision platform featuring spaced repetition, clinical case tags, and quick-drill modes.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Spaced Repetition Algorithm', 'Web Storage'],
    keyFeatures: [
      'Chief-complaint & clinical rotation categorization',
      'Active recall with confidence-weighted review scheduling',
      'Offline-friendly lightweight mobile responsive interface',
      'Surgical case study & clinical pearl integration'
    ],
    impactOrStatus: 'Live active learning tool deployed and used by medical peers for surgery & internal medicine revision.',
    link: 'https://wezena-step1-flashcards.ai.studio/'
  },
  {
    id: 'wezena-platform',
    title: 'Wezena Student Learning Platform',
    tagline: 'Digital operating system powering Wezena Academy with study tracking, flashcards, and gamification.',
    category: 'education',
    intersections: ['Education', 'Software', 'Community'],
    description: 'The digital backbone created for Wezena Academy. Connects students with structured study plans, personalized study-time tracking, progress analytics, and a gamified 3,000-word English vocabulary acquisition engine.',
    problem: 'Students needed more than classroom lectures; they required systematic tracking of study hours, consistent vocabulary retention, and objective feedback on their progress.',
    solution: 'Engineered a unified student portal combining active learning tools, evidence-based study habit tracking, and celebratory gamification mechanics.',
    techStack: ['JavaScript', 'HTML5/CSS3', 'Progress Analytics', 'Gamification Engine', 'Local & Cloud Storage'],
    keyFeatures: [
      'Custom study-time stopwatches and accountability logs',
      'Gamified 3,000-word vocabulary mastery system with tiered levels',
      'Multi-teacher progress dashboard for tracking class batches',
      'Evidence-based study method drills (Feynman technique & active recall)'
    ],
    impactOrStatus: 'Scaled from supporting 10 initial students in a single room to nearly 100 learners across physical and online cohorts.',
    link: 'https://wezena.hararmagala.com'
  },
  {
    id: 'wezena-mentor',
    title: 'Wezena Mentor AI',
    tagline: 'AI-assisted pedagogical mentor and interactive study companion for students and self-learners.',
    category: 'education',
    intersections: ['Education', 'AI', 'Community'],
    description: 'An intelligent academic mentoring companion built with generative AI to guide learners through conceptual decomposition, active questioning, syllabus navigation, and evidence-based study habit development.',
    problem: 'Students often need immediate, personalized tutoring and step-by-step guidance tailored to their specific learning hurdles outside of classroom hours.',
    solution: 'Engineered an adaptive mentoring interface that prompts students to explain ideas simply (Feynman method) and breaks dense concepts into intuitive step-by-step mental models.',
    techStack: ['React', 'Gemini AI', 'TypeScript', 'Tailwind CSS', 'Prompt Engineering'],
    keyFeatures: [
      'Interactive Socratic tutoring and conceptual verification',
      'Curriculum breakdown and study roadmap generation',
      'Active questioning prompts to test conceptual depth',
      'Personalized study habits and cognitive load optimization'
    ],
    impactOrStatus: 'Live interactive mentor deployed for Wezena Academy students and self-directed learners.',
    link: 'https://wezena-mentor.ai.studio/'
  },
  {
    id: 'wezena-talks',
    title: 'Wezena Talks Community Hub',
    tagline: 'Community discourse, educational lectures, and knowledge-sharing audio/visual repository.',
    category: 'community',
    intersections: ['Community', 'Education', 'Technology'],
    description: 'A dedicated platform archiving knowledge-sharing sessions, student seminars, medical discussions, and cross-disciplinary talks across Harar and online learning communities.',
    problem: 'Valuable insights from local seminars and clinical discussions were ephemeral and lost after physical sessions.',
    solution: 'Created a centralized digital repository for recorded lectures, educational panels, and student-led seminars with topic indexing.',
    techStack: ['React', 'TypeScript', 'Audio/Video Platform', 'AI Studio'],
    keyFeatures: [
      'Curated repository of community talks and academic workshops',
      'Indexed by discipline: Medicine, Tech, Pedagogy, and Motivation',
      'Structured discussion prompts and study takeaways'
    ],
    impactOrStatus: 'Live community platform hosting educational insights and student discussions.',
    link: 'https://wezena-talks.ai.studio'
  },
  {
    id: 'custom-youtube',
    title: 'IntenTube: Distraction-Free YouTube',
    tagline: 'A stripped-down, intention-first video interface designed for deep research and focused study.',
    category: 'productivity',
    intersections: ['Productivity', 'Software'],
    description: 'A customized YouTube interface built to strip away algorithmic recommendation loops, clickbait sidebars, comment distractions, and doom-scrolling hooks, turning YouTube into a razor-sharp learning library.',
    problem: 'YouTube holds world-class medical lectures and technical tutorials, but its recommendation algorithms actively hijack attention and fragment deep focus.',
    solution: 'Created an intentional, minimalist interface that only surfaces curated educational queries and study playlists with zero algorithmic autoplay rabbit holes.',
    techStack: ['JavaScript', 'Web APIs', 'UI/UX Design', 'Distraction-Blocking Architecture'],
    keyFeatures: [
      'Zero algorithmic homepage feed — starts with a clean search prompt',
      'Hides recommended sidebars, infinite scroll, and noisy comment sections',
      'Focus playback mode with timestamped note-taking capabilities',
      'Intentional session timer with deep-work reminders'
    ],
    impactOrStatus: 'Live tool empowering uninterrupted medical surgery video analysis and coding lectures.',
    link: 'https://intentube.hararmagala.com'
  },
  {
    id: 'hararmagala',
    title: 'Hararmagala E-Commerce Platform',
    tagline: 'Bridging Harar’s local artisans and culturally significant goods with broader regional markets.',
    category: 'ecommerce',
    intersections: ['Local Culture', 'Software', 'Community'],
    description: 'A digital commerce platform exploring how regional technology infrastructure can empower small business owners and traditional cultural producers in historic Harar, Ethiopia to catalog and sell distinctive heritage goods.',
    problem: 'Local artisans and unique cultural businesses in historic Harar have limited access to modern digital storefronts and structured e-commerce channels.',
    solution: 'Architected a digital marketplace tailored for local merchants, featuring simple product cataloging, localized storytelling, and streamlined ordering.',
    techStack: ['Web Architecture', 'UI/UX Design', 'Commerce Engine', 'Responsive Design'],
    keyFeatures: [
      'Artisan and merchant storytelling profiles',
      'Culturally significant product curation categories',
      'Lightweight, low-bandwidth mobile browsing optimization',
      'Community-first merchant onboarding workflow'
    ],
    impactOrStatus: 'Live digital platform connecting Harari culture and commerce.',
    link: 'https://hararmagala.com'
  },
  {
    id: 'polymath-tracker',
    title: 'Personal Polymath Tracking Application',
    tagline: 'A tailored personal OS for multi-disciplinary learning, creative projects, and cross-field experimentation.',
    category: 'productivity',
    intersections: ['Productivity', 'Software', 'AI'],
    description: 'A custom software environment built to support polymathic learning without the rigidity of generic productivity apps. Tracks activities, guitar pieces learned, ideas generated, code repositories started, and cross-domain project milestones.',
    problem: 'Standard productivity apps force users into narrow single-metric silos (e.g., only coding or only work tasks), neglecting holistic, cross-disciplinary creative development.',
    solution: 'Built a customized dashboard reflecting multi-domain progress across medicine, software engineering, music (guitar), creative writing/poetry, and AI experiments.',
    techStack: ['React', 'TypeScript', 'Data Visualization', 'Workflow Engine'],
    keyFeatures: [
      'Cross-domain activity streams (Medicine, Tech, Music, Writing)',
      'Guitar piece repertoire log with practice cadence tracking',
      'Idea incubation pipeline connecting insights across fields',
      'Project milestone velocity and prototype experimentation logs'
    ],
    impactOrStatus: 'Active daily driver orchestrating cross-disciplinary research and personal builds.'
  }
];

export const EDUCATIONAL_GUIDES: EducationalGuide[] = [
  {
    id: 'surgery-guide',
    title: 'Surgery Attachment Survival Guide',
    subtitle: 'A structured clinical field manual for medical students entering surgical rotations.',
    category: 'surgery',
    targetAudience: 'Medical students, clinical interns, and surgical rotators',
    description: 'Created to bridge the massive gap between theoretical textbook surgery and high-pressure operating rooms and surgical wards. Covers everything from logbook strategy to chief-complaint clinical reasoning and AI-assisted surgical study workflows.',
    topicsCovered: [
      'Clinical mindset and ward preparation before Day 1',
      'Logbook strategy, procedure documentation & teacher expectations',
      'Examination preparation: OSCE, Long Case, Short Case mastery',
      'Chief-complaint clinical reasoning (Acute Abdomen, Trauma, Hernias, Bowel Obstruction)',
      'Bedside physical examination protocols in surgical emergencies',
      'AI-assisted study workflows: Turning operative notes into retention flashcards'
    ],
    sampleChapters: [
      {
        title: 'Chapter 1: The Surgical Ward Operating Mindset',
        summary: 'How to prepare mentally for surgical rounds, understand senior surgeon expectations, and read patient charts effectively before morning handover.',
        keyTakeaway: 'In surgery, anticipation is half the battle. Know your patient’s vital trends, drain outputs, and latest labs before the consultant steps into the ward.',
        clinicalPearl: 'Never report a patient as "stable" without checking urine output, abdominal tenderness, and wound dressings in person.'
      },
      {
        title: 'Chapter 2: Chief-Complaint Reasoning — Acute Abdomen',
        summary: 'Deconstructing abdominal pain: anatomical localization, visceral vs. parietal pain, peritoneal signs, and high-yield differentials.',
        keyTakeaway: 'Shift from naming rare syndromes to answering the primary surgical question: "Does this patient require urgent surgical exploration or conservative management?"',
        clinicalPearl: 'Rebound tenderness and guarding indicate peritoneal inflammation; serial exams by the same examiner are more valuable than single ultrasound snapshots.'
      },
      {
        title: 'Chapter 3: AI-Assisted Surgical Study Protocols',
        summary: 'Using structured prompts to transform surgical case notes into differential tables, mechanism breakdowns, and active recall drills.',
        keyTakeaway: 'Do not use AI to do the thinking for you; use AI to interrogate your clinical reasoning: "What high-yield complications did I fail to consider in this post-op patient?"',
        clinicalPearl: 'Turn every rare case encountered on rounds into a 3-question active recall card within 24 hours of the patient encounter.'
      }
    ],
    aiWorkflowTip: 'Use AI to generate "Consultant Pimping Questions" — feed the patient presentation to an LLM and prompt: "Act as a tough surgical examiner; test my anatomical and management knowledge on this specific case."'
  },
  {
    id: 'im-guide',
    title: 'Internal Medicine Attachment Survival Guide',
    subtitle: 'A comprehensive framework for ward rounds, bedside reasoning, seminars, and clinical exams.',
    category: 'internal-medicine',
    targetAudience: 'Clinical year medical students & junior rotators',
    description: 'Developed in collaboration with clinical colleagues to synthesize complex multi-system pathology into a coherent clinical framework. Focuses on transforming overwhelming reference texts into clean, reusable knowledge systems that outlive exams.',
    topicsCovered: [
      'Navigating multi-disciplinary ward rounds with confidence',
      'Bedside clinical learning: elicit subtle signs (murmurs, chest signs, neurological deficits)',
      'Seminar preparation & high-yield slide presentations that impress professors',
      'System-by-system clinical reasoning: Cardiology, Pulmonology, Nephrology, Endocrine',
      'Turning scattered case encounters into permanent active recall knowledge bases'
    ],
    sampleChapters: [
      {
        title: 'Chapter 1: Mastering the Morning Ward Round',
        summary: 'The art of structured SOAP presentation: Subjective history, Objective vitals & physical findings, Assessment, and prioritized Management Plan.',
        keyTakeaway: 'A concise, organized 90-second patient presentation communicates clinical competence better than a 10-minute unfocused rambling.',
        clinicalPearl: 'Always review fluid balance, glycemic charts, and medication reconciliation daily before presenting to the attending.'
      },
      {
        title: 'Chapter 2: Multi-System Diagnostic Frameworks',
        summary: 'Connecting seemingly disparate symptoms across nephrology, rheumatology, and cardiovascular systems into unified physiological explanations.',
        keyTakeaway: 'When symptoms span multiple organ systems, think vasculitis, connective tissue disease, amyloidosis, or chronic occult infections.',
        clinicalPearl: 'The bedside physical examination remains the most cost-effective diagnostic test in resource-conscious clinical settings.'
      }
    ],
    aiWorkflowTip: 'Input your raw patient history and prompt AI: "Generate 5 plausible differentials with evidence for and against each, ranked by urgency and probability."'
  }
];

export const COMMUNITY_ROLES: CommunityRole[] = [
  {
    id: 'wezena',
    role: 'Founder & Lead Educator',
    organization: 'Wezena Academy',
    location: 'Harar, Ethiopia',
    description: 'Founded an educational initiative dedicated to academic performance, cognitive study methods, English communication, and technology-assisted learning.',
    achievements: [
      'Grew the academy from ~10 students in a rented room to nearly 100 students (60+ in a single summer intensive)',
      'Expanded into structured online learning cohorts with a multidisciplinary team of 4 teachers',
      'Designed evidence-based study systems, active recall workflows, and a gamified 3,000-word vocabulary platform',
      'Blended traditional pedagogical warmth with cutting-edge software and AI-assisted revision'
    ],
    badge: 'Education & Leadership',
    link: 'https://wezena.hararmagala.com',
    links: [
      { label: 'Academy Portal (wezena.hararmagala.com)', url: 'https://wezena.hararmagala.com' },
      { label: 'TikTok (@wezena1)', url: 'https://www.tiktok.com/@wezena1' },
      { label: 'Wezena Mentor AI', url: 'https://wezena-mentor.ai.studio/' },
      { label: 'Wezena Talks Hub', url: 'https://wezena-talks.ai.studio' }
    ]
  },
  {
    id: 'harardev',
    role: 'Co-Founder',
    organization: 'HararDev Center',
    location: 'Harar, Ethiopia',
    description: 'Helped establish a technology-focused learning environment and community coding hub in Harar to train youth in modern software skills.',
    achievements: [
      'Taught foundational and applied Python, HTML5, CSS3, JavaScript, and Linux terminal basics',
      'Introduced learners to modern AI-assisted development workflows and prompt engineering',
      'Fostered a collaborative builder culture encouraging students to create tools for their local community'
    ],
    badge: 'Tech Community'
  },
  {
    id: 'hma',
    role: 'Founder',
    organization: 'Harari Medical Association',
    location: 'Harar, Ethiopia',
    description: 'Founded a student-oriented medical community focused on peer collaboration, bedside knowledge sharing, clinical skill workshops, and mutual support during demanding medical training.',
    achievements: [
      'Created structured peer-to-peer case discussion forums and clinical exam prep groups',
      'Facilitated clinical attachment survival knowledge transfer between senior and junior rotators'
    ],
    badge: 'Healthcare & Medicine'
  },
  {
    id: 'ngo',
    role: 'Co-Creator',
    organization: 'Student Education NGO',
    location: 'Harar, Ethiopia (High School)',
    description: 'During high school, helped co-create an NGO supporting students facing financial distress to keep them in school and pay for essential educational materials.',
    achievements: [
      'Raised funds and gathered community resources to sponsor student educational costs',
      'Demonstrated an early commitment to grassroots educational access and equity'
    ],
    badge: 'Early Impact'
  }
];

export const TEACHING_AUDIENCES: TeachingAudience[] = [
  {
    group: 'Medical Students',
    icon: 'Stethoscope',
    description: 'Helped students organize difficult pathology and clinical signs, develop sustainable active recall systems, and use AI to turn massive textbook chapters into focused learning cards.',
    impact: 'Elevated rotation confidence, improved exam retention, and reduced cognitive overwhelm during clinical postings.'
  },
  {
    group: 'Healthcare Professionals',
    icon: 'Activity',
    description: 'Taught practicing healthcare workers how digital tools, structured databases, and AI can streamline clinical research workflows and medical documentation.',
    impact: 'Accelerated literature reviews and enhanced medical information handling efficiency.'
  },
  {
    group: 'Accountants & Analysts',
    icon: 'BarChart3',
    description: 'Taught accountants how to transform dry tabular data into intuitive visual dashboards, dynamic presentations, and automated calculation models.',
    impact: 'Empowered financial professionals to communicate complex numeric insights clearly to executive teams.'
  },
  {
    group: 'Developers & Learners',
    icon: 'Code2',
    description: 'Taught programming fundamentals from scratch (Python, Web, Linux) and introduced modern AI-assisted development workflows to aspiring developers.',
    impact: 'Demystified coding, enabling students to build functional web applications within weeks.'
  }
];

export const ESSAYS_DATA: Essay[] = [
  {
    id: 'polymath-ai',
    title: 'The Polymath in the Age of AI: Why Disciplines Are Artificial Borders',
    subtitle: 'How artificial intelligence lowers the barrier to cross-disciplinary building and why specialization alone is insufficient.',
    readTime: '4 min read',
    date: 'Field Note',
    category: 'Philosophy & AI',
    excerpt: 'I used to think I needed to choose one path: either medicine OR software engineering OR teaching. Now I know that the most valuable discoveries live exclusively in the intersections.',
    content: [
      'For decades, traditional education has forced individuals into hyper-specialized silos. Medical students are told to stick to anatomy; software engineers are told to stick to code; educators are told to stick to pedagogy.',
      'Yet the real world does not present problems categorized neatly by university departments. A patient in a rural clinic suffers not just from a physiological illness, but from information asymmetry, educational gaps, and logistical friction.',
      'AI is fundamentally changing this dynamic. It acts as an intellectual cognitive bridge: allowing a medical student to write robust software without a four-year computer science degree, or a teacher to build automated learning platforms tailored to a single student cohort.',
      'Instead of asking "Which pre-existing commercial app should I adopt?", the question becomes: "What would the ideal solution for this specific human problem look like, and can I build it today?"'
    ],
    keyQuote: 'The most interesting problems sit between disciplines. AI makes it possible for curious generalists to build with the precision of specialists.'
  },
  {
    id: 'communicating-problems',
    title: 'The Most Crucial Skill in the AI Era: Problem Articulation',
    subtitle: 'Why prompt engineering is really the art of rigorous clinical reasoning applied to language models.',
    readTime: '3 min read',
    date: 'Field Note',
    category: 'AI & Learning',
    excerpt: 'In medicine, a physician cannot treat an illness they cannot accurately define. In AI, a builder cannot generate a solution to a problem they cannot clearly articulate.',
    content: [
      'Through teaching medical students, healthcare staff, accountants, and junior programmers, one consistent truth has emerged: people do not struggle with AI because the technology is flawed. They struggle because they have not clarified what problem they are actually trying to solve.',
      'If you ask an LLM "How do I study surgery?", you receive a generic, useless list of five bullet points. But if you articulate: "I have a 3-week clinical rotation on pediatric surgery; formulate a daily case-preparation protocol focusing on congenital diaphragmatic hernia and acute appendicitis differentials", the output is transformative.',
      'Prompting is not a secret syntax trick. It is the discipline of clear thinking, structured taxonomy, and precise requirement definition.'
    ],
    keyQuote: 'One of the most important skills in the AI era is not knowing how to use an AI tool, but knowing how to communicate a problem clearly enough for technology to help solve it.'
  },
  {
    id: 'rented-room-to-100',
    title: 'From a Rented Room to 100 Students: Pedagogical Systems That Scale',
    subtitle: 'What founding Wezena Academy taught me about motivation, evidence-based study methods, and custom tooling.',
    readTime: '4 min read',
    date: 'Field Note',
    category: 'Education & Community',
    excerpt: 'We started in a small rented room in Harar with 10 students. By the time we scaled to nearly 100, the lesson was clear: inspiration gets students started, but systems keep them learning.',
    content: [
      'When students struggle, traditional schooling often blames a lack of intelligence or discipline. In reality, most students simply have never been taught how human memory works.',
      'At Wezena, we eliminated passive re-reading and highlighting. We replaced them with active recall, the Feynman technique, spaced repetition intervals, and daily accountability tracking.',
      'When we built custom software—tracking study minutes and gamifying a 3,000-word English vocabulary database—student engagement skyrocketed. Learners who previously dreaded vocabulary were competing to unlock higher mastery tiers.',
      'Combining compassionate human mentorship with tailored digital infrastructure creates educational outcomes that neither could achieve alone.'
    ],
    keyQuote: 'Inspiration gets students started; custom systems, gamified feedback loops, and empathetic community keep them learning.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Artificial Intelligence & Workflows',
    icon: 'Sparkles',
    description: 'Leveraging modern AI as a cognitive collaborator, builder, and research accelerator.',
    items: [
      'Generative AI & LLM Systems',
      'AI-Assisted Software Development',
      'Prompt Engineering & Structured Workflows',
      'AI-Assisted Medical & Clinical Research',
      'AI-Assisted Educational Systems',
      'Content Generation & Knowledge Structuring',
      'AI-Powered Productivity Architecture'
    ]
  },
  {
    category: 'Software Engineering & Tech',
    icon: 'Code2',
    description: 'Building reliable, responsive, and tailored digital platforms.',
    items: [
      'Python',
      'JavaScript & TypeScript',
      'React & Modern Frontend',
      'HTML5 & Tailwind CSS',
      'Flutter & Mobile Concepts',
      'Linux Environments & Bash',
      'Git & GitHub Version Control',
      'Application Architecture & APIs'
    ]
  },
  {
    category: 'Medical & Clinical Knowledge',
    icon: 'Stethoscope',
    description: 'Clinical reasoning, bedside practice, and clinical attachment systems.',
    items: [
      'Clinical Reasoning & Differential Diagnosis',
      'Surgical Attachment Protocols & Operative Note Structuring',
      'Bedside Clinical Examination & Signs',
      'Medical Literature Analysis & Evidence Synthesis',
      'Clinical Education Workflow Design',
      'Patient Presentation & SOAP Structuring'
    ]
  },
  {
    category: 'Education & Pedagogy',
    icon: 'GraduationCap',
    description: 'Evidence-based learning techniques and curriculum engineering.',
    items: [
      'Active Recall & Spaced Repetition Systems',
      'Curriculum Design & Syllabus Structuring',
      'Educational Technology (EdTech) Development',
      'Student Mentorship & Academic Coaching',
      'Gamified Learning Systems',
      'Feynman Technique & Conceptual Translation'
    ]
  },
  {
    category: 'Leadership & Community',
    icon: 'Users',
    description: 'Founding grassroots organizations and coordinating multidisciplinary teams.',
    items: [
      'Grassroots Community Building',
      'Educational Entrepreneurship (Wezena Academy)',
      'Multidisciplinary Team Leadership',
      'Cross-Disciplinary Workshop Facilitation',
      'Student Organization & Non-Profit Leadership',
      'Strategic Problem Solving'
    ]
  }
];

export const CURRENT_EXPLORATIONS = [
  'AI-native software development paradigms and autonomous agent workflows',
  'AI for medical education and clinical reasoning simulations',
  'Personalized and adaptive learning systems for resource-constrained regions',
  'Human-Computer Interaction (HCI) designed around cognitive focus and zero-distraction',
  'Building high-leverage products rapidly with modern AI tooling',
  'Community-driven technology and regional cultural preservation',
  'The expanding frontier of digital healthcare and telemedicine in East Africa'
];

export const EARLY_ACHIEVEMENTS = [
  {
    title: 'Top Chess Competitor',
    description: 'One of the top chess players at school, cultivating early strategic depth, pattern recognition, spatial calculation, and disciplined decision making under time pressure.',
    icon: 'Trophy'
  },
  {
    title: '1st Place in Poetry (English & Arabic)',
    description: 'Competed across three divisions in regional poetry competitions, achieving 1st place in English and 1st place in Arabic, reflecting deep appreciation for language, rhythm, and clear expression.',
    icon: 'PenTool'
  },
  {
    title: 'High School Education NGO Co-Creator',
    description: 'Helped co-found a student NGO in high school that raised funds to sponsor disadvantaged classmates struggling to afford school fees and materials.',
    icon: 'HeartHandshake'
  }
];
