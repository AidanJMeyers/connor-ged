import React from 'react';
import { Callout, Table, Formula, M, Frac, Steps, Example, FractionBar, NumberLine, Term } from '../components/Visual.jsx';

export default {
  id: 2,
  title: 'Math 2 — Decimals & Fractions',
  subtitle: 'Decimal place value, the four operations on decimals and fractions, conversions, and number-line placement.',
  blocks: [
    {
      id: 'decimal-basics',
      title: 'Decimal Basics & Place Value',
      content: (
        <>
          <p>Decimals extend place value to the <strong>right</strong> of the decimal point. Each step right divides by 10.</p>
          <Table
            headers={['Place', 'Value', 'In 207.4583']}
            rows={[
              ['Hundreds', '100', '2 → 200'],
              ['Tens', '10', '0 → 0'],
              ['Ones', '1', '7 → 7'],
              ['Tenths', '1/10 = 0.1', '4 → 0.4'],
              ['Hundredths', '1/100 = 0.01', '5 → 0.05'],
              ['Thousandths', '1/1000 = 0.001', '8 → 0.008'],
              ['Ten-thousandths', '1/10,000', '3 → 0.0003']
            ]}
          />

          <Callout kind="tip" title="Reading decimals out loud">
            Read the whole-number part, say "and" for the decimal point, then read the decimal as a whole number followed by its smallest place. <M>207.4583</M> = "two hundred seven AND four thousand five hundred eighty-three ten-thousandths."
          </Callout>

          <p className="font-semibold mt-3">Comparing decimals</p>
          <p>Line up decimal points. Add trailing zeros so both numbers have the same number of decimal places. Then compare like whole numbers.</p>
          <Example
            problem={<>Which is larger, <M>0.4</M> or <M>0.385</M>?</>}
            steps={[
              <>Write with the same decimal places: <M>0.400</M> vs <M>0.385</M>.</>,
              <>Compare: 400 &gt; 385.</>
            ]}
            answer="0.4 is larger"
          />

          <p className="font-semibold mt-3">Rounding decimals</p>
          <Example
            problem={<>Round <M>3.4781</M> to the hundredths.</>}
            steps={[
              <>Hundredths digit is the second decimal: 7 in <M>3.4<u>7</u>81</M>.</>,
              <>Look right at thousandths: 8. Since 8 ≥ 5, round up.</>,
              <>7 → 8. Drop everything after: <M>3.48</M>.</>
            ]}
            answer="3.48"
          />
        </>
      )
    },
    {
      id: 'decimal-ops',
      title: 'Decimal Operations',
      content: (
        <>
          <p className="font-semibold">Adding & subtracting</p>
          <p>Always <strong>line up the decimal points</strong>. Add trailing zeros if needed.</p>
          <Example
            problem={<>Compute <M>{`12.5 + 3.075`}</M>.</>}
            steps={[
              <>Stack and align: <pre className="font-mono text-xs inline-block">{`  12.500
+  3.075
--------`}</pre></>,
              <>Add column by column from the right: 0+5=5, 0+7=7, 5+0=5, 2+3=5, 1+0=1.</>,
              <>Place decimal point straight down.</>
            ]}
            answer="15.575"
          />

          <p className="font-semibold mt-3">Multiplying decimals</p>
          <p>Multiply as if there were no decimal points. Then count the total number of decimal places in both factors and place that many decimal places in the answer.</p>
          <Example
            problem={<>Compute <M>{`2.4 × 1.5`}</M>.</>}
            steps={[
              <>Ignore decimals: <M>{`24 × 15 = 360`}</M>.</>,
              <>Count decimal places: 2.4 has 1, 1.5 has 1. Total = 2.</>,
              <>Place decimal: 360 → 3.60.</>
            ]}
            answer="3.60"
          />

          <p className="font-semibold mt-3">Dividing decimals</p>
          <p>Move the decimal in the divisor to the right until it's a whole number. Move the decimal in the dividend the <strong>same</strong> number of places. Then divide normally.</p>
          <Example
            problem={<>Compute <M>{`8.75 ÷ 0.25`}</M>.</>}
            steps={[
              <>Make divisor whole: 0.25 → 25 (moved 2 places right).</>,
              <>Move dividend the same: 8.75 → 875.</>,
              <>Divide: <M>{`875 ÷ 25 = 35`}</M>.</>
            ]}
            answer="35"
          />
        </>
      )
    },
    {
      id: 'fraction-basics',
      title: 'Fraction Basics',
      content: (
        <>
          <p>A fraction <Frac n="a" d="b" /> means "<M>a</M> parts out of <M>b</M> equal parts." The top is the <Term>numerator</Term>; the bottom is the <Term>denominator</Term>.</p>
          <FractionBar filled={3} total={8} />
          <p className="text-sm">Above: <Frac n="3" d="8" /> shaded.</p>

          <p className="font-semibold mt-3">Equivalent fractions</p>
          <p>Multiply or divide top and bottom by the same nonzero number. <Frac n="1" d="2" /> = <Frac n="2" d="4" /> = <Frac n="3" d="6" /> = <Frac n="50" d="100" />.</p>

          <p className="font-semibold mt-3">Simplifying</p>
          <Example
            problem={<>Simplify <Frac n="18" d="24" />.</>}
            steps={[
              <>Find the largest number that divides both: GCF of 18 and 24 is 6.</>,
              <>Divide top and bottom by 6: 18÷6 = 3, 24÷6 = 4.</>,
              <>Result: <Frac n="3" d="4" />.</>
            ]}
            answer={<Frac n="3" d="4" />}
          />

          <p className="font-semibold mt-3">Mixed numbers ↔ improper fractions</p>
          <Example
            problem={<>Convert <M>2 ⅗</M> (two and three-fifths) to an improper fraction.</>}
            steps={[
              <>Multiply whole part by denominator: <M>{`2 × 5 = 10`}</M>.</>,
              <>Add numerator: <M>{`10 + 3 = 13`}</M>.</>,
              <>Place over the same denominator: <Frac n="13" d="5" />.</>
            ]}
            answer={<Frac n="13" d="5" />}
          />

          <Example
            problem={<>Convert <Frac n="17" d="3" /> to a mixed number.</>}
            steps={[
              <>Divide: <M>{`17 ÷ 3 = 5`}</M> remainder <M>2</M>.</>,
              <>Whole = 5, fractional = <Frac n="2" d="3" />.</>
            ]}
            answer={<>5 <Frac n="2" d="3" /></>}
          />
        </>
      )
    },
    {
      id: 'fraction-ops',
      title: 'Fraction Operations',
      content: (
        <>
          <p className="font-semibold">Adding/subtracting — must have a common denominator.</p>
          <Example
            problem={<>Compute <Frac n="2" d="3" /> + <Frac n="1" d="4" />.</>}
            steps={[
              <>Find LCD of 3 and 4 → 12.</>,
              <>Convert: <Frac n="2" d="3" /> = <Frac n="8" d="12" />, <Frac n="1" d="4" /> = <Frac n="3" d="12" />.</>,
              <>Add numerators: <Frac n="8" d="12" /> + <Frac n="3" d="12" /> = <Frac n="11" d="12" />.</>
            ]}
            answer={<Frac n="11" d="12" />}
          />

          <p className="font-semibold mt-3">Multiplying — multiply straight across.</p>
          <Example
            problem={<>Compute <Frac n="3" d="5" /> × <Frac n="10" d="9" />.</>}
            steps={[
              <>Multiply tops: <M>3 × 10 = 30</M>.</>,
              <>Multiply bottoms: <M>5 × 9 = 45</M>.</>,
              <>Result: <Frac n="30" d="45" />. Simplify by dividing by GCF 15: <Frac n="2" d="3" />.</>
            ]}
            answer={<Frac n="2" d="3" />}
          />
          <Callout kind="tip" title="Pro shortcut">Cross-cancel before multiplying. <Frac n="3" d="5" /> × <Frac n="10" d="9" />: the 5 and 10 share a factor of 5; the 3 and 9 share 3. After cancelling: <Frac n="1" d="1" /> × <Frac n="2" d="3" /> = <Frac n="2" d="3" />.</Callout>

          <p className="font-semibold mt-3">Dividing — multiply by the reciprocal ("flip and multiply").</p>
          <Example
            problem={<>Compute <Frac n="4" d="7" /> ÷ <Frac n="2" d="3" />.</>}
            steps={[
              <>Flip the second fraction: <Frac n="2" d="3" /> → <Frac n="3" d="2" />.</>,
              <>Multiply: <Frac n="4" d="7" /> × <Frac n="3" d="2" /> = <Frac n="12" d="14" />.</>,
              <>Simplify by 2: <Frac n="6" d="7" />.</>
            ]}
            answer={<Frac n="6" d="7" />}
          />

          <Example
            problem={<>A recipe calls for <Frac n="3" d="4" /> cup of sugar. You want to make <M>2 ½</M> times the recipe. How much sugar?</>}
            steps={[
              <>Convert mixed to improper: <M>2 ½</M> = <Frac n="5" d="2" />.</>,
              <>Multiply: <Frac n="3" d="4" /> × <Frac n="5" d="2" /> = <Frac n="15" d="8" />.</>,
              <>Convert back: <Frac n="15" d="8" /> = <M>1 ⅞</M> cups.</>
            ]}
            answer={<>1 <Frac n="7" d="8" /> cups</>}
          />
        </>
      )
    },
    {
      id: 'frac-dec-conversion',
      title: 'Fraction ↔ Decimal Conversions',
      content: (
        <>
          <Formula label="To decimal">fraction → decimal: divide top by bottom</Formula>
          <Formula label="To fraction">decimal → fraction: write digits over the place value, then simplify</Formula>

          <Example
            problem={<>Convert <Frac n="3" d="8" /> to a decimal.</>}
            steps={[
              <>Divide: <M>{`3 ÷ 8 = 0.375`}</M>.</>
            ]}
            answer="0.375"
          />

          <Example
            problem={<>Convert <M>0.65</M> to a fraction in lowest terms.</>}
            steps={[
              <>Two decimal places → place over 100: <Frac n="65" d="100" />.</>,
              <>GCF of 65 and 100 is 5. Divide both: <Frac n="13" d="20" />.</>
            ]}
            answer={<Frac n="13" d="20" />}
          />

          <Callout kind="formula" title="Memorize these common conversions">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 text-sm">
              <div>½ = 0.5 = 50%</div>
              <div>¼ = 0.25 = 25%</div>
              <div>¾ = 0.75 = 75%</div>
              <div>⅓ ≈ 0.333 ≈ 33.3%</div>
              <div>⅔ ≈ 0.667 ≈ 66.7%</div>
              <div>⅕ = 0.2 = 20%</div>
              <div>⅛ = 0.125 = 12.5%</div>
              <div>3/8 = 0.375</div>
              <div>5/8 = 0.625</div>
            </div>
          </Callout>
        </>
      )
    },
    {
      id: 'numberline',
      title: 'Decimals & Fractions on the Number Line',
      content: (
        <>
          <p>Convert everything to a common form (usually decimals) to place them.</p>
          <NumberLine
            min={0}
            max={1}
            ticks={false}
            marks={[
              { x: 0.25, label: '¼', color: '#dc2626' },
              { x: 0.5, label: '½', color: '#16a34a' },
              { x: 0.75, label: '¾', color: '#0ea5e9' },
              { x: 0.4, label: '0.4', color: '#7c3aed' }
            ]}
          />
          <Example
            problem={<>Order from least to greatest: <Frac n="2" d="5" />, <M>0.45</M>, <Frac n="3" d="8" />.</>}
            steps={[
              <>Convert all to decimals: <Frac n="2" d="5" /> = 0.40; <M>0.45</M> = 0.45; <Frac n="3" d="8" /> = 0.375.</>,
              <>Order: 0.375 &lt; 0.40 &lt; 0.45.</>
            ]}
            answer={<><Frac n="3" d="8" /> &lt; <Frac n="2" d="5" /> &lt; 0.45</>}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Numerator', def: 'Top number of a fraction — how many parts you have.' },
      { term: 'Denominator', def: 'Bottom number of a fraction — how many equal parts in the whole.' },
      { term: 'LCD (Least Common Denominator)', def: 'The smallest number both denominators divide into evenly.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Reciprocal', def: 'Flipped fraction. Reciprocal of 3/4 is 4/3.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Improper fraction', def: 'Numerator ≥ denominator (e.g., 7/4).' },
      { term: 'Mixed number', def: 'Whole + fractional part (e.g., 1¾).' }
    ],
    laws: [
      { name: 'Decimal multiplication rule', desc: 'Total decimal places in product = sum of decimal places in factors.' },
      { name: 'Fraction division rule', desc: 'Divide by a fraction = multiply by its reciprocal.' },
      { name: 'Common-denominator rule', desc: 'Add or subtract fractions only after converting to a common denominator.' }
    ],
    methods: [
      { name: 'KCF', expand: 'Keep, Change, Flip', desc: 'For fraction division: keep the first, change ÷ to ×, flip the second.' },
      { name: 'Cross-cancel', desc: 'Before multiplying fractions, divide a numerator and a denominator (from different fractions) by their GCF.' },
      { name: 'Line up the decimal', desc: 'For + and −, stack vertically with decimal points aligned.' }
    ]
  },
  questions: [
    { q: 'Compute 0.36 + 1.5.', type: 'math', correct: 1.86, tolerance: 0.001, difficulty: 'E', explanation: 'Align decimals: 0.36 + 1.50 = 1.86.' },
    { q: 'Compute 2.4 × 0.05.', type: 'math', correct: 0.12, tolerance: 0.001, difficulty: 'M', explanation: '24×5=120; total decimal places = 1+2 = 3, so 0.120.' },
    { q: 'Simplify 24/36.', type: 'mcq', choices: ['1/2', '2/3', '3/4', '4/6'], correct: 1, difficulty: 'E', explanation: 'GCF(24,36)=12. 24/12=2, 36/12=3 → 2/3.' },
    { q: 'Convert 5/8 to a decimal.', type: 'math', correct: 0.625, tolerance: 0.001, difficulty: 'E', explanation: '5÷8 = 0.625.' },
    { q: 'Compute 3/4 + 1/6 (as a decimal).', type: 'math', correct: 0.9166, tolerance: 0.005, difficulty: 'M', explanation: 'LCD = 12. 3/4 = 9/12, 1/6 = 2/12. Sum = 11/12 ≈ 0.917.' },
    { q: 'Compute (2/3) ÷ (4/9).', type: 'mcq', choices: ['8/27', '3/2', '6/12', '2/3'], correct: 1, difficulty: 'M', explanation: 'KCF: (2/3) × (9/4) = 18/12 = 3/2.' },
    { q: 'Round 14.0782 to the nearest hundredth.', type: 'mcq', choices: ['14.07', '14.08', '14.078', '14.10'], correct: 1, difficulty: 'E', explanation: 'Hundredths digit is 7. Next digit is 8 → round up: 14.08.' },
    { q: 'Order least to greatest: 0.6, 5/9, 11/18.', type: 'mcq', choices: ['0.6 < 5/9 < 11/18', '5/9 < 0.6 < 11/18', '11/18 < 0.6 < 5/9', '5/9 < 11/18 < 0.6'], correct: 1, difficulty: 'H', explanation: '5/9 ≈ 0.556; 0.6 = 0.600; 11/18 ≈ 0.611. So 5/9 < 0.6 < 11/18.' },
    { q: 'A board is 8.4 feet long. You cut it into pieces 0.7 ft each. How many pieces?', type: 'math', correct: 12, difficulty: 'M', explanation: '8.4 ÷ 0.7 = 84/7 = 12.' },
    { q: 'A recipe needs 2½ cups of flour. To make 3 batches, how much flour?', type: 'math', correct: 7.5, tolerance: 0.001, difficulty: 'M', explanation: '2.5 × 3 = 7.5 cups.' }
  ]
};
