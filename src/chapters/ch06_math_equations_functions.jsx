import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, CoordPlane, Term } from '../components/Visual.jsx';

export default {
  id: 6,
  title: 'Math 6 — Equations, Inequalities & Functions',
  subtitle: 'Solving linear equations, word-problem setup, inequalities, quadratics, the coordinate plane, slope, and functions.',
  blocks: [
    {
      id: 'linear-eq',
      title: 'Solving Linear Equations',
      content: (
        <>
          <p>An <Term>equation</Term> says two expressions are equal. To <strong>solve</strong> an equation means to isolate the variable. Use these tools:</p>
          <Callout kind="formula" title="The four equality moves">
            <ol className="list-decimal ml-5 text-sm">
              <li>Add the same number to both sides.</li>
              <li>Subtract the same number from both sides.</li>
              <li>Multiply both sides by the same nonzero number.</li>
              <li>Divide both sides by the same nonzero number.</li>
            </ol>
          </Callout>

          <Example
            problem={<>Solve <M>{`3x − 7 = 14`}</M>.</>}
            steps={[
              <>Add 7 to both sides: <M>{`3x = 21`}</M>.</>,
              <>Divide both sides by 3: <M>{`x = 7`}</M>.</>,
              <>Check: <M>{`3(7) − 7 = 21 − 7 = 14 ✓`}</M>.</>
            ]}
            answer="x = 7"
          />

          <Example
            problem={<>Solve <M>{`5(x − 2) + 3 = 2x + 10`}</M>.</>}
            steps={[
              <>Distribute: <M>{`5x − 10 + 3 = 2x + 10`}</M>.</>,
              <>Combine: <M>{`5x − 7 = 2x + 10`}</M>.</>,
              <>Subtract 2x both sides: <M>{`3x − 7 = 10`}</M>.</>,
              <>Add 7: <M>{`3x = 17`}</M>.</>,
              <>Divide by 3: <M>{`x = 17/3 ≈ 5.67`}</M>.</>
            ]}
            answer={<>x = <Frac n="17" d="3" /></>}
          />

          <Example
            problem={<>Solve <M>{`(x + 4)/3 − (x − 1)/2 = 1`}</M>.</>}
            steps={[
              <>Multiply both sides by LCD = 6: <M>{`6 · (x+4)/3 − 6 · (x−1)/2 = 6`}</M>.</>,
              <>Simplify: <M>{`2(x+4) − 3(x−1) = 6`}</M>.</>,
              <>Distribute: <M>{`2x + 8 − 3x + 3 = 6`}</M>.</>,
              <>Combine: <M>{`−x + 11 = 6`}</M>.</>,
              <>Subtract 11: <M>{`−x = −5`}</M> → <M>{`x = 5`}</M>.</>
            ]}
            answer="x = 5"
          />
        </>
      )
    },
    {
      id: 'word-equations',
      title: 'Word Problems with Equations',
      content: (
        <>
          <Callout kind="tip" title="The 4-step setup">
            <ol className="list-decimal ml-5 text-sm">
              <li><strong>Define</strong> the variable: "Let x = …"</li>
              <li><strong>Translate</strong> the relationships into an equation.</li>
              <li><strong>Solve</strong> the equation.</li>
              <li><strong>Answer the question</strong> in words and check.</li>
            </ol>
          </Callout>

          <Example
            problem='The length of a rectangle is 5 less than twice its width. The perimeter is 56 inches. Find the dimensions.'
            steps={[
              <>Let <M>{`w`}</M> = width. Then length <M>{`L = 2w − 5`}</M>.</>,
              <>Perimeter formula: <M>{`P = 2L + 2w`}</M>. Substitute: <M>{`56 = 2(2w − 5) + 2w`}</M>.</>,
              <>Distribute: <M>{`56 = 4w − 10 + 2w`}</M>.</>,
              <>Combine: <M>{`56 = 6w − 10`}</M>.</>,
              <>Add 10: <M>{`66 = 6w`}</M> → <M>{`w = 11`}</M>.</>,
              <>Length: <M>{`L = 2(11) − 5 = 17`}</M>.</>
            ]}
            answer="Width = 11 in, Length = 17 in"
          />

          <Example
            problem={"Mike is twice Sara's age. The sum of their ages is 36. How old is Mike?"}
            steps={[
              <>Let Sara's age = s. Mike's = 2s.</>,
              <>Equation: s + 2s = 36 → 3s = 36 → s = 12.</>,
              <>Mike: 2 × 12 = 24.</>
            ]}
            answer="Mike is 24"
          />
        </>
      )
    },
    {
      id: 'inequalities',
      title: 'Inequalities',
      content: (
        <>
          <p>Same rules as equations, with one critical exception:</p>
          <Callout kind="warn" title="Flip the sign">
            When you <strong>multiply or divide both sides by a negative</strong>, reverse the inequality. <M>{`−2x < 6`}</M> → <M>{`x > −3`}</M>.
          </Callout>

          <Example
            problem={<>Solve <M>{`4 − 3x ≤ 16`}</M>.</>}
            steps={[
              <>Subtract 4: <M>{`−3x ≤ 12`}</M>.</>,
              <>Divide by −3 → flip: <M>{`x ≥ −4`}</M>.</>
            ]}
            answer="x ≥ −4"
          />

          <Table
            headers={['Symbol', 'Means', 'Graphed as']}
            rows={[
              ['<', 'less than', 'open circle, line going left'],
              ['≤', 'less than or equal', 'closed (filled) circle, line going left'],
              ['>', 'greater than', 'open circle, line going right'],
              ['≥', 'greater than or equal', 'closed circle, line going right']
            ]}
          />
        </>
      )
    },
    {
      id: 'quadratic',
      title: 'Quadratic Equations',
      content: (
        <>
          <Formula label="Standard form">ax² + bx + c = 0</Formula>
          <p>Two main solution methods on the GED: <strong>factoring</strong> and the <strong>quadratic formula</strong>.</p>

          <p className="font-semibold mt-3">Method 1 — Factoring</p>
          <Example
            problem={<>Solve <M>{`x² + 5x + 6 = 0`}</M>.</>}
            steps={[
              <>Find two numbers that multiply to 6 and add to 5: 2 and 3.</>,
              <>Factor: <M>{`(x + 2)(x + 3) = 0`}</M>.</>,
              <>Set each factor = 0: <M>{`x = −2`}</M> or <M>{`x = −3`}</M>.</>
            ]}
            answer="x = −2 or x = −3"
          />

          <p className="font-semibold mt-3">Method 2 — Quadratic formula</p>
          <Formula>x = [−b ± √(b² − 4ac)] / (2a)</Formula>
          <p>Always works, even when the equation doesn't factor nicely.</p>

          <Example
            problem={<>Solve <M>{`2x² + 3x − 5 = 0`}</M> using the quadratic formula.</>}
            steps={[
              <>Identify: a = 2, b = 3, c = −5.</>,
              <>Discriminant: <M>{`b² − 4ac = 9 − 4(2)(−5) = 9 + 40 = 49`}</M>.</>,
              <>√49 = 7.</>,
              <><M>{`x = (−3 ± 7) / 4`}</M>.</>,
              <>Two answers: <M>{`x = (−3 + 7)/4 = 1`}</M> or <M>{`x = (−3 − 7)/4 = −2.5`}</M>.</>
            ]}
            answer="x = 1 or x = −2.5"
          />

          <Callout kind="tip" title="Difference of squares">
            <M>{`x² − 16 = 0`}</M> factors as <M>{`(x − 4)(x + 4) = 0`}</M>, giving <M>{`x = ±4`}</M>.
          </Callout>
        </>
      )
    },
    {
      id: 'coord-plane',
      title: 'The Coordinate Plane',
      content: (
        <>
          <CoordPlane
            xMin={-6} xMax={6} yMin={-6} yMax={6}
            points={[
              { x: 3, y: 4, label: 'A(3,4)' },
              { x: -2, y: 1, label: 'B(−2,1)', color: '#16a34a' },
              { x: -3, y: -3, label: 'C(−3,−3)', color: '#7c3aed' },
              { x: 4, y: -2, label: 'D(4,−2)', color: '#0ea5e9' }
            ]}
          />
          <p>Each point is an ordered pair <M>(x, y)</M>. The plane has 4 quadrants:</p>
          <Table
            headers={['Quadrant', 'x', 'y']}
            rows={[
              ['I (top right)', '+', '+'],
              ['II (top left)', '−', '+'],
              ['III (bottom left)', '−', '−'],
              ['IV (bottom right)', '+', '−']
            ]}
          />

          <Formula label="Distance">d = √[(x₂ − x₁)² + (y₂ − y₁)²]</Formula>
          <Formula label="Midpoint">M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</Formula>

          <Example
            problem='Find the distance between (1, 2) and (4, 6).'
            steps={[
              <>Δx = 4 − 1 = 3; Δy = 6 − 2 = 4.</>,
              <>Distance: √(3² + 4²) = √(9 + 16) = √25 = 5.</>
            ]}
            answer="5"
          />
        </>
      )
    },
    {
      id: 'slope-line',
      title: 'Slope, Lines & Linear Equations',
      content: (
        <>
          <Formula label="Slope">m = (y₂ − y₁) / (x₂ − x₁) = rise/run</Formula>
          <Table
            headers={['Slope', 'Line description']}
            rows={[
              ['Positive', 'Goes up from left to right'],
              ['Negative', 'Goes down from left to right'],
              ['Zero', 'Horizontal'],
              ['Undefined', 'Vertical (x is constant)']
            ]}
          />

          <Example
            problem='Find the slope between (2, 5) and (8, −1).'
            steps={[
              <>m = (y₂ − y₁)/(x₂ − x₁) = (−1 − 5)/(8 − 2) = −6/6.</>,
              <>m = −1.</>
            ]}
            answer="m = −1"
          />

          <Formula label="Slope-intercept form">y = mx + b</Formula>
          <p><M>m</M> = slope. <M>b</M> = y-intercept (where the line crosses the y-axis).</p>

          <CoordPlane
            xMin={-5} xMax={5} yMin={-5} yMax={5}
            lines={[{ m: 2, b: -1, color: '#0ea5e9', label: 'y=2x−1' }]}
            points={[{ x: 0, y: -1, label: '(0,−1)', color: '#0ea5e9' }]}
          />

          <Example
            problem='Write the equation of the line passing through (3, 7) with slope 2.'
            steps={[
              <>y = mx + b. Plug m = 2: y = 2x + b.</>,
              <>Use the point (3, 7): 7 = 2(3) + b → 7 = 6 + b → b = 1.</>,
              <>Equation: y = 2x + 1.</>
            ]}
            answer="y = 2x + 1"
          />

          <Callout kind="formula" title="Parallel & perpendicular">
            <strong>Parallel</strong> lines have the SAME slope.<br/>
            <strong>Perpendicular</strong> lines have slopes that are <strong>negative reciprocals</strong>: m₁ · m₂ = −1. (E.g., slope 2 and slope −½.)
          </Callout>
        </>
      )
    },
    {
      id: 'systems',
      title: 'Systems of Linear Equations',
      content: (
        <>
          <p>Two or more equations with the same variables. Three solution methods: <strong>graph</strong>, <strong>substitution</strong>, <strong>elimination</strong>.</p>

          <p className="font-semibold mt-3">Substitution method</p>
          <Example
            problem={<>Solve: <M>{`y = 2x + 1`}</M> and <M>{`3x + y = 16`}</M>.</>}
            steps={[
              <>First equation already has y isolated.</>,
              <>Substitute into second: <M>{`3x + (2x + 1) = 16`}</M>.</>,
              <>Combine: <M>{`5x + 1 = 16`}</M> → <M>{`5x = 15`}</M> → <M>{`x = 3`}</M>.</>,
              <>Plug back: <M>{`y = 2(3) + 1 = 7`}</M>.</>
            ]}
            answer="(3, 7)"
          />

          <p className="font-semibold mt-3">Elimination method</p>
          <Example
            problem={<>Solve: <M>{`2x + 3y = 13`}</M> and <M>{`x − y = 1`}</M>.</>}
            steps={[
              <>Multiply second equation by 3 to align y-coefficients: <M>{`3x − 3y = 3`}</M>.</>,
              <>Add the two equations: <M>{`(2x + 3y) + (3x − 3y) = 13 + 3`}</M> → <M>{`5x = 16`}</M> → <M>{`x = 3.2`}</M>.</>,
              <>Plug back: <M>{`3.2 − y = 1`}</M> → <M>{`y = 2.2`}</M>.</>
            ]}
            answer="(3.2, 2.2)"
          />
        </>
      )
    },
    {
      id: 'functions',
      title: 'Functions & Function Notation',
      content: (
        <>
          <p>A <Term>function</Term> is a rule that gives <strong>exactly one output</strong> for each input. We write functions like <M>{`f(x)`}</M> ("f of x").</p>

          <Example
            problem={<>If <M>{`f(x) = 3x − 5`}</M>, find <M>{`f(4)`}</M>.</>}
            steps={[
              <>Substitute 4 wherever x appears: <M>{`f(4) = 3(4) − 5`}</M>.</>,
              <>Compute: <M>{`12 − 5 = 7`}</M>.</>
            ]}
            answer="7"
          />

          <Example
            problem={<>If <M>{`g(x) = x² + 2x`}</M>, find <M>{`g(−3)`}</M>.</>}
            steps={[
              <><M>{`g(−3) = (−3)² + 2(−3)`}</M>.</>,
              <><M>{`= 9 − 6 = 3`}</M>.</>
            ]}
            answer="3"
          />

          <Callout kind="tip" title="Vertical line test">
            A graph represents a function only if every vertical line crosses the graph at most once. (If a vertical line crosses twice, one input has two outputs — not a function.)
          </Callout>

          <p className="font-semibold mt-3">Function applications — linear models</p>
          <Example
            problem='A pool drains at 8 gallons per minute, starting from 240 gallons. Write a function for the gallons remaining after t minutes.'
            steps={[
              <>Start: 240. Rate of change: −8 per minute.</>,
              <>Function: <M>{`G(t) = 240 − 8t`}</M>.</>
            ]}
            answer="G(t) = 240 − 8t"
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Equation', def: 'Statement that two expressions are equal.' },
      { term: 'Variable', def: 'Letter standing for a value.' },
      { term: 'Slope (m)', def: 'Rise/run, the steepness of a line.', tag: 'KEY', tagColor: 'sky' },
      { term: 'y-intercept (b)', def: 'Where the line crosses the y-axis.' },
      { term: 'Function', def: 'Rule giving exactly one output for each input.' },
      { term: 'Quadratic', def: 'Equation with x² as highest power.' }
    ],
    laws: [
      { name: 'Slope formula', desc: 'm = (y₂−y₁)/(x₂−x₁)' },
      { name: 'Slope-intercept form', desc: 'y = mx + b' },
      { name: 'Point-slope form', desc: 'y − y₁ = m(x − x₁)' },
      { name: 'Quadratic formula', desc: 'x = [−b ± √(b² − 4ac)] / (2a)' },
      { name: 'Distance formula', desc: 'd = √[(x₂−x₁)² + (y₂−y₁)²]' },
      { name: 'Midpoint formula', desc: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)' }
    ],
    methods: [
      { name: 'PEMDAS-back', desc: 'When solving, undo operations in reverse order — addition/subtraction first, then multiplication/division.' },
      { name: 'Flip the inequality', desc: 'Reverse the symbol whenever multiplying or dividing by a negative.' },
      { name: 'Substitution', desc: 'Solve one equation for one variable, plug into the other.' },
      { name: 'Elimination', desc: 'Multiply equations to make opposite coefficients, then add to cancel.' }
    ]
  },
  questions: [
    { q: 'Solve 2x − 9 = 17.', type: 'math', correct: 13, difficulty: 'E', explanation: '2x = 26 → x = 13.' },
    { q: 'Solve 3(x − 4) + 5 = 14.', type: 'math', correct: 7, difficulty: 'M', explanation: '3x − 12 + 5 = 14 → 3x − 7 = 14 → 3x = 21 → x = 7.' },
    { q: 'Slope of the line through (1, 2) and (4, 14)?', type: 'math', correct: 4, difficulty: 'E', explanation: '(14−2)/(4−1) = 12/3 = 4.' },
    { q: 'Solve −5x + 3 > 18.', type: 'mcq', choices: ['x > −3', 'x < −3', 'x > 3', 'x < 3'], correct: 1, difficulty: 'M', explanation: '−5x > 15 → divide by −5, flip: x < −3.' },
    { q: 'Solve x² − 7x + 12 = 0.', type: 'mcq', choices: ['x = 3 or x = 4', 'x = −3 or x = −4', 'x = 3 or x = −4', 'x = 6 or x = 2'], correct: 0, difficulty: 'M', explanation: '(x−3)(x−4) = 0 → x = 3 or x = 4.' },
    { q: 'For f(x) = x² − 4x + 1, find f(5).', type: 'math', correct: 6, difficulty: 'M', explanation: '25 − 20 + 1 = 6.' },
    { q: 'A line has slope 3 and passes through (2, 5). Its y-intercept is:', type: 'math', correct: -1, difficulty: 'M', explanation: '5 = 3(2) + b → b = 5 − 6 = −1.' },
    { q: 'Solve the system: y = x + 2, 2x + y = 11.', type: 'mcq', choices: ['(3, 5)', '(2, 4)', '(5, 7)', '(1, 3)'], correct: 0, difficulty: 'M', explanation: 'Sub: 2x + (x+2) = 11 → 3x = 9 → x = 3, y = 5.' },
    { q: 'Tickets cost $8 for adults and $5 for kids. 240 tickets sold for $1,605. How many adult tickets?', type: 'math', correct: 135, difficulty: 'H', explanation: 'Let a = adults, k = kids. a + k = 240; 8a + 5k = 1605. Multiply first by 5: 5a + 5k = 1200. Subtract: 3a = 405 → a = 135.' },
    { q: 'Two lines y = 2x + 3 and y = mx + 5 are perpendicular. m = ?', type: 'mcq', choices: ['2', '−2', '1/2', '−1/2'], correct: 3, difficulty: 'H', explanation: 'Perpendicular slopes are negative reciprocals: m = −1/2.' }
  ]
};
