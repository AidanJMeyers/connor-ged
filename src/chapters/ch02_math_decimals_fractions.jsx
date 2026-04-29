import React from 'react';
import { Callout, Table, Formula, M, Frac, Steps, Example, FractionBar, NumberLine, Term } from '../components/Visual.jsx';

export default {
  id: 2,
  title: 'Math 2 — Decimals & Fractions',
  subtitle: 'The two ways our culture writes "parts of a whole." How they relate, why both exist, and how to compute with each.',
  blocks: [
    {
      id: 'why-fractions-decimals',
      title: 'The Big Picture — Two Languages for Parts of a Whole',
      content: (
        <>
          <p>If you have one whole pizza and you take a slice, how do you describe what you took? You have a few options:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>As a fraction</strong>: "1 of the 8 slices" → <Frac n="1" d="8" /></li>
            <li><strong>As a decimal</strong>: "0.125 of the pizza"</li>
            <li><strong>As a percent</strong>: "12.5% of the pizza"</li>
          </ul>
          <p>All three say the same thing. They\'re three different <strong>languages</strong> for describing the same quantity. The GED expects you to be fluent in all three and to translate between them on demand. Chapter 3 covers percents in depth — this chapter is about fractions and decimals.</p>

          <Callout kind="info" title="When each form is most natural">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Fractions</strong> are best when the parts are exact and small — recipes ("¾ cup flour"), tools ("⅝-inch wrench"), music ("4/4 time").</li>
              <li><strong>Decimals</strong> are best for measurements, money, and anything you compute with — a calculator only really speaks decimal.</li>
              <li><strong>Percents</strong> are best for comparisons and statistics — "27% rise," "8% sales tax."</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'decimal-basics',
      title: 'Decimals — Place Value to the Right',
      content: (
        <>
          <p>Decimals just extend the place-value pattern from chapter 1 to the <strong>right</strong> of the decimal point. Each step right divides by 10.</p>
          <Table
            headers={['Place', 'Value of 1 in this place', 'In 207.4583']}
            rows={[
              ['Hundreds', '100', '2 → 200'],
              ['Tens', '10', '0 → 0'],
              ['Ones', '1', '7 → 7'],
              ['Decimal point', '.', ''],
              ['Tenths', '1/10 = 0.1', '4 → 0.4'],
              ['Hundredths', '1/100 = 0.01', '5 → 0.05'],
              ['Thousandths', '1/1,000 = 0.001', '8 → 0.008'],
              ['Ten-thousandths', '1/10,000 = 0.0001', '3 → 0.0003']
            ]}
          />

          <p>The decimal point is just a marker — it tells you where the "ones" place ends and the fractional places begin. So <M>207.4583</M> is really:</p>
          <Formula><M>{`200 + 7 + 0.4 + 0.05 + 0.008 + 0.0003`}</M></Formula>

          <Callout kind="tip" title="Reading decimals out loud">
            Say the whole-number part normally. At the point, say "and." Then read the decimal as a whole number followed by its smallest place: <M>207.4583</M> = "two hundred seven AND four thousand five hundred eighty-three ten-thousandths." For everyday use, "two oh seven point four five eight three" is fine.
          </Callout>

          <Callout kind="warn" title="Adding extra zeros never changes a decimal\'s value">
            <p><M>0.4</M>, <M>0.40</M>, and <M>0.400</M> are all the same number — just like 4 dollars and 4.00 dollars and 4.0000 dollars are all the same. Trailing zeros after the decimal point are decoration; they show precision, not size.</p>
            <p>This trick is useful: when comparing decimals with different lengths, add trailing zeros to make them match length. Suddenly the comparison is just like comparing whole numbers.</p>
          </Callout>

          <p className="font-semibold mt-4">Comparing decimals — the "match-the-length" trick</p>
          <Example
            problem={<>Which is larger, <M>0.4</M> or <M>0.385</M>?</>}
            steps={[
              <>Pad to the same length: <M>0.400</M> vs <M>0.385</M>.</>,
              <>Now compare like 3-digit whole numbers: 400 vs 385. 400 wins.</>,
              <>So 0.4 is larger.</>
            ]}
            answer="0.4"
          />

          <Callout kind="warn" title="The classic mistake">
            People often think <M>0.385</M> is bigger than <M>0.4</M> because "385 is bigger than 4." That ignores place value. <M>0.385</M> is "385 thousandths" while <M>0.4</M> is "400 thousandths." Padding zeros prevents this trap.
          </Callout>

          <p className="font-semibold mt-4">Rounding decimals</p>
          <p>Same rule as for whole numbers — find the place, look at the next digit, round up if 5 or more.</p>
          <Example
            problem={<>Round <M>3.4781</M> to the nearest hundredth.</>}
            steps={[
              <>Hundredths digit is the second after the point: <strong>7</strong> in <M>3.4<u>7</u>81</M>.</>,
              <>Decider digit (thousandths) is 8 — that\'s "5 or more," so round up.</>,
              <>7 → 8. Drop everything after the hundredths place: <M>3.48</M>.</>
            ]}
            answer="3.48"
          />

          <Example
            problem={<>Round <M>$129.764</M> to the nearest cent.</>}
            steps={[
              <>"Cent" is the hundredths place. Hundredths digit: 6 in 129.7<u>6</u>4.</>,
              <>Decider: 4. That\'s "4 or less," so 6 stays.</>,
              <>Drop the rest: <M>$129.76</M>.</>
            ]}
            answer="$129.76"
          />
        </>
      )
    },
    {
      id: 'decimal-ops',
      title: 'Adding, Subtracting, Multiplying & Dividing Decimals',
      content: (
        <>
          <p className="font-semibold">Adding and subtracting — line up the decimal points</p>
          <p>The single rule for adding or subtracting decimals is: <strong>line up the decimal points vertically</strong>. Then add column by column just like whole numbers. Pad with zeros if the lengths differ.</p>

          <Example
            problem={<>Compute <M>{`12.5 + 3.075`}</M>.</>}
            steps={[
              <>Stack with decimals aligned, padding 12.5 → 12.500 so both have 3 decimal places:
                <pre className="font-mono text-xs mt-1">{`  12.500
+  3.075
--------`}</pre></>,
              <>Add right-to-left: 0+5=5, 0+7=7, 5+0=5, 2+3=5, 1+0=1.</>,
              <>Place the decimal point straight down from the operands.</>
            ]}
            answer="15.575"
          />

          <p className="font-semibold mt-4">Multiplying decimals — count the places</p>
          <p>Two-step procedure that\'s much faster than it sounds:</p>
          <Callout kind="formula" title="Multiplying decimals">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Multiply the numbers as if there were NO decimal points.</li>
              <li>Count the total number of decimal places in BOTH factors combined.</li>
              <li>Place that many decimal places in the answer, counting from the right.</li>
            </ol>
          </Callout>
          <Example
            problem={<>Compute <M>{`2.4 × 1.5`}</M>.</>}
            steps={[
              <>Ignore decimals: <M>{`24 × 15 = 360`}</M>.</>,
              <>Count decimal places: 2.4 has 1, 1.5 has 1. Total: 2 places.</>,
              <>Place the decimal in 360 so there are 2 digits to the right: 3.60 (or 3.6).</>
            ]}
            answer="3.6"
          />

          <Example
            problem={<>Compute <M>{`0.04 × 1.2`}</M>.</>}
            steps={[
              <>Without decimals: <M>{`4 × 12 = 48`}</M>.</>,
              <>Total decimal places: 2 + 1 = 3.</>,
              <>Place decimal: <strong>0.048</strong> (need to add a leading zero because 48 only has 2 digits).</>
            ]}
            answer="0.048"
          />

          <p className="font-semibold mt-4">Dividing decimals — slide both decimals the same way</p>
          <p>If the divisor (the number you\'re dividing BY) has a decimal, slide it to make it whole. Slide the dividend\'s decimal the SAME number of places. Then divide normally. The answer\'s decimal point sits directly above the dividend\'s NEW decimal position.</p>
          <Example
            problem={<>Compute <M>{`8.75 ÷ 0.25`}</M>.</>}
            steps={[
              <>Divisor 0.25 → slide decimal 2 places right → 25 (whole now).</>,
              <>Slide dividend the same: 8.75 → 875.</>,
              <>Divide: <M>{`875 ÷ 25 = 35`}</M>.</>
            ]}
            answer="35"
          />

          <Callout kind="tip" title="Why the sliding trick works">
            Sliding both decimals by the same number of places multiplies both the dividend and divisor by the same power of 10 (here, by 100). When you scale both numbers in a division by the same factor, the answer doesn\'t change. <M>{`8.75/0.25 = 875/25`}</M> — same answer, just easier.
          </Callout>
        </>
      )
    },
    {
      id: 'fraction-basics',
      title: 'Fractions — What the Top and Bottom Mean',
      content: (
        <>
          <p>A <Term>fraction</Term> like <Frac n="3" d="8" /> means "3 of 8 equal parts of the whole." The bottom number (<Term>denominator</Term>) tells you how many equal parts the whole is cut into. The top number (<Term>numerator</Term>) tells you how many of those parts you have.</p>

          <FractionBar filled={3} total={8} />
          <p className="text-sm text-center">The whole is cut into 8 equal parts; 3 are shaded → <Frac n="3" d="8" />.</p>

          <Callout kind="info" title="Mnemonic for top vs bottom">
            <strong>D</strong>enominator is on the <strong>D</strong>own. The numerator is on top (numerator → up).
          </Callout>

          <p className="font-semibold mt-4">Equivalent fractions — same value, different forms</p>
          <p>You can multiply (or divide) the top and bottom of a fraction by the same nonzero number, and the value doesn\'t change. That\'s because multiplying top and bottom by the same number is really multiplying by 1 — and 1 doesn\'t change anything.</p>

          <Formula><Frac n="1" d="2" /> = <Frac n="2" d="4" /> = <Frac n="3" d="6" /> = <Frac n="50" d="100" /> = <Frac n="500" d="1000" /></Formula>

          <p>This is why <Frac n="50" d="100" /> equals <Frac n="1" d="2" /> equals 50%.</p>

          <p className="font-semibold mt-4">Simplifying ("reducing") fractions</p>
          <p>To put a fraction in <Term>lowest terms</Term>, divide top and bottom by their <Term>greatest common factor (GCF)</Term> — the biggest number that goes into both evenly.</p>

          <Example
            problem={<>Simplify <Frac n="18" d="24" />.</>}
            steps={[
              <>Find the GCF of 18 and 24. Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. The biggest in both lists: 6.</>,
              <>Divide top and bottom by 6: 18÷6 = 3; 24÷6 = 4.</>,
              <>Result: <Frac n="3" d="4" />.</>
            ]}
            answer={<Frac n="3" d="4" />}
          />

          <Callout kind="tip" title="Don\'t know the GCF? Just keep dividing by small numbers">
            If you can\'t spot the GCF, simplify in stages. <Frac n="18" d="24" />: both even → divide by 2 → <Frac n="9" d="12" />. Both divisible by 3 → divide by 3 → <Frac n="3" d="4" />. Same answer. Multi-stage simplification always works.
          </Callout>

          <p className="font-semibold mt-4">Mixed numbers ↔ improper fractions</p>
          <p>An <Term>improper fraction</Term> has a numerator ≥ its denominator (like <Frac n="13" d="5" />). A <Term>mixed number</Term> has a whole part plus a proper fraction (like <M>2 ⅗</M>). They represent the same amount; you switch between forms depending on what\'s easier for the problem.</p>

          <Example
            problem={<>Convert <M>2 ⅗</M> to an improper fraction.</>}
            steps={[
              <>Multiply the whole part by the denominator: <M>{`2 × 5 = 10`}</M>.</>,
              <>Add the numerator: <M>{`10 + 3 = 13`}</M>.</>,
              <>Place over the same denominator: <Frac n="13" d="5" />.</>
            ]}
            answer={<Frac n="13" d="5" />}
          />

          <Example
            problem={<>Convert <Frac n="17" d="3" /> to a mixed number.</>}
            steps={[
              <>Divide the top by the bottom. <M>{`17 ÷ 3 = 5`}</M> remainder <M>2</M>.</>,
              <>Whole part = quotient = 5. Fractional part = remainder over the original denominator = <Frac n="2" d="3" />.</>
            ]}
            answer={<>5 <Frac n="2" d="3" /></>}
          />
        </>
      )
    },
    {
      id: 'fraction-ops',
      title: 'Fraction Arithmetic — Add, Subtract, Multiply, Divide',
      content: (
        <>
          <p className="font-semibold">Adding & subtracting — must have a common denominator</p>
          <p>You can\'t directly add <Frac n="1" d="2" /> + <Frac n="1" d="3" /> because the pieces aren\'t the same size — half-pieces and third-pieces. You first need to rewrite both fractions with the same denominator (a "common denominator," ideally the smallest one — the <Term>LCD</Term>).</p>

          <Example
            problem={<>Compute <Frac n="2" d="3" /> + <Frac n="1" d="4" />.</>}
            steps={[
              <>Find the LCD of 3 and 4. Multiples of 4: 4, 8, 12, 16, ... 12 is the first multiple of 4 also divisible by 3. So LCD = 12.</>,
              <>Convert both: <Frac n="2" d="3" /> · <Frac n="4" d="4" /> = <Frac n="8" d="12" />. <Frac n="1" d="4" /> · <Frac n="3" d="3" /> = <Frac n="3" d="12" />.</>,
              <>Add the numerators (denominators stay): <Frac n="8" d="12" /> + <Frac n="3" d="12" /> = <Frac n="11" d="12" />.</>,
              <>Already in lowest terms (11 is prime, doesn\'t divide 12).</>
            ]}
            answer={<Frac n="11" d="12" />}
          />

          <Callout kind="tip" title="Quick LCD shortcut for two denominators">
            If the two denominators share no common factor (other than 1), the LCD is just their product. <Frac n="3" d="5" /> + <Frac n="1" d="7" /> → LCD = 5 × 7 = 35. If they DO share a factor, divide that factor out: e.g., 4 and 6 share a 2, so LCD = (4 × 6) ÷ 2 = 12.
          </Callout>

          <p className="font-semibold mt-4">Multiplying — straight across, no common denominator needed</p>
          <p>Multiplying fractions is the easy operation. Just multiply tops, multiply bottoms, simplify.</p>

          <Example
            problem={<>Compute <Frac n="3" d="5" /> × <Frac n="10" d="9" />.</>}
            steps={[
              <>Tops: <M>{`3 × 10 = 30`}</M>.</>,
              <>Bottoms: <M>{`5 × 9 = 45`}</M>.</>,
              <>Result: <Frac n="30" d="45" />. Simplify by dividing top and bottom by GCF(30,45) = 15: <Frac n="2" d="3" />.</>
            ]}
            answer={<Frac n="2" d="3" />}
          />

          <Callout kind="tip" title="Pro shortcut — cross-cancel before multiplying">
            <p>You can simplify <em>across</em> different fractions before multiplying, as long as the cancellation is between a numerator and a denominator (not two numerators).</p>
            <p>In <Frac n="3" d="5" /> × <Frac n="10" d="9" />: the 5 in one denominator and the 10 in the other numerator share a factor of 5. Cross-cancel: 5 → 1 and 10 → 2. The 3 in one numerator and 9 in the other denominator share 3. Cross-cancel: 3 → 1 and 9 → 3. Now multiply the leftovers: <Frac n="1" d="1" /> × <Frac n="2" d="3" /> = <Frac n="2" d="3" />.</p>
            <p>This saves a lot of simplification work on big fractions.</p>
          </Callout>

          <p className="font-semibold mt-4">Dividing — flip and multiply (KCF)</p>
          <p>Dividing by a fraction is the same as multiplying by its <Term>reciprocal</Term> (the flipped fraction). The mnemonic is <strong>KCF: Keep, Change, Flip</strong> — keep the first fraction, change the ÷ to ×, flip the second fraction.</p>

          <Example
            problem={<>Compute <Frac n="4" d="7" /> ÷ <Frac n="2" d="3" />.</>}
            steps={[
              <>K — keep the first: <Frac n="4" d="7" />.</>,
              <>C — change ÷ to ×.</>,
              <>F — flip the second: <Frac n="2" d="3" /> → <Frac n="3" d="2" />.</>,
              <>Now multiply: <Frac n="4" d="7" /> × <Frac n="3" d="2" /> = <Frac n="12" d="14" />.</>,
              <>Simplify by 2: <Frac n="6" d="7" />.</>
            ]}
            answer={<Frac n="6" d="7" />}
          />

          <Callout kind="info" title="Why KCF works (the intuition)">
            "How many half-cups fit in 3 cups?" Six. That\'s <M>{`3 ÷ 1/2 = 6`}</M>. Notice 6 = 3 × 2. Dividing by ½ is the same as multiplying by 2 — by the reciprocal. The flip-and-multiply rule is just that pattern stated for any fraction.
          </Callout>

          <Example
            problem={<>A recipe calls for <Frac n="3" d="4" /> cup of sugar. You want to make <M>2 ½</M> times the recipe. How much sugar?</>}
            steps={[
              <>"Times the recipe" = multiply.</>,
              <>Convert mixed number to improper: <M>{`2 ½ = 5/2`}</M>.</>,
              <>Multiply: <Frac n="3" d="4" /> × <Frac n="5" d="2" /> = <Frac n="15" d="8" />.</>,
              <>Convert back to mixed: <M>{`15 ÷ 8 = 1`}</M> remainder 7 → <M>1 ⅞</M> cups.</>
            ]}
            answer={<>1 <Frac n="7" d="8" /> cups</>}
          />
        </>
      )
    },
    {
      id: 'frac-dec-conversion',
      title: 'Translating Between Fractions, Decimals & Percents',
      content: (
        <>
          <p>The GED loves to give a problem with mixed forms — a fraction here, a decimal there, a percent at the end. Convert everything to one form (decimal is the easiest with the calculator) and the question becomes simple comparison.</p>

          <Formula label="To decimal">fraction → decimal: divide top by bottom</Formula>
          <Formula label="To fraction">decimal → fraction: digits over the appropriate place value, then simplify</Formula>
          <Formula label="To percent">decimal → percent: multiply by 100 (move decimal 2 places right)</Formula>

          <Example
            problem={<>Convert <Frac n="3" d="8" /> to a decimal.</>}
            steps={[
              <>Divide top by bottom: <M>{`3 ÷ 8`}</M>.</>,
              <>= 0.375.</>
            ]}
            answer="0.375"
          />

          <Example
            problem={<>Convert <M>0.65</M> to a fraction in lowest terms.</>}
            steps={[
              <>Two decimal places → place over 100: <Frac n="65" d="100" />.</>,
              <>GCF(65, 100) = 5. Divide: <Frac n="13" d="20" />.</>,
              <>13 is prime and doesn\'t divide 20 → already simplified.</>
            ]}
            answer={<Frac n="13" d="20" />}
          />

          <Callout kind="formula" title="Memorize these — you\'ll see them constantly">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 text-sm">
              <div>½ = 0.5 = 50%</div>
              <div>¼ = 0.25 = 25%</div>
              <div>¾ = 0.75 = 75%</div>
              <div>⅓ ≈ 0.333... ≈ 33⅓%</div>
              <div>⅔ ≈ 0.667 ≈ 66⅔%</div>
              <div>⅕ = 0.2 = 20%</div>
              <div>⅖ = 0.4 = 40%</div>
              <div>⅗ = 0.6 = 60%</div>
              <div>⅘ = 0.8 = 80%</div>
              <div>⅛ = 0.125 = 12.5%</div>
              <div>⅜ = 0.375 = 37.5%</div>
              <div>⅝ = 0.625 = 62.5%</div>
              <div>⅞ = 0.875 = 87.5%</div>
              <div>1/10 = 0.1 = 10%</div>
              <div>1/100 = 0.01 = 1%</div>
            </div>
          </Callout>

          <Callout kind="warn" title="Repeating decimals">
            Some fractions don\'t convert cleanly. <Frac n="1" d="3" /> = 0.333333... (repeating forever). The standard notation for "repeats" is a bar over the repeating digits, but on the GED you can write 0.33 with a note, or use 33⅓%.
          </Callout>
        </>
      )
    },
    {
      id: 'numberline',
      title: 'Decimals & Fractions on the Number Line',
      content: (
        <>
          <p>Convert everything to a single form (usually decimals) before placing them on a number line. This is also the safest way to compare fractions with different denominators.</p>
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
              <>Convert each to a decimal.</>,
              <><Frac n="2" d="5" /> = 2÷5 = 0.40.</>,
              <><M>0.45</M> stays as 0.45.</>,
              <><Frac n="3" d="8" /> = 3÷8 = 0.375.</>,
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
      { term: 'Numerator', def: 'Top number of a fraction. How many parts you have.' },
      { term: 'Denominator', def: 'Bottom number of a fraction. How many equal parts the whole is divided into.' },
      { term: 'LCD (Least Common Denominator)', def: 'The smallest number both denominators divide into evenly.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Reciprocal', def: 'A fraction\'s flipped form. Reciprocal of 3/4 is 4/3.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Improper fraction', def: 'Numerator ≥ denominator (e.g., 7/4).' },
      { term: 'Mixed number', def: 'Whole + fractional part (e.g., 1¾).' },
      { term: 'Equivalent fractions', def: 'Different-looking fractions with the same value (1/2 = 2/4 = 50/100).' },
      { term: 'Simplify (reduce)', def: 'Divide top and bottom by their greatest common factor.' }
    ],
    laws: [
      { name: 'Decimal multiplication rule', desc: 'Total decimal places in product = sum of decimal places in factors.' },
      { name: 'Fraction division rule (KCF)', desc: 'Divide by a fraction = multiply by its reciprocal.' },
      { name: 'Common-denominator rule', desc: 'Add or subtract fractions only after converting to a common denominator.' },
      { name: 'Trailing zeros are free', desc: '0.4 = 0.40 = 0.400. Pad with zeros to compare or align decimals.' }
    ],
    methods: [
      { name: 'KCF', expand: 'Keep, Change, Flip', desc: 'Divide fractions: keep the first, change ÷ to ×, flip the second.' },
      { name: 'Cross-cancel', desc: 'Before multiplying fractions, divide a numerator and a denominator (from different fractions) by their GCF.' },
      { name: 'Line up the decimal', desc: 'For + and −, stack vertically with decimal points aligned.' },
      { name: 'Convert to decimal first', desc: 'When comparing or mixing forms, decimals are easiest.' }
    ]
  },
  questions: [
    { q: 'Compute 0.36 + 1.5.', type: 'math', correct: 1.86, tolerance: 0.001, difficulty: 'E', explanation: 'Align decimals (pad 1.5 to 1.50): 0.36 + 1.50 = 1.86.' },
    { q: 'Compute 2.4 × 0.05.', type: 'math', correct: 0.12, tolerance: 0.001, difficulty: 'M', explanation: '24×5=120; total decimal places = 1+2 = 3 → 0.120 = 0.12.' },
    { q: 'Simplify 24/36.', type: 'mcq', choices: ['1/2', '2/3', '3/4', '4/6'], correct: 1, difficulty: 'E', explanation: 'GCF(24,36)=12. 24÷12=2, 36÷12=3 → 2/3.' },
    { q: 'Convert 5/8 to a decimal.', type: 'math', correct: 0.625, tolerance: 0.001, difficulty: 'E', explanation: '5÷8 = 0.625.' },
    { q: 'Compute 3/4 + 1/6 (as a decimal, rounded to 3 places).', type: 'math', correct: 0.917, tolerance: 0.005, difficulty: 'M', explanation: 'LCD = 12. 3/4 = 9/12, 1/6 = 2/12. Sum = 11/12 ≈ 0.917.' },
    { q: 'Compute (2/3) ÷ (4/9).', type: 'mcq', choices: ['8/27', '3/2', '6/12', '2/3'], correct: 1, difficulty: 'M', explanation: 'KCF: (2/3) × (9/4) = 18/12 = 3/2.' },
    { q: 'Round 14.0782 to the nearest hundredth.', type: 'mcq', choices: ['14.07', '14.08', '14.078', '14.10'], correct: 1, difficulty: 'E', explanation: 'Hundredths digit is 7. Decider digit (thousandths) is 8 ≥ 5 → round up: 14.08.' },
    { q: 'Order least to greatest: 0.6, 5/9, 11/18.', type: 'mcq', choices: ['0.6 < 5/9 < 11/18', '5/9 < 0.6 < 11/18', '11/18 < 0.6 < 5/9', '5/9 < 11/18 < 0.6'], correct: 1, difficulty: 'H', explanation: '5/9 ≈ 0.556; 0.6 = 0.600; 11/18 ≈ 0.611. So 5/9 < 0.6 < 11/18.' },
    { q: 'A board is 8.4 feet long. You cut it into pieces 0.7 ft each. How many pieces?', type: 'math', correct: 12, difficulty: 'M', explanation: '8.4 ÷ 0.7. Slide both decimals one place: 84 ÷ 7 = 12.' },
    { q: 'A recipe needs 2½ cups of flour. To make 3 batches, how much flour total?', type: 'math', correct: 7.5, tolerance: 0.001, difficulty: 'M', explanation: '2.5 × 3 = 7.5 cups.' },
    { q: 'A fence post is 6.5 feet tall. Each section of fence is 0.25 feet thick. How many sections fit in the height?', type: 'math', correct: 26, difficulty: 'M', explanation: '6.5 ÷ 0.25. Slide 2 places: 650 ÷ 25 = 26.' },
    { q: '"Five-eighths" written as a decimal:', type: 'mcq', choices: ['0.58', '0.625', '0.85', '5.8'], correct: 1, difficulty: 'E', explanation: '5/8 = 5÷8 = 0.625.' }
  ]
};
