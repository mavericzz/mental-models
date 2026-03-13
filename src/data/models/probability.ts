import type { MentalModel } from "../../types/models";

export const probabilityModels: MentalModel[] = [
  {
    id: "expected-value",
    categoryId: "probability",
    title: "Expected Value",
    emoji: "🎰",
    difficulty: 2,
    estimatedMinutes: 8,
    eli5: {
      hook: "A bet can be 'smart' even if you lose, and 'dumb' even if you win.",
      analogy:
        "Imagine someone offers you a game: flip a coin. Heads, you win $200. Tails, you lose $50. You might lose on any single flip — but if you played this game 100 times, you'd win about $7,500 on average. That average outcome is the expected value: the probability of each outcome multiplied by its payoff, all added up. A positive expected value bet is worth taking even though you'll lose sometimes.",
      sections: [
        {
          title: "Think in Bets, Not Outcomes",
          content:
            "A poker player who goes all-in with pocket aces and loses to a lucky river card made the RIGHT decision. The outcome was bad, but the expected value was strongly positive. Judging decisions by their outcomes instead of their expected value is one of the most common thinking errors. A decision can be correct even if the result is bad — and terrible even if the result is good.",
        },
        {
          title: "Life's Hidden Expected Value Calculations",
          content:
            "Should you ask for a raise? Best case: 20% salary increase. Worst case: an awkward conversation. The expected value is massively positive. Should you start a side project? Best case: a new career. Worst case: you learn skills and meet people. Again, positive. Most people overweight the worst case and miss that the expected value of many 'risky' actions is hugely in their favor.",
        },
      ],
      ahaQuote:
        "A good decision is one with positive expected value. Whether you happened to win or lose this time is just noise.",
      realWorldExample:
        "An investor puts $10,000 into a startup. There's a 90% chance of losing everything and a 10% chance of a 50x return ($500,000). Expected value: 0.9 x (-$10,000) + 0.1 x ($500,000) = -$9,000 + $50,000 = $41,000. Despite a 90% chance of losing, this is a brilliant bet in expected value terms — which is exactly how venture capital works.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "expected-value-ex-1",
        question:
          "A friend offers you a bet: roll a die. If it lands on 6, you win $120. If it lands on anything else, you pay $20. Should you take this bet?",
        options: [
          "No — you'll probably lose since there's only a 1-in-6 chance of winning",
          "Yes — the expected value is positive: (1/6 x $120) - (5/6 x $20) = $20 - $16.67 = $3.33 per roll",
          "Only if you're feeling lucky",
          "No — gambling is always a bad idea",
        ],
        correctIndex: 1,
        explanation:
          "The expected value calculation shows this is a profitable bet over time. You win $120 one-sixth of the time ($20 average gain) and lose $20 five-sixths of the time ($16.67 average loss). The expected value per roll is +$3.33. You should take this bet every single time it's offered.",
      },
      {
        type: "true-false",
        id: "expected-value-ex-2",
        statement:
          "If you made a decision with positive expected value and lost money, you made a bad decision.",
        correct: false,
        explanation:
          "Expected value tells us to evaluate decision quality separately from outcome quality. A positive-expected-value decision is good by definition, regardless of the specific outcome. Over many similar decisions, positive expected value bets will earn money. Individual results are noisy — the decision quality is what matters.",
      },
      {
        type: "scenario",
        id: "expected-value-ex-3",
        scenario:
          "You're considering two job offers. Job A: $80,000 guaranteed salary. Job B: $50,000 base with a 40% chance of earning a $100,000 bonus based on company performance.",
        question:
          "Which job has a higher expected value in total compensation?",
        options: [
          "Job A: $80,000 guaranteed is better than uncertainty",
          "Job B: Expected value is $50,000 + (0.4 x $100,000) = $90,000",
          "They're equal because the bonus isn't guaranteed",
          "Not enough information to calculate",
        ],
        correctIndex: 1,
        explanation:
          "Job B's expected value is $50,000 + $40,000 (expected bonus) = $90,000, which is higher than Job A's $80,000. However, expected value doesn't capture everything — if losing the bonus would cause financial hardship, the certainty of Job A might be worth the $10,000 expected value difference. Context matters beyond the math.",
      },
      {
        type: "fill-in-blank",
        id: "expected-value-ex-4",
        textBefore:
          "Expected value is calculated by multiplying each possible outcome by its",
        textAfter: "and summing the results.",
        acceptedAnswers: [
          "probability",
          "likelihood",
          "chance",
          "odds",
          "probability of occurring",
        ],
        hint: "What weight do you give each possible outcome?",
        explanation:
          "Expected value = sum of (each outcome x its probability). This gives you the average result you'd expect if you repeated the decision many times. It's the single most important concept in rational decision-making under uncertainty.",
      },
    ],
    relatedModelIds: [
      "base-rate-neglect",
      "black-swan",
      "fat-tails",
      "gamblers-fallacy",
    ],
    tags: [
      "probability",
      "decision-making",
      "risk",
      "betting",
      "rationality",
    ],
  },
  {
    id: "base-rate-neglect",
    categoryId: "probability",
    title: "Base Rate Neglect",
    emoji: "📉",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "The most important number in any prediction is the one people almost always forget to check.",
      analogy:
        "A doctor tells you a test for a rare disease came back positive, and the test is 99% accurate. Scary, right? But wait — if only 1 in 10,000 people have the disease, then out of 10,000 people tested, 100 will get false positives (1% error rate x 10,000) and only 1 truly has it. So even with a positive test, you're 100 times more likely to be FINE than sick. That background frequency — 1 in 10,000 — is the base rate, and ignoring it makes you catastrophically wrong.",
      sections: [
        {
          title: "Why We Forget the Background",
          content:
            "Our brains are wired to focus on vivid, specific information and ignore dull, statistical background data. 'This test is 99% accurate AND came back positive!' is dramatic and attention-grabbing. 'But only 0.01% of people have this disease' is boring and abstract. So we weight the dramatic info heavily and forget the base rate — leading to wildly wrong conclusions.",
        },
        {
          title: "Always Ask: How Common Is This?",
          content:
            "Before evaluating any specific evidence, ask the base rate question: 'How often does this happen in general?' Your friend's startup idea sounds amazing — but what's the base rate of startup success? About 10%. That brilliant-sounding investment? What's the base rate of returns for similar investments? Starting with the base rate and adjusting from there is one of the most powerful thinking upgrades you can make.",
        },
      ],
      ahaQuote:
        "Before asking 'How likely is this specific thing?' ask 'How often does this kind of thing happen at all?'",
      realWorldExample:
        "You see a headline: 'Lightning strike survivor shares miraculous story.' You worry about getting struck by lightning at your weekend picnic. But the base rate of being struck by lightning in a given year is about 1 in 500,000. The vivid story makes it feel common — the base rate reveals it's incredibly rare. Your drive to the picnic is far more dangerous.",
    },
    exercises: [
      {
        type: "scenario",
        id: "base-rate-neglect-ex-1",
        scenario:
          "A security screening at an airport uses a scanner that is 95% accurate at detecting weapons. It flags a passenger. Only 1 in 100,000 passengers actually carries a weapon.",
        question:
          "What's the approximate probability this flagged passenger actually has a weapon?",
        options: [
          "95% — the scanner is very accurate",
          "About 0.02% — because the base rate is so low, most positives are false alarms",
          "50% — it's a coin flip",
          "5% — the error rate of the scanner",
        ],
        correctIndex: 1,
        explanation:
          "Out of 100,000 passengers: 1 has a weapon (correctly flagged 95% of the time = 0.95 positives). But 99,999 don't have weapons, and 5% are falsely flagged = about 5,000 false positives. So the chance a flagged person actually has a weapon is roughly 0.95/5,001 = about 0.02%. The base rate makes the specific evidence nearly meaningless.",
      },
      {
        type: "multiple-choice",
        id: "base-rate-neglect-ex-2",
        question:
          "A friend pitches you their startup idea. They have an MBA, 10 years of experience, and deep industry knowledge. How should you estimate their chances of success?",
        options: [
          "Very high — their credentials are impressive",
          "Start with the base rate of startup success (~10%), then adjust upward for their advantages — maybe 15-25%",
          "100% — they can't fail with that background",
          "Ignore statistics — every startup is unique",
        ],
        correctIndex: 1,
        explanation:
          "Base rate first, then adjust. The startup base rate (~10% success) is the starting point. Strong credentials might push it to 15-25%, but they don't override the fundamental difficulty of building a successful company. Most people skip the base rate entirely and think 'This person is smart, so they'll succeed' — that's base rate neglect.",
      },
      {
        type: "true-false",
        id: "base-rate-neglect-ex-3",
        statement:
          "If a test is 99% accurate and returns a positive result, there is a 99% chance the result is correct.",
        correct: false,
        explanation:
          "This is the classic base rate neglect trap. The actual probability depends heavily on the base rate of the condition being tested. If 1 in 1,000 people have the condition, a 99%-accurate test would produce about 10 false positives for every true positive, meaning a positive result would only be correct about 9% of the time.",
      },
      {
        type: "fill-in-blank",
        id: "base-rate-neglect-ex-4",
        textBefore:
          "The base rate is the general frequency at which something occurs in a",
        textAfter:
          "and it should be your starting point before considering any specific evidence.",
        acceptedAnswers: [
          "population",
          "group",
          "given population",
          "general population",
          "sample",
        ],
        hint: "What's the larger group you should look at before zooming into specific cases?",
        explanation:
          "The base rate is the overall frequency of an event in the relevant population. It's the statistical 'prior' that should anchor your estimates before you adjust for specific evidence. Without it, even highly accurate tests and impressive credentials can lead to wildly wrong conclusions.",
      },
    ],
    relatedModelIds: [
      "expected-value",
      "survivorship-bias",
      "regression-to-mean",
      "gamblers-fallacy",
    ],
    tags: [
      "probability",
      "statistics",
      "cognitive bias",
      "prediction",
      "Bayesian",
    ],
  },
  {
    id: "survivorship-bias",
    categoryId: "probability",
    title: "Survivorship Bias",
    emoji: "✈️",
    difficulty: 1,
    estimatedMinutes: 7,
    eli5: {
      hook: "You're only hearing from the winners. The losers can't tell you their story.",
      analogy:
        "During World War II, the military studied bullet holes on planes that returned from combat. They found clusters of holes on the wings and body, but almost none on the engines. Their plan: add armor to the wings and body where the holes were. Then a statistician named Abraham Wald said, 'Wait — you're only looking at planes that SURVIVED. The ones hit in the engines didn't come back.' The missing bullet holes were the most important data. That's survivorship bias: drawing conclusions from the survivors while ignoring the ones who didn't make it.",
      sections: [
        {
          title: "The Dead Can't Talk",
          content:
            "When Bill Gates drops out of college and becomes a billionaire, the story makes headlines. But for every Gates, thousands of dropouts failed silently — you just never hear their stories. Self-help books are written by successful people sharing 'what worked for me,' but maybe those same strategies were also used by a thousand people who failed. The advice might be less about the strategy and more about luck, timing, or other invisible factors.",
        },
        {
          title: "Look for What's Missing",
          content:
            "To beat survivorship bias, always ask: 'Who am I NOT hearing from?' If a mutual fund advertises '20 years of market-beating returns,' ask about the funds they quietly shut down during that period. If a diet pill shows glowing testimonials, ask about the people who tried it and saw no results. The absent data often tells a more truthful story than the present data.",
        },
      ],
      ahaQuote:
        "The cemetery of failed businesses has no spokespeople. That's exactly why you only hear success stories.",
      realWorldExample:
        "You see articles about people who got rich buying Bitcoin in 2010 and think, 'I should have done that!' But you're not hearing from the thousands who also bought early crypto — different coins that went to zero, or who panicked and sold during crashes, or who lost their wallet passwords. The winners are loud. The losers are invisible.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "survivorship-bias-ex-1",
        question:
          "A music school advertises that '70% of graduates who pursued music professionally are now performing full-time.' Why might this be misleading?",
        options: [
          "The school might be lying about the numbers",
          "They're only tracking graduates who 'pursued music professionally' — those who tried and gave up likely aren't counted, and those who never tried don't count at all",
          "70% is not that impressive",
          "Performing full-time doesn't mean they're successful",
        ],
        correctIndex: 1,
        explanation:
          "The stat only includes those who survived long enough to still be 'pursuing music professionally.' People who tried and failed dropped out of the sample entirely. If 1,000 people graduated, 50 pursued music professionally, and 35 are now performing, '70% success rate' sounds great but masks a 3.5% rate from the full graduate pool.",
      },
      {
        type: "true-false",
        id: "survivorship-bias-ex-2",
        statement:
          "Studying the habits of successful people is the best way to determine what leads to success.",
        correct: false,
        explanation:
          "This is textbook survivorship bias. You need to also study people who had the SAME habits but failed. If both successful and unsuccessful entrepreneurs wake up at 5 AM, then waking up at 5 AM isn't what caused success — it's just correlated with being ambitious. Without a control group of failures, you can't distinguish causes from coincidences.",
      },
      {
        type: "scenario",
        id: "survivorship-bias-ex-3",
        scenario:
          "An investment firm shows that their '10-Year Growth Fund' has outperformed the market every year for the past decade. They manage 20 mutual funds.",
        question:
          "Why should you be skeptical of this track record?",
        options: [
          "Ten years is too short a time period",
          "They may have quietly closed their worst-performing funds over the decade, leaving only the winner standing — classic survivorship bias",
          "Past performance always predicts future results",
          "The market is too unpredictable to beat consistently",
        ],
        correctIndex: 1,
        explanation:
          "If the firm started 20 funds 10 years ago and quietly closed the 15 that underperformed, the remaining 5 look like geniuses. This is survivorship bias in action. The industry even has a name for it: 'backfill bias.' Always ask: 'How many funds did you START 10 years ago?'",
      },
      {
        type: "real-world",
        id: "survivorship-bias-ex-4",
        challenge:
          "Identify an area in your life where you might be falling for survivorship bias, and consider what data you're missing.",
        prompts: [
          "What success story have you been inspired by recently?",
          "Who tried the same thing and failed? Why don't you hear their story?",
          "What role might luck, timing, or privilege have played in the success?",
          "How does considering the failures change your assessment of the strategy?",
        ],
        exampleResponse:
          "I've been inspired by YouTubers who quit their jobs and now make a living from content creation. Missing data: the vast majority of people who try this fail and eventually return to traditional jobs — but they don't make videos about it. The survivors make 'How I Quit My Job' videos, creating a feedback loop that makes it look more achievable than it is. Considering the failures, I should keep my job while building a channel on the side rather than going all-in immediately.",
      },
    ],
    relatedModelIds: [
      "base-rate-neglect",
      "regression-to-mean",
      "black-swan",
      "expected-value",
    ],
    tags: [
      "bias",
      "statistics",
      "missing data",
      "success",
      "failure",
      "sampling",
    ],
  },
  {
    id: "black-swan",
    categoryId: "probability",
    title: "Black Swan Events",
    emoji: "🦢",
    difficulty: 3,
    estimatedMinutes: 9,
    eli5: {
      hook: "For thousands of years, everyone 'knew' all swans were white. Then they found Australia.",
      analogy:
        "Imagine you're a turkey. Every single day for 1,000 days, the farmer feeds you. Your confidence that the farmer is your friend grows with each feeding. On Day 1,001 — Thanksgiving — you discover you had the model completely wrong. A Black Swan event is an occurrence that is rare, has a massive impact, and is only 'obvious' in hindsight. It's the thing that your entire model of reality didn't account for because you'd never seen it before.",
      sections: [
        {
          title: "The Limits of Experience",
          content:
            "Black Swans expose a fundamental problem: we build our understanding of the world from what we've seen, but the most important events are often things nobody alive has ever witnessed. No amount of historical data on mortgage defaults prepared banks for 2008. No pandemic playbook prepared the world for COVID-19. 'It has never happened before' is dangerously confused with 'It cannot happen.'",
        },
        {
          title: "You Can't Predict Them, But You Can Prepare",
          content:
            "You'll never see the specific Black Swan coming — that's part of the definition. But you CAN build systems that survive (or even benefit from) unexpected shocks. Keep cash reserves for financial Black Swans. Diversify so no single failure is catastrophic. Build flexibility into plans. The goal isn't prediction — it's resilience to the unpredictable.",
        },
        {
          title: "Beware Retrospective Explanations",
          content:
            "After every Black Swan, experts rush to explain why it was 'inevitable.' This is hindsight bias masquerading as insight. If it were truly inevitable, someone would have predicted it specifically. The narrative that forms after the fact makes us feel smarter than we are, which makes us MORE vulnerable to the next Black Swan.",
        },
      ],
      ahaQuote:
        "The fact that something has never happened is NOT evidence that it can't happen. It might be evidence that it's overdue.",
      realWorldExample:
        "In early 2020, most governments and businesses had no pandemic response plan. 'There hasn't been a serious global pandemic in 100 years' was treated as evidence it wouldn't happen — rather than evidence that we were due. When COVID-19 hit, it reshaped the entire world in weeks. Afterward, everyone said it was 'predictable.' It wasn't — but it was possible, and that should have been enough to prepare.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "black-swan-ex-1",
        question: "Which of these is the best characterization of a Black Swan event?",
        options: [
          "Any rare event that causes significant damage",
          "An event that is unpredictable, has massive consequences, and is rationalized as 'obvious' only after the fact",
          "A natural disaster like an earthquake or hurricane",
          "A market downturn that loses investors money",
        ],
        correctIndex: 1,
        explanation:
          "Black Swans have three defining features: they lie outside normal expectations (rare), they carry extreme impact (massive consequences), and human nature makes us construct explanations for them after the fact, making them seem predictable in retrospect. Not all bad events are Black Swans — only the ones that fundamentally weren't in our model of reality.",
      },
      {
        type: "true-false",
        id: "black-swan-ex-2",
        statement:
          "The best response to Black Swan events is to try harder to predict them.",
        correct: false,
        explanation:
          "By definition, Black Swans are unpredictable. Trying harder to predict them is futile and creates false confidence. The better strategy is building antifragile systems that can withstand or benefit from unexpected shocks: diversification, cash reserves, flexibility, and avoiding catastrophic single points of failure.",
      },
      {
        type: "scenario",
        id: "black-swan-ex-3",
        scenario:
          "An investor has their entire portfolio in one country's stock market. They argue: 'This country has had stable economic growth for 30 years — there's no reason to diversify.'",
        question:
          "What's the Black Swan critique of this position?",
        options: [
          "30 years of stability means it will continue — they're fine",
          "They should diversify because they're using past stability to predict future safety, ignoring that unprecedented disruptions can destroy concentrated positions",
          "They should sell everything and hold cash",
          "Country-specific investing is always wrong",
        ],
        correctIndex: 1,
        explanation:
          "The investor is making the 'turkey mistake' — using past data to assume future safety. 30 years of stability could mean the country is well-managed, or it could mean a disruption is building. The point isn't that collapse is likely, but that it's POSSIBLE, and a concentrated position would be catastrophic if a Black Swan hits.",
      },
      {
        type: "fill-in-blank",
        id: "black-swan-ex-4",
        textBefore:
          "After a Black Swan event occurs, humans tend to construct narratives that make it seem like it was",
        textAfter:
          "all along — this is hindsight bias, not genuine predictive ability.",
        acceptedAnswers: [
          "predictable",
          "inevitable",
          "obvious",
          "foreseeable",
          "expected",
        ],
        hint: "Think about how every crisis is 'obvious' to experts... after it happens",
        explanation:
          "Retrospective narratives are one of the most dangerous features of Black Swans. After 2008, everyone could 'see the signs.' After COVID, everyone 'knew it was coming.' These after-the-fact explanations create the illusion that we're better at prediction than we are, leaving us complacent about the NEXT Black Swan.",
      },
    ],
    relatedModelIds: [
      "fat-tails",
      "expected-value",
      "survivorship-bias",
      "antifragility",
    ],
    tags: [
      "uncertainty",
      "extreme events",
      "Nassim Taleb",
      "prediction",
      "resilience",
    ],
  },
  {
    id: "regression-to-mean",
    categoryId: "probability",
    title: "Regression to the Mean",
    emoji: "📊",
    difficulty: 2,
    estimatedMinutes: 7,
    eli5: {
      hook: "Extreme results tend to be followed by less extreme results. That's not magic — it's math.",
      analogy:
        "Imagine you flip a coin 10 times and get 9 heads. Impressive! But if you flip 10 more, you'll probably get closer to 5 heads. The coin didn't 'correct' itself — it's just that extreme results are rare, so the NEXT set of results is likely to be less extreme. That drift back toward the average is regression to the mean. The coin doesn't have memory — averages just assert themselves over time.",
      sections: [
        {
          title: "Why 'Cures' Seem to Work",
          content:
            "You feel your worst on the worst day of a cold and take some supplement. The next day you feel better and credit the supplement. But you probably would have felt better anyway — because your worst day is, by definition, an extreme, and extremes are followed by less extreme days. This is why rigorous medical studies need control groups: without one, regression to the mean masquerades as treatment effects.",
        },
        {
          title: "The Sophomore Slump Is Statistics",
          content:
            "A rookie athlete has an incredible first season. Everyone expects even bigger things. Then they have a 'disappointing' second year. Was it pressure? Complacency? Maybe — but regression to the mean is the simplest explanation. Their first season was partly skill and partly luck. The skill stayed, but the luck normalized, and their performance regressed toward their true average.",
        },
      ],
      ahaQuote:
        "After an unusually good or bad result, the next one will almost certainly be closer to average. That's not a trend — it's a tautology.",
      realWorldExample:
        "A manager praises an employee for an exceptionally good month and the next month is worse. She scolds another employee for a terrible month and the next month is better. She concludes 'praise doesn't work, criticism does!' But both employees just regressed to their mean. The praise and criticism were irrelevant — extreme months are naturally followed by average ones.",
    },
    exercises: [
      {
        type: "scenario",
        id: "regression-to-mean-ex-1",
        scenario:
          "A company has its best quarter ever with record sales. The CEO decides to 'double down on what's working' by investing heavily in the same strategy for next quarter.",
        question:
          "What should the CEO consider about regression to the mean?",
        options: [
          "Nothing — clearly the strategy is working and should be expanded",
          "The record quarter likely included some lucky factors (timing, one-time deals) that won't repeat, so next quarter will probably be good but not as extraordinary — don't over-invest based on a statistical outlier",
          "They should completely change strategy since the record can't be beaten",
          "Record quarters always predict continued growth",
        ],
        correctIndex: 1,
        explanation:
          "Record-breaking quarters are, by definition, extreme. Some of that performance was skill/strategy (which persists) and some was luck/timing (which doesn't). Investing heavily based on an outlier quarter means building plans on partly-random data. The wise move: invest in the strategy moderately while expecting results closer to the long-term average.",
      },
      {
        type: "multiple-choice",
        id: "regression-to-mean-ex-2",
        question:
          "Why does regression to the mean make us overestimate the effect of punishment and underestimate the effect of praise?",
        options: [
          "Because punishment is genuinely more effective than praise",
          "Because we typically punish after bad performances (which naturally improve) and praise after good ones (which naturally decline) — the timing creates a false correlation",
          "Because people respond better to negative feedback",
          "Because praise makes people lazy",
        ],
        correctIndex: 1,
        explanation:
          "This is one of the most important and counterintuitive implications of regression to the mean. We punish after bad extremes (which improve naturally) and praise after good extremes (which decline naturally). This creates the ILLUSION that punishment works and praise backfires, when really we're just observing statistical regression.",
      },
      {
        type: "true-false",
        id: "regression-to-mean-ex-3",
        statement:
          "If a sports team wins 10 games in a row, regression to the mean guarantees they will start losing soon.",
        correct: false,
        explanation:
          "Regression to the mean doesn't guarantee anything about any specific future result. It says that extreme performances are unlikely to be sustained at the same level, not that they'll reverse. A great team might regress from 'perfect' to 'excellent' — still winning, just not undefeated. And if the team is genuinely elite, their mean IS high, so there's less to regress to.",
      },
      {
        type: "fill-in-blank",
        id: "regression-to-mean-ex-4",
        textBefore:
          "Regression to the mean occurs because extreme results are partly driven by",
        textAfter:
          "which is unlikely to repeat at the same intensity.",
        acceptedAnswers: [
          "luck",
          "chance",
          "randomness",
          "random variation",
          "random factors",
        ],
        hint: "What component of performance varies randomly from one attempt to the next?",
        explanation:
          "Any measured result is a mix of true ability and random variation (luck). Extreme results happen when luck is unusually favorable (or unfavorable). Since luck doesn't repeat consistently, the next measurement is likely to have more average luck — pulling the result back toward the true mean.",
      },
    ],
    relatedModelIds: [
      "base-rate-neglect",
      "survivorship-bias",
      "gamblers-fallacy",
    ],
    tags: [
      "statistics",
      "average",
      "randomness",
      "luck vs skill",
      "prediction",
    ],
  },
  {
    id: "gamblers-fallacy",
    categoryId: "probability",
    title: "Gambler's Fallacy",
    emoji: "🎲",
    difficulty: 1,
    estimatedMinutes: 6,
    eli5: {
      hook: "A coin doesn't remember what it did last time. Neither does the universe.",
      analogy:
        "You're at a roulette table. Black has come up 8 times in a row. Everyone is piling money on red because 'it's due.' But here's the thing: the roulette wheel has no memory. It doesn't know black came up 8 times. Each spin is completely independent — the probability of red is exactly the same as it was before the streak started. The universe doesn't keep a scorecard to 'balance things out.'",
      sections: [
        {
          title: "Independent Events Stay Independent",
          content:
            "If you flip a coin and get heads 10 times in a row, the probability of heads on the 11th flip is still exactly 50%. The coin doesn't owe you a tails. The past results don't reach forward in time and influence the next flip. Each event is independent, period. Your brain screams 'tails is due!' — but that's just a pattern-seeking brain trying to find order in randomness.",
        },
        {
          title: "Where People Get Confused",
          content:
            "People confuse two different things: the probability of a SPECIFIC sequence (10 heads in a row, then another heads = unlikely) with the probability of the NEXT event alone (just the 11th flip = always 50%). The sequence is rare, yes. But once the first 10 flips have already happened, they're history. Only the next flip matters, and it knows nothing about the streak.",
        },
      ],
      ahaQuote:
        "The universe doesn't owe you balance. Every independent event starts fresh, no matter what happened before.",
      realWorldExample:
        "A couple has three girls and desperately wants a boy. They believe they're 'due' for a boy because 'the odds have to even out.' But each pregnancy is independent — the probability of a boy is still roughly 50%, completely unaffected by previous children's genders. Having three girls doesn't make a boy more likely, just as flipping three heads doesn't make tails more likely.",
    },
    exercises: [
      {
        type: "multiple-choice",
        id: "gamblers-fallacy-ex-1",
        question:
          "You've been job hunting and received 15 rejections in a row. You tell yourself, 'I'm due for an acceptance soon.' Is this reasoning valid?",
        options: [
          "Yes — statistically, a long streak of rejections means an acceptance is coming",
          "Only if you're improving your applications with each rejection",
          "It depends on the gambler's fallacy: if each application is independent (different companies, different roles), past rejections don't increase future acceptance odds",
          "No — 15 rejections means you should give up",
        ],
        correctIndex: 2,
        explanation:
          "If each application is to a different company making independent decisions, past rejections don't affect future odds. However, if you're LEARNING from rejections and improving, your probability genuinely increases — but that's because of improved skill, not because the universe is 'balancing out.' The gambler's fallacy only applies to truly independent events.",
      },
      {
        type: "true-false",
        id: "gamblers-fallacy-ex-2",
        statement:
          "If a stock has gone down for 7 consecutive trading days, it's more likely to go up on the 8th day because it's 'due for a correction.'",
        correct: false,
        explanation:
          "While stock prices aren't perfectly independent (there are momentum effects), the logic of 'it's due' is classic gambler's fallacy. A stock dropping for 7 days might indicate a real problem — making further drops MORE likely, not less. Market movements aren't coin flips, but the 'due for a bounce' reasoning is the same flawed pattern.",
      },
      {
        type: "scenario",
        id: "gamblers-fallacy-ex-3",
        scenario:
          "A basketball player has missed their last 5 free throws. The coach considers benching them, but the assistant says, 'Leave them in — they're due to hit one.'",
        question:
          "Is the assistant's reasoning sound?",
        options: [
          "Yes — the law of averages means a make is coming",
          "No — each free throw is roughly independent, so missing 5 doesn't make hitting the 6th more likely. If anything, the misses might indicate fatigue or distraction that makes the next miss MORE likely",
          "Yes — a career 80% free throw shooter will always revert to their mean",
          "It depends on the player's confidence level",
        ],
        correctIndex: 1,
        explanation:
          "The assistant is committing the gambler's fallacy. Each free throw is essentially independent — the ball doesn't know about previous shots. While regression to the mean is real over large samples, it doesn't apply to the NEXT individual shot. In fact, the current misses might signal a real issue (fatigue, nerves) that makes the next attempt less likely to succeed.",
      },
      {
        type: "fill-in-blank",
        id: "gamblers-fallacy-ex-4",
        textBefore: "The gambler's fallacy occurs because people incorrectly believe that",
        textAfter:
          "events are influenced by previous outcomes, when each event is actually independent.",
        acceptedAnswers: ["future", "random", "subsequent", "upcoming", "next"],
        hint: "Which events do gamblers think are affected by past results?",
        explanation:
          "The core error is believing that past independent events influence future ones. A coin, die, or roulette wheel has no memory. Each outcome is fresh. The 'law of averages' only works over infinite trials — it doesn't reach into the next single event and push it toward balance.",
      },
    ],
    relatedModelIds: [
      "regression-to-mean",
      "base-rate-neglect",
      "expected-value",
    ],
    tags: [
      "probability",
      "cognitive bias",
      "randomness",
      "independence",
      "gambling",
    ],
  },
  {
    id: "fat-tails",
    categoryId: "probability",
    title: "Fat Tails",
    emoji: "📈",
    difficulty: 3,
    estimatedMinutes: 9,
    eli5: {
      hook: "In some worlds, the tallest person in the room is 7 feet. In other worlds, one person has all the money on Earth.",
      analogy:
        "Height follows a 'thin-tailed' distribution. The tallest person in any room is maybe 6'6\". The tallest person in a stadium is maybe 7'2\". Extremes exist, but they're modest. Now think about wealth. The richest person in a room might have $500,000. But the richest person on Earth has $200 billion — that's 400,000x more. Wealth has 'fat tails': the extremes aren't just a little bigger than average, they're WILDLY, incomprehensibly bigger. Different rules apply.",
      sections: [
        {
          title: "Thin Tails vs. Fat Tails",
          content:
            "In thin-tailed domains (height, weight, IQ), no single observation can be millions of times larger than average. In fat-tailed domains (wealth, book sales, earthquake magnitude, pandemic deaths), a single extreme event can dwarf everything else combined. The average of a thin-tailed thing is meaningful. The average of a fat-tailed thing can be completely misleading because one outlier can dominate the entire dataset.",
        },
        {
          title: "Why Standard Models Break",
          content:
            "Most statistical tools (averages, standard deviations, bell curves) were designed for thin-tailed distributions. When you apply them to fat-tailed phenomena, they dramatically underestimate the likelihood and impact of extreme events. The 2008 financial crisis was 'impossible' according to thin-tailed models — a 25-sigma event. In a fat-tailed model, it was unusual but entirely plausible.",
        },
      ],
      ahaQuote:
        "In a fat-tailed world, the average is a lie. The extremes are where all the action is.",
      realWorldExample:
        "If you pick 1,000 random people and add the world's tallest person to the group, the average height barely changes — that's thin tails. Now pick 1,000 random people and add Jeff Bezos. The average wealth of the group jumps from maybe $50,000 to over $200 million. One person warps the entire average. In fat-tailed domains, single data points can be more important than all the rest combined.",
    },
    exercises: [
      {
        type: "matching",
        id: "fat-tails-ex-1",
        instruction:
          "Classify each domain as thin-tailed (extremes are modest) or fat-tailed (extremes can be wildly larger than average).",
        pairs: [
          { left: "Human height", right: "Thin-tailed" },
          { left: "City population sizes", right: "Fat-tailed" },
          { left: "Daily temperature variation", right: "Thin-tailed" },
          { left: "Wealth of individuals", right: "Fat-tailed" },
        ],
        explanation:
          "Thin-tailed distributions have constrained extremes (the tallest person is about 50% taller than average). Fat-tailed distributions have unbounded extremes (the richest person is millions of times wealthier than average). The key test: can a single observation be more extreme than all others combined?",
      },
      {
        type: "multiple-choice",
        id: "fat-tails-ex-2",
        question:
          "Why is the average income in a city a misleading statistic?",
        options: [
          "People lie about their income on surveys",
          "Income has fat tails — a few billionaires can dramatically skew the average upward, making it unrepresentative of what most people earn",
          "Averages are always misleading regardless of the domain",
          "Income data is always inaccurate",
        ],
        correctIndex: 1,
        explanation:
          "Income and wealth are fat-tailed. If a city of 100,000 people includes one billionaire, the average income might be $60,000 while the median (more representative) is $35,000. The billionaire alone adds $10,000 to the average. In fat-tailed domains, the median is usually a better measure of 'typical' than the mean.",
      },
      {
        type: "true-false",
        id: "fat-tails-ex-3",
        statement:
          "In a fat-tailed domain, historical data reliably predicts the range of future outcomes.",
        correct: false,
        explanation:
          "Fat tails mean that the most extreme event you've SEEN is likely not the most extreme event POSSIBLE. In thin-tailed domains (height), the tallest person recorded gives a good ceiling. In fat-tailed domains (financial losses, pandemic severity), the worst thing you've seen is probably not the worst thing that can happen. History underestimates fat-tailed risk.",
      },
      {
        type: "scenario",
        id: "fat-tails-ex-4",
        scenario:
          "A venture capitalist has invested in 100 startups. 90 failed completely, 8 returned their money, and 2 returned 100x their investment. An observer says, 'Your success rate is only 2% — you should find a better investment strategy.'",
        question: "Why is the observer wrong?",
        options: [
          "2% is actually a decent success rate",
          "Startup returns are fat-tailed — the 2 winners generated more total return than a 100% success rate of modest winners would have. In fat-tailed domains, the magnitude of wins matters more than the frequency",
          "The observer should look at the median return instead",
          "90 failures is too small a sample to draw conclusions",
        ],
        correctIndex: 1,
        explanation:
          "Venture capital is a fat-tailed domain. Two 100x returns on a portfolio of 100 investments means a 200% total return — even with 90 complete losses. A 'safer' strategy with 80% success but only 2x returns would yield far less. In fat-tailed domains, optimizing for hit rate instead of magnitude is a fundamental error.",
      },
    ],
    relatedModelIds: [
      "black-swan",
      "expected-value",
      "regression-to-mean",
      "survivorship-bias",
    ],
    tags: [
      "statistics",
      "extreme events",
      "power laws",
      "risk",
      "distributions",
    ],
  },
];
