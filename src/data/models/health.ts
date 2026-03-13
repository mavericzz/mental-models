import type { MentalModel } from "../../types/models";

export const healthModels: MentalModel[] = [
  {
    id: "dose-response",
    categoryId: "health",
    title: "Dose-Response Relationship",
    emoji: "\u{1F48A}",
    difficulty: 2,
    estimatedMinutes: 4,
    eli5: {
      hook: "One cup of coffee wakes you up. Ten cups make you vibrate through walls.",
      analogy: "Think of a hot shower. A little hot water feels amazing. More hot water feels even better. But turn it all the way up and you'll scream and jump out. Almost everything in life works this way: the AMOUNT you get determines whether something helps, does nothing, or hurts. Medicine, exercise, food, sunshine, even love -- the dose makes the poison.",
      sections: [
        {
          title: "Too Little, Just Right, Too Much",
          content: "Vitamin D: too little and your bones weaken, just right and you're healthy, too much and it's toxic. Exercise: too little and you lose fitness, just right and you get stronger, too much and you get injured. The sweet spot exists for almost everything, and it's different for everyone. The dose-response curve isn't a straight line -- it's usually shaped like an upside-down U."
        },
        {
          title: "Finding YOUR Dose",
          content: "Your optimal dose depends on your body, your history, and your context. Two aspirin might cure your headache; the same two aspirin might upset your friend's stomach. This is why 'what works for me' advice is so unreliable without knowing someone's starting point. Smart health decisions always ask: 'How much is right for MY body?'"
        }
      ],
      ahaQuote: "The dose makes the poison -- even water can kill you if you drink enough.",
      realWorldExample: "Your doctor prescribes 400mg of ibuprofen for a headache. It works great. You think, 'If 400mg is good, 1200mg must be three times better!' Wrong. 1200mg doesn't cure your headache three times faster -- it damages your stomach lining. The relationship between dose and effect is rarely linear."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "dose-response-ex-1",
        question: "A runner trains 3 days per week and improves steadily. She increases to 7 days per week with no rest days. What's the most likely outcome?",
        options: [
          "She'll improve more than twice as fast",
          "She'll improve at the same rate with more fitness",
          "She'll likely get injured or overtrained -- too high a dose",
          "Rest days don't matter for experienced runners"
        ],
        correctIndex: 2,
        explanation: "This demonstrates the dose-response curve. Going from 3 to 7 days without rest pushes past the optimal dose into the harmful range. The body needs recovery time to adapt and strengthen."
      },
      {
        type: "true-false",
        id: "dose-response-ex-2",
        statement: "If a small amount of something is beneficial, more of it is always better.",
        correct: false,
        explanation: "This is a common and dangerous misconception. The dose-response relationship shows that benefits peak at an optimal level, and exceeding it can cause harm. This applies to supplements, exercise, medications, and much more."
      },
      {
        type: "scenario",
        id: "dose-response-ex-3",
        scenario: "A gardener discovers that 1 tablespoon of fertilizer per plant produces great growth. Eager for even better results, she uses 5 tablespoons per plant.",
        question: "What principle explains why her plants might actually grow worse or die?",
        options: [
          "Supply and demand -- too much supply of fertilizer",
          "Dose-response -- exceeding the optimal dose causes harm",
          "Diminishing returns -- each tablespoon does less",
          "Sunk cost -- she wasted fertilizer she can't get back"
        ],
        correctIndex: 1,
        explanation: "This is a classic dose-response issue. Fertilizer 'burn' happens when the concentration exceeds what roots can handle. The dose moved from beneficial to toxic."
      },
      {
        type: "fill-in-blank",
        id: "dose-response-ex-4",
        textBefore: "The famous saying 'the dose makes the",
        textAfter: "' was coined by Paracelsus and captures the essence of dose-response.",
        acceptedAnswers: ["poison", "remedy"],
        hint: "Even harmless substances become dangerous at high doses",
        explanation: "Paracelsus, the father of toxicology, recognized that ANY substance can be harmful at the wrong dose. Water, oxygen, vitamins -- all can be toxic in excess."
      }
    ],
    relatedModelIds: ["homeostasis", "diminishing-returns", "hormesis"],
    tags: ["medicine", "fitness", "nutrition", "balance"]
  },
  {
    id: "homeostasis",
    categoryId: "health",
    title: "Homeostasis",
    emoji: "\u{2696}\uFE0F",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Your body is a thermostat that's been set to 'alive' and will fight like crazy to stay there.",
      analogy: "Imagine your house has a really smart thermostat set to 72\u00B0F. When it gets cold outside, the heater kicks on. When it gets hot, the AC blasts. Your body does the exact same thing with EVERYTHING: temperature, blood sugar, hydration, sleep, mood. It constantly makes tiny adjustments to keep things in the sweet spot. That's homeostasis -- your body's obsession with balance.",
      sections: [
        {
          title: "The Body's Autopilot",
          content: "You don't decide to sweat when you're hot. You don't choose to shiver when you're cold. Your body just DOES it. Got too much sugar in your blood? Insulin deploys. Blood pressure dropping? Heart beats faster. This invisible autopilot runs 24/7, making millions of micro-adjustments you'll never notice. It's the reason you're alive right now without having to think about staying alive."
        },
        {
          title: "Why Change Feels So Hard",
          content: "Start a diet and your body screams for the old foods. Start exercising and everything hurts. Try to change your sleep schedule and you feel like a zombie. Your body RESISTS change because its job is to maintain the status quo -- even if the status quo is unhealthy. This is why crash diets fail: your body fights back by slowing metabolism and cranking up hunger. Lasting change means slowly shifting your body's 'set point' rather than fighting against homeostasis."
        }
      ],
      ahaQuote: "Your body doesn't care about your goals -- it cares about staying the same.",
      realWorldExample: "You go on a strict 1,200-calorie diet. For the first week, you lose weight fast. Then your body notices the change and hits the brakes: metabolism slows, hunger hormones skyrocket, energy drops, and you start burning fewer calories. Your body is actively working to return to its previous weight. Sustainable change means working WITH homeostasis, not against it."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "homeostasis-ex-1",
        question: "Why do crash diets almost always fail in the long run?",
        options: [
          "People don't have enough willpower",
          "The body's homeostatic mechanisms fight to restore the previous weight",
          "All diets are ineffective regardless of approach",
          "People don't exercise enough while dieting"
        ],
        correctIndex: 1,
        explanation: "Homeostasis causes the body to resist rapid changes. When calories drop dramatically, the body lowers metabolism, increases hunger hormones, and conserves energy -- all to return to its set point."
      },
      {
        type: "true-false",
        id: "homeostasis-ex-2",
        statement: "Homeostasis means your body always returns to a healthy state.",
        correct: false,
        explanation: "Homeostasis maintains whatever state your body is currently adapted to -- even if that state is unhealthy. A person adapted to a sedentary lifestyle will experience homeostatic resistance when trying to become active, even though activity is healthier."
      },
      {
        type: "fill-in-blank",
        id: "homeostasis-ex-3",
        textBefore: "Homeostasis is the body's tendency to maintain a stable internal",
        textAfter: "despite changes in the external environment.",
        acceptedAnswers: ["environment", "balance", "equilibrium", "state", "condition"],
        hint: "Think of what the thermostat tries to maintain",
        explanation: "Homeostasis keeps internal conditions stable -- temperature, pH, blood sugar, hydration -- regardless of what's happening outside the body."
      },
      {
        type: "real-world",
        id: "homeostasis-ex-4",
        challenge: "Think of a time when your body or habits resisted a positive change you were trying to make.",
        prompts: [
          "What change were you trying to make?",
          "How did your body or mind resist the change?",
          "How could you work WITH homeostasis instead of against it?"
        ],
        exampleResponse: "I tried switching from sleeping at 1am to 10pm. For two weeks, I lay in bed wide awake at 10pm because my body was calibrated for 1am. Working WITH homeostasis, I shifted 15 minutes earlier each week instead of 3 hours at once. After 12 weeks, 10pm felt natural because I slowly moved the set point."
      }
    ],
    relatedModelIds: ["dose-response", "progressive-overload", "status-quo-bias"],
    tags: ["biology", "balance", "adaptation", "health"]
  },
  {
    id: "progressive-overload",
    categoryId: "health",
    title: "Progressive Overload",
    emoji: "\u{1F4AA}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "If you carry the same grocery bags every day, you'll never get stronger. You need heavier groceries.",
      analogy: "There's an ancient story about Milo of Croton, who carried a baby calf on his shoulders every day. As the calf grew into a bull, Milo grew strong enough to carry it. He didn't jump from lifting a calf to lifting a bull overnight -- the weight increased gradually, day by day. That's progressive overload: slowly and consistently increasing the challenge so your body has no choice but to adapt.",
      sections: [
        {
          title: "The Body Only Responds to NEW Challenges",
          content: "Your muscles don't grow because you exercise. They grow because you exercise at a level they're NOT used to. If you can comfortably lift 20 pounds, lifting 20 pounds forever just maintains what you have. To grow, you need 22 pounds. Then 25. Then 28. Your body is lazy in the best way possible -- it won't build resources it doesn't need."
        },
        {
          title: "Beyond the Gym",
          content: "Progressive overload isn't just for muscles. Want to get better at public speaking? Start with 3 people, then 10, then 50, then 200. Learning a language? Start with 'hello' and build to conversations. The principle is universal: growth requires progressively harder challenges, not the same challenge repeated forever."
        }
      ],
      ahaQuote: "What doesn't challenge you doesn't change you.",
      realWorldExample: "Week 1: You can barely jog for 5 minutes. Week 4: You jog for 10 minutes. Week 8: You're running 20 minutes. Week 16: You run a 5K without stopping. At each stage, you pushed slightly beyond your comfort zone. If you'd stayed at 5 minutes forever, you'd still be a 5-minute jogger."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "progressive-overload-ex-1",
        question: "Someone has been lifting the same 15-pound dumbbells for 6 months. They haven't noticed any strength gains in the last 4 months. What's wrong?",
        options: [
          "They need a completely different exercise program",
          "They're not applying progressive overload -- the stimulus isn't increasing",
          "15 pounds is too heavy and they should go lighter",
          "They should take 4 months off and start over"
        ],
        correctIndex: 1,
        explanation: "Without progressively increasing the challenge (weight, reps, or sets), the body has no reason to adapt further. The same stimulus produces the same (maintenance) result."
      },
      {
        type: "true-false",
        id: "progressive-overload-ex-2",
        statement: "Progressive overload means you should dramatically increase weight or intensity every single workout.",
        correct: false,
        explanation: "Progressive overload should be gradual and sustainable. Jumping too fast leads to injury. Small, consistent increases (even 2-5% per week) compound into massive gains over time."
      },
      {
        type: "scenario",
        id: "progressive-overload-ex-3",
        scenario: "Two students are learning guitar. Student A practices the same 3 easy songs every day for a year. Student B starts with easy songs, then adds harder ones each month, and practices tricky sections until they're smooth.",
        question: "After one year, who will likely be the better guitarist and why?",
        options: [
          "Student A, because repetition is the key to mastery",
          "They'll be equally skilled since they practiced the same amount of time",
          "Student B, because they applied progressive overload by continually increasing difficulty",
          "Student A, because focusing on fewer songs means deeper mastery"
        ],
        correctIndex: 2,
        explanation: "Student B applied progressive overload: consistently increasing difficulty forces the brain and fingers to develop new skills. Student A plateaued after mastering 3 easy songs."
      },
      {
        type: "matching",
        id: "progressive-overload-ex-4",
        instruction: "Match each way to apply progressive overload in strength training.",
        pairs: [
          { left: "Add more weight", right: "Increase intensity" },
          { left: "Do more repetitions", right: "Increase volume" },
          { left: "Do the same workout in less time", right: "Increase density" },
          { left: "Slow down each repetition", right: "Increase time under tension" }
        ],
        explanation: "Progressive overload can be achieved multiple ways: heavier weight, more reps, more sets, shorter rest periods, or slower controlled movements. All force the body to adapt to a new challenge."
      }
    ],
    relatedModelIds: ["dose-response", "diminishing-returns", "homeostasis"],
    tags: ["fitness", "growth", "training", "adaptation"]
  },
  {
    id: "hormesis",
    categoryId: "health",
    title: "Hormesis",
    emoji: "\u{1F525}",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "A little bit of poison can actually make you stronger. Seriously.",
      analogy: "You know how vaccines work? You get a tiny, harmless dose of a virus, and your immune system goes to battle stations, building defenses that protect you from the real thing. That's hormesis in action: a small stress that would be dangerous in large amounts actually triggers your body to become TOUGHER. Small fire = fireproof. Small poison = antidote. Small challenge = superpower.",
      sections: [
        {
          title: "Stress as a Superpower",
          content: "Cold showers, fasting, exercise, even sunlight -- these are all mild stressors. In small doses, they trigger repair and strengthening mechanisms in your body. Exercise literally tears your muscles (stress!), and your body rebuilds them stronger. Fasting triggers cellular cleanup (autophagy). Cold exposure boosts your immune system. The key word is SMALL. Too much of any of these kills you."
        },
        {
          title: "The Hormetic Zone",
          content: "Think of it as three zones: too little stress (you're comfortable but not growing), the hormetic zone (just enough stress to trigger adaptation), and too much stress (you break down). The trick is finding and staying in that middle sweet spot. It's the Goldilocks zone of challenge -- not too easy, not too crushing, just enough to make you better."
        }
      ],
      ahaQuote: "What doesn't kill you (in a carefully controlled dose) literally makes you stronger.",
      realWorldExample: "People who live in ultra-clean, sterile environments tend to develop MORE allergies and autoimmune issues than people exposed to a reasonable amount of dirt, pets, and germs as children. The small doses of 'stress' from everyday germs trained their immune systems. Too clean = weak immune system. A little dirty = robust defenses."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "hormesis-ex-1",
        question: "Which of the following is an example of hormesis?",
        options: [
          "Eating a balanced meal every day",
          "Brief cold exposure triggering improved immune function",
          "Sleeping 8 hours per night consistently",
          "Drinking plenty of water throughout the day"
        ],
        correctIndex: 1,
        explanation: "Hormesis requires a mild stressor that triggers a beneficial adaptive response. Cold exposure is a controlled stress that activates immune and metabolic improvements. The other options are basic healthy habits, not stress-triggered adaptations."
      },
      {
        type: "true-false",
        id: "hormesis-ex-2",
        statement: "Hormesis proves that all types of stress are beneficial for health.",
        correct: false,
        explanation: "Hormesis only works with small, controlled doses of specific stressors. Chronic stress, toxic exposure, and excessive physical strain are harmful. The dose and type of stress both matter enormously."
      },
      {
        type: "fill-in-blank",
        id: "hormesis-ex-3",
        textBefore: "Hormesis is the principle that a low dose of a substance or stressor that is harmful in large amounts can actually produce a",
        textAfter: "response in the body.",
        acceptedAnswers: ["beneficial", "positive", "protective", "strengthening"],
        hint: "What kind of effect does a small stress produce?",
        explanation: "Hormesis describes how mild stressors trigger beneficial adaptive responses. The organism becomes stronger, more resilient, and better prepared for future challenges."
      },
      {
        type: "scenario",
        id: "hormesis-ex-4",
        scenario: "Two groups of plants are studied. Group A is kept in a perfectly controlled greenhouse with no wind. Group B is exposed to moderate wind for 2 hours daily. After 3 months, the researchers compare the plants.",
        question: "Based on hormesis, what would you predict?",
        options: [
          "Group A is healthier because it had no stress",
          "Group B has stronger, thicker stems from adapting to wind stress",
          "Both groups would be identical since wind doesn't affect growth",
          "Group B would be smaller and weaker from the constant stress"
        ],
        correctIndex: 1,
        explanation: "This is a real phenomenon called thigmomorphogenesis. Plants exposed to moderate mechanical stress (wind) develop thicker, stronger stems. The mild stress triggers a beneficial adaptive response -- textbook hormesis."
      }
    ],
    relatedModelIds: ["dose-response", "progressive-overload", "stress-performance-curve"],
    tags: ["biology", "stress", "adaptation", "resilience"]
  },
  {
    id: "recovery-principle",
    categoryId: "health",
    title: "Recovery Principle",
    emoji: "\u{1F6CF}\uFE0F",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "You don't get stronger during the workout. You get stronger during the nap afterward.",
      analogy: "Imagine you're a construction crew. The workout is when you DEMOLISH the old building (your muscles). Recovery is when you REBUILD it -- bigger and better than before. But here's the thing: if the demolition crew shows up again before the construction crew finishes, you're left with rubble. No rebuilding, no improvement, just a pile of broken bricks. That's what happens when you skip recovery.",
      sections: [
        {
          title: "The Growth Happens in Rest",
          content: "During exercise, you create microscopic tears in your muscles, deplete energy stores, and stress your nervous system. During rest, your body repairs those tears (making muscles bigger), refills energy stores (making you more efficient), and recalibrates your nervous system (making you faster). Skip the rest and you skip the upgrade. It's not lazy -- it's the actual work of getting stronger."
        },
        {
          title: "Sleep: The Ultimate Recovery Tool",
          content: "Human growth hormone is released primarily during deep sleep. Muscle protein synthesis peaks while you're snoozing. Memory consolidation of new skills happens overnight. A hard workout followed by 5 hours of sleep produces far less adaptation than a moderate workout followed by 8 hours of sleep. The athletes who sleep the best, perform the best."
        }
      ],
      ahaQuote: "Rest is not the opposite of productivity. Rest is how you PRODUCE the results.",
      realWorldExample: "Elite athletes train hard but also nap, stretch, and sleep 9-10 hours. LeBron James reportedly sleeps 12 hours on game days. Meanwhile, weekend warriors train 7 days straight, skip sleep, and wonder why they're always tired and injured. The secret weapon of top performers isn't more training -- it's better recovery."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "recovery-principle-ex-1",
        question: "When does muscle growth actually occur?",
        options: [
          "During the workout itself",
          "Immediately after the last rep",
          "During rest and recovery periods between workouts",
          "Only when you eat protein"
        ],
        correctIndex: 2,
        explanation: "Exercise provides the stimulus (stress and micro-damage), but the actual growth and adaptation occurs during rest periods when the body repairs and reinforces the stressed tissues."
      },
      {
        type: "true-false",
        id: "recovery-principle-ex-2",
        statement: "Taking a rest day when you're sore or fatigued is a sign of laziness.",
        correct: false,
        explanation: "Rest days are a critical part of any training program. Soreness and fatigue are signals that your body is still repairing from the previous stimulus. Training through these signals increases injury risk and decreases performance gains."
      },
      {
        type: "scenario",
        id: "recovery-principle-ex-3",
        scenario: "Two runners are training for a marathon. Runner A trains intensely every day. Runner B alternates hard training days with easy days and takes one full rest day per week.",
        question: "After 3 months, who is more likely to be performing better?",
        options: [
          "Runner A because they logged more miles",
          "Runner B because structured recovery allows the body to adapt and strengthen",
          "They'll perform the same since total effort is similar",
          "Runner A because rest days make you lose fitness"
        ],
        correctIndex: 1,
        explanation: "Runner B follows the recovery principle. Hard-easy alternation allows the body to adapt and supercompensate. Runner A risks overtraining syndrome, which actually decreases performance over time."
      },
      {
        type: "real-world",
        id: "recovery-principle-ex-4",
        challenge: "Apply the recovery principle to a non-physical area of your life.",
        prompts: [
          "Where in your life are you 'training' without adequate recovery?",
          "What does 'rest' look like for your brain, emotions, or creativity?",
          "How could you structure recovery periods into your work schedule?"
        ],
        exampleResponse: "I work on creative projects 7 days a week and wonder why my ideas feel stale. Applying the recovery principle, I'd take Sundays completely off creative work -- no writing, no brainstorming, just reading fiction and walking. Monday's ideas would be fresh because my creative 'muscles' had time to recover and grow."
      }
    ],
    relatedModelIds: ["progressive-overload", "homeostasis", "stress-performance-curve"],
    tags: ["fitness", "rest", "sleep", "performance"]
  },
  {
    id: "stress-performance-curve",
    categoryId: "health",
    title: "Stress-Performance Curve (Yerkes-Dodson Law)",
    emoji: "\u{1F3AF}",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "A little pressure makes diamonds. Too much pressure makes dust.",
      analogy: "Think of a rubber band. No stretch at all? It's useless, just sitting there. Stretch it a little? It can hold things together, launch paper balls, make slingshots -- it's at its best! Stretch it too far? SNAP! That's your brain and body with stress. Zero stress = boredom. Optimal stress = peak performance. Too much stress = breakdown.",
      sections: [
        {
          title: "The Upside-Down U",
          content: "If you plot stress on the X-axis and performance on the Y-axis, you get an upside-down U shape. Performance INCREASES with stress up to a point (the sweet spot), then it DECREASES as stress becomes overwhelming. This is why a little exam pressure helps you study, but panic makes you forget everything you learned. The curve looks different for everyone and for every task."
        },
        {
          title: "Finding Your Peak Zone",
          content: "Simple tasks can handle more stress -- you can run faster when someone's chasing you. Complex tasks need less stress -- you can't solve a math problem while someone screams at you. This means the sweet spot shifts depending on what you're doing. For creative work, you need calm focus. For physical performance, you need activation energy. The skill is matching your stress level to the task."
        }
      ],
      ahaQuote: "The goal isn't zero stress -- it's the RIGHT amount of stress for the RIGHT task.",
      realWorldExample: "A job interview: Zero nervousness and you seem disinterested and flat. Moderate nervousness and you're sharp, energized, and engaged -- your best self. Extreme nervousness and you're stammering, sweating, and blanking on answers. Same person, same interview, three very different performances based solely on stress level."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "stress-performance-curve-ex-1",
        question: "According to the Yerkes-Dodson Law, when does peak performance occur?",
        options: [
          "When stress is at zero -- you're completely relaxed",
          "When stress is at a moderate, optimal level",
          "When stress is at maximum -- pressure creates diamonds",
          "Stress level doesn't affect performance"
        ],
        correctIndex: 1,
        explanation: "The Yerkes-Dodson Law shows that performance peaks at moderate stress levels. Both too little stress (understimulation) and too much stress (overwhelm) decrease performance."
      },
      {
        type: "true-false",
        id: "stress-performance-curve-ex-2",
        statement: "Complex tasks require higher stress levels than simple tasks for optimal performance.",
        correct: false,
        explanation: "It's actually the opposite. Complex tasks require lower stress levels for optimal performance, while simple or physical tasks can benefit from higher arousal. Too much stress impairs the cognitive functions needed for complex problem-solving."
      },
      {
        type: "matching",
        id: "stress-performance-curve-ex-3",
        instruction: "Match each stress level with its likely performance outcome.",
        pairs: [
          { left: "Very low stress before a presentation", right: "Low energy, seeming disengaged or unprepared" },
          { left: "Moderate stress before a presentation", right: "Alert, focused, and performing at your best" },
          { left: "Very high stress before a presentation", right: "Panicking, forgetting key points, freezing up" },
          { left: "Chronic overwhelming stress at work", right: "Burnout, decreased productivity, health problems" }
        ],
        explanation: "The stress-performance curve shows how different stress levels produce vastly different outcomes. Finding the moderate sweet spot is key to consistent peak performance."
      },
      {
        type: "scenario",
        id: "stress-performance-curve-ex-4",
        scenario: "A manager wants her team to perform at their best on a critical project. She's considering two approaches: (A) Create extreme urgency with tight deadlines and constant pressure, or (B) Set clear but achievable goals with appropriate deadlines.",
        question: "Which approach is more likely to produce the best results?",
        options: [
          "Approach A -- pressure creates peak performance in all situations",
          "Approach B -- moderate challenge without overwhelming stress hits the peak of the curve",
          "Neither -- stress has no impact on team performance",
          "Approach A for creative tasks, Approach B for routine tasks"
        ],
        correctIndex: 1,
        explanation: "Approach B aligns with the Yerkes-Dodson Law. Moderate, purposeful challenge (clear goals, achievable deadlines) produces peak performance. Extreme pressure pushes the team past the peak into anxiety, mistakes, and burnout."
      }
    ],
    relatedModelIds: ["hormesis", "recovery-principle", "dose-response"],
    tags: ["psychology", "performance", "stress", "productivity"]
  },
  {
    id: "keystone-habits",
    categoryId: "health",
    title: "Keystone Habits",
    emoji: "\u{1F5DD}\uFE0F",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Some habits are like dominoes -- knock one over and a hundred others fall into place.",
      analogy: "In architecture, a keystone is the ONE stone at the top of an arch that holds all the other stones in place. Remove it and the whole arch collapses. Keystone habits work the same way: they're single habits that automatically trigger a cascade of other good behaviors. Start exercising (one habit) and suddenly you eat better, sleep more, drink less, feel more confident, and get more done at work. One domino, many tiles.",
      sections: [
        {
          title: "Small Habit, Chain Reaction",
          content: "Research found that when people started making their beds every morning, they also improved their productivity, stuck to budgets better, and exercised more. Making your bed didn't CAUSE those things directly -- but it created a sense of control and accomplishment that bled into everything else. Keystone habits create a ripple effect because they change your identity: 'I'm the kind of person who...'"
        },
        {
          title: "Finding YOUR Keystone Habit",
          content: "Common keystone habits include exercise, meditation, journaling, tracking what you eat, and getting enough sleep. But yours might be different. The clue is: which ONE habit, when you're doing it consistently, makes everything else in your life better? Which habit, when you STOP doing it, causes everything to unravel? That's your keystone."
        }
      ],
      ahaQuote: "You don't have to change everything. You just have to change the ONE thing that changes everything else.",
      realWorldExample: "When Alcoa's new CEO Paul O'Neill took over, he didn't focus on profits or innovation. He focused on ONE thing: worker safety. Surprisingly, by obsessing over safety, the whole company's culture transformed -- communication improved, processes became more efficient, quality went up, and Alcoa became one of the most profitable companies in America. Safety was the keystone habit."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "keystone-habits-ex-1",
        question: "What makes a habit a 'keystone' habit?",
        options: [
          "It's the hardest habit to maintain",
          "It naturally triggers a cascade of other positive behaviors",
          "It must be done at the exact same time every day",
          "It requires the most willpower to sustain"
        ],
        correctIndex: 1,
        explanation: "A keystone habit is special because it creates a ripple effect -- one good behavior naturally leads to others. It's not about difficulty or timing, but about the chain reaction it produces."
      },
      {
        type: "true-false",
        id: "keystone-habits-ex-2",
        statement: "The same habit is a keystone habit for everyone.",
        correct: false,
        explanation: "Keystone habits are personal. Exercise might be a keystone for one person, while journaling is for another. The key is finding which single habit creates the biggest positive cascade in YOUR life."
      },
      {
        type: "fill-in-blank",
        id: "keystone-habits-ex-3",
        textBefore: "Keystone habits work by creating small wins that trigger a",
        textAfter: "of other positive behaviors.",
        acceptedAnswers: ["cascade", "chain", "chain reaction", "ripple", "series", "domino effect"],
        hint: "Like dominoes falling...",
        explanation: "Keystone habits create a cascade or chain reaction. One positive behavior builds momentum and confidence that flows into other areas of life."
      },
      {
        type: "real-world",
        id: "keystone-habits-ex-4",
        challenge: "Identify your personal keystone habit.",
        prompts: [
          "When you're doing well in life, which ONE habit is usually in place?",
          "When things fall apart, which habit was the first to slip?",
          "What single change would create the biggest ripple effect?"
        ],
        exampleResponse: "My keystone habit is morning exercise. When I work out first thing, I eat healthier (don't want to 'waste' the workout), drink more water, sleep earlier (I'm tired in a good way), and am more productive at work (exercise clears my mind). When I skip exercise for a few days, junk food creeps back, I stay up late, and my focus drops."
      }
    ],
    relatedModelIds: ["compound-interest", "progressive-overload", "homeostasis"],
    tags: ["habits", "behavior-change", "productivity", "wellness"]
  }
];
