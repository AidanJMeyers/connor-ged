import React from 'react';
import { Callout, Table, Formula, M, Example, Term } from '../components/Visual.jsx';

export default {
  id: 25,
  title: 'Science 4 — Physical Science',
  subtitle: 'Atoms, properties of matter, chemical reactions, energy, motion, and electricity.',
  blocks: [
    {
      id: 'atoms',
      title: 'Atoms & Molecules',
      content: (
        <>
          <p>An <Term>atom</Term> is the basic unit of an element. It has:</p>
          <Table
            headers={['Particle', 'Charge', 'Location']}
            rows={[
              ['Proton', '+1', 'Nucleus'],
              ['Neutron', '0', 'Nucleus'],
              ['Electron', '−1', 'Orbital around nucleus']
            ]}
          />
          <Callout kind="info" title="Atomic numbers">
            <strong>Atomic number</strong> = number of protons (defines the element). <strong>Mass number</strong> = protons + neutrons. In a neutral atom, electrons = protons.
          </Callout>

          <p className="font-semibold mt-3">The periodic table at a glance</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Rows = periods</strong> (energy levels of outer electrons).</li>
            <li><strong>Columns = groups</strong> (similar chemical properties).</li>
            <li><strong>Metals</strong> on the left (most of the table); <strong>nonmetals</strong> on the right; <strong>metalloids</strong> in between.</li>
            <li><strong>Group 1</strong>: alkali metals (very reactive). <strong>Group 17</strong>: halogens. <strong>Group 18</strong>: noble gases (unreactive).</li>
          </ul>

          <p className="font-semibold mt-3">Bonds</p>
          <Table
            headers={['Type', 'How it forms']}
            rows={[
              ['Ionic', 'Atom donates an electron to another (metal + nonmetal): NaCl'],
              ['Covalent', 'Atoms share electrons (nonmetal + nonmetal): H₂O, CO₂'],
              ['Metallic', '"Sea" of shared electrons among metal atoms']
            ]}
          />
        </>
      )
    },
    {
      id: 'matter-states',
      title: 'Properties & States of Matter',
      content: (
        <>
          <Table
            headers={['State', 'Particle behavior']}
            rows={[
              ['Solid', 'Particles tightly packed in fixed positions. Definite shape and volume.'],
              ['Liquid', 'Particles close but free to move past each other. Definite volume, takes container\'s shape.'],
              ['Gas', 'Particles far apart, fast-moving. No definite shape or volume.'],
              ['Plasma', 'Ionized gas — sun, lightning']
            ]}
          />
          <Callout kind="formula" title="Phase transitions">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Solid → liquid: <strong>melting</strong></li>
              <li>Liquid → solid: <strong>freezing</strong></li>
              <li>Liquid → gas: <strong>vaporization / boiling</strong></li>
              <li>Gas → liquid: <strong>condensation</strong></li>
              <li>Solid → gas: <strong>sublimation</strong> (dry ice)</li>
              <li>Gas → solid: <strong>deposition</strong> (frost)</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="Physical vs chemical change">
            <strong>Physical</strong>: state changes, dissolving, breaking — no new substance. <br/>
            <strong>Chemical</strong>: new substance formed (rusting, burning, baking).
          </Callout>

          <p className="font-semibold mt-3">Density</p>
          <Formula>D = m / V</Formula>
          <Example
            problem='An object has mass 150 g and volume 50 cm³. What is its density?'
            steps={[
              <>D = m/V = 150/50 = 3 g/cm³.</>
            ]}
            answer="3 g/cm³"
          />
        </>
      )
    },
    {
      id: 'chem-reactions',
      title: 'Chemical Reactions',
      content: (
        <>
          <p>A <Term>chemical reaction</Term> rearranges atoms to form new substances. Reactants → Products.</p>
          <Callout kind="formula" title="Law of conservation of mass">
            Atoms are not created or destroyed — only rearranged. The total mass of reactants equals the total mass of products.
          </Callout>

          <p className="font-semibold mt-3">Balancing equations</p>
          <p>The number of each type of atom must be equal on both sides. Example:</p>
          <Callout kind="info">
            <code>2 H₂ + O₂ → 2 H₂O</code><br/>
            Left: 4 H, 2 O. Right: 4 H, 2 O. ✓
          </Callout>

          <p className="font-semibold mt-3">Types of reactions</p>
          <Table
            headers={['Type', 'General form', 'Example']}
            rows={[
              ['Synthesis (combination)', 'A + B → AB', '2 Na + Cl₂ → 2 NaCl'],
              ['Decomposition', 'AB → A + B', '2 H₂O → 2 H₂ + O₂'],
              ['Single replacement', 'A + BC → AC + B', 'Zn + 2 HCl → ZnCl₂ + H₂'],
              ['Double replacement', 'AB + CD → AD + CB', 'AgNO₃ + NaCl → AgCl + NaNO₃'],
              ['Combustion', 'fuel + O₂ → CO₂ + H₂O', 'CH₄ + 2 O₂ → CO₂ + 2 H₂O']
            ]}
          />

          <Callout kind="info" title="Acids vs bases (pH scale)">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>pH 0-6: <strong>acidic</strong> (lemon juice, stomach acid)</li>
              <li>pH 7: <strong>neutral</strong> (pure water)</li>
              <li>pH 8-14: <strong>basic / alkaline</strong> (baking soda, ammonia, bleach)</li>
            </ul>
            Acid + base → salt + water (neutralization).
          </Callout>
        </>
      )
    },
    {
      id: 'energy',
      title: 'The Nature of Energy',
      content: (
        <>
          <Callout kind="formula" title="Law of conservation of energy">
            Energy cannot be created or destroyed — only transferred or transformed.
          </Callout>

          <Table
            headers={['Form of energy', 'Example']}
            rows={[
              ['Kinetic', 'Energy of motion (a moving car)'],
              ['Potential', 'Stored energy (a stretched spring, water behind a dam, food)'],
              ['Thermal (heat)', 'Vibration of atoms; flows hot → cold'],
              ['Chemical', 'Stored in chemical bonds (gasoline, food, batteries)'],
              ['Electrical', 'Flow of electric charge'],
              ['Radiant (light)', 'Electromagnetic waves'],
              ['Nuclear', 'Stored in atomic nuclei'],
              ['Mechanical', 'Combined kinetic + potential of an object']
            ]}
          />

          <Callout kind="formula" title="Kinetic and potential energy">
            <strong>KE</strong> = ½ · m · v²<br/>
            <strong>PE (gravity)</strong> = m · g · h (g ≈ 9.8 m/s² on Earth)
          </Callout>

          <Example
            problem='A 4 kg ball moves at 6 m/s. Its kinetic energy is:'
            steps={[
              <>KE = ½·m·v² = ½·4·36 = 72 J.</>
            ]}
            answer="72 J"
          />

          <p className="font-semibold mt-3">Heat transfer</p>
          <Table
            headers={['Mode', 'How']}
            rows={[
              ['Conduction', 'Through direct contact (metal spoon in soup heats up)'],
              ['Convection', 'Through fluid currents (boiling water, weather)'],
              ['Radiation', 'Through electromagnetic waves (sun warms Earth)']
            ]}
          />
        </>
      )
    },
    {
      id: 'motion-forces',
      title: 'Motion & Forces',
      content: (
        <>
          <Formula label="Speed">v = d / t</Formula>
          <Formula label="Acceleration">a = (v_f − v_i) / t</Formula>
          <Formula label="Newton's 2nd law">F = m · a</Formula>

          <Callout kind="info" title="Newton's three laws of motion">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Inertia</strong>: An object at rest stays at rest, and an object in motion stays in motion (same direction, same speed) <em>unless acted on by an unbalanced force</em>.</li>
              <li><strong>F = m·a</strong>: A net force causes acceleration proportional to the force and inverse to mass.</li>
              <li><strong>Action–reaction</strong>: For every action, there is an equal and opposite reaction.</li>
            </ol>
          </Callout>

          <Callout kind="formula" title="Other key relationships">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Weight</strong> = m · g (force of gravity on a mass)</li>
              <li><strong>Work</strong> = F · d (force × distance, when in same direction)</li>
              <li><strong>Power</strong> = W / t (work per unit time)</li>
              <li><strong>Momentum</strong> = m · v</li>
            </ul>
          </Callout>

          <Example
            problem='A 1,200 kg car accelerates from rest to 20 m/s in 5 seconds. The net force?'
            steps={[
              <>a = (20 − 0)/5 = 4 m/s².</>,
              <>F = m·a = 1200·4 = 4,800 N.</>
            ]}
            answer="4,800 N"
          />
        </>
      )
    },
    {
      id: 'electricity-magnetism',
      title: 'Electricity & Magnetism',
      content: (
        <>
          <Formula label="Ohm's law">V = I · R</Formula>
          <p>V = voltage (volts), I = current (amps), R = resistance (ohms).</p>

          <Example
            problem='A circuit has 12 V applied across a 3 Ω resistor. What is the current?'
            steps={[
              <>I = V/R = 12/3 = 4 A.</>
            ]}
            answer="4 A"
          />

          <Callout kind="info" title="Series vs parallel circuits">
            <strong>Series</strong>: components in a single loop. Current is the same everywhere; voltage divides. If one bulb breaks, all go out.<br/>
            <strong>Parallel</strong>: multiple paths. Voltage is the same across each branch; current divides. If one bulb breaks, others stay lit.
          </Callout>

          <Table
            headers={['Concept', 'Notes']}
            rows={[
              ['Conductor', 'Allows electrons to flow easily (copper, silver)'],
              ['Insulator', 'Blocks electron flow (rubber, glass)'],
              ['Semiconductor', 'Conducts under some conditions (silicon — basis of computer chips)'],
              ['Magnet', 'Has N and S poles. Like poles repel, opposite poles attract.'],
              ['Electromagnet', 'Coil of wire with current — magnetism that can be turned on/off'],
              ['Generator', 'Mechanical motion → electrical energy'],
              ['Motor', 'Electrical energy → mechanical motion']
            ]}
          />

          <p className="font-semibold mt-3">Waves</p>
          <Formula>v = λ · f  (wave speed = wavelength × frequency)</Formula>
          <Table
            headers={['Wave type', 'Example']}
            rows={[
              ['Mechanical', 'Sound, water — needs a medium'],
              ['Electromagnetic', 'Light, radio, X-rays — travels through vacuum at c = 3 × 10⁸ m/s']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Atom', def: 'Smallest unit of an element retaining its properties.' },
      { term: 'Element', def: 'Pure substance with one type of atom.' },
      { term: 'Compound', def: 'Two or more elements chemically bonded.' },
      { term: 'pH', def: 'Scale of acidity (0-6), neutrality (7), or basicity (8-14).' },
      { term: 'Energy', def: 'The capacity to do work — conserved in any system.' },
      { term: 'Force', def: 'A push or pull, measured in newtons.' }
    ],
    laws: [
      { name: 'Conservation of mass', desc: 'Atoms are conserved in chemical reactions.' },
      { name: 'Conservation of energy', desc: 'Energy is converted, not created or destroyed.' },
      { name: 'Newton\'s 1st (inertia)', desc: 'Objects keep doing what they\'re doing unless a force acts.' },
      { name: 'Newton\'s 2nd', desc: 'F = m·a' },
      { name: 'Newton\'s 3rd', desc: 'Equal and opposite reactions.' },
      { name: 'Ohm\'s law', desc: 'V = I·R' }
    ],
    methods: [
      { name: 'Balance equations', desc: 'Count atoms of each element on both sides; adjust coefficients (never subscripts) to match.' }
    ]
  },
  questions: [
    { q: 'A neutral atom has equal numbers of protons and:', type: 'mcq', choices: ['Neutrons', 'Electrons', 'Photons', 'Quarks'], correct: 1, difficulty: 'E', explanation: 'Protons + electrons cancel charges in a neutral atom.' },
    { q: 'A pH of 2 indicates the substance is:', type: 'mcq', choices: ['Strongly basic', 'Neutral', 'Strongly acidic', 'A salt'], correct: 2, difficulty: 'E', explanation: 'pH below 7 = acidic; pH 2 = strongly acidic.' },
    { q: 'F = m·a. A 10 kg cart accelerates at 2 m/s². The applied force is:', type: 'math', correct: 20, difficulty: 'E', explanation: '10 × 2 = 20 N.' },
    { q: 'V = I·R. A 6 V battery drives 2 A. The resistance is:', type: 'math', correct: 3, difficulty: 'M', explanation: 'R = V/I = 6/2 = 3 Ω.' },
    { q: 'Which is a chemical change?', type: 'mcq', choices: ['Ice melting', 'Salt dissolving in water', 'Iron rusting', 'Cutting paper'], correct: 2, difficulty: 'M', explanation: 'Rusting forms a new substance (iron oxide).' },
    { q: 'Heat traveling from the sun to Earth is by:', type: 'mcq', choices: ['Conduction', 'Convection', 'Radiation', 'Friction'], correct: 2, difficulty: 'M', explanation: 'No medium between sun and Earth → radiation.' },
    { q: 'In a parallel circuit:', type: 'mcq', choices: [
      'All components share the same current',
      'Voltage is the same across each branch',
      'Breaking one branch shuts off all branches',
      'There is only one path'
    ], correct: 1, difficulty: 'M', explanation: 'Parallel branches share voltage; current divides.' },
    { q: 'Newton\'s 1st law is also known as:', type: 'mcq', choices: ['Action-reaction', 'F = ma', 'Inertia', 'Conservation of momentum'], correct: 2, difficulty: 'E', explanation: 'Inertia: objects keep doing what they\'re doing.' },
    { q: 'Kinetic energy of a 2 kg object moving at 5 m/s:', type: 'math', correct: 25, difficulty: 'M', explanation: 'KE = ½·m·v² = ½·2·25 = 25 J.' },
    { q: 'Two like magnetic poles will:', type: 'mcq', choices: ['Attract', 'Repel', 'Have no effect', 'Form a current'], correct: 1, difficulty: 'E', explanation: 'Like poles repel.' }
  ]
};
