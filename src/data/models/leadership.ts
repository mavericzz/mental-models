import type { MentalModel } from "../../types/models";

export const leadershipModels: MentalModel[] = [
  {
    id: "servant-leadership",
    categoryId: "leadership",
    title: "Servant Leadership",
    emoji: "🤲",
    difficulty: 1,
    estimatedMinutes: 7,
    eli5: {
      hook: "The best leaders don't stand in front saying 'Follow me.' They stand behind saying 'How can I help?'",
      analogy:
        "Think of a great waiter at a restaurant. They don't sit at your table and tell you what to eat. They ask what you need, remove obstacles (empty plates, refills), and make sure you have everything to enjoy your meal. They succeed when YOU have a great experience. A servant leader does the same for their team: their job isn't to be the star — it's to make everyone else shine.",
      sections: [
        {
          title: "Flip the Pyramid",
          content:
            "Traditional leadership puts the CEO at the top and workers at the bottom, serving upward. Servant leadership flips it: the leader is at the bottom, supporting everyone above them. Their job is to remove obstacles, provide resources, and shield the team from distractions so the people doing the actual work can perform at their best. Power is used to serve, not to command.",
        },
        {
          title: "Why It Works So Well",
          content:
            "When people feel supported and trusted, they perform dramatically better than when they feel controlled and watched. Servant leadership creates psychological safety, intrinsic motivation, and loyalty that no amount of authority-based management can match. People don't leave companies — they leave managers. They almost never leave servant leaders.",
        },
      ],
      ahaQuote:
        "A leader is best when people barely know they exist. When work is done, the team says 'We did it ourselves.'",
      realWorldExample:
        "A software team lead notices her developers are frustrated with slow approval processes. Instead of telling them to 'just deal with it,' she spends a week meeting with other departments to streamline approvals. She doesn't announce what she did — the developers just notice that bottlenecks disappeared. She used her authority to serve their needs, not to assert her status.",
    },
    exercises: [
      {
        type: "scenario",
        id: "servant-leadership-ex-1",
        scenario:
          "A new director notices her team is struggling with outdated tools. She has two options: (A) Mandate new tools from the top and set a migration deadline, or (B) Ask the team what tools they need, involve them in selection, and provide support during the transition.",
        question: "Which approach reflects servant leadership?",
        options: [
          "Approach A — decisive leadership means making quick decisions",
          "Approach B — servant leadership involves understanding team needs and empowering them in the solution",
          "Neither — tools aren't a leadership issue",
          "Both — any tool upgrade shows good leadership",
        ],
        correctIndex: 1,
        explanation:
          "Servant leadership puts the team's needs first and involves them in solutions. Approach B asks 'What do you need?' rather than 'Here's what you'll do.' The director serves by removing the obstacle (bad tools) while empowering the team to choose their own solution.",
      },
      {
        type: "multiple-choice",
        id: "servant-leadership-ex-2",
        question:
          "What is the primary focus of a servant leader?",
        options: [
          "Achieving their own career goals",
          "Making sure they receive credit for team successes",
          "Growing and developing the people they lead so the team succeeds",
          "Maintaining authority and control over decisions",
        ],
        correctIndex: 2,
        explanation:
          "Servant leaders measure their own success by the growth and success of their team members. They invest in developing others, removing obstacles, and creating conditions where people can do their best work. Their ego takes a back seat to the team's collective achievement.",
      },
      {
        type: "true-false",
        id: "servant-leadership-ex-3",
        statement:
          "Servant leadership means the leader does whatever the team wants and never makes tough decisions.",
        correct: false,
        explanation:
          "Servant leadership is NOT weakness or people-pleasing. Servant leaders still make hard decisions, set direction, and hold people accountable. The difference is WHY they do it: to serve the team's growth and success, not to exercise power. A servant leader will absolutely make an unpopular decision if it truly serves the team's long-term wellbeing.",
      },
      {
        type: "real-world",
        id: "servant-leadership-ex-4",
        challenge:
          "Whether you manage people or not, identify one way you could practice servant leadership this week in any context — work, family, community.",
        prompts: [
          "Who are you in a position to support or serve?",
          "What obstacles are they facing that you could help remove?",
          "How can you empower them rather than directing them?",
          "How will you measure success by THEIR outcomes, not yours?",
        ],
        exampleResponse:
          "Context: My junior colleague is struggling to get their proposal noticed by senior leadership. Servant action: Instead of offering to present it for them (which puts me in the spotlight), I'll coach them on presentation skills, introduce them to the right stakeholders, and advocate for them to present directly. Success metric: They present confidently and get buy-in — even if nobody knows I helped.",
      },
    ],
    relatedModelIds: [
      "psychological-safety",
      "radical-candor",
      "delegation-matrix",
    ],
    tags: [
      "leadership",
      "service",
      "empowerment",
      "trust",
      "team development",
    ],
  },
  {
    id: "psychological-safety",
    categoryId: "leadership",
    title: "Psychological Safety",
    emoji: "🛡️",
    difficulty: 1,
    estimatedMinutes: 7,
    eli5: {
      hook: "The best teams aren't the ones with the smartest people. They're the ones where it's safe to be dumb.",
      analogy:
        "Remember learning to ride a bike? If every time you fell, someone laughed at you and said you were stupid, you'd probably stop trying pretty quickly. But if someone said, 'Great try! You stayed up longer that time!' — you'd get right back on. Psychological safety is training wheels for your brain at work: the feeling that you can fall without being punished, so you keep trying harder things.",
      sections: [
        {
          title: "Google's Biggest Discovery",
          content:
            "Google studied hundreds of its teams to find what made the best ones tick. It wasn't IQ, experience, or team size. The single biggest factor was psychological safety — whether team members felt safe to take risks, ask questions, admit mistakes, and challenge ideas without fear of humiliation or punishment. The smartest team loses to an average team that communicates openly.",
        },
        {
          title: "How Leaders Create It (or Destroy It)",
          content:
            "Psychological safety is created by leaders who admit their own mistakes, respond to questions with curiosity instead of judgment, thank people for raising problems early, and never punish someone for honest failure. It's destroyed in seconds: one sarcastic comment about a 'stupid question,' one public shaming of a mistake, and the entire team goes silent. People learn FAST what's safe and what isn't.",
        },
      ],
      ahaQuote:
        "If people are afraid to say 'I don't know' or 'I made a mistake,' the problems don't go away. They just go underground.",
      realWorldExample:
        "A nurse notices a surgeon is about to operate on the wrong side. In a psychologically safe environment, the nurse speaks up immediately — crisis averted. In an unsafe environment, the nurse thinks, 'I'm probably wrong, and the last nurse who questioned Dr. Smith got yelled at' — and says nothing. Psychological safety literally saves lives.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "psychological-safety-ex-1",
        question:
          "What did Google's Project Aristotle find was the most important factor for team effectiveness?",
        options: [
          "Having team members from top universities",
          "Having a team of senior experienced professionals",
          "Psychological safety — team members feeling safe to take interpersonal risks",
          "Having a strong, directive leader",
        ],
        correctIndex: 2,
        explanation:
          "Google's research found that WHO is on a team matters less than HOW the team works together. Psychological safety — the belief that you won't be punished for mistakes, questions, or ideas — was the foundational factor. Without it, even brilliant teams underperform because people self-censor.",
      },
      {
        type: "scenario",
        id: "psychological-safety-ex-2",
        scenario:
          "In a team meeting, a junior developer says, 'I think our approach might have a flaw.' The tech lead responds, 'We've been doing this for years — if there were a flaw, we'd have found it.' The junior developer goes quiet for the rest of the meeting.",
        question:
          "What just happened to psychological safety, and what's the long-term cost?",
        options: [
          "Nothing significant — the tech lead was just being confident",
          "Psychological safety was damaged. The junior developer (and everyone watching) learned that challenging the status quo is punished. Future problems will go unreported until they become crises",
          "The junior developer needs thicker skin",
          "This is healthy debate and should be encouraged",
        ],
        correctIndex: 1,
        explanation:
          "The tech lead didn't just shut down one comment — they sent a message to the entire team: challenging existing approaches leads to dismissal. The junior developer won't speak up again, and neither will anyone who witnessed it. The REAL cost is the problems that will now go unspoken until they become expensive disasters.",
      },
      {
        type: "true-false",
        id: "psychological-safety-ex-3",
        statement:
          "Psychological safety means everyone should be comfortable and never feel challenged.",
        correct: false,
        explanation:
          "Psychological safety is NOT about comfort or avoiding challenge. It's about feeling safe to BE challenged, to challenge others, and to admit when you're wrong. Psychologically safe teams have MORE productive conflict, not less — because people feel safe enough to disagree, push back, and raise uncomfortable truths.",
      },
      {
        type: "matching",
        id: "psychological-safety-ex-4",
        instruction:
          "Match each leader behavior with its effect on psychological safety.",
        pairs: [
          {
            left: "Admitting 'I was wrong about that' in a team meeting",
            right: "Increases safety — models vulnerability and normalizes mistakes",
          },
          {
            left: "Saying 'Who approved this?' when learning about an error",
            right: "Decreases safety — signals that blame will follow mistakes",
          },
          {
            left: "Asking 'What can we learn from this?' after a failure",
            right: "Increases safety — frames failures as learning opportunities",
          },
          {
            left: "Praising only the team members who agree with their ideas",
            right: "Decreases safety — signals that dissent is unwelcome",
          },
        ],
        explanation:
          "Every leader action either builds or erodes psychological safety. The key pattern: behaviors that welcome mistakes, questions, and dissent increase safety. Behaviors that punish, blame, or discourage vulnerability destroy it. People are constantly watching their leaders for these signals.",
      },
    ],
    relatedModelIds: [
      "servant-leadership",
      "radical-candor",
      "commanders-intent",
    ],
    tags: [
      "teams",
      "trust",
      "culture",
      "vulnerability",
      "Google",
      "communication",
    ],
  },
  {
    id: "delegation-matrix",
    categoryId: "leadership",
    title: "Delegation Matrix",
    emoji: "📋",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "If you're the smartest person in the room and you're doing everything yourself, you're the biggest bottleneck in the room.",
      analogy:
        "Imagine a chef who insists on chopping every vegetable, cooking every dish, plating every meal, AND serving every table. Even the world's best chef would run a terrible restaurant this way. The delegation matrix is like a kitchen brigade system: it helps you figure out which tasks to do yourself, which to hand off with guidance, which to fully delegate, and which to eliminate entirely. The goal is to work ON the kitchen, not IN the kitchen.",
      sections: [
        {
          title: "Four Levels of Delegation",
          content:
            "Level 1: Do it yourself (truly critical, only-you tasks). Level 2: Delegate with oversight (important tasks you train someone on and review). Level 3: Delegate fully (tasks someone else can own completely). Level 4: Eliminate (tasks that shouldn't be done at all). Most leaders have too much in Level 1 and not enough in Levels 3 and 4. If you're doing something a team member could do 80% as well, you should probably delegate it.",
        },
        {
          title: "The 80% Rule",
          content:
            "If someone can do a task 80% as well as you, delegate it. Your remaining 20% isn't worth the bottleneck you create by hoarding the work. Plus, the person you delegate to will reach 100% with practice — but only if you give them the chance. Perfectionism disguised as high standards is one of the biggest leadership traps.",
        },
      ],
      ahaQuote:
        "The best leaders don't do the most work. They make sure the most work gets done.",
      realWorldExample:
        "A marketing director spends 3 hours writing the weekly newsletter herself because 'nobody else can match my voice.' Meanwhile, strategic planning, team development, and new channel exploration — things ONLY she can do — are neglected. She trains a team member to write the newsletter (it takes 4 weeks to reach 90% quality), freeing 3 hours weekly for high-impact work only she can handle.",
    },
    exercises: [
      {
        type: "matching",
        id: "delegation-matrix-ex-1",
        instruction:
          "Categorize each task into the appropriate delegation level for a VP of Engineering.",
        pairs: [
          {
            left: "Setting the 5-year technology vision",
            right: "Level 1: Do yourself (strategic, uniquely yours)",
          },
          {
            left: "Reviewing pull requests for a specific project",
            right: "Level 3: Fully delegate (senior engineers own this)",
          },
          {
            left: "Hiring senior engineers",
            right: "Level 2: Delegate with oversight (team screens, you do final interviews)",
          },
          {
            left: "Generating weekly status reports",
            right: "Level 4: Eliminate or automate",
          },
        ],
        explanation:
          "Effective delegation matches tasks to the right level. Strategic vision requires the VP's unique perspective (Level 1). Code reviews are better handled by the engineers closest to the code (Level 3). Hiring benefits from shared ownership (Level 2). Status reports can often be automated or eliminated entirely (Level 4).",
      },
      {
        type: "multiple-choice",
        id: "delegation-matrix-ex-2",
        question:
          "A manager says, 'It's faster if I just do it myself.' What does the delegation matrix perspective say about this?",
        options: [
          "They're right — efficiency matters most",
          "It's faster THIS time, but they're creating a permanent bottleneck and failing to develop their team's capacity for the long term",
          "They should delegate everything immediately",
          "Speed is the only consideration in delegation decisions",
        ],
        correctIndex: 1,
        explanation:
          "The 'faster to do it myself' trap is a classic. Yes, it's faster today. But tomorrow, and next week, and next month, you'll still be the only person who can do it — and meanwhile, nothing else you should be doing gets done. Short-term speed creates long-term bottlenecks. Investment in delegation pays compound returns.",
      },
      {
        type: "true-false",
        id: "delegation-matrix-ex-3",
        statement:
          "You should only delegate tasks if the other person can do them as well as you can.",
        correct: false,
        explanation:
          "The 80% rule says delegate if someone can do it 80% as well as you. That 20% gap is almost always worth the trade-off because: (1) you free up time for things only you can do, (2) the person will improve to 100% with practice, and (3) they might bring a fresh perspective that makes their approach BETTER than yours.",
      },
      {
        type: "scenario",
        id: "delegation-matrix-ex-4",
        scenario:
          "A startup founder handles product decisions, customer support emails, bookkeeping, social media, and investor relations personally. The company is growing and she's working 80-hour weeks.",
        question:
          "Using the delegation matrix, what should she do?",
        options: [
          "Keep doing everything — founders need to be hands-on",
          "Hire more people but stay involved in all decisions",
          "Apply the matrix: keep product vision and investor relations (Level 1), hire and train for customer support and social media (Level 3), outsource bookkeeping (Level 3), and eliminate tasks that don't drive growth (Level 4)",
          "Delegate investor relations first since it takes the most time",
        ],
        correctIndex: 2,
        explanation:
          "The founder's unique value is in product vision and investor relationships — only she can do those well. Customer support, social media, and bookkeeping are important but don't require her specifically. Delegating these frees 40+ hours per week for high-leverage work that actually grows the company.",
      },
    ],
    relatedModelIds: [
      "servant-leadership",
      "bottleneck-theory",
      "circle-of-competence",
    ],
    tags: [
      "delegation",
      "management",
      "time management",
      "team development",
      "leverage",
    ],
  },
  {
    id: "commanders-intent",
    categoryId: "leadership",
    title: "Commander's Intent",
    emoji: "🎖️",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "No plan survives first contact with the enemy. So tell people WHERE to go, not HOW to walk.",
      analogy:
        "A military commander tells troops: 'Secure the bridge by dawn.' NOT 'Walk 2 miles north, turn left at the oak tree, cross the stream at the shallow point, then...' Why? Because the oak tree might be on fire. The stream might have flooded. If soldiers were given step-by-step directions, they'd freeze when conditions changed. But with the INTENT — 'secure the bridge by dawn' — they can improvise any path that achieves the goal.",
      sections: [
        {
          title: "Communicate the Why, Not the How",
          content:
            "Commander's Intent means sharing the purpose and desired end state clearly enough that people can make good decisions when the plan breaks down — which it always does. Instead of 'Use vendor X for the project,' say 'We need a reliable solution deployed by March that costs under $50K.' Now the team can adapt when Vendor X fails, because they understand what 'success' actually looks like.",
        },
        {
          title: "Trust Through Clarity",
          content:
            "When you communicate intent clearly, you don't need to micromanage. People can make decisions on the ground faster than you can be consulted. The sergeant on the battlefield sees things the general can't. The customer service rep on the phone understands the customer better than the VP. Clear intent plus trust in execution beats detailed instructions every time.",
        },
      ],
      ahaQuote:
        "Give people a destination, not turn-by-turn directions. They'll find the route — even routes you never imagined.",
      realWorldExample:
        "A product manager tells the engineering team: 'Build the checkout flow exactly like this wireframe, button by button.' When user testing reveals the wireframe doesn't work, the engineers feel stuck — they were told WHAT to build, not WHY. Had the PM said, 'Reduce cart abandonment by 30% by making checkout frictionless,' the engineers could have iterated on solutions themselves when the first approach failed.",
    },
    exercises: [
      {
        type: "scenario",
        id: "commanders-intent-ex-1",
        scenario:
          "A CEO tells the marketing team: 'Run Facebook ads targeting women aged 25-34 with a $10,000 budget.' The ads perform poorly. The team doesn't try other channels because they were told specifically to run Facebook ads.",
        question:
          "How should the CEO have communicated using Commander's Intent?",
        options: [
          "'Run better Facebook ads with more creative content'",
          "'Generate 500 qualified leads this quarter for under $20 per lead. Use whatever channels and approaches work best.'",
          "'Just get us more customers, I don't care how'",
          "'Try Google Ads instead of Facebook'",
        ],
        correctIndex: 1,
        explanation:
          "Commander's Intent communicates the goal (500 leads, under $20 each) and constraints (this quarter) while leaving the method open. Now if Facebook underperforms, the team can shift to Instagram, Google, content marketing, or partnerships — without waiting for permission. They have the INTENT and can adapt their tactics.",
      },
      {
        type: "multiple-choice",
        id: "commanders-intent-ex-2",
        question:
          "Why does Commander's Intent work better than detailed instructions in fast-changing situations?",
        options: [
          "Because people don't like being told what to do",
          "Because conditions change faster than instructions can be updated, and people on the ground need the freedom to adapt while keeping the goal in sight",
          "Because leaders don't know enough to give good instructions",
          "Because it requires less communication effort",
        ],
        correctIndex: 1,
        explanation:
          "In any dynamic environment — war, business, life — conditions change constantly. Detailed instructions become obsolete the moment something unexpected happens. Commander's Intent gives people a stable goal (which changes slowly) and the freedom to adapt their approach (which needs to change quickly). It's robust to surprise.",
      },
      {
        type: "true-false",
        id: "commanders-intent-ex-3",
        statement:
          "Commander's Intent means you should never give specific instructions or guidance.",
        correct: false,
        explanation:
          "Commander's Intent doesn't replace specific guidance — it SUPPLEMENTS it. You can absolutely say 'Here's a plan I'd suggest' alongside 'Here's the intent if the plan doesn't work.' The point is ensuring people understand the underlying goal well enough to adapt intelligently. Clear intent plus useful guidance is the ideal combination.",
      },
      {
        type: "fill-in-blank",
        id: "commanders-intent-ex-4",
        textBefore:
          "Commander's Intent focuses on communicating the desired end state and",
        textAfter:
          "rather than prescribing the specific steps to achieve it.",
        acceptedAnswers: ["purpose", "why", "goal", "objective", "reason"],
        hint: "What gives people the ability to adapt when plans change?",
        explanation:
          "When people understand both the desired end state and the PURPOSE behind it, they can make good decisions in situations no one anticipated. The purpose acts as a compass: even when the map (the plan) is wrong, people know which direction to head.",
      },
    ],
    relatedModelIds: [
      "delegation-matrix",
      "psychological-safety",
      "servant-leadership",
    ],
    tags: [
      "military",
      "strategy",
      "communication",
      "autonomy",
      "adaptability",
    ],
  },
  {
    id: "radical-candor",
    categoryId: "leadership",
    title: "Radical Candor",
    emoji: "💬",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "Being nice is not the same as being kind. Sometimes the kindest thing you can do is tell someone the uncomfortable truth.",
      analogy:
        "Imagine your friend has spinach in their teeth before a big presentation. You have four choices: (1) Tell them directly and warmly — 'Hey, you've got spinach in your teeth.' That's radical candor. (2) Say nothing because you don't want to embarrass them — that's ruinous empathy. (3) Tell them harshly — 'You look ridiculous' — that's obnoxious aggression. (4) Say nothing and gossip about it later — that's manipulative insincerity. Only option 1 actually helps them.",
      sections: [
        {
          title: "The Two Dimensions",
          content:
            "Radical Candor has two axes: Care Personally (do you genuinely care about this person?) and Challenge Directly (are you willing to tell them hard truths?). You need BOTH. Caring without challenging is ruinous empathy — you're so worried about feelings that you let someone fail. Challenging without caring is obnoxious aggression — you're right but cruel. Neither without neither is just politics.",
        },
        {
          title: "Why Ruinous Empathy Is the Most Common Trap",
          content:
            "Most well-meaning people default to ruinous empathy. They don't tell a team member their work is subpar. They don't mention that someone's communication style is alienating colleagues. They think they're being kind — but they're actually withholding information that person needs to grow. The short-term comfort of silence creates long-term damage. Eventually the person gets fired and says, 'Why didn't anyone tell me?'",
        },
      ],
      ahaQuote:
        "Telling someone a hard truth because you care about their growth isn't mean. Withholding it to avoid discomfort is.",
      realWorldExample:
        "A manager notices that a team member's presentations are confusing and losing the audience. Ruinous empathy: 'Great job!' (they never improve). Obnoxious aggression: 'That was painful to sit through.' Radical candor: 'I care about your career growth, so I want to share something. Your presentations have great content but lose people in the details. Can we work on structure together?' The truth + care = growth.",
    },
    exercises: [
      {
        type: "matching",
        id: "radical-candor-ex-1",
        instruction:
          "Match each feedback approach to its Radical Candor quadrant.",
        pairs: [
          {
            left: "'Your proposal has a major flaw in the cost analysis. Let me show you — I want to help you nail this.'",
            right: "Radical Candor (caring + challenging directly)",
          },
          {
            left: "'Great work on the proposal!' (when it actually has significant issues)",
            right: "Ruinous Empathy (caring but not challenging)",
          },
          {
            left: "'This proposal is a waste of time. Did you even look at the numbers?'",
            right: "Obnoxious Aggression (challenging without caring)",
          },
          {
            left: "Saying nothing to the person but telling others the proposal was weak",
            right: "Manipulative Insincerity (neither caring nor challenging)",
          },
        ],
        explanation:
          "Only Radical Candor — the combination of genuine care and direct honesty — actually helps the person improve. Each other quadrant either misleads them (ruinous empathy), damages them (obnoxious aggression), or betrays them (manipulative insincerity).",
      },
      {
        type: "scenario",
        id: "radical-candor-ex-2",
        scenario:
          "A high-performing engineer frequently interrupts colleagues in meetings, and several team members have complained privately to you (the manager). The engineer seems unaware of the issue.",
        question:
          "What does the Radical Candor approach look like?",
        options: [
          "Send a team-wide email about meeting etiquette (avoids direct confrontation)",
          "Have a private conversation: 'I value you on this team and I want to help you succeed. I've noticed you sometimes interrupt others in meetings, and it's creating friction. Can we work on this together?'",
          "Wait and see if the problem resolves itself",
          "Tell the team members who complained to deal with it themselves",
        ],
        correctIndex: 1,
        explanation:
          "Radical Candor requires both care and directness. The private conversation shows personal care ('I value you') while directly naming the specific behavior and its impact. The team-wide email is manipulative insincerity (indirect), waiting is ruinous empathy (avoidant), and deflecting to teammates is abdicating leadership responsibility.",
      },
      {
        type: "true-false",
        id: "radical-candor-ex-3",
        statement:
          "Radical Candor means always being brutally honest regardless of the other person's feelings.",
        correct: false,
        explanation:
          "That's obnoxious aggression, not Radical Candor. Radical Candor requires BOTH axes: challenging directly AND caring personally. Without genuine care, directness is just cruelty. The 'radical' part isn't about being harsh — it's about caring enough to be honest even when it's uncomfortable.",
      },
      {
        type: "multiple-choice",
        id: "radical-candor-ex-4",
        question:
          "Why is ruinous empathy considered more dangerous than obnoxious aggression?",
        options: [
          "It's not — obnoxious aggression is always worse",
          "Because people who experience obnoxious aggression at least know the truth and can act on it, while ruinous empathy hides the truth behind false kindness, preventing growth entirely",
          "Because ruinous empathy is intentionally deceptive",
          "Because obnoxious aggression builds resilience",
        ],
        correctIndex: 1,
        explanation:
          "Kim Scott (the creator of Radical Candor) argues that ruinous empathy is the most common and most damaging quadrant because it FEELS virtuous. The person delivering it thinks they're being kind, but they're actually depriving someone of the feedback they need to grow. At least obnoxious aggression, for all its damage, delivers the truth.",
      },
    ],
    relatedModelIds: [
      "psychological-safety",
      "servant-leadership",
      "commanders-intent",
    ],
    tags: [
      "feedback",
      "communication",
      "honesty",
      "care",
      "management",
      "growth",
    ],
  },
  {
    id: "circle-of-competence",
    categoryId: "leadership",
    title: "Circle of Competence",
    emoji: "⭕",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "Knowing what you DON'T know is more valuable than everything you DO know.",
      analogy:
        "Think of your knowledge as a circle drawn on a huge sheet of paper. Inside the circle: things you truly understand from years of experience. Outside: everything else. The most dangerous zone isn't the vast outside — it's the EDGE, where you know just enough to feel confident but not enough to see the risks. A heart surgeon shouldn't perform brain surgery. A great stock picker shouldn't try to flip houses. The circle has edges for a reason.",
      sections: [
        {
          title: "The Three Zones",
          content:
            "Inside your circle: You have deep, earned understanding. You know what you know AND what you don't. You can make good decisions quickly because you've seen patterns many times. At the edge: You have surface knowledge — enough to be dangerous. You feel confident but lack the depth to spot subtle risks. Outside your circle: You're clearly out of your depth and hopefully smart enough to ask for help.",
        },
        {
          title: "Expanding vs. Respecting the Circle",
          content:
            "There's nothing wrong with operating outside your circle — that's how you learn and grow. The key is to KNOW when you're doing it. Warren Buffett didn't invest in tech for decades because it was outside his circle. He wasn't afraid of tech — he just knew he didn't have an edge there. When you're outside your circle, seek expert input, move cautiously, and size your bets accordingly.",
        },
      ],
      ahaQuote:
        "It's not about having the biggest circle. It's about knowing exactly where the border is.",
      realWorldExample:
        "A brilliant software engineer is promoted to VP of Engineering. Their circle of competence is technical — they know code, architecture, and systems deeply. But now they need to do budgeting, cross-department politics, and people management — all outside their circle. The ones who thrive acknowledge the gap and learn fast. The ones who fail assume engineering skill translates to management skill.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "circle-of-competence-ex-1",
        question:
          "Warren Buffett avoided investing in technology companies for decades. According to Circle of Competence, why?",
        options: [
          "He didn't believe in technology",
          "Technology stocks were overpriced",
          "Technology was outside his circle of competence — he couldn't reliably predict winners and losers in that domain",
          "He was too old to understand technology",
        ],
        correctIndex: 2,
        explanation:
          "Buffett's decision wasn't about technology being bad — it was about honest self-assessment. He didn't have the deep understanding needed to consistently make good technology investment decisions. Rather than operating at the dangerous edge of his knowledge, he stayed where he had genuine expertise and let tech-savvy investors handle that domain.",
      },
      {
        type: "true-false",
        id: "circle-of-competence-ex-2",
        statement:
          "You should never make decisions outside your circle of competence.",
        correct: false,
        explanation:
          "You'll inevitably need to make decisions outside your circle. The key isn't avoidance — it's awareness. When you're outside your circle, acknowledge it, consult experts, reduce your bet size, and be extra cautious. The danger isn't being outside the circle — it's being outside the circle while THINKING you're inside it.",
      },
      {
        type: "scenario",
        id: "circle-of-competence-ex-3",
        scenario:
          "A successful restaurateur decides to invest a large portion of their savings into cryptocurrency because a friend told them about huge gains. They've never studied finance, blockchain, or cryptocurrency markets.",
        question:
          "What does Circle of Competence thinking say about this decision?",
        options: [
          "It's fine — cryptocurrency is easy to understand",
          "They should invest because their friend is experienced",
          "They're operating far outside their circle — they should either invest a small amount they can afford to lose, spend months learning the domain first, or consult a financial advisor before committing large sums",
          "Restaurateurs can never invest in cryptocurrency",
        ],
        correctIndex: 2,
        explanation:
          "A large bet in an unfamiliar domain is the riskiest possible position on the circle of competence. The restaurateur can't distinguish good crypto advice from bad, can't evaluate risks, and can't spot warning signs. Small position sizing, extensive learning, or expert consultation would align the decision with their actual knowledge level.",
      },
      {
        type: "fill-in-blank",
        id: "circle-of-competence-ex-4",
        textBefore:
          "The most dangerous zone on the circle of competence is the",
        textAfter:
          "where you know just enough to feel confident but not enough to see the hidden risks.",
        acceptedAnswers: ["edge", "border", "boundary", "periphery", "margin"],
        hint: "It's not the inside or the outside — it's the zone between them",
        explanation:
          "The edge of your circle is where you have some knowledge — enough to sound informed, form opinions, and feel confident — but lack the depth to see subtle risks and nuances. This is where the most expensive mistakes happen: you're confident enough to act big but uninformed enough to act wrong.",
      },
    ],
    relatedModelIds: [
      "delegation-matrix",
      "map-vs-territory",
      "base-rate-neglect",
    ],
    tags: [
      "self-awareness",
      "expertise",
      "Warren Buffett",
      "risk management",
      "humility",
    ],
  },
  {
    id: "leading-lagging-indicators",
    categoryId: "leadership",
    title: "Leading & Lagging Indicators",
    emoji: "📡",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Checking your weight is like checking your grade AFTER the exam. By then, it's too late to study.",
      analogy:
        "Imagine driving a car using only the rearview mirror. You can see where you've been, but not where you're going. That's what it's like to manage with only lagging indicators (revenue, profit, customer churn) — they tell you what already happened. Leading indicators are like the WINDSHIELD: they show you what's coming. Calories eaten today is a leading indicator. Weight on the scale next week is the lagging one. By the time the lagging indicator moves, it's too late to change it.",
      sections: [
        {
          title: "Lagging Indicators: The Scoreboard",
          content:
            "Revenue, profit, customer satisfaction scores, weight, test grades — these are lagging indicators. They're outcomes, consequences, final results. They're important for measuring success, but they're terrible for DRIVING it because by the time they change, it's too late to influence them. You can't change Q3 revenue on September 30th.",
        },
        {
          title: "Leading Indicators: The Steering Wheel",
          content:
            "Pipeline meetings, daily exercise habits, hours studied per week, customer onboarding calls — these are leading indicators. They're the activities and inputs that will PRODUCE the lagging results later. Track and manage leading indicators because they're the things you can actually control. If your leading indicators are healthy, the lagging results will follow.",
        },
      ],
      ahaQuote:
        "Manage the inputs (leading indicators), and the outputs (lagging indicators) take care of themselves.",
      realWorldExample:
        "A sales team tracks monthly revenue (lagging indicator) and panics when it drops. But revenue is the RESULT of activities done weeks ago. Better: track daily calls made, demos scheduled, and proposals sent (leading indicators). If those numbers are strong, revenue will follow. If they're weak, you can fix them NOW instead of being surprised by bad revenue later.",
    },
    exercises: [
      {
        type: "matching",
        id: "leading-lagging-indicators-ex-1",
        instruction:
          "Classify each metric as a leading indicator (predictive, actionable) or lagging indicator (outcome, historical).",
        pairs: [
          {
            left: "Number of sales calls made per day",
            right: "Leading indicator",
          },
          {
            left: "Quarterly revenue",
            right: "Lagging indicator",
          },
          {
            left: "Hours spent exercising per week",
            right: "Leading indicator",
          },
          {
            left: "Annual employee turnover rate",
            right: "Lagging indicator",
          },
        ],
        explanation:
          "Leading indicators are inputs you can control NOW that predict future outcomes. Lagging indicators are the outcomes themselves — important to measure but impossible to directly change. The connection: strong leading indicators today produce strong lagging indicators tomorrow.",
      },
      {
        type: "scenario",
        id: "leading-lagging-indicators-ex-2",
        scenario:
          "A startup's CEO obsessively checks the company's monthly recurring revenue (MRR) dashboard every morning. When MRR dips, she calls emergency meetings and demands the team 'fix revenue.'",
        question:
          "What's wrong with this approach, and what should she track instead?",
        options: [
          "Nothing wrong — MRR is the most important metric for a startup",
          "She should track leading indicators like new trial signups, activation rates, and customer health scores — these predict future MRR and can be influenced NOW, while MRR is a lagging result of past actions",
          "She should check MRR weekly instead of daily",
          "She should focus on reducing costs instead of increasing revenue",
        ],
        correctIndex: 1,
        explanation:
          "MRR is a lagging indicator — it reflects decisions customers made days or weeks ago. By the time MRR dips, the damage is done. Leading indicators (trial signups, activation rates, support ticket trends, feature usage) would give early warning signals that she can act on BEFORE they impact MRR.",
      },
      {
        type: "true-false",
        id: "leading-lagging-indicators-ex-3",
        statement:
          "Lagging indicators are less important than leading indicators and should be ignored.",
        correct: false,
        explanation:
          "Both types are essential. Lagging indicators tell you whether your strategy is working — they're the ultimate scorecard. Leading indicators tell you whether your daily activities are on track. You need lagging indicators to validate that you're tracking the RIGHT leading indicators. The pair works together: lead with the leading, verify with the lagging.",
      },
      {
        type: "multiple-choice",
        id: "leading-lagging-indicators-ex-4",
        question:
          "For a student wanting to get better grades, which is the best leading indicator to track?",
        options: [
          "Their GPA at the end of each semester",
          "Hours of focused study per day and practice problems completed per week",
          "How smart they feel after studying",
          "Their rank in the class",
        ],
        correctIndex: 1,
        explanation:
          "GPA and class rank are lagging indicators — they report results after it's too late to change them. Hours of focused study and practice problems completed are leading indicators — they're controllable inputs that predict future grades. A student managing these leading indicators daily will see the lagging indicator (GPA) improve as a natural consequence.",
      },
    ],
    relatedModelIds: [
      "goodharts-law",
      "feedback-loops",
      "bottleneck-theory",
      "delegation-matrix",
    ],
    tags: [
      "metrics",
      "management",
      "prediction",
      "tracking",
      "performance",
      "KPIs",
    ],
  },
];
