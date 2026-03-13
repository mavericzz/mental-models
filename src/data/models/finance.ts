import type { MentalModel } from "../../types/models";

export const financeModels: MentalModel[] = [
  {
    id: "compound-interest",
    categoryId: "finance",
    title: "Compound Interest",
    emoji: "\u{1F4B0}",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "What if your money could make babies, and then those babies made babies too?",
      analogy: "Imagine you have a magical snowball. Every time you roll it down a hill, it picks up more snow. But here's the trick -- the bigger the snowball gets, the MORE snow it picks up with each roll. A tiny snowball at the top becomes a monster at the bottom. That's compound interest: your money earns money, and then THAT money earns money too.",
      sections: [
        {
          title: "The Penny That Became a Fortune",
          content: "If someone offered you a million dollars or a penny that doubles every day for 30 days, which would you pick? The penny becomes over $5 million! On day one it's just 1 cent, day ten it's only $5.12, and you'd feel silly. But by day 20 it's $5,242 and by day 30 it's $5,368,709. Compound interest is sneaky -- it looks boring at first and then goes absolutely bonkers."
        },
        {
          title: "Why Starting Early Is a Superpower",
          content: "A 20-year-old who invests $200/month until age 30 and then STOPS will often end up with MORE money at retirement than someone who starts at 30 and invests $200/month for 35 straight years. Those first dollars had decades of snowball-rolling time. Time isn't just money -- time is money making money making money."
        },
        {
          title: "The Dark Side: Compound Interest Working Against You",
          content: "Credit card debt uses the same magic trick, except now the snowball is rolling toward YOU. When you owe money at 20% interest and only pay the minimum, the interest grows interest. A $5,000 shopping spree can quietly become $15,000. Compound interest is either your best friend or your worst enemy -- there is no in-between."
        }
      ],
      ahaQuote: "Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn't, pays it.",
      realWorldExample: "You put $1,000 in a savings account earning 5% yearly. After year one you have $1,050. After year two, you earn 5% on $1,050 (not just $1,000), giving you $1,102.50. After 30 years, that single $1,000 grows to $4,321 -- without you adding another cent."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "compound-interest-ex-1",
        question: "What makes compound interest different from simple interest?",
        options: [
          "You earn a higher interest rate",
          "You earn interest on your interest, not just the original amount",
          "The bank pays you more frequently",
          "You need to invest more money upfront"
        ],
        correctIndex: 1,
        explanation: "Compound interest means you earn interest on your accumulated interest, not just your original deposit. This creates exponential growth over time."
      },
      {
        type: "true-false",
        id: "compound-interest-ex-2",
        statement: "Starting to invest 10 years earlier can be more valuable than investing twice as much money per month starting later.",
        correct: true,
        explanation: "Time is the most powerful ingredient in compound interest. Those extra years give your money exponentially more time to grow, often outweighing larger but later contributions."
      },
      {
        type: "scenario",
        id: "compound-interest-ex-3",
        scenario: "Alex puts $10,000 in an account earning 7% compound interest annually. Alex doesn't add or withdraw any money.",
        question: "Approximately how much will Alex have after 10 years?",
        options: [
          "$17,000 (the interest just adds up linearly)",
          "$19,672 (the interest compounds on itself)",
          "$70,000 (7% times 10 years times the principal)",
          "$10,700 (only the first year's interest counts)"
        ],
        correctIndex: 1,
        explanation: "At 7% compound interest, $10,000 grows to about $19,672 in 10 years. This is more than the $17,000 simple interest would produce because each year's interest earns interest in subsequent years."
      },
      {
        type: "real-world",
        id: "compound-interest-ex-4",
        challenge: "Calculate the 'compound effect' in a non-financial area of your life. Pick a skill you practice daily.",
        prompts: [
          "What small daily habit could you start that compounds over time?",
          "How does today's 1% improvement become massive over a year?",
          "Where are you paying 'compound interest' on a bad habit?"
        ],
        exampleResponse: "I read 20 pages a day. That's about 7,300 pages a year, or roughly 24 books. But it compounds because each book builds on knowledge from previous ones, making me read faster and understand deeper. After 5 years, I won't just know 120 books worth of stuff -- I'll have a web of interconnected knowledge that makes every new book more valuable."
      }
    ],
    relatedModelIds: ["leverage", "pareto-principle", "diminishing-returns"],
    tags: ["investing", "growth", "exponential", "time-value"]
  },
  {
    id: "opportunity-cost",
    categoryId: "finance",
    title: "Opportunity Cost",
    emoji: "\u{1F6A7}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Every time you say yes to something, you're secretly saying no to everything else.",
      analogy: "You're at an ice cream shop with enough money for ONE scoop. You pick chocolate. Yum! But the real cost of that chocolate scoop isn't the $3 you paid -- it's the strawberry scoop you DIDN'T get to eat. Every choice has a ghost: the next-best thing you gave up.",
      sections: [
        {
          title: "The Hidden Price Tag on Everything",
          content: "When you spend 3 hours binge-watching a show, the 'price' isn't just 3 hours of sitting. It's also the workout you didn't do, the book you didn't read, or the side project you didn't start. Money works the same way: that $50 dinner out is also the $50 you didn't put toward a vacation fund. Everything has two price tags -- what you pay AND what you miss."
        },
        {
          title: "How Rich People Think Differently",
          content: "A billionaire won't bend down to pick up a $100 bill if it takes 10 seconds -- because those 10 seconds of their time are worth more than $100. That sounds absurd, but it reveals the core idea: the value of anything depends on what else you could be doing. This is why delegation, saying no, and focus are superpowers."
        }
      ],
      ahaQuote: "The cost of a thing is the amount of life you exchange for it.",
      realWorldExample: "You could work overtime this Saturday and earn $200, or you could go hiking with friends. If you choose hiking, your opportunity cost is $200. If you choose work, your opportunity cost is the memories, exercise, and connection you missed. Neither choice is wrong -- but knowing the trade-off helps you choose intentionally."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "opportunity-cost-ex-1",
        question: "You have a free Saturday. You can either freelance for $300 or attend a networking event. You choose the networking event. What is your opportunity cost?",
        options: [
          "The price of admission to the networking event",
          "The $300 you could have earned freelancing",
          "The gas money to drive to the event",
          "There is no opportunity cost since the event was free"
        ],
        correctIndex: 1,
        explanation: "Opportunity cost is the value of the next best alternative you gave up. By attending the event, you gave up $300 in freelance income -- that's your opportunity cost, regardless of what the event itself cost."
      },
      {
        type: "true-false",
        id: "opportunity-cost-ex-2",
        statement: "If something is free, it has no opportunity cost.",
        correct: false,
        explanation: "Even free things cost you time and attention, which could be spent on something else. A free 3-hour seminar still costs you 3 hours that could have been used for something else valuable."
      },
      {
        type: "fill-in-blank",
        id: "opportunity-cost-ex-3",
        textBefore: "Opportunity cost is the value of the next best",
        textAfter: "you give up when making a choice.",
        acceptedAnswers: ["alternative", "option", "choice"],
        hint: "Think about what you're NOT choosing",
        explanation: "Opportunity cost is always about the road not taken -- the best alternative you sacrificed to pursue your chosen path."
      },
      {
        type: "scenario",
        id: "opportunity-cost-ex-4",
        scenario: "Maria owns a building. She can either rent it out for $2,000/month or use it for her own bakery business that earns $2,500/month in profit.",
        question: "What is the opportunity cost of running the bakery?",
        options: [
          "$2,500/month -- the bakery profits",
          "$2,000/month -- the rent she could have collected",
          "$4,500/month -- both amounts combined",
          "$500/month -- the difference between the two"
        ],
        correctIndex: 1,
        explanation: "The opportunity cost of the bakery is the $2,000/month rent she foregoes. Her net benefit from choosing the bakery is $500/month ($2,500 - $2,000). Smart thinking about opportunity cost means she should keep the bakery."
      }
    ],
    relatedModelIds: ["sunk-cost-fallacy", "comparative-advantage", "pareto-principle"],
    tags: ["decision-making", "trade-offs", "economics", "choices"]
  },
  {
    id: "sunk-cost-fallacy",
    categoryId: "finance",
    title: "Sunk Cost Fallacy",
    emoji: "\u{1F573}\uFE0F",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "Just because you've already eaten half a terrible sandwich doesn't mean you should finish it.",
      analogy: "Imagine you buy a movie ticket for $15, and 30 minutes in, the movie is AWFUL. You want to leave, but you think: 'I already paid $15, I should stay.' That $15 is gone whether you stay or leave. By staying, you're not saving $15 -- you're just wasting another 90 minutes on top of it. That's the sunk cost fallacy: throwing good time/money after bad because you can't accept what you've already lost.",
      sections: [
        {
          title: "The 'But I Already...' Trap",
          content: "You hear it everywhere: 'But I already spent 4 years on this degree I hate.' 'But we already put $50,000 into this failing project.' 'But we've been dating for 3 years!' Past investment NEVER makes a bad situation good. The only question that matters is: 'From RIGHT NOW, is this the best use of my future time and money?' Yesterday's receipts don't change tomorrow's math."
        },
        {
          title: "Why Our Brains Fall For It",
          content: "We hate feeling wasteful. Abandoning something we invested in feels like admitting we were wrong, and our ego HATES that. Casinos exploit this constantly -- 'I've already lost $500, I need to keep playing to win it back!' Smart decision-makers learn to ask: 'If I were starting from scratch today, would I make this same choice?' If the answer is no, it's time to walk away."
        }
      ],
      ahaQuote: "You can't drive forward by staring in the rearview mirror.",
      realWorldExample: "You've been waiting 45 minutes for a bus. You could take a $10 Uber and arrive in 5 minutes. 'But I've already waited 45 minutes!' you think. Those 45 minutes are gone regardless. The real question is: is your next 30 minutes of waiting worth more or less than $10?"
    },
    exercises: [
      {
        type: "scenario",
        id: "sunk-cost-fallacy-ex-1",
        scenario: "Jake spent $200 on a non-refundable concert ticket. On the day of the concert, there's a terrible snowstorm and he's feeling sick. His friend offers a cozy movie night at home instead.",
        question: "Which reasoning represents the sunk cost fallacy?",
        options: [
          "'I should go to the concert because I love live music and this band rarely tours.'",
          "'I should go because I already spent $200 and don't want to waste the money.'",
          "'I should stay home because driving in a snowstorm while sick is dangerous.'",
          "'I should stay home because I value safety over entertainment.'"
        ],
        correctIndex: 1,
        explanation: "Going because you 'already spent $200' is the sunk cost fallacy. The $200 is gone whether Jake goes or stays. The rational choice considers only future factors: enjoyment, safety, and health."
      },
      {
        type: "true-false",
        id: "sunk-cost-fallacy-ex-2",
        statement: "If a company has invested millions in a project that research now shows will fail, they should continue because of the investment already made.",
        correct: false,
        explanation: "This is textbook sunk cost fallacy. Past investment shouldn't drive future decisions. If research shows the project will fail, continuing just adds more losses to the pile."
      },
      {
        type: "multiple-choice",
        id: "sunk-cost-fallacy-ex-3",
        question: "What's the best question to ask yourself to avoid the sunk cost fallacy?",
        options: [
          "How much have I already spent on this?",
          "If I were starting fresh today with no prior investment, would I choose this?",
          "Can I get a refund on what I've already spent?",
          "Who else has invested in something similar?"
        ],
        correctIndex: 1,
        explanation: "The 'fresh start' question removes past investment from the equation and forces you to evaluate the decision based only on its future value -- which is all that actually matters."
      },
      {
        type: "real-world",
        id: "sunk-cost-fallacy-ex-4",
        challenge: "Identify a sunk cost fallacy in your own life right now.",
        prompts: [
          "What are you continuing with mainly because you've 'already invested' time, money, or effort?",
          "If you started fresh today, would you make the same choice?",
          "What would you do differently if the past investment didn't exist?"
        ],
        exampleResponse: "I've been keeping a gym membership I barely use for 8 months because 'I already paid the signup fee.' The signup fee is gone. I should cancel and switch to outdoor running, which I actually enjoy and is free. I was paying $40/month to avoid feeling like I wasted $100."
      }
    ],
    relatedModelIds: ["opportunity-cost", "loss-aversion", "status-quo-bias"],
    tags: ["cognitive-bias", "decision-making", "money", "psychology"]
  },
  {
    id: "pareto-principle",
    categoryId: "finance",
    title: "Pareto Principle (80/20 Rule)",
    emoji: "\u{1F4CA}",
    difficulty: 1,
    estimatedMinutes: 4,
    eli5: {
      hook: "A tiny sliver of what you do creates almost ALL your results.",
      analogy: "Imagine your closet has 100 pieces of clothing. You probably wear the same 20 items about 80% of the time. The other 80 items? They just hang there taking up space. Life works the same way: a small handful of your efforts, customers, habits, or friends produce the vast majority of your happiness, income, and results.",
      sections: [
        {
          title: "It's Everywhere Once You See It",
          content: "20% of bugs cause 80% of software crashes. 20% of customers generate 80% of revenue. 20% of exercises give you 80% of fitness gains. 20% of your study time covers 80% of the exam. It's not always exactly 80/20, but the pattern is shockingly consistent: a vital few inputs drive the majority of outputs."
        },
        {
          title: "The Power of Ruthless Prioritization",
          content: "Most people try to do everything equally well. Pareto thinkers ask: 'Which 20% of my work produces 80% of my impact?' Then they go ALL IN on that 20% and minimize, delegate, or eliminate the rest. It's not about being lazy -- it's about being strategic. Working harder on the wrong things is just running faster in the wrong direction."
        }
      ],
      ahaQuote: "Focus on the vital few, ignore the trivial many.",
      realWorldExample: "A freelancer tracks their income sources and realizes 2 out of 10 clients provide 80% of revenue and cause almost zero stress. The other 8 clients provide 20% of revenue but 90% of headaches. The smart move? Nurture those 2 golden clients, find 2 more like them, and gracefully drop the energy vampires."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "pareto-principle-ex-1",
        question: "A store owner finds that 15 out of 100 products generate 82% of total profits. What should they do according to the Pareto Principle?",
        options: [
          "Remove all other 85 products immediately",
          "Focus marketing and inventory efforts on those 15 products while evaluating the rest",
          "Treat all 100 products equally since every sale helps",
          "Raise prices on the 85 low-performing products"
        ],
        correctIndex: 1,
        explanation: "The Pareto Principle suggests doubling down on what works best -- not eliminating everything else, but strategically focusing resources on the vital few for maximum impact."
      },
      {
        type: "fill-in-blank",
        id: "pareto-principle-ex-2",
        textBefore: "The Pareto Principle suggests that roughly 80% of effects come from 20% of",
        textAfter: ".",
        acceptedAnswers: ["causes", "inputs", "efforts", "the causes"],
        hint: "What drives the results?",
        explanation: "The 80/20 rule states that a small number of causes or inputs typically drive the majority of results or outputs."
      },
      {
        type: "true-false",
        id: "pareto-principle-ex-3",
        statement: "The Pareto Principle means you should only ever do 20% of the work and slack off the rest of the time.",
        correct: false,
        explanation: "The Pareto Principle is about identifying high-leverage activities and prioritizing them, not about doing less work. It's a tool for focusing effort where it matters most."
      },
      {
        type: "scenario",
        id: "pareto-principle-ex-4",
        scenario: "A student has a final exam in 3 days covering 10 chapters. Their professor hints that chapters 2, 5, and 7 cover the most important concepts that appear throughout the exam.",
        question: "How should the student apply the Pareto Principle?",
        options: [
          "Study all 10 chapters equally, spending the same time on each",
          "Only study chapters 2, 5, and 7 and skip everything else",
          "Start with deep study of chapters 2, 5, and 7, then review the others with remaining time",
          "Study the other 7 chapters first since they need more work"
        ],
        correctIndex: 2,
        explanation: "The smartest approach is to deeply master the high-impact 20% first, then use remaining time on the rest. This ensures maximum coverage of likely exam content."
      }
    ],
    relatedModelIds: ["leverage-points", "diminishing-returns", "opportunity-cost"],
    tags: ["productivity", "efficiency", "prioritization", "strategy"]
  },
  {
    id: "diminishing-returns",
    categoryId: "finance",
    title: "Diminishing Returns",
    emoji: "\u{1F4C9}",
    difficulty: 2,
    estimatedMinutes: 4,
    eli5: {
      hook: "The first slice of pizza is heavenly. The eighth? You might actually pay someone to take it away.",
      analogy: "You're super thirsty. The first glass of water is LIFE-CHANGING. The second glass is pretty nice. The third? Meh, okay. The fourth? You're uncomfortably full. Each additional glass gives you less and less satisfaction. That's diminishing returns: more of the same input produces smaller and smaller benefits.",
      sections: [
        {
          title: "When More Becomes Less",
          content: "A farmer adds fertilizer to her field. The first bag doubles the harvest! The second bag increases it by 30%. The third by 10%. The fourth bag actually starts damaging the soil. Every input has a sweet spot. Beyond it, you're not just getting less bang for your buck -- you might be making things WORSE. This is why studying for 16 hours straight is less effective than 4 focused hours."
        },
        {
          title: "Finding the Sweet Spot",
          content: "The goal isn't to find the maximum input -- it's to find the point where each additional unit of effort stops being worth the cost. This is why smart companies don't chase perfection: getting a product from 95% to 100% perfect might cost more than the entire journey from 0% to 95%."
        }
      ],
      ahaQuote: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
      realWorldExample: "Adding one developer to a small team speeds things up a lot. Adding a second helps, but less. By the time you add the tenth developer to a simple project, they're mostly getting in each other's way. The communication overhead outweighs the extra hands."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "diminishing-returns-ex-1",
        question: "A coffee shop owner adds employees. The first barista makes 50 drinks/hour. The second adds 40 more. The third adds 20 more. What does this pattern illustrate?",
        options: [
          "The employees are getting lazier over time",
          "Diminishing returns -- each additional worker adds less output",
          "The shop needs better equipment",
          "The workers need more training"
        ],
        correctIndex: 1,
        explanation: "Each additional barista adds fewer drinks because they start sharing limited space, equipment, and customers. The output per additional worker diminishes."
      },
      {
        type: "true-false",
        id: "diminishing-returns-ex-2",
        statement: "Diminishing returns means that at some point, additional effort produces zero benefit.",
        correct: false,
        explanation: "Diminishing returns means each additional unit produces LESS benefit than the previous one, not zero benefit. However, eventually it CAN reach zero or even negative returns -- but that's a separate concept."
      },
      {
        type: "fill-in-blank",
        id: "diminishing-returns-ex-3",
        textBefore: "The law of diminishing returns states that each additional unit of input yields progressively",
        textAfter: "output.",
        acceptedAnswers: ["less", "smaller", "lower", "fewer", "decreasing"],
        hint: "Does each extra unit give more or less?",
        explanation: "Diminishing returns means the marginal output decreases with each additional unit of input, even though total output may still be increasing."
      },
      {
        type: "scenario",
        id: "diminishing-returns-ex-4",
        scenario: "A student studies 2 hours and scores 70%. They study 4 hours and score 85%. They study 8 hours and score 90%. They study 16 hours and score 92%.",
        question: "What would be the most efficient study strategy for this student?",
        options: [
          "Always study 16 hours to maximize the score",
          "Study around 4 hours for the best balance of time invested versus grade improvement",
          "Study only 2 hours since that's the most efficient single hour",
          "The data doesn't show diminishing returns"
        ],
        correctIndex: 1,
        explanation: "The first 4 hours gained 85% (21.25% per hour), but the next 4 hours only gained 5% (1.25% per hour), and the next 8 hours gained just 2% (0.25% per hour). Around 4 hours offers the best return on time invested."
      }
    ],
    relatedModelIds: ["pareto-principle", "compound-interest", "progressive-overload"],
    tags: ["economics", "optimization", "efficiency", "marginal-utility"]
  },
  {
    id: "supply-and-demand",
    categoryId: "finance",
    title: "Supply and Demand",
    emoji: "\u{2696}\uFE0F",
    difficulty: 1,
    estimatedMinutes: 5,
    eli5: {
      hook: "Why do umbrellas cost $25 when it's raining but $5 when it's sunny?",
      analogy: "Imagine there's only ONE chocolate chip cookie left at the bake sale, and 20 kids want it. That cookie's price is going UP. Now imagine there are 200 cookies and only 3 kids want them. Cookies are basically free. Price isn't set by some wizard -- it's a tug-of-war between how badly people want something and how much of it exists.",
      sections: [
        {
          title: "The Invisible Seesaw",
          content: "Supply and demand sit on a seesaw. When everyone wants something (high demand) and there's not much of it (low supply), prices soar -- like toilet paper during a pandemic or concert tickets for a farewell tour. When nobody wants something (low demand) or there's tons of it (high supply), prices crash -- like last season's fashion or bananas at a tropical market."
        },
        {
          title: "It Explains Almost Everything",
          content: "Why do doctors earn more than cashiers? Few people can do brain surgery (low supply), but lots of people need it (high demand). Why is water cheap and diamonds expensive? Water is abundant, diamonds are scarce. Why do Uber prices surge on New Year's Eve? Massive demand, limited drivers. Once you see supply and demand, you see it EVERYWHERE."
        }
      ],
      ahaQuote: "Price is what you pay. Value is what you get. But supply and demand decides both.",
      realWorldExample: "When a new iPhone launches, supply is limited and demand is huge, so people camp overnight and prices stay high. Six months later, supply catches up, the hype fades, and you can get the same phone for $200 less. Nothing about the phone changed -- only the balance of supply and demand."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "supply-and-demand-ex-1",
        question: "A sudden frost destroys 60% of Florida's orange crop. What happens to orange juice prices?",
        options: [
          "Prices decrease because people feel sorry for farmers",
          "Prices stay the same because demand hasn't changed",
          "Prices increase because supply dropped while demand stayed the same",
          "Prices increase only if the government raises them"
        ],
        correctIndex: 2,
        explanation: "When supply drops dramatically while demand remains constant, prices rise. Fewer oranges means each one is more scarce and therefore more valuable in the market."
      },
      {
        type: "true-false",
        id: "supply-and-demand-ex-2",
        statement: "If a new technology makes it cheaper to produce solar panels, we'd expect the price of solar panels to decrease.",
        correct: true,
        explanation: "When production becomes cheaper, supply increases (companies can produce more at each price point). Increased supply, assuming demand stays the same, pushes prices down."
      },
      {
        type: "matching",
        id: "supply-and-demand-ex-3",
        instruction: "Match each real-world event with its supply/demand effect on price.",
        pairs: [
          { left: "A viral TikTok makes a sneaker brand famous", right: "Price rises (demand increases)" },
          { left: "A new factory opens producing generic medications", right: "Price falls (supply increases)" },
          { left: "Airline tickets during holiday season", right: "Price rises (demand increases)" },
          { left: "Clothing at end-of-season clearance", right: "Price falls (demand decreases)" }
        ],
        explanation: "Prices rise when demand increases or supply decreases, and fall when demand decreases or supply increases. These forces constantly interact to set market prices."
      },
      {
        type: "scenario",
        id: "supply-and-demand-ex-4",
        scenario: "A popular streamer plays an indie video game on their channel, seen by 2 million viewers. The game currently costs $15 and was selling about 100 copies per day.",
        question: "What's most likely to happen in the days after the stream?",
        options: [
          "The price drops because more people know about the game now",
          "Nothing changes because the supply of digital games is unlimited",
          "Sales surge due to increased demand, and the developer might raise the price",
          "The developer must lower the price to attract the new audience"
        ],
        correctIndex: 2,
        explanation: "While digital goods have theoretically unlimited supply, demand still drives pricing power. The surge in interest gives the developer leverage to maintain or increase the price while sales skyrocket."
      }
    ],
    relatedModelIds: ["inflation", "opportunity-cost", "leverage"],
    tags: ["economics", "pricing", "markets", "fundamentals"]
  },
  {
    id: "inflation",
    categoryId: "finance",
    title: "Inflation",
    emoji: "\u{1F388}",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "Your grandparents bought a house for $20,000. Now that same house costs $400,000. The house didn't get fancier -- the money got weaker.",
      analogy: "Imagine everyone in your class has 10 gold stars. A gold star can buy one candy bar. Then the teacher gives EVERYONE 10 more gold stars. Now everyone has 20 stars, but there's the same amount of candy. Suddenly it costs 2 gold stars per candy bar instead of 1. Nobody is richer -- the stars just mean less. That's inflation: when money itself loses value.",
      sections: [
        {
          title: "The Invisible Thief",
          content: "If you hide $1,000 under your mattress and inflation is 3% per year, after 10 years your cash can only buy what $744 would buy today. You didn't spend a cent, but you LOST over $250 in purchasing power. Inflation is a silent tax that punishes people who just hold cash. It's like an ice cube -- leave it sitting there and it slowly melts away."
        },
        {
          title: "Why Does It Happen?",
          content: "Three big reasons: (1) The government prints more money -- more dollars chasing the same goods. (2) Costs go up -- oil prices rise, wages increase, supply chains break, and companies pass those costs to you. (3) Everyone expects prices to rise, so they demand higher wages, which makes companies raise prices, which makes people demand higher wages... it's a self-fulfilling loop."
        }
      ],
      ahaQuote: "Inflation is when your money buys fewer groceries -- and the bag is smaller too.",
      realWorldExample: "A movie ticket cost $5 in 2000 and costs $15 in 2025. The movie experience is basically the same (okay, the seats are nicer). But $5 in 2000 had the same buying power as about $9.50 in 2025. So movies got more expensive even beyond inflation -- but a big chunk of that price increase is just your dollars being worth less."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "inflation-ex-1",
        question: "If inflation is 4% per year and your savings account earns 2% interest, what's happening to your wealth?",
        options: [
          "You're getting richer by 2% per year",
          "You're losing purchasing power by about 2% per year",
          "You're breaking even since you're earning interest",
          "Inflation doesn't affect savings accounts"
        ],
        correctIndex: 1,
        explanation: "Your 'real' return is interest minus inflation: 2% - 4% = -2%. Even though your account balance grows, prices grow faster, so you can actually buy LESS each year."
      },
      {
        type: "true-false",
        id: "inflation-ex-2",
        statement: "People who have fixed-rate mortgages (loans) actually benefit from inflation.",
        correct: true,
        explanation: "With a fixed-rate mortgage, your payment stays the same while inflation makes those dollars worth less over time. You're effectively repaying with 'cheaper' money. Your salary likely rises with inflation, but your mortgage payment stays frozen."
      },
      {
        type: "fill-in-blank",
        id: "inflation-ex-3",
        textBefore: "Inflation measures the rate at which the general level of",
        textAfter: "for goods and services rises over time.",
        acceptedAnswers: ["prices", "cost", "pricing"],
        hint: "What goes up at the store?",
        explanation: "Inflation is the sustained increase in the general price level of goods and services, reducing the purchasing power of money over time."
      },
      {
        type: "scenario",
        id: "inflation-ex-4",
        scenario: "Sarah gets a 3% raise at work this year. She's excited until she reads that inflation was 5% this year.",
        question: "What actually happened to Sarah's financial situation?",
        options: [
          "She's better off because she got a raise",
          "She's worse off -- her purchasing power decreased by about 2%",
          "She broke even since 3% plus 5% equals 8% growth",
          "Inflation doesn't affect salaries"
        ],
        correctIndex: 1,
        explanation: "Sarah's 'real' raise is 3% - 5% = -2%. Despite the nominal raise, everything costs 5% more while she only earns 3% more. She can actually buy LESS than she could last year."
      }
    ],
    relatedModelIds: ["compound-interest", "supply-and-demand", "opportunity-cost"],
    tags: ["economics", "money", "purchasing-power", "macroeconomics"]
  },
  {
    id: "leverage",
    categoryId: "finance",
    title: "Leverage",
    emoji: "\u{1F3CB}\uFE0F",
    difficulty: 2,
    estimatedMinutes: 5,
    eli5: {
      hook: "Give me a lever long enough and I'll move the world -- you just need to know where to push.",
      analogy: "A 50-pound kid can launch a 200-pound adult into the air using a seesaw. How? Leverage. By sitting farther from the middle, the kid multiplies their force. Leverage in finance works the same way: you use borrowed money, tools, or other people's resources to multiply your results far beyond what you could do alone.",
      sections: [
        {
          title: "Borrowing Power to Multiply Results",
          content: "You have $100,000 and buy a house for $100,000 cash. It goes up 10% -- you made $10,000 (10% return). But what if you put $100,000 down and BORROW $400,000 to buy a $500,000 house? It goes up 10% -- you made $50,000 on your $100,000 investment (50% return!). Same market, same 10% growth, but leverage turned it into 5x the return."
        },
        {
          title: "The Double-Edged Sword",
          content: "Here's what nobody tells you at the exciting part: leverage works in BOTH directions. That $500,000 house drops 10%? You just lost $50,000 on a $100,000 investment -- that's a 50% loss. And you still owe the bank. Leverage is a magnifying glass: it makes wins bigger AND losses bigger. Smart leverage users always ask: 'What happens if I'm wrong?'"
        },
        {
          title: "Beyond Money: Leverage Is Everywhere",
          content: "Software is leverage: write code once, it serves millions. A podcast is leverage: speak once, reach thousands. Hiring is leverage: pay someone $50/hour to free up your time worth $200/hour. The richest people in the world got there by stacking different forms of leverage -- technology, capital, media, and people."
        }
      ],
      ahaQuote: "Leverage is the difference between earning with your time and earning with your mind.",
      realWorldExample: "A YouTuber spends 10 hours making a video. That video gets watched by 500,000 people over the next year, generating ad revenue 24/7 while they sleep. Without YouTube (the leverage), those 10 hours of talking would have reached maybe 20 people in a room. The platform multiplied their impact by 25,000x."
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "leverage-ex-1",
        question: "Which of the following is NOT an example of leverage?",
        options: [
          "Taking a mortgage to buy rental property",
          "Building software that serves customers automatically",
          "Working extra hours at an hourly job for overtime pay",
          "Hiring a team to execute your business plan"
        ],
        correctIndex: 2,
        explanation: "Working more hours for more pay is linear, not leveraged. You're trading time for money at a fixed rate. True leverage multiplies your output beyond the direct input."
      },
      {
        type: "true-false",
        id: "leverage-ex-2",
        statement: "Leverage only amplifies gains, not losses.",
        correct: false,
        explanation: "Leverage amplifies BOTH gains and losses equally. A 2x leveraged investment that drops 50% wipes you out entirely. This is why leverage is often called a double-edged sword."
      },
      {
        type: "matching",
        id: "leverage-ex-3",
        instruction: "Match each type of leverage with its real-world example.",
        pairs: [
          { left: "Financial leverage", right: "Taking a loan to buy investment property" },
          { left: "Technology leverage", right: "Building an app that serves millions of users" },
          { left: "People leverage", right: "Hiring a team to scale your business" },
          { left: "Media leverage", right: "Writing a blog post that gets shared thousands of times" }
        ],
        explanation: "Leverage comes in many forms. The most powerful modern combinations stack multiple types -- like using technology AND media AND people leverage together."
      },
      {
        type: "real-world",
        id: "leverage-ex-4",
        challenge: "Identify one area in your work or life where you could apply leverage to multiply your impact.",
        prompts: [
          "Where are you currently trading time directly for results (no leverage)?",
          "What tool, system, or person could multiply your output?",
          "What's the risk if this leverage works against you?"
        ],
        exampleResponse: "I currently answer the same customer questions individually by email (no leverage). I could create an FAQ page and video tutorials (technology leverage). This would serve thousands of customers while I sleep. The risk is low -- worst case, I spend time creating content nobody watches, but I'd still save time on repetitive emails."
      }
    ],
    relatedModelIds: ["compound-interest", "pareto-principle", "comparative-advantage"],
    tags: ["amplification", "investing", "scale", "business"]
  }
];
