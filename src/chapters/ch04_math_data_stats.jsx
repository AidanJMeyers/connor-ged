import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, BarChart, Term, Pill } from '../components/Visual.jsx';

export default {
  id: 4,
  title: 'Math 4 — Data, Statistics & Probability',
  subtitle: 'How to read graphs without getting fooled, what "average" really means, and the math of "what are the chances?"',
  blocks: [
    {
      id: 'why-data',
      title: 'Why This Section Matters',
      content: (
        <>
          <p>Roughly one in five GED math questions involves a chart, table, or graph — and these questions are usually <strong>fast points</strong> if you know what to look at first. They\'re also the most directly applicable to real life: news articles, financial statements, medical results, sports stats, polls. People who understand basic statistics avoid being misled by misleading graphs and slanted news.</p>

          <Callout kind="tip" title="Reading-a-graph rule of thumb">
            Before looking at any data, scan in this order: <strong>title → axis labels → units → scale</strong>. If you do this every time, you\'ll never get tricked by a graph that starts the y-axis at 50 instead of 0.
          </Callout>
        </>
      )
    },
    {
      id: 'graphs',
      title: 'Reading Tables, Bar, Line & Circle Graphs',
      content: (
        <>
          <p>Each kind of graph is good at showing one specific thing. Knowing which is which makes you faster.</p>
          <Table
            headers={['Graph type', 'Best for', 'Watch out for']}
            rows={[
              ['Table', 'Exact numbers, multiple variables', 'Easy to misread row vs column'],
              ['Bar chart', 'Comparing distinct categories', 'Truncated y-axis exaggerating differences'],
              ['Line graph', 'Trends or change over time', 'Skipped time intervals on the x-axis'],
              ['Circle (pie) chart', 'Parts of a whole as percentages', '3D pies that distort slice sizes; slices that don\'t add to 100%'],
              ['Scatter plot', 'Relationship between two variables', 'Confusing correlation with causation'],
              ['Histogram', 'Distribution of a single variable\'s values', 'Choice of bin size changes appearance']
            ]}
          />

          <BarChart
            title="Books read by Connor in 2024"
            data={[
              { label: 'Q1', v: 4 },
              { label: 'Q2', v: 7 },
              { label: 'Q3', v: 5 },
              { label: 'Q4', v: 9 }
            ]}
          />

          <Example
            problem='Using the bar graph above, what is the total number of books read in the second half of the year?'
            steps={[
              <>"Second half" = Q3 + Q4.</>,
              <>5 + 9 = 14.</>
            ]}
            answer="14 books"
          />

          <Callout kind="warn" title="The truncated-y-axis trick">
            A graph showing yearly sales going from $50 million to $52 million looks like steady, modest growth if the y-axis runs from 0 to 60. But if the y-axis only runs from 49 to 53, the same data looks like a dramatic explosion. <strong>Always look at the bottom number on the y-axis</strong> before believing the visual impression. The GED specifically tests this.
          </Callout>

          <p className="font-semibold mt-4">Circle (pie) graphs</p>
          <p>Slices represent percentages of the whole. The whole circle is 100%.</p>
          <Example
            problem='A budget pie chart shows: Rent 35%, Food 20%, Transportation 15%, Other 30%. If total monthly income is $2,400, how much goes to food?'
            steps={[
              <>"20% of 2,400."</>,
              <>0.20 × 2,400 = 480.</>
            ]}
            answer="$480"
          />

          <Callout kind="tip" title="Sanity check pie charts">
            All slices should add to exactly 100%. If they don\'t, either the chart has rounding error noted in the legend, or "other" is missing. If you see slices summing to 96%, "other" hidden 4%.
          </Callout>
        </>
      )
    },
    {
      id: 'central-tendency',
      title: 'Mean, Median, Mode, Range — The Four "Center" Numbers',
      content: (
        <>
          <p>When you have a bunch of numbers, sometimes you want one number to summarize them. The four classic summaries:</p>
          <Table
            headers={['Statistic', 'Definition', 'When it\'s most useful']}
            rows={[
              ['Mean (average)', 'Sum ÷ count', 'When data are roughly symmetric, no big outliers'],
              ['Median', 'Middle value when sorted', 'When there are extreme outliers (income, home prices)'],
              ['Mode', 'Most frequent value', 'For categorical data ("most popular brand")'],
              ['Range', 'Max − min', 'A rough measure of spread']
            ]}
          />

          <Formula label="Mean (average)">
            <M>{`mean = (sum of values) / (number of values)`}</M>
          </Formula>

          <p className="font-semibold mt-4">Finding the median</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li>Sort the numbers from smallest to largest.</li>
            <li>If there\'s an ODD count, the middle number IS the median.</li>
            <li>If there\'s an EVEN count, the median is the average of the two middle numbers.</li>
          </ol>

          <Example
            problem='For the data set 4, 7, 9, 12, 7, 15, 7, 11 — find the mean, median, mode, and range.'
            steps={[
              <>MEAN: sum = 4+7+9+12+7+15+7+11 = 72. Count = 8. Mean = 72/8 = <strong>9</strong>.</>,
              <>Sort the data: 4, 7, 7, 7, 9, 11, 12, 15.</>,
              <>MEDIAN: 8 values (even count) → average of the 4th and 5th: (7 + 9)/2 = <strong>8</strong>.</>,
              <>MODE: which value appears most? 7 appears 3 times, more than any other. <strong>Mode = 7</strong>.</>,
              <>RANGE: max − min = 15 − 4 = <strong>11</strong>.</>
            ]}
            answer={<>Mean 9 · Median 8 · Mode 7 · Range 11</>}
          />

          <Callout kind="info" title="Why mean and median can disagree">
            <p>Imagine 9 people in a room earning $50,000 each. The mean salary is $50,000. Now Jeff Bezos walks in with his $20 billion. The mean salary is now $2 billion. The median is still $50,000.</p>
            <p>Mean is sensitive to outliers; median is not. That\'s why news articles say "median household income" — it\'s a more honest summary when the data are skewed (income, home prices, etc.).</p>
          </Callout>

          <Callout kind="tip" title="The mean reverse trick">
            If the question gives you the mean and the count, you can find the SUM. If the mean of 5 numbers is 12, the sum must be 5 × 12 = 60. This is the key to "find the missing value" problems.
          </Callout>

          <Example
            problem='Carlos has test scores of 78, 82, 85, and 91. What must he score on the fifth test to have an average of 86?'
            steps={[
              <>Required total of 5 scores: 5 × 86 = 430.</>,
              <>Current total of 4 scores: 78 + 82 + 85 + 91 = 336.</>,
              <>Missing score: 430 − 336 = 94.</>
            ]}
            answer="94"
          />
        </>
      )
    },
    {
      id: 'probability',
      title: 'Probability — The Math of Chance',
      content: (
        <>
          <Formula label="Probability of an event"><M>{`P(event) = (favorable outcomes) / (total outcomes)`}</M></Formula>
          <p>Probability is always between 0 (impossible) and 1 (certain). You can express it as a fraction (3/8), a decimal (0.375), or a percent (37.5%).</p>

          <Example
            problem='A bag has 4 red, 3 blue, and 5 green marbles. What is the probability of drawing a blue marble?'
            steps={[
              <>Favorable outcomes (blue): 3.</>,
              <>Total outcomes (any marble): 4 + 3 + 5 = 12.</>,
              <>P(blue) = <Frac n="3" d="12" /> = <Frac n="1" d="4" /> = 0.25 = 25%.</>
            ]}
            answer="1/4"
          />

          <p className="font-semibold mt-4">Independent events — multiply</p>
          <p>Two events are <Term>independent</Term> if the outcome of one doesn\'t affect the other. Coin flips are independent. Die rolls are independent. Drawing-with-replacement is independent.</p>
          <Callout kind="formula" title="AND rule for independent events">
            <M>{`P(A AND B) = P(A) × P(B)`}</M>
          </Callout>

          <Example
            problem='What is the probability of flipping heads twice in a row?'
            steps={[
              <>P(heads on one flip) = ½. Each flip is independent.</>,
              <>P(heads AND heads) = ½ × ½ = ¼.</>
            ]}
            answer="1/4"
          />

          <p className="font-semibold mt-4">Dependent events — "without replacement"</p>
          <p>If pulling the first marble changes what\'s in the bag for the second draw, the events are <strong>dependent</strong>. The total and/or favorable counts change between draws.</p>

          <Example
            problem='From 12 marbles (4 red, 3 blue, 5 green), what is P(red, then blue) if you do NOT replace the first marble?'
            steps={[
              <>P(first is red) = 4/12 = 1/3.</>,
              <>After drawing 1 red, only 11 marbles remain — still 3 blue. P(blue | red drawn) = 3/11.</>,
              <>Multiply: 1/3 × 3/11 = 3/33 = 1/11.</>
            ]}
            answer="1/11"
          />

          <Callout kind="warn" title="OR vs AND">
            <p>Use ADD for "OR" with mutually exclusive outcomes (P(rolling 2 OR 5 on one die) = 1/6 + 1/6 = 1/3).</p>
            <p>Use MULTIPLY for "AND" with independent events (P(2 then 5 in two rolls) = 1/6 × 1/6 = 1/36).</p>
            <p>The classic mistake is multiplying when you should add, and vice versa. Read the question carefully — does it say "and" or "or"?</p>
          </Callout>

          <Callout kind="info" title="Probability of NOT something">
            P(not A) = 1 − P(A). If the chance of rain is 30%, the chance it doesn\'t rain is 70%. This is often the easiest way to compute "at least one" problems.
          </Callout>
        </>
      )
    },
    {
      id: 'combinations-permutations',
      title: 'Counting — Combinations & Permutations',
      content: (
        <>
          <p>Some GED problems ask "how many ways…?" — how many different lineups, committees, PINs, or arrangements are possible. To answer these, you have to know whether <strong>order matters</strong>.</p>

          <p className="font-semibold mt-4">The fundamental counting principle</p>
          <p>If task 1 has <M>m</M> ways and task 2 has <M>n</M> ways, then doing them together has <M>m × n</M> ways. Extends to more tasks. This is the only counting tool you need for many problems.</p>

          <Example
            problem='A pizza shop offers 4 sizes and 8 toppings (one topping per pizza). How many different pizzas are possible?'
            steps={[
              <>Sizes × toppings = 4 × 8 = 32.</>
            ]}
            answer="32 pizzas"
          />

          <Example
            problem='How many 4-digit PINs are there if each digit is 0-9 and digits CAN repeat?'
            steps={[
              <>4 positions, 10 choices each: 10 × 10 × 10 × 10 = 10,000.</>
            ]}
            answer="10,000"
          />

          <p className="font-semibold mt-4">Permutations — order matters</p>
          <Callout kind="formula" title="Permutation">
            Number of ways to arrange ALL <M>n</M> items: <M>n!</M> (read "n factorial") = <M>n × (n−1) × ... × 1</M>.
            <br/>Picking r of n in order: <M>{`n! / (n−r)!`}</M>.
          </Callout>

          <p>Factorials grow fast: 5! = 120, 6! = 720, 7! = 5,040.</p>

          <Example
            problem='In how many orders can 5 books be arranged on a shelf?'
            steps={[
              <>Order matters → permutation. 5 books in 5 positions = 5!.</>,
              <>5 × 4 × 3 × 2 × 1 = 120.</>
            ]}
            answer="120"
          />

          <p className="font-semibold mt-4">Combinations — order DOESN\'T matter</p>
          <Callout kind="formula" title="Combination ('n choose r')">
            Number of ways to choose <M>r</M> items from <M>n</M> when order doesn\'t matter: <M>{`C(n, r) = n! / [r!(n−r)!]`}</M>.
          </Callout>

          <Example
            problem='From a class of 10, how many ways can a 3-person committee be chosen?'
            steps={[
              <>Order doesn\'t matter (a committee of A, B, C is the same as C, A, B) → combination.</>,
              <>C(10, 3) = 10! / (3! · 7!) = (10 × 9 × 8) / (3 × 2 × 1).</>,
              <>= 720 / 6 = 120.</>
            ]}
            answer="120"
          />

          <Callout kind="tip" title="Permutation vs combination — quick test">
            Ask: "if I swap two of the chosen items, is it the same outcome or different?" Same → combination (order doesn\'t matter). Different → permutation (order matters).
            <ul className="list-disc ml-5 text-sm mt-1">
              <li>Picking 3 from 10 to be class president, vice-president, treasurer → PERMUTATION (the roles are distinct).</li>
              <li>Picking 3 from 10 to form a committee → COMBINATION (no roles).</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'compare-formats',
      title: 'Comparing Proportions Across Different Formats',
      content: (
        <>
          <p>The GED loves to give a single question with mixed forms — a fraction, a decimal, a percent, and a ratio in the same answer choices. The simplest strategy: <strong>convert everything to decimals</strong> using the calculator, then compare.</p>

          <Example
            problem={<>In a survey, <Frac n="3" d="8" /> chose blue, 0.25 chose green, 30% chose red, and 7:40 chose yellow. Which color got the highest share?</>}
            steps={[
              <>Convert all to decimals.</>,
              <>3/8 = 0.375.</>,
              <>0.25 stays.</>,
              <>30% = 0.30.</>,
              <>7:40 = 7/40 = 0.175.</>,
              <>Largest: 0.375 — blue.</>
            ]}
            answer="Blue"
          />

          <Callout kind="tip" title="Ballpark first">
            Even before computing, you can usually tell that 0.25 (green) and 7:40 (≈0.18, yellow) are clearly less than the other two. Then it\'s just blue vs red, which you can decide quickly. Spend your detailed work on the close calls only.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Mean', def: 'Sum ÷ count. Same as "average."', tag: 'STAT', tagColor: 'sky' },
      { term: 'Median', def: 'Middle value of sorted data.', tag: 'STAT', tagColor: 'sky' },
      { term: 'Mode', def: 'Most frequent value.', tag: 'STAT', tagColor: 'sky' },
      { term: 'Range', def: 'Max − min.', tag: 'STAT', tagColor: 'sky' },
      { term: 'Outlier', def: 'A value far from the rest. Pulls the mean but not the median.' },
      { term: 'Probability', def: 'Likelihood of an event, from 0 to 1.' },
      { term: 'Independent events', def: 'Events that don\'t affect each other.' },
      { term: 'Permutation', def: 'Arrangement where order matters.' },
      { term: 'Combination', def: 'Selection where order does not matter.' }
    ],
    laws: [
      { name: 'Probability formula', desc: 'P = favorable / total. Always between 0 and 1.' },
      { name: 'AND rule', desc: 'For independent events: P(A and B) = P(A) × P(B).' },
      { name: 'OR rule (mutually exclusive)', desc: 'P(A or B) = P(A) + P(B).' },
      { name: 'Mean reverse trick', desc: 'Sum = mean × count. Use this to find a missing value when given the mean.' },
      { name: 'Counting principle', desc: 'm tasks × n tasks = m·n combined ways.' }
    ],
    methods: [
      { name: 'Sort then median', desc: 'Always sort the data before identifying the median.' },
      { name: 'Read graphs in order: title, axes, units, scale', desc: 'Avoids misreading.' },
      { name: 'Permutation vs combination test', desc: 'Swap two chosen items — same outcome (combination) or different (permutation)?' }
    ]
  },
  questions: [
    { q: 'Find the mean of 12, 18, 24, 30, 36.', type: 'math', correct: 24, difficulty: 'E', explanation: 'Sum = 120. Count = 5. Mean = 24.' },
    { q: 'The median of 5, 8, 8, 12, 19, 22 is:', type: 'math', correct: 10, difficulty: 'M', explanation: '6 values; middle two are 8 and 12. Average: 10.' },
    { q: 'Roll a fair 6-sided die. P(rolling a prime number)?', type: 'mcq', choices: ['1/2', '1/3', '1/6', '2/3'], correct: 0, difficulty: 'M', explanation: 'Primes ≤ 6: {2, 3, 5} → 3 of 6 = 1/2.' },
    { q: 'A bag has 5 red and 7 blue marbles. P(drawing red, then red without replacement)?', type: 'mcq', choices: ['25/144', '5/12', '5/33', '20/132'], correct: 2, difficulty: 'H', explanation: 'P(R₁) = 5/12. After drawing one red: 4 red of 11 left. P(R₂|R₁) = 4/11. Multiply: 5/12 × 4/11 = 20/132 = 5/33.' },
    { q: 'How many ways to arrange the letters MATH?', type: 'math', correct: 24, difficulty: 'M', explanation: '4! = 4×3×2×1 = 24.' },
    { q: 'A pizza has 3 sizes and 5 crusts. How many size-crust combos?', type: 'math', correct: 15, difficulty: 'E', explanation: '3 × 5 = 15.' },
    { q: 'Anna scored 88, 92, 76, 84 on four tests. What does she need on test 5 for a mean of 87?', type: 'math', correct: 95, difficulty: 'M', explanation: 'Required total = 5 × 87 = 435. Current = 340. Need 95.' },
    { q: 'C(8, 3) = ?', type: 'math', correct: 56, difficulty: 'H', explanation: '8!/(3!·5!) = (8·7·6)/(3·2·1) = 336/6 = 56.' },
    { q: 'A circle graph: Sales 30%, Marketing 25%, R&D 20%, Other 25%. If total revenue is $4,000,000, R&D budget?', type: 'math', correct: 800000, difficulty: 'M', explanation: '0.20 × 4,000,000 = 800,000.' },
    { q: 'Which statistic is LEAST affected by outliers?', type: 'mcq', choices: ['Mean', 'Median', 'Range', 'Sum'], correct: 1, difficulty: 'M', explanation: 'Median is the middle value — extreme outliers don\'t move it.' },
    { q: 'A bag has 3 red, 4 white, 5 black marbles. What is P(NOT black)?', type: 'mcq', choices: ['5/12', '7/12', '5/7', '4/12'], correct: 1, difficulty: 'M', explanation: 'P(not black) = 1 − P(black) = 1 − 5/12 = 7/12. Or directly: (3+4)/12 = 7/12.' },
    { q: 'How many ways can 6 people sit in a row?', type: 'math', correct: 720, difficulty: 'M', explanation: '6! = 720.' }
  ]
};
