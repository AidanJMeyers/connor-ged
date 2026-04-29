import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, NumberLine, Term } from '../components/Visual.jsx';

export default {
  id: 5,
  title: 'Math 5 — Algebra Basics, Expressions & Polynomials',
  subtitle: 'Signed numbers, exponents, scientific notation, simplifying & combining expressions, polynomial operations.',
  blocks: [
    {
      id: 'signed-numbers',
      title: 'Signed Numbers (Positive & Negative Integers)',
      content: (
        <>
          <NumberLine min={-6} max={6} marks={[
            { x: -3, label: 'A', color: '#dc2626' },
            { x: 4, label: 'B', color: '#16a34a' }
          ]} />

          <p className="font-semibold">Adding & subtracting</p>
          <Table
            headers={['Situation', 'Rule', 'Example']}
            rows={[
              ['Same signs, add', 'Add absolute values, keep the sign', '−7 + (−4) = −11'],
              ['Different signs', 'Subtract smaller from larger, take sign of larger', '−9 + 5 = −4'],
              ['Subtracting', 'Add the opposite', '6 − (−3) = 6 + 3 = 9']
            ]}
          />

          <p className="font-semibold mt-3">Multiplying & dividing</p>
          <Callout kind="formula" title="Sign rule">
            <strong>Same signs → positive · Different signs → negative.</strong> Count the negatives: even count = positive, odd count = negative.
          </Callout>
          <Table
            headers={['Expression', 'Result']}
            rows={[
              ['(−3) × (−5)', '+15'],
              ['(−4) × 7', '−28'],
              ['(−24) ÷ (−6)', '+4'],
              ['(−2)(−3)(−4)', '−24 (three negatives → odd → negative)']
            ]}
          />

          <Example
            problem={<>Compute <M>{`−8 − (−3) + (−6) × 2`}</M></>}
            steps={[
              <>Multiply first: <M>{`(−6) × 2 = −12`}</M>. Now: <M>{`−8 − (−3) + (−12)`}</M>.</>,
              <>Subtract negative = add: <M>{`−8 + 3 − 12`}</M>.</>,
              <>Left to right: <M>{`−8 + 3 = −5`}</M>; <M>{`−5 − 12 = −17`}</M>.</>
            ]}
            answer="−17"
          />

          <p className="font-semibold mt-3">Absolute value</p>
          <p><M>|x|</M> is the distance from 0 — always ≥ 0. <M>|−7| = 7</M>; <M>|3.5| = 3.5</M>.</p>
        </>
      )
    },
    {
      id: 'powers-roots',
      title: 'Powers, Roots & Scientific Notation',
      content: (
        <>
          <Formula label="Powers"><M>x</M><sup>n</sup> = x · x · ... (n factors)</Formula>
          <p>Examples: <M>{`5² = 25`}</M>, <M>{`2³ = 8`}</M>, <M>{`(−3)² = 9`}</M>, <M>{`(−3)³ = −27`}</M>.</p>

          <Callout kind="warn" title="Tricky negatives">
            <M>{`(−4)² = 16`}</M> (parens include the sign). <M>{`−4² = −16`}</M> (squares the 4, then applies the minus). Pay close attention.
          </Callout>

          <p className="font-semibold mt-3">Power rules</p>
          <Table
            headers={['Rule', 'Form', 'Example']}
            rows={[
              ['Product', 'aᵐ · aⁿ = aᵐ⁺ⁿ', 'x³ · x⁴ = x⁷'],
              ['Quotient', 'aᵐ / aⁿ = aᵐ⁻ⁿ', 'x⁵/x² = x³'],
              ['Power of a power', '(aᵐ)ⁿ = aᵐⁿ', '(x²)³ = x⁶'],
              ['Power of a product', '(ab)ⁿ = aⁿbⁿ', '(2x)³ = 8x³'],
              ['Zero exponent', 'a⁰ = 1', '7⁰ = 1'],
              ['Negative exponent', 'a⁻ⁿ = 1/aⁿ', '2⁻³ = 1/8']
            ]}
          />

          <p className="font-semibold mt-3">Square roots</p>
          <p>√25 = 5 because 5² = 25. Memorize perfect squares 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.</p>

          <p className="font-semibold mt-3">Scientific notation</p>
          <Formula><M>a × 10</M><sup>n</sup>, where 1 ≤ <M>|a|</M> &lt; 10</Formula>
          <Example
            problem='Write 4,860,000 in scientific notation.'
            steps={[
              <>Move the decimal until only one nonzero digit is to the left: 4.860000.</>,
              <>Count moves: 6 places left.</>,
              <>Result: 4.86 × 10⁶.</>
            ]}
            answer="4.86 × 10⁶"
          />
          <Example
            problem='Convert 7.2 × 10⁻⁴ to a decimal.'
            steps={[
              <>Negative exponent → move decimal LEFT 4 places.</>,
              <>7.2 → 0.00072.</>
            ]}
            answer="0.00072"
          />
        </>
      )
    },
    {
      id: 'expressions',
      title: 'Algebraic Expressions',
      content: (
        <>
          <p>An <Term>expression</Term> is a combination of variables, numbers, and operations — <em>without</em> an equals sign. <M>{`3x + 5`}</M> is an expression.</p>
          <p>A <Term>term</Term> is a single number, variable, or product. In <M>{`4x² − 7x + 9`}</M>, the terms are <M>{`4x²`}</M>, <M>{`−7x`}</M>, and <M>{`9`}</M>.</p>
          <p><Term>Like terms</Term> have the same variables raised to the same powers. <M>{`3x²`}</M> and <M>{`−5x²`}</M> are like; <M>{`3x²`}</M> and <M>{`3x`}</M> are <strong>not</strong>.</p>

          <p className="font-semibold mt-3">Combining like terms</p>
          <Example
            problem={<>Simplify <M>{`5x + 3 − 2x + 7 − x`}</M>.</>}
            steps={[
              <>Group like terms: x-terms together, constants together.</>,
              <><M>{`5x − 2x − x = 2x`}</M>.</>,
              <><M>{`3 + 7 = 10`}</M>.</>
            ]}
            answer="2x + 10"
          />

          <p className="font-semibold mt-3">Distributive property</p>
          <Formula>a(b + c) = ab + ac</Formula>
          <Example
            problem={<>Expand <M>{`3(2x − 5) + 4x`}</M>.</>}
            steps={[
              <>Distribute the 3: <M>{`3·2x − 3·5 = 6x − 15`}</M>. Now: <M>{`6x − 15 + 4x`}</M>.</>,
              <>Combine like terms: <M>{`6x + 4x − 15 = 10x − 15`}</M>.</>
            ]}
            answer="10x − 15"
          />

          <p className="font-semibold mt-3">Evaluating expressions</p>
          <Example
            problem={<>If <M>{`x = 4`}</M> and <M>{`y = −2`}</M>, find <M>{`3x² − 2y + 7`}</M>.</>}
            steps={[
              <>Substitute: <M>{`3(4)² − 2(−2) + 7`}</M>.</>,
              <>Exponent first: <M>{`3 · 16 − 2(−2) + 7`}</M>.</>,
              <>Multiply: <M>{`48 + 4 + 7 = 59`}</M>.</>
            ]}
            answer="59"
          />
        </>
      )
    },
    {
      id: 'polynomials-add',
      title: 'Polynomials: Add, Subtract',
      content: (
        <>
          <p>A <Term>polynomial</Term> is a sum of terms with non-negative integer exponents. Examples:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Monomial</strong>: 1 term — <M>{`5x³`}</M></li>
            <li><strong>Binomial</strong>: 2 terms — <M>{`x + 4`}</M></li>
            <li><strong>Trinomial</strong>: 3 terms — <M>{`x² + 3x − 7`}</M></li>
          </ul>

          <p className="font-semibold mt-3">Adding polynomials</p>
          <p>Combine like terms.</p>
          <Example
            problem={<>Add <M>{`(3x² + 5x − 2) + (x² − 7x + 9)`}</M>.</>}
            steps={[
              <>Group like: <M>{`(3x² + x²) + (5x − 7x) + (−2 + 9)`}</M>.</>,
              <>Combine: <M>{`4x² − 2x + 7`}</M>.</>
            ]}
            answer="4x² − 2x + 7"
          />

          <p className="font-semibold mt-3">Subtracting polynomials</p>
          <p>Distribute the minus sign through the second polynomial first.</p>
          <Example
            problem={<>Compute <M>{`(7x² − 3x + 4) − (2x² + 5x − 6)`}</M>.</>}
            steps={[
              <>Distribute the negative: <M>{`7x² − 3x + 4 − 2x² − 5x + 6`}</M>.</>,
              <>Combine like: <M>{`(7x² − 2x²) + (−3x − 5x) + (4 + 6)`}</M>.</>,
              <>Result: <M>{`5x² − 8x + 10`}</M>.</>
            ]}
            answer="5x² − 8x + 10"
          />
        </>
      )
    },
    {
      id: 'polynomials-mult',
      title: 'Polynomials: Multiply, Divide & FOIL',
      content: (
        <>
          <p className="font-semibold">Monomial × polynomial — distribute</p>
          <Example
            problem={<>Multiply <M>{`5x²(2x³ − 3x + 4)`}</M>.</>}
            steps={[
              <>Distribute: <M>{`5x² · 2x³ + 5x² · (−3x) + 5x² · 4`}</M>.</>,
              <>Multiply coefficients and add exponents: <M>{`10x⁵ − 15x³ + 20x²`}</M>.</>
            ]}
            answer="10x⁵ − 15x³ + 20x²"
          />

          <p className="font-semibold mt-3">Binomial × binomial — FOIL</p>
          <Callout kind="formula" title="FOIL">
            <strong>F</strong>irst · <strong>O</strong>uter · <strong>I</strong>nner · <strong>L</strong>ast
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
              <>Rewrite: <M>{`(2x − 3)(2x − 3)`}</M>.</>,
              <>FOIL: F: <M>4x²</M>, O: <M>−6x</M>, I: <M>−6x</M>, L: <M>9</M>.</>,
              <>Combine: <M>{`4x² − 12x + 9`}</M>.</>
            ]}
            answer="4x² − 12x + 9"
          />

          <Callout kind="tip" title="Special products to memorize">
            <div className="space-y-1">
              <div><M>{`(a + b)² = a² + 2ab + b²`}</M></div>
              <div><M>{`(a − b)² = a² − 2ab + b²`}</M></div>
              <div><M>{`(a + b)(a − b) = a² − b²`}</M> (difference of squares)</div>
            </div>
          </Callout>

          <p className="font-semibold mt-3">Dividing a polynomial by a monomial</p>
          <p>Divide each term separately.</p>
          <Example
            problem={<>Compute <M>{`(12x³ − 8x² + 4x) ÷ 4x`}</M>.</>}
            steps={[
              <>Split into three fractions: <Frac n="12x³" d="4x" /> − <Frac n="8x²" d="4x" /> + <Frac n="4x" d="4x" />.</>,
              <>Simplify each: <M>{`3x²`}</M>, <M>{`−2x`}</M>, <M>{`1`}</M>.</>
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
      { term: 'Term', def: 'A single number or product of numbers/variables separated by + or −.' },
      { term: 'Like terms', def: 'Terms with the same variable raised to the same power.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Polynomial', def: 'Sum of terms with non-negative integer exponents.' }
    ],
    laws: [
      { name: 'Product of powers', desc: 'aᵐ · aⁿ = aᵐ⁺ⁿ' },
      { name: 'Power of a power', desc: '(aᵐ)ⁿ = aᵐⁿ' },
      { name: 'Distributive property', desc: 'a(b + c) = ab + ac' },
      { name: 'Sign rule for multiplication', desc: 'Same signs → +; different signs → −.' }
    ],
    methods: [
      { name: 'FOIL', expand: 'First, Outer, Inner, Last', desc: 'Multiplying two binomials.' },
      { name: 'Combine like terms', desc: 'Same variable, same exponent → add coefficients.' },
      { name: 'Distribute the minus', desc: 'When subtracting a polynomial, change every sign of the polynomial being subtracted.' }
    ]
  },
  questions: [
    { q: 'Compute −12 + 7 − (−5).', type: 'math', correct: 0, difficulty: 'E', explanation: '−12 + 7 = −5. −5 − (−5) = −5 + 5 = 0.' },
    { q: 'Simplify 4x − 9 + 2x + 11.', type: 'mcq', choices: ['6x + 2', '6x + 20', '2x + 2', '6x − 2'], correct: 0, difficulty: 'E', explanation: '4x + 2x = 6x; −9 + 11 = 2.' },
    { q: 'Expand 5(2x − 3) − 2(x + 1).', type: 'mcq', choices: ['10x − 17', '8x − 17', '8x − 13', '8x − 14'], correct: 1, difficulty: 'M', explanation: '10x − 15 − 2x − 2 = 8x − 17.' },
    { q: 'Compute (3x²)(4x³).', type: 'mcq', choices: ['12x⁵', '12x⁶', '7x⁵', '12x⁹'], correct: 0, difficulty: 'M', explanation: '3·4 = 12; x²·x³ = x⁵.' },
    { q: 'FOIL (x + 4)(x − 7).', type: 'mcq', choices: ['x² + 11x − 28', 'x² − 3x − 28', 'x² − 11x + 28', 'x² − 3x + 28'], correct: 1, difficulty: 'M', explanation: 'x² − 7x + 4x − 28 = x² − 3x − 28.' },
    { q: 'Write 0.00038 in scientific notation.', type: 'mcq', choices: ['3.8 × 10⁻⁴', '3.8 × 10⁴', '38 × 10⁻³', '3.8 × 10⁻³'], correct: 0, difficulty: 'M', explanation: 'Decimal moves 4 places right → exponent −4.' },
    { q: 'Evaluate 2x² − 3x + 5 when x = −2.', type: 'math', correct: 19, difficulty: 'M', explanation: '2(4) − 3(−2) + 5 = 8 + 6 + 5 = 19.' },
    { q: 'Compute (x² − 3x + 7) − (2x² − x + 4).', type: 'mcq', choices: ['−x² − 2x + 3', '3x² − 4x + 11', '−x² − 4x + 3', 'x² − 4x + 3'], correct: 0, difficulty: 'H', explanation: 'Distribute minus: x² − 3x + 7 − 2x² + x − 4 = −x² − 2x + 3.' },
    { q: '(2x − 5)² =', type: 'mcq', choices: ['4x² − 25', '4x² + 20x + 25', '4x² − 20x + 25', '4x² − 10x + 25'], correct: 2, difficulty: 'H', explanation: '(a−b)² = a² − 2ab + b². 4x² − 2·2x·5 + 25 = 4x² − 20x + 25.' },
    { q: '(15x⁴ − 10x²) ÷ 5x =', type: 'mcq', choices: ['3x³ − 2x', '15x³ − 10x', '3x² − 2', '3x⁴ − 2x²'], correct: 0, difficulty: 'M', explanation: '15x⁴/5x = 3x³; 10x²/5x = 2x. Result: 3x³ − 2x.' }
  ]
};
