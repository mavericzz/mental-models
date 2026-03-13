import type { MentalModel } from "../../types/models";

export const psychologyModels: MentalModel[] = [
  {
    id: "confirmation-bias",
    categoryId: "psychology",
    title: "Confirmation Bias",
    emoji: "\u{1F50D}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Your brain is a lawyer, not a scientist -- it looks for evidence to WIN, not evidence to learn.",
      analogy: "Imagine you're wearing tinted sunglasses that only let through one color. Everything looks blue! You'd swear the whole world is blue. Confirmation bias is like wearing invisible mental sunglasses: you only notice information that matches what you already believe and filter out everything that doesn't. You don't see the world as it IS -- you see it as YOU are.",
      sections: [
        {
          title: "Your Brain's Favorite Magic Trick",
          content: "Believe your boss hates you? You'll notice every short email but ignore every time they praise your work. Think a political party is evil? You'll remember every scandal but dismiss every good policy. Bought a new car? Suddenly you see that car model EVERYWHERE (it was always there -- you just notice it now). Your brain doesn't search for truth; it searches for confirmation of what it already decided."
        },
        {
          title: "How to Fight It",
          content: "Actively seek out information that DISAGREES with you. Read articles from the other side. Ask: 'What would change my mind?' If nothing could change your mind, that's not a belief -- it's a bias. The strongest thinkers aren't the ones with the most convictions; they're the ones who actively try to prove themselves wrong."
        }
      ],
      ahaQuote: "The first principle is that you must not fool yourself -- and you are the easiest person to fool.",
      realWorldExample: "You think a new diet works, so you track only the days you feel great and ignore the days you feel awful. After a month, you look at your (cherry-picked) evidence and declare the diet a miracle. Meanwhile, someone objectively tracking ALL the data would see no difference. You didn't find evidence -- you manufactured it."
    },
    exercises: [
      {
        type: "scenario",
        id: "confirmation-bias-ex-1",
        scenario: "A manager believes remote workers are less productive. She notices every time a remote worker misses a deadline but doesn't notice the many times remote workers deliver early or stay late online.",
        question: "What cognitive bias is the manager demonstrating?",
        options: [
          "Anchoring -- she's stuck on her first impression",
          "Confirmation bias -- she only notices evidence supporting her existing belief",
          "Dunning-Kruger -- she overestimates her management skills",
          "Loss aversion -- she's afraid of losing control"
        ],
        correctIndex: 1,
        explanation: "The manager selectively notices missed deadlines (confirming her belief) while ignoring contrary evidence (remote workers delivering early). This is textbook confirmation bias -- seeing only what you already believe."
      },
      {
        type: "true-false",
        id: "confirmation-bias-ex-2",
        statement: "Intelligent, well-educated people are immune to confirmation bias.",
        correct: false,
        explanation: "Research shows that intelligent people are actually BETTER at confirmation bias because they're more skilled at constructing elaborate justifications for their existing beliefs. Intelligence makes the bias more sophisticated, not weaker."
      },
      {
        type: "multiple-choice",
        id: "confirmation-bias-ex-3",
        question: "What's the most effective way to counter confirmation bias?",
        options: [
          "Trust your gut -- instincts are more reliable than analysis",
          "Only read news from sources you agree with for consistency",
          "Actively seek information that challenges your existing beliefs",
          "Avoid forming opinions until you have perfect information"
        ],
        correctIndex: 2,
        explanation: "The antidote to confirmation bias is deliberately seeking disconfirming evidence. Ask 'What would prove me wrong?' and go looking for it. This doesn't mean changing your mind on everything -- just stress-testing your beliefs."
      },
      {
        type: "real-world",
        id: "confirmation-bias-ex-4",
        challenge: "Identify a strong belief you hold and try to argue against it.",
        prompts: [
          "What's a belief you feel strongly about?",
          "What evidence exists that contradicts this belief?",
          "What would it take to change your mind?"
        ],
        exampleResponse: "I believe working from home is more productive. But honestly, I mainly remember the productive WFH days and forget the ones I wasted. Contradicting evidence: I sometimes struggle with focus at home, collaboration is harder, and some studies show mixed results. I'd change my mind if I tracked my actual output rigorously for 3 months in both settings and office work won."
      }
    ],
    relatedModelIds: ["anchoring", "availability-heuristic", "cognitive-dissonance"],
    tags: ["cognitive-bias", "critical-thinking", "decision-making", "self-awareness"]
  },
  {
    id: "anchoring",
    categoryId: "psychology",
    title: "Anchoring",
    emoji: "\u{2693}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "The first number you hear in any negotiation secretly controls the entire conversation.",
      analogy: "If I ask you: 'Is the population of Argentina more or less than 200 million?' and then ask you to guess the actual population, you'll guess way higher than if I'd first asked 'more or less than 5 million?' The first number (the anchor) drags your brain toward it like a magnet, even when the anchor is totally random and irrelevant. Your brain doesn't start from zero -- it starts from whatever number it heard first.",
      sections: [
        {
          title: "The Invisible Price Tag",
          content: "This is why stores put a $300 jacket next to a $150 jacket that they actually want to sell. The $300 tag is the anchor -- it makes $150 feel like a bargain. Without the anchor, you'd think $150 for a jacket is expensive. Car dealerships, real estate agents, and salary negotiators ALL use anchoring. The person who throws out the first number has a massive advantage because they've set the anchor that everything else gets compared to."
        },
        {
          title: "Even Experts Get Anchored",
          content: "In one study, experienced judges were given identical case files but different sentencing 'suggestions' from a random dice roll. Judges who rolled high numbers gave longer sentences. JUDGES. People trained specifically to be objective were swayed by literally random numbers. Anchoring is that powerful -- it works even when you know about it, even on experts."
        }
      ],
      ahaQuote: "The person who sets the anchor wins the negotiation before it even starts.",
      realWorldExample: "You're buying a used car. The dealer says '$25,000.' You think, 'That's high, I'll negotiate down to $20,000.' You feel great about saving $5,000. But if the car was worth $15,000, the dealer's anchor cost you $5,000. The anchor made an overpayment FEEL like a victory."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "anchoring-ex-1",
        question: "A store originally prices a coat at $400, then puts it 'on sale' for $250. Why does $250 feel like a great deal?",
        options: [
          "Because $250 IS a great deal for any coat",
          "Because the $400 original price anchors your perception, making $250 seem cheap by comparison",
          "Because stores always price things fairly during sales",
          "Because consumers are naturally good at judging fair prices"
        ],
        correctIndex: 1,
        explanation: "The $400 price tag is the anchor. It sets your reference point, making $250 feel like a steal. Without the $400 anchor, you might think $250 is expensive for a coat. The anchor manipulates your perception of value."
      },
      {
        type: "true-false",
        id: "anchoring-ex-2",
        statement: "Being aware of anchoring makes you immune to its effects.",
        correct: false,
        explanation: "Studies consistently show that anchoring affects people even when they're warned about it. Awareness helps you REDUCE the effect, but doesn't eliminate it. This is why it's important to do independent research before encountering anchors."
      },
      {
        type: "scenario",
        id: "anchoring-ex-3",
        scenario: "You're negotiating your salary for a new job. The recruiter asks, 'What's your current salary?' before discussing the role's budget.",
        question: "Why is this question strategically dangerous for you?",
        options: [
          "It's not dangerous -- transparency is always good",
          "Your current salary becomes the anchor, potentially limiting their offer even if the role is worth more",
          "It only matters if your current salary is very low",
          "Recruiters ask this question randomly with no strategic intent"
        ],
        correctIndex: 1,
        explanation: "Your current salary becomes the anchor for negotiations. If you earn $70K and the role's budget is $100K, revealing your salary anchors the discussion around $70K+ instead of the role's actual value. Better strategy: ask about the role's budget range first."
      },
      {
        type: "fill-in-blank",
        id: "anchoring-ex-4",
        textBefore: "Anchoring is the tendency to rely too heavily on the first piece of",
        textAfter: "encountered when making decisions.",
        acceptedAnswers: ["information", "data", "evidence"],
        hint: "What does the anchor provide?",
        explanation: "Anchoring bias causes us to weight the first piece of information disproportionately. All subsequent judgments are made by adjusting from that initial anchor, usually insufficiently."
      }
    ],
    relatedModelIds: ["framing-effect", "confirmation-bias", "loss-aversion"],
    tags: ["negotiation", "pricing", "cognitive-bias", "decision-making"]
  },
  {
    id: "loss-aversion",
    categoryId: "psychology",
    title: "Loss Aversion",
    emoji: "\u{1F62B}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Losing $100 feels TWICE as painful as finding $100 feels good. Your brain hates losing more than it loves winning.",
      analogy: "Imagine you found a $20 bill on the street. Nice! You feel a little happy bump for maybe an hour. Now imagine you LOST a $20 bill from your wallet. How long do you feel bad about that? Way longer. And it stings way more. Same $20, but losing it hurts about TWICE as much as finding it feels good. Your brain has a negativity alarm that's louder than its positivity celebration.",
      sections: [
        {
          title: "Why We Hold Onto Bad Investments",
          content: "Loss aversion explains why people hold losing stocks forever ('It'll come back!') but sell winning stocks quickly ('Better lock in this gain!'). Realizing a loss HURTS so badly that we'd rather sit in a sinking ship than admit it's sinking. This is why casinos make money: once you're down $200, the pain of leaving with a loss is unbearable, so you keep playing -- and usually lose more."
        },
        {
          title: "Loss Aversion Runs Your Life",
          content: "You stay in a job you hate because leaving feels like 'losing' your seniority. You keep clothes you never wear because donating them feels like a loss. You take the safe route in your career because the potential loss of failure outweighs the potential gain of success. Loss aversion makes you play defense in a game that rewards offense."
        }
      ],
      ahaQuote: "People don't fear failure as much as they fear loss. And they confuse the two.",
      realWorldExample: "A company offers employees two options: (A) a guaranteed $1,000 bonus, or (B) a 50% chance of a $2,500 bonus and 50% chance of nothing. Mathematically, option B is worth $1,250 (better!). But most people pick A because the possibility of getting NOTHING (a loss from expectation) is unbearable, even though option B has higher expected value."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "loss-aversion-ex-1",
        question: "Research suggests losses feel approximately how much more painful than equivalent gains feel good?",
        options: [
          "About the same intensity",
          "About 1.5 times more painful",
          "About 2 times more painful",
          "About 5 times more painful"
        ],
        correctIndex: 2,
        explanation: "Kahneman and Tversky's research found that losses are felt about twice as intensely as equivalent gains. Losing $100 feels roughly as painful as gaining $200 feels good."
      },
      {
        type: "true-false",
        id: "loss-aversion-ex-2",
        statement: "Loss aversion is a rational response that helps us make better financial decisions.",
        correct: false,
        explanation: "Loss aversion is an emotional bias, not a rational calculation. It often leads to WORSE decisions: holding losing investments too long, avoiding beneficial risks, and overvaluing what we already have simply because losing it would hurt."
      },
      {
        type: "scenario",
        id: "loss-aversion-ex-3",
        scenario: "Maya bought a stock at $50. It dropped to $30. Despite research suggesting it will likely drop further, she refuses to sell, saying 'I'll sell when it gets back to $50 so I don't take a loss.'",
        question: "What bias is driving Maya's decision?",
        options: [
          "Confirmation bias -- she only sees positive analysis",
          "Anchoring -- she's anchored to the $50 purchase price",
          "Loss aversion -- realizing the loss is too painful, so she holds hoping to avoid it",
          "Both B and C are at play"
        ],
        correctIndex: 3,
        explanation: "Maya is affected by both anchoring (the $50 purchase price is her reference point) and loss aversion (selling at $30 would mean realizing a painful loss). Together, they keep her in a losing position."
      },
      {
        type: "real-world",
        id: "loss-aversion-ex-4",
        challenge: "Identify where loss aversion is holding you back from a positive change.",
        prompts: [
          "What are you holding onto mainly because letting go feels like losing?",
          "If you hadn't already invested time/money/effort, would you choose this again?",
          "What would you gain by letting go?"
        ],
        exampleResponse: "I'm holding onto a side project I started 2 years ago that gets no traction. Abandoning it feels like 'losing' the 500+ hours I invested. But if I were starting fresh today, I wouldn't choose this project. Letting go would free up 10 hours a week for a new idea I'm actually excited about. The 500 hours are gone regardless -- my loss aversion is just costing me FUTURE time."
      }
    ],
    relatedModelIds: ["sunk-cost-fallacy", "status-quo-bias", "framing-effect"],
    tags: ["behavioral-economics", "risk", "decision-making", "cognitive-bias"]
  },
  {
    id: "dunning-kruger",
    categoryId: "psychology",
    title: "Dunning-Kruger Effect",
    emoji: "\u{1F9D7}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "The less you know, the more you think you know. The more you know, the more you realize you don't.",
      analogy: "Imagine climbing a mountain. At the base, you can't see how tall it is -- the peak looks close! You're confident. You climb for an hour and reach a ridge, finally seeing the ACTUAL peak towering above you. Confidence crashes. After years of climbing, you reach near the top and can see all the mountains you haven't climbed yet. You're skilled but humble. That journey from 'easy!' to 'oh no' to 'I know a lot but there's always more' is the Dunning-Kruger effect.",
      sections: [
        {
          title: "Mount Stupid and the Valley of Despair",
          content: "When you first learn something, you hit 'Mount Stupid' -- you know just enough to feel like an expert but not enough to know what you're missing. Read one article about economics? You feel ready to run the Federal Reserve. Take one coding tutorial? You think building Instagram should take a weekend. Then reality hits and you plunge into the 'Valley of Despair' where you realize how much you DON'T know. Real competence grows slowly on the other side."
        },
        {
          title: "Why Experts Sound Uncertain",
          content: "Ever notice how the world's top scientists say 'it's complicated' while random Twitter users say 'it's obvious'? That's Dunning-Kruger. Expertise doesn't create confidence -- it creates awareness of complexity. The more you learn, the more you see the nuances, exceptions, and unknowns. Beginners see a simple world because they're blind to its complexity."
        }
      ],
      ahaQuote: "The trouble with the world is that the stupid are cocksure and the intelligent are full of doubt.",
      realWorldExample: "A first-year medical student diagnoses every patient confidently. A resident with 4 years of training agonizes over edge cases and asks for second opinions. An experienced physician knows when they know, when they don't, and when to call a specialist. The journey from overconfidence to calibrated confidence takes years of humbling experience."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "dunning-kruger-ex-1",
        question: "Someone reads a few articles about nutrition and starts giving confident diet advice to everyone. What phase of the Dunning-Kruger effect are they in?",
        options: [
          "They're genuinely knowledgeable -- reading articles makes you an expert",
          "Mount Stupid -- they know just enough to overestimate their expertise",
          "The Valley of Despair -- they're overwhelmed by how much they don't know",
          "The Slope of Enlightenment -- they've earned real expertise"
        ],
        correctIndex: 1,
        explanation: "A little knowledge creates overconfidence -- 'Mount Stupid.' They know enough to form opinions but not enough to recognize the vast complexity of nutrition science. True expertise would make them more cautious, not less."
      },
      {
        type: "true-false",
        id: "dunning-kruger-ex-2",
        statement: "The Dunning-Kruger effect only applies to unintelligent people.",
        correct: false,
        explanation: "Everyone experiences Dunning-Kruger when learning new subjects. A brilliant physicist can be on 'Mount Stupid' about cooking. It's domain-specific and universal -- nobody is immune when stepping into unfamiliar territory."
      },
      {
        type: "fill-in-blank",
        id: "dunning-kruger-ex-3",
        textBefore: "The Dunning-Kruger effect describes how people with low ability in a task tend to",
        textAfter: "their competence.",
        acceptedAnswers: ["overestimate", "overrate", "inflate"],
        hint: "Do beginners think they're better or worse than they are?",
        explanation: "People with limited skill or knowledge tend to overestimate their competence because they lack the expertise needed to recognize their own deficiencies."
      },
      {
        type: "scenario",
        id: "dunning-kruger-ex-4",
        scenario: "In a team meeting, a junior developer confidently proposes a complete architecture redesign, calling the current system 'obviously flawed.' The senior architect quietly explains three subtle reasons why the current design handles edge cases the junior hasn't considered.",
        question: "What does this interaction illustrate about the Dunning-Kruger effect?",
        options: [
          "The junior is smarter than the senior because they see problems clearly",
          "The junior's confidence comes from not knowing what they don't know, while the senior's caution comes from deep understanding",
          "The senior is just being defensive about their work",
          "Both are equally correct -- it's just a difference of opinion"
        ],
        correctIndex: 1,
        explanation: "The junior developer is on 'Mount Stupid' -- confident because they can't see the complexity. The senior architect operates from earned expertise: they see the edge cases, trade-offs, and constraints that make the 'obvious' solution problematic."
      }
    ],
    relatedModelIds: ["confirmation-bias", "peter-principle", "cognitive-dissonance"],
    tags: ["metacognition", "self-awareness", "expertise", "cognitive-bias"]
  },
  {
    id: "availability-heuristic",
    categoryId: "psychology",
    title: "Availability Heuristic",
    emoji: "\u{1F4F0}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "You think plane crashes are common because they're on the news. You don't think stair falls are dangerous because they're not. Stairs kill way more people.",
      analogy: "Your brain judges how common something is by how easily it can remember an example. See a shark attack on the news? Suddenly the ocean is terrifying (even though you're more likely to be killed by a vending machine). The availability heuristic is like judging a restaurant by the one dish you remember -- if that dish was memorable (good or bad), you think the whole restaurant is like that.",
      sections: [
        {
          title: "The News Is Not Reality",
          content: "Dramatic, scary, unusual events make the news precisely BECAUSE they're rare. But constant exposure makes them FEEL common. Terrorism, plane crashes, kidnappings -- all headline-worthy because they're statistically rare. Heart disease, car accidents, falls -- barely newsworthy because they're boringly common. Your fear levels are calibrated to the news cycle, not to actual risk."
        },
        {
          title: "How It Warps Your Decisions",
          content: "After seeing a friend get food poisoning at a restaurant, you'll NEVER eat there again -- even though millions of meals were served safely. After hearing about a startup succeeding, you overestimate YOUR startup's chances. Your brain substitutes 'easy to recall' for 'likely to happen,' and those are VERY different things."
        }
      ],
      ahaQuote: "If it's in the news, it's probably rare. If it were common, it wouldn't be news.",
      realWorldExample: "After a widely reported plane crash, airline bookings drop and highway driving increases. Ironically, this shift causes MORE deaths because driving is statistically far more dangerous than flying per mile traveled. People's fear response to vivid, available memories of the crash actively made them less safe."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "availability-heuristic-ex-1",
        question: "After watching a documentary about identity theft, you buy an expensive identity protection service. What bias might be influencing you?",
        options: [
          "Loss aversion -- you're afraid of losing money",
          "Availability heuristic -- the vivid documentary makes identity theft feel more common than it is",
          "Anchoring -- you're anchored to the price of the service",
          "Sunk cost fallacy -- you've already spent time watching the documentary"
        ],
        correctIndex: 1,
        explanation: "The vivid, detailed documentary makes identity theft examples highly 'available' in your memory, causing you to overestimate the probability and urgency. You might benefit from the service, but the decision should be based on actual statistics, not emotional availability."
      },
      {
        type: "true-false",
        id: "availability-heuristic-ex-2",
        statement: "People generally overestimate the frequency of dramatic causes of death (like plane crashes) and underestimate common causes (like diabetes).",
        correct: true,
        explanation: "This is a well-documented effect of the availability heuristic. Dramatic, newsworthy events are easily recalled, inflating perceived frequency. Common, undramatic causes of death don't make memorable stories, so their frequency is underestimated."
      },
      {
        type: "scenario",
        id: "availability-heuristic-ex-3",
        scenario: "A parent sees a news story about a child abduction in another state. They immediately decide their children can never walk to school alone, even though they live in a very safe neighborhood with near-zero crime.",
        question: "How is the availability heuristic affecting this parent's decision?",
        options: [
          "It's not -- this is a reasonable safety precaution",
          "The vivid news story makes child abduction feel common and local, even though statistics show it's extremely rare",
          "The parent is using good judgment based on current events",
          "The parent should wait for more news stories before deciding"
        ],
        correctIndex: 1,
        explanation: "The emotionally vivid news story makes the (extremely rare) event feel like an imminent local threat. The parent's fear is calibrated to media exposure, not actual local crime statistics."
      },
      {
        type: "fill-in-blank",
        id: "availability-heuristic-ex-4",
        textBefore: "The availability heuristic causes people to judge the probability of events based on how easily",
        textAfter: "come to mind.",
        acceptedAnswers: ["examples", "instances", "memories", "cases", "they"],
        hint: "What does 'available' mean in this context?",
        explanation: "The availability heuristic uses the ease of recalling examples as a proxy for probability. Events that are vivid, recent, or emotionally charged are easier to recall and therefore judged as more likely."
      }
    ],
    relatedModelIds: ["confirmation-bias", "framing-effect", "anchoring"],
    tags: ["cognitive-bias", "risk-assessment", "media-literacy", "decision-making"]
  },
  {
    id: "status-quo-bias",
    categoryId: "psychology",
    title: "Status Quo Bias",
    emoji: "\u{1F6CB}\uFE0F",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "You keep the same phone plan, the same bank, and the same hairstyle -- not because they're the best, but because changing feels scary.",
      analogy: "Imagine you're sitting in a warm, slightly lumpy chair. Someone offers you a different chair that's probably better, but you'd have to stand up, walk over, and try it. Is it ACTUALLY better? What if it's worse? Your current chair might be mediocre, but at least you KNOW it's mediocre. That fear of the unknown keeps you sitting in the same lumpy chair for years. Status quo bias is choosing the devil you know over the angel you might not.",
      sections: [
        {
          title: "Default Settings Run the World",
          content: "Countries with opt-OUT organ donation have 90%+ donor rates. Countries with opt-IN have about 15%. Same people, same values -- just a different default. We accept default settings on our phones, default investment allocations in our 401k, and default dinner restaurants. Not because they're optimal, but because changing requires effort and risk. The person who sets the default has enormous power."
        },
        {
          title: "When Staying Put Is the Riskiest Move",
          content: "Status quo bias tricks you into thinking inaction is safe. But NOT changing can be the riskiest choice of all. Staying in a declining industry, keeping money in a savings account during high inflation, staying in a toxic relationship -- these feel 'safe' because nothing changes. But the world changes around you, and standing still means falling behind."
        }
      ],
      ahaQuote: "If you don't like change, you're going to like irrelevance even less.",
      realWorldExample: "You've had the same car insurance for 8 years. You've never compared prices. When you finally do, you find you're paying $600/year more than competitors offer for identical coverage. You were paying a 'laziness tax' for 8 years because switching felt like too much effort. Total cost of status quo bias: $4,800."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "status-quo-bias-ex-1",
        question: "Why do most employees stick with their company's default 401k investment allocation?",
        options: [
          "The default option is always the best choice",
          "Status quo bias -- people accept defaults because changing requires effort and decision-making",
          "Employees aren't allowed to change their allocation",
          "Most employees carefully research and choose the default"
        ],
        correctIndex: 1,
        explanation: "Most employees accept the default because changing requires researching alternatives, making decisions, and filling out forms. Status quo bias makes the default feel 'safe' even when a different allocation might better suit their needs."
      },
      {
        type: "true-false",
        id: "status-quo-bias-ex-2",
        statement: "Sticking with the status quo is always the safest choice.",
        correct: false,
        explanation: "The status quo often feels safe but isn't. Markets change, industries evolve, and relationships deteriorate. Inaction in a changing environment can be the riskiest choice -- you just don't feel the risk because you're not 'doing' anything."
      },
      {
        type: "scenario",
        id: "status-quo-bias-ex-3",
        scenario: "A company has used the same supplier for 10 years. A new supplier offers the same quality at 20% lower cost with better support. The purchasing manager says, 'Our current supplier is fine. Why rock the boat?'",
        question: "What bias is the purchasing manager displaying?",
        options: [
          "Good business judgment -- loyalty to suppliers is valuable",
          "Status quo bias -- sticking with the current supplier because change feels risky",
          "Anchoring -- anchored to the current supplier's price",
          "Loss aversion -- afraid of losing the relationship"
        ],
        correctIndex: 1,
        explanation: "The manager's reluctance to switch despite clear benefits is status quo bias. 'Why rock the boat?' is the classic rationalization for maintaining the current state, even when a better alternative exists."
      },
      {
        type: "real-world",
        id: "status-quo-bias-ex-4",
        challenge: "Identify one area where you're sticking with the status quo by default.",
        prompts: [
          "What subscription, service, or habit have you kept for years without evaluating alternatives?",
          "If you were starting from scratch today, would you choose the same option?",
          "What's the real cost of not switching?"
        ],
        exampleResponse: "I've had the same phone plan for 5 years without comparing. If I were choosing today, I'd probably switch to a cheaper plan that has better data coverage. The switching cost is maybe 30 minutes of paperwork, but I've been paying an estimated $20/month extra -- that's $1,200 wasted over 5 years because I didn't want to spend 30 minutes on a phone call."
      }
    ],
    relatedModelIds: ["loss-aversion", "sunk-cost-fallacy", "homeostasis"],
    tags: ["inertia", "decision-making", "defaults", "cognitive-bias"]
  },
  {
    id: "framing-effect",
    categoryId: "psychology",
    title: "Framing Effect",
    emoji: "\u{1F5BC}\uFE0F",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Would you eat meat that's '90% fat-free' or meat that 'contains 10% fat'? Same meat. Different feelings.",
      analogy: "A painting in a gold frame looks regal and expensive. The same painting in a plastic frame looks cheap. The painting didn't change -- the frame did. The framing effect works exactly like this for information: the way something is presented (the frame) changes how you feel about it, even when the underlying facts are identical. Same data, different spin, completely different reaction.",
      sections: [
        {
          title: "Words Are Invisible Frames",
          content: "A surgeon tells you: 'This surgery has a 90% survival rate.' You feel great. Another surgeon says: 'This surgery has a 10% mortality rate.' Suddenly you're terrified. SAME SURGERY. SAME NUMBERS. Different frame. Politicians know this instinctively: it's not a 'tax increase,' it's 'investing in our future.' It's not 'budget cuts,' it's 'reducing waste.' The frame shapes the feeling, and feelings drive decisions."
        },
        {
          title: "How to See Through Frames",
          content: "When you encounter information that triggers a strong positive or negative reaction, try REFRAMING it. If something sounds great, ask what the negative frame would be. If something sounds terrible, ask what the positive frame would be. The truth usually lives somewhere between the two frames. The person who can see both frames makes better decisions than the person trapped in just one."
        }
      ],
      ahaQuote: "Every fact has two frames. Wisdom is seeing both.",
      realWorldExample: "A yogurt is labeled '99% fat-free.' You toss it in the cart feeling healthy. Now imagine it was labeled 'contains 1% fat.' You'd pause and maybe look for a fat-free alternative. Same yogurt, same nutritional content, but the positive frame ('99% fat-free') feels dramatically healthier than the equivalent negative frame ('contains fat')."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "framing-effect-ex-1",
        question: "Which framing of the same statistic would make people MORE likely to support a medical treatment?",
        options: [
          "'This treatment saves 200 out of 600 patients'",
          "'With this treatment, 400 out of 600 patients will die'",
          "Both framings would produce the same level of support",
          "Neither framing matters -- people decide based on facts"
        ],
        correctIndex: 0,
        explanation: "'Saves 200 out of 600' (positive frame) gets more support than '400 will die' (negative frame), even though they describe identical outcomes. The gain frame feels better and drives more favorable decisions."
      },
      {
        type: "true-false",
        id: "framing-effect-ex-2",
        statement: "The framing effect shows that people make decisions based on objective facts rather than how those facts are presented.",
        correct: false,
        explanation: "The framing effect demonstrates the opposite: how facts are presented significantly influences decisions, often more than the facts themselves. Humans are not purely rational processors of information."
      },
      {
        type: "matching",
        id: "framing-effect-ex-3",
        instruction: "Match each pair of framings that describe the same reality.",
        pairs: [
          { left: "95% employment rate", right: "5% unemployment rate" },
          { left: "This car gets 30 miles per gallon", right: "This car uses 1 gallon every 30 miles" },
          { left: "Our product has a 98% satisfaction rate", right: "2 out of 100 customers are dissatisfied" },
          { left: "You'll save $500 per year", right: "It costs $500 per year less than the alternative" }
        ],
        explanation: "Each pair presents identical facts but with different emphasis. The first version of each pair tends to feel more positive or impressive, even though the information is mathematically identical."
      },
      {
        type: "scenario",
        id: "framing-effect-ex-4",
        scenario: "A company needs to lay off 10% of staff. HR is preparing the announcement.",
        question: "Which framing would likely produce a less negative reaction from remaining employees?",
        options: [
          "'We are eliminating 10% of positions to cut costs'",
          "'We are restructuring to strengthen our team and invest in the 90% of roles critical to our future'",
          "Both framings will produce the same reaction",
          "'Layoffs are happening because the company is failing'"
        ],
        correctIndex: 1,
        explanation: "Framing the layoffs around 'strengthening' and 'investing in' the remaining team uses a positive frame that emphasizes what's being KEPT and built, rather than what's being lost. Same action, very different emotional response."
      }
    ],
    relatedModelIds: ["anchoring", "loss-aversion", "availability-heuristic"],
    tags: ["persuasion", "communication", "cognitive-bias", "marketing"]
  },
  {
    id: "cognitive-dissonance",
    categoryId: "psychology",
    title: "Cognitive Dissonance",
    emoji: "\u{1F92F}",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "Your brain would rather change reality than admit it was wrong.",
      analogy: "Imagine holding a hot coal in each hand. In one hand: 'I'm a smart person.' In the other: 'I just made a really dumb decision.' Those two thoughts BURN when held together. Your brain MUST drop one. And since 'I'm smart' is core to your identity, your brain performs an incredible magic trick: it changes the OTHER thought. 'Actually, it wasn't a dumb decision -- here's why it was genius!' That uncomfortable tension between conflicting beliefs is cognitive dissonance, and your brain will do backflips to resolve it.",
      sections: [
        {
          title: "The Fox and the Grapes",
          content: "Aesop nailed this 2,500 years ago: a fox tries to reach grapes, fails, and declares them 'probably sour anyway.' Rather than admit he couldn't reach them (ouch to the ego), he changed his belief about how desirable they were. We do this CONSTANTLY: get rejected from a job? 'I didn't want to work there anyway.' Can't afford the nice car? 'Those things are overrated.' Our brain protects our self-image at the expense of truth."
        },
        {
          title: "Why Cults Work",
          content: "When cult members make huge sacrifices (quitting jobs, donating money, cutting off family), they experience massive dissonance: 'I sacrificed everything for this.' If the cult turns out to be wrong, they'd have to admit they ruined their life for nothing. That's unbearable. So instead, they believe HARDER. The bigger the sacrifice, the stronger the commitment -- because the cost of admitting you were wrong grows with every sacrifice you've made."
        }
      ],
      ahaQuote: "The hardest prison to escape is the one your mind builds to protect itself from being wrong.",
      realWorldExample: "You spend $800 on a new phone. It's buggy, the camera is mediocre, and the battery dies by noon. But instead of admitting you wasted $800, your brain starts rationalizing: 'The camera is actually artistic in its own way. The battery issue is probably temporary. And the screen is amazing.' You become the phone's biggest defender -- not because it's great, but because your brain can't handle the dissonance of an $800 mistake."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "cognitive-dissonance-ex-1",
        question: "A smoker who knows smoking causes cancer but continues to smoke might say, 'My grandfather smoked and lived to 95.' What is this an example of?",
        options: [
          "Statistical analysis -- they're using real data to assess risk",
          "Cognitive dissonance reduction -- they're rationalizing to resolve the conflict between behavior and knowledge",
          "Confirmation bias -- they only look for positive smoking stories",
          "Both B and C are at play"
        ],
        correctIndex: 3,
        explanation: "The smoker experiences dissonance (I smoke + smoking kills = uncomfortable) and reduces it by cherry-picking a confirming example (grandfather). This uses both cognitive dissonance reduction AND confirmation bias simultaneously."
      },
      {
        type: "true-false",
        id: "cognitive-dissonance-ex-2",
        statement: "People who pay more for a product tend to rate it higher, partly because of cognitive dissonance.",
        correct: true,
        explanation: "If you paid a lot for something, admitting it's mediocre creates dissonance ('I'm smart' + 'I overpaid' = uncomfortable). Your brain resolves this by inflating the perceived quality to match the price you paid."
      },
      {
        type: "scenario",
        id: "cognitive-dissonance-ex-3",
        scenario: "A student studies for weeks for an exam and barely passes. A classmate who barely studied gets the same grade.",
        question: "How might cognitive dissonance affect the studious student's interpretation?",
        options: [
          "They'll objectively accept that the exam didn't require much studying",
          "They'll likely rationalize their effort ('I learned more deeply,' 'It'll help me on the final') to avoid feeling their time was wasted",
          "They'll congratulate their classmate sincerely",
          "They won't experience any dissonance"
        ],
        correctIndex: 1,
        explanation: "The dissonance between 'I studied for weeks' and 'Someone who didn't study got the same grade' is uncomfortable. To resolve it, the student will likely rationalize why their studying was still valuable -- not because it's true, but because the alternative is admitting they wasted weeks."
      },
      {
        type: "fill-in-blank",
        id: "cognitive-dissonance-ex-4",
        textBefore: "Cognitive dissonance is the mental discomfort experienced when holding two",
        textAfter: "beliefs or values at the same time.",
        acceptedAnswers: ["conflicting", "contradictory", "inconsistent", "opposing", "incompatible"],
        hint: "The two beliefs clash with each other",
        explanation: "Cognitive dissonance arises from holding contradictory beliefs simultaneously. The discomfort drives people to change one belief, rationalize, or avoid information that worsens the conflict."
      }
    ],
    relatedModelIds: ["confirmation-bias", "sunk-cost-fallacy", "dunning-kruger"],
    tags: ["self-deception", "rationalization", "psychology", "belief"]
  },
  {
    id: "paradox-of-choice",
    categoryId: "psychology",
    title: "Paradox of Choice",
    emoji: "\u{1F500}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "A menu with 3 items makes you happy. A menu with 300 items makes you anxious, indecisive, and regretful.",
      analogy: "Imagine you walk into an ice cream shop with 3 flavors. You pick chocolate, enjoy it, done. Now imagine a shop with 300 flavors. You spend 20 minutes agonizing, finally pick salted caramel, then spend the rest of the time wondering if maple walnut would have been better. More choices should make us happier, right? WRONG. After a certain point, more options don't liberate us -- they paralyze us.",
      sections: [
        {
          title: "The Jam Experiment",
          content: "In a famous study, a grocery store set up a table with 24 jams. Lots of people stopped to look, but only 3% bought any. When they reduced to 6 jams, 30% bought. TEN TIMES more purchases with fewer options! Too many choices create 'analysis paralysis' -- you're so afraid of choosing wrong that you choose NOTHING. This is why Netflix with 10,000 shows leads to 30 minutes of scrolling and watching nothing."
        },
        {
          title: "The Regret Machine",
          content: "Even AFTER choosing from many options, satisfaction drops. Why? Because with 300 options, you imagine all the amazing alternatives you might have missed. With 3 options, you can't imagine much better. More choice = more comparison = more imagined regret = less happiness with what you chose. Limiting your options isn't restriction -- it's liberation."
        }
      ],
      ahaQuote: "The secret to happiness is low expectations -- and fewer options to compare against.",
      realWorldExample: "You need a new laptop. You could research 47 models, read 200 reviews, compare 15 spreadsheet columns of specs, and spend 3 weeks deciding. Or you could narrow it to 3 well-reviewed options within your budget, pick the one that feels right, and spend those 3 weeks actually USING the laptop. The $50 difference between options 12 and 13 matters less than 3 weeks of your life."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "paradox-of-choice-ex-1",
        question: "A grocery store displays 24 varieties of jam versus 6 varieties. What did the famous study find?",
        options: [
          "More varieties led to more purchases because customers found their perfect match",
          "Fewer varieties led to 10 times more purchases because less choice reduced decision paralysis",
          "The number of varieties had no effect on purchases",
          "More varieties led to more purchases but lower satisfaction"
        ],
        correctIndex: 1,
        explanation: "Sheena Iyengar's famous jam study found that 6 options led to a 30% purchase rate versus only 3% with 24 options. Too many choices paralyzed shoppers into buying nothing."
      },
      {
        type: "true-false",
        id: "paradox-of-choice-ex-2",
        statement: "Having more options to choose from always leads to greater satisfaction with the final choice.",
        correct: false,
        explanation: "The paradox of choice shows the opposite: more options often lead to LESS satisfaction because you imagine all the alternatives you might have missed. Fewer options typically mean less regret and more contentment."
      },
      {
        type: "scenario",
        id: "paradox-of-choice-ex-3",
        scenario: "A restaurant simplifies its menu from 50 items to 15 well-curated dishes. Regular customers initially complain about the reduced selection.",
        question: "Based on the paradox of choice, what outcome is most likely over time?",
        options: [
          "Customers will leave permanently due to fewer options",
          "Nothing will change because menu size doesn't affect dining experience",
          "Customer satisfaction will likely increase as decision fatigue decreases and kitchen quality improves",
          "The restaurant will need to bring back all 50 items"
        ],
        correctIndex: 2,
        explanation: "Research supports that curated, smaller menus lead to faster ordering, less decision regret, and better food (the kitchen can focus on fewer dishes). Initial complaints fade as customers enjoy the improved experience."
      },
      {
        type: "real-world",
        id: "paradox-of-choice-ex-4",
        challenge: "Identify an area of your life where reducing choices would increase your happiness.",
        prompts: [
          "Where do you spend excessive time deciding between similar options?",
          "What rules could you create to pre-make decisions?",
          "How would having fewer options actually improve your experience?"
        ],
        exampleResponse: "I spend 20+ minutes every morning deciding what to wear. I could create a 'capsule wardrobe' of 15 versatile pieces that all mix and match. This would reduce my morning decision from 100+ combinations to about 10, save 20 minutes daily (120+ hours per year!), and I'd actually feel more confident because every outfit works."
      }
    ],
    relatedModelIds: ["status-quo-bias", "loss-aversion", "pareto-principle"],
    tags: ["decision-making", "psychology", "minimalism", "satisfaction"]
  },
  {
    id: "hindsight-bias",
    categoryId: "psychology",
    title: "Hindsight Bias",
    emoji: "\u{1F52E}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "After something happens, your brain rewrites history to make you feel like you knew it all along.",
      analogy: "Imagine watching a mystery movie for the second time. 'Oh, it was SO obvious the butler did it!' you say, pointing at all the clues. But the first time you watched it? You were just as surprised as everyone else. Your brain retroactively connects dots that you only see BECAUSE you know the ending. Hindsight bias is your brain being the world's most annoying friend who says 'I KNEW it!' after every plot twist.",
      sections: [
        {
          title: "The 'I Knew It All Along' Illusion",
          content: "After the 2008 financial crash: 'It was obviously a bubble!' After a startup succeeds: 'I always knew they'd make it!' After an election: 'The signs were so clear!' Really? Then why didn't you bet your life savings on it? Hindsight bias replaces your actual messy, uncertain past thoughts with clean, confident after-the-fact narratives. It makes you feel smart while preventing you from actually learning."
        },
        {
          title: "Why It's Dangerous",
          content: "Hindsight bias makes us terrible at learning from mistakes because we never believe we MADE a mistake. 'I knew the project would fail' -- then why didn't you speak up? 'That investment was obviously bad' -- then why did you make it? By rewriting history, we rob ourselves of the lessons that uncertainty teaches. The cure is keeping a decision journal: write down your predictions BEFORE outcomes, so future-you can't gaslight past-you."
        }
      ],
      ahaQuote: "Hindsight is 20/20, but the prescription was written after the eye test.",
      realWorldExample: "A startup fails after 3 years. Former employees say, 'I always had a bad feeling about the business model.' Investors say, 'The red flags were obvious.' The founder's friends say, 'I saw it coming.' But three years ago? Everyone was excited, invested, and optimistic. The 'obvious' problems were only obvious after the failure happened."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "hindsight-bias-ex-1",
        question: "After a surprise election result, a friend says, 'I totally predicted this.' What should you consider?",
        options: [
          "They probably did predict it -- some people have good intuition",
          "They might be experiencing hindsight bias, retroactively believing they 'knew' what would happen",
          "You should ask them to predict the next election since they're clearly accurate",
          "Election results are always predictable to informed people"
        ],
        correctIndex: 1,
        explanation: "Hindsight bias makes people genuinely believe they predicted outcomes they didn't. Unless they have a recorded prediction made before the event, they're likely experiencing the 'I knew it all along' illusion."
      },
      {
        type: "true-false",
        id: "hindsight-bias-ex-2",
        statement: "Keeping a written record of your predictions before events happen is an effective way to combat hindsight bias.",
        correct: true,
        explanation: "A decision or prediction journal prevents hindsight bias from rewriting your memories. When you can compare your actual pre-event predictions to outcomes, you see your real accuracy and learn from genuine mistakes."
      },
      {
        type: "fill-in-blank",
        id: "hindsight-bias-ex-3",
        textBefore: "Hindsight bias is also known as the 'I",
        textAfter: "it all along' effect.",
        acceptedAnswers: ["knew", "told you so"],
        hint: "What does hindsight bias make you feel?",
        explanation: "The 'I knew it all along' effect captures the essence of hindsight bias: after learning an outcome, people believe they would have predicted it, even when they couldn't have."
      },
      {
        type: "scenario",
        id: "hindsight-bias-ex-4",
        scenario: "A doctor misdiagnoses a patient. During the review, other doctors say, 'The correct diagnosis was obvious from the initial symptoms.' However, when given the same symptoms in a blind test without knowing the outcome, only 20% of doctors made the correct diagnosis.",
        question: "What does this reveal about the reviewing doctors?",
        options: [
          "They are genuinely better diagnosticians than the original doctor",
          "The original doctor was clearly incompetent",
          "Hindsight bias -- knowing the outcome made the 'correct' diagnosis seem obvious when it wasn't",
          "The initial symptoms actually were obvious indicators"
        ],
        correctIndex: 2,
        explanation: "The blind test proves the diagnosis was NOT obvious -- only 20% got it right without knowing the answer. The reviewing doctors' confidence was inflated by hindsight bias: knowing the answer made the clues seem obvious."
      }
    ],
    relatedModelIds: ["confirmation-bias", "dunning-kruger", "availability-heuristic"],
    tags: ["cognitive-bias", "memory", "self-awareness", "decision-making"]
  }
];
