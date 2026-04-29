import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, NumberLine, Term } from '../components/Visual.jsx';

export default {
  id: 5,
  title: 'Math 5 — Algebra Basics, Expressions & Polynomials',
  subtitle: 'Negative numbers, exponents, scientific notation, the language of variables, and how to combine and multiply expressions like (2x − 3)(x + 5).',
  blocks: [
    {
      id: 'why-algebra',
      title: 'What Is Algebra and Why Does It Exist?',
      content: (
        <>
          <p>Arithmetic deals with specific numbers: 7 + 3, 14 × 5. Algebra deals with <strong>any</strong> number, by using letters to stand in for "whatever number we don\'t know yet" or "whatever number it could be." Those letters are called <Term>variables</Term>.</p>

          <p>Why bother? Because almost every real-world problem has unknowns. "If I work 35 hours a week at $14/hr, how much do I make in a month?" — that\'s arithmetic, but only because someone gave you the specific numbers. Algebra is what you use when those numbers can change. With a single algebra equation you can solve a thousand versions of the same problem.</p>

          <Callout kind="info" title="How algebra appears on the GED">
            About <strong>55% of Mathematical Reasoning</strong> is "algebraic reasoning" — solving equations, working with inequalities, lines on the coordinate plane, and functions. It\'s the biggest single content area, so investing time here pays off the most. This chapter is the foundation; chapter 6 is the application.
          </Callout>

          <p className="mt-3">If you\'ve been away from school for a while, the most important mental shift is this: <strong>letters in algebra obey the exact same rules as numbers</strong>. You add, subtract, multiply, and divide them just like you always have. The only twist is that you can\'t do certain operations until you know what they\'re standing for — so part of algebra is rearranging until you can solve.</p>
        </>
      )
    },
    {
      id: 'signed-numbers',
      title: 'Signed Numbers — Working with Negatives',
      content: (
        <>
          <p>A <Term>signed number</Term> is just a number with a positive or negative sign. The number line is the cleanest way to picture them — negatives are to the LEFT of zero, positives to the RIGHT.</p>
          <NumberLine min={-6} max={6} marks={[
            { x: -3, label: 'A', color: '#dc2626' },
            { x: 4, label: 'B', color: '#16a34a' }
          ]} />

          <Callout kind="info" title="Real-world meaning of negatives">
            Negatives show up in money (debts, losses), temperature (below zero), elevation (below sea level), direction (going left if right is positive), and time (years BCE, or "5 minutes before launch"). Whenever there are two opposite directions, one becomes negative.
          </Callout>

          <p className="font-semibold mt-4">Adding & subtracting signed numbers</p>
          <Table
            headers={['Situation', 'Rule', 'Example']}
            rows={[
              ['Same signs (both + or both −)', 'Add their absolute values; keep the sign', '−7 + (−4) = −11'],
              ['Different signs', 'Subtract the smaller absolute value from the larger; take the sign of the bigger one', '−9 + 5 = −4'],
              ['Subtracting any number', 'Add the OPPOSITE', '6 − (−3) = 6 + 3 = 9'],
              ['Subtracting from a negative', 'Same — add the opposite', '−4 − 6 = −4 + (−6) = −10'],
              ['Subtracting a negative from a negative', 'Add the opposite — turns into addition', '−5 − (−2) = −5 + 2 = −3']
            ]}
          />

          <Callout kind="warn" title="The tricky one — 'minus a negative'">
            <strong>Subtracting a negative is the same as adding a positive.</strong> If you owe $10 and someone "takes away" a $4 debt, you\'re better off by $4. That\'s "−10 − (−4) = −10 + 4 = −6". The two negative signs in a row cancel into a plus.
          </Callout>

          <p className="font-semibold mt-4">Multiplying & dividing signed numbers</p>
          <Callout kind="formula" title="Sign rule (multiplication and division)">
            <strong>Same signs → POSITIVE</strong>. <br/>
            <strong>Different signs → NEGATIVE</strong>. <br/>
            For multiple factors, count the negatives: even count → positive; odd count → negative.
          </Callout>
          <Table
            headers={['Expression', 'Result', 'Why']}
            rows={[
              ['(−3) × (−5)', '+15', 'Both negative → positive'],
              ['(−4) × 7', '−28', 'Different signs → negative'],
              ['(−24) ÷ (−6)', '+4', 'Same signs'],
              ['(−2)(−3)(−4)', '−24', 'Three negatives = odd count → negative'],
              ['(−2)(−3)(−4)(−5)', '+120', 'Four negatives = even → positive']
            ]}
          />

          <Example
            problem={<>Compute <M>{`−8 − (−3) + (−6) × 2`}</M></>}
            steps={[
              <>PEMDAS: multiplication first. <M>{`(−6) × 2 = −12`}</M>. Now <M>{`−8 − (−3) + (−12)`}</M>.</>,
              <>Subtracting (−3) becomes adding 3. Adding (−12) becomes subtracting 12. Rewrite: <M>{`−8 + 3 − 12`}</M>.</>,
              <>Left to right: <M>{`−8 + 3 = −5`}</M>; then <M>{`−5 − 12 = −17`}</M>.</>
            ]}
            answer="−17"
          />

          <p className="font-semibold mt-4">Absolute value</p>
          <p><M>|x|</M> is the distance from 0 — always nonnegative. <M>|−7| = 7</M>; <M>|3.5| = 3.5</M>; <M>|0| = 0</M>. Think of absolute value as "ignore the sign."</p>
        </>
      )
    },
    {
      id: 'powers-roots',
      title: 'Powers, Roots & Scientific Notation',
      content: (
        <>
          <p>An <Term>exponent</Term> tells you how many times to multiply a number by itself. <M>5³</M> means <M>5 × 5 × 5 = 125</M>. The number being multiplied is the <Term>base</Term>; the small raised number is the exponent or <Term>power</Term>.</p>

          <Formula><M>x</M><sup>n</sup> = x · x · ... (n factors)</Formula>

          <p>Examples:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><M>{`5² = 25`}</M> ("five squared")</li>
            <li><M>{`2³ = 8`}</M> ("two cubed")</li>
            <li><M>{`(−3)² = 9`}</M> (negative times negative is positive)</li>
            <li><M>{`(−3)³ = −27`}</M> (odd number of negatives → negative)</li>
            <li><M>{`10⁴ = 10,000`}</M></li>
          </ul>

          <Callout kind="warn" title="Critical: parentheses change everything with negatives">
            <p><M>{`(−4)²`}</M> = (−4) × (−4) = +16.</p>
            <p><M>{`−4²`}</M> = −(4²) = −(16) = −16.</p>
            <p>Without parentheses, the exponent applies ONLY to the 4, and the negative sign sits outside. This rule applies on paper AND on the calculator. To square a negative number, ALWAYS use parentheses.</p>
          </Callout>

          <p className="font-semibold mt-4">Power rules — for combining exponents</p>
          <Table
            headers={['Rule', 'Form', 'Example']}
            rows={[
              ['Product (same base): add exponents', 'aᵐ · aⁿ = aᵐ⁺ⁿ', 'x³ · x⁴ = x⁷'],
              ['Quotient (same base): subtract exponents', 'aᵐ / aⁿ = aᵐ⁻ⁿ', 'x⁵/x² = x³'],
              ['Power of a power: multiply exponents', '(aᵐ)ⁿ = aᵐⁿ', '(x²)³ = x⁶'],
              ['Power distributes over a product', '(ab)ⁿ = aⁿbⁿ', '(2x)³ = 8x³'],
              ['Anything (nonzero) to the 0 = 1', 'a⁰ = 1', '7⁰ = 1; (−5)⁰ = 1'],
              ['Negative exponent = reciprocal', 'a⁻ⁿ = 1/aⁿ', '2⁻³ = 1/8']
            ]}
          />

          <Callout kind="tip" title="Why a⁰ = 1">
            Look at the pattern: 2³ = 8, 2² = 4, 2¹ = 2. Each time you drop the exponent by 1, you divide by 2. Continuing: 2⁰ = 2 ÷ 2 = 1. The rule "a⁰ = 1" isn\'t arbitrary — it\'s what keeps the pattern consistent.
          </Callout>

          <p className="font-semibold mt-4">Square roots</p>
          <p>The <Term>square root</Term> of a number is "what number, multiplied by itself, gives this?" <M>√25 = 5</M> because <M>5² = 25</M>. The radical symbol <M>√</M> always means the positive root.</p>
          <p>Memorize the perfect squares — they show up constantly:</p>
          <Table
            headers={['n', 'n²', 'n', 'n²']}
            rows={[
              ['1', '1', '8', '64'],
              ['2', '4', '9', '81'],
              ['3', '9', '10', '100'],
              ['4', '16', '11', '121'],
              ['5', '25', '12', '144'],
              ['6', '36', '13', '169'],
              ['7', '49', '15', '225']
            ]}
          />

          <p className="font-semibold mt-4">Scientific notation — for very big or very small numbers</p>
          <p>Astronomers use it for galaxy distances; biologists use it for cell sizes; engineers use it everywhere. The format is:</p>
          <Formula><M>a × 10</M><sup>n</sup>, where 1 ≤ <M>|a|</M> &lt; 10</Formula>

          <p>So 4,860,000 in scientific notation is <M>4.86 × 10⁶</M>. The exponent on 10 tells you how many places to move the decimal.</p>

          <Example
            problem='Write 4,860,000 in scientific notation.'
            steps={[
              <>Move the decimal so only one nonzero digit is to the left of it: 4.860000.</>,
              <>Count places moved: 6 places to the LEFT.</>,
              <>Result: 4.86 × 10⁶.</>
            ]}
            answer="4.86 × 10⁶"
          />

          <Example
            problem='Convert 7.2 × 10⁻⁴ to standard decimal form.'
            steps={[
              <>Negative exponent → move decimal LEFT 4 places.</>,
              <>7.2 → 0.00072.</>
            ]}
            answer="0.00072"
          />

          <Callout kind="tip" title="Sign of the exponent tells you which way">
            <strong>Positive exponent → big number</strong> (move decimal RIGHT).<br/>
            <strong>Negative exponent → small number</strong> (move decimal LEFT).
          </Callout>
        </>
      )
    },
    {
      id: 'expressions',
      title: 'Algebraic Expressions — The Vocabulary',
      content: (
        <>
          <p>An <Term>expression</Term> is a combination of variables, numbers, and operations — but <strong>without an equals sign</strong>. <M>{`3x + 5`}</M> is an expression. Don\'t confuse this with an equation, which DOES have an equals sign.</p>

          <p>A <Term>term</Term> is a single number, variable, or product of those, separated by + or −. In <M>{`4x² − 7x + 9`}</M>, the terms are <M>{`4x²`}</M>, <M>{`−7x`}</M>, and <M>{`9`}</M>.</p>

          <p>The <Term>coefficient</Term> is the number multiplied by the variable in a term. In <M>{`4x²`}</M>, the coefficient is 4. If a term is just a variable (like x or just <M>{`x²`}</M>), the coefficient is 1 (invisible).</p>

          <p><Term>Like terms</Term> have the SAME variable raised to the SAME power. <M>{`3x²`}</M> and <M>{`−5x²`}</M> are like (both x²). <M>{`3x²`}</M> and <M>{`3x`}</M> are <strong>NOT</strong> like — different exponents.</p>

          <p className="font-semibold mt-4">Combining like terms — algebra\'s "tidying up"</p>
          <p>You can add or subtract like terms by combining their coefficients. You can\'t combine unlike terms.</p>
          <Example
            problem={<>Simplify <M>{`5x + 3 − 2x + 7 − x`}</M>.</>}
            steps={[
              <>Group like terms mentally — x-terms together, constants together.</>,
              <>x-terms: <M>{`5x − 2x − x = 2x`}</M>. (Remember: "−x" means "−1x".)</>,
              <>Constants: <M>{`3 + 7 = 10`}</M>.</>
            ]}
            answer="2x + 10"
          />

          <p className="font-semibold mt-4">The distributive property — multiplying a number into a parenthesis</p>
          <Formula>a(b + c) = ab + ac</Formula>
          <p>The number outside the parens multiplies EVERY term inside.</p>

          <Example
            problem={<>Expand <M>{`3(2x − 5) + 4x`}</M>.</>}
            steps={[
              <>Distribute the 3: <M>{`3 · 2x − 3 · 5 = 6x − 15`}</M>.</>,
              <>Now we have: <M>{`6x − 15 + 4x`}</M>.</>,
              <>Combine like terms: <M>{`6x + 4x − 15 = 10x − 15`}</M>.</>
            ]}
            answer="10x − 15"
          />

          <Callout kind="warn" title="Distributing a NEGATIVE">
            When the multiplier is negative, EVERY term inside flips sign. <M>{`−2(x − 3) = −2x + 6`}</M>. (The minus times minus 3 becomes +6.) This is one of the most common algebra mistakes.
          </Callout>

          <p className="font-semibold mt-4">Evaluating expressions — substituting in values</p>
          <p>"Evaluate" means: plug in the given numbers and compute.</p>
          <Example
            problem={<>If <M>{`x = 4`}</M> and <M>{`y = −2`}</M>, find <M>{`3x² − 2y + 7`}</M>.</>}
            steps={[
              <>Substitute (use parentheses!): <M>{`3(4)² − 2(−2) + 7`}</M>.</>,
              <>Exponent first (PEMDAS): <M>{`(4)² = 16`}</M>. Now <M>{`3 · 16 − 2(−2) + 7`}</M>.</>,
              <>Multiply: <M>{`3 · 16 = 48`}</M> and <M>{`2 · (−2) = −4`}</M>, but the original was <M>{`−2 · (−2) = +4`}</M>. So <M>{`48 + 4 + 7`}</M>.</>,
              <>Add: <M>{`48 + 4 + 7 = 59`}</M>.</>
            ]}
            answer="59"
          />

          <Callout kind="tip" title="ALWAYS use parentheses when substituting">
            If you write <M>{`3 · 4²`}</M> when substituting <M>{`x = 4`}</M> into <M>{`3x²`}</M>, you might forget that the exponent applies just to the 4, not to the 3. Writing it as <M>{`3 · (4)²`}</M> from the start makes the order obvious.
          </Callout>
        </>
      )
    },
    {
      id: 'polynomials-add',
      title: 'Polynomials — Adding & Subtracting',
      content: (
        <>
          <p>A <Term>polynomial</Term> is a sum of terms with non-negative integer exponents on the variable. Common types:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Monomial</strong> — one term: <M>{`5x³`}</M></li>
            <li><strong>Binomial</strong> — two terms: <M>{`x + 4`}</M></li>
            <li><strong>Trinomial</strong> — three terms: <M>{`x² + 3x − 7`}</M></li>
            <li><strong>Polynomial</strong> — any number of terms</li>
          </ul>

          <p className="font-semibold mt-4">Adding polynomials</p>
          <p>Drop the parentheses (no signs flip) and combine like terms.</p>
          <Example
            problem={<>Add <M>{`(3x² + 5x − 2) + (x² − 7x + 9)`}</M>.</>}
            steps={[
              <>Drop parens: <M>{`3x² + 5x − 2 + x² − 7x + 9`}</M>.</>,
              <>Group like terms: <M>{`(3x² + x²) + (5x − 7x) + (−2 + 9)`}</M>.</>,
              <>Combine: <M>{`4x² − 2x + 7`}</M>.</>
            ]}
            answer="4x² − 2x + 7"
          />

          <p className="font-semibold mt-4">Subtracting polynomials</p>
          <p>Distribute the minus sign through every term of the second polynomial first — then combine like terms.</p>
          <Example
            problem={<>Compute <M>{`(7x² − 3x + 4) − (2x² + 5x − 6)`}</M>.</>}
            steps={[
              <>Distribute the − through the second polynomial: <M>{`7x² − 3x + 4 − 2x² − 5x + 6`}</M>. Notice the +6 became −(−6) = +6.</>,
              <>Combine like terms: <M>{`(7x² − 2x²) + (−3x − 5x) + (4 + 6)`}</M>.</>,
              <>Result: <M>{`5x² − 8x + 10`}</M>.</>
            ]}
            answer="5x² − 8x + 10"
          />

          <Callout kind="warn" title="Most common subtraction error">
            Forgetting to flip ALL signs of the second polynomial. Many students flip just the first one. The minus sign in front of a parenthesis applies to every term inside, not just the leading one.
          </Callout>
        </>
      )
    },
    {
      id: 'polynomials-mult',
      title: 'Polynomials — Multiplying (and the FOIL Method)',
      content: (
        <>
          <p className="font-semibold">Monomial × polynomial — distribute</p>
          <Example
            problem={<>Multiply <M>{`5x²(2x³ − 3x + 4)`}</M>.</>}
            steps={[
              <>Distribute <M>{`5x²`}</M> to each term inside: <M>{`5x² · 2x³ + 5x² · (−3x) + 5x² · 4`}</M>.</>,
              <>For each product, multiply coefficients and add exponents.</>,
              <><M>{`5 · 2 = 10`}</M>; <M>{`x² · x³ = x⁵`}</M>. So first term: <M>{`10x⁵`}</M>.</>,
              <><M>{`5 · (−3) = −15`}</M>; <M>{`x² · x = x³`}</M>. So: <M>{`−15x³`}</M>.</>,
              <><M>{`5 · 4 = 20`}</M>; <M>{`x²`}</M> stays. So: <M>{`20x²`}</M>.</>
            ]}
            answer="10x⁵ − 15x³ + 20x²"
          />

          <p className="font-semibold mt-4">Binomial × binomial — FOIL</p>
          <p>The most common GED multiplication. <strong>FOIL</strong> is a mnemonic for "every term in the first binomial multiplies every term in the second":</p>
          <Callout kind="formula" title="FOIL">
            <strong>F</strong>irst (the first terms of each) → <strong>O</strong>uter (the outer pair) → <strong>I</strong>nner (the inner pair) → <strong>L</strong>ast (the last terms of each)
          </Callout>

          <Example
            problem={<>Multiply <M>{`(x + 5)(x − 3)`}</M>.</>}
            steps={[
              <><strong>F</strong>irst: <M>{`x · x = x²`}</M>.</>,
              <><strong>O</strong>uter: <M>{`x · (−3) = −3x`}</M>.</>,
              <><strong>I</strong>nner: <M>{`5 · x = 5x`}</M>.</>,
              <><strong>L</strong>ast: <M>{`5 · (−3) = −15`}</M>.</>,
              <>Combine: <M>{`x² − 3x + 5x − 15 = x² + 2x − 15`}</M>.</>
            ]}
            answer="x² + 2x − 15"
          />

          <Example
            problem={<>Multiply <M>{`(2x − 3)²`}</M>.</>}
            steps={[
              <>Rewrite as a product: <M>{`(2x − 3)(2x − 3)`}</M>.</>,
              <>FOIL: F → <M>{`4x²`}</M>. O → <M>{`−6x`}</M>. I → <M>{`−6x`}</M>. L → <M>{`9`}</M>.</>,
              <>Combine the middle terms: <M>{`4x² − 12x + 9`}</M>.</>
            ]}
            answer="4x² − 12x + 9"
          />

          <Callout kind="formula" title="Three special products worth memorizing">
            These come up over and over. Instead of FOILing each time, you can recognize the pattern:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><M>(a + b)² = a² + 2ab + b²</M> &nbsp;&nbsp;("square of a sum")</li>
              <li><M>(a − b)² = a² − 2ab + b²</M> &nbsp;&nbsp;("square of a difference")</li>
              <li><M>(a + b)(a − b) = a² − b²</M> &nbsp;&nbsp;(<strong>"difference of squares"</strong>)</li>
            </ul>
            <p className="mt-1">The third one is especially useful — the middle terms cancel, leaving just two terms instead of three.</p>
          </Callout>

          <p className="font-semibold mt-4">Dividing a polynomial by a monomial</p>
          <p>Divide each term separately by the monomial.</p>
          <Example
            problem={<>Compute <M>{`(12x³ − 8x² + 4x) ÷ 4x`}</M>.</>}
            steps={[
              <>Split into three fractions: <Frac n="12x³" d="4x" /> − <Frac n="8x²" d="4x" /> + <Frac n="4x" d="4x" />.</>,
              <>Simplify each: 12÷4=3; x³÷x = x². So <M>3x²</M>.</>,
              <>8÷4=2; x²÷x = x. So <M>−2x</M>.</>,
              <>4÷4=1; x÷x = 1. So <M>1</M>.</>
            ]}
            answer="3x² − 2x + 1"
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Variable', def: 'A letter representing an unknown or changing value.' },
      { term: 'Coefficient', def: 'The number in front of a variable. In 7x, the coefficient is 7.' },
      { term: 'Term', def: 'A single number, variable, or product, separated by + or −.' },
      { term: 'Like terms', def: 'Terms with the same variable raised to the same power.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Polynomial', def: 'Sum of terms with non-negative integer exponents.' },
      { term: 'Distributive property', def: 'a(b + c) = ab + ac. The outside multiplies every inside term.' },
      { term: 'Exponent', def: 'How many times to multiply the base by itself.' },
      { term: 'Absolute value', def: 'Distance from 0 — always nonnegative.' }
    ],
    laws: [
      { name: 'Product of powers', desc: 'aᵐ · aⁿ = aᵐ⁺ⁿ (same base only)' },
      { name: 'Power of a power', desc: '(aᵐ)ⁿ = aᵐⁿ' },
      { name: 'Anything to the 0', desc: 'a⁰ = 1 for any nonzero a' },
      { name: 'Negative exponent', desc: 'a⁻ⁿ = 1/aⁿ' },
      { name: 'Distributive property', desc: 'a(b + c) = ab + ac' },
      { name: 'Sign rule (× and ÷)', desc: 'Same signs → +. Different signs → −. Count the negatives — even count is positive.' },
      { name: 'Difference of squares', desc: '(a + b)(a − b) = a² − b²' }
    ],
    methods: [
      { name: 'FOIL', expand: 'First, Outer, Inner, Last', desc: 'Procedure for multiplying two binomials.' },
      { name: 'Combine like terms', desc: 'Same variable, same exponent → add coefficients.' },
      { name: 'Distribute the minus', desc: 'When subtracting a polynomial, change EVERY sign of the polynomial being subtracted.' },
      { name: 'Substitute with parens', desc: 'Always wrap substituted values in parentheses to keep order of operations clear.' }
    ]
  },
  questions: [
    { q: 'Compute −12 + 7 − (−5).', type: 'math', correct: 0, difficulty: 'E', explanation: '−12 + 7 = −5. −5 − (−5) = −5 + 5 = 0.' },
    { q: 'Simplify 4x − 9 + 2x + 11.', type: 'mcq', choices: ['6x + 2', '6x + 20', '2x + 2', '6x − 2'], correct: 0, difficulty: 'E', explanation: '4x + 2x = 6x; −9 + 11 = +2.' },
    { q: 'Expand 5(2x − 3) − 2(x + 1).', type: 'mcq', choices: ['10x − 17', '8x − 17', '8x − 13', '8x − 14'], correct: 1, difficulty: 'M', explanation: '10x − 15 − 2x − 2 = 8x − 17.' },
    { q: 'Compute (3x²)(4x³).', type: 'mcq', choices: ['12x⁵', '12x⁶', '7x⁵', '12x⁹'], correct: 0, difficulty: 'M', explanation: 'Coefficients: 3·4 = 12. Same base x, add exponents: x²·x³ = x⁵. Result: 12x⁵.' },
    { q: 'FOIL (x + 4)(x − 7).', type: 'mcq', choices: ['x² + 11x − 28', 'x² − 3x − 28', 'x² − 11x + 28', 'x² − 3x + 28'], correct: 1, difficulty: 'M', explanation: 'F: x². O: −7x. I: 4x. L: −28. Combine: x² − 3x − 28.' },
    { q: 'Write 0.00038 in scientific notation.', type: 'mcq', choices: ['3.8 × 10⁻⁴', '3.8 × 10⁴', '38 × 10⁻³', '3.8 × 10⁻³'], correct: 0, difficulty: 'M', explanation: 'Decimal moves 4 places to the right to make 3.8 → exponent is −4.' },
    { q: 'Evaluate 2x² − 3x + 5 when x = −2.', type: 'math', correct: 19, difficulty: 'M', explanation: '2(−2)² − 3(−2) + 5 = 2·4 + 6 + 5 = 8 + 6 + 5 = 19.' },
    { q: 'Compute (x² − 3x + 7) − (2x² − x + 4).', type: 'mcq', choices: ['−x² − 2x + 3', '3x² − 4x + 11', '−x² − 4x + 3', 'x² − 4x + 3'], correct: 0, difficulty: 'H', explanation: 'Distribute the minus: x² − 3x + 7 − 2x² + x − 4 = −x² − 2x + 3.' },
    { q: '(2x − 5)² = ?', type: 'mcq', choices: ['4x² − 25', '4x² + 20x + 25', '4x² − 20x + 25', '4x² − 10x + 25'], correct: 2, difficulty: 'H', explanation: 'Square of a difference: a² − 2ab + b². a=2x, b=5. (2x)² − 2(2x)(5) + 5² = 4x² − 20x + 25.' },
    { q: '(15x⁴ − 10x²) ÷ 5x = ?', type: 'mcq', choices: ['3x³ − 2x', '15x³ − 10x', '3x² − 2', '3x⁴ − 2x²'], correct: 0, difficulty: 'M', explanation: '15x⁴/5x = 3x³; 10x²/5x = 2x. Result: 3x³ − 2x.' },
    { q: '(−4)² + (−4) =', type: 'math', correct: 12, difficulty: 'M', explanation: '(−4)² = 16. 16 + (−4) = 12.' },
    { q: 'Apply (a + b)(a − b) = a² − b² to compute (3x + 2)(3x − 2):', type: 'mcq', choices: ['9x² − 4', '9x² + 4', '6x² − 4', '9x − 4'], correct: 0, difficulty: 'M', explanation: 'Difference of squares: (3x)² − 2² = 9x² − 4.' }
  ]
};
