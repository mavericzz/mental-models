import type { MentalModel } from "../../types/models";

export const learningModels: MentalModel[] = [
  {
    id: "feynman-technique",
    categoryId: "learning",
    title: "Feynman Technique",
    emoji: "👨‍🏫",
    difficulty: 1,
    estimatedMinutes: 7,
    eli5: {
      hook: "If you can't explain it to a 6-year-old, you don't really understand it.",
      analogy: "The Feynman Technique is like trying to give someone directions to your house. If you actually know the route, you can describe every turn clearly. But if you've only ever followed GPS, you'll stumble and get confused. Teaching forces you to discover the gaps between 'I sort of get it' and 'I truly understand it.'",
      sections: [
        {
          title: "The Four Steps",
          content: "Step 1: Pick a concept you want to learn. Step 2: Explain it in plain language as if teaching a child — no jargon allowed. Step 3: Identify where you stumble, get confused, or resort to complicated words (these are your knowledge gaps). Step 4: Go back to the source material, fill the gaps, and simplify your explanation until it flows."
        },
        {
          title: "Why Jargon Is a Red Flag",
          content: "When you hide behind technical terms, you're often hiding from your own confusion. Saying 'it leverages synergistic paradigm shifts' means nothing. Saying 'it combines two things that work better together than apart' means everything. If you can't translate jargon into simple language, you've memorized words, not concepts. Richard Feynman won a Nobel Prize and could explain quantum physics to bartenders."
        }
      ],
      ahaQuote: "The person who learns the most in any classroom is the teacher.",
      realWorldExample: "You're studying how interest rates work. You try to explain it to your younger sibling: 'When you put money in the bank, the bank pays you a little extra for letting them use it. That extra is called interest.' If you can't explain why rates go up and down, you've found your gap — go study that part, then come back and try again."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "feynman-technique-ex-1",
        question: "What is the main purpose of explaining a concept in simple language?",
        options: [
          "To impress others with your teaching skills",
          "To reveal gaps in your own understanding",
          "To make the topic easier than it really is",
          "To avoid having to read textbooks"
        ],
        correctIndex: 1,
        explanation: "The Feynman Technique uses teaching as a diagnostic tool. When you stumble while explaining simply, you've found exactly where your understanding breaks down."
      },
      {
        type: "true-false",
        id: "feynman-technique-ex-2",
        statement: "If you can use the correct technical terms for a concept, you truly understand it.",
        correct: false,
        explanation: "Knowing jargon can mask shallow understanding. True comprehension means you can explain the concept in plain language without relying on technical terms as a crutch."
      },
      {
        type: "scenario",
        id: "feynman-technique-ex-3",
        scenario: "You're studying machine learning for an exam. You try to explain 'gradient descent' to a friend who knows nothing about math. You say: 'It's an optimization algorithm that iteratively adjusts parameters to minimize a loss function.' Your friend stares blankly.",
        question: "According to the Feynman Technique, what should you do?",
        options: [
          "Find a smarter friend to explain it to",
          "Accept that some topics are too complex for simple explanations",
          "Go back, study gradient descent more deeply, and try again with simpler language",
          "Use diagrams instead of words"
        ],
        correctIndex: 2,
        explanation: "Your jargon-heavy explanation signals a gap in understanding. Go back to the source material, truly understand the mechanics, then try: 'Imagine you're blindfolded on a hill and want to reach the bottom. You feel which way slopes down and take small steps that direction. That's gradient descent.'"
      },
      {
        type: "real-world",
        id: "feynman-technique-ex-4",
        challenge: "Pick something you recently learned or studied. Try to explain it right now as if you're talking to a curious 10-year-old. Notice where you stumble.",
        prompts: [
          "What concept are you explaining?",
          "Write your simple explanation (no jargon!)",
          "Where did you stumble or feel uncertain?"
        ],
        exampleResponse: "Concept: Blockchain. My explanation: 'Imagine a notebook that everyone in class can read, but nobody can erase. Every time someone trades a Pokemon card, it gets written in the notebook. Everyone has a copy, so if someone tries to cheat, all the other copies prove them wrong.' I stumbled when trying to explain mining — I realize I don't actually understand why solving math problems validates transactions. That's my gap."
      }
    ],
    relatedModelIds: ["active-recall", "elaboration", "growth-mindset"],
    tags: ["learning", "teaching", "understanding", "simplification"]
  },
  {
    id: "spaced-repetition",
    categoryId: "learning",
    title: "Spaced Repetition",
    emoji: "📅",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "Studying something 4 times over a month beats studying it 4 times in one night — by a landslide.",
      analogy: "Spaced repetition is like watering a plant. Dump a gallon of water on it once and most runs off — the plant might even drown. But give it a cup of water every few days and it thrives. Your memory works the same way. Spacing out your review sessions gives each session time to sink in and take root.",
      sections: [
        {
          title: "The Forgetting Curve Is Your Enemy",
          content: "Within 24 hours of learning something, you forget about 70% of it. After a week, it's nearly gone. But here's the trick: each time you review at the right moment (just as you're about to forget), the memory gets stronger and lasts longer. First review after 1 day. Then 3 days. Then 1 week. Then 2 weeks. Then a month. Each interval stretches because the memory is getting more durable."
        },
        {
          title: "Make It Automatic",
          content: "Apps like Anki do the scheduling for you. You create flashcards, and the app decides when to show each one based on how well you remembered it last time. Cards you know well appear rarely. Cards you struggle with appear frequently. It's like having a personal tutor who knows exactly what you're about to forget."
        }
      ],
      ahaQuote: "The best time to review something is right before you forget it — that's when the memory muscle gets the best workout.",
      realWorldExample: "You learn 30 Spanish words on Monday. By cramming, you might remember 25 on Tuesday but only 5 by next Monday. With spaced repetition, you review 10 minutes on Tuesday, 10 minutes on Friday, 10 minutes next Wednesday — and you remember 28 of them a month later."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "spaced-repetition-ex-1",
        question: "Why does reviewing right before you forget strengthen memory more than reviewing while you still remember well?",
        options: [
          "It doesn't — reviewing early is always better",
          "The effort of almost-forgetting and then recalling strengthens the neural pathway",
          "It saves time by reducing the number of reviews needed",
          "It's less boring to review when you've partially forgotten"
        ],
        correctIndex: 1,
        explanation: "The 'desirable difficulty' of recalling something you almost forgot forces your brain to rebuild and strengthen the memory trace. Easy recall doesn't trigger this strengthening effect."
      },
      {
        type: "fill-in-blank",
        id: "spaced-repetition-ex-2",
        textBefore: "The",
        textAfter: "curve, discovered by Hermann Ebbinghaus, shows that we lose about 70% of new information within 24 hours without review.",
        acceptedAnswers: ["forgetting", "Forgetting"],
        hint: "What's the opposite of remembering?",
        explanation: "Ebbinghaus's forgetting curve demonstrates how quickly we lose new information over time. Spaced repetition is specifically designed to counteract this natural memory decay."
      },
      {
        type: "true-false",
        id: "spaced-repetition-ex-3",
        statement: "Cramming the night before a test is equally effective as spaced repetition for long-term retention.",
        correct: false,
        explanation: "Cramming can work for short-term recall (like passing a test tomorrow) but fails miserably for long-term retention. Spaced repetition produces dramatically better long-term memory."
      },
      {
        type: "matching",
        id: "spaced-repetition-ex-4",
        instruction: "Match each review interval with what's happening in your memory.",
        pairs: [
          { left: "Review after 1 day", right: "Catching the steepest part of the forgetting curve" },
          { left: "Review after 3 days", right: "Reinforcing while the memory is still fragile" },
          { left: "Review after 1 week", right: "Building medium-term retention" },
          { left: "Review after 1 month", right: "Memory is becoming durable long-term knowledge" }
        ],
        explanation: "Each review interval is longer because the memory becomes more durable with each successful recall. This expanding schedule is the core mechanism of spaced repetition."
      }
    ],
    relatedModelIds: ["active-recall", "interleaving", "feynman-technique"],
    tags: ["learning", "memory", "study-skills", "efficiency"]
  },
  {
    id: "active-recall",
    categoryId: "learning",
    title: "Active Recall",
    emoji: "🧠",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "Reading your notes 10 times feels productive but barely works. Closing the book and quizzing yourself once is worth more than all 10 re-reads.",
      analogy: "Active recall is like strength training for your brain. Re-reading notes is like watching someone else lift weights — you see it happen, but YOUR muscles don't grow. Actively pulling information from memory (without peeking) is like doing the reps yourself. It's harder, it's uncomfortable, but it's the only thing that actually makes you stronger.",
      sections: [
        {
          title: "Why Re-reading Lies to You",
          content: "When you re-read notes, the material feels familiar, and your brain mistakes 'this looks familiar' for 'I know this.' It's an illusion of competence. You feel confident walking into the test, then go blank when you actually need to produce the answer. Active recall forces you to produce the answer first, revealing exactly what you know and don't know."
        },
        {
          title: "How to Practice It",
          content: "Close the book and ask yourself: 'What did I just learn?' Write down everything you can remember. Use flashcards where you see a question and must generate the answer. After lectures, write a summary from memory before checking your notes. Practice problems without looking at worked examples. The discomfort you feel is literally your brain getting stronger."
        }
      ],
      ahaQuote: "If your brain doesn't have to work to retrieve it, your brain won't bother to remember it.",
      realWorldExample: "Two students study for a biology test. Student A re-reads the chapter 3 times (2 hours). Student B reads it once, then spends 1 hour quizzing herself with flashcards. Student B scores 40% higher on the test. The research on this is overwhelming and consistent."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "active-recall-ex-1",
        question: "Why does re-reading notes create a false sense of confidence?",
        options: [
          "Because the notes might be inaccurate",
          "Because familiarity with the material is mistaken for the ability to recall it",
          "Because reading is too slow to be effective",
          "Because notes don't contain enough detail"
        ],
        correctIndex: 1,
        explanation: "Re-reading creates recognition (this looks familiar) but not recall (I can produce this from memory). Tests and real life require recall, not recognition."
      },
      {
        type: "true-false",
        id: "active-recall-ex-2",
        statement: "Active recall should feel easy and comfortable — if it's hard, you're doing it wrong.",
        correct: false,
        explanation: "Active recall SHOULD feel difficult. That difficulty — called 'desirable difficulty' — is exactly what forces your brain to strengthen the memory. If it feels easy, it's not effective."
      },
      {
        type: "scenario",
        id: "active-recall-ex-3",
        scenario: "You're learning a new programming language. You have 1 hour to study. Which approach will produce the best retention?",
        question: "What should you do?",
        options: [
          "Read through the documentation carefully for the full hour",
          "Watch tutorial videos and take detailed notes",
          "Read for 20 minutes, then spend 40 minutes writing code from memory and solving practice problems",
          "Copy code examples from the documentation by hand"
        ],
        correctIndex: 2,
        explanation: "Spending the majority of time actively producing code from memory (active recall) is far more effective than passively reading or watching. The 20-minute reading phase loads the material; the 40-minute active phase cements it."
      },
      {
        type: "fill-in-blank",
        id: "active-recall-ex-4",
        textBefore: "The illusion of",
        textAfter: "occurs when re-reading makes material feel familiar, tricking you into thinking you've learned it.",
        acceptedAnswers: ["competence", "knowledge", "learning", "mastery"],
        hint: "You feel capable but actually aren't...",
        explanation: "The illusion of competence is a well-documented cognitive trap where familiarity (from re-reading) is confused with actual ability to recall and apply information."
      }
    ],
    relatedModelIds: ["spaced-repetition", "feynman-technique", "interleaving"],
    tags: ["learning", "memory", "study-skills", "testing"]
  },
  {
    id: "interleaving",
    categoryId: "learning",
    title: "Interleaving",
    emoji: "🔄",
    difficulty: 2,
    estimatedMinutes: 6,
    eli5: {
      hook: "Practicing one thing over and over feels great but learning different things mixed together actually works better.",
      analogy: "Interleaving is like training for a soccer game by mixing dribbling, passing, shooting, and defense in random order — just like a real game. Blocked practice (50 shots, then 50 passes, then 50 dribbles) feels smoother, but your brain is on autopilot. Mixing them up forces your brain to constantly choose the right skill, which is exactly what you need in the real match.",
      sections: [
        {
          title: "Why Mixing Beats Mastering One at a Time",
          content: "When you practice AAABBBCCC (blocked), your brain stops thinking after the first A — it just repeats. When you practice ABCBACBCA (interleaved), each problem forces your brain to first identify what TYPE of problem it is, then choose the right approach. This discrimination skill is crucial in real life, where problems don't come labeled with their category."
        },
        {
          title: "The Uncomfortable Truth",
          content: "Interleaving feels worse while you're doing it. You make more mistakes, you feel slower, and you might think you're not learning. But research consistently shows interleaving produces 20-50% better performance on tests compared to blocked practice. The struggle IS the learning. Your brain is building the mental wiring to identify and respond to different situations."
        }
      ],
      ahaQuote: "If practice feels too easy, you're training your hands, not your brain.",
      realWorldExample: "A math student studies by doing 20 multiplication problems, then 20 division, then 20 fractions. They ace each section. But on the test, where problem types are mixed together, they freeze — they practiced the operations but never practiced CHOOSING which operation to use. Interleaving would have prepared them."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "interleaving-ex-1",
        question: "Why does interleaved practice produce better test results than blocked practice?",
        options: [
          "Because it covers more material in less time",
          "Because it forces your brain to distinguish between problem types and select the right approach",
          "Because it's more fun and engaging",
          "Because it prevents boredom from repetition"
        ],
        correctIndex: 1,
        explanation: "The key advantage of interleaving is building discrimination skills — learning to identify what kind of problem you're facing and choosing the appropriate strategy, not just executing a strategy you already know applies."
      },
      {
        type: "true-false",
        id: "interleaving-ex-2",
        statement: "If interleaved practice feels harder and you make more mistakes, it means the method isn't working for you.",
        correct: false,
        explanation: "The difficulty and errors are a feature, not a bug. They signal that your brain is doing the hard work of building discrimination and flexibility — skills that blocked practice doesn't develop."
      },
      {
        type: "scenario",
        id: "interleaving-ex-3",
        scenario: "You're learning three types of guitar chords: major, minor, and seventh chords. You have 30 minutes to practice.",
        question: "Which approach will lead to better long-term skill?",
        options: [
          "10 minutes of major, 10 minutes of minor, 10 minutes of seventh",
          "30 minutes of major today, minor tomorrow, seventh the day after",
          "Mix all three types randomly throughout the 30 minutes",
          "Master major chords completely before moving on"
        ],
        correctIndex: 2,
        explanation: "Mixing chord types randomly forces your brain to identify which chord is needed and switch techniques — just like playing a real song, where chords come in unpredictable order."
      },
      {
        type: "matching",
        id: "interleaving-ex-4",
        instruction: "Match each practice style with its characteristics.",
        pairs: [
          { left: "Blocked practice (AAABBBCCC)", right: "Feels smooth, but doesn't build discrimination skills" },
          { left: "Interleaved practice (ABCBACBCA)", right: "Feels harder, but produces better long-term performance" },
          { left: "Real-world performance", right: "Problems come in random order requiring identification and adaptation" },
          { left: "The illusion of fluency", right: "Blocked practice feels effective but test scores tell a different story" }
        ],
        explanation: "Blocked practice creates an illusion of mastery, while interleaved practice builds the discrimination and adaptation skills you actually need in real-world situations."
      }
    ],
    relatedModelIds: ["spaced-repetition", "active-recall", "zone-of-proximal-development"],
    tags: ["learning", "practice", "study-skills", "performance"]
  },
  {
    id: "zone-of-proximal-development",
    categoryId: "learning",
    title: "Zone of Proximal Development",
    emoji: "🎚️",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "The sweet spot for learning is when something is just hard enough that you need a little help — but not so hard that you're completely lost.",
      analogy: "The Zone of Proximal Development (ZPD) is like learning to ride a bike with training wheels. Without any support, a kid just falls and gives up (too hard). On a tricycle, there's nothing new to learn (too easy). Training wheels provide just enough support to let them practice balancing — the skill they're almost ready for. That 'almost ready' zone is the ZPD.",
      sections: [
        {
          title: "Three Zones of Learning",
          content: "Imagine three concentric circles. The inner circle: things you can do alone (comfort zone — no learning happens here). The outer circle: things way beyond your current ability (panic zone — you just feel overwhelmed and shut down). The middle ring: things you can do with guidance, hints, or scaffolding. THAT middle ring is the ZPD, and it's where virtually all meaningful learning happens."
        },
        {
          title: "Scaffolding: The Key to the Zone",
          content: "A good teacher, mentor, or learning resource provides 'scaffolding' — temporary support that lets you perform at a level you couldn't reach alone. As you get better, the scaffolding is gradually removed. Think of it like training wheels being raised bit by bit until they don't touch the ground anymore. The goal is always to make the support unnecessary."
        }
      ],
      ahaQuote: "Growth doesn't happen in comfort or chaos — it happens in the challenging-but-possible space between them.",
      realWorldExample: "Learning chess. Playing against a total beginner (too easy) teaches you nothing. Playing against a grandmaster (too hard) just feels demoralizing. Playing against someone slightly better than you, who occasionally explains their moves, puts you squarely in your ZPD — and that's where your skill grows fastest."
    },
    exercises: [
      {
        type: "matching",
        id: "zone-of-proximal-development-ex-1",
        instruction: "Match each learning zone with the experience it creates.",
        pairs: [
          { left: "Comfort Zone (too easy)", right: "Boredom — you're repeating what you already know" },
          { left: "Zone of Proximal Development", right: "Productive struggle — challenging but achievable with support" },
          { left: "Panic Zone (too hard)", right: "Overwhelm — you shut down and stop learning" },
          { left: "Scaffolding", right: "Temporary support that makes the ZPD accessible" }
        ],
        explanation: "The ZPD is the productive middle ground where real learning happens. Scaffolding makes this zone accessible by providing the right level of support."
      },
      {
        type: "true-false",
        id: "zone-of-proximal-development-ex-2",
        statement: "If a learner can complete a task without any help, they are in their Zone of Proximal Development.",
        correct: false,
        explanation: "If they can do it without help, it's in their comfort zone. The ZPD is specifically the zone of tasks they can do WITH help but not yet independently."
      },
      {
        type: "scenario",
        id: "zone-of-proximal-development-ex-3",
        scenario: "A junior developer is struggling to build a feature. Their senior colleague could build it in 20 minutes. The senior has two options: build it themselves or pair-program, guiding the junior through it.",
        question: "Which approach produces more learning?",
        options: [
          "Build it themselves and let the junior watch — seeing an expert is educational",
          "Pair-program, letting the junior drive while providing hints and guidance",
          "Let the junior struggle alone — they'll learn from failure",
          "Split the work 50/50 so both contribute equally"
        ],
        correctIndex: 1,
        explanation: "Pair-programming with the junior driving keeps them in their ZPD — they're doing work they couldn't do alone, with scaffolding from the senior. Watching passively or struggling without any support are both less effective."
      },
      {
        type: "multiple-choice",
        id: "zone-of-proximal-development-ex-4",
        question: "Who developed the concept of the Zone of Proximal Development?",
        options: [
          "Jean Piaget",
          "B.F. Skinner",
          "Lev Vygotsky",
          "Howard Gardner"
        ],
        correctIndex: 2,
        explanation: "Soviet psychologist Lev Vygotsky developed the ZPD concept, emphasizing that learning is fundamentally social and that guidance from more knowledgeable others is essential for development."
      }
    ],
    relatedModelIds: ["growth-mindset", "feynman-technique", "interleaving"],
    tags: ["learning", "education", "development", "scaffolding"]
  },
  {
    id: "growth-mindset",
    categoryId: "learning",
    title: "Growth Mindset",
    emoji: "🌳",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "The students who believe they CAN get smarter actually DO get smarter — and that's not a coincidence.",
      analogy: "A growth mindset is like treating your brain as a muscle. Nobody looks at a skinny arm and says 'Well, that arm is just permanently weak forever.' You'd say 'That arm needs training.' Your brain is the same — intelligence, talent, and ability aren't fixed at birth. They're built through effort, strategy, and persistence. Struggle isn't a sign of stupidity; it's the brain doing push-ups.",
      sections: [
        {
          title: "Fixed vs. Growth",
          content: "People with a fixed mindset believe talent is innate: you're either smart or you're not, artistic or you're not, athletic or you're not. People with a growth mindset believe abilities are developed through dedication and hard work. The mindset you hold fundamentally changes your behavior — fixed mindset people avoid challenges (they might fail and prove they're 'not smart'), while growth mindset people seek them out (challenges are how you grow)."
        },
        {
          title: "The Power of 'Yet'",
          content: "One of the simplest shifts: add 'yet' to any statement of inability. 'I can't do calculus' becomes 'I can't do calculus yet.' 'I'm not a good writer' becomes 'I'm not a good writer yet.' This tiny word transforms a dead end into a path. Carol Dweck's research shows that students who are taught about growth mindset show measurable improvement in grades, especially in challenging subjects."
        }
      ],
      ahaQuote: "It's not about being smart. It's about getting smarter.",
      realWorldExample: "Two kids fail a math test. Fixed mindset kid says 'I'm just bad at math' and stops trying. Growth mindset kid says 'I need to find a different way to study' and asks the teacher for help. By the end of the semester, the growth mindset kid has caught up and surpassed classmates who were initially 'better at math.'"
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "growth-mindset-ex-1",
        question: "A student fails a difficult exam and says, 'I need to change my study strategy and get tutoring.' This reflects which mindset?",
        options: [
          "Fixed mindset — they're admitting they need help",
          "Growth mindset — they see failure as an opportunity to improve their approach",
          "Neither — it's just a practical decision",
          "Fixed mindset — they're blaming their study method"
        ],
        correctIndex: 1,
        explanation: "Seeking new strategies and help after failure is a hallmark of growth mindset. The student believes they can improve through different effort and methods."
      },
      {
        type: "true-false",
        id: "growth-mindset-ex-2",
        statement: "Growth mindset means believing that anyone can become anything if they just try hard enough.",
        correct: false,
        explanation: "Growth mindset doesn't claim unlimited potential or that effort alone is sufficient. It means believing that abilities can be meaningfully developed through effective effort, good strategies, and input from others. Hard work without smart strategy isn't enough."
      },
      {
        type: "fill-in-blank",
        id: "growth-mindset-ex-3",
        textBefore: "According to Carol Dweck, adding the word '",
        textAfter: "' to statements of inability transforms them from dead ends into paths of growth.",
        acceptedAnswers: ["yet", "Yet"],
        hint: "It's a three-letter word that implies the future...",
        explanation: "The word 'yet' is a powerful mindset shifter: 'I can't do this' (fixed) becomes 'I can't do this yet' (growth), implying that current inability is temporary and improvement is expected."
      },
      {
        type: "scenario",
        id: "growth-mindset-ex-4",
        scenario: "A manager notices that one team member avoids presenting in meetings and always says, 'I'm just not a public speaker.' Another team member used to be equally nervous but started volunteering for small presentations.",
        question: "What advice would help the first team member?",
        options: [
          "'Some people just aren't natural speakers — that's okay, you have other strengths.'",
          "'You're not a great speaker yet. Start with 2-minute updates to the team and build from there.'",
          "'Just push through the fear — present at the next all-hands meeting.'",
          "'Watch videos of great speakers and try to copy them.'"
        ],
        correctIndex: 1,
        explanation: "Adding 'yet' reframes the identity ('I'm not a speaker') into a development path. Starting small provides scaffolding that builds confidence gradually — growth mindset in action."
      }
    ],
    relatedModelIds: ["zone-of-proximal-development", "feynman-technique", "elaboration"],
    tags: ["learning", "mindset", "psychology", "self-improvement"]
  },
  {
    id: "elaboration",
    categoryId: "learning",
    title: "Elaboration",
    emoji: "🕸️",
    difficulty: 2,
    estimatedMinutes: 6,
    eli5: {
      hook: "The more you connect new information to things you already know, the harder it is to forget.",
      analogy: "Elaboration is like hanging a new ornament on a Christmas tree versus tossing it on the floor. On the floor (rote memorization), it rolls away and gets lost. On the tree (elaboration), it's connected to branches, hooks, and other ornaments — each connection makes it harder to fall off. Every 'why' you ask and every connection you make is another hook holding that knowledge in place.",
      sections: [
        {
          title: "Ask Why, How, and What Else",
          content: "Elaboration means going beyond the bare fact to understand its connections. Don't just memorize 'The heart has four chambers.' Ask: 'WHY four? What would happen with three? HOW does blood flow between them? WHAT ELSE in the body has this kind of pump structure?' Each question weaves the new fact into your existing web of knowledge, making it nearly impossible to forget in isolation."
        },
        {
          title: "Connect to Yourself",
          content: "The most powerful form of elaboration is personal connection. 'The mitochondria is the powerhouse of the cell' is forgettable. 'The mitochondria is like the granola bar I eat before a workout — it converts fuel into energy my cells can actually use' is sticky because it connects to YOUR experience. The more personal and vivid the connection, the stronger the memory."
        }
      ],
      ahaQuote: "A fact in isolation is a leaf in the wind. A fact with connections is a knot in a net.",
      realWorldExample: "Learning that water boils at 100 degrees Celsius — boring and easy to forget. But if you elaborate: 'At sea level, because atmospheric pressure affects boiling point — that's why pasta takes longer to cook in Denver (high altitude, lower pressure, lower boiling point)' — suddenly you've woven it into a web of knowledge about cooking, pressure, and geography."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "elaboration-ex-1",
        question: "Which study approach best demonstrates elaboration?",
        options: [
          "Reading the definition of 'inflation' 10 times",
          "Copying the textbook definition of 'inflation' into notes",
          "Asking 'Why does inflation happen? How does it affect my grocery bill? What's the difference between inflation and deflation?'",
          "Highlighting the word 'inflation' every time it appears in the chapter"
        ],
        correctIndex: 2,
        explanation: "Elaboration involves asking why, how, and connecting to personal experience. The questions create multiple mental hooks that anchor the concept in your existing knowledge."
      },
      {
        type: "true-false",
        id: "elaboration-ex-2",
        statement: "Elaboration is most effective when you connect new information to personal experiences and existing knowledge.",
        correct: true,
        explanation: "Personal connections create the strongest and most durable memory hooks. The more vivid and personally meaningful the connection, the harder the memory is to lose."
      },
      {
        type: "fill-in-blank",
        id: "elaboration-ex-3",
        textBefore: "Elaboration works by creating multiple mental",
        textAfter: "between new information and your existing knowledge network.",
        acceptedAnswers: ["connections", "links", "hooks", "associations"],
        hint: "Think of what holds things together in a web...",
        explanation: "Elaboration creates connections (links, hooks, associations) between new and existing knowledge. More connections mean more retrieval paths and stronger, more durable memories."
      },
      {
        type: "real-world",
        id: "elaboration-ex-4",
        challenge: "Take a fact you recently learned and elaborate on it by asking 3 'why' or 'how' questions and connecting it to something personal.",
        prompts: [
          "What's the fact or concept?",
          "Ask 3 why/how questions about it",
          "How does it connect to your personal life or experience?"
        ],
        exampleResponse: "Fact: Compound interest makes savings grow exponentially. Why questions: (1) Why exponentially instead of linearly? Because interest earns interest on itself. (2) How does the time horizon affect this? Longer = dramatically more growth due to compounding. (3) Why do financial advisors say to start saving young? Because even small amounts compound enormously over 40 years. Personal connection: If I'd invested my first $500 paycheck at 18 instead of buying those sneakers, it would be worth over $5,000 today. That makes it unforgettable."
      }
    ],
    relatedModelIds: ["feynman-technique", "active-recall", "spaced-repetition"],
    tags: ["learning", "memory", "study-skills", "connections"]
  }
];
