import React from 'react';
import { Callout, Table, Pill, Formula, M, Steps, Example, NumberLine, Term } from '../components/Visual.jsx';

export default {
  id: 1,
  title: 'Math 1 — Number Sense & Problem Solving',
  subtitle: 'Whole numbers, place value, comparing numbers, the four operations, calculator skills, and translating word problems into math.',
  blocks: [
    {
      id: 'place-value',
      title: 'Place Value & Comparing Numbers',
      subtitle: 'Reading, ordering, and rounding whole numbers.',
      content: (
        <>
          <p>Every digit in a number has a <Term>place value</Term> — the position tells you what it's worth. Reading <M>52,907</M>: the 5 means <strong>50,000</strong>, the 2 means <strong>2,000</strong>, the 9 means <strong>900</strong>, the 0 means 0 tens, and the 7 means 7 ones.</p>

          <Table
            headers={['Place', 'Value', 'Example digit (in 52,907)']}
            rows={[
              ['Ten-thousands', '10,000', '5 → 50,000'],
              ['Thousands', '1,000', '2 → 2,000'],
              ['Hundreds', '100', '9 → 900'],
              ['Tens', '10', '0 → 0'],
              ['Ones', '1', '7 → 7']
            ]}
          />

          <Callout kind="tip" title="Comparing numbers">
            Line up the place values starting from the left. The first place where the digits differ wins. Example: <M>4,829 vs 4,891</M> — same thousands and hundreds, but tens place: 2 &lt; 9, so <M>4,829 &lt; 4,891</M>.
          </Callout>

          <p className="font-semibold mt-3">Rounding rules</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Find the place you're rounding to.</li>
            <li>Look at the digit immediately to the right.</li>
            <li>If that digit is <strong>5 or more</strong>, round up. If <strong>4 or less</strong>, round down (keep the digit).</li>
            <li>Replace all digits to the right with zeros.</li>
          </ul>

          <Example
            problem={<>Round <M>67,839</M> to the nearest thousand.</>}
            steps={[
              <>The thousands digit is <strong>7</strong> in <M>6<u>7</u>,839</M>.</>,
              <>The next digit (hundreds) is <strong>8</strong>, which is 5 or more, so we round up.</>,
              <>7 → 8. Replace the rest with zeros: <M>68,000</M>.</>
            ]}
            answer="68,000"
          />
        </>
      )
    },
    {
      id: 'four-operations',
      title: 'Whole Number Operations',
      subtitle: 'Add, subtract, multiply, divide — by hand and with a calculator.',
      content: (
        <>
          <p>The four operations are the foundation. On the GED, you must be comfortable doing them by hand <strong>and</strong> with the on-screen TI-30XS calculator. Multi-step word problems are graded on the final number, so accuracy matters more than speed.</p>

          <Callout kind="formula" title="Order of Operations — PEMDAS">
            <strong>P</strong>arentheses → <strong>E</strong>xponents → <strong>M</strong>ultiply / <strong>D</strong>ivide (left to right) → <strong>A</strong>dd / <strong>S</strong>ubtract (left to right).
          </Callout>

          <Example
            problem={<>Compute <M>{`12 + 3 × (8 − 5)² ÷ 9`}</M></>}
            steps={[
              <>Parentheses first: <M>{`8 − 5 = 3`}</M>. Now: <M>{`12 + 3 × 3² ÷ 9`}</M>.</>,
              <>Exponent: <M>{`3² = 9`}</M>. Now: <M>{`12 + 3 × 9 ÷ 9`}</M>.</>,
              <>Multiply/divide left to right: <M>{`3 × 9 = 27`}</M>, then <M>{`27 ÷ 9 = 3`}</M>. Now: <M>{`12 + 3`}</M>.</>,
              <>Add: <M>{`12 + 3 = 15`}</M>.</>
            ]}
            answer="15"
          />

          <p className="font-semibold mt-3">Long subtraction with regrouping</p>
          <Example
            problem={<>Subtract <M>{`8,003 − 1,549`}</M></>}
            steps={[
              <>Stack the numbers. Start at the ones place: <M>{`3 − 9`}</M> won't work, so we need to borrow.</>,
              <>Borrow across the zeros: tens column has 0, hundreds has 0, thousands has 8. Reduce the 8 by 1 to make 7, the hundreds becomes 10 (then we borrow 1 to tens, leaving 9), the tens becomes 10 (then we borrow 1 to ones, leaving 9), the ones becomes 13.</>,
              <>Now subtract column by column: ones <M>{`13 − 9 = 4`}</M>; tens <M>{`9 − 4 = 5`}</M>; hundreds <M>{`9 − 5 = 4`}</M>; thousands <M>{`7 − 1 = 6`}</M>.</>
            ]}
            answer="6,454"
          />

          <p className="font-semibold mt-3">Multiplication shortcut</p>
          <p>To multiply by 10, 100, 1,000, just append zeros: <M>{`47 × 100 = 4,700`}</M>. To multiply by 11 in your head: <M>{`52 × 11`}</M> → put 5+2 = 7 between the 5 and 2 → <strong>572</strong>.</p>

          <p className="font-semibold mt-3">Long division</p>
          <Example
            problem={<>Divide <M>{`1,548 ÷ 12`}</M></>}
            steps={[
              <>How many times does 12 go into 15? Once. <M>{`12 × 1 = 12`}</M>, subtract: <M>{`15 − 12 = 3`}</M>.</>,
              <>Bring down the 4 → 34. How many times does 12 go into 34? Twice. <M>{`12 × 2 = 24`}</M>, subtract: <M>{`34 − 24 = 10`}</M>.</>,
              <>Bring down the 8 → 108. How many times does 12 go into 108? <M>{`12 × 9 = 108`}</M>, subtract: <M>{`108 − 108 = 0`}</M>.</>,
              <>The quotient is the digits we wrote on top: 1, 2, 9 → <strong>129</strong> with remainder 0.</>
            ]}
            answer="129"
          />
        </>
      )
    },
    {
      id: 'word-problems',
      title: 'Translating Word Problems',
      subtitle: 'Turning English into equations.',
      content: (
        <>
          <p>About <strong>30%</strong> of GED math is word problems. Build the habit of translating phrase-by-phrase before computing.</p>

          <Table
            headers={['Words / Phrases', 'Operation']}
            rows={[
              ['sum, total, in all, combined, increased by, plus, more than', '+'],
              ['difference, less than, decreased by, fewer, minus, take away', '−'],
              ['product, times, of, twice, doubled, tripled', '×'],
              ['quotient, per, divided by, ratio of, split equally', '÷'],
              ['is, equals, results in, gives, was, will be', '='],
              ['a number, the unknown', 'variable (let it = x)']
            ]}
          />

          <Callout kind="warn" title="Watch the order on 'less than' and 'subtracted from'">
            "5 less than x" is <M>{`x − 5`}</M>, not <M>{`5 − x`}</M>. "10 subtracted from y" is <M>{`y − 10`}</M>.
          </Callout>

          <Example
            problem='A theater sold 145 adult tickets at $9 each and 78 child tickets at $5 each. How much did the theater earn?'
            steps={[
              <>Adult earnings: <M>{`145 × 9`}</M>. Compute: <M>{`145 × 9 = 1,305`}</M>.</>,
              <>Child earnings: <M>{`78 × 5 = 390`}</M>.</>,
              <>Total: add the two: <M>{`1,305 + 390 = 1,695`}</M>.</>
            ]}
            answer="$1,695"
          />

          <Example
            problem='A delivery van travels 312 miles on Monday and 285 miles on Tuesday. If gas costs $3.40 per gallon and the van gets 24 mpg, how much was spent on gas?'
            steps={[
              <>Total miles: <M>{`312 + 285 = 597`}</M>.</>,
              <>Gallons used: divide by mpg → <M>{`597 ÷ 24 = 24.875`}</M> gallons.</>,
              <>Cost: gallons × price per gallon → <M>{`24.875 × $3.40 = $84.575`}</M>.</>,
              <>Round to dollars and cents: <strong>$84.58</strong>.</>
            ]}
            answer="$84.58"
          />
        </>
      )
    },
    {
      id: 'calculator',
      title: 'TI-30XS Calculator Skills',
      subtitle: 'The on-screen calculator unlocked after Part 1 of the math test.',
      content: (
        <>
          <p>The GED Mathematical Reasoning test gives you the <Term>TI-30XS MultiView</Term> calculator for Parts 2 (the longer section). It has a 4-line display and shows answers as fractions if you set it up right.</p>

          <Callout kind="tip" title="Critical buttons">
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>2nd</strong> activates the orange function above each key.</li>
              <li><strong>n/d</strong> for fractions — type numerator, press it, type denominator.</li>
              <li><strong>x²</strong> squares; <strong>^</strong> for any power; <strong>√</strong> for square root.</li>
              <li><strong>(−)</strong> the negation key (left of Enter) — different from the subtract key.</li>
              <li><strong>÷</strong> after typing a fraction shows decimal; <strong>2nd → ANS</strong> recalls the last answer.</li>
              <li><strong>2nd → ⇄</strong> toggles between fraction and decimal output.</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-3">Common pitfalls</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Always wrap negatives in parentheses inside complex expressions: <M>{`(−4)² = 16`}</M> but <M>{`−4² = −16`}</M> on the calculator.</li>
            <li>Use parentheses around any sum or difference being divided: <M>{`(8 + 4) ÷ 2`}</M>, not <M>{`8 + 4 ÷ 2`}</M>.</li>
            <li>The calculator follows order of operations — type the expression as written.</li>
          </ul>
        </>
      )
    },
    {
      id: 'distance-cost',
      title: 'Distance, Rate, Time & Unit Cost',
      subtitle: 'Two formulas you must memorize cold.',
      content: (
        <>
          <Formula label="Distance">distance = rate × time</Formula>
          <Formula label="Total cost">total cost = unit price × number of units</Formula>

          <p>From the distance formula, you can rearrange to solve for any unknown:</p>
          <Table
            headers={['Solving for', 'Formula']}
            rows={[
              ['distance', 'd = r × t'],
              ['rate (speed)', 'r = d ÷ t'],
              ['time', 't = d ÷ r']
            ]}
          />

          <Example
            problem='A truck travels at 55 mph for 3.5 hours. How far does it go?'
            steps={[
              <>Identify rate and time: <M>{`r = 55`}</M> mph, <M>{`t = 3.5`}</M> hr.</>,
              <>Apply formula: <M>{`d = r × t = 55 × 3.5`}</M>.</>,
              <>Compute: <M>{`55 × 3.5 = 192.5`}</M> miles.</>
            ]}
            answer="192.5 miles"
          />

          <Example
            problem='A 12-pack of soda costs $4.80. What is the price per can?'
            steps={[
              <>Total cost ÷ number of units = unit price. <M>{`4.80 ÷ 12`}</M>.</>,
              <>Compute: <M>{`4.80 ÷ 12 = 0.40`}</M>.</>
            ]}
            answer="$0.40 per can"
          />

          <Example
            problem={"Maria drove from her home to her sister's house, a distance of 165 miles, in 3 hours. Coming back, traffic was heavy and the trip took 5 hours. What was her average speed for the entire round trip?"}
            steps={[
              <>Total distance: round trip is <M>{`165 × 2 = 330`}</M> miles.</>,
              <>Total time: <M>{`3 + 5 = 8`}</M> hours.</>,
              <>Average speed: total distance ÷ total time = <M>{`330 ÷ 8 = 41.25`}</M> mph.</>
            ]}
            answer="41.25 mph"
          />

          <Callout kind="warn" title="Average speed ≠ average of speeds">
            Don't average the two speeds — you must use total distance over total time. Going 60 mph for 1 hour then 30 mph for 2 hours is <strong>not</strong> 45 mph average.
          </Callout>
        </>
      )
    },
    {
      id: 'numberline-vis',
      title: 'Number Line Reasoning',
      subtitle: 'Visualizing comparisons and signed numbers.',
      content: (
        <>
          <p>The number line is the simplest tool for ordering numbers and visualizing addition/subtraction. Numbers to the right are <strong>greater</strong>; numbers to the left are <strong>less</strong>.</p>
          <NumberLine min={-5} max={5} marks={[
            { x: -3, label: 'A', color: '#dc2626' },
            { x: 2, label: 'B', color: '#0ea5e9' },
            { x: 4, label: 'C', color: '#16a34a' }
          ]} />
          <p className="text-sm">Above: A is at −3, B is at 2, C is at 4. Order: A &lt; B &lt; C.</p>

          <Example
            problem={<>Find <M>{`−7 + 4`}</M> using a number line.</>}
            steps={[
              <>Start at −7.</>,
              <>"+4" means move 4 units to the right.</>,
              <>From −7, move right 4: −7 → −6 → −5 → −4 → −3.</>
            ]}
            answer="−3"
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Place value', def: 'The numerical value a digit has based on its position.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Quotient', def: 'The result of a division.', tag: 'OP' },
      { term: 'Product', def: 'The result of a multiplication.', tag: 'OP' },
      { term: 'Sum', def: 'The result of an addition.', tag: 'OP' },
      { term: 'Difference', def: 'The result of a subtraction.', tag: 'OP' },
      { term: 'Round', def: 'Replace digits to the right of a chosen place with 0s, adjusting up or down based on the next digit.', tag: 'METHOD' }
    ],
    laws: [
      { name: 'Order of operations (PEMDAS)', desc: 'Parentheses, Exponents, Multiplication/Division (left→right), Addition/Subtraction (left→right).' },
      { name: 'Distance = rate × time', desc: 'Rearrangeable: r = d/t and t = d/r.' },
      { name: 'Total cost = price × quantity', desc: 'Unit price = total cost ÷ quantity.' }
    ],
    methods: [
      { name: 'PEMDAS', expand: 'Please Excuse My Dear Aunt Sally', desc: 'Mnemonic for order of operations.' },
      { name: 'Translate then solve', desc: 'In word problems, write down the math expression first, then compute.' },
      { name: 'Estimate to sanity check', desc: 'Round to the nearest 10 or 100 and recompute mentally to spot huge errors.' }
    ]
  },
  questions: [
    {
      q: 'Round 42,861 to the nearest thousand.',
      type: 'mcq',
      choices: ['42,000', '42,900', '43,000', '43,900'],
      correct: 2,
      difficulty: 'E',
      explanation: 'Look at the hundreds digit: 8. Since 8 ≥ 5, round the thousands digit up from 2 to 3 → 43,000.'
    },
    {
      q: 'Compute 7 + 6 × (10 − 4) ÷ 3.',
      type: 'math',
      correct: 19,
      tolerance: 0,
      difficulty: 'M',
      explanation: 'Parens: 10−4=6. So 7 + 6 × 6 ÷ 3. Mul/div L→R: 6×6=36, 36÷3=12. Add: 7+12=19.'
    },
    {
      q: 'A store sells notebooks at $2.75 each. How much is 14 notebooks?',
      type: 'math',
      correct: 38.5,
      tolerance: 0.001,
      difficulty: 'E',
      explanation: '14 × 2.75 = 38.50.'
    },
    {
      q: 'A car travels 240 miles in 4 hours. What is its rate?',
      type: 'math',
      correct: 60,
      difficulty: 'E',
      explanation: 'r = d/t = 240/4 = 60 mph.'
    },
    {
      q: 'Which is the correct way to write "5 less than twice a number n"?',
      type: 'mcq',
      choices: ['5 − 2n', '2n − 5', '2(n − 5)', 'n/2 − 5'],
      correct: 1,
      difficulty: 'M',
      explanation: '"Twice a number" is 2n. "5 less than" means subtract 5 from it: 2n − 5.'
    },
    {
      q: 'Maria drove 180 miles at 60 mph and another 150 miles at 50 mph. What was her total time on the road?',
      type: 'math',
      correct: 6,
      difficulty: 'M',
      explanation: 'First leg: 180/60 = 3 hr. Second leg: 150/50 = 3 hr. Total: 6 hours.'
    },
    {
      q: 'Place these numbers in order from least to greatest: 8,304; 8,043; 8,340; 8,034.',
      type: 'mcq',
      choices: [
        '8,034 < 8,043 < 8,304 < 8,340',
        '8,043 < 8,034 < 8,304 < 8,340',
        '8,034 < 8,304 < 8,043 < 8,340',
        '8,340 < 8,304 < 8,043 < 8,034'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'All start with 8, then compare hundreds digit: 0,0,3,3. Among the two 0-hundreds numbers, tens are 3 and 4 → 8,034 < 8,043. Among the two 3-hundreds, tens are 0 and 4 → 8,304 < 8,340. Final: 8,034 < 8,043 < 8,304 < 8,340.'
    },
    {
      q: 'A school orders 24 boxes of pencils. Each box has 36 pencils. After distributing 750 pencils, how many remain?',
      type: 'math',
      correct: 114,
      difficulty: 'M',
      explanation: 'Total pencils: 24 × 36 = 864. Remaining: 864 − 750 = 114.'
    },
    {
      q: 'A bag of rice weighs 5 pounds and costs $4.20. What is the cost per pound?',
      type: 'math',
      correct: 0.84,
      tolerance: 0.001,
      difficulty: 'E',
      explanation: '$4.20 ÷ 5 = $0.84 per pound.'
    },
    {
      q: 'Computing 9² − 3 × 4 + 5 gives:',
      type: 'mcq',
      choices: ['74', '76', '70', '90'],
      correct: 0,
      difficulty: 'M',
      explanation: '9² = 81. 3×4 = 12. 81 − 12 + 5 = 74.'
    }
  ]
};
