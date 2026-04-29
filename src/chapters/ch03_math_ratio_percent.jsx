import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, Term } from '../components/Visual.jsx';

export default {
  id: 3,
  title: 'Math 3 — Ratio, Proportion & Percent',
  subtitle: 'Setting up proportions, the percent formula, simple interest, and percent change.',
  blocks: [
    {
      id: 'ratio-proportion',
      title: 'Ratios & Proportions',
      content: (
        <>
          <p>A <Term>ratio</Term> compares two quantities. Three ways to write the ratio of 3 cups flour to 2 cups sugar: <M>3:2</M>, "3 to 2", <Frac n="3" d="2" />.</p>
          <p>A <Term>proportion</Term> is two equal ratios. Solve them with <strong>cross-multiplication</strong>:</p>
          <Formula>a/b = c/d  →  a × d = b × c</Formula>

          <Example
            problem={<>Solve <Frac n="3" d="4" /> = <Frac n="x" d="20" />.</>}
            steps={[
              <>Cross-multiply: <M>{`3 × 20 = 4 × x`}</M>.</>,
              <>Compute: <M>{`60 = 4x`}</M>.</>,
              <>Divide: <M>{`x = 60 ÷ 4 = 15`}</M>.</>
            ]}
            answer="x = 15"
          />

          <Example
            problem='If 5 pounds of apples cost $4, how much do 12 pounds cost?'
            steps={[
              <>Set up the proportion. Be consistent: pounds with pounds, dollars with dollars. <Frac n="5" d="4" /> = <Frac n="12" d="x" /> (or <Frac n="$" d="lbs" />).</>,
              <>Cross-multiply: <M>{`5x = 4 × 12 = 48`}</M>.</>,
              <>Solve: <M>{`x = 48 ÷ 5 = 9.6`}</M>.</>
            ]}
            answer="$9.60"
          />

          <Callout kind="warn" title="Setup matters">
            Always label units in your proportion. Mixing them (e.g., apples on top of one side, pounds on top of the other) gives wrong answers.
          </Callout>

          <Example
            problem='A map scale says 1 inch = 25 miles. Two cities are 4.6 inches apart on the map. How many miles?'
            steps={[
              <>Setup: <Frac n="1 inch" d="25 mi" /> = <Frac n="4.6 inch" d="x mi" />.</>,
              <>Cross-multiply: <M>{`1 × x = 25 × 4.6`}</M>.</>,
              <>Compute: <M>{`x = 115`}</M>.</>
            ]}
            answer="115 miles"
          />
        </>
      )
    },
    {
      id: 'percent-basics',
      title: 'Percent Basics & Conversions',
      content: (
        <>
          <p>"Percent" literally means "per hundred." <M>37%</M> = <Frac n="37" d="100" /> = <M>0.37</M>.</p>
          <Table
            headers={['From', 'To', 'How']}
            rows={[
              ['Percent', 'Decimal', 'Move decimal 2 places left. 45% → 0.45.'],
              ['Decimal', 'Percent', 'Move decimal 2 places right. 0.08 → 8%.'],
              ['Percent', 'Fraction', 'Put over 100, simplify. 60% → 60/100 = 3/5.'],
              ['Fraction', 'Percent', 'Convert to decimal first, then ×100. 3/8 = 0.375 = 37.5%.']
            ]}
          />
        </>
      )
    },
    {
      id: 'percent-formula',
      title: 'The Percent Formula',
      content: (
        <>
          <Formula>part / whole = % / 100</Formula>
          <p>Three things, three questions. Whichever one is missing, you solve for it.</p>

          <Example
            problem='What is 18% of 250?'
            steps={[
              <>Identify: <strong>part = ?</strong>, whole = 250, % = 18.</>,
              <>Setup: <Frac n="part" d="250" /> = <Frac n="18" d="100" />.</>,
              <>Cross-multiply: <M>{`100 × part = 250 × 18 = 4,500`}</M>.</>,
              <>Solve: <M>{`part = 4,500 ÷ 100 = 45`}</M>.</>
            ]}
            answer="45"
          />

          <Example
            problem='15 is what percent of 60?'
            steps={[
              <>Identify: part = 15, whole = 60, % = ?.</>,
              <>Setup: <Frac n="15" d="60" /> = <Frac n="x" d="100" />.</>,
              <>Cross-multiply: <M>{`60x = 1,500`}</M>.</>,
              <>Solve: <M>{`x = 25`}</M>.</>
            ]}
            answer="25%"
          />

          <Example
            problem='30 is 12% of what number?'
            steps={[
              <>Identify: part = 30, whole = ?, % = 12.</>,
              <>Setup: <Frac n="30" d="x" /> = <Frac n="12" d="100" />.</>,
              <>Cross-multiply: <M>{`12x = 3,000`}</M>.</>,
              <>Solve: <M>{`x = 250`}</M>.</>
            ]}
            answer="250"
          />

          <Callout kind="tip" title="Decimal shortcut">
            "% of a number" → multiply by the decimal. <strong>18% of 250</strong> = <M>0.18 × 250 = 45</M>. Faster than the proportion when the calculator is available.
          </Callout>
        </>
      )
    },
    {
      id: 'simple-interest',
      title: 'Simple Interest',
      content: (
        <>
          <Formula label="Interest">I = P × R × T</Formula>
          <p><M>P</M> = principal (starting amount), <M>R</M> = annual interest rate as a decimal, <M>T</M> = time in years.</p>

          <Example
            problem='You invest $1,500 at 4% simple interest for 3 years. How much interest do you earn?'
            steps={[
              <>Identify: P = 1500, R = 0.04, T = 3.</>,
              <>Apply: <M>{`I = 1500 × 0.04 × 3`}</M>.</>,
              <>Compute: <M>{`1500 × 0.04 = 60`}</M>; then <M>{`60 × 3 = 180`}</M>.</>
            ]}
            answer="$180"
          />

          <Callout kind="warn" title="Time must be in years">
            If the problem says "8 months," convert: <M>{`8 ÷ 12 = 2/3`}</M> year. If it says "30 months," that's <M>{`30/12 = 2.5`}</M> years.
          </Callout>

          <Example
            problem='How much do you have to invest at 6% simple interest to earn $90 in 2 years?'
            steps={[
              <>Solve <M>{`I = PRT`}</M> for P: <M>{`P = I ÷ (R × T)`}</M>.</>,
              <>Plug in: <M>{`P = 90 ÷ (0.06 × 2) = 90 ÷ 0.12`}</M>.</>,
              <>Compute: <M>{`90 ÷ 0.12 = 750`}</M>.</>
            ]}
            answer="$750"
          />
        </>
      )
    },
    {
      id: 'percent-change',
      title: 'Percent of Change',
      content: (
        <>
          <Formula label="% change">% change = (new − old) / old × 100</Formula>
          <p>If positive, it's an increase; if negative, a decrease. Always divide by the <strong>original</strong> amount.</p>

          <Example
            problem='A sweater dropped from $40 to $30. What is the percent decrease?'
            steps={[
              <>Change = new − old = <M>{`30 − 40 = −10`}</M>.</>,
              <>Divide by original: <M>{`−10 ÷ 40 = −0.25`}</M>.</>,
              <>Convert to %: <M>{`−25%`}</M>, so a 25% decrease.</>
            ]}
            answer="25% decrease"
          />

          <Example
            problem='A stock rose from $80 to $96. Percent increase?'
            steps={[
              <>Change = <M>{`96 − 80 = 16`}</M>.</>,
              <>Divide by original: <M>{`16 ÷ 80 = 0.20`}</M>.</>,
              <>Convert: 20%.</>
            ]}
            answer="20% increase"
          />

          <Callout kind="formula" title="Discount and markup shortcuts">
            <div className="space-y-1">
              <div><strong>Sale price</strong> = original × (1 − discount %). 25% off $40 = <M>{`40 × 0.75 = $30`}</M>.</div>
              <div><strong>After markup</strong> = original × (1 + markup %). 30% markup on $50 = <M>{`50 × 1.30 = $65`}</M>.</div>
              <div><strong>After tax</strong> = price × (1 + tax %). 8% tax on $80 = <M>{`80 × 1.08 = $86.40`}</M>.</div>
            </div>
          </Callout>

          <Example
            problem='A jacket is on sale for 30% off the regular price of $85. What is the sale price after 7% sales tax?'
            steps={[
              <>Sale price: <M>{`85 × (1 − 0.30) = 85 × 0.70 = 59.50`}</M>.</>,
              <>Add tax: <M>{`59.50 × 1.07 = 63.665`}</M>.</>,
              <>Round to dollars and cents.</>
            ]}
            answer="$63.67"
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Ratio', def: 'A comparison of two quantities by division.' },
      { term: 'Proportion', def: 'An equation stating two ratios are equal.' },
      { term: 'Percent', def: 'A ratio out of 100 (per cent = "per hundred").' },
      { term: 'Principal', def: 'In interest problems, the starting amount of money.', tag: 'FIN', tagColor: 'green' },
      { term: 'Cross-multiplication', def: 'For a/b = c/d, a×d = b×c.', tag: 'TECH', tagColor: 'sky' }
    ],
    laws: [
      { name: 'Percent formula', desc: 'part/whole = %/100' },
      { name: 'Simple interest', desc: 'I = P·R·T (rate as decimal, time in years).' },
      { name: 'Percent change', desc: '(new − old)/old × 100' }
    ],
    methods: [
      { name: 'Decimal trick', desc: 'For "% of a number," multiply by the percent as a decimal.' },
      { name: 'Sale price', desc: 'Multiply by (1 − discount). Tax: multiply by (1 + tax rate).' },
      { name: 'Set up units', desc: 'In proportions, write units explicitly so numerators and denominators match.' }
    ]
  },
  questions: [
    { q: 'A scale model of a building uses 1 cm = 4 m. The model is 18 cm tall. How tall is the real building?', type: 'math', correct: 72, difficulty: 'E', explanation: '18 × 4 = 72 m.' },
    { q: 'What is 35% of 240?', type: 'math', correct: 84, difficulty: 'E', explanation: '0.35 × 240 = 84.' },
    { q: '21 is what percent of 84?', type: 'math', correct: 25, difficulty: 'E', explanation: '21/84 = 0.25 = 25%.' },
    { q: 'A $620 TV is on sale for 15% off. What is the sale price?', type: 'math', correct: 527, tolerance: 0.5, difficulty: 'M', explanation: '620 × 0.85 = 527.' },
    { q: 'A laptop\'s price went from $800 to $920. What is the percent increase?', type: 'math', correct: 15, tolerance: 0.5, difficulty: 'M', explanation: '(920−800)/800 = 120/800 = 0.15 = 15%.' },
    { q: 'You deposit $2,000 at 5% simple interest for 4 years. Total amount after 4 years?', type: 'math', correct: 2400, difficulty: 'M', explanation: 'I = 2000×0.05×4 = 400. Total = 2000+400 = 2400.' },
    { q: 'In a class of 32 students, 20 are girls. The ratio of girls to boys is:', type: 'mcq', choices: ['5:8', '5:3', '3:5', '20:32'], correct: 1, difficulty: 'E', explanation: 'Girls 20, boys 12. Ratio 20:12 = 5:3.' },
    { q: 'After a 25% discount, a coat costs $90. What was the original price?', type: 'math', correct: 120, difficulty: 'H', explanation: '90 = 0.75 × original. Original = 90/0.75 = 120.' },
    { q: 'A recipe for 6 servings needs 1.5 cups of broth. How much for 10 servings?', type: 'math', correct: 2.5, tolerance: 0.01, difficulty: 'M', explanation: '1.5/6 = x/10 → x = 1.5×10/6 = 2.5.' },
    { q: 'A stock dropped 20%, then rose 20% the next year. The final value compared to original is:', type: 'mcq', choices: ['the same', 'higher', 'lower', 'cannot be determined'], correct: 2, difficulty: 'H', explanation: 'Drop: ×0.80. Rise: ×1.20. Combined: 0.80 × 1.20 = 0.96 → 4% lower.' }
  ]
};
