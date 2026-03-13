import type { MentalModel } from "../../types/models";

export const creativityModels: MentalModel[] = [
  {
    id: "divergent-convergent",
    categoryId: "creativity",
    title: "Divergent & Convergent Thinking",
    emoji: "💎",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Great ideas come in two phases: first you explode outward, then you laser-focus inward.",
      analogy: "Divergent thinking is like opening every drawer in the house and dumping everything on the floor. Convergent thinking is sorting through the pile and picking the one thing you actually need. You need both — the mess and the cleanup. People who only diverge end up with a million unfinished ideas. People who only converge end up with the first boring solution that came to mind.",
      sections: [
        {
          title: "Phase 1: Go Wide (Divergent)",
          content: "During divergent thinking, quantity beats quality. No idea is too weird, too expensive, or too silly. Write everything down. The whole point is to escape the obvious answers your brain serves up first (those are usually mediocre). The best ideas often come after the 20th suggestion, when your brain stops playing it safe and starts getting genuinely creative."
        },
        {
          title: "Phase 2: Go Deep (Convergent)",
          content: "Once you have a mountain of ideas, switch modes. Now apply judgment, criteria, and constraints. Which ideas are feasible? Which are original? Which solve the real problem? Convergent thinking is analytical and critical — but it must come AFTER divergence, never during. Mixing the two phases kills creativity because criticism murders ideas in their infancy."
        },
        {
          title: "The Cardinal Rule",
          content: "Never diverge and converge at the same time. When brainstorming, ban the phrase 'yes, but...' and replace it with 'yes, and...' Save all judgment for later. This separation is what makes Pixar, IDEO, and every top creative team so productive — they protect the messy idea-generation phase from the sharp knives of evaluation."
        }
      ],
      ahaQuote: "Creativity isn't one skill — it's two opposite skills used in the right order.",
      realWorldExample: "Planning a friend's birthday party. First, spend 10 minutes listing every wild idea: skydiving, escape room, surprise flash mob, picnic on a rooftop, scavenger hunt through the city. Then switch to convergent mode: budget is $200, group size is 8, half the group hates heights. Suddenly the escape room idea rises to the top naturally."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "divergent-convergent-ex-1",
        question: "During a brainstorming session, a colleague says 'That idea would never work because of the budget.' What thinking mode are they applying?",
        options: [
          "Divergent thinking — they're expanding the problem space",
          "Convergent thinking — they're applying judgment and criteria",
          "Lateral thinking — they're approaching it from a different angle",
          "Creative thinking — they're helping refine the idea"
        ],
        correctIndex: 1,
        explanation: "Applying judgment and constraints is convergent thinking. In a brainstorm (divergent phase), this kind of criticism is premature and stifles idea generation."
      },
      {
        type: "true-false",
        id: "divergent-convergent-ex-2",
        statement: "The best brainstorming sessions combine divergent and convergent thinking simultaneously to save time.",
        correct: false,
        explanation: "Mixing the two phases kills creativity. Criticism during idea generation makes people self-censor. The phases must be separated: first generate freely, then evaluate critically."
      },
      {
        type: "scenario",
        id: "divergent-convergent-ex-3",
        scenario: "Your team needs to redesign the company website. You have one hour. The team lead suggests spending 30 minutes listing every possible approach, then 30 minutes narrowing down to the best three.",
        question: "Is this a good approach?",
        options: [
          "No — one hour isn't enough time for creativity",
          "Yes — this cleanly separates divergent and convergent phases",
          "No — you should narrow down while brainstorming to stay efficient",
          "Yes — but only if the boss picks the final idea"
        ],
        correctIndex: 1,
        explanation: "This is textbook divergent-convergent process: dedicated time for wide idea generation followed by dedicated time for critical evaluation. Separating the phases protects creative thinking."
      },
      {
        type: "real-world",
        id: "divergent-convergent-ex-4",
        challenge: "Pick a problem you're currently facing. Set a 5-minute timer and list at least 15 possible solutions — no judgment allowed. Then circle the 3 most promising ones.",
        prompts: [
          "What problem are you working on?",
          "List as many solutions as you can (aim for 15+, no filtering!)",
          "Now switch to convergent mode: which 3 are most feasible and impactful?"
        ],
        exampleResponse: "Problem: I never have time to exercise. After listing 17 ideas (including absurd ones like 'hire a personal trainer to wake me up'), my top 3: (1) 15-minute morning bodyweight routine before showering, (2) walking meetings instead of sitting, (3) bike to the grocery store instead of driving. The wild brainstorm helped me see that I was stuck on 'go to the gym' as the only option."
      }
    ],
    relatedModelIds: ["first-principles", "lateral-thinking", "constraints-creativity"],
    tags: ["creativity", "brainstorming", "ideation", "process"]
  },
  {
    id: "first-principles",
    categoryId: "creativity",
    title: "First Principles Thinking",
    emoji: "🧱",
    difficulty: 3,
    estimatedMinutes: 10,
    eli5: {
      hook: "What if you forgot everything everyone told you and figured it out from scratch?",
      analogy: "First principles thinking is like being a chef instead of a recipe follower. A recipe follower can only make what the recipe says. A chef understands WHY each ingredient is there — salt enhances flavor, fat carries taste, acid brightens — so they can invent entirely new dishes. First principles means breaking something down to its fundamental truths and rebuilding from there.",
      sections: [
        {
          title: "Stop Reasoning by Analogy",
          content: "Most of us think by analogy: 'We should do it this way because that's how everyone else does it' or 'It worked last time, so let's do it again.' This is efficient but limits you to incremental improvements. First principles thinking asks: 'What are the underlying facts? What must be true? What's actually physically possible?' Elon Musk used this to realize batteries don't HAVE to cost $600/kWh — the raw materials only cost $80. The rest was convention."
        },
        {
          title: "The Three-Step Process",
          content: "Step 1: Identify your assumptions ('Batteries are expensive'). Step 2: Break them down to fundamentals ('What are batteries made of? What do those materials actually cost?'). Step 3: Rebuild from the ground up ('If we source materials directly and build our own cells, what's the real cost?'). It takes more effort than copying others, but it's how breakthroughs happen."
        }
      ],
      ahaQuote: "You can't think outside the box if you don't first understand what the box is made of.",
      realWorldExample: "You assume eating healthy is expensive because pre-made health food costs $12 per meal. First principles: What does a nutritious meal actually require? Protein, vegetables, grains. At the grocery store: chicken ($3), rice ($0.50), broccoli ($1) = a healthy meal for $4.50. The assumption was wrong — you were paying for branding and convenience, not nutrition."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "first-principles-ex-1",
        question: "Which of these is an example of first principles thinking?",
        options: [
          "'Our competitors charge $99, so we should charge $89 to undercut them.'",
          "'Let's calculate our actual costs and the value we deliver to determine the right price.'",
          "'Industry standard pricing is $99, so that's what we should charge.'",
          "'Our last product was $79, so let's price this one at $89 since it's slightly better.'"
        ],
        correctIndex: 1,
        explanation: "First principles thinking ignores convention and competitor behavior. Instead, it builds upward from fundamental truths — actual costs and delivered value."
      },
      {
        type: "fill-in-blank",
        id: "first-principles-ex-2",
        textBefore: "First principles thinking requires breaking down a problem to its fundamental",
        textAfter: "and reasoning upward from there, rather than relying on convention or analogy.",
        acceptedAnswers: ["truths", "facts", "components", "elements", "basics"],
        hint: "What can you absolutely not argue with?",
        explanation: "First principles are the foundational truths or facts that cannot be reduced further. From these bedrock facts, you can reconstruct solutions without being constrained by how things have 'always been done.'"
      },
      {
        type: "scenario",
        id: "first-principles-ex-3",
        scenario: "A startup wants to enter the moving industry. Everyone says you need trucks, drivers, and warehouse space — which requires millions in capital.",
        question: "What would a first principles approach look like?",
        options: [
          "Raise millions in venture capital to buy trucks and hire drivers",
          "Ask: 'What does moving actually require?' — answer: transporting items from A to B. Then explore if existing truck owners could be connected with people who need to move",
          "Copy the biggest moving company's business model but charge less",
          "Wait until they can afford the traditional model"
        ],
        correctIndex: 1,
        explanation: "First principles strips away assumptions ('you need to OWN trucks') and asks what's fundamentally needed (transportation from A to B). This thinking led to companies like Lugg and Dolly that connect people with truck owners."
      },
      {
        type: "true-false",
        id: "first-principles-ex-4",
        statement: "First principles thinking is faster than reasoning by analogy and should be used for all decisions.",
        correct: false,
        explanation: "First principles thinking is slower and more mentally demanding. It's best reserved for important decisions where conventional thinking isn't working or where breakthrough innovation is needed. For everyday choices, analogies and heuristics are perfectly fine."
      }
    ],
    relatedModelIds: ["divergent-convergent", "beginners-mind", "lateral-thinking"],
    tags: ["creativity", "innovation", "critical-thinking", "problem-solving"]
  },
  {
    id: "combinatorial-creativity",
    categoryId: "creativity",
    title: "Combinatorial Creativity",
    emoji: "🧬",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Every great invention is just two old ideas that went on a date and had a baby.",
      analogy: "Combinatorial creativity is like a DJ mixing tracks. No DJ creates sound waves from scratch — they take existing songs, loops, and beats and combine them in ways nobody has heard before. A peanut butter cup is just peanut butter + chocolate. An iPhone is a phone + camera + music player + internet browser. The magic isn't in the ingredients — it's in the combination.",
      sections: [
        {
          title: "Nothing Is Truly Original",
          content: "This might sound disappointing, but it's actually liberating: almost every 'original' idea is a novel combination of existing ideas. The printing press combined the wine press with a coin punch. Airbnb combined spare rooms with hotel booking. Once you accept this, creativity becomes less mysterious. You just need to collect more dots so you can connect them in new ways."
        },
        {
          title: "Widen Your Input Diet",
          content: "The best combinatorial thinkers are voracious cross-domain learners. A biologist who reads architecture discovers biomimicry. A musician who studies math creates algorithmic composition. Steve Jobs took a calligraphy class that later gave the Mac beautiful typography. The more diverse your knowledge, the more unique your combinations."
        }
      ],
      ahaQuote: "Creativity isn't creating something from nothing — it's connecting things that haven't been connected before.",
      realWorldExample: "Uber combined three existing things: GPS technology (existed for years), smartphone apps (already everywhere), and the idea of hailing a ride (as old as taxis). None of these were new. But combining them in one seamless experience created a $70 billion company."
    },
    exercises: [
      {
        type: "matching",
        id: "combinatorial-creativity-ex-1",
        instruction: "Match each innovation with the two ideas it combines.",
        pairs: [
          { left: "Podcast", right: "Radio show + on-demand digital download" },
          { left: "Food truck", right: "Restaurant + mobility" },
          { left: "Airbnb", right: "Spare rooms + hotel booking platform" },
          { left: "Audiobook", right: "Book + recorded narration" }
        ],
        explanation: "Each innovation is a combination of existing concepts applied in a new way. Recognizing these combinations helps you see opportunities to create your own novel mashups."
      },
      {
        type: "true-false",
        id: "combinatorial-creativity-ex-2",
        statement: "Truly creative people create ideas from nothing — they don't need existing ideas as inputs.",
        correct: false,
        explanation: "Research consistently shows that creativity is combinatorial. Even the most 'original' thinkers build on existing knowledge and ideas. The key is combining diverse inputs in novel ways."
      },
      {
        type: "multiple-choice",
        id: "combinatorial-creativity-ex-3",
        question: "What's the best way to improve your combinatorial creativity?",
        options: [
          "Focus deeply on one subject until you master it completely",
          "Wait for inspiration to strike naturally",
          "Consume diverse knowledge across multiple unrelated fields",
          "Copy successful people's ideas and improve them slightly"
        ],
        correctIndex: 2,
        explanation: "Diverse knowledge gives you more 'dots' to connect. Cross-pollination between unrelated fields is where the most novel combinations come from."
      },
      {
        type: "real-world",
        id: "combinatorial-creativity-ex-4",
        challenge: "Pick two completely unrelated things from your life (a hobby and a work problem, two different industries, etc.) and brainstorm three ways to combine them into something new.",
        prompts: [
          "What are the two unrelated domains you're combining?",
          "What are 3 possible combinations or mashups?",
          "Which combination is most interesting and why?"
        ],
        exampleResponse: "Domains: Gardening + Project Management. Combinations: (1) An app that manages garden tasks with sprint-style 'growing seasons,' (2) A project management method based on permaculture principles — plant complementary tasks together, (3) A physical garden that visualizes your team's project status with real plants. Number 2 is most interesting — the idea that some tasks 'feed' each other like companion plants could genuinely improve how teams organize work."
      }
    ],
    relatedModelIds: ["divergent-convergent", "beginners-mind", "lateral-thinking"],
    tags: ["creativity", "innovation", "cross-pollination", "ideas"]
  },
  {
    id: "constraints-creativity",
    categoryId: "creativity",
    title: "Constraints Breed Creativity",
    emoji: "📦",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "Give a musician unlimited studio time and they'll tinker forever. Give them one afternoon and they'll record a masterpiece.",
      analogy: "Constraints are like the banks of a river. Without banks, water just spreads into a swamp — no direction, no power. Add narrow banks and suddenly you've got a raging river that can carve canyons and power cities. Creative constraints work the same way: they force your ideas to flow with direction and intensity instead of spreading thin.",
      sections: [
        {
          title: "Why Blank Canvases Are Terrifying",
          content: "Unlimited freedom sounds great but actually paralyzes most people. 'Write about anything!' is harder than 'Write a 6-word story about loss.' Dr. Seuss wrote Green Eggs and Ham after betting he couldn't write a book using only 50 words. Twitter's 140-character limit spawned an entirely new form of communication. Constraints force you to be clever instead of verbose."
        },
        {
          title: "Choosing Your Constraints",
          content: "The best constraints are tight enough to force creativity but loose enough to allow multiple solutions. Time constraints ('Build a prototype by Friday'), resource constraints ('Do it with zero budget'), or format constraints ('Explain it in one sentence') all work beautifully. The key insight: if the problem feels too open-ended, don't remove obstacles — add the right ones."
        }
      ],
      ahaQuote: "Freedom is a blank page. Creativity is what happens when you draw a box on it and say 'work within this.'",
      realWorldExample: "IKEA's constraint is flat-pack shipping. Every piece of furniture must disassemble into a flat box. This 'limitation' forced them to invent incredibly clever designs that are easy to ship, store, and assemble. The constraint didn't limit their creativity — it directed it."
    },
    exercises: [
      {
        type: "scenario",
        id: "constraints-creativity-ex-1",
        scenario: "Your team has been brainstorming a new marketing campaign for two weeks with no results. You have unlimited budget and no deadline.",
        question: "What would likely help the most?",
        options: [
          "Give them even more time and a bigger team",
          "Add constraints: a $500 budget, must launch by Friday, must fit on one page",
          "Hire an external creative agency",
          "Cancel the project and try again next quarter"
        ],
        correctIndex: 1,
        explanation: "Adding constraints forces creative focus. Unlimited time and budget often lead to analysis paralysis. Tight boundaries channel energy into finding clever solutions."
      },
      {
        type: "multiple-choice",
        id: "constraints-creativity-ex-2",
        question: "Why did Twitter's original 140-character limit boost creativity?",
        options: [
          "It made tweets faster to read",
          "It forced users to express ideas concisely and cleverly",
          "It saved Twitter money on server storage",
          "Users preferred shorter content"
        ],
        correctIndex: 1,
        explanation: "The character limit forced users to be concise, witty, and creative with language. It spawned new forms of expression that wouldn't have emerged with unlimited space."
      },
      {
        type: "true-false",
        id: "constraints-creativity-ex-3",
        statement: "Removing all constraints from a creative project will produce the most innovative results.",
        correct: false,
        explanation: "Paradoxically, total freedom often produces mediocre results because it leads to decision paralysis. The right constraints channel creative energy and force novel solutions."
      },
      {
        type: "fill-in-blank",
        id: "constraints-creativity-ex-4",
        textBefore: "Dr. Seuss wrote 'Green Eggs and Ham' after accepting a bet that he couldn't write a children's book using only",
        textAfter: "different words.",
        acceptedAnswers: ["50", "fifty"],
        hint: "It's a surprisingly small number for an entire book...",
        explanation: "The publisher bet Dr. Seuss he couldn't write a book with only 50 unique words. This extreme constraint produced one of the best-selling children's books of all time."
      }
    ],
    relatedModelIds: ["divergent-convergent", "first-principles", "lateral-thinking"],
    tags: ["creativity", "constraints", "problem-solving", "productivity"]
  },
  {
    id: "incubation-effect",
    categoryId: "creativity",
    title: "Incubation Effect",
    emoji: "🥚",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "Ever notice how your best ideas come in the shower, on a walk, or right before you fall asleep?",
      analogy: "The incubation effect is like putting bread dough in a warm place and walking away. You can't punch and knead it into rising faster — it needs time and warmth to do its thing. Your brain works the same way with tough problems. After you load it up with information and effort, stepping away lets your unconscious mind make connections your focused mind keeps missing.",
      sections: [
        {
          title: "Why Stepping Away Works",
          content: "When you focus hard on a problem, you often get stuck in mental ruts — trying the same approaches repeatedly. When you step away, your brain doesn't stop working. Your default mode network (the brain's 'screensaver') continues processing in the background, making loose associations and testing combinations that your focused mind would reject as 'too weird.' This is why breakthroughs often come during relaxation."
        },
        {
          title: "How to Incubate on Purpose",
          content: "Step 1: Work hard on the problem first (incubation doesn't work without initial effort). Step 2: Step away and do something unrelated — walk, shower, garden, nap. Step 3: Keep a capture tool handy (phone, notebook) because ideas will arrive without warning. The key is that you can't just procrastinate and call it incubation. The hard work phase is non-negotiable."
        }
      ],
      ahaQuote: "Your unconscious mind is a better problem-solver than your conscious mind — but only if you give it a loaded assignment first.",
      realWorldExample: "You've been staring at a bug in your code for two hours. Nothing works. You go for a walk around the block. Halfway through, it hits you — you were checking the wrong variable the whole time. You rush back and fix it in 30 seconds. That's incubation."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "incubation-effect-ex-1",
        question: "What must happen BEFORE incubation can be effective?",
        options: [
          "You must meditate to clear your mind",
          "You must deeply engage with the problem first",
          "You must sleep for at least 8 hours",
          "You must discuss the problem with someone else"
        ],
        correctIndex: 1,
        explanation: "Incubation only works after you've loaded your brain with the problem through focused effort. Without the initial hard work, stepping away is just procrastination."
      },
      {
        type: "true-false",
        id: "incubation-effect-ex-2",
        statement: "Incubation means you should avoid working hard on problems and wait for inspiration to come naturally.",
        correct: false,
        explanation: "Incubation requires intense focused work first — that's what gives your unconscious mind material to work with. The stepping-away phase only works because of the loading phase before it."
      },
      {
        type: "scenario",
        id: "incubation-effect-ex-3",
        scenario: "You've been writing a presentation for 3 hours but can't figure out the right opening. You're getting frustrated and the words aren't coming.",
        question: "What should you do?",
        options: [
          "Push through — dedication always wins",
          "Take a 20-minute walk, then come back with fresh eyes",
          "Scrap the presentation and start over tomorrow",
          "Ask someone else to write the opening for you"
        ],
        correctIndex: 1,
        explanation: "After 3 hours of focused work, your brain is loaded with the material. A short break activates the incubation effect — your unconscious mind can find connections your frustrated conscious mind is missing."
      },
      {
        type: "fill-in-blank",
        id: "incubation-effect-ex-4",
        textBefore: "The brain network responsible for background processing during incubation is called the",
        textAfter: "network.",
        acceptedAnswers: ["default mode", "default-mode", "DMN"],
        hint: "It's the brain's 'screensaver mode'...",
        explanation: "The default mode network (DMN) activates when you're not focused on external tasks. It makes loose associations and connections — which is why insights often arrive during daydreaming, showering, or walking."
      }
    ],
    relatedModelIds: ["divergent-convergent", "combinatorial-creativity", "lateral-thinking"],
    tags: ["creativity", "neuroscience", "productivity", "problem-solving"]
  },
  {
    id: "beginners-mind",
    categoryId: "creativity",
    title: "Beginner's Mind (Shoshin)",
    emoji: "🌱",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "A 5-year-old would ask 'Why?' about things you stopped questioning years ago — and that's exactly why they'd solve problems you can't.",
      analogy: "Beginner's mind is like visiting a city for the first time versus living there for 20 years. Tourists see the amazing architecture, the weird street layouts, the charming cafe on the corner. Locals walk past all of it every day without noticing. Expertise is powerful but it comes with blindness — you stop seeing what's right in front of you because it became 'normal.'",
      sections: [
        {
          title: "The Expert's Curse",
          content: "When you become an expert, you develop mental shortcuts. These save time but also create blind spots. You assume things 'have to be' a certain way because that's how you've always known them. A beginner has no such assumptions. They ask 'But why?' about things experts consider obvious — and sometimes that question leads to breakthroughs the expert would never find."
        },
        {
          title: "How to Cultivate It",
          content: "Practice saying 'I don't know' even when you think you do. Ask 'What if we were starting from scratch?' Question every 'that's just how it works' in your field. Invite outsiders to critique your work — their 'naive' questions might be genius. The goal isn't to abandon expertise; it's to temporarily set it aside so you can see with fresh eyes."
        }
      ],
      ahaQuote: "In the beginner's mind there are many possibilities. In the expert's mind there are few. — Shunryu Suzuki",
      realWorldExample: "A hospital brought in a Formula 1 pit crew to observe their patient handoff process. The race mechanics — complete beginners at medicine — immediately spotted communication failures that doctors had accepted as 'normal' for decades. Patient handoff errors dropped dramatically after implementing the pit crew's suggestions."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "beginners-mind-ex-1",
        question: "Why can beginners sometimes solve problems that experts can't?",
        options: [
          "Beginners are generally smarter than experts",
          "Beginners lack the assumptions and blind spots that expertise creates",
          "Beginners try harder because they have something to prove",
          "Experts are lazy and don't bother trying"
        ],
        correctIndex: 1,
        explanation: "Expertise creates mental shortcuts and assumptions that can become blind spots. Beginners question everything because nothing is 'obvious' to them yet."
      },
      {
        type: "true-false",
        id: "beginners-mind-ex-2",
        statement: "Beginner's mind means you should ignore your expertise and pretend you know nothing.",
        correct: false,
        explanation: "Beginner's mind doesn't mean abandoning expertise. It means temporarily suspending assumptions so you can question things you normally take for granted, then applying your expertise to the fresh perspective."
      },
      {
        type: "scenario",
        id: "beginners-mind-ex-3",
        scenario: "A software company has been building their product the same way for 10 years. They hire a new graduate who asks, 'Why do users have to go through 7 steps to complete this task?'",
        question: "What does this situation illustrate?",
        options: [
          "The new hire is inexperienced and doesn't understand the product",
          "The new hire's beginner's mind spotted complexity that experts stopped questioning",
          "The 7-step process is probably necessary for technical reasons",
          "New hires should learn the system before questioning it"
        ],
        correctIndex: 1,
        explanation: "The team's expertise made the 7-step process feel 'normal.' The beginner's fresh eyes immediately questioned what everyone else had stopped seeing — which is exactly what beginner's mind is about."
      },
      {
        type: "real-world",
        id: "beginners-mind-ex-4",
        challenge: "Pick something you're an 'expert' at — your daily workflow, your commute, your morning routine. Look at it as if you're doing it for the very first time. What seems weird, inefficient, or unnecessarily complicated?",
        prompts: [
          "What routine or process are you examining with fresh eyes?",
          "What would a complete beginner question about it?",
          "What's one change you could make based on this fresh perspective?"
        ],
        exampleResponse: "I examined my email routine. A beginner would ask: 'Why do you check email 30 times a day? Do you actually need to respond that fast?' Honestly, no. Only 2-3 emails per day are truly urgent. I could batch-check at 9am, 1pm, and 5pm and save an hour of context-switching daily. My 'expertise' at email made me blind to how wasteful my habit had become."
      }
    ],
    relatedModelIds: ["first-principles", "lateral-thinking", "divergent-convergent"],
    tags: ["creativity", "mindset", "innovation", "perspective"]
  },
  {
    id: "lateral-thinking",
    categoryId: "creativity",
    title: "Lateral Thinking",
    emoji: "🔀",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "You can't dig a hole in a different place by digging the same hole deeper.",
      analogy: "Vertical thinking is digging one hole deeper. Lateral thinking is stopping, looking around, and saying 'Maybe I should dig over THERE instead.' It's like trying to get into a locked room — vertical thinking picks the lock, lateral thinking checks if there's an open window, goes through the ceiling, or asks 'Do I even need to be in that room?'",
      sections: [
        {
          title: "Jumping the Tracks",
          content: "Edward de Bono coined lateral thinking as the opposite of logical, step-by-step reasoning. Instead of following the obvious path forward, you deliberately jump sideways. Techniques include: random entry (pick a random word and connect it to your problem), provocation ('What if we charged customers NOTHING?'), and reversal ('What if the customer came to us instead of us going to them?')."
        },
        {
          title: "Why Logic Isn't Enough",
          content: "Logic can only work with the information and framework you already have. It's like rearranging furniture in a room — you might find a better layout, but you'll never discover a new room. Lateral thinking breaks the frame entirely. It asks: 'What assumptions am I making? What if the opposite were true? What would a completely different industry do with this problem?'"
        }
      ],
      ahaQuote: "Logic gets you from A to B. Lateral thinking gets you to places the alphabet hasn't invented yet.",
      realWorldExample: "A building's elevators were too slow and tenants complained. The logical solution: faster elevators (expensive). The lateral solution: install mirrors next to the elevators. People stopped complaining — not because the wait was shorter, but because they were too busy checking their reflection to notice the time. The real problem wasn't speed; it was boredom."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "lateral-thinking-ex-1",
        question: "An office building had a problem with employees arriving late because the parking lot was always full. Which is the lateral thinking solution?",
        options: [
          "Build a bigger parking lot",
          "Fine employees who arrive late",
          "Offer incentives for carpooling or biking, reducing cars needed",
          "Hire a parking lot attendant to optimize spacing"
        ],
        correctIndex: 2,
        explanation: "Building bigger or optimizing existing parking is vertical thinking (same approach, more/better). Lateral thinking reframes: the problem isn't the lot size, it's the number of cars. Reducing cars is a sideways leap."
      },
      {
        type: "true-false",
        id: "lateral-thinking-ex-2",
        statement: "Lateral thinking is meant to replace logical thinking entirely.",
        correct: false,
        explanation: "Lateral thinking complements logical thinking. You use lateral thinking to find new approaches and angles, then apply logical thinking to evaluate and implement the best ones."
      },
      {
        type: "scenario",
        id: "lateral-thinking-ex-3",
        scenario: "A hospital wants to reduce the time patients spend waiting in the emergency room. They've already optimized staffing, triage, and workflow as much as possible.",
        question: "What's a lateral thinking approach?",
        options: [
          "Hire even more staff",
          "Reduce the number of patients by raising prices",
          "Make the waiting experience better — comfortable seats, entertainment, updates on wait time — so patients feel the wait is shorter",
          "Force doctors to work faster"
        ],
        correctIndex: 2,
        explanation: "Instead of reducing actual wait time (vertical thinking, already optimized), lateral thinking reframes: the problem is the experience of waiting, not the wait itself. Improving the experience solves the complaint without changing the timeline."
      },
      {
        type: "fill-in-blank",
        id: "lateral-thinking-ex-4",
        textBefore: "Lateral thinking was coined by Edward de",
        textAfter: "as an alternative to traditional step-by-step logical reasoning.",
        acceptedAnswers: ["Bono", "bono"],
        hint: "This psychologist and author wrote 'Six Thinking Hats'...",
        explanation: "Edward de Bono introduced the concept of lateral thinking in 1967, contrasting it with traditional 'vertical' logical thinking and providing specific techniques for creative problem-solving."
      }
    ],
    relatedModelIds: ["first-principles", "divergent-convergent", "beginners-mind"],
    tags: ["creativity", "problem-solving", "innovation", "reframing"]
  }
];
