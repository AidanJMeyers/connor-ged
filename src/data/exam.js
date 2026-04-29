// Comprehensive 100-question GED practice exam covering all 4 subjects.
// Distribution roughly mirrors the real GED test:
//   ~ 40 Math (heavy emphasis on step-by-step problem solving)
//   ~ 25 RLA (reading + writing/grammar)
//   ~ 17 Social Studies
//   ~ 18 Science

export const examConfig = {
  subject: 'GED Comprehensive Prep',
  totalQuestions: 100,
  timed: false,
  timeLimitMin: 180,
  passThreshold: 70
};

export const exam = [
  // ───────────── MATH (40) ─────────────
  // Number Sense & Operations
  { chapter: 'Math 1 — Number Sense', q: 'Round 73,648 to the nearest hundred.', type: 'mcq', choices: ['73,600', '73,700', '74,000', '73,650'], correct: 0, difficulty: 'E', explanation: 'Hundreds digit is 6; the next (tens) digit is 4, which is less than 5, so round down. Answer: 73,600.' },
  { chapter: 'Math 1 — Number Sense', q: 'Compute 8 + 6 × 2 − 4 ÷ 2.', type: 'math', correct: 18, difficulty: 'M', explanation: 'PEMDAS: 6×2 = 12, 4÷2 = 2. So 8 + 12 − 2 = 18.' },
  { chapter: 'Math 1 — Number Sense', q: 'A car drives 165 miles in 3 hours. Average speed?', type: 'math', correct: 55, difficulty: 'E', explanation: 'r = d/t = 165/3 = 55 mph.' },
  { chapter: 'Math 1 — Number Sense', q: 'A coffee shop sells 32 cups of coffee at $4.25 each. Total revenue?', type: 'math', correct: 136, difficulty: 'M', explanation: '32 × 4.25 = 136.' },
  { chapter: 'Math 1 — Number Sense', q: '"Five less than three times a number" translates to:', type: 'mcq', choices: ['5 − 3n', '3n − 5', '3(n − 5)', '5n − 3'], correct: 1, difficulty: 'M', explanation: '"Three times a number" = 3n. "Five less" = subtract 5: 3n − 5.' },

  // Decimals & Fractions
  { chapter: 'Math 2 — Decimals & Fractions', q: 'Compute 4.6 + 2.85.', type: 'math', correct: 7.45, tolerance: 0.005, difficulty: 'E', explanation: 'Align decimals: 4.60 + 2.85 = 7.45.' },
  { chapter: 'Math 2 — Decimals & Fractions', q: 'Compute 3.4 × 0.05.', type: 'math', correct: 0.17, tolerance: 0.001, difficulty: 'M', explanation: '34 × 5 = 170; total decimal places 1+2 = 3 → 0.170 = 0.17.' },
  { chapter: 'Math 2 — Decimals & Fractions', q: 'Simplify 36/48.', type: 'mcq', choices: ['1/2', '3/4', '4/5', '6/8'], correct: 1, difficulty: 'M', explanation: 'GCF=12. 36/12=3, 48/12=4 → 3/4.' },
  { chapter: 'Math 2 — Decimals & Fractions', q: 'Convert 0.45 to a fraction in lowest terms.', type: 'mcq', choices: ['9/20', '4/9', '45/100', '1/2'], correct: 0, difficulty: 'M', explanation: '45/100 = 9/20.' },
  { chapter: 'Math 2 — Decimals & Fractions', q: 'Compute (2/5) + (1/2).', type: 'mcq', choices: ['3/7', '2/10', '9/10', '4/10'], correct: 2, difficulty: 'M', explanation: 'LCD=10: 4/10 + 5/10 = 9/10.' },
  { chapter: 'Math 2 — Decimals & Fractions', q: 'Compute (3/4) ÷ (1/2).', type: 'math', correct: 1.5, tolerance: 0.01, difficulty: 'M', explanation: 'KCF: (3/4)·(2/1) = 6/4 = 3/2 = 1.5.' },

  // Ratios, Percents
  { chapter: 'Math 3 — Ratios & Percents', q: 'What is 24% of 350?', type: 'math', correct: 84, difficulty: 'E', explanation: '0.24 × 350 = 84.' },
  { chapter: 'Math 3 — Ratios & Percents', q: '15 is what percent of 60?', type: 'math', correct: 25, difficulty: 'E', explanation: '15/60 = 0.25 = 25%.' },
  { chapter: 'Math 3 — Ratios & Percents', q: 'A $200 jacket is on sale for 30% off. Sale price?', type: 'math', correct: 140, difficulty: 'M', explanation: '200 × 0.70 = 140.' },
  { chapter: 'Math 3 — Ratios & Percents', q: 'After a 25% discount, a TV costs $480. Original price?', type: 'math', correct: 640, difficulty: 'H', explanation: '480 = 0.75 × original. Original = 480/0.75 = 640.' },
  { chapter: 'Math 3 — Ratios & Percents', q: 'A recipe for 4 servings calls for 6 cups of broth. How much for 10 servings?', type: 'math', correct: 15, difficulty: 'M', explanation: '6/4 = x/10 → x = 60/4 = 15.' },
  { chapter: 'Math 3 — Ratios & Percents', q: 'You invest $1,200 at 4% simple interest for 3 years. Interest earned?', type: 'math', correct: 144, difficulty: 'M', explanation: 'I = 1200 × 0.04 × 3 = 144.' },

  // Data, Statistics, Probability
  { chapter: 'Math 4 — Data & Stats', q: 'Find the mean of: 14, 22, 30, 16, 28.', type: 'math', correct: 22, difficulty: 'E', explanation: 'Sum=110, count=5, mean=22.' },
  { chapter: 'Math 4 — Data & Stats', q: 'Median of: 7, 12, 4, 19, 22, 8.', type: 'math', correct: 10, difficulty: 'M', explanation: 'Sorted: 4,7,8,12,19,22. Median = (8+12)/2 = 10.' },
  { chapter: 'Math 4 — Data & Stats', q: 'Roll a fair 6-sided die. P(rolling > 4)?', type: 'mcq', choices: ['1/6', '1/3', '1/2', '2/3'], correct: 1, difficulty: 'M', explanation: 'Outcomes 5, 6 → 2/6 = 1/3.' },
  { chapter: 'Math 4 — Data & Stats', q: 'A student has scores 78, 82, 85, 91. What is needed on the 5th test for a mean of 86?', type: 'math', correct: 94, difficulty: 'M', explanation: 'Need sum=5×86=430. Have 336. 430−336=94.' },
  { chapter: 'Math 4 — Data & Stats', q: 'How many ways to arrange the letters in BIRD?', type: 'math', correct: 24, difficulty: 'M', explanation: '4! = 24.' },

  // Algebra
  { chapter: 'Math 5 — Algebra Basics', q: 'Compute (−6) × (−4) ÷ 8.', type: 'math', correct: 3, difficulty: 'E', explanation: '(−6)·(−4)=24. 24÷8=3.' },
  { chapter: 'Math 5 — Algebra Basics', q: 'Simplify 5x − 9 + 2x − 4.', type: 'mcq', choices: ['7x − 13', '7x + 13', '3x + 5', '7x − 5'], correct: 0, difficulty: 'E', explanation: '5x+2x=7x; −9−4=−13.' },
  { chapter: 'Math 5 — Algebra Basics', q: 'Expand 4(2x − 3) − (x + 2).', type: 'mcq', choices: ['7x − 14', '7x + 14', '9x − 14', '7x − 10'], correct: 0, difficulty: 'M', explanation: '8x − 12 − x − 2 = 7x − 14.' },
  { chapter: 'Math 5 — Algebra Basics', q: 'FOIL (x + 6)(x − 4).', type: 'mcq', choices: ['x² + 2x − 24', 'x² − 2x + 24', 'x² + 10x + 24', 'x² − 10x − 24'], correct: 0, difficulty: 'M', explanation: 'x² − 4x + 6x − 24 = x² + 2x − 24.' },
  { chapter: 'Math 5 — Algebra Basics', q: 'Write 0.000045 in scientific notation.', type: 'mcq', choices: ['4.5 × 10⁻⁵', '4.5 × 10⁻⁴', '4.5 × 10⁵', '45 × 10⁻⁶'], correct: 0, difficulty: 'M', explanation: 'Move decimal 5 places right → 10⁻⁵.' },
  { chapter: 'Math 5 — Algebra Basics', q: 'If x = 3 and y = −2, evaluate 2x² − y².', type: 'math', correct: 14, difficulty: 'M', explanation: '2(9) − 4 = 18 − 4 = 14.' },

  // Equations & Functions
  { chapter: 'Math 6 — Equations', q: 'Solve 4x + 7 = 31.', type: 'math', correct: 6, difficulty: 'E', explanation: '4x = 24 → x = 6.' },
  { chapter: 'Math 6 — Equations', q: 'Solve 2(x − 5) = x + 1.', type: 'math', correct: 11, difficulty: 'M', explanation: '2x − 10 = x + 1 → x = 11.' },
  { chapter: 'Math 6 — Equations', q: 'Solve −3x + 8 ≤ 20.', type: 'mcq', choices: ['x ≤ −4', 'x ≥ −4', 'x ≤ 4', 'x ≥ 4'], correct: 1, difficulty: 'M', explanation: '−3x ≤ 12. Divide by −3, flip: x ≥ −4.' },
  { chapter: 'Math 6 — Equations', q: 'Slope of line through (2, 3) and (8, 15)?', type: 'math', correct: 2, difficulty: 'E', explanation: '(15−3)/(8−2) = 12/6 = 2.' },
  { chapter: 'Math 6 — Equations', q: 'Solve x² − 9x + 20 = 0.', type: 'mcq', choices: ['x = 4 or x = 5', 'x = −4 or x = −5', 'x = 9 or x = 20', 'x = 2 or x = 10'], correct: 0, difficulty: 'M', explanation: '(x−4)(x−5) = 0 → x = 4 or 5.' },
  { chapter: 'Math 6 — Equations', q: 'For f(x) = 2x² − 3x + 1, find f(4).', type: 'math', correct: 21, difficulty: 'M', explanation: '2·16 − 12 + 1 = 32 − 11 = 21.' },
  { chapter: 'Math 6 — Equations', q: 'A line passes through (0, 5) with slope −2. Its equation is:', type: 'mcq', choices: ['y = 2x + 5', 'y = −2x + 5', 'y = −2x − 5', 'y = −5x + 2'], correct: 1, difficulty: 'M', explanation: 'y-intercept 5, slope −2 → y = −2x + 5.' },
  { chapter: 'Math 6 — Equations', q: 'Solve the system: x + y = 10, x − y = 2.', type: 'mcq', choices: ['(6, 4)', '(4, 6)', '(8, 2)', '(2, 8)'], correct: 0, difficulty: 'M', explanation: 'Add equations: 2x = 12 → x = 6. Then y = 4.' },

  // Geometry
  { chapter: 'Math 7 — Geometry', q: 'Find the area of a triangle with base 16 and height 9.', type: 'math', correct: 72, difficulty: 'E', explanation: '½ × 16 × 9 = 72.' },
  { chapter: 'Math 7 — Geometry', q: 'A right triangle has legs 7 and 24. Hypotenuse?', type: 'math', correct: 25, difficulty: 'M', explanation: '7² + 24² = 49 + 576 = 625. √625 = 25.' },
  { chapter: 'Math 7 — Geometry', q: 'Circumference of a circle with radius 5? (π ≈ 3.14)', type: 'math', correct: 31.4, tolerance: 0.05, difficulty: 'M', explanation: 'C = 2πr = 10π ≈ 31.4.' },
  { chapter: 'Math 7 — Geometry', q: 'Volume of a rectangular box 8 × 5 × 3?', type: 'math', correct: 120, difficulty: 'E', explanation: '8 × 5 × 3 = 120.' },
  { chapter: 'Math 7 — Geometry', q: 'A 26 ft ladder leans against a wall, base 10 ft from wall. How high does it reach?', type: 'math', correct: 24, difficulty: 'H', explanation: '26² − 10² = 676 − 100 = 576 → √576 = 24.' },
  { chapter: 'Math 7 — Geometry', q: 'Volume of a cylinder, r=4, h=6 (use π ≈ 3.14, round nearest whole).', type: 'math', correct: 301, tolerance: 1.5, difficulty: 'M', explanation: 'V = πr²h = 16π·6 = 96π ≈ 301.59.' },

  // ───────────── RLA (25) ─────────────
  { chapter: 'RLA 1 — Nonfiction', q: 'Which is the strongest evidence in an argumentative essay?', type: 'mcq', choices: ['One personal anecdote', 'A famous quotation', 'A peer-reviewed study with a large sample', 'An emotional appeal'], correct: 2, difficulty: 'E', explanation: 'Peer-reviewed research is the strongest evidence type.' },
  { chapter: 'RLA 1 — Nonfiction', q: 'A "main idea" is best described as:', type: 'mcq', choices: ['One specific fact', 'The central point of the passage', 'Any topic mentioned', 'The author\'s name'], correct: 1, difficulty: 'E', explanation: 'Main idea = central point.' },
  { chapter: 'RLA 1 — Nonfiction', q: 'An "application" question asks you to:', type: 'mcq', choices: ['Restate the passage', 'Apply a principle to a new scenario', 'Find the title', 'Identify supporting details'], correct: 1, difficulty: 'M', explanation: 'Apply the same logic to a new case.' },
  { chapter: 'RLA 2 — Analyzing Nonfiction', q: '"You can\'t trust her economic plan because she\'s never been to Wyoming." This is a:', type: 'mcq', choices: ['Hasty generalization', 'Slippery slope', 'Ad hominem', 'False dilemma'], correct: 2, difficulty: 'M', explanation: 'Attacks the person, not the argument.' },
  { chapter: 'RLA 2 — Analyzing Nonfiction', q: '"If we allow this minor change, soon everything will collapse" is a:', type: 'mcq', choices: ['Slippery slope', 'Bandwagon', 'Straw man', 'Red herring'], correct: 0, difficulty: 'M', explanation: 'Predicts an extreme cascade with no evidence.' },
  { chapter: 'RLA 3 — Fiction', q: '"The classroom buzzed with excitement" is an example of:', type: 'mcq', choices: ['Hyperbole', 'Imagery', 'Metaphor', 'Allusion'], correct: 1, difficulty: 'M', explanation: 'Sound-based sensory description = imagery.' },
  { chapter: 'RLA 3 — Fiction', q: 'A first-person narrator uses:', type: 'mcq', choices: ['He / she', 'You', 'I / we', 'They'], correct: 2, difficulty: 'E', explanation: 'I / we = first person.' },
  { chapter: 'RLA 3 — Fiction', q: 'The most intense moment of a story is the:', type: 'mcq', choices: ['Exposition', 'Climax', 'Resolution', 'Falling action'], correct: 1, difficulty: 'E', explanation: 'Climax = peak.' },
  { chapter: 'RLA 4 — Sentences', q: 'Identify the comma splice:', type: 'mcq', choices: [
    'It was raining, so we stayed indoors.',
    'It was raining, we stayed indoors.',
    'It was raining; we stayed indoors.',
    'It was raining. We stayed indoors.'
  ], correct: 1, difficulty: 'E', explanation: 'Two independent clauses joined with only a comma.' },
  { chapter: 'RLA 4 — Sentences', q: 'Which is parallel?', type: 'mcq', choices: [
    'She likes hiking, biking, and to swim.',
    'She likes to hike, biking, and to swim.',
    'She likes hiking, biking, and swimming.',
    'She likes to hike, she likes biking, and swimming.'
  ], correct: 2, difficulty: 'M', explanation: 'All three end in -ing → parallel.' },
  { chapter: 'RLA 5 — Connecting Ideas', q: 'Best transition: "I studied all night. ___ I felt prepared."', type: 'mcq', choices: ['However', 'Nevertheless', 'As a result', 'On the other hand'], correct: 2, difficulty: 'E', explanation: 'Cause-effect — "as a result."' },
  { chapter: 'RLA 5 — Connecting Ideas', q: 'A paragraph should focus on:', type: 'mcq', choices: ['Many topics', 'One main idea', 'No main idea', 'A list of unrelated facts'], correct: 1, difficulty: 'E', explanation: 'One main idea per paragraph.' },
  { chapter: 'RLA 6 — Extended Response', q: 'In the GED Extended Response, you should:', type: 'mcq', choices: [
    'Argue your personal opinion',
    'Determine which passage is better-supported by evidence',
    'Summarize both passages',
    'Critique the writing style only'
  ], correct: 1, difficulty: 'M', explanation: 'Analyze evidence quality, not personal opinion.' },
  { chapter: 'RLA 6 — Extended Response', q: 'A strong thesis statement:', type: 'mcq', choices: [
    'Lists every reason without specifics',
    'States a clear preference and previews specific reasons',
    'Begins with "I think"',
    'Repeats the prompt verbatim'
  ], correct: 1, difficulty: 'M', explanation: 'Specific, preview, formal tone.' },
  { chapter: 'RLA 7 — Polishing', q: 'Replace "due to the fact that" with:', type: 'mcq', choices: ['Because', 'However', 'Therefore', 'Although'], correct: 0, difficulty: 'E', explanation: '"Because" is concise and equivalent.' },
  { chapter: 'RLA 7 — Polishing', q: 'Pick the active-voice version:', type: 'mcq', choices: [
    'The cake was eaten by the children.',
    'The children ate the cake.',
    'The cake had been eaten.',
    'It was the cake that was eaten.'
  ], correct: 1, difficulty: 'M', explanation: 'Active = subject does the action.' },
  { chapter: 'RLA 8 — Grammar', q: 'Choose: "Each of the books ___ on the shelf."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'M', explanation: '"Each" is singular → "is."' },
  { chapter: 'RLA 8 — Grammar', q: 'Past tense of "see":', type: 'mcq', choices: ['seen', 'sawed', 'saw', 'seed'], correct: 2, difficulty: 'E', explanation: 'See/saw/seen.' },
  { chapter: 'RLA 8 — Grammar', q: 'Choose: "The list of ingredients ___ on the counter."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'M', explanation: 'Subject is "list" (singular).' },
  { chapter: 'RLA 8 — Grammar', q: 'Choose: "Maria and ___ studied together."', type: 'mcq', choices: ['I', 'me'], correct: 0, difficulty: 'E', explanation: 'Subject pronoun: I.' },
  { chapter: 'RLA 9 — Mechanics', q: 'Which is correct?', type: 'mcq', choices: ['Its raining outside.', "It's raining outside.", 'Its\' raining outside.', 'Its-raining outside.'], correct: 1, difficulty: 'E', explanation: '"It\'s" = "it is."' },
  { chapter: 'RLA 9 — Mechanics', q: 'Choose the correctly punctuated sentence:', type: 'mcq', choices: [
    'I bought apples bananas and grapes.',
    'I bought apples, bananas, and grapes.',
    'I bought, apples, bananas, and grapes.',
    'I bought; apples; bananas; and grapes.'
  ], correct: 1, difficulty: 'E', explanation: 'Series comma rule.' },
  { chapter: 'RLA 9 — Mechanics', q: 'Choose: "The students brought ___ books."', type: 'mcq', choices: ['their', 'they\'re', 'there', 'there\'s'], correct: 0, difficulty: 'E', explanation: '"Their" = possessive.' },
  { chapter: 'RLA 9 — Mechanics', q: 'Possessive of "children":', type: 'mcq', choices: ['childrens', "children's", "childrens'", 'childs'], correct: 1, difficulty: 'M', explanation: '"Children" is plural not ending in s → add \'s.' },
  { chapter: 'RLA 9 — Mechanics', q: 'Choose: "The dog wagged ___ tail."', type: 'mcq', choices: ['it\'s', 'its', 'its\'', 'it'], correct: 1, difficulty: 'E', explanation: 'Possessive — no apostrophe.' },

  // ───────────── SOCIAL STUDIES (17) ─────────────
  { chapter: 'SS 1 — Practices', q: '"Suffrage" most nearly means:', type: 'mcq', choices: ['Suffering', 'Right to vote', 'Slavery', 'Tax burden'], correct: 1, difficulty: 'E', explanation: 'Suffrage = voting rights.' },
  { chapter: 'SS 1 — Practices', q: 'A primary source is:', type: 'mcq', choices: [
    'A modern textbook summary',
    'An original document from the era',
    'A documentary made today',
    'An online encyclopedia'
  ], correct: 1, difficulty: 'E', explanation: 'Primary = directly from the time.' },
  { chapter: 'SS 2 — U.S. History', q: 'The Declaration of Independence was signed in:', type: 'math', correct: 1776, difficulty: 'E', explanation: 'July 4, 1776.' },
  { chapter: 'SS 2 — U.S. History', q: 'Which amendment abolished slavery?', type: 'mcq', choices: ['12th', '13th', '14th', '15th'], correct: 1, difficulty: 'M', explanation: '13th Amendment, 1865.' },
  { chapter: 'SS 2 — U.S. History', q: 'World War II ended in:', type: 'math', correct: 1945, difficulty: 'E', explanation: '1945 — Japan surrendered after the atomic bombs.' },
  { chapter: 'SS 2 — U.S. History', q: 'The 1954 Brown v. Board of Education ruling:', type: 'mcq', choices: [
    'Allowed segregation',
    'Banned segregation in public schools',
    'Established voting rights',
    'Created Social Security'
  ], correct: 1, difficulty: 'M', explanation: 'Overturned "separate but equal."' },
  { chapter: 'SS 2 — U.S. History', q: 'The Cold War was a long rivalry between the U.S. and:', type: 'mcq', choices: ['China', 'Soviet Union', 'United Kingdom', 'Germany'], correct: 1, difficulty: 'E', explanation: 'U.S. vs USSR — capitalism vs communism.' },
  { chapter: 'SS 3 — Civics', q: 'How many U.S. senators are there?', type: 'math', correct: 100, difficulty: 'E', explanation: '2 per state × 50 states.' },
  { chapter: 'SS 3 — Civics', q: 'Which branch interprets laws?', type: 'mcq', choices: ['Executive', 'Judicial', 'Legislative', 'Bureaucracy'], correct: 1, difficulty: 'E', explanation: 'Judicial = courts interpret laws.' },
  { chapter: 'SS 3 — Civics', q: 'How many electoral votes are needed to win the presidency?', type: 'math', correct: 270, difficulty: 'M', explanation: 'Majority of 538 = 270.' },
  { chapter: 'SS 3 — Civics', q: 'The Bill of Rights refers to:', type: 'mcq', choices: [
    'Articles of Confederation',
    'First 10 amendments to the Constitution',
    'A list of state laws',
    'The Declaration of Independence'
  ], correct: 1, difficulty: 'E', explanation: 'First 10 amendments — ratified 1791.' },
  { chapter: 'SS 4 — Economics', q: 'Opportunity cost is:', type: 'mcq', choices: [
    'A type of tax',
    'The next-best alternative you give up',
    'Inflation',
    'A bank fee'
  ], correct: 1, difficulty: 'M', explanation: 'What you sacrifice in choosing.' },
  { chapter: 'SS 4 — Economics', q: 'When demand for a product rises and supply stays the same, price will likely:', type: 'mcq', choices: ['Drop', 'Rise', 'Stay constant', 'Disappear'], correct: 1, difficulty: 'M', explanation: 'More demand → higher price.' },
  { chapter: 'SS 4 — Economics', q: 'GDP measures:', type: 'mcq', choices: [
    'Government tax revenue',
    'Total goods/services produced in a year',
    'Stock market performance',
    'Number of unemployed people'
  ], correct: 1, difficulty: 'M', explanation: 'Gross Domestic Product = total output.' },
  { chapter: 'SS 4 — Economics', q: 'To slow inflation, the Federal Reserve typically:', type: 'mcq', choices: [
    'Lowers interest rates',
    'Raises interest rates',
    'Eliminates taxes',
    'Buys more bonds'
  ], correct: 1, difficulty: 'M', explanation: 'Raising rates cools borrowing → cools inflation.' },
  { chapter: 'SS 5 — Geography & World', q: 'The "Columbian Exchange" describes:', type: 'mcq', choices: [
    'A WWI treaty',
    'Trade between Old and New Worlds after 1492',
    'A religious schism',
    'A trade dispute'
  ], correct: 1, difficulty: 'M', explanation: 'Two-way transfer of plants, animals, diseases.' },
  { chapter: 'SS 5 — Geography & World', q: 'Which is a NONRENEWABLE resource?', type: 'mcq', choices: ['Solar energy', 'Wind', 'Coal', 'Hydropower'], correct: 2, difficulty: 'E', explanation: 'Fossil fuels are finite.' },

  // ───────────── SCIENCE (18) ─────────────
  { chapter: 'Sci 1 — Practices', q: 'In an experiment, the group that does NOT receive the treatment is the:', type: 'mcq', choices: ['Experimental', 'Control', 'Sample', 'Variable'], correct: 1, difficulty: 'E', explanation: 'Control = baseline.' },
  { chapter: 'Sci 1 — Practices', q: 'F = m·a. A 6 kg cart accelerates at 3 m/s². Force?', type: 'math', correct: 18, difficulty: 'E', explanation: '6 × 3 = 18 N.' },
  { chapter: 'Sci 1 — Practices', q: 'Density = mass / volume. A 200 g object has volume 50 cm³. Density?', type: 'math', correct: 4, difficulty: 'E', explanation: '200/50 = 4 g/cm³.' },
  { chapter: 'Sci 1 — Practices', q: 'A scientific theory is:', type: 'mcq', choices: [
    'A guess',
    'A well-supported explanation backed by evidence',
    'A single experiment',
    'A law'
  ], correct: 1, difficulty: 'M', explanation: 'Theory = robustly supported.' },
  { chapter: 'Sci 2 — Life Science', q: 'Which organelle generates ATP?', type: 'mcq', choices: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Lysosomes'], correct: 1, difficulty: 'E', explanation: 'Mitochondria — the powerhouse.' },
  { chapter: 'Sci 2 — Life Science', q: 'Photosynthesis produces:', type: 'mcq', choices: ['CO₂', 'H₂O', 'Glucose and O₂', 'ATP only'], correct: 2, difficulty: 'M', explanation: '6CO₂ + 6H₂O + light → glucose + 6O₂.' },
  { chapter: 'Sci 2 — Life Science', q: 'In a Bb × Bb cross, what fraction of offspring will display recessive phenotype?', type: 'mcq', choices: ['1/2', '3/4', '1/4', '0'], correct: 2, difficulty: 'M', explanation: '1 BB : 2 Bb : 1 bb → 1/4 are bb.' },
  { chapter: 'Sci 2 — Life Science', q: 'Mitosis produces:', type: 'mcq', choices: [
    'Four cells with half the chromosomes',
    'Two genetically identical cells',
    'Sex cells',
    'Mutated cells only'
  ], correct: 1, difficulty: 'M', explanation: 'Mitosis = identical division.' },
  { chapter: 'Sci 2 — Life Science', q: 'Bee + flower mutual benefit is:', type: 'mcq', choices: ['Predation', 'Mutualism', 'Parasitism', 'Competition'], correct: 1, difficulty: 'E', explanation: 'Both benefit → mutualism.' },
  { chapter: 'Sci 3 — Earth & Space', q: 'Two tectonic plates pulling apart create a:', type: 'mcq', choices: ['Convergent boundary', 'Divergent boundary', 'Transform boundary', 'Hotspot'], correct: 1, difficulty: 'M', explanation: 'Divergent = spreading.' },
  { chapter: 'Sci 3 — Earth & Space', q: 'Earth\'s seasons are caused by:', type: 'mcq', choices: [
    'Distance from the sun',
    'Earth\'s axial tilt',
    'Lunar phases',
    'Solar storms'
  ], correct: 1, difficulty: 'M', explanation: 'Tilt distributes sunlight differently.' },
  { chapter: 'Sci 3 — Earth & Space', q: 'A solar eclipse occurs when:', type: 'mcq', choices: [
    'Earth blocks light to the moon',
    'The moon blocks light from the sun to Earth',
    'The sun is between Earth and the moon',
    'There is a full moon'
  ], correct: 1, difficulty: 'M', explanation: 'Moon between sun and Earth.' },
  { chapter: 'Sci 3 — Earth & Space', q: 'Climate change is primarily driven by:', type: 'mcq', choices: [
    'Increased CO₂ from human activities',
    'Sunspot cycles',
    'Volcanic eruptions',
    'Lunar tides'
  ], correct: 0, difficulty: 'M', explanation: 'Anthropogenic CO₂ is the dominant driver.' },
  { chapter: 'Sci 4 — Physical Science', q: 'pH of 2 indicates:', type: 'mcq', choices: ['Strong base', 'Neutral', 'Strong acid', 'Salt'], correct: 2, difficulty: 'E', explanation: 'Below 7 = acidic; 2 = strongly acidic.' },
  { chapter: 'Sci 4 — Physical Science', q: 'Ohm\'s law: 12 V across 4 Ω resistor. Current?', type: 'math', correct: 3, difficulty: 'M', explanation: 'I = V/R = 12/4 = 3 A.' },
  { chapter: 'Sci 4 — Physical Science', q: 'Which is a chemical change?', type: 'mcq', choices: ['Ice melting', 'Salt dissolving', 'Iron rusting', 'Chopping wood'], correct: 2, difficulty: 'M', explanation: 'Rusting forms a new substance.' },
  { chapter: 'Sci 4 — Physical Science', q: 'Heat from the sun reaches Earth via:', type: 'mcq', choices: ['Conduction', 'Convection', 'Radiation', 'Friction'], correct: 2, difficulty: 'M', explanation: 'No medium → radiation.' },
  { chapter: 'Sci 4 — Physical Science', q: 'Newton\'s 1st law (inertia) states:', type: 'mcq', choices: [
    'F = m·a',
    'Equal and opposite reactions',
    'Objects keep doing what they\'re doing unless a force acts',
    'Energy cannot be destroyed'
  ], correct: 2, difficulty: 'M', explanation: 'Inertia.' }
];
