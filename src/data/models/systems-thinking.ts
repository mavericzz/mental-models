import type { MentalModel } from "../../types/models";

export const systemsThinkingModels: MentalModel[] = [
  {
    id: "second-order-effects",
    categoryId: "systems-thinking",
    title: "Second-Order Effects",
    emoji: "🎯",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "Every action has a reaction. But the reaction also has a reaction. That's where it gets interesting.",
      analogy:
        "You throw a rock into a pond. The first splash is obvious — that's the first-order effect. But then ripples spread outward, reaching the shore, bouncing back, disturbing a frog, who jumps and scares a bird. None of that was your intention when you threw the rock. Second-order effects are those ripples — the consequences of your consequences.",
      sections: [
        {
          title: "Why Smart People Make Dumb Decisions",
          content:
            "Most people only think one step ahead. 'If I cut prices, I'll get more customers.' That's first-order thinking. Second-order: competitors also cut prices, starting a price war that destroys everyone's margins. Third-order: with no margins, nobody can invest in quality, and the entire market races to the bottom. The initial decision seemed smart because it only considered the first ripple.",
        },
        {
          title: "The Cobra Effect",
          content:
            "British colonial India had too many cobras. The government offered a bounty for dead cobras. First-order: people killed cobras. Second-order: entrepreneurs started BREEDING cobras to collect bounties. Third-order: when the government ended the program, breeders released their now-worthless cobras, making the problem worse than before. Always ask: 'And then what?'",
        },
      ],
      ahaQuote:
        "First-order thinking asks 'What happens next?' Second-order thinking asks 'And then what happens after that?'",
      realWorldExample:
        "A city builds a wider highway to reduce traffic congestion. First-order: traffic flows better. Second-order: the easier commute encourages more people to drive instead of taking the train, and developers build suburbs along the highway. Third-order: within five years, the wider highway is just as congested as before — with even more cars. This is called 'induced demand,' and it's a classic second-order failure.",
    },
    exercises: [
      {
        type: "scenario",
        id: "second-order-effects-ex-1",
        scenario:
          "A company decides to implement strict monitoring software on all employee computers to improve productivity.",
        question:
          "What second-order effects might this decision produce?",
        options: [
          "Employees work harder and productivity increases permanently",
          "Trust erodes, top talent leaves for competitors with better cultures, and remaining employees find workarounds — ultimately decreasing productivity",
          "Employees appreciate the accountability and morale improves",
          "Nothing significant — monitoring is standard practice",
        ],
        correctIndex: 1,
        explanation:
          "The first-order effect (employees appear busier) masks destructive second-order effects. Surveillance signals distrust, which demotivates high performers who have options elsewhere. The company optimized for a first-order metric (screen time) while ignoring second-order consequences (talent loss, resentment, gaming the system).",
      },
      {
        type: "multiple-choice",
        id: "second-order-effects-ex-2",
        question:
          "What's the best single question to develop second-order thinking habits?",
        options: [
          "What's the worst that could happen?",
          "And then what?",
          "Who is responsible?",
          "How much will this cost?",
        ],
        correctIndex: 1,
        explanation:
          "'And then what?' is the engine of second-order thinking. After you identify the first consequence, ask it again. And again. Each answer reveals another layer of ripple effects that most people miss. It's simple, repeatable, and trains your brain to look beyond the obvious.",
      },
      {
        type: "true-false",
        id: "second-order-effects-ex-3",
        statement:
          "If a policy produces good first-order effects, it's a good policy.",
        correct: false,
        explanation:
          "Many terrible policies produce great first-order effects. Printing money creates short-term prosperity (first-order) but causes inflation (second-order). Rent control makes housing affordable immediately (first-order) but discourages new construction, ultimately worsening the housing shortage (second-order). Judgment requires looking at ALL orders of effects.",
      },
      {
        type: "real-world",
        id: "second-order-effects-ex-4",
        challenge:
          "Take a decision you're currently facing and trace the ripple effects to at least the third order.",
        prompts: [
          "What's the decision you're considering?",
          "What's the obvious, immediate effect? (first-order)",
          "What happens as a result of that effect? (second-order)",
          "What happens as a result of THAT? (third-order)",
          "Does looking at the full chain change your decision?",
        ],
        exampleResponse:
          "Decision: Take a higher-paying job with longer hours. First-order: More income, better lifestyle. Second-order: Less time with family, more stress, less exercise. Third-order: Health problems from stress and inactivity, strained relationships, potentially needing the extra money for medical bills and coping mechanisms. Conclusion: The higher salary might not actually increase net wellbeing once second and third-order effects are considered.",
      },
    ],
    relatedModelIds: [
      "feedback-loops",
      "chestertons-fence",
      "emergence",
      "goodharts-law",
    ],
    tags: [
      "consequences",
      "ripple effects",
      "unintended",
      "thinking ahead",
      "policy",
    ],
  },
  {
    id: "bottleneck-theory",
    categoryId: "systems-thinking",
    title: "Bottleneck Theory",
    emoji: "🍾",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "A chain is only as strong as its weakest link. A system is only as fast as its slowest part.",
      analogy:
        "Picture a highway that narrows from four lanes to one lane because of construction. It doesn't matter how wide and smooth the rest of the highway is — traffic backs up at that one narrow point. That's a bottleneck. The entire system's speed is determined not by the fast parts, but by the one slow part.",
      sections: [
        {
          title: "Finding the Real Constraint",
          content:
            "Most people try to optimize everything equally. But if your factory can produce 100 widgets per hour and your packaging team can only wrap 50, making the factory faster is a complete waste. The bottleneck IS the system's capacity. Every improvement that doesn't address the bottleneck is an improvement that doesn't matter.",
        },
        {
          title: "Bottlenecks Move",
          content:
            "Here's the twist: once you fix a bottleneck, a new one appears somewhere else. Speed up packaging to 100 per hour? Now shipping (at 80 per hour) is the bottleneck. This isn't failure — it's progress. The art is always finding and fixing the CURRENT bottleneck, not the old one.",
        },
      ],
      ahaQuote:
        "Stop trying to make the fast parts faster. Find the slow part and fix that.",
      realWorldExample:
        "A restaurant has amazing food and fast cooking, but only one server for 20 tables. Customers wait 15 minutes to order and 15 minutes to get their check. The kitchen isn't the problem. Hiring one more server would double the restaurant's effective capacity because the bottleneck is the single server, not the cooking speed.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "bottleneck-theory-ex-1",
        question:
          "Your sales team closes deals fast, but customer onboarding takes 3 weeks, causing frustration and cancellations. Where should you invest resources?",
        options: [
          "Train the sales team to close even faster",
          "Improve the onboarding process — it's the bottleneck",
          "Spend more on marketing to replace lost customers",
          "Offer discounts to retain frustrated customers",
        ],
        correctIndex: 1,
        explanation:
          "Onboarding is the bottleneck. Closing deals faster would actually WORSEN things by pushing more customers into the already overwhelmed onboarding pipeline. Fixing the bottleneck directly addresses the root cause of cancellations and improves the entire customer journey.",
      },
      {
        type: "fill-in-blank",
        id: "bottleneck-theory-ex-2",
        textBefore: "In any system, the overall throughput is determined by the",
        textAfter: "not by the fastest or most efficient component.",
        acceptedAnswers: [
          "bottleneck",
          "slowest part",
          "constraint",
          "weakest link",
          "slowest component",
        ],
        hint: "Think about traffic on a highway that narrows to one lane",
        explanation:
          "A system's output is limited by its tightest constraint. No matter how fast every other component operates, the overall throughput cannot exceed the capacity of the bottleneck. This is why identifying the constraint is the first and most important step in optimization.",
      },
      {
        type: "true-false",
        id: "bottleneck-theory-ex-3",
        statement:
          "Once you identify and fix a bottleneck, your system is fully optimized.",
        correct: false,
        explanation:
          "Fixing one bottleneck reveals the next one. In any complex system, there is always a constraint somewhere — the question is whether the new bottleneck is acceptable or also needs fixing. Optimization is an ongoing process of finding and addressing the current constraint.",
      },
      {
        type: "scenario",
        id: "bottleneck-theory-ex-4",
        scenario:
          "A software company has brilliant engineers who write code fast, thorough QA testers, and excellent customer support. However, the product manager takes 2 weeks to write requirements for each feature, while engineering could complete a feature in 3 days.",
        question: "Where should improvement efforts focus?",
        options: [
          "Give engineers more complex problems to match the 2-week cycle",
          "Hire more QA testers to ensure quality",
          "Address the requirements bottleneck — hire another PM or streamline the requirements process",
          "Improve customer support to handle complaints about slow releases",
        ],
        correctIndex: 2,
        explanation:
          "The product management requirements phase is the bottleneck. Engineers are idle waiting for specs, and the entire delivery pipeline is constrained to the PM's pace. Hiring faster engineers or more testers won't help because the system's throughput is capped by requirements generation.",
      },
    ],
    relatedModelIds: [
      "second-order-effects",
      "map-vs-territory",
      "leading-lagging-indicators",
    ],
    tags: [
      "constraints",
      "optimization",
      "throughput",
      "efficiency",
      "systems",
    ],
  },
  {
    id: "map-vs-territory",
    categoryId: "systems-thinking",
    title: "Map vs. Territory",
    emoji: "🗺️",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "The menu is not the meal. The map is not the place. And your mental model of reality is not reality.",
      analogy:
        "You're hiking with a map that shows a clear path through the woods. You follow it confidently until you reach a river that isn't on the map. The map was made 5 years ago, and the river changed course. Do you stand there insisting 'But my map says there's no river here!' or do you put the map away and deal with what's actually in front of you? The map was useful, but it was always a simplification of the real world — not the real world itself.",
      sections: [
        {
          title: "All Models Are Wrong, Some Are Useful",
          content:
            "Financial forecasts, personality tests, business plans, political polls — these are all maps. They simplify reality into something we can work with. The danger isn't using maps — we have to; reality is too complex to navigate without them. The danger is forgetting that every map leaves things out, gets things slightly wrong, and eventually goes out of date.",
        },
        {
          title: "When Maps Become Dangerous",
          content:
            "The 2008 financial crisis happened partly because banks trusted their risk models (maps) more than market reality (territory). The models said mortgage-backed securities were safe. The territory said otherwise. When people start believing the map IS the territory — when the spreadsheet becomes more real than the customer, when the resume becomes more real than the person — disasters follow.",
        },
      ],
      ahaQuote:
        "Whenever your model disagrees with reality, reality wins. Every single time.",
      realWorldExample:
        "Your GPS tells you to turn left onto a road that is clearly under construction and blocked. You can either follow the GPS (the map) into a dead end, or trust your eyes (the territory) and find an alternative route. People literally drive into lakes following GPS because they trust the map more than reality. Don't be that person — in driving or in decision-making.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "map-vs-territory-ex-1",
        question:
          "A CEO is presented with a beautiful financial model showing 30% growth next year. What's the map-vs-territory response?",
        options: [
          "Trust the model — spreadsheets don't lie",
          "Reject all models and go with gut feeling",
          "Use the model as a useful guide while recognizing its assumptions may not hold in the real world",
          "Build an even more detailed model to eliminate uncertainty",
        ],
        correctIndex: 2,
        explanation:
          "The model (map) is useful for planning, but it's based on assumptions about a future that hasn't happened yet (territory). The wise approach is to use it while stress-testing its assumptions: What if our biggest customer leaves? What if the market shrinks? What if costs rise? Use the map, but keep looking at the territory.",
      },
      {
        type: "true-false",
        id: "map-vs-territory-ex-2",
        statement:
          "If two maps of the same territory disagree, at least one of them must be wrong.",
        correct: false,
        explanation:
          "Two maps can show different aspects of the same territory and both be correct — just incomplete. A topographic map and a road map of the same area look totally different but neither is 'wrong.' Similarly, different mental models can offer valid but different views of the same situation. The territory is complex enough to support multiple accurate-but-partial maps.",
      },
      {
        type: "scenario",
        id: "map-vs-territory-ex-3",
        scenario:
          "A hiring manager is choosing between two candidates. Candidate A has a perfect resume (top school, prestigious companies, high GPA) but gave awkward, rehearsed answers in the interview. Candidate B has an unremarkable resume but demonstrated sharp thinking, genuine curiosity, and great communication during the interview.",
        question:
          "Using map-vs-territory thinking, which candidate should they prioritize and why?",
        options: [
          "Candidate A — the resume objectively proves more capability",
          "Candidate B — the interview (territory) reveals real-time abilities, while the resume (map) is a simplified, potentially misleading representation",
          "Neither — request more data before deciding",
          "Candidate A — prestigious credentials are a reliable signal",
        ],
        correctIndex: 1,
        explanation:
          "The resume is a map — a simplified representation that may not accurately reflect the territory (the actual person and their abilities). The interview provides a more direct observation of the territory. When the map and territory conflict, trust the territory. This doesn't mean resumes are useless, just that they're maps and should be treated as such.",
      },
      {
        type: "fill-in-blank",
        id: "map-vs-territory-ex-4",
        textBefore:
          "The key insight of map-vs-territory thinking is that all models are simplifications, and when a model conflicts with",
        textAfter: "you should always trust what's actually happening.",
        acceptedAnswers: ["reality", "the territory", "real world", "actual experience", "observation"],
        hint: "What's the 'territory' in this metaphor?",
        explanation:
          "Models, theories, plans, and predictions are all maps — useful simplifications of reality. But reality (the territory) is always the final authority. When your expectations don't match what you observe, update the map, not your perception of the territory.",
      },
    ],
    relatedModelIds: [
      "base-rate-neglect",
      "second-order-effects",
      "goodharts-law",
    ],
    tags: [
      "models",
      "reality",
      "simplification",
      "assumptions",
      "cognitive bias",
    ],
  },
  {
    id: "chestertons-fence",
    categoryId: "systems-thinking",
    title: "Chesterton's Fence",
    emoji: "🚧",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Before you tear down a fence, you'd better understand why someone built it in the first place.",
      analogy:
        "You're walking through a field and encounter a fence that seems to serve no purpose. Your first instinct might be to tear it down — it's in the way, it's ugly, it doesn't seem to DO anything. But Chesterton says: if you can't figure out why someone built this fence, you don't yet understand enough to know whether removing it is safe. Maybe it keeps the neighbor's bull out. Maybe it prevents erosion. Maybe it marks a property line that will cause a lawsuit if crossed.",
      sections: [
        {
          title: "Respect What You Don't Understand",
          content:
            "Every 'pointless' rule, tradition, or process was created by someone to solve a problem. The fact that you can't see the problem doesn't mean it doesn't exist — it might mean the rule is so effective that the problem it prevents has become invisible. When you've never experienced a flood, the dam looks like a waste of concrete.",
        },
        {
          title: "Reform, Don't Just Remove",
          content:
            "Chesterton's Fence doesn't mean 'never change anything.' It means 'understand before you change.' Once you understand WHY the fence exists, you can make a smart decision: maybe the bull moved away and the fence can go, or maybe the fence should be replaced by a better barrier. Knowledge comes first, action second.",
        },
      ],
      ahaQuote:
        "If you don't understand why something exists, you're not yet qualified to remove it.",
      realWorldExample:
        "A new manager arrives at a company and immediately eliminates the 'pointless' Friday afternoon team meetings that waste 30 minutes. Within a month, inter-team communication has broken down, duplicate work is everywhere, and two departments are in conflict. Those 'pointless' meetings were the only regular touchpoint between teams. The new manager tore down a fence without understanding what it was holding back.",
    },
    exercises: [
      {
        type: "scenario",
        id: "chestertons-fence-ex-1",
        scenario:
          "A new CTO at a software company notices that all code deployments require approval from two senior engineers. This slows things down significantly. She wants to remove the requirement immediately.",
        question:
          "What should she do before changing the policy?",
        options: [
          "Remove the requirement immediately — speed is essential in tech",
          "Understand why the two-approval policy was created — maybe there was a catastrophic deployment failure that led to it",
          "Compromise by requiring only one approval",
          "Replace it with automated testing (without investigating the original reason)",
        ],
        correctIndex: 1,
        explanation:
          "Chesterton's Fence tells us to understand before removing. The two-approval policy might exist because of a past disaster, regulatory requirements, or hard-won lessons about code quality. Understanding the reason lets her make an informed choice: maybe automated tests CAN replace it, or maybe there's a deeper issue that tests can't catch.",
      },
      {
        type: "multiple-choice",
        id: "chestertons-fence-ex-2",
        question:
          "What does Chesterton's Fence teach us about traditions we find 'outdated'?",
        options: [
          "All traditions should be preserved",
          "All traditions should be modernized",
          "Before discarding a tradition, understand what problem it originally solved — it might still be relevant",
          "Traditions are irrelevant in the modern world",
        ],
        correctIndex: 2,
        explanation:
          "Chesterton's Fence is about humility before action. Many traditions encode wisdom about problems we've never personally experienced. Understanding the original purpose lets us make informed decisions about which traditions to keep, modify, or discard.",
      },
      {
        type: "true-false",
        id: "chestertons-fence-ex-3",
        statement:
          "Chesterton's Fence means you should never remove old rules or processes.",
        correct: false,
        explanation:
          "Chesterton's Fence is NOT about preserving everything forever. It's about understanding before changing. Once you understand WHY a rule exists, you may very well decide it's outdated and should be removed. The principle just demands that you earn that understanding first.",
      },
      {
        type: "real-world",
        id: "chestertons-fence-ex-4",
        challenge:
          "Identify a rule, process, or tradition in your workplace or life that seems pointless. Then investigate why it was created before deciding whether to change it.",
        prompts: [
          "What's a rule or process that seems unnecessary or outdated?",
          "Who created it, and when?",
          "What problem was it designed to solve?",
          "Does that problem still exist, or has it been solved by other means?",
          "Now that you understand its purpose, should it be kept, modified, or removed?",
        ],
        exampleResponse:
          "Rule: Our team has a mandatory daily standup at 9am, which feels like a waste of time. Investigation: It was created when the team was fully remote during COVID and people were feeling isolated and out of sync. The problem (isolation) has been partially solved since we're back in the office 3 days a week. Decision: Keep the standup on the 2 remote days, skip it on in-office days when we naturally communicate. Modify, don't just remove.",
      },
    ],
    relatedModelIds: [
      "second-order-effects",
      "map-vs-territory",
      "equilibrium",
    ],
    tags: [
      "caution",
      "understanding",
      "tradition",
      "reform",
      "unintended consequences",
    ],
  },
  {
    id: "tragedy-of-commons",
    categoryId: "systems-thinking",
    title: "Tragedy of the Commons",
    emoji: "🐄",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "When everyone owns it, nobody takes care of it. That's why public restrooms are worse than your bathroom.",
      analogy:
        "Imagine a village with a shared pasture. Each farmer thinks, 'If I add one more cow, I get all the benefit of that extra cow but the damage to the pasture is spread across everyone.' So every farmer adds a cow. And another. And another. Each decision is individually rational — but collectively, the pasture gets destroyed and everyone loses everything. That's the tragedy: when something belongs to everyone, each person's best individual choice adds up to the worst collective outcome.",
      sections: [
        {
          title: "Why Individual Rationality Leads to Collective Ruin",
          content:
            "The tragedy isn't caused by greed or stupidity — it's caused by the structure of the situation. Each person captures 100% of the benefit from their action but bears only a tiny fraction of the cost. Littering? You save 10 seconds, and the mess is split across a million park visitors. Overfishing? You catch more fish today, and the population decline is everyone's problem. The math makes selfishness the 'rational' choice — which is exactly why the tragedy keeps happening.",
        },
        {
          title: "Solutions That Actually Work",
          content:
            "The tragedy of the commons is solved by either privatizing the resource (give everyone their own patch of pasture), regulating it (set limits on how many cows each farmer can graze), or building social norms and trust (the village agrees on rules and enforces them communally). Each approach aligns individual incentives with collective wellbeing.",
        },
      ],
      ahaQuote:
        "The problem isn't that people are selfish. It's that the system makes selfishness the logical choice.",
      realWorldExample:
        "In an open-plan office, the fridge is a commons. Everyone puts food in, nobody cleans it. Month-old leftovers pile up. Each person thinks, 'I'll clean mine up — cleaning the whole fridge isn't my job.' Solution: assign fridge-cleaning to a weekly rotation (regulation) or give everyone labeled shelf space (privatization). Without a system, the fridge becomes a biohazard.",
    },
    exercises: [
      {
        type: "matching",
        id: "tragedy-of-commons-ex-1",
        instruction:
          "Match each tragedy of the commons scenario with its most effective solution type.",
        pairs: [
          {
            left: "Overfishing in international waters",
            right: "Regulation (fishing quotas and enforcement)",
          },
          {
            left: "Messy shared kitchen in an apartment",
            right: "Social norms (roommate agreement with clear expectations)",
          },
          {
            left: "Overuse of a shared company printer",
            right: "Privatization (departmental print budgets)",
          },
          {
            left: "Air pollution from factories",
            right: "Regulation (emission caps or carbon taxes)",
          },
        ],
        explanation:
          "Different types of commons problems call for different solutions. Small groups can use social norms effectively. Large-scale problems typically need regulation. Some resources can be divided and privatized. The key is aligning individual incentives with collective welfare.",
      },
      {
        type: "multiple-choice",
        id: "tragedy-of-commons-ex-2",
        question:
          "Why do people often overuse shared resources even when they know it's harmful?",
        options: [
          "People are inherently selfish and don't care about others",
          "The individual benefit is captured entirely by the user, but the cost is spread across everyone — making overuse individually 'rational'",
          "People don't understand the consequences of their actions",
          "Shared resources are usually too abundant to be overused",
        ],
        correctIndex: 1,
        explanation:
          "The tragedy isn't about character — it's about incentive structure. When you receive 100% of the benefit but only 1/1000th of the cost, the rational calculation favors overuse. This is why structural solutions (regulation, privatization) work better than moral appeals.",
      },
      {
        type: "true-false",
        id: "tragedy-of-commons-ex-3",
        statement:
          "The tragedy of the commons can only be solved by government regulation.",
        correct: false,
        explanation:
          "Nobel laureate Elinor Ostrom demonstrated that communities can successfully manage common resources through self-governance, social norms, and mutual agreements — without government regulation or privatization. Small communities with strong social bonds and clear communication often manage commons effectively through trust and reputation.",
      },
      {
        type: "scenario",
        id: "tragedy-of-commons-ex-4",
        scenario:
          "A software development team has a shared codebase. Nobody refactors or writes documentation because 'that's not my module' and everyone is evaluated on feature output, not code quality.",
        question: "How is this a tragedy of the commons, and what's the fix?",
        options: [
          "It's not a tragedy of the commons — it's just poor management",
          "The codebase is a shared resource being degraded by individual incentives (ship features fast). Fix: change evaluation metrics to include code quality contributions",
          "Assign each developer their own separate codebase",
          "Hire a dedicated refactoring team",
        ],
        correctIndex: 1,
        explanation:
          "The shared codebase is a classic commons. Each developer benefits individually from shipping features fast (which earns recognition) while the cost of tech debt is spread across the whole team. Changing incentives to reward code quality contributions aligns individual behavior with collective wellbeing.",
      },
    ],
    relatedModelIds: [
      "second-order-effects",
      "goodharts-law",
      "equilibrium",
      "feedback-loops",
    ],
    tags: [
      "shared resources",
      "incentives",
      "collective action",
      "cooperation",
      "sustainability",
    ],
  },
  {
    id: "antifragility",
    categoryId: "systems-thinking",
    title: "Antifragility",
    emoji: "💪",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "Some things don't just survive chaos — they get STRONGER from it.",
      analogy:
        "Imagine three packages being shipped: one labeled FRAGILE (a glass vase), one labeled ROBUST (a steel ball), and one with no label because it's a package of seeds. The vase breaks when dropped — it's fragile. The steel ball survives — it's robust. But the seeds? When they fall into the dirt and get rained on and beaten by wind, they GROW. They don't just survive stress — they need it to thrive. That's antifragile: a thing that gets better from disorder, shocks, and stress.",
      sections: [
        {
          title: "Beyond Resilience",
          content:
            "We're taught to be resilient — to bounce back from setbacks. But antifragility is a level beyond that. Your muscles don't just survive the stress of exercise — they get stronger BECAUSE of it. Your immune system doesn't just fight off infections — it learns and becomes MORE capable afterward. Antifragile systems use stress as fuel for growth.",
        },
        {
          title: "How to Build Antifragile Systems",
          content:
            "The key is exposure to small, manageable stressors — not catastrophic ones. A vaccine works by giving you a tiny dose of the disease. Startups that face early customer complaints and adapt become stronger than those that launch to silence. Regular small failures build stronger systems than perpetual comfort followed by one massive failure.",
        },
      ],
      ahaQuote:
        "Wind extinguishes a candle but fuels a wildfire. Build yourself into the wildfire.",
      realWorldExample:
        "A restaurant gets a brutal but fair 2-star review. Instead of ignoring it, the owner takes the feedback seriously, fixes the problems, and responds publicly. The next reviews are 5 stars. Competitors who've never been criticized don't know their weaknesses and get blindsided later. The stressed restaurant became stronger than the comfortable one.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "antifragility-ex-1",
        question:
          "Which of the following is an example of antifragility (not just resilience)?",
        options: [
          "A bridge that withstands earthquakes without damage",
          "A company that survives a recession without layoffs",
          "An athlete whose muscles grow stronger after intense training stress",
          "A phone case that protects a phone from drops",
        ],
        correctIndex: 2,
        explanation:
          "The bridge and phone case are robust (they resist damage), the company is resilient (it survives), but the athlete's muscles are antifragile — they actually get STRONGER because of the stress. The key distinction: does it merely survive stress, or does it improve from it?",
      },
      {
        type: "true-false",
        id: "antifragility-ex-2",
        statement:
          "To become antifragile, you should expose yourself to the maximum amount of stress possible.",
        correct: false,
        explanation:
          "Antifragility requires the RIGHT dose of stress — enough to stimulate growth, not so much it causes destruction. Lifting weights builds muscle; dropping a car on yourself breaks bones. The key is frequent small stressors with adequate recovery time, not overwhelming catastrophic stress.",
      },
      {
        type: "fill-in-blank",
        id: "antifragility-ex-3",
        textBefore:
          "Fragile things break under stress. Robust things survive stress. Antifragile things get",
        textAfter: "from stress.",
        acceptedAnswers: [
          "stronger",
          "better",
          "improved",
          "stronger and better",
        ],
        hint: "Think about how muscles respond to exercise",
        explanation:
          "The three-part spectrum is the core of antifragility: fragile (harmed by disorder), robust (unchanged by disorder), antifragile (improved by disorder). Most interesting systems in nature — immune systems, ecosystems, economies — have antifragile properties.",
      },
      {
        type: "scenario",
        id: "antifragility-ex-4",
        scenario:
          "Two teams are developing software products. Team A avoids all risk, never releases beta versions, and waits until the product is 'perfect.' Team B releases early and often, gets harsh user feedback, and iterates rapidly based on real-world use.",
        question: "Which team is building an antifragile product?",
        options: [
          "Team A — by avoiding mistakes, they ensure higher quality",
          "Team B — by exposing the product to real-world stress early, each piece of feedback makes it stronger",
          "Neither — software can't be antifragile",
          "Team A — they're being more careful and methodical",
        ],
        correctIndex: 1,
        explanation:
          "Team B's approach is antifragile: each piece of negative feedback is a stressor that makes the product stronger. When Team A finally releases, they'll face all those stressors at once — potentially catastrophic. Team B has been inoculated by frequent small stresses. This is the core philosophy behind agile development and lean startup methodology.",
      },
    ],
    relatedModelIds: [
      "feedback-loops",
      "entropy",
      "emergence",
      "activation-energy",
    ],
    tags: [
      "resilience",
      "stress",
      "growth",
      "adaptation",
      "Nassim Taleb",
      "optionality",
    ],
  },
  {
    id: "goodharts-law",
    categoryId: "systems-thinking",
    title: "Goodhart's Law",
    emoji: "📊",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "When you make a number the goal, people will hit the number by ruining everything else.",
      analogy:
        "Imagine a school that's judged by test scores. At first, test scores are a decent MEASURE of education quality. But once test scores become the GOAL, everything changes. Teachers stop teaching interesting topics and start drilling test answers. Students memorize instead of understanding. The scores go up, but actual learning goes down. The metric was useful as a thermometer — but as soon as you optimized for it, it stopped measuring what you cared about.",
      sections: [
        {
          title: "The Measure Becomes the Target",
          content:
            "Goodhart's Law states: 'When a measure becomes a target, it ceases to be a good measure.' The moment you tie rewards or punishment to a number, people find ways to game that number while ignoring the underlying thing it was supposed to represent. This isn't dishonesty — it's human nature responding rationally to incentives.",
        },
        {
          title: "How to Measure Without Corrupting",
          content:
            "Use multiple metrics that are hard to game simultaneously. Track leading AND lagging indicators. Keep some metrics private. Regularly rotate what you measure. And most importantly, use metrics as diagnostics (like a doctor uses blood tests) rather than targets (like a student gaming a GPA). The best organizations measure to understand, not to control.",
        },
      ],
      ahaQuote:
        "Tell me how you'll measure me, and I'll tell you how I'll game it.",
      realWorldExample:
        "A call center measures customer service quality by 'average call duration' — shorter is supposedly better. Representatives start hanging up on customers with complicated problems to keep their averages low. Customer satisfaction plummets, but the dashboard shows 'improved efficiency.' The metric destroyed the thing it was supposed to measure.",
    },
    exercises: [
      {
        type: "scenario",
        id: "goodharts-law-ex-1",
        scenario:
          "A hospital starts ranking surgeons by patient mortality rates to improve care quality. After a year, mortality rates drop significantly.",
        question:
          "Why might this improvement be misleading, according to Goodhart's Law?",
        options: [
          "The data is probably just random noise",
          "Surgeons may be refusing high-risk patients to protect their numbers, leaving the sickest patients without surgical options",
          "Mortality rates are a bad metric for any purpose",
          "The improvement is genuine and there are no downsides",
        ],
        correctIndex: 1,
        explanation:
          "This is Goodhart's Law in action. Once surgeons were judged by mortality rates, the rational move was to avoid risky cases. The metric improved, but the underlying goal (best patient care) was undermined. The sickest patients — who most needed skilled surgeons — were the ones turned away.",
      },
      {
        type: "multiple-choice",
        id: "goodharts-law-ex-2",
        question:
          "What's the best way to avoid Goodhart's Law when setting team goals?",
        options: [
          "Set one clear metric and focus the entire team on it",
          "Don't measure anything — metrics always corrupt",
          "Use multiple complementary metrics, keep some as diagnostics rather than targets, and watch for gaming behaviors",
          "Change metrics randomly so people can't game them",
        ],
        correctIndex: 2,
        explanation:
          "The antidote to Goodhart's Law is using multiple metrics that are hard to game simultaneously, keeping some metrics as private diagnostics, and actively monitoring for gaming behavior. A single metric is always gameable; balanced scorecards are much harder to corrupt.",
      },
      {
        type: "true-false",
        id: "goodharts-law-ex-3",
        statement:
          "Goodhart's Law means we shouldn't use metrics or KPIs at all.",
        correct: false,
        explanation:
          "Goodhart's Law doesn't reject measurement — it warns against turning measures into targets. Metrics are incredibly valuable as diagnostic tools. The problem emerges only when a measure becomes the primary goal, incentivizing people to optimize the number rather than the underlying reality.",
      },
      {
        type: "matching",
        id: "goodharts-law-ex-4",
        instruction:
          "Match each metric-turned-target with its likely Goodhart's Law gaming behavior.",
        pairs: [
          {
            left: "Police departments measured on arrest numbers",
            right: "Officers arrest people for trivial offenses to inflate numbers",
          },
          {
            left: "Developers measured on lines of code written",
            right: "Developers write verbose, unnecessarily complex code",
          },
          {
            left: "Teachers measured on student test scores",
            right: "Teachers teach to the test instead of fostering real understanding",
          },
          {
            left: "Sales team measured on number of calls made",
            right: "Salespeople make brief, low-quality calls instead of meaningful conversations",
          },
        ],
        explanation:
          "In each case, the metric was probably a reasonable proxy for quality — until it became the target. People optimize for what's measured, and once the measure IS the goal, they optimize the measure at the expense of the underlying objective.",
      },
    ],
    relatedModelIds: [
      "map-vs-territory",
      "second-order-effects",
      "tragedy-of-commons",
      "leading-lagging-indicators",
    ],
    tags: [
      "metrics",
      "incentives",
      "gaming",
      "measurement",
      "unintended consequences",
    ],
  },
];
