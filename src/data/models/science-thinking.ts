import type { MentalModel } from "../../types/models";

export const scienceThinkingModels: MentalModel[] = [
  {
    id: "entropy",
    categoryId: "science-thinking",
    title: "Entropy",
    emoji: "🔥",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "Everything in the universe is slowly falling apart — and that's actually useful to know.",
      analogy:
        "Imagine your bedroom. You spend 20 minutes making it perfectly clean. Now leave it alone for a week. Without any effort, it gets messy all by itself. Nobody snuck in and threw clothes on the floor — it just happened. That's entropy: things naturally move from ordered to disordered unless you put energy into keeping them tidy.",
      sections: [
        {
          title: "Why Things Fall Apart",
          content:
            "There are way more ways for things to be messy than to be neat. Think of a deck of cards — there's exactly ONE way they can be in perfect order (Ace through King, suit by suit), but millions of ways they can be shuffled randomly. So if you just let things happen, disorder wins by sheer numbers. This isn't bad luck — it's math.",
        },
        {
          title: "Fighting Entropy Takes Energy",
          content:
            "Your fridge fights entropy by pumping heat out to keep food cold. Companies fight entropy by having meetings, processes, and managers. Relationships fight entropy through regular communication and effort. The moment you stop investing energy, things drift toward chaos. The trick is knowing WHICH battles against entropy are worth fighting.",
        },
        {
          title: "Using Entropy to Your Advantage",
          content:
            "Once you see entropy everywhere, you stop being surprised when things degrade. Instead, you build maintenance into your plans from day one. Great systems aren't the ones that never break — they're the ones designed to be easily repaired.",
        },
      ],
      ahaQuote:
        "Nothing stays organized for free. If you're not actively maintaining it, it's actively decaying.",
      realWorldExample:
        "You launch a beautifully organized project wiki at work. Six months later, nobody can find anything because pages were added randomly, links broke, and nobody maintained the structure. Entropy won — not because anyone was careless, but because disorder is the default.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "entropy-ex-1",
        question:
          "Your company's codebase has become increasingly messy over two years despite no one intentionally writing bad code. What mental model best explains this?",
        options: [
          "The developers are incompetent",
          "Entropy — disorder increases naturally without deliberate effort to maintain order",
          "The codebase was poorly designed from the start",
          "Too many people are working on it",
        ],
        correctIndex: 1,
        explanation:
          "Entropy tells us that systems naturally drift toward disorder over time. Without deliberate refactoring and maintenance energy, code quality degrades — not because anyone is doing anything wrong, but because there are far more ways to be messy than organized.",
      },
      {
        type: "true-false",
        id: "entropy-ex-2",
        statement:
          "If you design a perfect system, entropy means it will eventually degrade no matter what you do.",
        correct: false,
        explanation:
          "While entropy means things naturally tend toward disorder, you CAN fight it by continuously investing energy into maintenance and order. The key insight is that maintenance isn't optional — it's a permanent cost of having organized systems.",
      },
      {
        type: "scenario",
        id: "entropy-ex-3",
        scenario:
          "A startup has a perfectly organized Slack workspace with clear channels and naming conventions. The CEO is debating whether to hire a part-time operations person to maintain the system or save the money since 'it's already set up perfectly.'",
        question: "What would an entropy-aware advisor recommend?",
        options: [
          "Save the money — the system is already well-designed",
          "Hire the person — without active maintenance, the organization will inevitably degrade",
          "Wait until it gets messy, then do a big cleanup",
          "Just send a reminder email about the rules every quarter",
        ],
        correctIndex: 1,
        explanation:
          "Entropy teaches us that order requires ongoing energy investment. A perfectly organized system today will be chaotic tomorrow without maintenance. The operations hire is fighting entropy — and that fight never ends.",
      },
      {
        type: "fill-in-blank",
        id: "entropy-ex-4",
        textBefore: "Entropy tells us there are far more ways for things to be",
        textAfter:
          "than organized, so disorder is the natural direction of change.",
        acceptedAnswers: ["disordered", "messy", "chaotic", "disorganized"],
        hint: "Think about your bedroom after a week without cleaning",
        explanation:
          "The fundamental insight of entropy is that disordered states vastly outnumber ordered ones. A shuffled deck has millions of possible arrangements but only one 'perfect order.' This mathematical reality is why things naturally tend toward disorder.",
      },
    ],
    relatedModelIds: ["feedback-loops", "inertia", "equilibrium"],
    tags: ["physics", "maintenance", "decay", "order", "chaos"],
  },
  {
    id: "feedback-loops",
    categoryId: "science-thinking",
    title: "Feedback Loops",
    emoji: "🔄",
    difficulty: 1,
    estimatedMinutes: 7,
    eli5: {
      hook: "Some snowballs roll downhill and get bigger. Others melt. The difference changes everything.",
      analogy:
        "Think of a microphone pointed at a speaker. Sound goes into the mic, comes out the speaker louder, goes back into the mic, comes out EVEN louder — until you get that awful screech. That's a positive feedback loop: the output feeds back in and amplifies itself. Now imagine a thermostat — when the room gets too hot, it turns OFF the heater, which cools the room, which turns the heater back ON. It keeps things stable. That's a negative feedback loop.",
      sections: [
        {
          title: "Positive Loops: The Snowball Effect",
          content:
            "Positive doesn't mean good — it means MORE. A popular restaurant gets good reviews, which brings more customers, which generates more reviews. A bank run works the same way: one person withdraws money, which scares others into withdrawing, which scares even more people. Positive loops are the engine behind both viral success and catastrophic collapse.",
        },
        {
          title: "Negative Loops: The Balancing Act",
          content:
            "Negative doesn't mean bad — it means BALANCING. When you're hungry, you eat, which makes you not hungry, which makes you stop eating. Your body temperature, blood sugar, and mood all have negative feedback loops keeping them in check. These loops are why most things in nature stay within a range rather than going to infinity.",
        },
      ],
      ahaQuote:
        "Before trying to change a result, find the loop that's producing it. Fix the loop, fix everything.",
      realWorldExample:
        "You post a video online that gets a few likes. The platform's algorithm shows it to more people because it's getting engagement, which generates more likes, which makes the algorithm push it harder. Your video goes viral — not because it was 10x better than your other videos, but because a positive feedback loop kicked in.",
    },
    exercises: [
      {
        type: "matching",
        id: "feedback-loops-ex-1",
        instruction:
          "Match each scenario to whether it describes a positive (amplifying) or negative (balancing) feedback loop.",
        pairs: [
          {
            left: "A thermostat turns off heating when the room is warm enough",
            right: "Negative (balancing) loop",
          },
          {
            left: "More users on a social network attract even more users",
            right: "Positive (amplifying) loop",
          },
          {
            left: "Feeling anxious about a test makes you study poorly, which increases anxiety",
            right: "Positive (amplifying) loop",
          },
          {
            left: "When predators eat too many prey, predators starve and prey populations recover",
            right: "Negative (balancing) loop",
          },
        ],
        explanation:
          "Positive loops amplify change (things accelerate in one direction), while negative loops resist change (things return toward a set point). Positive doesn't mean good and negative doesn't mean bad — they describe the direction of the feedback.",
      },
      {
        type: "scenario",
        id: "feedback-loops-ex-2",
        scenario:
          "A new coffee shop notices that on busy days, the wait time increases, which causes some customers to leave, which reduces the wait time, which brings customers back.",
        question: "What type of feedback loop is this?",
        options: [
          "A positive feedback loop driving growth",
          "A negative feedback loop maintaining balance",
          "Not a feedback loop at all",
          "A broken feedback loop",
        ],
        correctIndex: 1,
        explanation:
          "This is a negative (balancing) feedback loop. When things go too far in one direction (too busy), the system self-corrects (customers leave, reducing wait). This keeps the shop at a natural equilibrium of customers.",
      },
      {
        type: "true-false",
        id: "feedback-loops-ex-3",
        statement:
          "A positive feedback loop always leads to a good outcome.",
        correct: false,
        explanation:
          "'Positive' in feedback loops means amplifying, not beneficial. A debt spiral is a positive feedback loop — you borrow to pay interest, which increases debt, which increases interest. The loop is 'positive' (self-reinforcing) but the outcome is terrible.",
      },
      {
        type: "real-world",
        id: "feedback-loops-ex-4",
        challenge:
          "Identify one positive and one negative feedback loop currently operating in your own life. For each, describe the cycle and whether the outcome is helping or hurting you.",
        prompts: [
          "What is a behavior or situation that seems to be accelerating or intensifying?",
          "What is something in your life that stays roughly stable despite disturbances?",
          "For each loop, trace the full cycle: what feeds back into what?",
        ],
        exampleResponse:
          "Positive loop (helping): I started exercising, which gave me more energy, which made me more productive at work, which reduced stress, which made me sleep better, which gave me more energy to exercise. Negative loop (stabilizing): My monthly budget — when I overspend one week, I feel the pinch and cut back the next week, keeping spending roughly consistent.",
      },
    ],
    relatedModelIds: ["entropy", "second-order-effects", "emergence"],
    tags: [
      "systems",
      "amplification",
      "balance",
      "cycles",
      "self-reinforcing",
    ],
  },
  {
    id: "inertia",
    categoryId: "science-thinking",
    title: "Inertia",
    emoji: "🪨",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "Things that are moving keep moving. Things that are stuck keep being stuck. Physics knew about procrastination before we did.",
      analogy:
        "Imagine pushing a heavy shopping cart. Getting it rolling from a standstill is HARD — you really have to lean into it. But once it's moving? You can keep it going with just a finger. That's inertia: things resist changing what they're currently doing, whether that's sitting still or barreling forward.",
      sections: [
        {
          title: "Starting Is the Hardest Part",
          content:
            "The reason starting a new habit, project, or conversation feels so difficult isn't weakness — it's inertia. You're trying to change from 'at rest' to 'in motion,' and that takes the most force. This is why the advice 'just do it for 2 minutes' works so well. You're not trying to run a marathon — you're just trying to overcome the initial resistance. Once moving, momentum helps.",
        },
        {
          title: "Momentum Is a Double-Edged Sword",
          content:
            "A company that's been doing things one way for 20 years has massive inertia. That's great if they're heading in the right direction — they're nearly unstoppable. But if the market shifts and they need to turn? That same inertia becomes an anchor. Resistance to change isn't always stubbornness — sometimes it's just physics.",
        },
      ],
      ahaQuote:
        "The hardest part of any journey is the first step. After that, you're just maintaining momentum.",
      realWorldExample:
        "You've been meaning to start going to the gym for months. The first visit feels impossible — finding the gym, signing up, figuring out what to do. But after two weeks of going, it feels weird NOT to go. Your inertia flipped from 'at rest' to 'in motion,' and now stopping would take effort.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "inertia-ex-1",
        question:
          "Why do large corporations often fail to adapt to new technology even when they see it coming?",
        options: [
          "Their leaders aren't smart enough",
          "They don't have enough money to invest",
          "Organizational inertia — the bigger the object in motion, the harder it is to change direction",
          "They're intentionally ignoring the change",
        ],
        correctIndex: 2,
        explanation:
          "Large organizations have massive inertia — thousands of employees, established processes, existing customer expectations, and sunk costs all resist change. Just like a freight train can see the curve ahead but can't turn as quickly as a bicycle, big companies struggle to pivot despite seeing the need.",
      },
      {
        type: "fill-in-blank",
        id: "inertia-ex-2",
        textBefore:
          "According to inertia, the most energy is required to overcome the initial",
        textAfter: "and get something moving from a standstill.",
        acceptedAnswers: [
          "resistance",
          "friction",
          "static friction",
          "barrier",
        ],
        hint: "Think about how hard it is to push a heavy object from a dead stop versus keeping it rolling",
        explanation:
          "Inertia means the greatest force is needed at the very beginning — to overcome the resistance of being at rest. Once moving, much less energy is needed to maintain motion. This is why 'just start' is genuinely powerful advice.",
      },
      {
        type: "true-false",
        id: "inertia-ex-3",
        statement:
          "Inertia only applies to things that are stationary — once something is moving, inertia no longer matters.",
        correct: false,
        explanation:
          "Inertia applies equally to things in motion. A moving object resists STOPPING just as much as a stationary object resists STARTING. This is why bad habits are hard to break (they have momentum) and why successful companies can struggle to change direction.",
      },
      {
        type: "scenario",
        id: "inertia-ex-4",
        scenario:
          "A friend has been wanting to learn Spanish for a year but can't seem to start. They keep saying they'll begin 'when they have more time.'",
        question:
          "Using the concept of inertia, what's the best advice you could give?",
        options: [
          "Wait until summer when they'll have more free time",
          "Start with just 5 minutes a day on an app — the goal is to overcome initial resistance, not to become fluent immediately",
          "Sign up for an expensive course so they feel committed",
          "Find a study partner to hold them accountable",
        ],
        correctIndex: 1,
        explanation:
          "Inertia tells us that the hardest part is going from zero to any movement at all. The 5-minute approach minimizes the force needed to overcome that initial resistance. Once the habit is in motion (even a tiny motion), inertia works FOR you — it's easier to increase from 5 to 15 minutes than to start from zero.",
      },
    ],
    relatedModelIds: [
      "entropy",
      "activation-energy",
      "habit-loop",
      "critical-mass",
    ],
    tags: ["momentum", "resistance", "starting", "habits", "change"],
  },
  {
    id: "critical-mass",
    categoryId: "science-thinking",
    title: "Critical Mass",
    emoji: "💥",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "One grain of sand on a pile does nothing. But one specific grain causes the whole avalanche.",
      analogy:
        "Think of filling a balloon with water. Drip, drip, drip — nothing much happens. The balloon stretches a little more each time, but it looks basically the same. Then one more drip and BOOM — it bursts everywhere. The last drop wasn't special. But the balloon had reached critical mass — the point where one tiny addition triggers a massive change.",
      sections: [
        {
          title: "The Tipping Point",
          content:
            "Critical mass is why things seem to happen 'suddenly' even though they were building up slowly. A social media platform is useless with 10 users, boring with 1,000, interesting with 100,000, and then ESSENTIAL with a million. Nothing dramatic changed between any two days — but crossing the critical mass threshold transformed it from a toy to a utility.",
        },
        {
          title: "Why It Matters for You",
          content:
            "When you're learning a skill, building an audience, or growing a business, progress feels painfully slow at first. You're adding drops to the balloon. The temptation is to quit because 'nothing is happening.' But if you understand critical mass, you know that invisible buildup IS progress — you just haven't hit the threshold yet.",
        },
      ],
      ahaQuote:
        "The fact that nothing visible is happening doesn't mean nothing is happening. You might be one drop away from the breakthrough.",
      realWorldExample:
        "A newsletter writer publishes weekly for 18 months and grows from 0 to 500 subscribers. Feels painfully slow. Then in month 19, a few of those 500 subscribers share it widely, and it jumps to 5,000 in a month. The content quality didn't change — the audience just hit critical mass where organic sharing became self-sustaining.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "critical-mass-ex-1",
        question:
          "A new social app has 50,000 users but feels 'dead' because not enough people in any one city use it. What concept explains what the app needs?",
        options: [
          "Better marketing",
          "More features",
          "Critical mass — it needs enough users in concentrated areas to become useful",
          "Lower prices",
        ],
        correctIndex: 2,
        explanation:
          "The app needs critical mass — not just total users, but enough users in specific contexts (cities, friend groups) to become valuable. This is why many social apps launch city-by-city rather than globally. 50,000 users spread across 1,000 cities means only 50 per city, which is below critical mass for most social experiences.",
      },
      {
        type: "true-false",
        id: "critical-mass-ex-2",
        statement:
          "If you haven't seen results after working on something for a long time, it means your approach is wrong.",
        correct: false,
        explanation:
          "Critical mass teaches us that many systems require sustained input before producing visible results. Like heating water — it absorbs energy for a long time before suddenly boiling at 100°C. Lack of visible results doesn't necessarily mean failure; you might be building toward a critical mass threshold.",
      },
      {
        type: "scenario",
        id: "critical-mass-ex-3",
        scenario:
          "A protest movement has been slowly growing for months with small gatherings of 50-100 people. Suddenly, after a triggering event, 10,000 people show up to the next rally and it becomes national news.",
        question:
          "How does critical mass explain this 'sudden' explosion?",
        options: [
          "The triggering event was so shocking it changed everyone's mind overnight",
          "The months of small gatherings built an infrastructure and willing base that was just waiting for a catalyst to push past the critical mass threshold",
          "Social media algorithms randomly amplified it",
          "10,000 people is not actually that significant",
        ],
        correctIndex: 1,
        explanation:
          "The movement had been slowly accumulating supporters, networks, and organizational capacity — like drops filling a balloon. The triggering event was just the final drop. Without the months of invisible buildup, the same trigger would have produced a much smaller response.",
      },
      {
        type: "fill-in-blank",
        id: "critical-mass-ex-4",
        textBefore: "Critical mass is the",
        textAfter:
          "at which a slow buildup suddenly produces a dramatic, often irreversible change.",
        acceptedAnswers: [
          "threshold",
          "tipping point",
          "point",
          "moment",
          "level",
        ],
        hint: "Think of the specific point at which a water balloon finally bursts",
        explanation:
          "Critical mass is all about thresholds — the specific point where quantity transforms into a qualitative change. Below the threshold, adding more input seems to produce nothing. At the threshold, everything changes at once.",
      },
    ],
    relatedModelIds: [
      "inertia",
      "feedback-loops",
      "activation-energy",
      "emergence",
    ],
    tags: [
      "tipping point",
      "threshold",
      "accumulation",
      "network effects",
      "momentum",
    ],
  },
  {
    id: "equilibrium",
    categoryId: "science-thinking",
    title: "Equilibrium",
    emoji: "⚖️",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "The universe is lazy. It always finds the easiest place to sit down and stay.",
      analogy:
        "Put a marble in a bowl. No matter where you drop it, it rolls around and eventually settles at the bottom. Push it up the side, and it rolls right back down. That resting point at the bottom is equilibrium — the stable state where all forces balance out and nothing is pushing to change anymore.",
      sections: [
        {
          title: "Stable vs. Unstable Equilibrium",
          content:
            "Balance a ball on top of a hill (unstable equilibrium) — the slightest breeze sends it rolling away forever. Put it in a valley (stable equilibrium) — push it and it rolls right back. In life, some situations naturally self-correct when disturbed (your body temperature, market prices), while others collapse at the first nudge (a Jenga tower, a lie). Knowing which type you're in changes everything about your strategy.",
        },
        {
          title: "Disrupting Equilibrium on Purpose",
          content:
            "Sometimes the current equilibrium is bad — a company stuck in mediocrity, a relationship stuck in a rut. These situations are stable (no one's actively pushing for change), but that stability isn't the same as success. Great leaders sometimes deliberately disrupt equilibrium to force a system into a better one. The transition is messy, but the new resting point is higher.",
        },
      ],
      ahaQuote:
        "Stable doesn't mean good. A system can be perfectly balanced and perfectly terrible at the same time.",
      realWorldExample:
        "Two gas stations across the street from each other both charge $3.50 per gallon. Neither wants to lower prices (they'd lose money) or raise them (they'd lose customers). They've reached an equilibrium — a stable state neither side wants to disrupt. If a third station opens nearby with lower prices, the old equilibrium breaks and they must find a new one.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "equilibrium-ex-1",
        question:
          "A market has three competing coffee shops that all charge roughly the same price and split customers evenly. What kind of equilibrium is this?",
        options: [
          "Unstable — it could collapse at any moment",
          "Stable — small changes (like one shop having a slow day) don't permanently alter the balance",
          "Not an equilibrium because the shops are competing",
          "A false equilibrium created by price-fixing",
        ],
        correctIndex: 1,
        explanation:
          "This is a stable equilibrium (specifically, a Nash equilibrium). If one shop raises prices, customers shift to competitors, punishing the change. If one lowers prices, margins suffer. Small disturbances self-correct, keeping the system balanced.",
      },
      {
        type: "true-false",
        id: "equilibrium-ex-2",
        statement:
          "If a system is in equilibrium, you should always try to maintain it because equilibrium means things are working well.",
        correct: false,
        explanation:
          "Equilibrium just means balanced — it doesn't mean optimal. A person who is unemployed and has stopped looking for work is in a stable equilibrium (no force pushing them to change), but it's not a good state. Sometimes you need to deliberately disrupt a bad equilibrium to reach a better one.",
      },
      {
        type: "scenario",
        id: "equilibrium-ex-3",
        scenario:
          "A team has fallen into a pattern where no one speaks up in meetings, the manager makes all decisions, and everyone quietly complains afterward. The team is stable but underperforming.",
        question:
          "How would you describe and address this situation using equilibrium thinking?",
        options: [
          "The team is in an unstable equilibrium — it will fix itself",
          "The team is in a stable but suboptimal equilibrium — a deliberate disruption (like changing meeting format or having a candid conversation) is needed to reach a better equilibrium",
          "This isn't an equilibrium because people are unhappy",
          "Just replace the manager and things will fix themselves",
        ],
        correctIndex: 1,
        explanation:
          "This is a classic case of a stable but bad equilibrium. The status quo is self-reinforcing (nobody speaks up because nobody else does). Breaking out requires a deliberate disruption — changing the structure so the system can settle into a new, better equilibrium where participation is the default.",
      },
      {
        type: "real-world",
        id: "equilibrium-ex-4",
        challenge:
          "Identify a 'bad equilibrium' in your life — a situation that's stable but not serving you well. Then brainstorm what kind of disruption could shift you to a better equilibrium.",
        prompts: [
          "What's a situation in your life that feels stuck but stable?",
          "Why does this equilibrium persist — what forces keep it balanced?",
          "What would need to change to disrupt this equilibrium?",
          "What would a better equilibrium look like?",
        ],
        exampleResponse:
          "Bad equilibrium: I eat takeout every night because I'm tired after work, which makes me feel sluggish, which makes cooking feel harder. It's stable because the cycle reinforces itself. Disruption: Meal prep on Sundays when I have energy. New equilibrium: Healthy meals are the easiest option because they're already made, so I default to eating well instead of ordering out.",
      },
    ],
    relatedModelIds: ["entropy", "feedback-loops", "inertia"],
    tags: [
      "balance",
      "stability",
      "systems",
      "steady state",
      "disruption",
    ],
  },
  {
    id: "activation-energy",
    categoryId: "science-thinking",
    title: "Activation Energy",
    emoji: "⚡",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "A match can start a forest fire — but first, someone has to strike it.",
      analogy:
        "Think of a boulder sitting at the top of a hill. It WANTS to roll down — gravity is ready to do all the work. But it won't move until someone gives it that first push. That initial push is the activation energy: the upfront effort needed to start a process that then sustains itself. The bigger the boulder, the harder the initial push — but once it's rolling, it might not need any more help.",
      sections: [
        {
          title: "Why Good Things Don't Start Themselves",
          content:
            "You know that exercise makes you feel great. Studying leads to better grades. Cold-calling leads to sales. So why don't you do them automatically? Because each one requires activation energy — an upfront cost of effort, discomfort, or willpower before the benefits kick in. Understanding this reframes procrastination: you're not lazy, you're facing an activation energy barrier.",
        },
        {
          title: "Lowering the Barrier",
          content:
            "Smart people don't rely on willpower to overcome activation energy — they reduce it. Sleep in your gym clothes. Put your guitar next to the couch. Open your laptop to the document you need to write. Every reduction in activation energy makes it more likely the reaction (your productive behavior) will actually fire. Catalysts in chemistry do the same thing — they don't add energy, they lower the barrier.",
        },
      ],
      ahaQuote:
        "Don't try to be more disciplined. Try to make the first step stupidly easy.",
      realWorldExample:
        "You want to read more books but never do. The books are on a shelf in another room. You move one to your nightstand and suddenly you're reading 20 pages every night before bed. You didn't become more motivated — you reduced the activation energy from 'get up, go to another room, choose a book' to 'reach over and open the book.'",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "activation-energy-ex-1",
        question:
          "You want to start meditating daily but keep failing. Which approach best uses activation energy principles?",
        options: [
          "Set a goal to meditate for 30 minutes daily and commit harder",
          "Download an app that starts with 2-minute sessions and set a phone reminder",
          "Read three books about meditation before starting",
          "Wait until you feel ready and motivated",
        ],
        correctIndex: 1,
        explanation:
          "The app with 2-minute sessions dramatically reduces activation energy. You don't need to figure out what to do (the app guides you), and 2 minutes feels effortless to start. The phone reminder acts as a catalyst, further lowering the barrier. Once the habit is rolling, you can gradually increase duration.",
      },
      {
        type: "fill-in-blank",
        id: "activation-energy-ex-2",
        textBefore:
          "In chemistry, a catalyst speeds up reactions by lowering the",
        textAfter:
          "needed to start the process. In life, making tasks easier to begin works the same way.",
        acceptedAnswers: [
          "activation energy",
          "energy",
          "barrier",
          "energy barrier",
        ],
        hint: "What's the upfront energy cost that prevents reactions from starting?",
        explanation:
          "Just as chemical catalysts lower activation energy to make reactions happen more easily, you can act as your own catalyst by reducing the startup friction for good habits and tasks.",
      },
      {
        type: "true-false",
        id: "activation-energy-ex-3",
        statement:
          "Increasing your willpower and discipline is more effective than reducing activation energy for building new habits.",
        correct: false,
        explanation:
          "Research consistently shows that reducing friction (lowering activation energy) is far more effective than relying on willpower. Willpower is a finite resource that depletes throughout the day. Environmental design that reduces activation energy works 24/7 without willpower.",
      },
      {
        type: "matching",
        id: "activation-energy-ex-4",
        instruction:
          "Match each strategy to how it reduces activation energy for the desired behavior.",
        pairs: [
          {
            left: "Laying out workout clothes the night before",
            right: "Removes the decision and preparation barrier for morning exercise",
          },
          {
            left: "Keeping healthy snacks at eye level in the fridge",
            right: "Makes the healthy choice require less effort than unhealthy ones",
          },
          {
            left: "Unsubscribing from distracting newsletters",
            right: "Eliminates the willpower needed to resist checking them",
          },
          {
            left: "Setting up automatic savings transfers",
            right: "Removes the need to actively decide to save each month",
          },
        ],
        explanation:
          "Each strategy works by making the desired behavior require less initial effort. Instead of relying on motivation or discipline, you're redesigning your environment so that the 'activation energy' needed to do the right thing is minimal.",
      },
    ],
    relatedModelIds: [
      "inertia",
      "habit-loop",
      "environment-design",
      "implementation-intentions",
    ],
    tags: [
      "starting",
      "friction",
      "catalysts",
      "habits",
      "willpower",
      "environment",
    ],
  },
  {
    id: "emergence",
    categoryId: "science-thinking",
    title: "Emergence",
    emoji: "🐜",
    difficulty: 3,
    estimatedMinutes: 9,
    eli5: {
      hook: "No single ant knows how to build a colony. But a million ants together build something spectacular.",
      analogy:
        "Look at your brain. One neuron can't think, feel, or remember your childhood. It's just a cell that fires electrical signals. But wire 86 billion of them together and somehow you get consciousness, creativity, and the ability to wonder why you exist. That's emergence: when simple things interacting together create something more complex than any of them could produce alone.",
      sections: [
        {
          title: "The Whole Is More Than the Sum",
          content:
            "Water molecules don't individually have 'wetness.' Traffic jams don't exist inside any single car. A city's culture isn't located in any one building. These properties only exist at a higher level, emerging from interactions between simpler components. You can study every water molecule under a microscope and never find 'wetness' — it only appears when millions of them interact.",
        },
        {
          title: "Why Top-Down Control Often Fails",
          content:
            "Emergence explains why dictating outcomes in complex systems rarely works. You can't command a city to be vibrant — vibrancy emerges from thousands of independent decisions by residents, businesses, and visitors. You can't order a team to be creative — creativity emerges from the right mix of people, trust, and freedom. Great leaders create conditions for good things to emerge rather than trying to engineer specific outcomes.",
        },
        {
          title: "Simple Rules, Complex Behavior",
          content:
            "Flocking birds follow just three rules: stay close to neighbors, avoid collisions, match direction. From these three simple rules, thousands of starlings create those breathtaking murmurations in the sky. No choreographer needed. This is the magic of emergence: complexity from simplicity, order from the bottom up.",
        },
      ],
      ahaQuote:
        "You can't find consciousness in a neuron, culture in a person, or a traffic jam in a car. Some things only exist at the level of interactions.",
      realWorldExample:
        "Wikipedia works not because anyone planned a comprehensive encyclopedia, but because millions of small contributions, edits, and corrections by independent volunteers emerged into something more accurate and comprehensive than any single organization could have created. The quality emerged from the interactions, not from a master plan.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "emergence-ex-1",
        question:
          "A company tries to create a 'fun culture' by mandating team-building activities and requiring employees to attend happy hours. Morale doesn't improve. Why, through the lens of emergence?",
        options: [
          "They didn't pick fun enough activities",
          "Culture is an emergent property — it can't be dictated from the top, only influenced by creating the right conditions",
          "They need a bigger budget for activities",
          "Employees are being difficult",
        ],
        correctIndex: 1,
        explanation:
          "Culture emerges from thousands of daily interactions, norms, and behaviors — it can't be mandated any more than you can command a traffic pattern. Leaders can create conditions that enable good culture to emerge (autonomy, trust, fair treatment), but they can't directly install it.",
      },
      {
        type: "true-false",
        id: "emergence-ex-2",
        statement:
          "If you understand every individual component of a system perfectly, you can always predict the behavior of the whole system.",
        correct: false,
        explanation:
          "This is exactly what emergence tells us is NOT the case. Emergent properties arise from interactions between components, not from the components themselves. You can understand every neuron perfectly and still not predict consciousness. Understanding individual parts is necessary but not sufficient for understanding the whole.",
      },
      {
        type: "scenario",
        id: "emergence-ex-3",
        scenario:
          "A city planner wants to create a vibrant, walkable neighborhood. They have two approaches: (A) Design every detail — mandate specific store types, regulate foot traffic patterns, schedule street performances; or (B) Build good infrastructure (wide sidewalks, mixed zoning, public spaces) and let businesses and residents fill in the rest organically.",
        question: "Which approach is more aligned with emergence thinking?",
        options: [
          "Approach A — detailed planning ensures the best outcome",
          "Approach B — vibrancy is an emergent property that arises from the right conditions, not from top-down control",
          "Neither — you can't plan neighborhoods",
          "Both are equally valid",
        ],
        correctIndex: 1,
        explanation:
          "Vibrancy is an emergent property — it can't be designed directly. Approach B creates the conditions (infrastructure, flexibility) from which vibrancy can emerge naturally. The most vibrant neighborhoods in the world weren't micromanaged — they evolved from good foundational conditions and organic human activity.",
      },
      {
        type: "fill-in-blank",
        id: "emergence-ex-4",
        textBefore:
          "Emergence occurs when simple components interacting together produce properties that no individual component",
        textAfter: "on its own.",
        acceptedAnswers: ["possesses", "has", "exhibits", "displays", "shows"],
        hint: "Think about how wetness isn't a property of a single water molecule",
        explanation:
          "The defining characteristic of emergence is that the whole has properties that none of the parts possess individually. Wetness, consciousness, traffic jams, and culture are all emergent — they exist only at the level of interactions between simpler components.",
      },
    ],
    relatedModelIds: [
      "feedback-loops",
      "critical-mass",
      "second-order-effects",
      "antifragility",
    ],
    tags: [
      "complexity",
      "bottom-up",
      "self-organization",
      "systems",
      "interactions",
    ],
  },
];
