import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, BarChart, Term, Pill } from '../components/Visual.jsx';

export default {
  id: 4,
  title: 'Math 4 — Data, Statistics & Probability',
  subtitle: 'Reading graphs, mean / median / mode / range, probability, combinations, permutations.',
  blocks: [
    {
      id: 'graphs',
      title: 'Reading Tables, Bar, Line & Circle Graphs',
      content: (
        <>
          <p>About 20% of GED math is data interpretation. The trick is always: <strong>read the title and labels first</strong>, then identify the scale.</p>

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
              <>Q3 + Q4 = 5 + 9 = 14.</>
            ]}
            answer="14 books"
          />

          <Callout kind="warn" title="Watch the scale">
            A graph that starts the y-axis at 50 instead of 0 can make small differences look enormous. Always check axis labels and tick spacing before estimating.
          </Callout>

          <p className="font-semibold mt-3">Circle (pie) graphs</p>
          <p>Slices represent percentages of a whole. Whole circle = 100%.</p>
          <Example
            problem='A budget pie chart shows: Rent 35%, Food 20%, Transportation 15%, Other 30%. If total monthly income is $2,400, how much goes to food?'
            steps={[
              <>"Food = 20%". Compute 20% of 2,400.</>,
              <>0.20 × 2,400 = 480.</>
            ]}
            answer="$480"
          />
        </>
      )
    },
    {
      id: 'central-tendency',
      title: 'Mean, Median, Mode, Range',
      content: (
        <>
          <Formula label="Mean (average)">mean = (sum of values) ÷ (number of values)</Formula>

          <p><Term>Median</Term> = middle value when data is in order. With an even count, average the two middle values.</p>
          <p><Term>Mode</Term> = the value that appears most often. There can be no mode, one mode, or several.</p>
          <p><Term>Range</Term> = highest − lowest.</p>

          <Example
            problem='Data: 4, 7, 9, 12, 7, 15, 7, 11. Find the mean, median, mode, and range.'
            steps={[
              <>Mean: sum = 4+7+9+12+7+15+7+11 = 72. Count = 8. Mean = 72/8 = <strong>9</strong>.</>,
              <>Order: 4, 7, 7, 7, 9, 11, 12, 15. Median = average of 4th and 5th values = (7+9)/2 = <strong>8</strong>.</>,
              <>Mode: 7 appears 3× — most often. <strong>Mode = 7</strong>.</>,
              <>Range: 15 − 4 = <strong>11</strong>.</>
            ]}
            answer={<>Mean 9 · Median 8 · Mode 7 · Range 11</>}
          />

          <Callout kind="tip" title="Working backwards from a mean">
            If the mean of 5 numbers is 12, the sum must be <M>{`5 × 12 = 60`}</M>. Use this any time you're given a mean and need to find a missing value.
          </Callout>

          <Example
            problem='Carlos has test scores of 78, 82, 85, and 91. What must he score on the fifth test for an average of 86?'
            steps={[
              <>Required total: <M>{`5 × 86 = 430`}</M>.</>,
              <>Current total: <M>{`78 + 82 + 85 + 91 = 336`}</M>.</>,
              <>Difference: <M>{`430 − 336 = 94`}</M>.</>
            ]}
            answer="94"
          />
        </>
      )
    },
    {
      id: 'probability',
      title: 'Probability',
      content: (
        <>
          <Formula label="Probability">P(event) = favorable outcomes / total outcomes</Formula>
          <p>Always between 0 (impossible) and 1 (certain). Express as a fraction, decimal, or percent.</p>

          <Example
            problem='A bag has 4 red, 3 blue, and 5 green marbles. What is the probability of drawing a blue marble?'
            steps={[
              <>Favorable: 3 blue.</>,
              <>Total: 4 + 3 + 5 = 12.</>,
              <>P(blue) = <Frac n="3" d="12" /> = <Frac n="1" d="4" /> = 0.25 = 25%.</>
            ]}
            answer="1/4"
          />

          <p className="font-semibold mt-3">Independent events — multiply</p>
          <p>If two events don't affect each other (like flipping a coin twice), multiply their probabilities.</p>
          <Example
            problem='Probability of flipping heads twice in a row?'
            steps={[
              <>P(heads) = ½. The flips are independent.</>,
              <>P(heads AND heads) = ½ × ½ = ¼.</>
            ]}
            answer="1/4"
          />

          <p className="font-semibold mt-3">Dependent events ("without replacement")</p>
          <Example
            problem='From 12 marbles (4 red, 3 blue, 5 green), what is P(red, then blue) if you do NOT replace the first?'
            steps={[
              <>P(first red) = <Frac n="4" d="12" /> = <Frac n="1" d="3" />.</>,
              <>After removing 1 red, 11 marbles remain, 3 blue. P(blue | red drawn) = <Frac n="3" d="11" />.</>,
              <>Multiply: <Frac n="1" d="3" /> × <Frac n="3" d="11" /> = <Frac n="3" d="33" /> = <Frac n="1" d="11" />.</>
            ]}
            answer={<Frac n="1" d="11" />}
          />

          <Callout kind="warn" title="OR vs AND">
            For mutually exclusive events ("or"), <strong>add</strong> the probabilities. For independent events ("and"), <strong>multiply</strong>.
          </Callout>
        </>
      )
    },
    {
      id: 'combinations-permutations',
      title: 'Combinations & Permutations',
      content: (
        <>
          <p>Counting problems show up on the GED in disguise: "how many ways…?"</p>

          <p className="font-semibold">The fundamental counting principle</p>
          <p>If you have <M>m</M> ways to do thing 1 and <M>n</M> ways to do thing 2, you have <M>m × n</M> ways to do both.</p>

          <Example
            problem='A pizza shop offers 4 sizes and 8 toppings (one topping). How many different pizzas?'
            steps={[
              <>Sizes × toppings = 4 × 8 = 32.</>
            ]}
            answer="32 pizzas"
          />

          <Table
            headers={['Type', 'Order matters?', 'Repeats?', 'Formula']}
            rows={[
              ['Permutation (full)', 'Yes', 'No', 'n!'],
              ['Permutation of r from n', 'Yes', 'No', 'n!/(n−r)!'],
              ['Combination', 'No', 'No', 'n! / [r!(n−r)!]']
            ]}
          />

          <Callout kind="formula" title="Factorial">
            <M>n!</M> means <M>{`n × (n−1) × (n−2) × ... × 1`}</M>. So <M>5! = 5×4×3×2×1 = 120</M>. By definition, <M>0! = 1</M>.
          </Callout>

          <Example
            problem='In how many orders can 5 books be arranged on a shelf?'
            steps={[
              <>Order matters → permutation. 5 books in 5 positions = <M>5!</M>.</>,
              <>Compute: <M>{`5 × 4 × 3 × 2 × 1 = 120`}</M>.</>
            ]}
            answer="120"
          />

          <Example
            problem='From a class of 10, how many ways can a 3-person committee be chosen?'
            steps={[
              <>Order does NOT matter → combination. C(10,3) = <Frac n="10!" d="3! · 7!" />.</>,
              <>Cancel: <Frac n="10×9×8" d="3×2×1" /> = <Frac n="720" d="6" /> = 120.</>
            ]}
            answer="120 committees"
          />

          <Example
            problem='A 4-digit PIN is chosen, with each digit 0-9 and digits CAN repeat. How many PINs?'
            steps={[
              <>4 positions, 10 choices each: <M>{`10 × 10 × 10 × 10 = 10,000`}</M>.</>
            ]}
            answer="10,000"
          />
        </>
      )
    },
    {
      id: 'compare-formats',
      title: 'Comparing Proportions Across Formats',
      content: (
        <>
          <p>The GED loves to mix formats: a fraction, a decimal, a percent, and a ratio in the same question. Convert everything to one format (decimal is easiest with the calculator) before comparing.</p>

          <Example
            problem={<>In a survey, <Frac n="3" d="8" /> chose blue, 0.25 chose green, 30% chose red, and 7:40 chose yellow. Which color has the highest share?</>}
            steps={[
              <>Convert all to decimals.</>,
              <><Frac n="3" d="8" /> = 0.375.</>,
              <>0.25 = 0.25.</>,
              <>30% = 0.30.</>,
              <>7:40 = <Frac n="7" d="40" /> = 0.175.</>,
              <>Largest: 0.375 — blue.</>
            ]}
            answer="Blue"
          />

          <Callout kind="tip" title="Ballpark check">
            Even before computing, you can see green (0.25) and yellow (under 0.2) are clearly less than blue and red. Just compare blue and red carefully.
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
      { term: 'Permutation', def: 'Arrangement where order matters.' },
      { term: 'Combination', def: 'Selection where order does not matter.' }
    ],
    laws: [
      { name: 'Probability formula', desc: 'P = favorable / total' },
      { name: 'AND rule', desc: 'For independent events: P(A and B) = P(A) × P(B).' },
      { name: 'OR rule (exclusive)', desc: 'For mutually exclusive events: P(A or B) = P(A) + P(B).' },
      { name: 'Mean reverse trick', desc: 'Sum = mean × count' }
    ],
    methods: [
      { name: 'Sort then median', desc: 'Always sort the data before identifying the median.' },
      { name: 'Counting principle', desc: 'Multiply choices when filling sequential slots.' }
    ]
  },
  questions: [
    { q: 'Find the mean of 12, 18, 24, 30, 36.', type: 'math', correct: 24, difficulty: 'E', explanation: 'Sum = 120. Count = 5. Mean = 120/5 = 24.' },
    { q: 'The data set: 5, 8, 8, 12, 19, 22. The median is:', type: 'math', correct: 10, difficulty: 'M', explanation: '6 values; middle two are 8 and 12. Average: 10.' },
    { q: 'Roll a fair 6-sided die. P(prime number)?', type: 'mcq', choices: ['1/2', '1/3', '1/6', '2/3'], correct: 0, difficulty: 'M', explanation: 'Primes ≤ 6: {2, 3, 5} → 3 of 6 = 1/2.' },
    { q: 'A bag has 5 red and 7 blue marbles. P(red, then red, no replacement)?', type: 'mcq', choices: ['25/144', '5/12', '5/33', '20/132'], correct: 2, difficulty: 'H', explanation: 'P(R1)=5/12. After: 4R/11. Multiply: 5/12 × 4/11 = 20/132 = 5/33.' },
    { q: 'How many ways to arrange the letters MATH?', type: 'math', correct: 24, difficulty: 'M', explanation: '4! = 24.' },
    { q: 'A pizza has 3 sizes and 5 crusts. How many size-crust combos?', type: 'math', correct: 15, difficulty: 'E', explanation: '3 × 5 = 15.' },
    { q: 'Anna scored 88, 92, 76, 84 on four tests. What does she need on test 5 for a mean of 87?', type: 'math', correct: 95, difficulty: 'M', explanation: 'Need total 5×87=435. Have 88+92+76+84=340. 435−340=95.' },
    { q: 'C(8, 3) =', type: 'math', correct: 56, difficulty: 'H', explanation: '8!/(3!·5!) = (8·7·6)/(3·2·1) = 336/6 = 56.' },
    { q: 'A circle graph: Sales 30%, Marketing 25%, R&D 20%, Other 25%. If total is $4,000,000, how much is R&D?', type: 'math', correct: 800000, difficulty: 'M', explanation: '0.20 × 4,000,000 = 800,000.' },
    { q: 'Which statistic best resists outliers?', type: 'mcq', choices: ['Mean', 'Median', 'Range', 'Sum'], correct: 1, difficulty: 'M', explanation: 'Median is the middle value and is unaffected by extreme outliers (unlike the mean which gets pulled by them).' }
  ]
};
