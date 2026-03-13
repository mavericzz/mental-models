import type { MentalModel } from "../../types/models";

export const communicationModels: MentalModel[] = [
  {
    id: "pyramid-principle",
    categoryId: "communication",
    title: "Pyramid Principle",
    emoji: "🔺",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Start with the answer. Then explain how you got there. Not the other way around.",
      analogy: "The Pyramid Principle is like watching a movie trailer before the movie. The trailer gives you the conclusion ('This is an epic adventure story') and then shows you the supporting scenes. Imagine if movies started with 90 minutes of context before you even knew the genre — you'd walk out. Yet that's how most people write emails and give presentations: background, context, methodology, caveats, and FINALLY the point. Flip it.",
      sections: [
        {
          title: "Lead With the So-What",
          content: "Barbara Minto developed the Pyramid Principle at McKinsey. The rule: start with your main conclusion or recommendation. Then group your supporting arguments into 2-4 clusters. Each cluster is supported by data or examples. The audience gets the answer immediately and can choose how deep to go. Executives especially love this because they can stop reading after one sentence and still know what you're recommending."
        },
        {
          title: "Top-Down vs. Bottom-Up",
          content: "Most people think bottom-up: they gather facts, build arguments, and arrive at a conclusion last. That's how you THINK through a problem. But it's the worst way to COMMUNICATE the answer. Switch to top-down for communication: state the conclusion, then reveal the supporting logic. Your audience doesn't need to relive your entire thought journey — they need the destination first."
        }
      ],
      ahaQuote: "Nobody wants to watch you think. They want to hear what you concluded — then decide if your reasoning holds up.",
      realWorldExample: "Bad email: 'Hi, I've been analyzing the Q3 data, and there are several trends worth noting. First, customer acquisition costs rose 12%. Additionally, churn increased in the enterprise segment. The marketing team also reported...' (3 paragraphs later) '...so I recommend we pause the ad spend.' Good email: 'Recommendation: Pause ad spend immediately. Here's why: (1) acquisition costs up 12%, (2) enterprise churn rising, (3) current campaigns underperforming by 40%.'"
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "pyramid-principle-ex-1",
        question: "According to the Pyramid Principle, how should you structure a business email?",
        options: [
          "Background context, then analysis, then recommendation",
          "Recommendation first, then supporting arguments grouped logically",
          "Start with a question to engage the reader",
          "Present all data and let the reader draw their own conclusion"
        ],
        correctIndex: 1,
        explanation: "The Pyramid Principle puts the conclusion or recommendation first, followed by supporting arguments in logical groups. This respects the reader's time and ensures the main point is never missed."
      },
      {
        type: "true-false",
        id: "pyramid-principle-ex-2",
        statement: "You should think through problems bottom-up but communicate them top-down.",
        correct: true,
        explanation: "Bottom-up analysis (gathering data, forming arguments, reaching conclusions) is how you solve problems. But top-down communication (conclusion first, then support) is how you share solutions effectively."
      },
      {
        type: "scenario",
        id: "pyramid-principle-ex-3",
        scenario: "You need to present a new pricing strategy to your CEO. You have 5 minutes. You've done weeks of analysis involving competitor research, customer surveys, margin calculations, and market trends.",
        question: "How should you structure your 5-minute presentation?",
        options: [
          "Walk through your research process chronologically — show your work",
          "Start with 'We should raise prices 15%,' then show 3 key supporting points",
          "Present all the data and let the CEO decide the right strategy",
          "Start with the competitor analysis since that's the most interesting part"
        ],
        correctIndex: 1,
        explanation: "In 5 minutes, lead with the recommendation ('Raise prices 15%') and then present 2-3 key supporting arguments. The CEO can ask for deeper detail if needed. Your weeks of analysis live in the appendix, not the presentation."
      },
      {
        type: "real-world",
        id: "pyramid-principle-ex-4",
        challenge: "Take the last email or message you sent at work and rewrite it using the Pyramid Principle: conclusion first, then 2-3 supporting points.",
        prompts: [
          "What was the original message about?",
          "What is the key conclusion or action item?",
          "Rewrite it: conclusion first, then 2-3 supporting points."
        ],
        exampleResponse: "Original: 'I looked at the vendor proposals and compared pricing, features, and contract terms. Vendor A offers the most features but is expensive. Vendor B is cheapest but lacks reporting. Vendor C is mid-range with good support...' Rewritten: 'I recommend Vendor C. Three reasons: (1) Best balance of features and price — 30% cheaper than A with 90% of the capabilities, (2) Strongest customer support, (3) Flexible 1-year contract versus A and B's 3-year lock-in.'"
      }
    ],
    relatedModelIds: ["bluf", "narrative-arc", "curse-of-knowledge"],
    tags: ["communication", "writing", "business", "presentations"]
  },
  {
    id: "steel-manning",
    categoryId: "communication",
    title: "Steel-Manning",
    emoji: "🛡️",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Want to win an argument? Start by making the OTHER side's case better than they can.",
      analogy: "Steel-manning is the opposite of straw-manning. A straw man is when you twist someone's argument into a weak version so it's easy to knock down. A steel man is when you take their argument and make it STRONGER — the best possible version of what they're saying — and THEN try to respond. If you can beat the strongest version of their argument, you've actually won. If you can only beat a weak caricature, you've proved nothing.",
      sections: [
        {
          title: "Why Argue Against Strength?",
          content: "Three reasons: (1) Intellectual honesty — you should want to find the truth, not just 'win.' (2) Persuasion — when people feel genuinely understood, they become dramatically more open to your perspective. (3) Self-improvement — engaging with the best opposing arguments forces you to sharpen your own thinking. If your position can't survive contact with the strongest counterargument, maybe your position needs updating."
        },
        {
          title: "How to Steel-Man",
          content: "Before countering someone's view, ask yourself: 'What is the most generous, strongest version of what they're saying?' Rephrase their argument back to them in a way that makes them say 'Yes, exactly! That's even better than how I put it.' Only THEN present your counterargument. This transforms combative debates into collaborative truth-seeking."
        }
      ],
      ahaQuote: "If you can't state your opponent's position in a way they'd endorse, you don't understand it well enough to disagree.",
      realWorldExample: "Your coworker suggests the team should work from the office full-time. Instead of straw-manning ('You just want to control people'), steel-man it: 'You're saying that in-person collaboration creates spontaneous problem-solving, stronger team bonds, and faster decision-making — and that these benefits outweigh the flexibility of remote work. Is that right?' Now you can have a real conversation."
    },
    exercises: [
      {
        type: "scenario",
        id: "steel-manning-ex-1",
        scenario: "A colleague argues that the company should stop using open-source software and build everything in-house. Most of the team disagrees. You want to steel-man their position before responding.",
        question: "Which response best steel-mans their argument?",
        options: [
          "'You just don't understand how open source works.'",
          "'So you think we should waste money reinventing the wheel?'",
          "'You're concerned that depending on external maintainers creates risk — if a critical library is abandoned or introduces breaking changes, we have no control and our product suffers. Building in-house gives us full ownership of our stack.'",
          "'You probably had a bad experience with an open-source bug once.'"
        ],
        correctIndex: 2,
        explanation: "Option C presents the strongest, most charitable version of the argument — identifying the legitimate concern (dependency risk and control) rather than attacking the person or caricaturing their position."
      },
      {
        type: "true-false",
        id: "steel-manning-ex-2",
        statement: "Steel-manning means you have to agree with the other person's position.",
        correct: false,
        explanation: "Steel-manning means understanding and articulating the best version of their argument — NOT agreeing with it. You can fully steel-man a position and then present a strong counter-argument. It's about intellectual honesty, not agreement."
      },
      {
        type: "multiple-choice",
        id: "steel-manning-ex-3",
        question: "What's the difference between straw-manning and steel-manning?",
        options: [
          "Straw-manning is for written arguments; steel-manning is for spoken debates",
          "Straw-manning weakens the opponent's argument to make it easy to attack; steel-manning strengthens it to engage honestly",
          "Straw-manning is less effective; steel-manning guarantees you win",
          "They're the same technique applied at different times in a debate"
        ],
        correctIndex: 1,
        explanation: "Straw-manning distorts an argument into a weaker version to easily knock down. Steel-manning strengthens it to its best form before engaging. Steel-manning leads to better conversations and more honest conclusions."
      },
      {
        type: "fill-in-blank",
        id: "steel-manning-ex-4",
        textBefore: "Steel-manning is the opposite of",
        textAfter: ", where you distort someone's argument into a weaker version to easily defeat it.",
        acceptedAnswers: ["straw-manning", "strawmanning", "straw manning", "a straw man"],
        hint: "Think of a scarecrow...",
        explanation: "Straw-manning creates a weak caricature of someone's argument. Steel-manning does the opposite — building the strongest possible version of their argument before responding to it."
      }
    ],
    relatedModelIds: ["active-listening", "nonviolent-communication", "pyramid-principle"],
    tags: ["communication", "critical-thinking", "debate", "empathy"]
  },
  {
    id: "active-listening",
    categoryId: "communication",
    title: "Active Listening",
    emoji: "👂",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "Most people don't listen to understand — they listen to wait for their turn to talk.",
      analogy: "Active listening is like being a detective at a conversation crime scene. A bad detective arrives with a theory and only looks for evidence that fits. A good detective observes everything: the words, the tone, the body language, what's NOT being said, and the emotions behind it all. Active listening means investigating what someone really means, not just hearing the surface-level words.",
      sections: [
        {
          title: "The Three Levels",
          content: "Level 1: Hearing words (basic, often while thinking about your reply). Level 2: Understanding meaning (you get the content but might miss the emotion). Level 3: Empathic listening (you hear words, meaning, emotion, AND what's left unsaid). Most people operate at Level 1. Getting to Level 3 requires silencing your internal monologue and becoming genuinely curious about the other person's experience."
        },
        {
          title: "The Toolkit",
          content: "Reflect back what you heard: 'So what you're saying is...' Ask clarifying questions: 'Can you tell me more about that?' Validate emotions: 'That sounds really frustrating.' Resist the urge to fix, advise, or relate ('That reminds me of when I...'). And the hardest one: embrace silence. When someone pauses, don't jump in. Give them space to think and go deeper. The best stuff often comes after the pause."
        }
      ],
      ahaQuote: "The most powerful thing you can say in a conversation is nothing — just a curious silence that invites them to go deeper.",
      realWorldExample: "Your friend says 'Work has been fine.' A passive listener says 'Cool' and moves on. An active listener notices the flat tone and says 'You said fine, but it doesn't sound fine. What's going on?' Three minutes later, your friend is telling you about a real problem they've been afraid to share with anyone."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "active-listening-ex-1",
        question: "Someone tells you about a problem at work. Which response demonstrates active listening?",
        options: [
          "'Here's what you should do...' (offering immediate advice)",
          "'That happened to me too! Let me tell you about it...' (relating your experience)",
          "'It sounds like you're feeling overwhelmed by the workload. What part is most stressful?' (reflecting and asking)",
          "'Don't worry about it, things will work out.' (reassuring)"
        ],
        correctIndex: 2,
        explanation: "Active listening reflects back what you've heard (validating their experience) and asks open-ended questions to go deeper. Advising, relating, and reassuring all shift focus away from the speaker."
      },
      {
        type: "true-false",
        id: "active-listening-ex-2",
        statement: "Active listening means staying completely silent while the other person talks.",
        correct: false,
        explanation: "Active listening involves strategic engagement: reflecting back, asking clarifying questions, and validating emotions. Pure silence can make someone feel unheard. The key is that your contributions serve to deepen THEIR expression, not to shift focus to you."
      },
      {
        type: "scenario",
        id: "active-listening-ex-3",
        scenario: "During a team meeting, a junior colleague hesitantly says: 'I guess the project timeline is probably fine... I just thought maybe we should consider... never mind, it's probably nothing.'",
        question: "What active listening response would help most?",
        options: [
          "'Great, let's move on then.' — they said it's nothing",
          "'If you have a concern, just say it clearly.' — encourage directness",
          "'It sounds like something about the timeline is worrying you. We'd like to hear your thought — what were you going to say?'",
          "'Don't be shy! Speak up!' — boost their confidence"
        ],
        correctIndex: 2,
        explanation: "The junior colleague self-censored, likely due to feeling unsafe or unsure. Reflecting what you noticed ('something about the timeline is worrying you') and explicitly inviting them to continue creates the safety needed for them to share."
      },
      {
        type: "matching",
        id: "active-listening-ex-4",
        instruction: "Match each listening technique with its purpose.",
        pairs: [
          { left: "Reflecting ('So you're saying...')", right: "Shows you understood and gives them a chance to correct misunderstandings" },
          { left: "Clarifying ('Can you tell me more?')", right: "Invites deeper exploration of a topic" },
          { left: "Validating ('That sounds frustrating')", right: "Acknowledges their emotional experience" },
          { left: "Comfortable silence", right: "Gives space for deeper thoughts to emerge" }
        ],
        explanation: "Each technique serves the same goal: keeping the focus on the speaker and helping them explore their own thoughts and feelings more deeply."
      }
    ],
    relatedModelIds: ["mirroring", "labeling", "nonviolent-communication"],
    tags: ["communication", "empathy", "relationships", "leadership"]
  },
  {
    id: "curse-of-knowledge",
    categoryId: "communication",
    title: "Curse of Knowledge",
    emoji: "🎓",
    difficulty: 2,
    estimatedMinutes: 6,
    eli5: {
      hook: "Once you know something, it becomes almost impossible to remember what it's like to NOT know it.",
      analogy: "The Curse of Knowledge is like being fluent in a language and trying to understand why beginners struggle. 'Just conjugate the verb!' you think, forgetting the years of struggle it took YOU to learn. It's like knowing the twist ending of a movie — you literally cannot watch it the same way again. Your knowledge has cursed you: it erased your memory of ignorance.",
      sections: [
        {
          title: "Why Experts Are Often Terrible Teachers",
          content: "A doctor who's seen 10,000 X-rays forgets that a normal person can't tell a bone from a shadow. A programmer who writes code all day forgets that 'just install the dependencies' is gibberish to a beginner. The curse makes experts skip steps, use jargon unconsciously, and misjudge what's 'obvious.' They're not being arrogant — they genuinely can't remember what it was like to not know."
        },
        {
          title: "Breaking the Curse",
          content: "Test your explanations on actual beginners and watch their faces. Use analogies that connect to universal experiences. Ask 'What's confusing?' and listen without defensiveness. Remember: every single expert was once a confused beginner. The best communicators fight the curse actively by constantly checking whether their audience is actually following along."
        }
      ],
      ahaQuote: "The biggest communication failure is assuming the other person knows what you know.",
      realWorldExample: "A startup founder pitches to investors: 'Our B2B SaaS platform leverages AI-driven NLP to optimize CRM workflows through API-first microservice architecture.' The investors nod politely and invest in someone else. The problem wasn't the product — it was the curse. 'We help sales teams write better emails, automatically' would have been clearer."
    },
    exercises: [
      {
        type: "scenario",
        id: "curse-of-knowledge-ex-1",
        scenario: "A senior engineer writes documentation for a new internal tool. They write: 'Clone the repo, run npm install, configure the .env file with your API keys, then execute the build script.' A new team member follows the instructions and gets stuck immediately.",
        question: "What happened?",
        options: [
          "The new team member isn't smart enough for the role",
          "The senior engineer assumed knowledge (Git, npm, .env files) that the new person doesn't have",
          "Documentation can never replace hands-on training",
          "The new team member should have Googled the unfamiliar terms"
        ],
        correctIndex: 1,
        explanation: "The senior engineer fell victim to the Curse of Knowledge — they assumed concepts like 'clone the repo' and '.env files' were obvious, but these are only obvious to someone who already knows them."
      },
      {
        type: "true-false",
        id: "curse-of-knowledge-ex-2",
        statement: "The Curse of Knowledge means that smart people deliberately use complex language to seem superior.",
        correct: false,
        explanation: "The Curse of Knowledge isn't about arrogance — it's a genuine cognitive limitation. Experts literally cannot remember what it felt like to not know something, so they unconsciously skip steps and use jargon without realizing it."
      },
      {
        type: "multiple-choice",
        id: "curse-of-knowledge-ex-3",
        question: "What's the most effective way to check if you're falling victim to the Curse of Knowledge?",
        options: [
          "Re-read your own writing multiple times",
          "Ask another expert to review your explanation",
          "Test your explanation on someone who is genuinely unfamiliar with the topic",
          "Add a glossary of technical terms at the end"
        ],
        correctIndex: 2,
        explanation: "Another expert shares your curse and will miss the same gaps. Only a genuine beginner can reveal where your explanation fails. Their confusion points directly to your blind spots."
      },
      {
        type: "fill-in-blank",
        id: "curse-of-knowledge-ex-4",
        textBefore: "The Curse of Knowledge makes it hard to",
        textAfter: "what it was like before you understood a concept, causing you to skip steps and use jargon when explaining to beginners.",
        acceptedAnswers: ["remember", "recall", "imagine"],
        hint: "You can't go back to a state of not knowing...",
        explanation: "Once knowledge is acquired, the brain literally reorganizes — making it nearly impossible to remember or simulate the state of not knowing. This is why testing explanations on actual beginners is essential."
      }
    ],
    relatedModelIds: ["feynman-technique", "pyramid-principle", "bluf"],
    tags: ["communication", "teaching", "cognitive-bias", "empathy"]
  },
  {
    id: "narrative-arc",
    categoryId: "communication",
    title: "Narrative Arc",
    emoji: "📖",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Humans don't remember facts. They remember stories. And every great story follows the same ancient shape.",
      analogy: "The narrative arc is like a rollercoaster. You slowly climb up (setup and rising tension), you hit the top (the climax — the turning point), and then you race down to the resolution. A flat rollercoaster is boring. A rollercoaster that's ALL peaks is exhausting. The arc gives the ride structure, pacing, and emotional satisfaction. Every movie, novel, and great presentation follows this shape.",
      sections: [
        {
          title: "The Five-Part Structure",
          content: "Every compelling story has: (1) Setup — introduce the character and their world. (2) Rising action — introduce a problem or challenge that creates tension. (3) Climax — the moment of highest tension where something must change. (4) Falling action — the consequences of the climax unfold. (5) Resolution — the new normal, with the lesson learned. This applies to Netflix shows AND your quarterly business presentation."
        },
        {
          title: "Why Stories Beat Data",
          content: "Neuroscience shows that stories activate more brain areas than facts alone. When you hear 'Revenue increased 23%,' your language center processes it. When you hear 'We were three days from running out of money when Sarah found the client that saved the company,' your emotional centers, visual cortex, and memory systems all fire up. Stories create empathy, suspense, and memory. Data alone does not."
        }
      ],
      ahaQuote: "Data tells people what happened. Stories make them care about what happened.",
      realWorldExample: "Two people present the same project results. Presenter A: 'We reduced customer complaints by 45% through process improvement.' Presenter B: 'Three months ago, our support team was drowning. Maria, our best agent, was ready to quit. We redesigned the entire process, and last week Maria told me she actually enjoys coming to work again. Oh, and complaints dropped 45%.' Which one does the audience remember a month later?"
    },
    exercises: [
      {
        type: "matching",
        id: "narrative-arc-ex-1",
        instruction: "Put the narrative arc stages in correct order by matching each stage to its position.",
        pairs: [
          { left: "1st", right: "Setup — introduce the world and characters" },
          { left: "2nd", right: "Rising action — tension builds as challenges emerge" },
          { left: "3rd", right: "Climax — the turning point of highest tension" },
          { left: "4th", right: "Resolution — the new normal and lesson learned" }
        ],
        explanation: "The narrative arc follows a natural emotional shape: calm beginning, rising tension, peak moment, then resolution. This structure creates engagement and makes information memorable."
      },
      {
        type: "scenario",
        id: "narrative-arc-ex-2",
        scenario: "You need to present your team's quarterly results, which include overcoming a major setback to achieve strong results. You want to make the presentation engaging and memorable.",
        question: "What narrative arc approach would work best?",
        options: [
          "Start with the final numbers — people just want results",
          "Start with the setback (tension), show how the team responded (rising action), reveal the turning point (climax), then share the results (resolution)",
          "List each week's progress chronologically",
          "Focus only on the positive results and skip the setback"
        ],
        correctIndex: 1,
        explanation: "Starting with the setback creates tension that hooks the audience. The team's response builds rising action. The turning point is the climax. And the strong results provide a satisfying resolution. This structure makes the results feel earned and memorable."
      },
      {
        type: "true-false",
        id: "narrative-arc-ex-3",
        statement: "Narrative arc is only useful for fiction writers and filmmakers, not for business communication.",
        correct: false,
        explanation: "Narrative arc is equally powerful in business presentations, sales pitches, case studies, and leadership communication. Any time you want people to remember and care about information, structure it as a story."
      },
      {
        type: "multiple-choice",
        id: "narrative-arc-ex-4",
        question: "Why do stories activate more brain regions than pure data?",
        options: [
          "Stories are always more accurate than data",
          "Stories engage emotional, visual, and sensory brain areas, creating richer memory encoding",
          "The brain can't process numerical data effectively",
          "Stories take longer to tell, giving the brain more time to process"
        ],
        correctIndex: 1,
        explanation: "Stories trigger neural coupling — the listener's brain mirrors the storyteller's patterns across emotional, visual, and motor regions. This multi-region activation creates deeper engagement and stronger memory formation."
      }
    ],
    relatedModelIds: ["pyramid-principle", "bluf", "curse-of-knowledge"],
    tags: ["communication", "storytelling", "presentations", "persuasion"]
  },
  {
    id: "bluf",
    categoryId: "communication",
    title: "BLUF (Bottom Line Up Front)",
    emoji: "📌",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "Military commanders don't have time for your backstory. Give them the answer first. Then explain.",
      analogy: "BLUF is like a newspaper headline. Nobody reads an article that starts with 'On a sunny Tuesday morning in September, reporter Jane Smith was drinking coffee when she received a phone call...' Headlines say 'MAYOR RESIGNS OVER SCANDAL' and THEN give you the details. Your emails, messages, and reports should work the same way. The most important information comes first. Always.",
      sections: [
        {
          title: "Born in the Military, Needed Everywhere",
          content: "The U.S. military developed BLUF because in combat, communication must be fast and unambiguous. A field report doesn't start with methodology — it starts with 'Enemy forces are advancing from the north. Reinforcements needed.' In business, the stakes are lower but the principle is identical: respect people's time by putting the answer, recommendation, or request in the first sentence."
        },
        {
          title: "The BLUF Formula",
          content: "Sentence 1: The bottom line (what you need, what you recommend, what happened). Sentence 2-3: The key supporting facts. Everything else: background context for those who want it. This structure works for emails, Slack messages, reports, and even verbal updates. The person can stop reading after sentence 1 and still know what matters."
        }
      ],
      ahaQuote: "If the reader only reads your first sentence, they should still know the most important thing.",
      realWorldExample: "Before BLUF: 'Hi team, I wanted to follow up on our discussion from last week about the vendor situation. After reviewing the proposals and considering our budget constraints and timeline requirements, along with feedback from the operations team...' (4 paragraphs later) '...we should go with Vendor B.' After BLUF: 'Recommendation: Go with Vendor B. It's 20% cheaper than A and delivers 2 weeks faster. Details below.'"
    },
    exercises: [
      {
        type: "scenario",
        id: "bluf-ex-1",
        scenario: "Your manager is in back-to-back meetings all day and asks for a quick update on the project. You have good news: the project is ahead of schedule.",
        question: "Which update follows the BLUF principle?",
        options: [
          "'So the team met yesterday and we reviewed the timeline. Everyone's been putting in extra hours, and the design team finished early. The dev team also found a way to reuse existing code...'",
          "'Project is 5 days ahead of schedule. Key reasons: design finished early, dev team reused existing code. No blockers.'",
          "'I'd like to schedule a 30-minute meeting to walk you through the project status in detail.'",
          "'Great news! Let me start by summarizing what happened last sprint...'"
        ],
        correctIndex: 1,
        explanation: "BLUF puts the bottom line first ('5 days ahead of schedule'), then key supporting facts, then stops. A busy manager can read this in 10 seconds and know everything they need."
      },
      {
        type: "true-false",
        id: "bluf-ex-2",
        statement: "BLUF means your messages should be rude and abrupt with no context or explanation.",
        correct: false,
        explanation: "BLUF isn't about being curt — it's about structure. You still provide context and detail, but AFTER the main point. The reader chooses how deep to go. Being clear and direct is respectful, not rude."
      },
      {
        type: "multiple-choice",
        id: "bluf-ex-3",
        question: "What does BLUF stand for?",
        options: [
          "Best Laid Under Framework",
          "Bottom Line Up Front",
          "Brief Logical Update Format",
          "Business Logic Under Focus"
        ],
        correctIndex: 1,
        explanation: "BLUF stands for Bottom Line Up Front — a military communication principle that puts the most critical information in the first sentence of any communication."
      },
      {
        type: "real-world",
        id: "bluf-ex-4",
        challenge: "Find your most recent work email longer than 3 sentences. Rewrite the first sentence so it contains the bottom line. Then restructure the rest as supporting detail.",
        prompts: [
          "What was the email about?",
          "What is the actual bottom line (the thing the reader most needs to know)?",
          "Rewrite the email with the bottom line as the first sentence."
        ],
        exampleResponse: "Original first sentence: 'Hi Sarah, I wanted to loop back on the conversation we had about the Q2 marketing budget and share some thoughts after looking at the numbers.' BLUF rewrite: 'Sarah — we should increase the Q2 marketing budget by $15K based on the ROI data from Q1. Here is the supporting analysis: (1) Every $1 spent on paid search returned $4.20 in Q1. (2) We have untapped audience segments showing high intent. (3) Competitors are pulling back spend, creating cheaper ad inventory.'"
      }
    ],
    relatedModelIds: ["pyramid-principle", "curse-of-knowledge", "narrative-arc"],
    tags: ["communication", "writing", "military", "efficiency"]
  },
  {
    id: "nonviolent-communication",
    categoryId: "communication",
    title: "Nonviolent Communication (NVC)",
    emoji: "🕊️",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "Most arguments aren't about what people think they're about. They're about unmet needs hiding behind angry words.",
      analogy: "Nonviolent Communication is like being a translator between two people who speak different emotional languages. When someone says 'You NEVER listen to me!' they're not making a factual claim about listening frequency. They're really saying 'I need to feel heard and valued, and right now I don't.' NVC helps you hear the need behind the noise, and express your own needs without triggering defensiveness.",
      sections: [
        {
          title: "The Four Steps",
          content: "Marshall Rosenberg's NVC framework has four components: (1) Observation — state what happened factually, without judgment. 'You left dishes in the sink' not 'You're so lazy.' (2) Feeling — name your emotion. 'I feel frustrated' not 'You make me angry' (nobody makes you feel anything). (3) Need — identify the underlying need. 'I need shared responsibility for housework.' (4) Request — make a specific, doable request. 'Would you be willing to wash dishes after dinner on weekdays?'"
        },
        {
          title: "The Difference Between Feelings and Judgments",
          content: "Here's where most people trip up. 'I feel disrespected' is not a feeling — it's a judgment about the other person's behavior. 'I feel hurt' IS a feeling. 'I feel like you don't care' is a judgment disguised as a feeling. 'I feel lonely' is genuine. The distinction matters because judgments trigger defensiveness while genuine feelings trigger empathy. If you start with 'I feel that you...' you're about to make a judgment."
        }
      ],
      ahaQuote: "Behind every criticism is an unmet need. Learn to hear the need, and the criticism loses its sting.",
      realWorldExample: "Without NVC: 'You always interrupt me in meetings. It's rude and unprofessional.' (Triggers defensiveness.) With NVC: 'In today's meeting, I was cut off three times while presenting (observation). I felt frustrated and unseen (feeling) because I need to contribute my ideas fully (need). Could we agree that presenters finish their points before discussion starts? (request)'"
    },
    exercises: [
      {
        type: "scenario",
        id: "nonviolent-communication-ex-1",
        scenario: "Your roommate plays loud music late at night. You're exhausted and have an early meeting tomorrow.",
        question: "Which response follows the NVC framework?",
        options: [
          "'Turn that off! You're so inconsiderate!'",
          "'When music plays after 11 PM (observation), I feel anxious and tired (feeling) because I need sleep before my early meetings (need). Could we agree on a quiet time after 11? (request)'",
          "'I feel like you don't care about my sleep at all.'",
          "'Whatever, I'll just wear earplugs.' (passive aggression)"
        ],
        correctIndex: 1,
        explanation: "Option B follows all four NVC steps: factual observation, genuine feeling, underlying need, and a specific request. It addresses the issue without attacking the person."
      },
      {
        type: "true-false",
        id: "nonviolent-communication-ex-2",
        statement: "'I feel disrespected' is a genuine feeling in the NVC framework.",
        correct: false,
        explanation: "'Disrespected' is a judgment about the other person's behavior, not a feeling. Genuine feelings include hurt, sad, frustrated, anxious, lonely. The test: if you can add 'by you' after it, it's probably a judgment disguised as a feeling."
      },
      {
        type: "matching",
        id: "nonviolent-communication-ex-3",
        instruction: "Match each NVC component with the correct example.",
        pairs: [
          { left: "Observation (no judgment)", right: "You arrived 20 minutes after the agreed time" },
          { left: "Feeling (genuine emotion)", right: "I felt worried and disappointed" },
          { left: "Need (underlying value)", right: "Reliability and respect for shared commitments" },
          { left: "Request (specific action)", right: "Could you text me if you'll be more than 5 minutes late?" }
        ],
        explanation: "Each component works together: an objective observation prevents defensiveness, a genuine feeling creates empathy, a stated need creates understanding, and a specific request provides a clear path forward."
      },
      {
        type: "multiple-choice",
        id: "nonviolent-communication-ex-4",
        question: "Why does NVC distinguish between 'You make me angry' and 'I feel angry when...'?",
        options: [
          "They mean the same thing — it's just nicer phrasing",
          "It's a grammatical preference with no practical difference",
          "'You make me' assigns blame and triggers defensiveness; 'I feel' takes ownership of the emotion and invites dialogue",
          "'I feel' is weaker and less likely to get results"
        ],
        correctIndex: 2,
        explanation: "'You make me angry' frames them as the cause (blame), which triggers defensiveness. 'I feel angry when...' takes ownership of your emotional response and separates the person from the behavior — making honest conversation possible."
      }
    ],
    relatedModelIds: ["active-listening", "labeling", "steel-manning"],
    tags: ["communication", "conflict-resolution", "empathy", "relationships"]
  }
];
