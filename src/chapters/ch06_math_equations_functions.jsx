import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, CoordPlane, Term } from '../components/Visual.jsx';

export default {
  id: 6,
  title: 'Math 6 — Equations, Inequalities & Functions',
  subtitle: 'How to actually solve for x. Then: lines on a graph, slope, systems of equations, and functions.',
  blocks: [
    {
      id: 'why-equations',
      title: 'What "Solving an Equation" Actually Means',
      content: (
        <>
          <p>An <Term>equation</Term> says two expressions are equal. <M>{`3x + 5 = 17`}</M> is an equation. The variable x is somewhere — it has a specific value that makes the equation true. <strong>Solving</strong> the equation means finding that value.</p>

          <p>The mental model: an equation is like a balanced scale. The expression on the left weighs the same as the expression on the right. As long as you do the SAME thing to both sides, the scale stays balanced. Step by step, you peel away the operations around x until x is alone — that\'s the answer.</p>

          <Callout kind="info" title="The strategy in one sentence">
            <strong>Undo the operations on x in REVERSE order of PEMDAS.</strong> Strip away addition/subtraction first, then multiplication/division, then exponents/roots, then any parentheses you can\'t avoid.
          </Callout>
        </>
      )
    },
    {
      id: 'linear-eq',
      title: 'Solving Linear Equations',
      content: (
        <>
          <Callout kind="formula" title="The four equality moves">
            You can do any of these as long as you do the SAME thing to both sides:
            <ol className="list-decimal ml-5 text-sm space-y-1 mt-1">
              <li>Add the same number to both sides.</li>
              <li>Subtract the same number from both sides.</li>
              <li>Multiply both sides by the same nonzero number.</li>
              <li>Divide both sides by the same nonzero number.</li>
            </ol>
          </Callout>

          <Example
            problem={<>Solve <M>{`3x − 7 = 14`}</M>.</>}
            steps={[
              <>Goal: get x alone. The expression <M>3x − 7</M> has two operations applied to x: multiplied by 3, then subtracted by 7. Undo in reverse order.</>,
              <>Undo the −7 by adding 7 to both sides: <M>{`3x = 21`}</M>.</>,
              <>Undo the ×3 by dividing both sides by 3: <M>{`x = 7`}</M>.</>,
              <>Check by substituting back: <M>{`3(7) − 7 = 21 − 7 = 14`}</M>. ✓</>
            ]}
            answer="x = 7"
          />

          <p className="font-semibold mt-4">When variables appear on both sides</p>
          <p>Move all the variable terms to one side and all the constants to the other.</p>
          <Example
            problem={<>Solve <M>{`5(x − 2) + 3 = 2x + 10`}</M>.</>}
            steps={[
              <>Distribute the 5: <M>{`5x − 10 + 3 = 2x + 10`}</M>.</>,
              <>Combine like terms on the left: <M>{`5x − 7 = 2x + 10`}</M>.</>,
              <>Move x-terms to one side. Subtract 2x from both sides: <M>{`3x − 7 = 10`}</M>.</>,
              <>Move constants to the other side. Add 7: <M>{`3x = 17`}</M>.</>,
              <>Divide by 3: <M>{`x = 17/3 ≈ 5.67`}</M>.</>
            ]}
            answer={<>x = <Frac n="17" d="3" /></>}
          />

          <Callout kind="tip" title="When fractions are in the way — clear them with the LCD">
            If your equation has multiple fractions, multiply BOTH SIDES by the least common denominator (LCD). The fractions vanish.
          </Callout>

          <Example
            problem={<>Solve <M>{`(x + 4)/3 − (x − 1)/2 = 1`}</M>.</>}
            steps={[
              <>LCD of 3 and 2 is 6. Multiply BOTH sides by 6: <M>{`6 · (x+4)/3 − 6 · (x−1)/2 = 6 · 1`}</M>.</>,
              <>Simplify each fraction: <M>{`2(x+4) − 3(x−1) = 6`}</M>. (The 6 cancels nicely with each denominator.)</>,
              <>Distribute: <M>{`2x + 8 − 3x + 3 = 6`}</M>. (Watch the −3 distributing as <M>−3 · −1 = +3</M>.)</>,
              <>Combine: <M>{`−x + 11 = 6`}</M>.</>,
              <>Subtract 11: <M>{`−x = −5`}</M>. Multiply by −1: <M>{`x = 5`}</M>.</>
            ]}
            answer="x = 5"
          />

          <Callout kind="warn" title='Three "weird" outcomes you might see'>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>One unique solution</strong>: most common. Like <M>x = 7</M>.</li>
              <li><strong>No solution</strong> (inconsistent): you arrive at something obviously false, like "5 = 8." It means there\'s no number x that works.</li>
              <li><strong>Infinitely many solutions</strong>: you arrive at a true identity, like "0 = 0" or "x = x." It means EVERY number works.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'word-equations',
      title: 'Word Problems → Equations',
      content: (
        <>
          <Callout kind="tip" title="The 4-step setup">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Define</strong> the variable. Write "Let <M>x = </M>..." stating clearly what x represents.</li>
              <li><strong>Translate</strong> each fact in the problem into mathematical relationships using x.</li>
              <li><strong>Solve</strong> the resulting equation.</li>
              <li><strong>Answer the actual question</strong>. The variable might not be what the question is asking for. Double-check.</li>
            </ol>
          </Callout>

          <Example
            problem='The length of a rectangle is 5 less than twice its width. The perimeter is 56 inches. Find the dimensions.'
            steps={[
              <>Define: let <M>{`w`}</M> = width. Then length <M>{`L = 2w − 5`}</M> ("5 less than twice the width").</>,
              <>Perimeter formula: <M>{`P = 2L + 2w`}</M>. Substitute: <M>{`56 = 2(2w − 5) + 2w`}</M>.</>,
              <>Distribute: <M>{`56 = 4w − 10 + 2w`}</M>.</>,
              <>Combine: <M>{`56 = 6w − 10`}</M>.</>,
              <>Add 10: <M>{`66 = 6w`}</M> → <M>{`w = 11`}</M>.</>,
              <>Plug back to find length: <M>{`L = 2(11) − 5 = 17`}</M>.</>,
              <>Sanity check perimeter: <M>{`2(17) + 2(11) = 34 + 22 = 56`}</M> ✓.</>
            ]}
            answer="Width = 11 in, Length = 17 in"
          />

          <Example
            problem={"Mike is twice Sara's age. The sum of their ages is 36. How old is Mike?"}
            steps={[
              <>Define: Sara\'s age = s. Mike\'s = 2s.</>,
              <>Sum: <M>{`s + 2s = 36`}</M>.</>,
              <>Combine: <M>{`3s = 36`}</M> → <M>{`s = 12`}</M>.</>,
              <>The question asks for Mike\'s age, not Sara\'s. <M>{`Mike = 2 · 12 = 24`}</M>.</>
            ]}
            answer="Mike is 24"
          />

          <Callout kind="warn" title="Solve for the variable, but answer the QUESTION">
            In Mike & Sara, the equation gave us s = 12, but the question asks for Mike\'s age (2s = 24). Always re-read the question after solving to make sure you\'re reporting the right thing.
          </Callout>
        </>
      )
    },
    {
      id: 'inequalities',
      title: 'Inequalities — Like Equations, with One Twist',
      content: (
        <>
          <p>An <Term>inequality</Term> uses one of these symbols instead of equals:</p>
          <Table
            headers={['Symbol', 'Means']}
            rows={[
              ['<', 'less than'],
              ['≤', 'less than or equal to'],
              ['>', 'greater than'],
              ['≥', 'greater than or equal to']
            ]}
          />

          <p>The good news: you solve inequalities almost exactly like equations. The bad news: there\'s one rule you cannot forget.</p>

          <Callout kind="warn" title="The flip rule">
            <strong>When you multiply or divide both sides by a NEGATIVE number, you must REVERSE the direction of the inequality.</strong>
            <br/>−2x &lt; 6 → divide by −2 → x &gt; −3 (flipped from &lt; to &gt;)
          </Callout>

          <p>Why does flipping happen? Because multiplying by a negative reverses the order of numbers. 3 &lt; 5, but −3 &gt; −5. The inequality has to flip to stay accurate.</p>

          <Example
            problem={<>Solve <M>{`4 − 3x ≤ 16`}</M>.</>}
            steps={[
              <>Subtract 4 from both sides: <M>{`−3x ≤ 12`}</M>.</>,
              <>Divide by −3 — and FLIP the inequality: <M>{`x ≥ −4`}</M>.</>,
              <>Sanity check: try x = 0 (which is ≥ −4): 4 − 3(0) = 4 ≤ 16. ✓</>
            ]}
            answer="x ≥ −4"
          />

          <Callout kind="info" title="Graphing inequalities on a number line">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>&lt; or &gt;</strong> (strict): use an OPEN circle at the boundary (not included).</li>
              <li><strong>≤ or ≥</strong>: use a CLOSED (filled) circle (boundary included).</li>
              <li>Shade the line in the direction of the values that satisfy the inequality.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'quadratic',
      title: 'Quadratic Equations',
      content: (
        <>
          <p>A <Term>quadratic equation</Term> has <M>x²</M> as the highest power. Standard form:</p>
          <Formula label="Standard form">ax² + bx + c = 0</Formula>

          <p>Quadratics typically have <strong>two</strong> solutions (sometimes one repeated, sometimes none in the real numbers). On the GED you\'ll be given problems where there are real solutions.</p>

          <p className="font-semibold mt-4">Method 1 — Factoring (faster when it works)</p>
          <p>If you can factor the quadratic into <M>{`(x + p)(x + q) = 0`}</M>, then either <M>{`x + p = 0`}</M> or <M>{`x + q = 0`}</M>, giving two roots. The technique: find two numbers that multiply to <M>c</M> and add to <M>b</M>.</p>

          <Example
            problem={<>Solve <M>{`x² + 5x + 6 = 0`}</M>.</>}
            steps={[
              <>Find two numbers that multiply to 6 (the constant) and add to 5 (the middle coefficient). 2 × 3 = 6 and 2 + 3 = 5. ✓</>,
              <>Factor: <M>{`(x + 2)(x + 3) = 0`}</M>.</>,
              <>Set each factor to 0: <M>{`x + 2 = 0`}</M> gives <M>{`x = −2`}</M>; <M>{`x + 3 = 0`}</M> gives <M>{`x = −3`}</M>.</>
            ]}
            answer="x = −2 or x = −3"
          />

          <p className="font-semibold mt-4">Method 2 — The quadratic formula (always works)</p>
          <Formula label="Quadratic formula">x = [−b ± √(b² − 4ac)] / (2a)</Formula>
          <p>Plug in a, b, c from the standard form, and out come the two solutions.</p>

          <Example
            problem={<>Solve <M>{`2x² + 3x − 5 = 0`}</M> using the quadratic formula.</>}
            steps={[
              <>Identify: a = 2, b = 3, c = −5.</>,
              <>Compute the <Term>discriminant</Term> (the part under the square root): <M>{`b² − 4ac = 3² − 4(2)(−5) = 9 + 40 = 49`}</M>.</>,
              <><M>{`√49 = 7`}</M>.</>,
              <>Plug into the formula: <M>{`x = (−3 ± 7) / (2 · 2) = (−3 ± 7) / 4`}</M>.</>,
              <>Two solutions: <M>{`x = (−3 + 7)/4 = 4/4 = 1`}</M>; or <M>{`x = (−3 − 7)/4 = −10/4 = −2.5`}</M>.</>
            ]}
            answer="x = 1 or x = −2.5"
          />

          <Callout kind="tip" title="Difference of squares (special factoring case)">
            <M>{`x² − 16 = 0`}</M> factors as <M>{`(x − 4)(x + 4) = 0`}</M>, so <M>{`x = ±4`}</M>. Whenever you see "something squared minus a perfect square equals 0," use this shortcut.
          </Callout>
        </>
      )
    },
    {
      id: 'coord-plane',
      title: 'The Coordinate Plane',
      content: (
        <>
          <p>The <Term>coordinate plane</Term> is a flat surface with two perpendicular number lines: the horizontal x-axis and the vertical y-axis. They cross at the <Term>origin</Term> (0, 0). Every point on the plane has an address called an <Term>ordered pair</Term>: (x, y).</p>
          <CoordPlane
            xMin={-6} xMax={6} yMin={-6} yMax={6}
            points={[
              { x: 3, y: 4, label: 'A(3,4)' },
              { x: -2, y: 1, label: 'B(−2,1)', color: '#16a34a' },
              { x: -3, y: -3, label: 'C(−3,−3)', color: '#7c3aed' },
              { x: 4, y: -2, label: 'D(4,−2)', color: '#0ea5e9' }
            ]}
          />

          <p>The plane is divided into four <Term>quadrants</Term>, numbered counterclockwise starting from the upper right:</p>
          <Table
            headers={['Quadrant', 'x', 'y']}
            rows={[
              ['I (top right)', '+', '+'],
              ['II (top left)', '−', '+'],
              ['III (bottom left)', '−', '−'],
              ['IV (bottom right)', '+', '−']
            ]}
          />

          <Formula label="Distance between two points">d = √[(x₂ − x₁)² + (y₂ − y₁)²]</Formula>
          <Formula label="Midpoint of two points">M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</Formula>

          <Example
            problem='Find the distance between (1, 2) and (4, 6).'
            steps={[
              <>Δx = 4 − 1 = 3. Δy = 6 − 2 = 4.</>,
              <>Distance = √(3² + 4²) = √(9 + 16) = √25 = 5.</>
            ]}
            answer="5"
          />

          <Callout kind="info" title="Why distance has that formula">
            It\'s just the Pythagorean theorem from chapter 7 in disguise. Δx is the horizontal leg, Δy is the vertical leg, and the distance is the hypotenuse. <M>a² + b² = c²</M> → <M>c = √(a² + b²)</M>.
          </Callout>
        </>
      )
    },
    {
      id: 'slope-line',
      title: 'Slope, Lines & Linear Equations',
      content: (
        <>
          <p>The <Term>slope</Term> of a line is how steep it is — specifically, how much y changes per 1-unit change in x. The slope is the same no matter which two points on the line you pick.</p>
          <Formula label="Slope (rise over run)">m = (y₂ − y₁) / (x₂ − x₁)</Formula>

          <Table
            headers={['Slope sign', 'What the line does', 'Mental picture']}
            rows={[
              ['Positive (m > 0)', 'Goes UP from left to right', 'Like a hill going up'],
              ['Negative (m < 0)', 'Goes DOWN from left to right', 'Like a slide going down'],
              ['Zero (m = 0)', 'Horizontal — flat', 'A flat road; y is the same everywhere'],
              ['Undefined (vertical)', 'Vertical line', 'Wall; x is the same everywhere; division by zero']
            ]}
          />

          <Example
            problem='Find the slope of the line through (2, 5) and (8, −1).'
            steps={[
              <>m = (y₂ − y₁)/(x₂ − x₁) = (−1 − 5)/(8 − 2) = −6/6.</>,
              <>m = −1.</>,
              <>Sign check: y went DOWN (from 5 to −1) as x increased (from 2 to 8). Slope should be negative. ✓</>
            ]}
            answer="m = −1"
          />

          <p className="font-semibold mt-4">Slope-intercept form — the most useful equation of a line</p>
          <Formula>y = mx + b</Formula>
          <p>Here <M>m</M> is the slope and <M>b</M> is the <Term>y-intercept</Term> — where the line crosses the y-axis. As soon as you have a slope and a y-intercept, you have the equation.</p>

          <CoordPlane
            xMin={-5} xMax={5} yMin={-5} yMax={5}
            lines={[{ m: 2, b: -1, color: '#0ea5e9', label: 'y=2x−1' }]}
            points={[{ x: 0, y: -1, label: '(0,−1)', color: '#0ea5e9' }]}
          />

          <Example
            problem='Write the equation of the line passing through (3, 7) with slope 2.'
            steps={[
              <>Plug into y = mx + b: y = 2x + b. We know m = 2; need to find b.</>,
              <>Use the point (3, 7): 7 = 2(3) + b → 7 = 6 + b → b = 1.</>,
              <>Equation: y = 2x + 1.</>
            ]}
            answer="y = 2x + 1"
          />

          <Callout kind="formula" title="Parallel & perpendicular lines — a slope test">
            <strong>Parallel lines</strong> have the SAME slope.<br/>
            <strong>Perpendicular lines</strong> have slopes that are <strong>negative reciprocals</strong>: <M>{`m₁ · m₂ = −1`}</M>. (E.g., slope 2 ↔ slope −½. Slope ⅓ ↔ slope −3.)
          </Callout>
        </>
      )
    },
    {
      id: 'systems',
      title: 'Systems of Linear Equations — Two Equations, Two Unknowns',
      content: (
        <>
          <p>A <Term>system</Term> is two or more equations sharing the same variables. Geometrically, each linear equation is a line on the coordinate plane; the SOLUTION to the system is the point where the lines cross. There are three solution methods:</p>

          <ol className="list-decimal ml-6 text-sm space-y-1 mt-1">
            <li><strong>Graphing</strong> — draw both lines, read off the intersection. Imprecise for non-integer answers.</li>
            <li><strong>Substitution</strong> — solve one equation for one variable, plug into the other.</li>
            <li><strong>Elimination</strong> — add or subtract the two equations so one variable cancels out.</li>
          </ol>

          <p className="font-semibold mt-4">Substitution method</p>
          <Example
            problem={<>Solve: <M>{`y = 2x + 1`}</M> and <M>{`3x + y = 16`}</M>.</>}
            steps={[
              <>The first equation is already solved for y. We can substitute "<M>2x + 1</M>" wherever y appears in the second.</>,
              <>Substitute: <M>{`3x + (2x + 1) = 16`}</M>.</>,
              <>Combine: <M>{`5x + 1 = 16`}</M> → <M>{`5x = 15`}</M> → <M>{`x = 3`}</M>.</>,
              <>Plug back into the first equation to get y: <M>{`y = 2(3) + 1 = 7`}</M>.</>,
              <>Answer: (3, 7). Sanity check in second equation: 3(3) + 7 = 9 + 7 = 16. ✓</>
            ]}
            answer="(3, 7)"
          />

          <p className="font-semibold mt-4">Elimination method</p>
          <p>Multiply one or both equations by a constant so that adding them cancels one of the variables.</p>
          <Example
            problem={<>Solve: <M>{`2x + 3y = 13`}</M> and <M>{`x − y = 1`}</M>.</>}
            steps={[
              <>To cancel y, we want the y-coefficients to be opposite. The first has +3y; the second has −y. Multiply the second by 3: <M>{`3x − 3y = 3`}</M>.</>,
              <>Add the two equations: <M>{`(2x + 3y) + (3x − 3y) = 13 + 3`}</M> → <M>{`5x = 16`}</M> → <M>{`x = 3.2`}</M>.</>,
              <>Plug back into the simpler equation: <M>{`3.2 − y = 1`}</M> → <M>{`y = 2.2`}</M>.</>
            ]}
            answer="(3.2, 2.2)"
          />

          <Callout kind="tip" title="Which method should I use?">
            Substitution is best when one equation already has a variable solved (or easy to solve). Elimination is best when the coefficients are messy and lining them up is faster than isolating.
          </Callout>
        </>
      )
    },
    {
      id: 'functions',
      title: 'Functions & Function Notation',
      content: (
        <>
          <p>A <Term>function</Term> is a rule that takes any input and produces exactly ONE output. We name functions with letters like f, g, h, and write <M>{`f(x)`}</M> ("f of x") to mean "the output of function f when the input is x." The notation looks fancy but it\'s no different from y = ... — just a naming convention.</p>

          <p>So if <M>{`f(x) = 3x − 5`}</M>, then <M>{`f(4)`}</M> means "plug 4 into the rule": <M>{`3(4) − 5 = 7`}</M>. <strong>The variable is just a placeholder for whatever you put in the parentheses.</strong></p>

          <Example
            problem={<>If <M>{`f(x) = 3x − 5`}</M>, find <M>{`f(4)`}</M>.</>}
            steps={[
              <>Substitute 4 for every x: <M>{`f(4) = 3(4) − 5`}</M>.</>,
              <>Compute: <M>{`12 − 5 = 7`}</M>.</>
            ]}
            answer="7"
          />

          <Example
            problem={<>If <M>{`g(x) = x² + 2x`}</M>, find <M>{`g(−3)`}</M>.</>}
            steps={[
              <>Substitute −3 (with parens!): <M>{`g(−3) = (−3)² + 2(−3)`}</M>.</>,
              <><M>{`= 9 + (−6) = 3`}</M>.</>
            ]}
            answer="3"
          />

          <Callout kind="tip" title="The vertical line test (visual check)">
            On a graph, a relation is a function only if every vertical line intersects the graph at most once. (If a vertical line crosses twice, ONE input has TWO outputs — not a function.) So a circle is not a function; a parabola opening up or down IS a function.
          </Callout>

          <p className="font-semibold mt-4">Real-world functions</p>
          <p>Functions are everywhere: y = (number of hours worked) × (hourly wage); y = (initial cost) + (cost per mile) × x; y = (starting amount) − (rate of decrease) × x.</p>

          <Example
            problem='A pool drains at 8 gallons per minute, starting from 240 gallons. Write a function for the gallons remaining after t minutes. Then find how many gallons remain after 12 minutes.'
            steps={[
              <>Starting amount: 240. Rate of change: −8 gallons per minute.</>,
              <>Function: <M>{`G(t) = 240 − 8t`}</M>.</>,
              <>Plug in t = 12: <M>{`G(12) = 240 − 8(12) = 240 − 96 = 144`}</M>.</>
            ]}
            answer="G(t) = 240 − 8t; G(12) = 144 gallons"
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Equation', def: 'Statement that two expressions are equal.' },
      { term: 'Inequality', def: 'Statement that one expression is less than/greater than another.' },
      { term: 'Slope (m)', def: 'Rise/run, the steepness of a line.', tag: 'KEY', tagColor: 'sky' },
      { term: 'y-intercept (b)', def: 'Where the line crosses the y-axis.' },
      { term: 'Function', def: 'Rule giving exactly one output for each input.' },
      { term: 'Quadratic', def: 'Equation with x² as highest power. Usually has two solutions.' },
      { term: 'Discriminant', def: 'b² − 4ac, the part under the square root in the quadratic formula.' },
      { term: 'System of equations', def: 'Two or more equations sharing the same variables.' }
    ],
    laws: [
      { name: 'Slope formula', desc: 'm = (y₂−y₁)/(x₂−x₁)' },
      { name: 'Slope-intercept form', desc: 'y = mx + b' },
      { name: 'Point-slope form', desc: 'y − y₁ = m(x − x₁)' },
      { name: 'Quadratic formula', desc: 'x = [−b ± √(b² − 4ac)] / (2a)' },
      { name: 'Distance formula', desc: 'd = √[(x₂−x₁)² + (y₂−y₁)²]' },
      { name: 'Midpoint formula', desc: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)' },
      { name: 'Parallel slopes', desc: 'Equal: m₁ = m₂.' },
      { name: 'Perpendicular slopes', desc: 'Negative reciprocals: m₁·m₂ = −1.' }
    ],
    methods: [
      { name: 'Reverse PEMDAS to solve', desc: 'When solving for a variable, undo operations in REVERSE order: addition/subtraction first, then multiplication/division.' },
      { name: 'Flip the inequality', desc: 'Reverse the symbol whenever multiplying or dividing by a negative.' },
      { name: 'Substitution', desc: 'Solve one equation for one variable, plug into the other.' },
      { name: 'Elimination', desc: 'Multiply equations to make opposite coefficients, then add to cancel one variable.' },
      { name: 'Factor first, then formula', desc: 'For quadratics, try factoring first; if it doesn\'t come quickly, fall back to the quadratic formula.' }
    ]
  },
  questions: [
    { q: 'Solve 2x − 9 = 17.', type: 'math', correct: 13, difficulty: 'E', explanation: '2x = 26 → x = 13.' },
    { q: 'Solve 3(x − 4) + 5 = 14.', type: 'math', correct: 7, difficulty: 'M', explanation: '3x − 12 + 5 = 14 → 3x − 7 = 14 → 3x = 21 → x = 7.' },
    { q: 'Slope of the line through (1, 2) and (4, 14)?', type: 'math', correct: 4, difficulty: 'E', explanation: '(14−2)/(4−1) = 12/3 = 4.' },
    { q: 'Solve −5x + 3 > 18.', type: 'mcq', choices: ['x > −3', 'x < −3', 'x > 3', 'x < 3'], correct: 1, difficulty: 'M', explanation: '−5x > 15 → divide by −5 and FLIP: x < −3.' },
    { q: 'Solve x² − 7x + 12 = 0.', type: 'mcq', choices: ['x = 3 or x = 4', 'x = −3 or x = −4', 'x = 3 or x = −4', 'x = 6 or x = 2'], correct: 0, difficulty: 'M', explanation: 'Two numbers that multiply to 12 and add to −7: −3 and −4. Factor: (x−3)(x−4) = 0 → x = 3 or 4.' },
    { q: 'For f(x) = x² − 4x + 1, find f(5).', type: 'math', correct: 6, difficulty: 'M', explanation: 'f(5) = 25 − 20 + 1 = 6.' },
    { q: 'A line has slope 3 and passes through (2, 5). Its y-intercept is:', type: 'math', correct: -1, difficulty: 'M', explanation: 'y = mx + b → 5 = 3(2) + b → b = 5 − 6 = −1.' },
    { q: 'Solve the system: y = x + 2, 2x + y = 11.', type: 'mcq', choices: ['(3, 5)', '(2, 4)', '(5, 7)', '(1, 3)'], correct: 0, difficulty: 'M', explanation: 'Substitute: 2x + (x+2) = 11 → 3x = 9 → x = 3; y = 5.' },
    { q: 'Tickets cost $8 for adults and $5 for kids. 240 tickets sold for $1,605. How many adult tickets?', type: 'math', correct: 135, difficulty: 'H', explanation: 'Let a = adults, k = kids. a + k = 240 (i); 8a + 5k = 1605 (ii). Multiply (i) by 5: 5a + 5k = 1200. Subtract from (ii): 3a = 405 → a = 135.' },
    { q: 'Two lines y = 2x + 3 and y = mx + 5 are perpendicular. Find m.', type: 'mcq', choices: ['2', '−2', '1/2', '−1/2'], correct: 3, difficulty: 'H', explanation: 'Perpendicular slopes are negative reciprocals: m = −1/2.' },
    { q: 'Solve x² = 49.', type: 'mcq', choices: ['x = 7 only', 'x = −7 only', 'x = 7 or x = −7', 'no solution'], correct: 2, difficulty: 'M', explanation: 'Both 7 and −7 square to 49. So x = ±7.' },
    { q: 'Find the distance between (1, 1) and (4, 5).', type: 'math', correct: 5, difficulty: 'M', explanation: 'Δx=3, Δy=4. d = √(9+16) = √25 = 5.' }
  ]
};
