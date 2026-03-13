import type { MentalModel } from "../../types/models";

export const timeManagementModels: MentalModel[] = [
  {
    id: "eisenhower-matrix",
    categoryId: "time-management",
    title: "Eisenhower Matrix",
    emoji: "📊",
    difficulty: 1,
    estimatedMinutes: 7,
    eli5: {
      hook: "The president who won World War II organized his entire life with a simple 2x2 box — and it works for your to-do list too.",
      analogy: "The Eisenhower Matrix is like being a hospital ER triage nurse for your tasks. A patient bleeding out (urgent + important) gets seen immediately. A patient with early-stage symptoms (important, not urgent) gets scheduled for follow-up. Someone wanting a mole checked (urgent-feeling but not important) gets redirected. Someone asking about the cafeteria menu (neither) gets ignored. Not everything that screams for attention actually matters.",
      sections: [
        {
          title: "The Four Quadrants",
          content: "Draw a 2x2 grid. The axes are Urgent (needs immediate attention) and Important (contributes to your goals). Q1: Urgent + Important = DO IT NOW (deadline tomorrow, emergency). Q2: Important + Not Urgent = SCHEDULE IT (exercise, learning, relationship building). Q3: Urgent + Not Important = DELEGATE IT (most emails, some meetings, other people's emergencies). Q4: Not Urgent + Not Important = ELIMINATE IT (mindless scrolling, busywork)."
        },
        {
          title: "The Secret: Live in Quadrant 2",
          content: "Most people spend all day in Q1 (firefighting) and Q3 (other people's priorities). The magic is in Q2: important but not urgent tasks. These are the things that prevent fires, build your future, and create real progress — but because they're not screaming for attention, they get neglected. The most successful people are Q2 warriors: they invest in prevention, planning, and growth before things become emergencies."
        }
      ],
      ahaQuote: "What is important is seldom urgent, and what is urgent is seldom important. — Dwight Eisenhower",
      realWorldExample: "Your inbox has 47 emails (feels urgent), you need to prepare for a career-changing presentation next week (important, not urgent), a colleague wants you to review their doc today (their urgency, not yours), and you've been scrolling social media for 20 minutes (neither). The matrix makes the priority order obvious: presentation prep first, emails second, colleague's doc if time allows, social media never."
    },
    exercises: [
      {
        type: "matching",
        id: "eisenhower-matrix-ex-1",
        instruction: "Sort each task into the correct Eisenhower Matrix quadrant.",
        pairs: [
          { left: "Project deadline is tomorrow morning", right: "Q1: Urgent + Important — Do it now" },
          { left: "Weekly exercise routine", right: "Q2: Important + Not Urgent — Schedule it" },
          { left: "Coworker asks you to fix their printer", right: "Q3: Urgent + Not Important — Delegate it" },
          { left: "Reorganizing your pen drawer", right: "Q4: Not Urgent + Not Important — Eliminate it" }
        ],
        explanation: "The matrix helps you see that not all tasks deserve equal attention. The goal is to spend more time in Q2 (prevention and growth) so that Q1 emergencies happen less often."
      },
      {
        type: "scenario",
        id: "eisenhower-matrix-ex-2",
        scenario: "You have 4 hours left in your workday. You need to: (A) respond to 15 non-critical emails, (B) work on a strategic plan due next month, (C) fix a website bug that's frustrating customers right now, (D) attend a meeting someone invited you to about office snack preferences.",
        question: "In what order should you tackle these tasks?",
        options: [
          "A, B, C, D — clear the inbox first to feel productive",
          "C, B, A, skip D — fix the urgent-important bug, then invest in the important plan",
          "D, A, C, B — get the meeting and emails done first since they're quickest",
          "B, C, A, D — strategic work always comes first"
        ],
        correctIndex: 1,
        explanation: "C is Q1 (urgent + important — do now), B is Q2 (important, not urgent — schedule/do next), A is Q3 (urgent-feeling but not critical — batch later), D is Q4 (skip entirely)."
      },
      {
        type: "true-false",
        id: "eisenhower-matrix-ex-3",
        statement: "If you spend most of your time on urgent tasks, you're being highly productive.",
        correct: false,
        explanation: "Spending all your time on urgent tasks (Q1 and Q3) means you're constantly firefighting. The most productive people invest heavily in Q2 (important, not urgent) tasks, which prevents future emergencies and builds long-term success."
      },
      {
        type: "multiple-choice",
        id: "eisenhower-matrix-ex-4",
        question: "Which quadrant should you aim to spend the MOST time in?",
        options: [
          "Q1: Urgent + Important",
          "Q2: Important + Not Urgent",
          "Q3: Urgent + Not Important",
          "Time should be equally split across all four"
        ],
        correctIndex: 1,
        explanation: "Q2 is the sweet spot. Investing in important-but-not-urgent tasks (planning, learning, health, relationships) prevents Q1 emergencies and is where real long-term progress happens."
      }
    ],
    relatedModelIds: ["time-blocking", "eat-the-frog", "batching"],
    tags: ["time-management", "productivity", "prioritization", "decision-making"]
  },
  {
    id: "time-blocking",
    categoryId: "time-management",
    title: "Time Blocking",
    emoji: "🧱",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "A to-do list tells you WHAT to do. Time blocking tells you WHEN — and that single upgrade changes everything.",
      analogy: "Time blocking is like a reservation at a restaurant versus hoping for a walk-in table. With a reservation, your table is guaranteed — nothing else can take it. When you block time on your calendar for deep work, exercise, or planning, you've made a reservation with yourself. Without it, other meetings, emails, and interruptions will gladly sit in your chair.",
      sections: [
        {
          title: "From List to Calendar",
          content: "Instead of writing 'Work on report' on a to-do list and hoping to get to it, you block 9:00-11:00 AM on your calendar specifically for that report. During that block, you treat it like an important meeting — no emails, no Slack, no 'quick questions.' Your calendar becomes a blueprint for your day, not just a record of other people's demands on your time."
        },
        {
          title: "Protect the Block",
          content: "The hardest part isn't creating blocks — it's defending them. When someone tries to schedule over your deep work block, practice saying 'I have a commitment at that time.' You don't owe them details. Your commitment to focused work is just as valid as any meeting. Cal Newport, who popularized this technique, blocks every minute of his workday and credits it for writing multiple bestselling books while being a full-time professor."
        }
      ],
      ahaQuote: "If it's not on your calendar, it's not real. Intentions don't produce results — scheduled commitments do.",
      realWorldExample: "You want to exercise three times a week but 'never have time.' You block 7:00-7:45 AM on Monday, Wednesday, and Friday as 'Exercise — Do Not Move.' Within a month, you haven't missed a single session. The same gym membership that sat unused for 6 months suddenly works — because the time was reserved, not just wished for."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "time-blocking-ex-1",
        question: "What is the main advantage of time blocking over a traditional to-do list?",
        options: [
          "It helps you remember tasks better",
          "It assigns specific time to each task, preventing other things from stealing that time",
          "It makes your tasks take less time",
          "It eliminates the need for prioritization"
        ],
        correctIndex: 1,
        explanation: "A to-do list tells you what needs doing but leaves when as an open question. Time blocking reserves specific calendar time, protecting that work from being displaced by meetings, emails, and interruptions."
      },
      {
        type: "true-false",
        id: "time-blocking-ex-2",
        statement: "Time blocking means your schedule should be rigid and never adjusted once set.",
        correct: false,
        explanation: "Time blocking is a planning tool, not a straightjacket. Real days bring surprises. The skill is in re-blocking when disruptions occur rather than abandoning the system entirely. Adjust the plan, don't scrap it."
      },
      {
        type: "scenario",
        id: "time-blocking-ex-3",
        scenario: "You've blocked 2-4 PM for writing a proposal. At 1:55 PM, a colleague says: 'Can we hop on a quick 30-minute call? It shouldn't take long.'",
        question: "What's the best response?",
        options: [
          "'Sure, the proposal can wait' — always be helpful to colleagues",
          "'I have a commitment from 2-4. Can we do 4:15 instead?'",
          "'No' — without explanation, to protect your time",
          "'Let me check my to-do list and see if the proposal is more important'"
        ],
        correctIndex: 1,
        explanation: "Treat your time block like an appointment. Offering an alternative time is professional and protects your block without being unhelpful. You don't need to explain what your 'commitment' is."
      },
      {
        type: "real-world",
        id: "time-blocking-ex-4",
        challenge: "Look at your calendar for tomorrow. Block specific times for your 3 most important tasks — including buffer time between them. Treat these blocks like meetings you can't cancel.",
        prompts: [
          "What are your 3 most important tasks for tomorrow?",
          "What specific time blocks will you assign to each?",
          "What will you say if someone tries to schedule over one of your blocks?"
        ],
        exampleResponse: "Tasks: (1) Finish quarterly report, (2) Prepare for client presentation, (3) 30-minute walk for exercise. Blocks: 9:00-11:00 report, 11:15-12:30 presentation prep, 12:30-1:00 walk. If someone tries to book over my report block, I'll say: 'I have a commitment until 11 — could we meet at 11:15 or after 1?'"
      }
    ],
    relatedModelIds: ["eisenhower-matrix", "pomodoro-technique", "eat-the-frog"],
    tags: ["time-management", "productivity", "planning", "focus"]
  },
  {
    id: "pomodoro-technique",
    categoryId: "time-management",
    title: "Pomodoro Technique",
    emoji: "🍅",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "You can focus on literally anything for 25 minutes. Yes, even that thing you've been procrastinating on for weeks.",
      analogy: "The Pomodoro Technique is like interval training for your brain. Just as a runner alternates between sprinting and resting, you alternate between 25-minute focus sprints and 5-minute rest breaks. Sprinting for hours leads to burnout. Sprinting in short bursts with recovery keeps you sharp all day. The tomato-shaped kitchen timer it's named after becomes your tiny coach.",
      sections: [
        {
          title: "The Simple Recipe",
          content: "Pick a task. Set a timer for 25 minutes. Work on ONLY that task until the timer rings — no email, no phone, no 'let me just quickly check...' When it rings, take a 5-minute break. That's one 'pomodoro.' After 4 pomodoros, take a longer break (15-30 minutes). The magic is the constraint: 25 minutes is short enough that your brain doesn't resist starting, but long enough to make real progress."
        },
        {
          title: "Why It Defeats Procrastination",
          content: "We don't procrastinate because tasks are hard — we procrastinate because they feel ENDLESS. 'Write the entire report' is overwhelming. 'Work on the report for 25 minutes' is easy. The Pomodoro reframes the commitment from 'finish this huge thing' to 'focus for a tiny window.' And once you start, momentum usually carries you further than you expected."
        }
      ],
      ahaQuote: "You don't have to finish. You just have to start for 25 minutes. The rest takes care of itself.",
      realWorldExample: "You've been avoiding doing your taxes for three weeks. The Pomodoro approach: set a timer for 25 minutes and just start gathering documents. When the timer rings, you've sorted through half your receipts and realized this isn't as bad as you imagined. After the break, you do another pomodoro and you're nearly done. Two hours of dreading replaced by 50 focused minutes."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "pomodoro-technique-ex-1",
        question: "How long is one standard Pomodoro focus session?",
        options: [
          "15 minutes",
          "25 minutes",
          "45 minutes",
          "60 minutes"
        ],
        correctIndex: 1,
        explanation: "A standard Pomodoro is 25 minutes of focused work followed by a 5-minute break. After 4 pomodoros, you take a longer break of 15-30 minutes."
      },
      {
        type: "true-false",
        id: "pomodoro-technique-ex-2",
        statement: "If you're in a state of deep focus when the Pomodoro timer rings, you should always stop immediately.",
        correct: false,
        explanation: "While the technique suggests stopping at the timer, many practitioners adapt it: jot a quick note about where you are, then break, or extend if you're in true flow. The technique is a framework, not a prison. The timer exists to ensure breaks happen, not to interrupt genuine productivity."
      },
      {
        type: "fill-in-blank",
        id: "pomodoro-technique-ex-3",
        textBefore: "The Pomodoro Technique gets its name from the Italian word for",
        textAfter: ", because the inventor used a kitchen timer shaped like one.",
        acceptedAnswers: ["tomato", "Tomato"],
        hint: "Think of a red fruit commonly used in Italian cooking...",
        explanation: "Francesco Cirillo named the technique after his tomato-shaped kitchen timer (pomodoro means tomato in Italian). He developed it as a university student in the late 1980s."
      },
      {
        type: "scenario",
        id: "pomodoro-technique-ex-4",
        scenario: "You're 15 minutes into a Pomodoro session when a colleague sends an 'urgent' Slack message asking about a project status.",
        question: "What should you do?",
        options: [
          "Respond immediately — it's marked as urgent",
          "Note it down, finish your remaining 10 minutes, then respond during your break",
          "Ignore it completely — Pomodoro rules are absolute",
          "Reset your Pomodoro timer and start over after responding"
        ],
        correctIndex: 1,
        explanation: "Jot a quick note ('respond to Sarah about project X') and continue your Pomodoro. Respond during your 5-minute break. Most 'urgent' messages can wait 10 minutes. Protecting your focus block trains others to respect your time too."
      }
    ],
    relatedModelIds: ["time-blocking", "eat-the-frog", "two-minute-rule"],
    tags: ["time-management", "focus", "productivity", "procrastination"]
  },
  {
    id: "eat-the-frog",
    categoryId: "time-management",
    title: "Eat the Frog",
    emoji: "🐸",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "If you have to eat a live frog today, do it first thing in the morning — everything else will feel easy after that.",
      analogy: "Eating the frog is like ripping off a bandaid first thing in the morning. That dreaded task — the one you keep pushing to tomorrow — is your frog. It sits on your to-do list making everything else feel guilty and stressful. But if you tackle it first, before email, before meetings, before your willpower runs out, the rest of your day feels like a victory lap.",
      sections: [
        {
          title: "Why Morning Matters",
          content: "Willpower is a depletable resource. Every decision you make throughout the day — what to eat, which email to answer, what to wear — chips away at it. By afternoon, you've used most of your willpower on small decisions, leaving nothing for the hard task. Morning is when your willpower tank is fullest. That's when you eat the frog."
        },
        {
          title: "Identifying Your Frog",
          content: "Your frog is usually the task that (a) you've been avoiding the longest, (b) would have the biggest positive impact if completed, and (c) makes you slightly uncomfortable just thinking about it. Mark Twain gets credit for the original quote, and Brian Tracy built a whole productivity system around it. The rule is simple: identify the most important, hardest task. Do it first. No negotiating."
        }
      ],
      ahaQuote: "The task you dread most is usually the task that matters most — that's why your brain is trying to avoid it.",
      realWorldExample: "Every morning you check email first because it feels 'productive.' Meanwhile, that difficult client proposal sits untouched for the third day. Tomorrow morning, before opening email, spend your first 90 minutes on the proposal. By 10:30 AM it's done, and every other task that day feels like a breeze in comparison."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "eat-the-frog-ex-1",
        question: "Why should you tackle your hardest task first thing in the morning?",
        options: [
          "Because mornings are when you have the most emails to respond to",
          "Because your willpower and mental energy are highest early in the day",
          "Because your boss is more likely to notice your work in the morning",
          "Because hard tasks take longer and you need a full day for them"
        ],
        correctIndex: 1,
        explanation: "Willpower depletes throughout the day as you make decisions and handle tasks. Morning is when your cognitive resources are freshest, making it the ideal time for your most challenging work."
      },
      {
        type: "true-false",
        id: "eat-the-frog-ex-2",
        statement: "Checking email and doing easy tasks first thing in the morning is a good warm-up before tackling hard work.",
        correct: false,
        explanation: "This is a common productivity trap. Easy tasks feel productive but consume your peak willpower hours. By the time you finish email, your best cognitive energy is gone and the hard task gets pushed to tomorrow — again."
      },
      {
        type: "scenario",
        id: "eat-the-frog-ex-3",
        scenario: "You arrive at work with these tasks: (A) Reply to 10 routine emails, (B) Write a difficult performance review you've been avoiding for a week, (C) Attend a team standup meeting at 9:15, (D) Update a spreadsheet with last month's numbers.",
        question: "Which is your 'frog' and when should you eat it?",
        options: [
          "A — emails are the most numerous and should be cleared first",
          "B — it's the most impactful task you've been avoiding; do it before the standup",
          "C — meetings are always frogs because they waste time",
          "D — spreadsheets are tedious, so get them done first"
        ],
        correctIndex: 1,
        explanation: "The performance review is your frog: it's important, you've been avoiding it, and it makes you uncomfortable. Tackle it immediately when you arrive, before the 9:15 standup. Everything else is easier by comparison."
      },
      {
        type: "fill-in-blank",
        id: "eat-the-frog-ex-4",
        textBefore: "The 'Eat the Frog' concept is often attributed to",
        textAfter: ", who reportedly said that if you eat a live frog first thing in the morning, nothing worse will happen to you the rest of the day.",
        acceptedAnswers: ["Mark Twain", "Twain", "mark twain"],
        hint: "A famous American author and humorist...",
        explanation: "The quote is commonly attributed to Mark Twain (though its actual origin is debated). Brian Tracy popularized the concept as a productivity method in his book 'Eat That Frog!'"
      }
    ],
    relatedModelIds: ["eisenhower-matrix", "pomodoro-technique", "time-blocking"],
    tags: ["time-management", "productivity", "procrastination", "willpower"]
  },
  {
    id: "batching",
    categoryId: "time-management",
    title: "Batching",
    emoji: "📦",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "You wouldn't drive to the grocery store separately for each item on your list — so why do you handle tasks that way?",
      analogy: "Batching is like doing laundry. Nobody washes one sock at a time — you wait until you have a full load, then wash everything together. It's more efficient because the setup cost (sorting clothes, running the machine, waiting for the cycle) only happens once instead of 20 times. Tasks work the same way: group similar ones together and knock them out in one focused session.",
      sections: [
        {
          title: "The Hidden Cost of Task Switching",
          content: "Every time you switch between different types of tasks, your brain needs 15-25 minutes to fully re-engage. Check email, then write code, then check email again, then write code — you've lost nearly an hour just to switching costs. Batching eliminates this: check all emails in one 30-minute window, write code for 3 uninterrupted hours, make all phone calls back-to-back. Same tasks, dramatically less wasted mental energy."
        },
        {
          title: "Common Batches",
          content: "Email: check 2-3 times per day in dedicated windows, not constantly. Meetings: stack them on certain days, leaving other days meeting-free for deep work. Errands: do all of them in one trip. Content creation: write multiple blog posts in one sitting. Admin tasks: batch invoicing, filing, and paperwork into one weekly session. The principle applies to nearly everything."
        }
      ],
      ahaQuote: "A scattered day of 10 different task types produces less than a focused day of 3 batched sessions.",
      realWorldExample: "A freelance designer used to check email between every project task — probably 40 times a day. She switched to batching: email at 9 AM, noon, and 4 PM only. She gained back nearly 2 hours of productive time per day without missing anything important. No client even noticed the change."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "batching-ex-1",
        question: "What is the primary benefit of batching similar tasks together?",
        options: [
          "It makes tasks more enjoyable",
          "It eliminates the mental cost of constantly switching between different task types",
          "It ensures you never forget any tasks",
          "It impresses your manager with your organization skills"
        ],
        correctIndex: 1,
        explanation: "Task switching has a real cognitive cost (15-25 minutes to fully re-engage). Batching eliminates repeated switching by grouping similar tasks, keeping your brain in one mode for longer."
      },
      {
        type: "true-false",
        id: "batching-ex-2",
        statement: "Checking email throughout the day as messages arrive is more responsive and professional than batching email into set times.",
        correct: false,
        explanation: "Constant email checking destroys focus and rarely produces faster meaningful responses. Most emails don't require an instant reply. Batching into 2-3 daily windows is more productive and the response time difference is negligible for most roles."
      },
      {
        type: "matching",
        id: "batching-ex-3",
        instruction: "Match each task type with an effective batching strategy.",
        pairs: [
          { left: "Email responses", right: "3 dedicated 30-minute windows per day" },
          { left: "Phone calls", right: "Back-to-back in a single morning block" },
          { left: "Meetings", right: "Stack on specific days to create meeting-free focus days" },
          { left: "Grocery shopping and errands", right: "One combined trip per week on a set day" }
        ],
        explanation: "Each batch groups similar activities to minimize setup time and context switching. The specific timing can vary, but the principle of grouping similar tasks is universal."
      },
      {
        type: "scenario",
        id: "batching-ex-4",
        scenario: "A content creator writes one blog post per day, switching between research, writing, editing, and social media promotion throughout each day for each post.",
        question: "How could batching improve their workflow?",
        options: [
          "Write more posts per day to increase output",
          "Research 5 posts on Monday, write all 5 on Tuesday-Wednesday, edit all 5 on Thursday, promote all 5 on Friday",
          "Hire someone else to do the tasks they don't enjoy",
          "Work longer hours to compensate for switching costs"
        ],
        correctIndex: 1,
        explanation: "Batching by activity type (research day, writing days, editing day, promotion day) keeps the brain in one mode for extended periods, eliminating the constant switching between very different cognitive tasks."
      }
    ],
    relatedModelIds: ["time-blocking", "pomodoro-technique", "eisenhower-matrix"],
    tags: ["time-management", "productivity", "efficiency", "focus"]
  },
  {
    id: "two-minute-rule",
    categoryId: "time-management",
    title: "Two-Minute Rule",
    emoji: "⏱️",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "If it takes less than two minutes, just do it right now. Not later. Not tomorrow. Now.",
      analogy: "The Two-Minute Rule is like washing a dish right after you use it versus letting it pile up. One dish takes 30 seconds. But 30 dishes in the sink? That's a depressing 30-minute chore you'll procrastinate on for days. Tiny tasks are like those dishes — handle them immediately and they never become a mountain.",
      sections: [
        {
          title: "The Rule from Getting Things Done",
          content: "David Allen's Getting Things Done (GTD) system has one golden rule: if a task takes less than 2 minutes, do it immediately. Don't write it down. Don't schedule it. Don't think about it. Just do it. Replying to that quick email, filing that document, putting away your shoes — the time you'd spend organizing, tracking, and remembering these tasks exceeds the time to simply DO them."
        },
        {
          title: "The Hidden Benefit: Momentum",
          content: "Knocking out three tiny tasks in 5 minutes creates a feeling of accomplishment that propels you into bigger tasks. It's like warming up before a workout — those small wins get your productivity engine running. Plus, clearing mental clutter (the 47 tiny things nagging at the back of your mind) frees up cognitive space for deep work."
        }
      ],
      ahaQuote: "It takes more energy to remember a small task than to do it.",
      realWorldExample: "You open an email asking for a file you already have. Option A: Flag it, add 'send file to Jake' to your to-do list, remember to do it later. Option B: Attach the file, hit send (45 seconds), move on with your life. Option B is always better. The to-do list entry would have haunted you longer than the task itself."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "two-minute-rule-ex-1",
        question: "According to the Two-Minute Rule, what should you do with a task that takes less than 2 minutes?",
        options: [
          "Add it to your to-do list for later",
          "Do it immediately without scheduling or tracking it",
          "Delegate it to someone else",
          "Batch it with other small tasks"
        ],
        correctIndex: 1,
        explanation: "The whole point of the Two-Minute Rule is that tracking, scheduling, and remembering tiny tasks costs more time and energy than just doing them immediately."
      },
      {
        type: "true-false",
        id: "two-minute-rule-ex-2",
        statement: "The Two-Minute Rule means you should interrupt deep work to handle any small task that comes up.",
        correct: false,
        explanation: "The Two-Minute Rule applies when you're processing incoming tasks (checking email, reviewing your inbox), not during dedicated deep work sessions. During focus time, jot down the small task and handle it during a break."
      },
      {
        type: "scenario",
        id: "two-minute-rule-ex-3",
        scenario: "You're going through your inbox and encounter these: (A) An email needing a one-word reply, (B) A request to write a 2-page project summary, (C) A reminder to sign an already-prepared document, (D) An invitation to review a 30-page proposal.",
        question: "Which tasks should be handled immediately using the Two-Minute Rule?",
        options: [
          "All of them — clear the inbox completely",
          "A and C — they each take under 2 minutes",
          "Only A — it's the absolute quickest",
          "None — batch all email responses for later"
        ],
        correctIndex: 1,
        explanation: "A (one-word reply) and C (signing a prepared document) both take under 2 minutes — do them now. B and D require significant time and should be scheduled for later."
      },
      {
        type: "fill-in-blank",
        id: "two-minute-rule-ex-4",
        textBefore: "The Two-Minute Rule was popularized by David Allen in his productivity system called Getting Things",
        textAfter: ".",
        acceptedAnswers: ["Done", "done"],
        hint: "It's a three-word system name, and the last word completes the phrase...",
        explanation: "Getting Things Done (GTD) by David Allen is one of the most influential productivity systems. The Two-Minute Rule is one of its simplest but most impactful principles."
      }
    ],
    relatedModelIds: ["eat-the-frog", "pomodoro-technique", "batching"],
    tags: ["time-management", "productivity", "habits", "quick-wins"]
  },
  {
    id: "hofstadters-law",
    categoryId: "time-management",
    title: "Hofstadter's Law",
    emoji: "⏳",
    difficulty: 2,
    estimatedMinutes: 6,
    eli5: {
      hook: "Everything takes longer than you think — even when you know everything takes longer than you think.",
      analogy: "Hofstadter's Law is like packing for a trip. You think you need 30 minutes. So you add buffer and give yourself 45 minutes. But then you can't find your passport, your suitcase zipper breaks, and you realize you forgot to do laundry. It takes 90 minutes. The beautiful cruelty of this law is that even AFTER reading this, your next time estimate will still be too short. It's a recursive trap.",
      sections: [
        {
          title: "Why We're So Bad at Estimating",
          content: "The planning fallacy (a related concept) explains why: we estimate based on the best-case scenario while ignoring all the things that could go wrong. We think about the work itself but forget about setup time, interruptions, unexpected bugs, dependencies on other people, and the inevitable 'oh, I didn't realize I also needed to...' moments. Our brains are optimism machines when it comes to time."
        },
        {
          title: "What You Can Actually Do About It",
          content: "Track how long things actually take versus your estimates. Most people find they underestimate by 50-100%. Use reference class forecasting: instead of estimating from scratch, look at how long similar tasks took in the past. Add generous buffers. And remember the law's recursive nature — even your buffered estimate is probably too short, so add buffer to your buffer."
        }
      ],
      ahaQuote: "It always takes longer than you expect, even when you take into account Hofstadter's Law. — Douglas Hofstadter",
      realWorldExample: "A software team estimates a feature will take 2 weeks. The manager, knowing about optimistic estimates, adds a week of buffer: 3 weeks. The feature actually takes 5 weeks because of an unexpected API change, a team member getting sick, and three bugs that only appeared during integration testing. Hofstadter's Law strikes again."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "hofstadters-law-ex-1",
        question: "What makes Hofstadter's Law uniquely frustrating?",
        options: [
          "It only applies to software development",
          "It's recursive — it still applies even when you account for it",
          "It assumes people don't learn from experience",
          "It only works for tasks longer than a week"
        ],
        correctIndex: 1,
        explanation: "The law's recursive nature is its defining feature: 'It always takes longer than you expect, even when you take into account Hofstadter's Law.' Knowing about it doesn't fully protect you from it."
      },
      {
        type: "true-false",
        id: "hofstadters-law-ex-2",
        statement: "Experienced professionals are immune to Hofstadter's Law because they've learned to estimate accurately.",
        correct: false,
        explanation: "Research shows that even experienced professionals consistently underestimate task duration. Experience helps, but the planning fallacy affects nearly everyone because we tend to estimate based on best-case scenarios."
      },
      {
        type: "scenario",
        id: "hofstadters-law-ex-3",
        scenario: "Your team estimates a project will take 4 weeks. You're aware of Hofstadter's Law. You add 2 weeks of buffer, making it 6 weeks total. Your boss asks for your final timeline.",
        question: "What's the wisest approach?",
        options: [
          "Promise 6 weeks — you've already added buffer",
          "Promise 4 weeks — show confidence in the team",
          "Say 6 weeks but add another week internally (7 weeks), knowing even buffered estimates tend to fall short",
          "Refuse to give an estimate — timelines are impossible to predict"
        ],
        correctIndex: 2,
        explanation: "Given Hofstadter's Law's recursive nature, even your buffered 6-week estimate may be optimistic. Adding an internal buffer while communicating 6 weeks gives you the best chance of actually delivering on time."
      },
      {
        type: "fill-in-blank",
        id: "hofstadters-law-ex-4",
        textBefore: "The tendency to underestimate task duration because we plan for the best-case scenario is called the",
        textAfter: "fallacy.",
        acceptedAnswers: ["planning", "Planning"],
        hint: "It relates to making future plans...",
        explanation: "The planning fallacy, identified by Kahneman and Tversky, describes our systematic tendency to underestimate task duration. It's the cognitive bias underlying Hofstadter's Law."
      }
    ],
    relatedModelIds: ["eisenhower-matrix", "time-blocking", "eat-the-frog"],
    tags: ["time-management", "estimation", "planning", "cognitive-bias"]
  }
];
