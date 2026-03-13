import type { MentalModel } from "../../types/models";

export const habitsModels: MentalModel[] = [
  {
    id: "habit-loop",
    categoryId: "habits",
    title: "The Habit Loop",
    emoji: "🔁",
    difficulty: 1,
    estimatedMinutes: 7,
    eli5: {
      hook: "Every habit you have — good or bad — runs on the exact same three-step engine.",
      analogy:
        "Think of a habit like a song stuck in your head. It has three parts: a TRIGGER that starts the song (hearing the first few notes), a ROUTINE that plays automatically (you sing along without thinking), and a REWARD that makes it stick (the satisfying feeling of finishing the chorus). Your brain builds a habit loop when it learns: this trigger leads to this routine, which delivers this reward. After enough repetitions, the whole thing runs on autopilot — no willpower needed.",
      sections: [
        {
          title: "Cue, Routine, Reward",
          content:
            "Every habit follows this loop: (1) CUE — a trigger that tells your brain to start the automatic behavior (time of day, location, emotion, other people, preceding action). (2) ROUTINE — the behavior itself (scrolling your phone, eating a snack, going for a run). (3) REWARD — the satisfaction your brain gets (dopamine hit, sugar rush, runner's high). Understanding this loop gives you the power to hack any habit.",
        },
        {
          title: "Changing Habits by Changing the Loop",
          content:
            "You can't easily eliminate a habit — your brain has wired the cue-routine-reward pathway too deeply. But you CAN swap the routine while keeping the same cue and reward. Stress (cue) leads to smoking (routine) for the nicotine calm (reward). Replace the routine: stress (cue) leads to a 5-minute walk (new routine) for the endorphin calm (same type of reward). Same trigger, same reward, different behavior.",
        },
      ],
      ahaQuote:
        "You don't break bad habits. You replace them. Keep the trigger, swap the routine, match the reward.",
      realWorldExample:
        "Every afternoon around 3 PM (cue), you walk to the office vending machine and buy a cookie (routine) for the sugar boost and social break (reward). To change this: keep the 3 PM cue, replace the routine with walking to the break room for an apple and a chat with a coworker, and you still get energy and socializing (reward). The loop stays intact — only the routine changes.",
    },
    exercises: [
      {
        type: "scenario",
        id: "habit-loop-ex-1",
        scenario:
          "Every evening after dinner (cue), Maria sits on the couch and scrolls Instagram for 2 hours (routine). She enjoys the feeling of relaxation and entertainment (reward). She wants to read books instead.",
        question:
          "Using the habit loop, what's the best strategy for Maria?",
        options: [
          "Delete Instagram and rely on willpower to read",
          "Keep the same cue (after dinner on the couch) and reward (relaxation/entertainment), but swap the routine: place a book where her phone usually is",
          "Set a goal to read for 30 minutes before allowing Instagram",
          "Move to a different room to break the habit entirely",
        ],
        correctIndex: 1,
        explanation:
          "The habit loop approach keeps the cue and reward intact while swapping only the routine. Placing the book where the phone sits removes friction from the new routine and adds friction to the old one. Maria still gets relaxation and entertainment — just from a book instead of Instagram. This works because the brain's cue-reward pathway stays satisfied.",
      },
      {
        type: "matching",
        id: "habit-loop-ex-2",
        instruction:
          "Identify the cue, routine, and reward in each habit.",
        pairs: [
          {
            left: "Phone buzzes with a notification",
            right: "Cue",
          },
          {
            left: "Checking all social media apps for 20 minutes",
            right: "Routine",
          },
          {
            left: "Feeling connected and informed",
            right: "Reward",
          },
          {
            left: "Waking up in the morning and feeling groggy",
            right: "Cue",
          },
        ],
        explanation:
          "Every habit has these three components. The cue triggers the automatic behavior. The routine is the behavior itself. The reward is what your brain gets that makes it want to repeat the loop. Identifying all three parts of a habit is the first step to changing it.",
      },
      {
        type: "true-false",
        id: "habit-loop-ex-3",
        statement:
          "The most effective way to eliminate a bad habit is through pure willpower and discipline.",
        correct: false,
        explanation:
          "Willpower is a limited resource that depletes throughout the day. The most effective approach is to work WITH the habit loop, not against it. Keep the cue and reward (which your brain craves), but replace the routine with a healthier behavior. This requires far less willpower because the brain's fundamental loop remains satisfied.",
      },
      {
        type: "fill-in-blank",
        id: "habit-loop-ex-4",
        textBefore: "The three components of the habit loop are: cue, routine, and",
        textAfter:
          ". To change a habit, keep the first and last, and swap the middle.",
        acceptedAnswers: ["reward", "the reward"],
        hint: "What does your brain get that makes it want to repeat the behavior?",
        explanation:
          "The reward is what closes the loop and tells your brain 'remember this pattern.' Without a reward, the habit won't stick. When changing habits, the key insight is that you don't need to change the reward — just find a new routine that delivers a similar type of satisfaction.",
      },
    ],
    relatedModelIds: [
      "implementation-intentions",
      "environment-design",
      "habit-stacking",
      "identity-based-habits",
    ],
    tags: [
      "Charles Duhigg",
      "cue-routine-reward",
      "behavior change",
      "automation",
      "psychology",
    ],
  },
  {
    id: "implementation-intentions",
    categoryId: "habits",
    title: "Implementation Intentions",
    emoji: "📍",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "'I'll exercise more' is a wish. 'I'll run at 7 AM on Monday, Wednesday, and Friday at the park' is a plan that actually works.",
      analogy:
        "Imagine telling a GPS 'Take me somewhere nice.' It can't help you — the instruction is too vague. But 'Take me to 123 Main Street' works perfectly. Your brain is the same way. Vague goals ('eat healthier') give your brain no specific instructions to follow. Implementation intentions ('When I sit down for lunch, I will eat a salad before anything else') give your brain a GPS coordinate — a specific when, where, and what that triggers action automatically.",
      sections: [
        {
          title: "The Magic Formula: When X Happens, I Will Do Y",
          content:
            "Implementation intentions follow a simple format: 'When [SITUATION], I will [BEHAVIOR].' This pre-loads a decision so you don't have to think about it in the moment. 'When I pour my morning coffee, I will write in my journal for 5 minutes.' 'When I feel the urge to check my phone during work, I will take 3 deep breaths instead.' Research shows this simple technique nearly doubles the success rate of reaching goals.",
        },
        {
          title: "Why Specificity Beats Motivation",
          content:
            "Most people fail their goals not from lack of motivation but from lack of clarity. They're motivated to 'get fit' but never decided WHEN they'd exercise, WHERE they'd do it, or WHAT they'd do when they got there. Implementation intentions solve the clarity problem: every decision is made in advance, so when the moment arrives, you just execute the plan instead of debating with yourself.",
        },
      ],
      ahaQuote:
        "People don't lack motivation. They lack a specific plan. 'I will [BEHAVIOR] at [TIME] in [LOCATION]' is the plan your brain needs.",
      realWorldExample:
        "Two groups were asked to exercise more. Group A was told to 'try to exercise at least once per week.' Group B wrote down exactly when, where, and how they would exercise. Result: 91% of Group B exercised at least once per week, compared to only 35% of Group A. Same motivation level, wildly different outcomes — all because of specificity.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "implementation-intentions-ex-1",
        question:
          "Which of these is a properly formatted implementation intention?",
        options: [
          "I want to read more books this year",
          "I should probably start meditating",
          "When I get into bed each night, I will read for 20 minutes before turning off the light",
          "I'll try to be more productive",
        ],
        correctIndex: 2,
        explanation:
          "Implementation intentions follow the format 'When [specific situation], I will [specific behavior].' Option C specifies the when (getting into bed), the where (bed), and the what (read for 20 minutes). The other options are vague aspirations that give your brain no specific trigger or action plan.",
      },
      {
        type: "scenario",
        id: "implementation-intentions-ex-2",
        scenario:
          "Jake wants to drink more water throughout the day. He's tried reminding himself but keeps forgetting.",
        question:
          "Which implementation intention would be most effective for Jake?",
        options: [
          "'I will drink more water starting tomorrow'",
          "'When I finish a cup of coffee, I will immediately fill my water bottle and drink a full glass'",
          "'I should buy a bigger water bottle'",
          "'I will try to drink 8 glasses of water per day'",
        ],
        correctIndex: 1,
        explanation:
          "This implementation intention links the new behavior (drinking water) to an existing behavior (finishing coffee) that happens naturally throughout the day. It's specific (one full glass), triggered by a clear cue (empty coffee cup), and requires no remembering — the trigger does the work of reminding.",
      },
      {
        type: "true-false",
        id: "implementation-intentions-ex-3",
        statement:
          "Implementation intentions work primarily by increasing a person's motivation to achieve their goal.",
        correct: false,
        explanation:
          "Implementation intentions work by increasing CLARITY, not motivation. They succeed because they remove the need for in-the-moment decision-making. When the trigger situation occurs, the brain has a pre-programmed response ready. This bypasses the willpower and motivation that most goal-pursuit relies on, which is why it's so much more effective.",
      },
      {
        type: "real-world",
        id: "implementation-intentions-ex-4",
        challenge:
          "Choose one goal you've been struggling with and create three specific implementation intentions for it.",
        prompts: [
          "What's a goal you want to achieve but keep failing to act on?",
          "What specific situations naturally occur in your day that could trigger the desired behavior?",
          "Write three 'When [situation], I will [behavior]' statements",
          "Post them somewhere visible as a reminder",
        ],
        exampleResponse:
          "Goal: Write every day. Implementation intentions: (1) When I sit down with my morning coffee, I will open my writing document and write for 15 minutes before checking email. (2) When I feel the urge to browse Reddit during the afternoon, I will write one paragraph of my essay instead. (3) When I finish dinner on weekdays, I will review what I wrote that morning and add notes for tomorrow.",
      },
    ],
    relatedModelIds: [
      "habit-loop",
      "activation-energy",
      "habit-stacking",
      "environment-design",
    ],
    tags: [
      "planning",
      "specificity",
      "goal setting",
      "behavior change",
      "psychology",
    ],
  },
  {
    id: "environment-design",
    categoryId: "habits",
    title: "Environment Design",
    emoji: "🏠",
    difficulty: 1,
    estimatedMinutes: 7,
    eli5: {
      hook: "You don't rise to the level of your goals. You fall to the level of your environment.",
      analogy:
        "Imagine a river. You can try to swim upstream using pure willpower — fighting the current every stroke. Or you can just change the direction the river flows, and let the current carry you effortlessly. Environment design is changing the direction of the river. Instead of relying on willpower to resist the cookie jar on your counter, just move the cookie jar to a hard-to-reach cabinet. Don't fight the environment — redesign it so the default behavior is the one you want.",
      sections: [
        {
          title: "Make Good Habits Obvious and Easy",
          content:
            "Want to eat fruit? Put it on the counter at eye level. Want to exercise? Sleep in your gym clothes with your shoes by the door. Want to read? Put a book on your pillow. Want to practice guitar? Leave it on a stand in the living room, not in a case in the closet. Every reduction in friction between you and the desired behavior makes it dramatically more likely to happen.",
        },
        {
          title: "Make Bad Habits Invisible and Hard",
          content:
            "Want to stop snacking? Don't keep snacks in the house. Want to spend less time on your phone? Put it in another room while working. Want to stop watching TV? Take the batteries out of the remote. Uninstall social media apps so you'd need to log in through a browser. Every bit of friction you add to an unwanted behavior makes it less likely to happen — without requiring any willpower.",
        },
      ],
      ahaQuote:
        "Discipline is a last resort. The first resort is designing an environment where you don't need discipline at all.",
      realWorldExample:
        "Google wanted employees to eat healthier in their cafeterias. They didn't lecture anyone about nutrition. They just put salads and fruit at eye level and moved desserts to an opaque container around a corner. Employees had to actively seek out the unhealthy food instead of being confronted by it. Dessert consumption dropped by 30%. No willpower required.",
    },
    exercises: [
      {
        type: "matching",
        id: "environment-design-ex-1",
        instruction:
          "Match each desired behavior change with the best environment design strategy.",
        pairs: [
          {
            left: "Read more books",
            right: "Place a book on your pillow so you see it at bedtime",
          },
          {
            left: "Drink less soda",
            right: "Stop buying soda and keep only water in the fridge",
          },
          {
            left: "Practice piano daily",
            right: "Keep the piano open with sheet music ready in a common room",
          },
          {
            left: "Reduce phone screen time",
            right: "Charge your phone in a different room overnight",
          },
        ],
        explanation:
          "Each strategy works by making the desired behavior the path of least resistance. Good habits become the default (visible, easy, accessible). Bad habits become inconvenient (hidden, difficult, distant). The environment does the work that willpower usually fails at.",
      },
      {
        type: "multiple-choice",
        id: "environment-design-ex-2",
        question:
          "Why is environment design more effective than willpower for behavior change?",
        options: [
          "People are too lazy for willpower",
          "Willpower is a finite resource that depletes throughout the day, while a well-designed environment works automatically 24/7 without mental effort",
          "Environment doesn't really matter — it's all about mindset",
          "Willpower is a myth",
        ],
        correctIndex: 1,
        explanation:
          "Research shows willpower behaves like a muscle — it gets tired with use. By evening, after a day of decisions and self-control, willpower is at its lowest. Environment design doesn't rely on willpower at all — the environment nudges you toward the right behavior whether you're fresh at 8 AM or exhausted at 10 PM.",
      },
      {
        type: "true-false",
        id: "environment-design-ex-3",
        statement:
          "Environment design only works for physical habits like eating and exercise.",
        correct: false,
        explanation:
          "Environment design works for any behavior. Digital environments matter too: organizing your desktop so work apps are prominent and social apps are hidden. Social environments count: spending time with people who have the habits you want. Informational environments: curating your news feed to show educational content instead of outrage. Any context that influences behavior can be designed.",
      },
      {
        type: "scenario",
        id: "environment-design-ex-4",
        scenario:
          "Alex wants to write a novel but keeps getting distracted by his phone, TV, and household chores when he sits down to write at home.",
        question:
          "What environment design changes would most help Alex?",
        options: [
          "He should try harder to focus and build more discipline",
          "Create a dedicated writing space (even a specific corner), leave his phone in another room, face away from the TV, and set a specific time when he writes — designing his environment to make writing the easiest action and distractions the hardest",
          "Write only when he feels inspired",
          "Set a daily word count goal and punish himself if he doesn't hit it",
        ],
        correctIndex: 1,
        explanation:
          "Alex's problem isn't motivation — it's that his environment is optimized for distraction. By creating a dedicated space, removing the phone, and eliminating visual cues for distractions, writing becomes the path of least resistance. The environment does the discipline work, freeing Alex's mental energy for the actual writing.",
      },
    ],
    relatedModelIds: [
      "habit-loop",
      "activation-energy",
      "implementation-intentions",
      "temptation-bundling",
    ],
    tags: [
      "design",
      "friction",
      "choice architecture",
      "nudge",
      "willpower",
      "James Clear",
    ],
  },
  {
    id: "identity-based-habits",
    categoryId: "habits",
    title: "Identity-Based Habits",
    emoji: "🪞",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "Don't try to run a marathon. Become a runner. The marathon will follow.",
      analogy:
        "Imagine two people turning down a cigarette. Person A says, 'No thanks, I'm trying to quit.' Person B says, 'No thanks, I'm not a smoker.' Both refused the cigarette, but Person B is playing a completely different game. They're not fighting a craving — they've changed who they ARE. Identity-based habits work because once you see yourself as a certain type of person, your behaviors naturally align with that identity. You don't have to force a runner to run — running is just what runners do.",
      sections: [
        {
          title: "Outcome vs. Identity",
          content:
            "Most people set outcome goals: 'I want to lose 20 pounds.' Then they white-knuckle their way through a diet until they hit the number — and immediately revert. Identity-based habits flip this: instead of 'I want to lose weight,' you adopt the identity 'I am a person who eats healthy.' Every meal becomes a vote for your new identity. You don't need willpower because you're not fighting yourself — you're becoming yourself.",
        },
        {
          title: "Every Action Is a Vote",
          content:
            "You don't need a dramatic transformation. Every small action is a vote for the type of person you want to become. One healthy meal doesn't make you healthy, but it casts a vote for 'healthy person.' One page of reading casts a vote for 'reader.' Over time, the votes add up, and your self-image shifts. Once you truly see yourself as a reader, skipping your reading time feels as wrong as a writer skipping their morning pages.",
        },
      ],
      ahaQuote:
        "The goal isn't to read a book. It's to become a reader. The goal isn't to run a mile. It's to become a runner.",
      realWorldExample:
        "Two people join a gym. Person A's goal: 'Lose 15 pounds by summer.' Person B's identity shift: 'I'm an athlete.' When it's cold and rainy, Person A thinks, 'I don't feel like going — I can make up for it later.' Person B thinks, 'Athletes train regardless of weather.' Three months later, Person B hasn't missed a day. Person A quit in February. Same gym, same weather — different identity.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "identity-based-habits-ex-1",
        question:
          "What's the fundamental difference between 'I want to write a book' and 'I am a writer'?",
        options: [
          "They mean the same thing, just phrased differently",
          "The first is a goal that can be abandoned; the second is an identity that drives consistent behavior because writing is now who you ARE, not just something you're trying to do",
          "The second one is overconfident",
          "The first is more realistic and achievable",
        ],
        correctIndex: 1,
        explanation:
          "Goals are external targets you can give up on. Identity is internal and self-reinforcing. A writer writes because that's what writers do — the behavior flows from the identity rather than being forced toward a goal. When writing IS your identity, not writing feels like a violation of who you are.",
      },
      {
        type: "scenario",
        id: "identity-based-habits-ex-2",
        scenario:
          "Sarah wants to become more organized. She buys planners, downloads apps, and watches productivity videos. Within 3 weeks, she's back to her messy desk and missed deadlines.",
        question:
          "How would identity-based habits change Sarah's approach?",
        options: [
          "Buy better planners and try harder",
          "Instead of 'I want to be more organized,' adopt the identity 'I am an organized person.' Every small act of tidying becomes a vote for that identity, and she'll naturally seek out systems that fit who she IS rather than forcing tools that feel foreign",
          "Accept that some people just aren't organized",
          "Hire a professional organizer",
        ],
        correctIndex: 1,
        explanation:
          "Sarah's problem isn't tools — it's identity. She sees herself as a messy person trying to use organized-person tools, which feels unnatural and eventually fails. By shifting to 'I am an organized person,' each small organizational act reinforces the new identity until organized behavior becomes her default, not her exception.",
      },
      {
        type: "true-false",
        id: "identity-based-habits-ex-3",
        statement:
          "You need to completely transform your identity before you can start building new habits.",
        correct: false,
        explanation:
          "It works the other way around. You build identity through small actions, not grand declarations. Every small habit is a 'vote' for your new identity. Read one page? That's a vote for 'reader.' Do one pushup? That's a vote for 'active person.' The identity forms gradually as the votes accumulate. Start small, let the identity follow the actions.",
      },
      {
        type: "fill-in-blank",
        id: "identity-based-habits-ex-4",
        textBefore:
          "Instead of focusing on what you want to achieve (outcomes), identity-based habits focus on who you want to",
        textAfter:
          ". Behavior change that conflicts with self-image rarely lasts.",
        acceptedAnswers: ["become", "be", "be seen as", "turn into"],
        hint: "What word describes the transformation of self, not just actions?",
        explanation:
          "Identity-based habits anchor behavior change in self-image rather than external goals. When your behavior aligns with who you believe you ARE, it requires no willpower. When it conflicts with your identity, no amount of willpower can sustain it long-term. Change the identity, and the behaviors follow naturally.",
      },
    ],
    relatedModelIds: [
      "habit-loop",
      "implementation-intentions",
      "plateau-of-latent-potential",
    ],
    tags: [
      "identity",
      "James Clear",
      "self-image",
      "behavior change",
      "mindset",
    ],
  },
  {
    id: "temptation-bundling",
    categoryId: "habits",
    title: "Temptation Bundling",
    emoji: "🎁",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "Can't give up what you love? Pair it with what you need to do, and now you love doing what you need to do.",
      analogy:
        "Remember how your parents hid vegetables in mac and cheese? Temptation bundling is the grown-up version. You take something you WANT to do (watch Netflix, listen to a podcast, eat a treat) and link it exclusively to something you NEED to do (exercise, clean the house, finish paperwork). Now the dreaded task becomes the only way to access the fun thing, and suddenly it's... kind of enjoyable?",
      sections: [
        {
          title: "The Bundling Formula",
          content:
            "The formula is simple: 'I will only [THING I WANT] while/after [THING I NEED TO DO].' Only listen to your favorite podcast at the gym. Only watch trashy TV while folding laundry. Only eat at your favorite restaurant after a productive work session. The pleasure becomes the reward for the productive behavior, and the productive behavior becomes the gateway to the pleasure.",
        },
        {
          title: "Why It's So Effective",
          content:
            "Most productivity advice says 'resist temptation.' That requires willpower, which is exhausting and fails. Temptation bundling says 'use temptation as fuel.' Instead of fighting your desire for pleasure, you redirect it to pull you toward productive behavior. You're working WITH your brain's reward system, not against it. The result? You actually look FORWARD to doing the thing you used to dread.",
        },
      ],
      ahaQuote:
        "Stop fighting what you want. Start linking it to what you need. Your cravings become your engine.",
      realWorldExample:
        "A researcher named Katy Milkman only allowed herself to listen to Hunger Games audiobooks at the gym. Result: she actually started CRAVING the gym — not for the exercise, but for the story. The temptation (addictive audiobook) was bundled with the need (exercise), transforming a dreaded chore into an anticipated treat.",
    },
    exercises: [
      {
        type: "matching",
        id: "temptation-bundling-ex-1",
        instruction:
          "Create temptation bundles by matching each 'need to do' with an appropriate 'want to do.'",
        pairs: [
          {
            left: "Doing cardio at the gym",
            right: "Only watching your favorite show on the gym TV/tablet",
          },
          {
            left: "Doing household chores",
            right: "Only listening to your favorite playlist while cleaning",
          },
          {
            left: "Commuting to work",
            right: "Only listening to a guilty-pleasure podcast during the drive",
          },
          {
            left: "Doing tedious data entry at work",
            right: "Only enjoying your favorite premium coffee while doing it",
          },
        ],
        explanation:
          "Effective temptation bundles pair an enjoyable activity exclusively with a necessary but unpleasant one. The key word is 'only' — the pleasure must be RESTRICTED to the productive context, or it loses its pulling power.",
      },
      {
        type: "multiple-choice",
        id: "temptation-bundling-ex-2",
        question:
          "What makes temptation bundling different from simply rewarding yourself after a task?",
        options: [
          "There's no difference",
          "With temptation bundling, the pleasure happens SIMULTANEOUSLY with the task and is EXCLUSIVELY linked to it, making the task itself enjoyable rather than just tolerable",
          "Temptation bundling works only for physical tasks",
          "Rewards are more effective than bundling",
        ],
        correctIndex: 1,
        explanation:
          "A reward after a task says 'endure the pain, then get pleasure.' Temptation bundling says 'experience pleasure during the task.' This transforms the task from something you dread to something you anticipate. And the exclusivity is crucial — the temptation is ONLY available during the productive behavior, so you actually crave doing the work.",
      },
      {
        type: "true-false",
        id: "temptation-bundling-ex-3",
        statement:
          "Temptation bundling works best when you can enjoy the temptation anytime, not just during the productive activity.",
        correct: false,
        explanation:
          "The opposite is true. Temptation bundling's power comes from EXCLUSIVITY. If you can listen to your favorite podcast anytime, it won't pull you to the gym. The rule must be: this specific pleasure is ONLY available during this specific productive activity. The scarcity makes the bundled activity the only gateway to the pleasure.",
      },
      {
        type: "real-world",
        id: "temptation-bundling-ex-4",
        challenge:
          "Create three personal temptation bundles by pairing activities you need to do with pleasures you'll restrict to those moments.",
        prompts: [
          "What are three tasks you tend to procrastinate on or dread?",
          "What are three indulgences you enjoy but could restrict?",
          "Can you pair them so each indulgence only happens during a dreaded task?",
          "Try one bundle for a week and see if your attitude toward the task changes.",
        ],
        exampleResponse:
          "Bundle 1: I only listen to my true crime podcast while cooking dinner (I love the podcast but hate cooking). Bundle 2: I only drink my fancy espresso while reviewing my budget spreadsheet (I avoid budgeting but love good coffee). Bundle 3: I only watch YouTube while on the stationary bike (I waste time on YouTube anyway — now it fuels exercise).",
      },
    ],
    relatedModelIds: [
      "habit-loop",
      "habit-stacking",
      "environment-design",
      "activation-energy",
    ],
    tags: [
      "motivation",
      "reward",
      "productivity",
      "behavior change",
      "Katy Milkman",
    ],
  },
  {
    id: "habit-stacking",
    categoryId: "habits",
    title: "Habit Stacking",
    emoji: "🧱",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "You already have hundreds of habits. Just attach new ones to them like train cars on a track.",
      analogy:
        "Think of your existing habits as a chain of dominoes that fall every day — wake up, brush teeth, make coffee, check phone, etc. Each domino reliably triggers the next. Habit stacking says: instead of trying to remember a new habit from scratch, just insert a new domino into the chain. After you brush your teeth (existing habit), do 10 pushups (new habit). After you pour coffee (existing habit), write in your journal (new habit). The old habit becomes the trigger for the new one.",
      sections: [
        {
          title: "The Stacking Formula",
          content:
            "'After I [CURRENT HABIT], I will [NEW HABIT].' That's it. The current habit is already wired into your brain — you do it without thinking. By attaching the new habit to it, you borrow that existing neural pathway instead of building one from scratch. It's like adding a new train car to a train that's already moving instead of starting a new train from the depot.",
        },
        {
          title: "Choosing the Right Anchor",
          content:
            "Not every existing habit is a good anchor. The best ones happen at the same time, same place, with the same frequency as your desired new habit. Don't stack a daily habit onto a weekly anchor. Don't stack an evening habit onto a morning anchor. And pick habits that have a natural pause after them — a moment where the new habit can slide in smoothly without feeling forced.",
        },
      ],
      ahaQuote:
        "You don't need motivation to brush your teeth. Stack your new habit onto one that reliable, and you won't need motivation for that either.",
      realWorldExample:
        "You want to start meditating but keep forgetting. You already make coffee every single morning without fail. New stack: 'After I press start on the coffee maker, I will meditate for 3 minutes while it brews.' The coffee-making habit (already automatic) becomes the trigger for meditation. Within two weeks, you meditate as naturally as you make coffee.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "habit-stacking-ex-1",
        question:
          "Why does habit stacking work so effectively?",
        options: [
          "It uses willpower more efficiently",
          "It leverages existing neural pathways — your brain already automates the anchor habit, so the new habit inherits that automation through association",
          "It makes habits more fun",
          "It works because of social pressure",
        ],
        correctIndex: 1,
        explanation:
          "Your brain has already built strong neural pathways for existing habits — they fire automatically without conscious thought. Habit stacking attaches a new behavior to this existing automation. Instead of building a new neural pathway from scratch (which requires weeks of willpower), you're adding an extension to an existing one.",
      },
      {
        type: "scenario",
        id: "habit-stacking-ex-2",
        scenario:
          "Tom wants to start flossing, taking vitamins, and doing a gratitude journal. Currently, he brushes his teeth every morning and every evening like clockwork.",
        question:
          "How should Tom use habit stacking to build all three habits?",
        options: [
          "Do all three after brushing teeth in the morning",
          "Stack them into a chain: 'After I brush my teeth (morning), I will floss. After I floss, I will take my vitamins. After I brush my teeth (evening), I will write three things I'm grateful for.'",
          "Set phone reminders for each one at random times",
          "Focus on building one habit at a time over three months",
        ],
        correctIndex: 1,
        explanation:
          "Tom creates a morning chain (brush, floss, vitamins) and an evening chain (brush, journal). Each new habit is stacked onto the previous one, creating a domino sequence that runs on the anchor habit's autopilot. The chain approach also means each new habit reinforces the one before it.",
      },
      {
        type: "true-false",
        id: "habit-stacking-ex-3",
        statement:
          "You should stack ambitious new habits (like a 45-minute workout) onto small existing habits for maximum impact.",
        correct: false,
        explanation:
          "Stacking a huge new habit onto a small existing one creates an uncomfortable mismatch — the friction is too high and you'll resist it. Start with tiny stacked habits: 2 minutes of stretching after brushing teeth, not 45 minutes of exercise. Once the tiny habit is established, you can gradually increase its size.",
      },
      {
        type: "fill-in-blank",
        id: "habit-stacking-ex-4",
        textBefore: "The habit stacking formula is: 'After I",
        textAfter: ", I will [NEW HABIT].' The existing habit serves as an automatic trigger.",
        acceptedAnswers: [
          "[CURRENT HABIT]",
          "current habit",
          "[EXISTING HABIT]",
          "existing habit",
        ],
        hint: "What acts as the anchor — the thing you already do reliably?",
        explanation:
          "The power of habit stacking is in the anchor: an existing habit you already perform reliably and automatically. By linking the new behavior to this automatic trigger, you skip the hardest part of habit formation — remembering to do it. Your existing habit does the remembering for you.",
      },
    ],
    relatedModelIds: [
      "habit-loop",
      "implementation-intentions",
      "temptation-bundling",
      "activation-energy",
    ],
    tags: [
      "James Clear",
      "routines",
      "chaining",
      "triggers",
      "behavior change",
    ],
  },
  {
    id: "plateau-of-latent-potential",
    categoryId: "habits",
    title: "Plateau of Latent Potential",
    emoji: "🧊",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "An ice cube sits in a cold room. You heat the room one degree at a time. Nothing happens. Nothing happens. Nothing happens. Then — at 32 degrees — the ice cube starts melting. The prior 31 degrees weren't wasted. They were essential.",
      analogy:
        "Think of bamboo. You plant it, water it, and fertilize it. For the first YEAR, you see nothing above the ground. Nothing for the second year. Nothing for the third. Nothing for the fourth. You're watering dirt. Then, in year five, bamboo shoots up 80 feet in six weeks. Was nothing happening for four years? No — the bamboo was building a massive root system underground. The growth was always happening, just invisibly. That invisible growth phase is the Plateau of Latent Potential.",
      sections: [
        {
          title: "The Valley of Disappointment",
          content:
            "We expect progress to be linear: put in work, see proportional results. But most meaningful growth follows an exponential curve — flat for a long time, then shooting upward. The gap between what you expect (linear progress) and what you get (delayed exponential progress) is the Valley of Disappointment. This is where most people quit. They say 'it's not working' when really they're just in the flat part of an exponential curve.",
        },
        {
          title: "The Work Is Never Wasted",
          content:
            "Every gym session that didn't visibly change your body still changed something. Every practice session that didn't improve your playing still strengthened neural pathways. Every blog post that got zero readers still improved your writing. The results are being stored, like energy in a compressed spring. You just can't see them yet. Quitting during the plateau is like walking away from a spring that's 90% compressed.",
        },
      ],
      ahaQuote:
        "Your work isn't being wasted. It's being stored. And when it releases, you'll wonder why you ever doubted the process.",
      realWorldExample:
        "A writer publishes blog posts for 2 years with almost no readers. Post #1: 3 views. Post #50: 12 views. Post #100: 28 views. Discouraging, right? Then post #127 gets shared by an influencer and goes viral. Suddenly, people discover 126 posts of high-quality content and the blog explodes. Those 126 'invisible' posts weren't wasted — they were the root system that made the explosion possible.",
    },
    exercises: [
      {
        type: "scenario",
        id: "plateau-of-latent-potential-ex-1",
        scenario:
          "Marcus has been learning Spanish with a tutor for 6 months. He still can't hold a conversation and feels like he's made no progress. He's thinking about quitting.",
        question:
          "What would you tell Marcus based on the Plateau of Latent Potential?",
        options: [
          "He should try a different language — Spanish might not be for him",
          "He should switch to a different learning method",
          "He's likely in the Valley of Disappointment — his brain is building language infrastructure that hasn't surfaced yet. Fluency often arrives in sudden leaps, not gradual increments. The 6 months of work aren't wasted; they're the root system for a breakthrough he hasn't hit yet",
          "Six months isn't enough time to judge — wait at least a year before evaluating",
        ],
        correctIndex: 2,
        explanation:
          "Language learning is a perfect example of the Plateau of Latent Potential. The brain is building vocabulary networks, grammar intuitions, and pronunciation patterns — all invisibly. Then one day, something 'clicks' and you suddenly understand a whole conversation. The invisible groundwork made that moment possible. Marcus is in the flat part of an exponential curve.",
      },
      {
        type: "multiple-choice",
        id: "plateau-of-latent-potential-ex-2",
        question:
          "Why do most people quit habits and projects at exactly the wrong time?",
        options: [
          "They're not talented enough to succeed",
          "They expect linear progress but get exponential progress — the flat early phase (where effort doesn't yet produce visible results) feels like failure, so they quit just before the breakthrough",
          "They don't have enough time",
          "They chose the wrong goals",
        ],
        correctIndex: 1,
        explanation:
          "The Plateau of Latent Potential explains why quitting often happens at the worst time. Progress is being stored invisibly, but our expectation of linear results (equal effort = equal progress) makes the flat phase feel like evidence of failure. Most people quit during this phase, never knowing they were 90% of the way to a breakthrough.",
      },
      {
        type: "true-false",
        id: "plateau-of-latent-potential-ex-3",
        statement:
          "If you've been working on something for months without visible progress, it definitely means progress is being stored and a breakthrough is coming.",
        correct: false,
        explanation:
          "The Plateau of Latent Potential doesn't guarantee a breakthrough — it's possible that your approach genuinely isn't working. The key is to distinguish between 'no visible progress because results are delayed' and 'no progress because the method is wrong.' If you're following a proven method and putting in quality work, trust the plateau. If the method is questionable, reassess.",
      },
      {
        type: "fill-in-blank",
        id: "plateau-of-latent-potential-ex-4",
        textBefore:
          "The gap between expected linear progress and actual exponential progress is called the Valley of",
        textAfter:
          ". Most people quit during this phase, mistaking delayed results for no results.",
        acceptedAnswers: ["Disappointment", "disappointment"],
        hint: "What emotion do you feel when effort doesn't produce visible results?",
        explanation:
          "The Valley of Disappointment is the emotional experience of being in the flat part of an exponential growth curve. You expected effort to produce proportional results, but instead you got... nothing visible. This disappointment is the #1 killer of good habits and projects. Understanding that it's a PHASE, not a verdict, is the key to pushing through.",
      },
    ],
    relatedModelIds: [
      "identity-based-habits",
      "inertia",
      "critical-mass",
      "habit-loop",
    ],
    tags: [
      "persistence",
      "James Clear",
      "compound growth",
      "patience",
      "exponential",
    ],
  },
];
