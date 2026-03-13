import type { MentalModel } from "../../types/models";

export const careerModels: MentalModel[] = [
  {
    id: "ikigai",
    categoryId: "career",
    title: "Ikigai",
    emoji: "\u{1F3AF}",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "There's a Japanese island where people live to 100, and they say the secret is having a reason to get out of bed.",
      analogy: "Imagine four circles in a Venn diagram: what you LOVE, what you're GOOD AT, what the world NEEDS, and what you can be PAID FOR. Most people live in just one or two circles -- they love their work but can't pay rent, or they get paid well but hate Mondays. Ikigai is the tiny sweet spot in the center where all four overlap. It's not a job. It's a REASON FOR BEING.",
      sections: [
        {
          title: "The Four Ingredients",
          content: "Passion (love + skill) without income is a starving artist. Profession (skill + pay) without love is a golden cage. Vocation (love + need) without skill is wishful thinking. Mission (need + pay) without passion is a paycheck. Ikigai says: don't settle for three out of four. Keep adjusting until you find the sweet spot where all four ingredients mix."
        },
        {
          title: "It's a Process, Not a Destination",
          content: "Nobody finds their ikigai by sitting in a room thinking about it. You find it by trying things, noticing what energizes you, seeing what the world responds to, and gradually steering toward the intersection. It evolves over time. Your ikigai at 25 might be different from your ikigai at 45. The point isn't to find it once -- it's to keep searching and refining."
        }
      ],
      ahaQuote: "The purpose of life is to find your purpose, and then give your whole heart to it.",
      realWorldExample: "A software engineer loves coding (passion), is great at it (skill), and gets paid well (pay). But she feels empty because her work doesn't serve a need she cares about. She transitions to building medical software for underserved clinics -- same skills, same pay, but now all four circles overlap. Monday mornings feel completely different."
    },
    exercises: [
      {
        type: "matching",
        id: "ikigai-ex-1",
        instruction: "Match each combination of ikigai elements with what it produces.",
        pairs: [
          { left: "Love + Good At (but no pay or need)", right: "Satisfying hobby, but not a career" },
          { left: "Good At + Paid For (but no love or need)", right: "Comfortable but unfulfilling profession" },
          { left: "Love + World Needs (but not good at or paid)", right: "Passion and purpose, but frustration and no income" },
          { left: "All four overlap", right: "Ikigai -- purpose, fulfillment, impact, and livelihood" }
        ],
        explanation: "Each partial combination creates something valuable but incomplete. True ikigai requires all four elements working together."
      },
      {
        type: "true-false",
        id: "ikigai-ex-2",
        statement: "Once you find your ikigai, it remains the same for the rest of your life.",
        correct: false,
        explanation: "Ikigai evolves as you grow. Your skills change, your passions shift, the world's needs evolve, and what pays changes. Ikigai is an ongoing calibration, not a one-time discovery."
      },
      {
        type: "scenario",
        id: "ikigai-ex-3",
        scenario: "David is an excellent accountant who earns well but dreads going to work. He's passionate about environmental conservation but has no skills or income in that area.",
        question: "How might David move toward his ikigai?",
        options: [
          "Quit accounting immediately and volunteer for environmental organizations",
          "Stay in accounting forever since it pays the bills",
          "Use his financial skills for environmental nonprofits, bridging what he's good at with what he loves",
          "Accept that ikigai is a myth and passion doesn't matter"
        ],
        correctIndex: 2,
        explanation: "David doesn't need to start from zero. His accounting skills ARE valuable to environmental organizations. By applying existing strengths to a cause he cares about, he bridges the gap between profession and passion."
      },
      {
        type: "real-world",
        id: "ikigai-ex-4",
        challenge: "Map out your own four ikigai circles right now.",
        prompts: [
          "What activities make you lose track of time? (What you love)",
          "What do people consistently ask for your help with? (What you're good at)",
          "What problems in the world make you angry or heartbroken? (What the world needs)",
          "Which of your skills have people paid you for (or would pay for)? (What you can be paid for)"
        ],
        exampleResponse: "I love teaching and explaining complex things simply. People ask me for help organizing and simplifying their projects. I'm frustrated by how inaccessible financial education is for young people. Companies pay me for presentations and training. My ikigai overlap: creating financial literacy content for young adults -- it uses my teaching and simplifying skills, addresses a real need, and can generate income through courses or consulting."
      }
    ],
    relatedModelIds: ["t-shaped-skills", "comparative-advantage", "career-capital"],
    tags: ["purpose", "fulfillment", "japanese-philosophy", "career-planning"]
  },
  {
    id: "t-shaped-skills",
    categoryId: "career",
    title: "T-Shaped Skills",
    emoji: "\u{1F1F9}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Be an expert at one thing and decent at everything else -- that's the career cheat code.",
      analogy: "Picture the letter T. The horizontal bar is your broad knowledge -- you know a little about marketing, design, finance, management, and communication. The vertical bar is your deep expertise -- you're REALLY good at one specific thing, like data analysis. People who are all horizontal bar (know a little about everything) are replaceable generalists. People who are all vertical bar (know one thing only) are rigid specialists. T-shaped people are the sweet spot: they go deep in one area but can collaborate across many.",
      sections: [
        {
          title: "Why T-Shaped People Get Hired",
          content: "A T-shaped designer can have meaningful conversations with engineers, understand business metrics, and write decent copy -- PLUS create stunning designs. They don't just hand off work; they bridge gaps between teams. Companies LOVE this because most problems sit at the intersection of disciplines. The person who can speak multiple professional languages while mastering one is worth more than two narrow specialists."
        },
        {
          title: "Building Your T",
          content: "Pick your vertical bar: the ONE skill you'll go world-class in. Then deliberately broaden your horizontal bar by working on cross-functional projects, reading outside your field, and volunteering for tasks outside your comfort zone. The vertical bar is your career anchor. The horizontal bar is your career amplifier."
        }
      ],
      ahaQuote: "Specialization gets you hired. Versatility gets you promoted.",
      realWorldExample: "Two candidates apply for a product manager role. Candidate A has deep product management experience but no understanding of engineering or design. Candidate B has deep product management experience AND enough coding knowledge to prototype ideas, enough design sense to give useful feedback, and enough marketing knowledge to position features. Candidate B gets the job every time."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "t-shaped-skills-ex-1",
        question: "What does the vertical bar of the T represent?",
        options: [
          "Basic knowledge of many fields",
          "Deep expertise in one specific area",
          "Management and leadership skills",
          "Academic qualifications and degrees"
        ],
        correctIndex: 1,
        explanation: "The vertical bar represents deep, specialized expertise in one area -- your primary skill that makes you an expert. This is the anchor of your professional identity."
      },
      {
        type: "true-false",
        id: "t-shaped-skills-ex-2",
        statement: "Having broad knowledge across many areas is more valuable than having deep expertise in one area.",
        correct: false,
        explanation: "Neither is sufficient alone. The T-shaped model argues you need BOTH: deep expertise in one area (the vertical bar) AND broad knowledge across many areas (the horizontal bar). Breadth without depth makes you a 'mile wide, inch deep' generalist."
      },
      {
        type: "fill-in-blank",
        id: "t-shaped-skills-ex-3",
        textBefore: "A T-shaped professional combines deep expertise in one area with",
        textAfter: "knowledge across multiple disciplines.",
        acceptedAnswers: ["broad", "wide", "general", "diverse", "cross-functional"],
        hint: "Think about the horizontal bar of the T",
        explanation: "The T-shape model combines depth (vertical bar) with breadth (horizontal bar). The broad knowledge enables collaboration, communication, and seeing connections between fields."
      },
      {
        type: "real-world",
        id: "t-shaped-skills-ex-4",
        challenge: "Map out your own T-shaped skill profile.",
        prompts: [
          "What is (or should be) your vertical bar -- your area of deep expertise?",
          "What other areas do you have broad knowledge in (your horizontal bar)?",
          "What ONE new broad skill would most amplify your deep expertise?"
        ],
        exampleResponse: "My vertical bar is frontend development (React, TypeScript, CSS). My horizontal bar includes basic design sense, understanding of backend APIs, project management, and user research. The one skill that would most amplify my expertise: learning more about data analytics, so I can build data-driven UIs and have smarter conversations with the data team."
      }
    ],
    relatedModelIds: ["ikigai", "career-capital", "comparative-advantage"],
    tags: ["skills", "career-development", "expertise", "versatility"]
  },
  {
    id: "parkinsons-law",
    categoryId: "career",
    title: "Parkinson's Law",
    emoji: "\u{23F0}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Give yourself a week to clean the house and it takes a week. Give yourself two hours and -- surprise -- it takes two hours.",
      analogy: "Imagine a goldfish. Put it in a small bowl and it stays small. Put it in a big pond and it grows much larger. Tasks are the same way: they expand to fill whatever container of time you put them in. A report that could take 3 hours somehow fills an entire week when you have a week. Not because the report needs a week, but because you'll overthink, procrastinate, over-edit, and stretch it to fit the deadline.",
      sections: [
        {
          title: "The Deadline Illusion",
          content: "Students know this instinctively: the paper due in 3 weeks doesn't get started until night 2 before the deadline. And somehow, a 'C' paper written in 3 weeks isn't much better than a 'B' paper written in 2 nights. Most of the 3 weeks was spent NOT writing -- worrying about writing, thinking about writing, planning to write. The actual work was the same. Parkinson's Law reveals that most of our 'work time' is actually time spent adjacent to work."
        },
        {
          title: "Artificial Urgency as a Superpower",
          content: "If work expands to fill time, the hack is obvious: shrink the time. Set deadlines that feel slightly uncomfortable. If you think a task needs a week, give yourself 3 days. You'll cut the fluff, skip the perfectionism, and focus on what actually matters. This isn't about rushing -- it's about eliminating the invisible bloat that Parkinson's Law smuggles into every task."
        }
      ],
      ahaQuote: "Work expands to fill the time available for its completion.",
      realWorldExample: "A team is given 6 months to redesign a website. For 4 months, they hold meetings about meetings, create elaborate plans, and debate fonts. In the last 2 months, they actually build the thing. If they'd been given 2 months from the start, they would have skipped the fluff and still delivered a great website."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "parkinsons-law-ex-1",
        question: "You have an assignment due in 2 weeks. According to Parkinson's Law, what will most likely happen?",
        options: [
          "You'll finish it in 3 days and spend 11 days polishing it",
          "You'll work on it steadily across all 14 days",
          "The work will expand to fill all 2 weeks, even if it could be done in 3 days",
          "You'll finish early and enjoy the extra time"
        ],
        correctIndex: 2,
        explanation: "Parkinson's Law predicts that the task will expand to fill the available time. You'll likely procrastinate, over-research, over-plan, and over-edit to fill the 2-week window, even though the core work could be done much faster."
      },
      {
        type: "true-false",
        id: "parkinsons-law-ex-2",
        statement: "Setting tighter deadlines always results in lower quality work.",
        correct: false,
        explanation: "Research shows that moderately tighter deadlines often produce EQUAL or better quality work because they force focus and eliminate time-wasting activities. The extra time in longer deadlines is often spent on anxiety and perfectionism, not meaningful improvement."
      },
      {
        type: "scenario",
        id: "parkinsons-law-ex-3",
        scenario: "A freelancer typically takes 5 days to complete a client project. She experiments with setting a personal deadline of 2 days for a similar project.",
        question: "Based on Parkinson's Law, what's the most likely outcome?",
        options: [
          "The quality will drop dramatically in 2 days",
          "She'll finish in 2 days at similar quality by eliminating non-essential work",
          "She can't possibly finish a 5-day project in 2 days",
          "She'll need to work 24-hour days to compensate"
        ],
        correctIndex: 1,
        explanation: "Parkinson's Law suggests much of the 5-day timeline was fluff: excessive research, perfectionism, and procrastination. With a tighter deadline, she'll focus on the essential work and likely produce similar quality."
      },
      {
        type: "fill-in-blank",
        id: "parkinsons-law-ex-4",
        textBefore: "Parkinson's Law states that work expands to fill the",
        textAfter: "available for its completion.",
        acceptedAnswers: ["time", "time available"],
        hint: "What does work expand to fill?",
        explanation: "Cyril Northcote Parkinson observed that bureaucratic work naturally expands to fill whatever time is allocated to it. The solution is to deliberately constrain time to force efficiency."
      }
    ],
    relatedModelIds: ["pareto-principle", "leverage-points", "diminishing-returns"],
    tags: ["productivity", "time-management", "efficiency", "deadlines"]
  },
  {
    id: "peter-principle",
    categoryId: "career",
    title: "Peter Principle",
    emoji: "\u{1F4C8}",
    difficulty: 2,
    estimatedMinutes: 4,
    eli5: {
      hook: "The best salesperson gets promoted to sales manager, where they're terrible at managing. Sound familiar?",
      analogy: "Imagine a brilliant fish that's the fastest swimmer in the ocean. As a reward, it gets promoted to... a tree climber. It was amazing at swimming, but climbing trees requires completely different skills. The Peter Principle says people get promoted based on how well they do their CURRENT job, not how well they'd do the NEXT job. So everyone rises until they reach a role they're bad at -- and there they stay, stuck and miserable.",
      sections: [
        {
          title: "The Promotion Trap",
          content: "A brilliant engineer writes incredible code. Promotion: team lead. An okay team lead shows some leadership. Promotion: engineering manager. A struggling manager... stays a struggling manager forever. Each promotion was a reward for the previous role, not preparation for the next one. The skills that made you great at level 4 are completely different from the skills needed at level 5."
        },
        {
          title: "How to Beat the Peter Principle",
          content: "First, recognize that a promotion isn't always a reward -- sometimes it's a trap. Being a senior engineer is not 'less than' being a manager. Second, before accepting a promotion, honestly assess: do you have the skills for the new role, or just the old one? Third, organizations should promote based on POTENTIAL for the next role, not performance in the current one."
        }
      ],
      ahaQuote: "In a hierarchy, every employee tends to rise to their level of incompetence.",
      realWorldExample: "Dr. Smith is a brilliant surgeon -- possibly the best in the hospital. She gets promoted to Chief of Surgery, which requires budgeting, politics, scheduling, and conflict resolution. She's miserable, the department suffers, and the hospital lost its best surgeon. Everyone would've been better off keeping her in the OR and hiring a professional administrator."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "peter-principle-ex-1",
        question: "According to the Peter Principle, what is the typical basis for promotions in organizations?",
        options: [
          "Ability to perform well in the new, higher-level role",
          "Performance in the current role, regardless of readiness for the next",
          "Seniority and years of experience only",
          "Random selection to ensure fairness"
        ],
        correctIndex: 1,
        explanation: "The Peter Principle observes that promotions are typically based on success in the current role, not aptitude for the next one. This creates a systemic pattern where people rise to positions they're not suited for."
      },
      {
        type: "true-false",
        id: "peter-principle-ex-2",
        statement: "The Peter Principle suggests that the best individual contributors should always be promoted to management.",
        correct: false,
        explanation: "The Peter Principle warns against exactly this. Great individual contributors don't automatically make great managers. The skills are different, and forcing everyone into management wastes talent and creates bad managers."
      },
      {
        type: "scenario",
        id: "peter-principle-ex-3",
        scenario: "A company's top software developer is offered a promotion to Engineering Manager. She loves coding and has no interest in meetings, budgets, or performance reviews -- but the promotion comes with a 30% raise.",
        question: "What would the Peter Principle predict if she accepts?",
        options: [
          "She'll quickly learn management skills because she's smart",
          "She'll eventually become a great manager because she understands the technical work",
          "She'll likely struggle in the new role, miss coding, and the team will lose its best developer",
          "The raise will motivate her to excel in the new role"
        ],
        correctIndex: 2,
        explanation: "Classic Peter Principle scenario. She's being promoted based on coding excellence (current role skills), not management aptitude (next role skills). The company loses a great developer and gains a struggling manager."
      },
      {
        type: "fill-in-blank",
        id: "peter-principle-ex-4",
        textBefore: "The Peter Principle states that people in a hierarchy tend to rise to their level of",
        textAfter: ".",
        acceptedAnswers: ["incompetence", "inability"],
        hint: "What do they eventually reach?",
        explanation: "Laurence J. Peter observed that people get promoted until they land in a role where they're no longer competent. There they remain, unable to earn further promotion but not demoted either."
      }
    ],
    relatedModelIds: ["dunning-kruger", "t-shaped-skills", "ikigai"],
    tags: ["management", "hierarchy", "promotion", "organizational-behavior"]
  },
  {
    id: "comparative-advantage",
    categoryId: "career",
    title: "Comparative Advantage",
    emoji: "\u{1F91D}",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "Even if you're better than everyone at everything, you should still let others do some of the work.",
      analogy: "Imagine a lawyer who's also the fastest typist in the office. She types 120 words per minute -- faster than her assistant. Should she type her own documents? NO! Because every hour she spends typing is an hour NOT spent lawyering, where she earns $500/hour. Even though she's BETTER at typing than her assistant, her time is worth more doing lawyer things. You should do what you're RELATIVELY best at, not absolutely best at.",
      sections: [
        {
          title: "It's About Relative Strength, Not Absolute",
          content: "LeBron James might be a better painter than most people -- he's athletic, coordinated, and creative. But should he paint instead of playing basketball? Obviously not. His comparative advantage in basketball is MASSIVE. Comparative advantage says: don't ask 'what am I good at?' Ask 'what am I MOST good at RELATIVE to my other options?' Then do that and trade for the rest."
        },
        {
          title: "Why This Changes Everything About Delegation",
          content: "Many entrepreneurs refuse to delegate because 'nobody does it as well as I do.' They might be right! But if they're spending 5 hours on bookkeeping they could hire out for $25/hour while their own time could generate $200/hour, they're losing $875 every week by being a control freak. Comparative advantage is the mathematical proof that delegation isn't laziness -- it's strategy."
        }
      ],
      ahaQuote: "Do what only you can do. Delegate the rest -- even if you'd do it better.",
      realWorldExample: "Japan and France both make cars and wine. Japan makes cars more efficiently. France makes wine more efficiently. Even if Japan could make wine almost as well as France, it makes sense for Japan to focus on cars and trade for French wine. Both countries end up with MORE cars AND wine than if each tried to make both. That's comparative advantage: specialization plus trade beats doing everything yourself."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "comparative-advantage-ex-1",
        question: "A CEO can code better than any developer on her team AND manage better than anyone. According to comparative advantage, what should she do?",
        options: [
          "Code and manage -- she's the best at both",
          "Focus on management and let developers code, since management is where her time creates the most value",
          "Code full-time since it's a harder skill to find",
          "Alternate between coding and managing equally"
        ],
        correctIndex: 1,
        explanation: "Even though she's the best coder, her comparative advantage is in management -- that's where her time creates the most value relative to what others could do. Good developers are easier to find than good CEOs."
      },
      {
        type: "true-false",
        id: "comparative-advantage-ex-2",
        statement: "Comparative advantage means you should only do things you're absolutely the best at.",
        correct: false,
        explanation: "Comparative advantage is about RELATIVE strength, not absolute. You should focus on what you're best at COMPARED TO your other options, even if someone else is absolutely better at it."
      },
      {
        type: "scenario",
        id: "comparative-advantage-ex-3",
        scenario: "A freelance graphic designer also does her own accounting. She earns $100/hour designing. She's decent at accounting but it takes her 5 hours/month. An accountant would charge $50/hour and finish in 2 hours ($100 total).",
        question: "What does comparative advantage suggest?",
        options: [
          "Keep doing her own accounting since she's decent at it",
          "Hire the accountant -- the 5 hours freed up could earn $500 in design work versus the $100 accountant cost",
          "Learn to be faster at accounting",
          "Only hire the accountant if their work is perfect"
        ],
        correctIndex: 1,
        explanation: "By hiring the accountant for $100, she frees up 5 hours that could earn $500 in design work. Net gain: $400. Her comparative advantage is in design, not accounting."
      },
      {
        type: "real-world",
        id: "comparative-advantage-ex-4",
        challenge: "Identify one task you currently do that you should delegate based on comparative advantage.",
        prompts: [
          "What tasks take your time but aren't your highest-value activity?",
          "Could someone else do this task adequately (even if not as well as you)?",
          "What would you do with the freed-up time that's worth MORE?"
        ],
        exampleResponse: "I spend 3 hours a week editing videos for my business. I'm good at it, but my time is worth $150/hour doing sales calls. A freelance editor charges $40/hour and takes 4 hours. Cost: $160. Value of my freed 3 hours doing sales: $450. Net gain: $290 per week by delegating something I'm good at but shouldn't be doing."
      }
    ],
    relatedModelIds: ["opportunity-cost", "pareto-principle", "leverage"],
    tags: ["economics", "delegation", "specialization", "trade"]
  },
  {
    id: "leverage-points",
    categoryId: "career",
    title: "Leverage Points",
    emoji: "\u{2699}\uFE0F",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "Pushing harder on the wrong thing gets you nowhere. Pushing gently on the right thing changes everything.",
      analogy: "Imagine a massive ship that needs to change direction. You could push against the hull with all your strength and barely make a difference. OR you could turn the tiny rudder -- a small surface that redirects the entire ocean force to steer the ship. Leverage points are the rudders of any system: small places where a gentle push produces massive change.",
      sections: [
        {
          title: "Not All Effort Is Created Equal",
          content: "In any system -- a company, a habit, a relationship, an economy -- there are high-leverage points and low-leverage points. Most people push on low-leverage points: working harder, doing more, adding features. Smart people find the high-leverage points: changing a process, shifting an incentive, removing a bottleneck. One hour of work on the right leverage point can outperform 100 hours on the wrong one."
        },
        {
          title: "Finding the Leverage Point",
          content: "Ask: 'Where does a small change create a big ripple?' In a struggling restaurant, it might not be better food (low leverage) but better location (high leverage). In a slow team, it might not be more people (low leverage) but removing bureaucratic approval processes (high leverage). The leverage point is often counter-intuitive -- which is why most people miss it."
        }
      ],
      ahaQuote: "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
      realWorldExample: "A software company is losing customers. The obvious move is to add more features (low leverage). But data shows 60% of churned users couldn't figure out the onboarding. Fixing the 5-minute onboarding flow (high leverage) would retain more customers than 6 months of new features. One small change, massive impact."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "leverage-points-ex-1",
        question: "A school has declining test scores. Which is the highest leverage intervention?",
        options: [
          "Adding 30 minutes to the school day for more instruction time",
          "Buying new textbooks for every student",
          "Training teachers in more effective teaching methods",
          "Adding more standardized tests to measure progress"
        ],
        correctIndex: 2,
        explanation: "Teacher effectiveness is the highest leverage point in education. Research consistently shows that teacher quality has the largest impact on student outcomes. Better teachers improve EVERY hour of instruction, while more time or better books have diminishing returns."
      },
      {
        type: "true-false",
        id: "leverage-points-ex-2",
        statement: "Leverage points are usually the most obvious places to intervene in a system.",
        correct: false,
        explanation: "Leverage points are often counter-intuitive and hidden. Most people push on obvious, low-leverage points (more hours, more resources) while missing the subtle high-leverage points (process changes, incentive shifts, bottleneck removal)."
      },
      {
        type: "scenario",
        id: "leverage-points-ex-3",
        scenario: "An e-commerce company wants to increase revenue. They're debating between: (A) spending $100K on advertising to drive more traffic, (B) spending $10K to improve the checkout page conversion rate from 2% to 4%.",
        question: "Which is the higher leverage investment?",
        options: [
          "Option A -- more traffic always means more revenue",
          "Option B -- doubling the conversion rate doubles revenue from ALL traffic, current and future",
          "Both are equally valuable",
          "Neither -- they should focus on adding more products instead"
        ],
        correctIndex: 1,
        explanation: "Improving conversion rate is a leverage point because it multiplies the value of ALL traffic -- current traffic, future traffic, and any future ad spend. It's a $10K investment that amplifies every other growth effort."
      },
      {
        type: "fill-in-blank",
        id: "leverage-points-ex-4",
        textBefore: "A leverage point is a place in a system where a small",
        textAfter: "can produce a large change in outcomes.",
        acceptedAnswers: ["change", "shift", "adjustment", "push", "intervention", "effort"],
        hint: "It doesn't take much force at the right point",
        explanation: "Leverage points are places where minimal input creates maximum output. Finding them requires understanding the system's structure, not just its symptoms."
      }
    ],
    relatedModelIds: ["pareto-principle", "parkinsons-law", "comparative-advantage"],
    tags: ["systems-thinking", "strategy", "efficiency", "impact"]
  },
  {
    id: "career-capital",
    categoryId: "career",
    title: "Career Capital",
    emoji: "\u{1F4BC}",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "Don't follow your passion. Build skills so rare and valuable that passion follows YOU.",
      analogy: "Think of your career like a video game. Career capital is your experience points (XP). When you're starting out, you have zero XP and can't unlock any cool quests. 'Follow your passion' is like trying to fight the final boss at level 1 -- you'll get destroyed. Instead, grind XP first: learn rare skills, solve hard problems, build a track record. Once you have enough career capital, you can 'buy' the career you want -- autonomy, purpose, meaningful work, flexibility.",
      sections: [
        {
          title: "Skills First, Dream Job Second",
          content: "Cal Newport's research found that people who love their work didn't start by finding their passion. They started by getting REALLY good at something valuable. Passion grew from mastery, not the other way around. The craftsman mindset ('What can I offer the world?') beats the passion mindset ('What can the world offer me?') because the world doesn't owe you anything until you bring something valuable to the table."
        },
        {
          title: "Investing Your Career Capital",
          content: "Once you accumulate career capital (rare skills + track record + connections), you can spend it on what matters to you: negotiating remote work, choosing meaningful projects, starting your own venture, or commanding higher pay. The people with the most career freedom are the ones who invested years building skills so valuable that employers compete for them instead of the other way around."
        }
      ],
      ahaQuote: "Passion is not found -- it's built, one valuable skill at a time.",
      realWorldExample: "A young developer takes a job at a less glamorous company that gives her exposure to distributed systems, machine learning, and team leadership. After 4 years, she has rare career capital: a combination of deep technical skills AND leadership experience. Now SHE gets to choose: Google, a startup, remote freelancing, or her own company. She earned options by investing in skills first."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "career-capital-ex-1",
        question: "According to the career capital theory, what's the best approach for someone early in their career?",
        options: [
          "Keep switching jobs until you find your true passion",
          "Take the highest-paying job regardless of learning opportunities",
          "Focus on building rare, valuable skills that give you leverage and options later",
          "Follow your passion immediately, even if you lack relevant skills"
        ],
        correctIndex: 2,
        explanation: "Career capital theory says to invest in building rare, valuable skills first. These skills become your currency for eventually getting the autonomy, purpose, and working conditions you want."
      },
      {
        type: "true-false",
        id: "career-capital-ex-2",
        statement: "'Follow your passion' is the best career advice for someone just starting out.",
        correct: false,
        explanation: "Research suggests that passion often develops FROM mastery, not before it. Starting with 'follow your passion' can lead to frustration when you lack the skills to succeed. Building career capital first creates a foundation for passion to grow."
      },
      {
        type: "scenario",
        id: "career-capital-ex-3",
        scenario: "Two graduates start their careers. Graduate A takes a 'passion' job at a small nonprofit for low pay with limited skill development. Graduate B takes a challenging corporate role with mentorship, diverse projects, and steep learning curves.",
        question: "After 5 years, who likely has more career OPTIONS?",
        options: [
          "Graduate A -- following passion leads to the best outcomes",
          "Graduate B -- they accumulated more career capital through challenging skill development",
          "Both have equal options since they worked the same number of years",
          "Neither -- career options depend only on luck and connections"
        ],
        correctIndex: 1,
        explanation: "Graduate B built more career capital: rare skills, proven track record, and professional network. These give them leverage to negotiate for meaningful work on their terms. Career capital = career freedom."
      },
      {
        type: "real-world",
        id: "career-capital-ex-4",
        challenge: "Audit your current career capital portfolio.",
        prompts: [
          "What rare or valuable skills do you currently have?",
          "What skills are you developing that will be valuable in 3-5 years?",
          "What career options does your current capital allow you to 'buy'?"
        ],
        exampleResponse: "My career capital: proficient in full-stack development, basic machine learning knowledge, 2 years managing a small team. Skills I'm building: system design and public speaking. Currently I can 'buy': a senior developer role at most companies. In 3 years, with system design + leadership capital, I could 'buy': a VP of Engineering role, founding a startup with technical credibility, or premium consulting rates."
      }
    ],
    relatedModelIds: ["ikigai", "t-shaped-skills", "compound-interest"],
    tags: ["skills", "career-planning", "mastery", "professional-growth"]
  }
];
