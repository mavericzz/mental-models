import type { MentalModel } from "../../types/models";

export const negotiationModels: MentalModel[] = [
  {
    id: "batna",
    categoryId: "negotiation",
    title: "BATNA",
    emoji: "🛡️",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "Ever notice how you're way braver asking for a raise when you already have another job offer in your pocket?",
      analogy: "BATNA is like having a packed lunch when you go to a restaurant. If the menu prices are crazy or the food looks bad, you can just shrug, pull out your sandwich, and walk away. The restaurant needs you more than you need them — because you've got options.",
      sections: [
        {
          title: "Your Secret Superpower at the Table",
          content: "BATNA stands for Best Alternative To a Negotiated Agreement. It's your Plan B — the best thing you can do if this deal falls apart. The stronger your Plan B, the more confident you are, and the less desperate you seem. People can smell desperation like a dog smells bacon, and it never helps you get a better deal."
        },
        {
          title: "How to Build a Better Backup Plan",
          content: "Before any negotiation, ask yourself: 'What will I do if we can't agree?' Then actively improve that alternative. Applying to other jobs before asking for a raise. Getting quotes from competing vendors. Researching alternative apartments. The more effort you put into your backup plan, the more power you walk into the room with — even if you never mention it."
        },
        {
          title: "Know Theirs Too",
          content: "Here's the advanced move: figure out their BATNA as well. If you're the only supplier who can deliver on time, their alternative is terrible, and you have more leverage than you think. Negotiation is really a game of who needs this deal less."
        }
      ],
      ahaQuote: "You never negotiate from strength until you're genuinely okay with walking away.",
      realWorldExample: "You're buying a used car. Before you even show up, you've found two other similar cars online at reasonable prices. When the seller won't budge on price, you calmly say, 'I appreciate it, but I've got a couple other options I'm considering.' Suddenly they're willing to talk."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "batna-ex-1",
        question: "What does BATNA stand for?",
        options: [
          "Best Approach To Negotiating Agreements",
          "Best Alternative To a Negotiated Agreement",
          "Basic Agreement Terms for New Arrangements",
          "Better Alternatives Through Negotiation Analysis"
        ],
        correctIndex: 1,
        explanation: "BATNA stands for Best Alternative To a Negotiated Agreement — it's your best Plan B if the current deal falls through."
      },
      {
        type: "scenario",
        id: "batna-ex-2",
        scenario: "You're negotiating your salary at a new company. You have no other job offers and just quit your old job last week.",
        question: "What's the biggest problem with your position?",
        options: [
          "You don't have enough experience to negotiate",
          "Your BATNA is very weak, so you have little leverage",
          "You should never negotiate salary at a new company",
          "The company already knows your old salary"
        ],
        correctIndex: 1,
        explanation: "With no other offers and no current job, your BATNA (alternative) is unemployment — which is terrible. This desperation weakens your bargaining position significantly."
      },
      {
        type: "true-false",
        id: "batna-ex-3",
        statement: "You should always reveal your BATNA to the other party to show strength.",
        correct: false,
        explanation: "Revealing your BATNA can backfire. If it's strong, hinting is enough. If it's weak, revealing it hands the other side all the power. Strategic ambiguity often serves you better."
      },
      {
        type: "real-world",
        id: "batna-ex-4",
        challenge: "Think of an upcoming negotiation in your life — a purchase, a work discussion, or even deciding on plans with friends. Identify your BATNA and brainstorm one way to strengthen it before the conversation happens.",
        prompts: [
          "What is the negotiation about?",
          "What is your current best alternative if things don't work out?",
          "How could you improve that alternative before the negotiation?"
        ],
        exampleResponse: "I'm renewing my apartment lease and the landlord wants to raise rent 15%. My current BATNA is finding another apartment — which is stressful. To strengthen it, I'll spend this weekend viewing two other places so I have real alternatives and can negotiate from a genuine position of choice."
      }
    ],
    relatedModelIds: ["zopa", "anchoring-negotiation", "win-win-thinking"],
    tags: ["negotiation", "leverage", "strategy", "preparation"]
  },
  {
    id: "zopa",
    categoryId: "negotiation",
    title: "ZOPA (Zone of Possible Agreement)",
    emoji: "🎯",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Every deal that's ever been made happened in a magical sweet spot where both sides secretly thought they were winning.",
      analogy: "Imagine you're selling lemonade and you'd accept anything above $1. Your buyer would pay up to $3. That $1-to-$3 range is the ZOPA — the zone where a deal can actually happen. Outside that zone, someone walks away unhappy. Inside it, everyone can leave smiling.",
      sections: [
        {
          title: "The Overlap That Makes Deals Possible",
          content: "ZOPA is the overlap between what a seller will accept at minimum and what a buyer will pay at maximum. If you won't sell your bike for less than $200 and I won't pay more than $150, there's no ZOPA — no deal is possible. But if you'd go as low as $200 and I'd go as high as $250, we have a $50 zone to play in."
        },
        {
          title: "Finding the Zone Without Showing Your Cards",
          content: "The tricky part is that nobody wants to reveal their real limits. If you tell me you'd accept $200, I'll offer exactly $200 — not a penny more. So negotiation becomes a dance of signals and questions, trying to discover the zone without fully exposing your own boundaries. Asking 'What range were you thinking?' is much smarter than 'Here's my absolute minimum.'"
        }
      ],
      ahaQuote: "A deal only exists where both sides' acceptable ranges overlap — your job is to find that overlap without giving away your edge.",
      realWorldExample: "You're at a flea market eyeing a vintage lamp. The seller paid $20 for it and would take anything over $40. You love it and would pay up to $80. The ZOPA is $40-$80. If you start at $35 and they start at $100, you'll dance your way into that zone through offers and counteroffers."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "zopa-ex-1",
        question: "A seller's minimum acceptable price is $500 and a buyer's maximum price is $400. What's the ZOPA?",
        options: [
          "$400 to $500",
          "$450 (the midpoint)",
          "There is no ZOPA — no deal is possible",
          "$500 to $600"
        ],
        correctIndex: 2,
        explanation: "When the seller's minimum ($500) is higher than the buyer's maximum ($400), there's no overlap and therefore no ZOPA. No mutually acceptable deal exists."
      },
      {
        type: "fill-in-blank",
        id: "zopa-ex-2",
        textBefore: "ZOPA stands for Zone of Possible",
        textAfter: ", and it represents the range where a deal can be struck.",
        acceptedAnswers: ["Agreement", "agreement"],
        hint: "Think about what both sides are trying to reach...",
        explanation: "ZOPA stands for Zone of Possible Agreement — the overlap between each party's acceptable terms."
      },
      {
        type: "scenario",
        id: "zopa-ex-3",
        scenario: "You're negotiating a freelance rate. You need at least $75/hour to make it worthwhile. The client has budgeted up to $95/hour. Both of you start the conversation cautiously.",
        question: "What is the ZOPA in this negotiation?",
        options: [
          "$75 to $95 per hour",
          "$85 per hour exactly",
          "$95 or higher",
          "There is no ZOPA"
        ],
        correctIndex: 0,
        explanation: "Your minimum ($75) is below their maximum ($95), creating a ZOPA of $75-$95/hour. Any rate in this range would be acceptable to both sides."
      },
      {
        type: "true-false",
        id: "zopa-ex-4",
        statement: "If a ZOPA exists, a deal will always be reached.",
        correct: false,
        explanation: "Even when a ZOPA exists, deals can fall apart due to ego, poor communication, mistrust, or failure to discover the overlap. A ZOPA is necessary for a deal but not sufficient."
      }
    ],
    relatedModelIds: ["batna", "anchoring-negotiation", "win-win-thinking"],
    tags: ["negotiation", "deal-making", "pricing", "overlap"]
  },
  {
    id: "anchoring-negotiation",
    categoryId: "negotiation",
    title: "Anchoring in Negotiation",
    emoji: "⚓",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "The first number thrown out in any negotiation has a weird, almost magical power over everything that comes after.",
      analogy: "Anchoring is like dropping a heavy anchor from a boat. No matter how far the boat drifts, it stays close to where the anchor landed. In a negotiation, the first number mentioned acts as that anchor — every counteroffer tends to orbit around it, even if it was totally arbitrary.",
      sections: [
        {
          title: "Why the First Number Wins",
          content: "Studies show that even random numbers influence people's estimates. In one famous experiment, spinning a roulette wheel before asking people to guess the number of countries in Africa changed their answers dramatically. In negotiations, whoever sets the first price creates a psychological gravitational pull. A $10,000 asking price makes $7,500 feel like a steal, even if the item is only worth $5,000."
        },
        {
          title: "Using Anchors and Defending Against Them",
          content: "To use anchoring: make the first offer (if you've done your research), and make it ambitious but justifiable. To defend against it: recognize the anchor for what it is, ignore it completely, and re-anchor with your own number based on independent research. The moment you start negotiating off their number, you've already lost ground."
        }
      ],
      ahaQuote: "Whoever names the first number writes the rules of the game — so make sure it's your game.",
      realWorldExample: "A car dealership lists a used car at $25,000. You know it's worth $18,000. But because of the $25K anchor, you feel like you're 'winning' when you negotiate down to $22,000 — even though you just overpaid by $4,000. The anchor did its job."
    },
    exercises: [
      {
        type: "scenario",
        id: "anchoring-negotiation-ex-1",
        scenario: "A freelance designer asks a potential client for their budget. The client says 'We were thinking around $500 for the project.' The designer knows similar projects typically cost $2,000-$3,000.",
        question: "What should the designer do?",
        options: [
          "Accept $500 since the client set the terms",
          "Counter with $750 as a compromise",
          "Ignore the anchor entirely and present their own price with justification",
          "Walk away immediately without responding"
        ],
        correctIndex: 2,
        explanation: "The designer should recognize $500 as an anchor and re-anchor with their own researched price. Negotiating from $500 upward means the client's anchor is controlling the conversation."
      },
      {
        type: "true-false",
        id: "anchoring-negotiation-ex-2",
        statement: "Making the first offer in a negotiation is always a disadvantage because it reveals your position.",
        correct: false,
        explanation: "Research shows the opposite — making the first offer often gives you an advantage because you set the anchor. The key is that your offer should be ambitious, researched, and justifiable."
      },
      {
        type: "multiple-choice",
        id: "anchoring-negotiation-ex-3",
        question: "Why does anchoring work psychologically?",
        options: [
          "People are too lazy to research fair prices",
          "The first number creates a reference point that biases all subsequent judgments",
          "People always accept the first offer they hear",
          "Anchoring only works on uneducated negotiators"
        ],
        correctIndex: 1,
        explanation: "Anchoring exploits a cognitive bias where the first piece of information (the anchor) disproportionately influences subsequent judgments and decisions, even when the anchor is arbitrary."
      },
      {
        type: "fill-in-blank",
        id: "anchoring-negotiation-ex-4",
        textBefore: "To defend against an anchor, you should ignore their number and",
        textAfter: "with your own researched figure.",
        acceptedAnswers: ["re-anchor", "counter", "respond", "come back"],
        hint: "You need to set your own reference point...",
        explanation: "The best defense against anchoring is to re-anchor — set your own number based on independent research rather than negotiating from their starting point."
      }
    ],
    relatedModelIds: ["batna", "zopa", "the-nibble"],
    tags: ["negotiation", "cognitive-bias", "pricing", "psychology"]
  },
  {
    id: "win-win-thinking",
    categoryId: "negotiation",
    title: "Win-Win Thinking",
    emoji: "🤝",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "What if the best way to get more of what you want is to help the other person get more of what they want?",
      analogy: "Two kids fighting over an orange. One wants the juice, the other wants the peel for baking. If they just split it in half, they each get 50%. But if they talk about WHY they want it, they can each get 100% of what they actually need. Win-win isn't about splitting the pie — it's about baking a bigger one.",
      sections: [
        {
          title: "Beyond the Zero-Sum Trap",
          content: "Most people approach negotiation like arm wrestling — one person wins, the other loses. But real life rarely works that way. Win-win thinking means looking for creative solutions where both sides gain value. It requires shifting from 'How do I beat them?' to 'How do we both walk away better off?' This isn't naive idealism — it's actually the most profitable long-term strategy."
        },
        {
          title: "Different Values, Different Wins",
          content: "The secret to win-win is that people value things differently. You might care about price, while they care about delivery speed. You want flexibility, they want commitment. By understanding what the other side truly values (not just what they're asking for), you can make trades that cost you little but mean a lot to them — and vice versa."
        }
      ],
      ahaQuote: "The best negotiators don't claim value — they create it.",
      realWorldExample: "You're negotiating a job offer. The company can't budge on salary due to budget caps, but you discover they're flexible on remote work days. You accept the salary in exchange for three remote days per week — something that costs them nothing but is hugely valuable to you. Both sides celebrate."
    },
    exercises: [
      {
        type: "matching",
        id: "win-win-thinking-ex-1",
        instruction: "Match each negotiation approach with its description.",
        pairs: [
          { left: "Win-Win", right: "Both sides gain value through creative problem-solving" },
          { left: "Win-Lose", right: "One side gains at the other's expense" },
          { left: "Lose-Lose", right: "Both sides end up worse off due to stubbornness" },
          { left: "Compromise", right: "Both sides give up something to meet in the middle" }
        ],
        explanation: "Win-win is distinct from compromise. Compromise means both sides sacrifice. Win-win means both sides actually gain by finding creative trades based on different priorities."
      },
      {
        type: "scenario",
        id: "win-win-thinking-ex-2",
        scenario: "Two departments are fighting over a limited conference room budget. Marketing wants to host a client event; Sales wants a team training day. Both need the same week.",
        question: "What's the best win-win approach?",
        options: [
          "Split the budget 50/50 and let each figure it out",
          "Give priority to whichever department earned more revenue",
          "Explore combining the event — clients attend the training as a demo, saving both budgets",
          "Flip a coin to keep it fair"
        ],
        correctIndex: 2,
        explanation: "Combining the events creates value for both sides: Sales gets their training with real audience engagement, Marketing gets client interaction in a compelling format. This is classic win-win — expanding the pie rather than splitting it."
      },
      {
        type: "true-false",
        id: "win-win-thinking-ex-3",
        statement: "Win-win thinking means always making equal concessions so both sides are happy.",
        correct: false,
        explanation: "Win-win isn't about equal concessions (that's compromise). It's about finding creative solutions where both parties gain value, often by trading things they value differently."
      },
      {
        type: "real-world",
        id: "win-win-thinking-ex-4",
        challenge: "Think of a current disagreement or negotiation in your life. Instead of thinking about what you need to 'win,' explore what the other person truly values and how you might both get what you want.",
        prompts: [
          "What do you want from this situation?",
          "What do you think the other person really values (beyond their stated position)?",
          "What could you offer that costs you little but means a lot to them?"
        ],
        exampleResponse: "My roommate wants to keep the apartment warmer; I want lower utility bills. What they really value is comfort, not a specific temperature. I could suggest they use a heated blanket (cheap to run) while we keep the thermostat moderate. They stay cozy, bills stay reasonable. Both happy."
      }
    ],
    relatedModelIds: ["batna", "zopa", "active-listening"],
    tags: ["negotiation", "collaboration", "creative-solutions", "relationships"]
  },
  {
    id: "mirroring",
    categoryId: "negotiation",
    title: "Mirroring",
    emoji: "🪞",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "Want to get someone to tell you everything? Just repeat their last three words back to them.",
      analogy: "Mirroring is like being a conversational echo. When someone says 'We're really struggling with the timeline,' you simply say '...the timeline?' with a curious tone. It's like holding up a mirror — people see their own words reflected back and feel compelled to elaborate, explain, and reveal more than they planned to.",
      sections: [
        {
          title: "The Simplest Trick That Actually Works",
          content: "FBI hostage negotiator Chris Voss popularized this technique. You repeat the last 1-3 words (or the most critical words) of what someone just said, using an upward inflection. That's it. No paraphrasing, no adding your opinion. Just echo. It works because humans are wired to elaborate when they feel heard but sense the conversation isn't complete."
        },
        {
          title: "Why It's So Powerful",
          content: "Mirroring creates silence after the echo, and most people fill silence with more information. It also builds rapport because repetition signals that you're listening carefully. In negotiations, this extra information is gold — people often reveal their true priorities, concerns, or flexibility without realizing it."
        }
      ],
      ahaQuote: "The less you say, the more they tell you — and the more they tell you, the better your deal.",
      realWorldExample: "Your boss says 'We can't really increase the budget this quarter.' You mirror: 'Can't increase the budget?' After a pause, they elaborate: 'Well, not the overall budget, but we could reallocate from the training line item.' You just discovered flexibility they wouldn't have volunteered."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "mirroring-ex-1",
        question: "Someone says: 'We're not comfortable with those payment terms.' What's the best mirror?",
        options: [
          "'Why not? What terms do you want?'",
          "'Not comfortable with the payment terms?'",
          "'I understand your concern, let me explain why those terms work.'",
          "'What would make you comfortable?'"
        ],
        correctIndex: 1,
        explanation: "A proper mirror repeats the key words with a curious, upward inflection. This invites elaboration without pushing or leading the conversation in any direction."
      },
      {
        type: "true-false",
        id: "mirroring-ex-2",
        statement: "When mirroring, you should paraphrase what the other person said in your own words to show understanding.",
        correct: false,
        explanation: "Mirroring uses their exact words, not your paraphrase. Paraphrasing is a different technique (active listening). The power of mirroring comes from the exact repetition, which triggers an almost reflexive urge to elaborate."
      },
      {
        type: "scenario",
        id: "mirroring-ex-3",
        scenario: "A vendor tells you: 'This is our standard pricing for all clients, and we really can't make exceptions.' You want to find wiggle room.",
        question: "What mirror would be most effective?",
        options: [
          "'Standard pricing... can't make exceptions?'",
          "'That's too bad. What if we increased the order volume?'",
          "'Every client pays the same? That seems unfair.'",
          "'I need you to do better than that.'"
        ],
        correctIndex: 0,
        explanation: "Mirroring 'can't make exceptions' with a curious tone often triggers the vendor to qualify their statement, revealing potential flexibility like volume discounts, longer terms, or bundled services."
      },
      {
        type: "fill-in-blank",
        id: "mirroring-ex-4",
        textBefore: "Mirroring works by repeating the last 1-3",
        textAfter: "of what someone said, using a curious upward inflection.",
        acceptedAnswers: ["words", "key words"],
        hint: "What exactly do you repeat back?",
        explanation: "Mirroring is simply repeating the last 1-3 words (or the most important words) someone just said. This simple technique encourages the other person to elaborate."
      }
    ],
    relatedModelIds: ["labeling", "active-listening", "win-win-thinking"],
    tags: ["negotiation", "communication", "listening", "rapport"]
  },
  {
    id: "labeling",
    categoryId: "negotiation",
    title: "Labeling",
    emoji: "🏷️",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Naming someone's emotion out loud is like a magic spell that makes it lose its power.",
      analogy: "Labeling is like being an emotional weather reporter. Instead of ignoring the storm, you say 'It seems like there's some frustration here' or 'It sounds like this is really important to you.' By naming the cloud, you don't make it rain harder — you actually help it pass faster. People feel understood, defenses drop, and real conversation begins.",
      sections: [
        {
          title: "How to Name What They're Feeling",
          content: "Labeling starts with phrases like 'It seems like...', 'It sounds like...', or 'It looks like...' followed by the emotion or dynamic you observe. Never say 'I think you feel...' because that makes it about you. Keep it tentative and observational. 'It seems like you're worried about the deadline' is disarming. 'You're obviously stressed about the deadline' is confrontational."
        },
        {
          title: "The Neuroscience Behind It",
          content: "Brain imaging studies show that when people label an emotion, activity in the amygdala (the brain's alarm system) actually decreases. It's called 'affect labeling.' In negotiations, this means labeling a counterpart's fear or frustration literally calms their brain down, making them more rational and open to problem-solving."
        }
      ],
      ahaQuote: "Name the emotion to tame the emotion — what you can label, you can navigate.",
      realWorldExample: "You're in a meeting and a colleague is being unusually combative about a proposal. Instead of arguing back, you say: 'It seems like there's a concern that this approach might create more work for your team.' They visibly relax and say 'Yes, exactly' — and now you can address the real issue."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "labeling-ex-1",
        question: "Which of these is a properly formed label?",
        options: [
          "'I think you're being unreasonable about this.'",
          "'You obviously feel upset about the changes.'",
          "'It sounds like the timeline is causing some concern.'",
          "'Don't you think you're overreacting a little?'"
        ],
        correctIndex: 2,
        explanation: "A proper label uses tentative language ('It sounds like...') and names the emotion or concern without judgment. This approach is disarming rather than confrontational."
      },
      {
        type: "scenario",
        id: "labeling-ex-2",
        scenario: "You're negotiating a contract renewal and the client suddenly says: 'We've been looking at other providers. The market has a lot of options right now.'",
        question: "What's the best labeling response?",
        options: [
          "'Are you threatening to leave?'",
          "'It seems like you're feeling uncertain about whether we're still the best fit.'",
          "'We're the best option and I can prove it.'",
          "'That's fine, we have other clients too.'"
        ],
        correctIndex: 1,
        explanation: "This label acknowledges the underlying concern (uncertainty about value) without being defensive or aggressive. It invites them to share what's really driving their hesitation."
      },
      {
        type: "true-false",
        id: "labeling-ex-3",
        statement: "When labeling, you should start with 'I feel that you...' to show empathy.",
        correct: false,
        explanation: "Labels should never start with 'I' because it shifts focus to you. Use 'It seems like...' or 'It sounds like...' to keep the focus on the other person's experience."
      },
      {
        type: "matching",
        id: "labeling-ex-4",
        instruction: "Match each situation with the most appropriate label.",
        pairs: [
          { left: "Client keeps asking about competitor features", right: "It seems like you're concerned we might not keep up with the market" },
          { left: "Team member is quiet in a meeting", right: "It looks like something about this plan is giving you pause" },
          { left: "Vendor keeps emphasizing their costs", right: "It sounds like the margins on this deal are really tight for you" },
          { left: "Partner sighs when you mention the project", right: "It seems like this project has been weighing on you" }
        ],
        explanation: "Effective labels identify the emotion or concern behind the behavior, not the behavior itself. This shows deep listening and opens the door to honest conversation."
      }
    ],
    relatedModelIds: ["mirroring", "active-listening", "nonviolent-communication"],
    tags: ["negotiation", "emotional-intelligence", "empathy", "communication"]
  },
  {
    id: "the-nibble",
    categoryId: "negotiation",
    title: "The Nibble",
    emoji: "🍪",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "Ever notice how the best deals come with a cheeky little ask right at the very end?",
      analogy: "The Nibble is like finishing a big meal at a restaurant and then innocently asking, 'Any chance we could get some complimentary dessert?' The restaurant already has your business, the kitchen is right there, and saying yes costs them almost nothing. But that free dessert? Chef's kiss.",
      sections: [
        {
          title: "The Small Ask at the Finish Line",
          content: "The Nibble is a small, additional request made after the main deal is essentially agreed upon. It works because of momentum and commitment bias — once someone has invested time and emotion into reaching an agreement, they don't want to blow up the whole deal over a small extra. 'Can you throw in free shipping?' right after agreeing on price is a classic nibble."
        },
        {
          title: "Using It and Defending Against It",
          content: "To nibble: wait until the deal feels done, then ask for something small and reasonable. Frame it as almost an afterthought. To defend against nibbles: recognize them instantly, and either say 'I'd need to adjust the main terms if we add that' or simply smile and say 'I think we've got a great deal as-is.' Never give something without getting something back."
        }
      ],
      ahaQuote: "The deal isn't done until it's signed — and the moments just before signing are full of hidden opportunity.",
      realWorldExample: "You've negotiated a great price on a new laptop. As the salesperson is ringing it up, you casually ask, 'Would it be possible to throw in a laptop sleeve with that?' They're not going to undo a $1,200 sale over a $30 accessory. You just nibbled successfully."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "the-nibble-ex-1",
        question: "When is a nibble most effective?",
        options: [
          "At the very beginning of negotiations to set expectations",
          "Right after the main agreement has been reached",
          "During the most heated part of the discussion",
          "Only when the other party makes a mistake"
        ],
        correctIndex: 1,
        explanation: "The nibble works best right after the main deal is agreed upon, when commitment bias makes the other party reluctant to unravel everything over a small request."
      },
      {
        type: "true-false",
        id: "the-nibble-ex-2",
        statement: "A nibble should be a large, significant request to maximize value.",
        correct: false,
        explanation: "Nibbles must be small and seemingly reasonable — that's why they work. A large request after a deal is reached feels like bad faith and can torpedo the entire agreement."
      },
      {
        type: "scenario",
        id: "the-nibble-ex-3",
        scenario: "You've just agreed on a $50,000 contract with a vendor after two weeks of negotiations. They're about to send the final paperwork when they casually say, 'Oh, and we typically charge a $2,000 setup fee on top of the contract price.'",
        question: "What's happening and how should you respond?",
        options: [
          "It's a fair additional cost — just pay it",
          "They're nibbling you — ask what you get in return or push to include it in the existing price",
          "Walk away from the deal entirely",
          "Ignore it and hope it goes away"
        ],
        correctIndex: 1,
        explanation: "This is a classic nibble. Recognize it, and either push back ('Can we fold that into the $50K?') or counter-nibble ('Sure, if you can extend payment terms to net-60')."
      },
      {
        type: "fill-in-blank",
        id: "the-nibble-ex-4",
        textBefore: "The Nibble works because of",
        textAfter: "bias — people don't want to undo a deal they've already emotionally committed to.",
        acceptedAnswers: ["commitment", "sunk cost", "consistency"],
        hint: "Once people invest in something, they tend to stick with it...",
        explanation: "Commitment bias (also related to consistency and sunk cost) makes people reluctant to walk away from a deal they've invested time and emotion into — which is exactly why small last-minute asks often succeed."
      }
    ],
    relatedModelIds: ["anchoring-negotiation", "batna", "zopa"],
    tags: ["negotiation", "tactics", "deal-closing", "psychology"]
  }
];
