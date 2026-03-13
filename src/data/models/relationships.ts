import type { MentalModel } from "../../types/models";

export const relationshipModels: MentalModel[] = [
  {
    id: "emotional-bank-account",
    categoryId: "relationships",
    title: "Emotional Bank Account",
    emoji: "\u{1F3E6}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Every relationship has an invisible bank account, and you're either making deposits or withdrawals.",
      analogy: "Think of every relationship like a bank account, but instead of dollars, the currency is trust, kindness, and reliability. When you keep promises, listen carefully, or do something thoughtful -- that's a deposit. When you break a promise, snap at someone, or forget something important -- that's a withdrawal. Just like a real bank account, if you make too many withdrawals without deposits, you go bankrupt. And relationship bankruptcy means a fight over who left the dishes out.",
      sections: [
        {
          title: "Deposits Are Smaller Than Withdrawals",
          content: "Here's the unfair math of relationships: one hurtful comment can wipe out 20 kind gestures. Research suggests you need about 5 positive interactions for every 1 negative interaction to keep a relationship healthy. So that sarcastic remark at dinner didn't just cost you 1 point -- it cost you the equivalent of 5 compliments. The withdrawal fees are BRUTAL."
        },
        {
          title: "The Interest Rate of Consistency",
          content: "Small, consistent deposits beat rare grand gestures every time. A dozen roses once a year does less than a genuine 'how was your day?' every evening. Showing up reliably is like compound interest -- those tiny daily deposits accumulate into deep trust that can weather any storm. The people who never have relationship crises aren't lucky -- they're consistent depositors."
        }
      ],
      ahaQuote: "Trust is built in drops and lost in buckets.",
      realWorldExample: "Your partner asks you to pick up milk on the way home. Tiny request, right? You forget. No big deal? Actually, that's a small withdrawal. Do it three times and they stop asking -- not because they don't need milk, but because they've stopped trusting you with small things. And if they can't trust you with milk, how will they trust you with the big stuff?"
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "emotional-bank-account-ex-1",
        question: "Research suggests healthy relationships maintain approximately what ratio of positive to negative interactions?",
        options: [
          "1:1 -- equal positives and negatives",
          "2:1 -- twice as many positive as negative",
          "5:1 -- five positive for every one negative",
          "10:1 -- ten positive for every one negative"
        ],
        correctIndex: 2,
        explanation: "John Gottman's research found that stable, happy relationships maintain about a 5:1 ratio of positive to negative interactions. This means negative interactions carry much more weight and require multiple deposits to offset."
      },
      {
        type: "true-false",
        id: "emotional-bank-account-ex-2",
        statement: "A single grand romantic gesture can permanently fix a relationship with a depleted emotional bank account.",
        correct: false,
        explanation: "Grand gestures are nice, but they don't rebuild trust overnight. Consistent small deposits over time -- reliability, listening, kindness -- are what truly refill a depleted emotional bank account."
      },
      {
        type: "matching",
        id: "emotional-bank-account-ex-3",
        instruction: "Classify each action as a deposit or withdrawal from the emotional bank account.",
        pairs: [
          { left: "Remembering and asking about their important meeting", right: "Deposit -- showing you care about their life" },
          { left: "Checking your phone while they're talking to you", right: "Withdrawal -- signaling they're not worth your attention" },
          { left: "Apologizing sincerely when you make a mistake", right: "Deposit -- showing accountability and respect" },
          { left: "Bringing up past mistakes during a new argument", right: "Withdrawal -- weaponizing history breaks trust" }
        ],
        explanation: "Deposits show you value the other person. Withdrawals signal disrespect or indifference. Being intentional about which actions you take is the key to maintaining relationship health."
      },
      {
        type: "real-world",
        id: "emotional-bank-account-ex-4",
        challenge: "Audit the emotional bank account of one important relationship in your life.",
        prompts: [
          "Is the account balance currently positive, neutral, or overdrawn?",
          "What's one deposit you could make today?",
          "What recurring withdrawal do you need to stop making?"
        ],
        exampleResponse: "My relationship with my sibling is slightly overdrawn. We talk rarely and our last interaction was tense. Deposit I can make today: text them to ask about their new job with genuine interest, no agenda. Withdrawal to stop: I often make dismissive jokes about their career choice. That sarcasm is costing me way more than the cheap laugh is worth."
      }
    ],
    relatedModelIds: ["reciprocity", "trust-battery", "love-languages"],
    tags: ["trust", "communication", "emotional-intelligence", "connection"]
  },
  {
    id: "reciprocity",
    categoryId: "relationships",
    title: "Reciprocity",
    emoji: "\u{1F504}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "When someone gives you a gift, your brain literally FORCES you to want to give one back.",
      analogy: "You're at Costco and someone hands you a free sample of cheese. Suddenly you feel this weird urge to buy the cheese, even though you never wanted cheese. That's reciprocity: when someone does something for you, your brain creates an almost physical need to return the favor. It's the oldest social glue in humanity -- I scratch your back, you scratch mine. It built civilizations.",
      sections: [
        {
          title: "The Invisible Contract",
          content: "Reciprocity runs so deep that it even works when the initial gift is unwanted. A study found that a waiter who brings a small candy with the bill gets a 3% bigger tip. TWO candies? 14% bigger. If the waiter walks away, then comes BACK and says 'You know what, you were so nice, here's an extra candy just for you' -- tips jump 23%. The candy costs pennies. The return? Massive."
        },
        {
          title: "The Dark Side: Manipulation",
          content: "Scammers and manipulators weaponize reciprocity constantly. A cult leader who showers you with love and attention creates an obligation to 'give back' -- usually your money, time, or independence. Recognizing when reciprocity is being used to manipulate you is a superpower. Ask: 'Was this gift freely given, or does it come with invisible strings?'"
        }
      ],
      ahaQuote: "Give first, give freely, and the world rearranges itself to give back.",
      realWorldExample: "At work, you help a colleague finish their report without being asked. Three months later, when you need a recommendation for a promotion, they enthusiastically volunteer. You never asked for anything in return -- but reciprocity ensured you got it. The best networkers don't keep score; they just keep helping."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "reciprocity-ex-1",
        question: "Why do charities often include free address labels or small gifts in their donation requests?",
        options: [
          "To show off their products",
          "To trigger reciprocity -- receiving a gift creates an urge to give back",
          "Because they have leftover inventory to get rid of",
          "To make the envelope heavier so you notice it"
        ],
        correctIndex: 1,
        explanation: "Charities use reciprocity strategically. By giving you a small, unsolicited gift, they trigger your innate desire to reciprocate, making you more likely to donate."
      },
      {
        type: "true-false",
        id: "reciprocity-ex-2",
        statement: "Reciprocity only works when the initial gift or favor is something you actually wanted.",
        correct: false,
        explanation: "Reciprocity works even with unwanted gifts. The urge to reciprocate is triggered by the act of receiving, not the value or desirability of what was received. This is why it can be used manipulatively."
      },
      {
        type: "scenario",
        id: "reciprocity-ex-3",
        scenario: "A car salesperson offers you a free coffee, gives you a long test drive, and spends an hour showing you features. You realize the car is overpriced for your budget.",
        question: "What should you do, and why?",
        options: [
          "Buy the car to reciprocate their generous time and effort",
          "Recognize that reciprocity is creating pressure, and make your decision based on budget and needs alone",
          "Feel guilty but walk away without explanation",
          "Offer to buy a smaller item to ease the guilt"
        ],
        correctIndex: 1,
        explanation: "The salesperson's generosity (coffee, time, attention) triggers reciprocity, making you feel obligated to buy. Recognizing this social pressure lets you make a rational decision based on your actual needs and budget."
      },
      {
        type: "fill-in-blank",
        id: "reciprocity-ex-4",
        textBefore: "The principle of reciprocity states that when someone does something for us, we feel a strong urge to",
        textAfter: "the favor.",
        acceptedAnswers: ["return", "repay", "reciprocate", "give back"],
        hint: "What do you want to do when someone helps you?",
        explanation: "Reciprocity is the deeply ingrained social norm that compels us to return favors, gifts, and kindnesses. It's one of the most powerful forces in human social behavior."
      }
    ],
    relatedModelIds: ["emotional-bank-account", "trust-battery", "empathy-gap"],
    tags: ["social-psychology", "persuasion", "influence", "relationships"]
  },
  {
    id: "empathy-gap",
    categoryId: "relationships",
    title: "Empathy Gap",
    emoji: "\u{1F32B}\uFE0F",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "You can't imagine being hungry when you're full. That's a bigger problem than you think.",
      analogy: "Imagine you're standing in warm sunshine trying to understand what it feels like to be freezing in a blizzard. You KNOW it's cold out there, intellectually. But your warm body literally cannot feel it. That gap between your current emotional state and someone else's -- or even your OWN future emotional state -- is the empathy gap. It's why we say 'I'd never do that' about things we absolutely would do under different emotional conditions.",
      sections: [
        {
          title: "Hot and Cold States",
          content: "When you're calm (cold state), you can't imagine how you'd act when angry, scared, or desperately hungry (hot state). When you're full, you underbuy groceries. When you're rested, you think 'I'll definitely wake up at 5am tomorrow.' When you're not in love, you judge people who stay in bad relationships. We're essentially different people in different emotional states, but we can't see that."
        },
        {
          title: "The Gap Between You and Others",
          content: "It's not just your own states you misjudge. You can't truly feel someone else's chronic pain, loneliness, grief, or fear. This gap is why people say absurd things like 'just cheer up' to someone with depression, or 'just leave' to someone in an abusive relationship. They're not being cruel -- they literally CANNOT feel what that person feels. Closing the empathy gap starts with admitting it exists."
        }
      ],
      ahaQuote: "Never judge a person until you've walked a mile in their neurotransmitters.",
      realWorldExample: "You tell yourself you'll stick to a diet at the party tonight. Right now, sitting comfortably after lunch, it feels easy. But at the party, surrounded by pizza and cake while everyone's eating and you're hungry -- you cave. You weren't weak. You were just a different person in a different emotional state than the calm, full version of you who made that promise."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "empathy-gap-ex-1",
        question: "You go grocery shopping after a big meal. Which is most likely?",
        options: [
          "You'll buy the perfect amount of food for the week",
          "You'll buy more food than you need because you're in a good mood",
          "You'll buy less food than you need because you can't imagine being hungry right now",
          "Your meal has no effect on shopping behavior"
        ],
        correctIndex: 2,
        explanation: "The empathy gap makes it hard to predict how you'll feel in a different state. When full, you can't imagine being hungry, so you underestimate how much food you'll want later. This is why experts recommend shopping with a list, not by feeling."
      },
      {
        type: "true-false",
        id: "empathy-gap-ex-2",
        statement: "The empathy gap only affects our understanding of other people's emotions, not our own future emotions.",
        correct: false,
        explanation: "The empathy gap affects both interpersonal empathy AND intrapersonal prediction. We're surprisingly bad at predicting how WE will feel and behave in different emotional states, not just understanding others."
      },
      {
        type: "scenario",
        id: "empathy-gap-ex-3",
        scenario: "A manager who has never experienced anxiety tells a team member with an anxiety disorder to 'just relax and stop overthinking' before a big presentation.",
        question: "What mental model explains why the manager's advice is unhelpful?",
        options: [
          "Dunning-Kruger effect -- the manager is overconfident about psychology",
          "The empathy gap -- the manager cannot feel the employee's anxiety from a calm state",
          "The Peter Principle -- the manager is incompetent at their role",
          "Confirmation bias -- the manager only sees evidence that relaxation works"
        ],
        correctIndex: 1,
        explanation: "The empathy gap prevents the calm manager from understanding the intensity of the employee's anxiety. 'Just relax' shows a fundamental inability to bridge the gap between their emotional state and the employee's."
      },
      {
        type: "real-world",
        id: "empathy-gap-ex-4",
        challenge: "Recall a time when the empathy gap affected your judgment of yourself or others.",
        prompts: [
          "When did you judge someone's behavior that you later found yourself doing in similar circumstances?",
          "When did you make a promise to your future self that turned out to be unrealistic?",
          "How could awareness of the empathy gap change your approach?"
        ],
        exampleResponse: "I used to judge people who scrolled their phones during family dinners. Then I went through a stressful work period and caught myself doing exactly that -- I needed the escape from anxiety. Now I assume people doing things I don't understand are probably in an emotional state I can't feel from where I'm standing."
      }
    ],
    relatedModelIds: ["cognitive-dissonance", "confirmation-bias", "loss-aversion"],
    tags: ["empathy", "psychology", "emotional-intelligence", "self-awareness"]
  },
  {
    id: "dunbars-number",
    categoryId: "relationships",
    title: "Dunbar's Number",
    emoji: "\u{1F465}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Your brain has a hard limit of about 150 real friendships. Everyone else is basically a stranger you recognize.",
      analogy: "Think of your brain as a phone with limited storage. It can run about 150 'friendship apps' at the same time. Each friendship requires maintenance: remembering details about their life, tracking trust levels, managing shared history. Try to run 500 friendship apps and your brain starts crashing -- you forget birthdays, mix up details, and relationships become shallow. Your social brain has a ceiling, and it's lower than your Instagram follower count.",
      sections: [
        {
          title: "The Friendship Layers",
          content: "It's not just 150 equal relationships. They're layered like an onion: 5 intimate friends (your inner circle, call-at-3am people), 15 good friends (you'd be upset if they moved away), 50 friends (you'd invite to a party), and 150 meaningful contacts (you know their name AND their story). Beyond 150, people become acquaintances -- faces without real connection."
        },
        {
          title: "Why This Matters in the Social Media Age",
          content: "Having 5,000 Facebook friends doesn't mean you have 5,000 relationships. It means you have about 150 relationships and 4,850 usernames. Companies discovered this too: teams larger than 150 people start breaking down unless they're divided into smaller groups. It's why villages historically had about 150 people, and military companies are roughly that size."
        }
      ],
      ahaQuote: "You don't need more friends. You need more depth with the friends you have.",
      realWorldExample: "You move to a new city and aggressively network, collecting 300 new contacts in a year. But you feel lonelier than ever. Why? Because you spent so much energy on breadth (meeting everyone) that you had none left for depth (actually knowing anyone). Dunbar's Number says: focus on 150 max, and really invest in your top 5."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "dunbars-number-ex-1",
        question: "According to Dunbar's research, what determines the limit of about 150 meaningful relationships?",
        options: [
          "The amount of free time in a day",
          "The size of the neocortex -- our brain's processing power for social information",
          "Cultural norms about friendship",
          "The invention of social media reduced our capacity"
        ],
        correctIndex: 1,
        explanation: "Robin Dunbar found that the neocortex size in primates correlates with their social group size. Human neocortex size predicts a natural group limit of about 150 -- it's a cognitive constraint, not a time constraint."
      },
      {
        type: "true-false",
        id: "dunbars-number-ex-2",
        statement: "Social media has increased our brain's capacity to maintain more than 150 meaningful relationships.",
        correct: false,
        explanation: "Social media makes it easier to CONTACT more people, but it hasn't changed our brain's cognitive limit for maintaining meaningful relationships. You can follow 10,000 people but you can only truly 'know' about 150."
      },
      {
        type: "fill-in-blank",
        id: "dunbars-number-ex-3",
        textBefore: "Dunbar's number suggests that humans can maintain approximately",
        textAfter: "stable, meaningful relationships at any given time.",
        acceptedAnswers: ["150", "one hundred fifty", "one hundred and fifty"],
        hint: "It's a three-digit number",
        explanation: "Dunbar's number is approximately 150 -- the cognitive limit to the number of people with whom one can maintain stable social relationships where you know each person and how they relate to every other person."
      },
      {
        type: "scenario",
        id: "dunbars-number-ex-4",
        scenario: "A startup founder has grown her company to 200 employees. She used to know everyone by name and their family situations. Now she's struggling to remember half of them.",
        question: "What does Dunbar's Number suggest she should do?",
        options: [
          "Work harder to memorize everyone's names and stories",
          "Accept the cognitive limit and structure the company into smaller teams of 15-20 people",
          "Reduce the company size back to 150 people",
          "Hire a social coordinator to maintain relationships on her behalf"
        ],
        correctIndex: 1,
        explanation: "Dunbar's Number explains why she can't maintain 200 personal relationships. Smart organizations create sub-groups (teams, pods, squads) of 15-50 where people can maintain real connections within their immediate group."
      }
    ],
    relatedModelIds: ["emotional-bank-account", "pareto-principle", "trust-battery"],
    tags: ["social-science", "networking", "cognitive-limits", "anthropology"]
  },
  {
    id: "attachment-theory",
    categoryId: "relationships",
    title: "Attachment Theory",
    emoji: "\u{1F9F8}",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "The way your parents comforted you (or didn't) when you were 2 years old is still running your love life.",
      analogy: "Imagine every baby is born with a relationship 'operating system' that gets programmed in the first few years of life. If your parents were reliably warm and responsive, you got the 'secure' OS -- relationships feel safe. If they were inconsistent, you got the 'anxious' OS -- you're always worried people will leave. If they were cold or dismissive, you got the 'avoidant' OS -- you keep people at arm's length. The OS was installed before you could talk, and it's been running in the background ever since.",
      sections: [
        {
          title: "The Four Attachment Styles",
          content: "Secure (about 56% of people): comfortable with closeness, trusts others. Anxious (about 20%): craves closeness but fears abandonment, often clingy or jealous. Avoidant (about 23%): values independence, uncomfortable with too much closeness, pulls away. Disorganized (about 1-5%): a confusing mix of wanting closeness and fearing it. You're not stuck with your style forever -- awareness and effort can change it."
        },
        {
          title: "Why Anxious and Avoidant People Keep Finding Each Other",
          content: "Here's the cruel irony: anxious people (who chase closeness) are magnetically attracted to avoidant people (who run from closeness). The anxious person's pursuit triggers the avoidant person's retreat, which triggers MORE pursuit. It's a relationship trap that feels like passion but is actually just anxiety. Understanding this pattern is the first step to breaking it."
        }
      ],
      ahaQuote: "You can't choose a healthy partner until you understand what unhealthy patterns feel like home.",
      realWorldExample: "Maria panics when her boyfriend doesn't text back within an hour. She sends 5 more texts. He feels suffocated and pulls away. She panics more. He pulls further. Classic anxious-avoidant trap. Once Maria learns she has an anxious attachment style, she can pause, self-regulate, and recognize that silence doesn't mean abandonment."
    },
    exercises: [
      {
        type: "matching",
        id: "attachment-theory-ex-1",
        instruction: "Match each attachment style with its characteristic behavior in relationships.",
        pairs: [
          { left: "Secure attachment", right: "Comfortable with intimacy and independence" },
          { left: "Anxious attachment", right: "Fears abandonment, seeks constant reassurance" },
          { left: "Avoidant attachment", right: "Values independence, uncomfortable with deep closeness" },
          { left: "Disorganized attachment", right: "Simultaneously desires and fears intimacy" }
        ],
        explanation: "Each attachment style creates predictable patterns in relationships. Recognizing your own style is the first step toward more intentional relationship behavior."
      },
      {
        type: "true-false",
        id: "attachment-theory-ex-2",
        statement: "Your attachment style is permanently set in childhood and can never change.",
        correct: false,
        explanation: "While attachment styles form in early childhood, they can be changed through self-awareness, therapy, and experiences with securely attached partners. This is called 'earned security' -- you can reprogram the operating system."
      },
      {
        type: "scenario",
        id: "attachment-theory-ex-3",
        scenario: "Tom always keeps romantic partners at arm's length. When relationships get serious, he finds reasons to create distance -- working late, canceling plans, picking fights. His partners feel confused because he seemed so interested at first.",
        question: "Which attachment style does Tom likely have?",
        options: [
          "Secure -- he just hasn't found the right person yet",
          "Anxious -- he's afraid of being abandoned",
          "Avoidant -- closeness triggers discomfort, so he creates distance",
          "This has nothing to do with attachment style"
        ],
        correctIndex: 2,
        explanation: "Tom displays classic avoidant attachment: interested at a distance, but uncomfortable when things get too close. The 'deactivating strategies' (working late, picking fights) are unconscious ways to create emotional safety through distance."
      },
      {
        type: "real-world",
        id: "attachment-theory-ex-4",
        challenge: "Reflect on your own attachment patterns in close relationships.",
        prompts: [
          "When a partner or close friend becomes distant, what's your gut reaction?",
          "When a relationship gets very close, do you lean in or pull back?",
          "What patterns from childhood might be shaping these reactions?"
        ],
        exampleResponse: "When someone important goes quiet, I immediately assume they're upset with me (anxious tendency). I've noticed I sometimes over-text or seek reassurance, which can push people away. Recognizing this, I now give myself a 'waiting period' before reacting to perceived silence, reminding myself that silence usually just means they're busy."
      }
    ],
    relatedModelIds: ["empathy-gap", "emotional-bank-account", "love-languages"],
    tags: ["psychology", "love", "childhood", "self-awareness"]
  },
  {
    id: "love-languages",
    categoryId: "relationships",
    title: "Love Languages",
    emoji: "\u{1F48C}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "You're shouting 'I love you' in French, and they only speak Japanese. No wonder they can't hear it.",
      analogy: "Imagine everyone has a unique emotional 'charging port.' Some people charge through USB-C (words of affirmation), some through Lightning (physical touch), some through old-school headphone jack (quality time). You might be desperately trying to plug in a USB-C charger into someone who needs a Lightning cable. You're GIVING love, but they're not RECEIVING it -- because it's in the wrong format.",
      sections: [
        {
          title: "The Five Languages",
          content: "Words of Affirmation: 'I love you,' compliments, encouragement. Acts of Service: doing the dishes, fixing things, running errands. Receiving Gifts: thoughtful presents (not expensive, just meaningful). Quality Time: undivided attention, being fully present. Physical Touch: hugs, holding hands, a hand on the shoulder. Everyone speaks all five to some degree, but usually one or two are dominant."
        },
        {
          title: "Speak THEIR Language, Not Yours",
          content: "The mistake almost everyone makes: expressing love in YOUR language instead of theirs. You keep buying gifts for someone who just wants you to sit and talk. You keep saying 'I love you' to someone who just wants you to fold the laundry. The magic happens when you figure out YOUR partner's primary language and learn to speak it fluently, even if it's foreign to you."
        }
      ],
      ahaQuote: "Love isn't felt until it's spoken in a language the other person understands.",
      realWorldExample: "Jake shows love through Acts of Service -- he fixes things, cooks dinner, runs errands. His wife Sarah's primary language is Quality Time. She doesn't notice the fixed faucet; she notices he's always busy doing something instead of sitting with her. He feels unappreciated ('I do SO MUCH!'). She feels neglected ('We never just TALK.'). Both are loving each other, but neither feels loved."
    },
    exercises: [
      {
        type: "matching",
        id: "love-languages-ex-1",
        instruction: "Match each love language with the action that speaks it loudest.",
        pairs: [
          { left: "Words of Affirmation", right: "Writing a heartfelt note about what you admire in them" },
          { left: "Acts of Service", right: "Doing the chores they hate without being asked" },
          { left: "Quality Time", right: "Putting your phone away for an entire evening together" },
          { left: "Physical Touch", right: "Holding their hand while walking through a crowded place" }
        ],
        explanation: "Each love language has specific actions that resonate deeply with those who speak it. The key is identifying which actions matter most to the people you care about."
      },
      {
        type: "true-false",
        id: "love-languages-ex-2",
        statement: "Everyone has the same love language as their partner, which is why they got together.",
        correct: false,
        explanation: "Partners often have DIFFERENT primary love languages, which is precisely why misunderstandings occur. Attraction isn't based on matching love languages -- but relationship satisfaction often depends on learning to speak each other's language."
      },
      {
        type: "scenario",
        id: "love-languages-ex-3",
        scenario: "Emma's boyfriend showers her with expensive gifts for every occasion. But Emma often says she just wishes they could spend a quiet evening together without distractions. She feels disconnected despite all the presents.",
        question: "What love language mismatch is occurring?",
        options: [
          "He speaks Gifts, she needs Words of Affirmation",
          "He speaks Gifts, she needs Quality Time",
          "She's ungrateful and should appreciate his efforts",
          "He speaks Acts of Service, she needs Physical Touch"
        ],
        correctIndex: 1,
        explanation: "He's expressing love through Receiving Gifts, but her primary language is Quality Time. She'd trade every gift for an evening of his undivided attention. Neither is wrong -- they're just speaking different languages."
      },
      {
        type: "real-world",
        id: "love-languages-ex-4",
        challenge: "Identify your primary love language and that of someone important to you.",
        prompts: [
          "What makes YOU feel most loved and appreciated?",
          "What do you most often complain about not getting enough of?",
          "How does this differ from how you typically EXPRESS love?"
        ],
        exampleResponse: "My primary language is Words of Affirmation -- a genuine compliment can carry me for a week. But I tend to express love through Acts of Service (cooking, helping). My partner's language is Physical Touch. So I need to remember: cook less, hug more, and tell her what I appreciate about her while hugging."
      }
    ],
    relatedModelIds: ["emotional-bank-account", "empathy-gap", "reciprocity"],
    tags: ["communication", "love", "relationships", "understanding"]
  },
  {
    id: "trust-battery",
    categoryId: "relationships",
    title: "Trust Battery",
    emoji: "\u{1F50B}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Every person in your life has a battery level -- and you can watch it drain or charge in real time.",
      analogy: "When you first meet someone, their trust battery starts at about 50% -- neutral. Every time they follow through on a promise, it charges a bit. Every time they're honest when it's hard, it charges more. Every time they flake, it drains. Every time they lie, it PLUMMETS. Some people in your life are at 95% (you'd trust them with your life). Others are at 10% (you double-check everything they say). The battery metaphor makes invisible trust visible.",
      sections: [
        {
          title: "Slow to Charge, Fast to Drain",
          content: "Trust batteries charge slowly through consistent, reliable behavior over time. But they drain FAST -- one betrayal can drop a 90% battery to 20% instantly. And here's the worst part: once a battery has been deeply drained, it never quite charges back to its original maximum. A cracked battery holds less charge. This is why protecting trust is more important than building it."
        },
        {
          title: "Using the Battery in Conversations",
          content: "The trust battery concept (coined by Shopify's CEO Tobi Lutke) gives teams a shared language for addressing trust issues without it getting personal. Instead of 'I don't trust you,' you can say 'My trust battery with you is at about 30% right now.' It separates the person from the pattern and opens a constructive conversation about what specific behaviors would recharge it."
        }
      ],
      ahaQuote: "Trust arrives on foot and leaves on horseback.",
      realWorldExample: "Your new coworker joins the team. Trust battery: 50%. They deliver their first project on time and well done -- up to 60%. They stay late to help you fix a bug -- 70%. They take credit for your idea in a meeting -- CRASH to 35%. One withdrawal undid weeks of deposits. Now every interaction is colored by wariness."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "trust-battery-ex-1",
        question: "When two people first meet, where does the trust battery typically start?",
        options: [
          "0% -- you should never trust strangers",
          "50% -- neutral, giving benefit of the doubt",
          "100% -- trust until proven otherwise",
          "It depends entirely on first impressions"
        ],
        correctIndex: 1,
        explanation: "The trust battery concept starts at 50% -- a neutral starting point. From there, each interaction either charges (reliable behavior) or drains (unreliable behavior) the battery."
      },
      {
        type: "true-false",
        id: "trust-battery-ex-2",
        statement: "A trust battery that has been deeply drained can be fully recharged to its original maximum with enough positive interactions.",
        correct: false,
        explanation: "Like a physical battery that's been damaged, a deeply drained trust battery often never fully recovers to its original capacity. The memory of betrayal limits how much trust can be rebuilt -- the maximum decreases."
      },
      {
        type: "fill-in-blank",
        id: "trust-battery-ex-3",
        textBefore: "The trust battery concept was popularized by Shopify CEO Tobi Lutke as a way to make",
        textAfter: "visible and discussable within teams.",
        acceptedAnswers: ["trust", "trust levels", "trust issues", "interpersonal trust"],
        hint: "What invisible thing does the battery measure?",
        explanation: "The trust battery metaphor makes the abstract concept of trust concrete and measurable, giving teams a shared language to discuss interpersonal dynamics without it feeling like a personal attack."
      },
      {
        type: "scenario",
        id: "trust-battery-ex-4",
        scenario: "A team lead notices that two team members have very low trust batteries with each other. Their collaboration is suffering, and projects are being delayed.",
        question: "What's the best approach using the trust battery framework?",
        options: [
          "Separate them and never have them work together again",
          "Force them to work on a team-building exercise",
          "Have an honest conversation about current battery levels and agree on specific actions to recharge",
          "Ignore it and hope it resolves naturally"
        ],
        correctIndex: 2,
        explanation: "The trust battery framework is designed for exactly this conversation. Naming the battery level removes personal blame and focuses on specific behaviors that would help recharge trust. It's constructive and actionable."
      }
    ],
    relatedModelIds: ["emotional-bank-account", "reciprocity", "dunbars-number"],
    tags: ["trust", "workplace", "leadership", "communication"]
  }
];
