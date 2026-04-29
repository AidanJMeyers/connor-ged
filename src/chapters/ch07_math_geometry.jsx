import React from 'react';
import { Callout, Table, Formula, M, Frac, Example, Triangle, Rectangle, CircleFig, Term } from '../components/Visual.jsx';

export default {
  id: 7,
  title: 'Math 7 — Geometry',
  subtitle: 'Plane figures, triangles, the Pythagorean theorem, perimeter & area, circles, volume & surface area.',
  blocks: [
    {
      id: 'plane-figures',
      title: 'Plane Figures & Angles',
      content: (
        <>
          <Table
            headers={['Shape', 'Definition']}
            rows={[
              ['Triangle', '3 sides; angles sum to 180°'],
              ['Quadrilateral', '4 sides; angles sum to 360°'],
              ['Pentagon', '5 sides'],
              ['Hexagon', '6 sides'],
              ['Octagon', '8 sides']
            ]}
          />
          <Callout kind="formula" title="Sum of interior angles of an n-gon">
            <M>{`(n − 2) × 180°`}</M>. For example, a pentagon: <M>{`(5 − 2) × 180° = 540°`}</M>.
          </Callout>

          <p className="font-semibold mt-3">Angle types</p>
          <Table
            headers={['Type', 'Range']}
            rows={[
              ['Acute', 'Less than 90°'],
              ['Right', 'Exactly 90°'],
              ['Obtuse', 'Greater than 90° and less than 180°'],
              ['Straight', '180°'],
              ['Reflex', 'More than 180°']
            ]}
          />

          <Callout kind="tip" title="Angle relationships">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Complementary</strong> angles sum to 90°.</li>
              <li><strong>Supplementary</strong> angles sum to 180°.</li>
              <li><strong>Vertical</strong> angles (formed by two crossing lines, opposite each other) are equal.</li>
              <li>When parallel lines are cut by a transversal, <strong>corresponding angles</strong> are equal and <strong>alternate interior angles</strong> are equal.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'triangles',
      title: 'Triangles',
      content: (
        <>
          <Triangle type="right" sides={{ a: 'a = 3', b: 'b = 4', c: 'c = 5' }} angles={{ A: '90°' }} />
          <Table
            headers={['By sides', 'Description']}
            rows={[
              ['Equilateral', 'All 3 sides equal; all angles 60°'],
              ['Isosceles', '2 equal sides; 2 equal "base angles"'],
              ['Scalene', 'No equal sides']
            ]}
          />
          <Table
            headers={['By angles', 'Description']}
            rows={[
              ['Acute', 'All angles < 90°'],
              ['Right', 'One 90° angle'],
              ['Obtuse', 'One angle > 90°']
            ]}
          />

          <Callout kind="formula" title="Triangle Sum Theorem">
            The three interior angles of any triangle sum to <strong>180°</strong>.
          </Callout>

          <Example
            problem='In a triangle, two angles are 35° and 80°. What is the third?'
            steps={[
              <>Sum of three angles = 180°.</>,
              <>Third angle = 180 − 35 − 80 = 65°.</>
            ]}
            answer="65°"
          />

          <Callout kind="tip" title="Similar triangles">
            Two triangles are <Term>similar</Term> when their angles match and corresponding sides are proportional. If one triangle has sides 3, 4, 5 and a similar triangle has its 3-side scaled to 9, multiply the others by 3 too: 12 and 15.
          </Callout>
        </>
      )
    },
    {
      id: 'pythagorean',
      title: 'Pythagorean Theorem',
      content: (
        <>
          <Formula>a² + b² = c²  (right triangles only)</Formula>
          <p>Where <M>a</M> and <M>b</M> are the two <Term>legs</Term> and <M>c</M> is the <Term>hypotenuse</Term> (the side opposite the right angle, always the longest).</p>

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
            problem='A 17 ft ladder leans against a wall. The base is 8 ft from the wall. How high does it reach?'
            steps={[
              <>The ladder is the hypotenuse. Wall = vertical leg (find this); ground distance = horizontal leg.</>,
              <>17² = 8² + h² → 289 = 64 + h².</>,
              <>h² = 225 → h = 15.</>
            ]}
            answer="15 ft"
          />

          <Callout kind="tip" title="Common Pythagorean triples">
            Memorize: 3-4-5, 5-12-13, 8-15-17, 7-24-25, and any multiples (6-8-10, 9-12-15, etc.).
          </Callout>
        </>
      )
    },
    {
      id: 'perimeter-area',
      title: 'Perimeter & Area',
      content: (
        <>
          <p><Term>Perimeter</Term> = the distance around (sum of side lengths). <Term>Area</Term> = how much surface is covered (square units).</p>

          <Rectangle w="length (l)" h="width (w)" />

          <Callout kind="formula" title="Key formulas">
            <Table
              headers={['Shape', 'Perimeter', 'Area']}
              rows={[
                ['Rectangle', 'P = 2l + 2w', 'A = l × w'],
                ['Square', 'P = 4s', 'A = s²'],
                ['Triangle', 'P = a + b + c', 'A = ½ × b × h'],
                ['Parallelogram', 'P = 2a + 2b', 'A = b × h'],
                ['Trapezoid', 'P = a + b + c + d', 'A = ½(b₁ + b₂) × h']
              ]}
            />
          </Callout>

          <Example
            problem='A rectangular garden is 20 ft by 12 ft. Find the perimeter and the area.'
            steps={[
              <>Perimeter: 2(20) + 2(12) = 40 + 24 = 64 ft.</>,
              <>Area: 20 × 12 = 240 ft².</>
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
        </>
      )
    },
    {
      id: 'circles',
      title: 'Circles',
      content: (
        <>
          <CircleFig radius="r" diameter="d" />
          <Callout kind="formula" title="Circle formulas">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Diameter = 2 × radius: <M>d = 2r</M></li>
              <li>Circumference: <M>C = 2πr = πd</M></li>
              <li>Area: <M>A = πr²</M></li>
            </ul>
            Use <M>π ≈ 3.14</M> or the calculator's π key.
          </Callout>

          <Example
            problem='A pizza has radius 7 inches. Find its circumference and area (use π ≈ 3.14).'
            steps={[
              <>Circumference: <M>{`C = 2 · π · 7 = 14π ≈ 43.96`}</M> in.</>,
              <>Area: <M>{`A = π · 7² = 49π ≈ 153.86`}</M> in².</>
            ]}
            answer="C ≈ 43.96 in; A ≈ 153.86 in²"
          />

          <Callout kind="warn" title="Radius vs diameter">
            If the problem gives the diameter, divide by 2 BEFORE using the radius formulas. <M>{`A = πr²`}</M> not <M>πd²</M>.
          </Callout>
        </>
      )
    },
    {
      id: 'volume',
      title: 'Volume of 3D Solids',
      content: (
        <>
          <Callout kind="formula" title="Memorize these formulas (also on GED formula sheet)">
            <Table
              headers={['Solid', 'Volume']}
              rows={[
                ['Rectangular prism (box)', 'V = l · w · h'],
                ['Cube', 'V = s³'],
                ['Cylinder', 'V = π · r² · h'],
                ['Cone', 'V = ⅓ · π · r² · h'],
                ['Sphere', 'V = (4/3) · π · r³'],
                ['Pyramid (rect. base)', 'V = ⅓ · l · w · h']
              ]}
            />
          </Callout>

          <Example
            problem='A cylindrical can has radius 3 in and height 8 in. What is its volume?'
            steps={[
              <>V = πr²h = π · 9 · 8 = 72π.</>,
              <>≈ 226.19 in³.</>
            ]}
            answer="≈ 226.19 in³"
          />

          <Example
            problem='A box is 12 cm long, 8 cm wide, 5 cm tall. Find the volume in cm³ and convert to liters (1 L = 1000 cm³).'
            steps={[
              <>V = 12 · 8 · 5 = 480 cm³.</>,
              <>480 ÷ 1000 = 0.48 L.</>
            ]}
            answer="480 cm³ = 0.48 L"
          />

          <Example
            problem='A sphere has radius 6 cm. Find its volume.'
            steps={[
              <>V = (4/3) · π · r³.</>,
              <>r³ = 216.</>,
              <>V = (4/3) · π · 216 = 288π ≈ 904.78 cm³.</>
            ]}
            answer="≈ 904.78 cm³"
          />
        </>
      )
    },
    {
      id: 'surface-area',
      title: 'Surface Area',
      content: (
        <>
          <Callout kind="formula">
            <Table
              headers={['Solid', 'Surface area']}
              rows={[
                ['Cube', 'SA = 6s²'],
                ['Rectangular prism', 'SA = 2lw + 2lh + 2wh'],
                ['Cylinder', 'SA = 2πr² + 2πrh'],
                ['Sphere', 'SA = 4πr²']
              ]}
            />
          </Callout>

          <Example
            problem='A box is 4 in × 3 in × 2 in. Surface area?'
            steps={[
              <>2lw + 2lh + 2wh.</>,
              <>2(4·3) + 2(4·2) + 2(3·2) = 24 + 16 + 12.</>,
              <>= 52 in².</>
            ]}
            answer="52 in²"
          />

          <Example
            problem='A cylinder has radius 5 cm and height 10 cm. Surface area?'
            steps={[
              <>SA = 2πr² + 2πrh.</>,
              <>= 2π(25) + 2π(5)(10) = 50π + 100π = 150π.</>,
              <>≈ 471.24 cm².</>
            ]}
            answer="≈ 471.24 cm²"
          />
        </>
      )
    },
    {
      id: 'combined-figures',
      title: 'Combined & Composite Figures',
      content: (
        <>
          <p>If a figure isn't a basic shape, <strong>break it into shapes you know</strong>. Add their areas (or volumes). For shapes with a hole, subtract.</p>

          <Example
            problem='An L-shaped room: 10 ft × 8 ft rectangle next to a 5 ft × 4 ft rectangle. Total area?'
            steps={[
              <>Big rectangle: 10 × 8 = 80 ft².</>,
              <>Smaller rectangle: 5 × 4 = 20 ft².</>,
              <>Total: 80 + 20 = 100 ft².</>
            ]}
            answer="100 ft²"
          />

          <Example
            problem='A square garden 12 ft on each side has a circular fountain (radius 3 ft) in the middle. What area is grass (not fountain)?'
            steps={[
              <>Square area: 12² = 144 ft².</>,
              <>Fountain area: π · 3² = 9π ≈ 28.27 ft².</>,
              <>Grass: 144 − 28.27 = 115.73 ft².</>
            ]}
            answer="≈ 115.73 ft²"
          />
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
      { term: 'Surface area', def: 'Total area of all faces of a 3D shape.' }
    ],
    laws: [
      { name: 'Pythagorean theorem', desc: 'a² + b² = c² for right triangles.' },
      { name: 'Sum of triangle angles', desc: 'Always 180°.' },
      { name: 'Sum of interior angles', desc: '(n − 2) × 180° for n-sided polygon.' },
      { name: 'π', desc: 'The ratio of a circle\'s circumference to its diameter (~3.14159).' }
    ],
    methods: [
      { name: 'Decompose then add', desc: 'For composite figures, split into known shapes and sum (or subtract holes).' },
      { name: 'Identify the right triangle', desc: 'For ladder, distance, and shadow problems, sketch the right triangle and label legs/hypotenuse.' }
    ]
  },
  questions: [
    { q: 'Find the area of a triangle with base 12 and height 7.', type: 'math', correct: 42, difficulty: 'E', explanation: 'A = ½·12·7 = 42.' },
    { q: 'A rectangle has length 15 and width 8. Perimeter?', type: 'math', correct: 46, difficulty: 'E', explanation: 'P = 2(15+8) = 46.' },
    { q: 'A right triangle has legs 9 and 12. Hypotenuse?', type: 'math', correct: 15, difficulty: 'M', explanation: 'c² = 81 + 144 = 225 → c = 15.' },
    { q: 'A circle has diameter 14. What is its area? (Use π ≈ 3.14, round to 1 decimal.)', type: 'math', correct: 153.9, tolerance: 0.5, difficulty: 'M', explanation: 'r = 7, A = π·49 ≈ 153.86.' },
    { q: 'A cylinder has radius 4 and height 10. What is its volume? (Round to nearest whole.)', type: 'math', correct: 503, tolerance: 1.5, difficulty: 'M', explanation: 'V = π·16·10 = 160π ≈ 502.65.' },
    { q: 'In a triangle, two angles are 47° and 68°. The third angle is:', type: 'math', correct: 65, difficulty: 'E', explanation: '180 − 47 − 68 = 65°.' },
    { q: 'Volume of a cube with side 5?', type: 'math', correct: 125, difficulty: 'E', explanation: '5³ = 125.' },
    { q: 'A square has area 81 cm². What is its perimeter?', type: 'math', correct: 36, difficulty: 'M', explanation: 'Side = √81 = 9. Perimeter = 4×9 = 36.' },
    { q: 'A box has dimensions 6, 4, 3. Surface area?', type: 'math', correct: 108, difficulty: 'M', explanation: '2(6·4) + 2(6·3) + 2(4·3) = 48 + 36 + 24 = 108.' },
    { q: 'A 25 ft ladder leans against a wall, with its base 7 ft from the wall. How high does the ladder reach?', type: 'math', correct: 24, difficulty: 'H', explanation: '25² − 7² = 625 − 49 = 576. √576 = 24.' }
  ]
};
