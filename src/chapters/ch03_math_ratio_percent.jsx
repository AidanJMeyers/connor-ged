import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, Term } from '../components/Visual.jsx';

export default {
  id: 3,
  title: 'Math 3 — Ratio, Proportion & Percent',
  subtitle: 'The math of comparing one thing to another. Recipes, sale prices, interest, taxes, scaling — they all live here.',
  blocks: [
    {
      id: 'why-ratios',
      title: 'Why Ratios & Percents Matter',
      content: (
        <>
          <p>If you understand percents, the entire world of personal finance, statistics, sale signs, and political news suddenly makes sense. The GED tests this material heavily because it\'s the most directly useful math you\'ll ever learn — the gap between someone who can do basic percent math and someone who can\'t shows up in their paycheck.</p>

          <Callout kind="info" title="Three things that look different but are the same">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>A <strong>ratio</strong> compares two quantities (3 cups flour to 2 cups sugar).</li>
              <li>A <strong>fraction</strong> is a ratio of a part to a whole (3/8 of a pizza).</li>
              <li>A <strong>percent</strong> is a ratio with a denominator of 100 (37% = 37/100).</li>
            </ul>
            All three are about comparison. Once you see that, the chapter feels much smaller.
          </Callout>
        </>
      )
    },
    {
      id: 'ratio-proportion',
      title: 'Ratios & Proportions',
      content: (
        <>
          <p>A <Term>ratio</Term> compares two quantities by division. The ratio of 3 cups of flour to 2 cups of sugar can be written three ways — they all mean the same thing:</p>
          <Formula>3 : 2     "3 to 2"     <Frac n="3" d="2" /></Formula>

          <p>A <Term>proportion</Term> says two ratios are equal. If a recipe calls for 3 cups of flour and 2 cups of sugar, and you want to make a bigger version with 9 cups of flour, how much sugar? You need a proportion:</p>
          <Formula><Frac n="3" d="2" /> = <Frac n="9" d="x" /></Formula>

          <p>The cleanest way to solve a proportion is <Term>cross-multiplication</Term>: multiply each numerator by the OTHER denominator, and set those products equal.</p>
          <Callout kind="formula" title="Cross-multiplication">
            From <Frac n="a" d="b" /> = <Frac n="c" d="d" />, we get <M>a × d = b × c</M>.
          </Callout>

          <Example
            problem={<>Solve <Frac n="3" d="4" /> = <Frac n="x" d="20" />.</>}
            steps={[
              <>Cross-multiply: <M>{`3 × 20 = 4 × x`}</M>.</>,
              <>Compute: <M>{`60 = 4x`}</M>.</>,
              <>Divide both sides by 4: <M>{`x = 15`}</M>.</>,
              <>Sanity check: 15/20 should equal 3/4. Simplify 15/20 by 5: 3/4. ✓</>
            ]}
            answer="x = 15"
          />

          <Example
            problem='If 5 pounds of apples cost $4, how much do 12 pounds cost?'
            steps={[
              <>Set up the proportion. Be CONSISTENT with units: pounds-with-pounds on top of dollars-with-dollars.</>,
              <><Frac n="5 lb" d="$4" /> = <Frac n="12 lb" d="$x" />.</>,
              <>Cross-multiply: <M>{`5 × x = 4 × 12`}</M>.</>,
              <>Solve: <M>{`5x = 48`}</M> → <M>{`x = 48/5 = 9.6`}</M>.</>
            ]}
            answer="$9.60"
          />

          <Callout kind="warn" title="Setup matters — label your units">
            <p>The most common proportion mistake is mixing units (pounds on top of one ratio, dollars on top of the other). The fix: write the units beside each number when you set up the proportion. Both numerators must measure the same thing; both denominators must measure the same thing.</p>
            <p>Either of these setups works:</p>
            <ul className="list-disc ml-5 text-sm">
              <li><Frac n="lb" d="$" /> = <Frac n="lb" d="$" /> (pounds on top)</li>
              <li><Frac n="$" d="lb" /> = <Frac n="$" d="lb" /> (dollars on top)</li>
            </ul>
            <p>What you can\'t do is put pounds on top of one and dollars on top of the other.</p>
          </Callout>

          <Example
            problem='A map scale says 1 inch = 25 miles. Two cities are 4.6 inches apart on the map. How many miles between them in reality?'
            steps={[
              <>Setup: <Frac n="1 inch" d="25 mi" /> = <Frac n="4.6 inch" d="x mi" />.</>,
              <>Cross-multiply: <M>{`1 × x = 25 × 4.6`}</M>.</>,
              <>Compute: <M>{`x = 115`}</M> miles.</>
            ]}
            answer="115 miles"
          />

          <Callout kind="tip" title="Real-world ratio uses">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Recipes</strong>: scale ingredients up or down.</li>
              <li><strong>Maps & blueprints</strong>: convert between drawing distance and real distance.</li>
              <li><strong>Currency exchange</strong>: convert between dollars and other currencies.</li>
              <li><strong>Mixing chemicals or paint</strong>: keep concentrations consistent.</li>
              <li><strong>Statistics</strong>: comparing population groups (e.g., 1 in 5 = 20%).</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'percent-basics',
      title: 'Percents — What They Actually Mean',
      content: (
        <>
          <p>"Percent" comes from Latin <em>per centum</em>, meaning "per hundred." A percent IS a fraction with a denominator of 100. The "%" symbol is just shorthand for "/100."</p>
          <Formula>37% = <Frac n="37" d="100" /> = 0.37</Formula>

          <p>So 37% of something is the same as multiplying that thing by 0.37. That\'s the whole secret. Once you internalize "percent → decimal → multiply," half of GED math becomes mechanical.</p>

          <Table
            headers={['Going from…', 'To…', 'Procedure', 'Example']}
            rows={[
              ['Percent', 'Decimal', 'Move decimal 2 places LEFT', '45% → 0.45'],
              ['Decimal', 'Percent', 'Move decimal 2 places RIGHT', '0.08 → 8%'],
              ['Percent', 'Fraction', 'Put over 100, simplify', '60% → 60/100 = 3/5'],
              ['Fraction', 'Percent', 'Convert to decimal first, then ×100', '3/8 = 0.375 = 37.5%']
            ]}
          />

          <Callout kind="tip" title="Mental anchor points">
            Always know in your head where these are: <strong>10% = ×0.1</strong>, <strong>50% = ÷2</strong>, <strong>25% = ÷4</strong>, <strong>75% = three-quarters</strong>, <strong>1% = ÷100</strong>. Build any other percent by combining these. "30% of $80" = "10% three times" = $8 + $8 + $8 = $24.
          </Callout>
        </>
      )
    },
    {
      id: 'percent-formula',
      title: 'The Percent Formula — One Tool, Three Question Types',
      content: (
        <>
          <Formula><Frac n="part" d="whole" /> = <Frac n="%" d="100" /></Formula>

          <p>This proportion has THREE parts: the "part," the "whole," and the percent. A typical question gives you two of them and asks for the third. There are exactly three flavors of percent question, and they all use this formula.</p>

          <Table
            headers={['Question', 'Looks like', 'Solve for']}
            rows={[
              ['Type 1: find the part', '"What is 18% of 250?"', 'part'],
              ['Type 2: find the percent', '"15 is what percent of 60?"', 'percent'],
              ['Type 3: find the whole', '"30 is 12% of what number?"', 'whole']
            ]}
          />

          <Example
            problem='What is 18% of 250?'
            steps={[
              <>Identify pieces. PART = ? (what we want). WHOLE = 250. PERCENT = 18.</>,
              <>Set up: <Frac n="part" d="250" /> = <Frac n="18" d="100" />.</>,
              <>Cross-multiply: <M>{`100 × part = 250 × 18 = 4,500`}</M>.</>,
              <>Solve: part = 4,500 ÷ 100 = 45.</>,
              <>Decimal shortcut check: 0.18 × 250 = 45. ✓</>
            ]}
            answer="45"
          />

          <Example
            problem='15 is what percent of 60?'
            steps={[
              <>Identify: PART = 15. WHOLE = 60. PERCENT = ?.</>,
              <>Setup: <Frac n="15" d="60" /> = <Frac n="x" d="100" />.</>,
              <>Cross-multiply: <M>{`60x = 1,500`}</M>.</>,
              <>Solve: x = 25.</>
            ]}
            answer="25%"
          />

          <Example
            problem='30 is 12% of what number?'
            steps={[
              <>Identify: PART = 30. PERCENT = 12. WHOLE = ?.</>,
              <>Setup: <Frac n="30" d="x" /> = <Frac n="12" d="100" />.</>,
              <>Cross-multiply: <M>{`12x = 3,000`}</M>.</>,
              <>Solve: x = 250.</>
            ]}
            answer="250"
          />

          <Callout kind="formula" title="The decimal shortcut for Type 1">
            <p>"X% of a number" is the most common percent question. Skip the proportion — just multiply the number by the percent as a decimal.</p>
            <ul className="list-disc ml-5 text-sm">
              <li>18% of 250 = <M>0.18 × 250 = 45</M></li>
              <li>5% of 1,200 = <M>0.05 × 1,200 = 60</M></li>
              <li>120% of 80 = <M>1.20 × 80 = 96</M></li>
            </ul>
            <p>This is much faster than the proportion when you have a calculator.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'simple-interest',
      title: 'Simple Interest — Where Banks and Savings Live',
      content: (
        <>
          <p>When you put money in a savings account or take out a loan, you earn (or pay) <Term>interest</Term>. The simplest case is what the GED tests: <Term>simple interest</Term>, where the interest is calculated only on the original amount, not on previous interest.</p>

          <Formula label="Simple interest"><M>I = P · R · T</M></Formula>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><M>P</M> = <Term>principal</Term> — the original amount of money.</li>
            <li><M>R</M> = the interest rate, expressed as a <strong>decimal</strong> (5% = 0.05).</li>
            <li><M>T</M> = the time, in <strong>years</strong>.</li>
            <li><M>I</M> = the interest earned (or owed) at the end.</li>
          </ul>

          <Example
            problem='You invest $1,500 at 4% simple interest for 3 years. How much interest do you earn?'
            steps={[
              <>Identify: P = 1500, R = 0.04, T = 3.</>,
              <>Apply: <M>{`I = 1500 × 0.04 × 3`}</M>.</>,
              <>Compute: 1500 × 0.04 = 60. Then 60 × 3 = 180.</>
            ]}
            answer="$180"
          />

          <Callout kind="warn" title="Time MUST be in years">
            <p>If a problem says "8 months," convert to years: 8/12 = 2/3 year.</p>
            <p>"30 months" → 30/12 = 2.5 years.</p>
            <p>Forgetting this step is a common error.</p>
          </Callout>

          <Example
            problem='How much do you have to invest at 6% simple interest to earn $90 in 2 years?'
            steps={[
              <>Solve <M>I = PRT</M> for P. Divide both sides by R·T: <M>P = I/(R·T)</M>.</>,
              <>Plug in: P = 90 / (0.06 × 2) = 90 / 0.12.</>,
              <>= 750.</>
            ]}
            answer="$750"
          />

          <Example
            problem='You take a 9-month loan of $400 at 8% simple interest. What total amount do you repay?'
            steps={[
              <>Convert time: 9 months = 9/12 = 0.75 years.</>,
              <>Compute interest: I = 400 × 0.08 × 0.75 = 24.</>,
              <>Total repaid = principal + interest = 400 + 24 = 424.</>
            ]}
            answer="$424"
          />
        </>
      )
    },
    {
      id: 'percent-change',
      title: 'Percent of Change — Increases, Decreases, Discounts, Markups, Tax',
      content: (
        <>
          <Formula label="Percent change"><M>{`% change = (new − old) / old × 100`}</M></Formula>
          <p>Critical: always divide by the <strong>ORIGINAL</strong> amount, not the new one. A positive answer means an increase; a negative means a decrease.</p>

          <Example
            problem='A sweater dropped from $40 to $30. What is the percent decrease?'
            steps={[
              <>Change = new − old = 30 − 40 = −10.</>,
              <>Divide by ORIGINAL: −10 / 40 = −0.25.</>,
              <>Convert to percent: −25%, so a 25% DECREASE.</>
            ]}
            answer="25% decrease"
          />

          <Example
            problem='A stock rose from $80 to $96. What is the percent increase?'
            steps={[
              <>Change = 96 − 80 = 16.</>,
              <>Divide by original: 16 / 80 = 0.20.</>,
              <>= 20% increase.</>
            ]}
            answer="20% increase"
          />

          <Callout kind="formula" title="Discount, markup, and tax shortcuts">
            <p>Instead of computing the change separately and then adding/subtracting, you can multiply directly by a single factor:</p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Sale price</strong> = original × (1 − discount %). 25% off $40 = <M>40 × 0.75 = $30</M>.</li>
              <li><strong>After markup</strong> = original × (1 + markup %). 30% markup on $50 = <M>50 × 1.30 = $65</M>.</li>
              <li><strong>After tax</strong> = price × (1 + tax %). 8% tax on $80 = <M>80 × 1.08 = $86.40</M>.</li>
              <li><strong>After raise</strong> = old salary × (1 + raise %). 4% raise on $52,000 = <M>52,000 × 1.04 = $54,080</M>.</li>
            </ul>
          </Callout>

          <Example
            problem='A jacket is on sale for 30% off the regular price of $85. What is the final price after 7% sales tax?'
            steps={[
              <>Sale price first: 85 × (1 − 0.30) = 85 × 0.70 = 59.50.</>,
              <>Then tax: 59.50 × 1.07 = 63.665.</>,
              <>Round to dollars and cents: $63.67.</>
            ]}
            answer="$63.67"
          />

          <Callout kind="warn" title="Order matters — sometimes">
            <p>If a question says "30% off, then 7% tax," doing them in either order gives the same answer (multiplication is commutative). But if the question says "30% off the post-tax price" or "tax applied to the discounted price," read carefully.</p>
            <p>A trickier case: a 50% markup followed by a 50% discount does NOT bring you back to the original. $100 × 1.50 = $150, then $150 × 0.50 = $75. Each percent change is a multiplier, and the multipliers don\'t cancel.</p>
          </Callout>

          <Example
            problem='A $620 TV is on sale for 15% off. What is the sale price?'
            steps={[
              <>620 × (1 − 0.15) = 620 × 0.85.</>,
              <>= 527.</>
            ]}
            answer="$527"
          />

          <Example
            problem='After a 25% discount, a coat costs $90. What was the original price?'
            steps={[
              <>$90 is 75% of the original (since 25% was taken off).</>,
              <>90 = 0.75 × original. Solve: original = 90 / 0.75.</>,
              <>= 120.</>
            ]}
            answer="$120"
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Ratio', def: 'A comparison of two quantities by division.' },
      { term: 'Proportion', def: 'An equation stating two ratios are equal.' },
      { term: 'Percent', def: 'A ratio out of 100 (per cent = "per hundred"). Move decimal two places to convert to/from decimal.' },
      { term: 'Principal', def: 'In interest problems, the starting amount of money.', tag: 'FIN', tagColor: 'green' },
      { term: 'Cross-multiplication', def: 'For a/b = c/d, a×d = b×c.', tag: 'TECH', tagColor: 'sky' },
      { term: 'Markup', def: 'Increase from cost price to selling price.' },
      { term: 'Discount', def: 'Reduction from regular price to sale price.' }
    ],
    laws: [
      { name: 'Percent formula', desc: 'part/whole = %/100' },
      { name: 'Simple interest', desc: 'I = P·R·T (rate as decimal, time in years).' },
      { name: 'Percent change', desc: '(new − old)/old × 100. Always divide by ORIGINAL.' },
      { name: 'Sale price multiplier', desc: 'After x% discount: price × (1 − x/100). After x% tax: price × (1 + x/100).' }
    ],
    methods: [
      { name: 'Decimal shortcut for "% of"', desc: 'Multiply by the percent as a decimal: 18% of 250 = 0.18 × 250 = 45.' },
      { name: 'Set up units in proportions', desc: 'Always label numerator and denominator with units to avoid mixed setups.' },
      { name: '10% mental math', desc: '10% of any number is just that number with the decimal moved one place left. Build other percents from there: 30% = three 10%s; 5% = half of 10%; 1% = 10% / 10.' }
    ]
  },
  questions: [
    { q: 'A scale model of a building uses 1 cm = 4 m. The model is 18 cm tall. How tall is the real building?', type: 'math', correct: 72, difficulty: 'E', explanation: '18 cm × (4 m per cm) = 72 m.' },
    { q: 'What is 35% of 240?', type: 'math', correct: 84, difficulty: 'E', explanation: '0.35 × 240 = 84.' },
    { q: '21 is what percent of 84?', type: 'math', correct: 25, difficulty: 'E', explanation: '21/84 = 0.25 = 25%.' },
    { q: 'A $620 TV is on sale for 15% off. What is the sale price?', type: 'math', correct: 527, tolerance: 0.5, difficulty: 'M', explanation: '620 × (1 − 0.15) = 620 × 0.85 = 527.' },
    { q: 'A laptop\'s price went from $800 to $920. What is the percent increase?', type: 'math', correct: 15, tolerance: 0.5, difficulty: 'M', explanation: '(920 − 800)/800 = 120/800 = 0.15 = 15%.' },
    { q: 'You deposit $2,000 at 5% simple interest for 4 years. Total amount in account after 4 years?', type: 'math', correct: 2400, difficulty: 'M', explanation: 'I = 2000 × 0.05 × 4 = 400. Total = 2000 + 400 = 2400.' },
    { q: 'In a class of 32 students, 20 are girls. The ratio of girls to boys is:', type: 'mcq', choices: ['5:8', '5:3', '3:5', '20:32'], correct: 1, difficulty: 'E', explanation: 'Girls 20, boys 12 (since 32 − 20 = 12). Ratio 20:12 simplifies (÷4) to 5:3.' },
    { q: 'After a 25% discount, a coat costs $90. What was the original price?', type: 'math', correct: 120, difficulty: 'H', explanation: '$90 is 75% of original. Original = 90/0.75 = 120.' },
    { q: 'A recipe for 6 servings needs 1.5 cups of broth. How much for 10 servings?', type: 'math', correct: 2.5, tolerance: 0.01, difficulty: 'M', explanation: 'Proportion: 1.5/6 = x/10. Cross-multiply: 6x = 15. x = 2.5 cups.' },
    { q: 'A stock dropped 20%, then rose 20% the next year. The final value compared to the original is:', type: 'mcq', choices: ['the same', 'higher', 'lower', 'cannot be determined'], correct: 2, difficulty: 'H', explanation: 'Drop: factor 0.80. Rise: factor 1.20. Combined: 0.80 × 1.20 = 0.96 → 4% lower than original.' },
    { q: 'A loan of $1,000 at 6% simple interest for 18 months has total interest of:', type: 'math', correct: 90, difficulty: 'M', explanation: 'Time = 18 months = 1.5 years. I = 1000 × 0.06 × 1.5 = 90.' },
    { q: 'A meal costs $48. With a 15% tip, total comes to:', type: 'math', correct: 55.20, tolerance: 0.05, difficulty: 'M', explanation: '48 × 1.15 = 55.20.' }
  ]
};
