import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, Triangle, Rectangle, CircleFig, Term } from '../components/Visual.jsx';

export default {
  id: 7,
  title: 'Math 7 — Geometry',
  subtitle: 'Shapes, angles, area, perimeter, the Pythagorean theorem, volume, surface area, and how to break complicated figures into pieces you know.',
  blocks: [
    {
      id: 'why-geometry',
      title: 'Why Geometry Matters & What\'s Different',
      content: (
        <>
          <p>Geometry is the part of math that deals with <strong>space and shape</strong>. It\'s the math you actually use when you\'re measuring a room for flooring, deciding how much paint to buy, packing a box, or building anything physical. The GED tests it heavily — about 20% of the math test plus connections in science questions.</p>

          <Callout kind="info" title="The GED gives you a formula sheet">
            On the math test, an on-screen formula sheet shows the most important geometry formulas (perimeter, area, volume, surface area, Pythagorean theorem). You don\'t have to memorize the formulas perfectly — but you DO need to know which formula goes with which shape, and how to use it. Treat the formula sheet as a backup, not a crutch.
          </Callout>

          <p className="mt-3">The biggest difference from the algebra chapters: in geometry you often have to <strong>read a figure</strong> to find the values to plug in. So the skill being tested isn\'t just arithmetic — it\'s seeing the right shape inside a more complex picture.</p>
        </>
      )
    },
    {
      id: 'plane-figures',
      title: 'Plane Figures & Angles',
      content: (
        <>
          <p>"Plane figures" are flat 2D shapes — triangles, rectangles, circles, and so on. Most plane shapes are named after how many sides they have:</p>
          <Table
            headers={['Sides', 'Name', 'Sum of interior angles']}
            rows={[
              ['3', 'Triangle', '180°'],
              ['4', 'Quadrilateral', '360°'],
              ['5', 'Pentagon', '540°'],
              ['6', 'Hexagon', '720°'],
              ['7', 'Heptagon', '900°'],
              ['8', 'Octagon', '1080°']
            ]}
          />

          <Callout kind="formula" title="Sum of interior angles of an n-gon">
            <M>{`(n − 2) × 180°`}</M>. Memorizing this formula saves you from memorizing the table.
          </Callout>

          <p className="font-semibold mt-4">Angle types — by size</p>
          <Table
            headers={['Type', 'Range', 'Example']}
            rows={[
              ['Acute', 'Less than 90°', 'corner of an A'],
              ['Right', 'Exactly 90°', 'corner of a square'],
              ['Obtuse', 'More than 90°, less than 180°', 'open laptop screen'],
              ['Straight', 'Exactly 180°', 'a flat line'],
              ['Reflex', 'More than 180°', 'rare on the GED']
            ]}
          />

          <Callout kind="info" title="Common angle relationships — these come up constantly">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Complementary angles</strong> sum to 90°. (Two angles forming a right angle.)</li>
              <li><strong>Supplementary angles</strong> sum to 180°. (Two angles on a straight line.)</li>
              <li><strong>Vertical angles</strong>: when two lines cross, the opposite angles are EQUAL.</li>
              <li>When parallel lines are cut by a third line (a "transversal"): <strong>corresponding angles</strong> are equal, and <strong>alternate interior angles</strong> are equal.</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="Memory hooks for complementary vs supplementary">
            <strong>C</strong>omplementary = <strong>C</strong>orner (90°). <strong>S</strong>upplementary = <strong>S</strong>traight line (180°). Or: alphabetical order — C comes before S, just like 90 comes before 180.
          </Callout>
        </>
      )
    },
    {
      id: 'triangles',
      title: 'Triangles — The Most Important Shape',
      content: (
        <>
          <Triangle type="right" sides={{ a: 'a = 3', b: 'b = 4', c: 'c = 5' }} angles={{ A: '90°' }} />

          <p>Triangles are the building blocks of all polygons — any 4+ sided polygon can be cut into triangles. They\'re also the basis for the Pythagorean theorem and a lot of trigonometry. Triangles are classified two ways:</p>

          <p className="font-semibold mt-3">By sides:</p>
          <Table
            headers={['Type', 'Description']}
            rows={[
              ['Equilateral', 'All 3 sides equal; all angles 60°'],
              ['Isosceles', '2 equal sides; the 2 angles opposite those sides are equal too'],
              ['Scalene', 'No equal sides; no equal angles']
            ]}
          />

          <p className="font-semibold mt-3">By largest angle:</p>
          <Table
            headers={['Type', 'Description']}
            rows={[
              ['Acute', 'All three angles less than 90°'],
              ['Right', 'Exactly one 90° angle'],
              ['Obtuse', 'Exactly one angle greater than 90°']
            ]}
          />

          <Callout kind="formula" title="Triangle Sum Theorem">
            The three interior angles of any triangle <strong>always sum to 180°</strong>. This is non-negotiable. If you know two angles, you can find the third by subtracting.
          </Callout>

          <Example
            problem='In a triangle, two angles are 35° and 80°. What is the third angle?'
            steps={[
              <>Sum of all three angles = 180°.</>,
              <>Third angle = 180 − 35 − 80 = 65°.</>
            ]}
            answer="65°"
          />

          <Callout kind="tip" title="Similar triangles — proportional shrinking and growing">
            <p>Two triangles are <Term>similar</Term> when they have the same angles but possibly different sizes. Their corresponding sides are <strong>proportional</strong> — multiplying every side of one triangle by the same scaling factor gives the other.</p>
            <p>This shows up in shadow problems, scale-model problems, and lots of GED setups: "a flagpole casts a 25-ft shadow at the same time a 6-ft person casts a 4-ft shadow — how tall is the flagpole?" Set up a proportion: 6/4 = h/25.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'pythagorean',
      title: 'The Pythagorean Theorem',
      content: (
        <>
          <p>One of the most famous and useful equations in all of math. It applies <strong>only to right triangles</strong>:</p>
          <Formula>a² + b² = c²</Formula>
          <p>where <M>a</M> and <M>b</M> are the lengths of the two <Term>legs</Term> (the sides forming the right angle), and <M>c</M> is the <Term>hypotenuse</Term> — the side opposite the right angle, always the longest.</p>

          <Triangle type="right" sides={{ a: 'a', b: 'b', c: 'c' }} angles={{ A: '90°' }} />

          <Example
            problem='A right triangle has legs 6 and 8. Find the hypotenuse.'
            steps={[
              <>a² + b² = c² → 6² + 8² = c² → 36 + 64 = 100.</>,
              <>c = √100 = 10.</>
            ]}
            answer="10"
          />

          <Example
            problem='A 17-foot ladder leans against a wall. The base is 8 feet from the wall. How high up the wall does the ladder reach?'
            steps={[
              <>Visualize the right triangle: ground (horizontal leg = 8 ft), wall (vertical leg = h, what we want), ladder (hypotenuse = 17 ft).</>,
              <>Apply: a² + b² = c². → 8² + h² = 17² → 64 + h² = 289.</>,
              <>h² = 289 − 64 = 225. h = √225 = 15.</>
            ]}
            answer="15 ft"
          />

          <Callout kind="formula" title="Common Pythagorean triples — memorize these">
            These are sets of three whole numbers that satisfy a² + b² = c². Recognizing them on the test saves time.
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li>3-4-5 (and any multiple: 6-8-10, 9-12-15, 30-40-50, …)</li>
              <li>5-12-13</li>
              <li>8-15-17</li>
              <li>7-24-25</li>
              <li>20-21-29</li>
            </ul>
            If you see two of these three numbers in a right-triangle problem, the third is probably the answer.
          </Callout>

          <Callout kind="tip" title="When to use the Pythagorean theorem">
            Whenever there\'s a right angle and you know two of the three side lengths. This includes ladder problems, shadow problems, distance-on-a-coordinate-plane problems (the distance formula IS the Pythagorean theorem), TV diagonal problems, and so on.
          </Callout>
        </>
      )
    },
    {
      id: 'perimeter-area',
      title: 'Perimeter & Area — Around vs Inside',
      content: (
        <>
          <p><Term>Perimeter</Term> is the total distance around a shape — what you\'d measure if you walked the boundary. <Term>Area</Term> is how much surface is enclosed inside — what you\'d measure if you were buying carpet or paint.</p>

          <p>Perimeter is measured in linear units (feet, meters, inches). Area is measured in <strong>square</strong> units (square feet, square meters). Confusing the two is one of the most common test mistakes.</p>

          <Rectangle w="length (l)" h="width (w)" />

          <Callout kind="formula" title="Key formulas (all on the formula sheet, memorize anyway)">
            <Table
              headers={['Shape', 'Perimeter', 'Area']}
              rows={[
                ['Rectangle', 'P = 2l + 2w', 'A = l × w'],
                ['Square', 'P = 4s', 'A = s²'],
                ['Triangle', 'P = a + b + c', 'A = ½ × b × h'],
                ['Parallelogram', 'P = 2a + 2b', 'A = b × h'],
                ['Trapezoid', 'P = sum of all 4 sides', 'A = ½(b₁ + b₂) × h']
              ]}
            />
          </Callout>

          <Callout kind="warn" title="In a triangle, h is the HEIGHT — perpendicular to the base">
            Don\'t use a slanted side as h. The "height" in <M>{`A = ½bh`}</M> must form a right angle with the base. For a right triangle, the two legs ARE the base and height.
          </Callout>

          <Example
            problem='A rectangular garden is 20 ft by 12 ft. Find the perimeter and the area.'
            steps={[
              <>Perimeter: P = 2(20) + 2(12) = 40 + 24 = 64 ft.</>,
              <>Area: A = 20 × 12 = 240 ft².</>
            ]}
            answer="P = 64 ft, A = 240 ft²"
          />

          <Example
            problem='A triangle has base 14 in and height 9 in. Find its area.'
            steps={[
              <>A = ½ · b · h = ½ · 14 · 9.</>,
              <>= 7 × 9 = 63 in².</>
            ]}
            answer="63 in²"
          />

          <Example
            problem='A trapezoid has parallel sides of length 6 m and 10 m, and a height of 4 m. Area?'
            steps={[
              <>A = ½(b₁ + b₂)·h = ½(6 + 10)(4) = ½ · 16 · 4 = 32.</>
            ]}
            answer="32 m²"
          />
        </>
      )
    },
    {
      id: 'circles',
      title: 'Circles — π and the Two Big Formulas',
      content: (
        <>
          <CircleFig radius="r" diameter="d" />

          <p>A circle has only one measurement: how big it is across. There are two equivalent ways to express that:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Radius (r)</strong> — distance from center to the edge.</li>
            <li><strong>Diameter (d)</strong> — distance all the way across through the center. <M>d = 2r</M>.</li>
          </ul>

          <p>The number <M>π</M> ("pi") is the ratio of any circle\'s circumference to its diameter. It\'s about 3.14159..., but for the GED, use <M>π ≈ 3.14</M> (or the calculator\'s π key for more precision).</p>

          <Callout kind="formula" title="Circle formulas">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Circumference</strong> (perimeter of a circle): <M>C = 2πr</M> = <M>πd</M></li>
              <li><strong>Area</strong>: <M>A = πr²</M></li>
            </ul>
          </Callout>

          <Example
            problem='A pizza has radius 7 inches. Find its circumference and area (use π ≈ 3.14).'
            steps={[
              <>Circumference: C = 2 · π · 7 = 14π ≈ 14 × 3.14 = 43.96 in.</>,
              <>Area: A = π · 7² = 49π ≈ 49 × 3.14 = 153.86 in².</>
            ]}
            answer="C ≈ 43.96 in; A ≈ 153.86 in²"
          />

          <Callout kind="warn" title="Diameter vs radius — this trips people up">
            If a problem GIVES you the diameter, divide by 2 BEFORE using the radius formulas. <M>{`A = πr²`}</M>, NOT <M>πd²</M>. A pizza with a 14-inch diameter has radius 7. Its area is <M>π · 7² = 49π</M>, not <M>π · 14² = 196π</M>.
          </Callout>
        </>
      )
    },
    {
      id: 'volume',
      title: 'Volume of 3D Solids',
      content: (
        <>
          <p><Term>Volume</Term> measures how much SPACE a 3D solid takes up — the inside, the capacity. Volume is in <strong>cubic</strong> units (cubic feet, cubic centimeters). 1 cubic foot is the size of a 1×1×1 box.</p>

          <Callout kind="formula" title="Memorize these (also on GED formula sheet)">
            <Table
              headers={['Solid', 'Volume formula']}
              rows={[
                ['Rectangular prism (box)', 'V = l · w · h'],
                ['Cube', 'V = s³'],
                ['Cylinder (can)', 'V = π · r² · h'],
                ['Cone', 'V = ⅓ · π · r² · h'],
                ['Sphere (ball)', 'V = (4/3) · π · r³'],
                ['Pyramid (rectangular base)', 'V = ⅓ · l · w · h']
              ]}
            />
          </Callout>

          <Callout kind="info" title="The pattern: cones and pyramids are 1/3 of their cylinder/prism">
            A cone fits inside a cylinder of the same base and height — it takes up exactly 1/3 of the space. Same for a pyramid inside a box of equal base and height. That "1/3" factor is built into both formulas.
          </Callout>

          <Example
            problem='A cylindrical can has radius 3 in and height 8 in. What is its volume?'
            steps={[
              <>V = πr²h = π · 9 · 8 = 72π.</>,
              <>≈ 72 × 3.14 = 226.19 in³.</>
            ]}
            answer="≈ 226.19 in³"
          />

          <Example
            problem='A rectangular box is 12 cm long, 8 cm wide, and 5 cm tall. Find the volume in cm³ and convert to liters (1 L = 1,000 cm³).'
            steps={[
              <>V = l·w·h = 12 · 8 · 5 = 480 cm³.</>,
              <>Convert: 480 ÷ 1,000 = 0.48 L.</>
            ]}
            answer="480 cm³ = 0.48 L"
          />

          <Example
            problem='A sphere has radius 6 cm. Find its volume.'
            steps={[
              <>V = (4/3)·π·r³.</>,
              <>r³ = 6 × 6 × 6 = 216.</>,
              <>V = (4/3) × π × 216 = 288π ≈ 904.78 cm³.</>
            ]}
            answer="≈ 904.78 cm³"
          />
        </>
      )
    },
    {
      id: 'surface-area',
      title: 'Surface Area — How Much Paint to Buy',
      content: (
        <>
          <p>While volume is "how much fits inside," <Term>surface area</Term> is "how much SKIN does the solid have" — the total area of all its outer faces. Volume is in cubic units; surface area is in <strong>square</strong> units.</p>

          <Callout kind="formula" title="Surface area formulas">
            <Table
              headers={['Solid', 'Surface area']}
              rows={[
                ['Cube (6 equal faces)', 'SA = 6s²'],
                ['Rectangular prism (box)', 'SA = 2lw + 2lh + 2wh'],
                ['Cylinder', 'SA = 2πr² + 2πrh'],
                ['Sphere', 'SA = 4πr²']
              ]}
            />
          </Callout>

          <Callout kind="info" title="Why those box and cylinder formulas look weird">
            <p>A box has 6 faces in pairs of identical opposite faces: top/bottom (l×w each), front/back (l×h), and left/right (w×h). Two of each: 2lw + 2lh + 2wh.</p>
            <p>A cylinder has two circular ends (each <M>πr²</M>) plus the curved side, which is really a rectangle wrapped around — width = circumference (<M>2πr</M>), height = h. So curved area = <M>2πr · h</M>. Total: <M>2πr² + 2πrh</M>.</p>
          </Callout>

          <Example
            problem='A box is 4 in × 3 in × 2 in. Surface area?'
            steps={[
              <>2lw + 2lh + 2wh.</>,
              <>2(4·3) + 2(4·2) + 2(3·2) = 24 + 16 + 12 = 52 in².</>
            ]}
            answer="52 in²"
          />

          <Example
            problem='A cylinder has radius 5 cm and height 10 cm. Surface area?'
            steps={[
              <>SA = 2πr² + 2πrh.</>,
              <>= 2π(25) + 2π(5)(10) = 50π + 100π = 150π.</>,
              <>≈ 150 × 3.14 = 471.24 cm².</>
            ]}
            answer="≈ 471.24 cm²"
          />
        </>
      )
    },
    {
      id: 'combined-figures',
      title: 'Combined & Composite Figures — Break and Add',
      content: (
        <>
          <p>If a figure isn\'t a basic shape, your strategy is: <strong>break it into shapes you DO know, find each piece, add or subtract</strong>.</p>

          <Callout kind="info" title="The two basic moves">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Add</strong> when the figure is two shapes joined together (an L-shape, a building with a slanted roof on top of a rectangular base).</li>
              <li><strong>Subtract</strong> when there\'s a hole or cutout (a square with a circle cut out, a sidewalk around a building).</li>
            </ul>
          </Callout>

          <Example
            problem='An L-shaped room: a 10 ft × 8 ft rectangle next to a 5 ft × 4 ft rectangle. What is the total floor area?'
            steps={[
              <>Big rectangle: 10 × 8 = 80 ft².</>,
              <>Smaller rectangle: 5 × 4 = 20 ft².</>,
              <>Total: 80 + 20 = 100 ft².</>
            ]}
            answer="100 ft²"
          />

          <Example
            problem='A square garden 12 ft on each side has a circular fountain (radius 3 ft) in the middle. What is the area of the grass (the part NOT covered by the fountain)?'
            steps={[
              <>Square area: 12² = 144 ft².</>,
              <>Fountain area: π · 3² = 9π ≈ 28.27 ft².</>,
              <>Grass: 144 − 28.27 ≈ 115.73 ft².</>
            ]}
            answer="≈ 115.73 ft²"
          />

          <Callout kind="tip" title="Real-world setup">
            "How much paint do I need?" is surface area minus the area of windows and doors. "How many tiles for the floor minus the cabinet footprint?" is rectangular area minus rectangular area. Recognize these as composite-figure problems.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Hypotenuse', def: 'The longest side of a right triangle, opposite the 90° angle.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Leg', def: 'The two sides of a right triangle that form the 90° angle.' },
      { term: 'Radius', def: 'Distance from center of a circle to its edge.' },
      { term: 'Diameter', def: 'Distance across a circle through center; twice the radius.' },
      { term: 'Perimeter', def: 'Total distance around a 2D shape.' },
      { term: 'Area', def: 'Space inside a 2D shape (square units).' },
      { term: 'Volume', def: 'Space inside a 3D shape (cubic units).' },
      { term: 'Surface area', def: 'Total area of all faces of a 3D shape.' },
      { term: 'Similar triangles', def: 'Same angles, proportional sides.' },
      { term: 'Pi (π)', def: 'Ratio of any circle\'s circumference to its diameter, ≈ 3.14159.' }
    ],
    laws: [
      { name: 'Pythagorean theorem', desc: 'a² + b² = c² for right triangles. Memorize triples 3-4-5, 5-12-13, 8-15-17, 7-24-25.' },
      { name: 'Sum of triangle angles', desc: 'Always 180°.' },
      { name: 'Sum of interior angles', desc: '(n − 2) × 180° for n-sided polygon.' },
      { name: 'Complementary / supplementary', desc: 'Complementary = 90°. Supplementary = 180°. C-corner, S-straight.' },
      { name: 'Volume of cone or pyramid', desc: '1/3 of corresponding cylinder or prism with same base and height.' }
    ],
    methods: [
      { name: 'Decompose then add (or subtract)', desc: 'For composite figures, split into known shapes and sum (or subtract holes).' },
      { name: 'Identify the right triangle', desc: 'For ladder, distance, shadow problems, sketch the right triangle and label legs/hypotenuse.' },
      { name: 'Diameter → radius first', desc: 'When given diameter, divide by 2 BEFORE using A = πr² or V = πr²h.' }
    ]
  },
  questions: [
    { q: 'Find the area of a triangle with base 12 and height 7.', type: 'math', correct: 42, difficulty: 'E', explanation: 'A = ½·12·7 = 42.' },
    { q: 'A rectangle has length 15 and width 8. Perimeter?', type: 'math', correct: 46, difficulty: 'E', explanation: 'P = 2(15+8) = 46.' },
    { q: 'A right triangle has legs 9 and 12. Hypotenuse?', type: 'math', correct: 15, difficulty: 'M', explanation: 'c² = 81 + 144 = 225 → c = 15. (Multiple of 3-4-5: 3·3 by 3·4 by 3·5.)' },
    { q: 'A circle has diameter 14. What is its area? (Use π ≈ 3.14, round to 1 decimal.)', type: 'math', correct: 153.9, tolerance: 0.5, difficulty: 'M', explanation: 'r = 7. A = π·49 = 49π ≈ 153.86.' },
    { q: 'A cylinder has radius 4 and height 10. Volume? (Round to nearest whole.)', type: 'math', correct: 503, tolerance: 1.5, difficulty: 'M', explanation: 'V = π·16·10 = 160π ≈ 502.65.' },
    { q: 'In a triangle, two angles are 47° and 68°. The third angle is:', type: 'math', correct: 65, difficulty: 'E', explanation: '180 − 47 − 68 = 65°.' },
    { q: 'Volume of a cube with side 5?', type: 'math', correct: 125, difficulty: 'E', explanation: '5³ = 125.' },
    { q: 'A square has area 81 cm². What is its perimeter?', type: 'math', correct: 36, difficulty: 'M', explanation: 'Side = √81 = 9. Perimeter = 4×9 = 36.' },
    { q: 'A box has dimensions 6 × 4 × 3. Surface area?', type: 'math', correct: 108, difficulty: 'M', explanation: '2(6·4) + 2(6·3) + 2(4·3) = 48 + 36 + 24 = 108.' },
    { q: 'A 25 ft ladder leans against a wall, with its base 7 ft from the wall. How high does the ladder reach?', type: 'math', correct: 24, difficulty: 'H', explanation: '25² − 7² = 625 − 49 = 576. √576 = 24. (Pythagorean triple: 7-24-25.)' },
    { q: 'The complement of a 35° angle is:', type: 'math', correct: 55, difficulty: 'E', explanation: '90 − 35 = 55°. (Complementary = sum to 90.)' },
    { q: 'A circle has area 100π. Its radius is:', type: 'math', correct: 10, difficulty: 'M', explanation: 'πr² = 100π → r² = 100 → r = 10.' }
  ]
};
