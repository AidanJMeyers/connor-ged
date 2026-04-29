import React from 'react';
import { Callout, Table, Formula, M, Example, Term } from '../components/Visual.jsx';

export default {
  id: 25,
  title: 'Science 4 — Physical Science (Chemistry & Physics)',
  subtitle: 'Atoms, matter, chemical reactions, energy, motion, forces, and electricity. About 40% of the GED Science test.',
  blocks: [
    {
      id: 'why-physical',
      title: 'How to Approach Physical Science',
      content: (
        <>
          <p>Physical science covers chemistry and physics, the "how the universe works at a non-living level" parts of science. Together with biology, this is roughly 40% of the GED Science test.</p>
          <Callout kind="tip" title="The big organizing ideas">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Everything is made of <strong>atoms</strong>.</li>
              <li><strong>Matter</strong> changes form (solid/liquid/gas) and reacts to form new substances.</li>
              <li><strong>Energy</strong> is conserved — it can be transformed but not created or destroyed.</li>
              <li><strong>Forces</strong> cause objects to accelerate (Newton\'s laws).</li>
              <li><strong>Electricity and magnetism</strong> are connected — they\'re really the same force.</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'atoms',
      title: 'Atoms & Molecules — The Building Blocks',
      content: (
        <>
          <p>An <Term>atom</Term> is the smallest unit of an element that retains the element\'s chemical properties. Atoms have:</p>
          <Table
            headers={['Particle', 'Charge', 'Mass (relative)', 'Location']}
            rows={[
              ['Proton', '+1', '~1 amu', 'Nucleus'],
              ['Neutron', '0', '~1 amu', 'Nucleus'],
              ['Electron', '−1', '~1/1836 amu (essentially zero)', 'Orbital around nucleus']
            ]}
          />

          <Callout kind="info" title="Numbers that define an atom">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Atomic number</strong> = number of protons (defines which element it is — carbon always has 6, oxygen always has 8).</li>
              <li><strong>Mass number</strong> = protons + neutrons.</li>
              <li>In a NEUTRAL atom, electrons = protons.</li>
              <li><strong>Isotopes</strong> = atoms of the same element with different numbers of neutrons (carbon-12 vs carbon-14).</li>
              <li><strong>Ions</strong> = atoms that have gained or lost electrons, giving them a net charge.</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-4">The periodic table at a glance</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Rows</strong> = "periods" (correspond to energy levels of outermost electrons).</li>
            <li><strong>Columns</strong> = "groups" (similar chemical properties).</li>
            <li><strong>Metals</strong> on the left and middle (most of the table).</li>
            <li><strong>Nonmetals</strong> on the right (and hydrogen).</li>
            <li><strong>Metalloids</strong> in between.</li>
            <li><strong>Group 1</strong>: alkali metals (very reactive — sodium, potassium).</li>
            <li><strong>Group 17</strong>: halogens (also very reactive — chlorine, fluorine).</li>
            <li><strong>Group 18</strong>: noble gases (essentially unreactive — helium, neon).</li>
          </ul>

          <p className="font-semibold mt-4">Chemical bonds — how atoms stick together</p>
          <Table
            headers={['Type', 'How it forms', 'Example']}
            rows={[
              ['Ionic', 'One atom donates an electron to another (typically metal + nonmetal)', 'NaCl (table salt)'],
              ['Covalent', 'Atoms share electrons (typically nonmetal + nonmetal)', 'H₂O, CO₂, O₂'],
              ['Metallic', 'A "sea" of shared electrons among metal atoms', 'Copper, gold, iron']
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
            headers={['State', 'Particle behavior', 'Properties']}
            rows={[
              ['Solid', 'Particles tightly packed in fixed positions, vibrating', 'Definite shape and volume'],
              ['Liquid', 'Particles close but free to move past each other', 'Definite volume; takes container\'s shape'],
              ['Gas', 'Particles far apart, moving fast', 'No definite shape or volume; expands to fill container'],
              ['Plasma', 'Ionized gas — atoms split into nuclei and electrons', 'Conductive; sun, lightning, neon signs']
            ]}
          />

          <Callout kind="formula" title="Phase transitions — the names of state changes">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Solid → liquid: <strong>melting</strong></li>
              <li>Liquid → solid: <strong>freezing</strong></li>
              <li>Liquid → gas: <strong>vaporization</strong> (boiling at a specific temperature, evaporation more gradually)</li>
              <li>Gas → liquid: <strong>condensation</strong></li>
              <li>Solid → gas (skipping liquid): <strong>sublimation</strong> (dry ice → CO₂)</li>
              <li>Gas → solid: <strong>deposition</strong> (frost on a window)</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="Physical change vs chemical change">
            <p><strong>Physical change</strong>: state changes (melting), dissolving, breaking, mixing — NO new substance formed. The molecules are unchanged.</p>
            <p><strong>Chemical change</strong>: a new substance is formed. Bonds are broken and made. Examples: rusting, burning, baking, digesting food, photosynthesis.</p>
            <p>Test: can you reverse it easily? Physical changes are usually reversible. Chemical changes usually aren\'t.</p>
          </Callout>

          <p className="font-semibold mt-4">Density — a key property</p>
          <Formula>D = m / V</Formula>
          <Example
            problem='An object has mass 150 g and volume 50 cm³. What is its density?'
            steps={[
              <>D = m/V = 150/50.</>,
              <>= 3 g/cm³.</>
            ]}
            answer="3 g/cm³"
          />
          <Callout kind="info" title="Why density matters">
            Density determines whether something floats or sinks. Anything less dense than water (1 g/cm³) floats; denser sinks. Hot air rises because heating a gas expands it (lower density). Ocean currents are partly driven by density differences (cold, salty water sinks).
          </Callout>
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
            <strong>Atoms are not created or destroyed in chemical reactions — only rearranged.</strong> The total mass of the reactants equals the total mass of the products.
          </Callout>

          <p className="font-semibold mt-4">Balancing chemical equations</p>
          <p>The number of each type of atom must be equal on both sides. You adjust coefficients (the numbers in front), NEVER subscripts.</p>
          <Callout kind="info" title="Example — the formation of water">
            <code>2 H₂ + O₂ → 2 H₂O</code><br/>
            Left side: 4 H, 2 O. Right side: 4 H, 2 O. ✓ Balanced.<br/>
            <em>Note: changing H₂ to H wouldn\'t balance — it would create a different molecule. You can only adjust the coefficient (the 2 in front).</em>
          </Callout>

          <p className="font-semibold mt-4">Types of reactions</p>
          <Table
            headers={['Type', 'General form', 'Example']}
            rows={[
              ['Synthesis (combination)', 'A + B → AB', '2 Na + Cl₂ → 2 NaCl'],
              ['Decomposition', 'AB → A + B', '2 H₂O → 2 H₂ + O₂ (with electricity)'],
              ['Single replacement', 'A + BC → AC + B', 'Zn + 2 HCl → ZnCl₂ + H₂'],
              ['Double replacement', 'AB + CD → AD + CB', 'AgNO₃ + NaCl → AgCl + NaNO₃'],
              ['Combustion', 'fuel + O₂ → CO₂ + H₂O', 'CH₄ + 2 O₂ → CO₂ + 2 H₂O (natural gas burning)']
            ]}
          />

          <Callout kind="info" title="Acids vs bases — the pH scale">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>pH 0-6: <strong>acidic</strong> (lemon juice, vinegar, stomach acid)</li>
              <li>pH 7: <strong>neutral</strong> (pure water)</li>
              <li>pH 8-14: <strong>basic / alkaline</strong> (baking soda, ammonia, bleach)</li>
            </ul>
            <p>Each pH unit represents a 10× difference in acidity. So pH 4 is 10 times more acidic than pH 5, and 100 times more acidic than pH 6.</p>
            <p>Acid + base → salt + water. This is called <strong>neutralization</strong>. Antacids (bases) neutralize stomach acid.</p>
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
            <strong>Energy cannot be created or destroyed — only transferred or transformed.</strong> The total amount of energy in a closed system stays constant. This is one of the most important laws in physics.
          </Callout>

          <Table
            headers={['Form of energy', 'Example']}
            rows={[
              ['Kinetic', 'Energy of motion (a moving car, wind)'],
              ['Potential', 'Stored energy due to position (a stretched spring, water behind a dam, food)'],
              ['Thermal (heat)', 'Vibration of atoms; flows hot → cold'],
              ['Chemical', 'Stored in chemical bonds (gasoline, food, batteries)'],
              ['Electrical', 'Flow of electric charge'],
              ['Radiant (light/EM)', 'Electromagnetic waves (light, radio, X-rays)'],
              ['Nuclear', 'Stored in atomic nuclei (released by fission or fusion)'],
              ['Mechanical', 'Combined kinetic + potential of an object']
            ]}
          />

          <Callout kind="formula" title="Kinetic and potential energy formulas">
            <strong>KE</strong> = ½ · m · v²<br/>
            <strong>PE (gravitational)</strong> = m · g · h (g ≈ 9.8 m/s² on Earth, h is height)
          </Callout>

          <Example
            problem='A 4 kg ball moves at 6 m/s. Its kinetic energy is:'
            steps={[
              <>KE = ½·m·v² = ½ · 4 · 6² = ½ · 4 · 36.</>,
              <>= 72 J (joules).</>
            ]}
            answer="72 J"
          />

          <p className="font-semibold mt-4">Heat transfer — three modes</p>
          <Table
            headers={['Mode', 'How it works', 'Example']}
            rows={[
              ['Conduction', 'Through direct contact', 'Metal spoon in hot soup heats up'],
              ['Convection', 'Through fluid currents (hot fluid rises, cold falls)', 'Boiling water, weather, ocean currents'],
              ['Radiation', 'Through electromagnetic waves (no medium needed)', 'Sun warms Earth across vacuum of space']
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
          <Formula label="Acceleration">a = (v_final − v_initial) / t</Formula>
          <Formula label="Newton's 2nd law">F = m · a</Formula>

          <Callout kind="info" title="Newton\'s three laws of motion">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Law of Inertia</strong>: An object at rest stays at rest, and an object in motion stays in motion (same direction, same speed) <em>unless acted on by an unbalanced force</em>. This is why seatbelts matter — your body keeps moving when the car stops.</li>
              <li><strong>F = m·a</strong>: A net force causes acceleration proportional to the force and inversely proportional to mass. A bigger push gives more acceleration; the same push on a heavier object gives less acceleration.</li>
              <li><strong>Action-reaction</strong>: For every action, there is an equal and opposite reaction. When you push against a wall, the wall pushes back. When a rocket pushes exhaust down, the exhaust pushes the rocket up.</li>
            </ol>
          </Callout>

          <Callout kind="formula" title="Other key relationships">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Weight</strong> = m · g (force of gravity on a mass; weight changes with gravity, mass doesn\'t)</li>
              <li><strong>Work</strong> = F · d (force × distance, when in same direction)</li>
              <li><strong>Power</strong> = W / t (work per unit time; how fast you do work)</li>
              <li><strong>Momentum</strong> = m · v (mass × velocity; conserved in collisions)</li>
            </ul>
          </Callout>

          <Example
            problem='A 1,200 kg car accelerates from rest to 20 m/s in 5 seconds. The net force?'
            steps={[
              <>First find the acceleration: a = (v_f − v_i)/t = (20 − 0)/5 = 4 m/s².</>,
              <>Then apply F = m·a: F = 1200 · 4 = 4,800 N.</>
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
          <p>V = voltage (volts), I = current (amperes/amps), R = resistance (ohms). Voltage is the "push" of electricity; current is how much charge flows; resistance is how much the material opposes flow.</p>

          <Example
            problem='A circuit has 12 V applied across a 3 Ω resistor. What is the current?'
            steps={[
              <>I = V/R = 12/3.</>,
              <>= 4 A.</>
            ]}
            answer="4 A"
          />

          <Callout kind="info" title="Series vs parallel circuits">
            <p><strong>Series circuit</strong>: components in a single loop. Current is the same everywhere; voltage divides across components. If one bulb breaks, all go out (the circuit is broken).</p>
            <p><strong>Parallel circuit</strong>: multiple paths. Voltage is the same across each branch; current divides. If one bulb breaks, others stay lit (other paths still complete).</p>
            <p>Most household electrical wiring is parallel — that\'s why one light burning out doesn\'t turn off your whole house.</p>
          </Callout>

          <Table
            headers={['Concept', 'Notes']}
            rows={[
              ['Conductor', 'Allows electrons to flow easily (copper, silver, aluminum, gold)'],
              ['Insulator', 'Blocks electron flow (rubber, glass, plastic, dry wood)'],
              ['Semiconductor', 'Conducts under specific conditions (silicon — basis of all computer chips)'],
              ['Magnet', 'Has North and South poles. Like poles repel, opposite poles attract.'],
              ['Electromagnet', 'A coil of wire with current flowing through it acts as a magnet — and magnetism can be turned on/off by switching the current.'],
              ['Generator', 'Converts mechanical motion → electrical energy (the basis of power plants)'],
              ['Motor', 'Converts electrical energy → mechanical motion (drives appliances, electric vehicles)']
            ]}
          />

          <p className="font-semibold mt-4">Waves — sound and light</p>
          <Formula>v = λ · f  (wave speed = wavelength × frequency)</Formula>
          <Table
            headers={['Wave type', 'Example', 'Needs medium?']}
            rows={[
              ['Mechanical', 'Sound, water waves, earthquake waves', 'Yes — needs matter to travel through'],
              ['Electromagnetic', 'Light, radio, X-rays, microwaves, gamma rays', 'No — travels through vacuum at c = 3 × 10⁸ m/s']
            ]}
          />

          <Callout kind="info" title="The electromagnetic spectrum">
            All EM waves travel at the speed of light but have different wavelengths/frequencies. From longest wavelength (lowest energy) to shortest (highest energy):
            <ul className="list-disc ml-5 text-sm mt-1">
              <li>Radio → microwave → infrared → visible light → ultraviolet → X-ray → gamma ray.</li>
            </ul>
            Visible light is just the small slice we can see. Infrared is felt as heat. UV causes sunburns. X-rays penetrate soft tissue. Gamma rays come from radioactive decay.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Atom', def: 'Smallest unit of an element retaining its properties.' },
      { term: 'Element', def: 'Pure substance with one type of atom.' },
      { term: 'Compound', def: 'Two or more elements chemically bonded.' },
      { term: 'Molecule', def: 'A group of atoms bonded together (H₂O, O₂).' },
      { term: 'pH', def: 'Scale of acidity (0-6), neutrality (7), or basicity (8-14).' },
      { term: 'Energy', def: 'The capacity to do work — conserved in any system.' },
      { term: 'Force', def: 'A push or pull, measured in newtons.' },
      { term: 'Inertia', def: 'Tendency of an object to keep doing what it\'s doing.' }
    ],
    laws: [
      { name: 'Conservation of mass', desc: 'Atoms are conserved in chemical reactions.' },
      { name: 'Conservation of energy', desc: 'Energy is converted, not created or destroyed.' },
      { name: 'Newton\'s 1st (inertia)', desc: 'Objects keep doing what they\'re doing unless a force acts.' },
      { name: 'Newton\'s 2nd', desc: 'F = m·a.' },
      { name: 'Newton\'s 3rd', desc: 'Equal and opposite reactions.' },
      { name: 'Ohm\'s law', desc: 'V = I·R.' }
    ],
    methods: [
      { name: 'Balance equations', desc: 'Count atoms of each element on both sides; adjust coefficients (never subscripts) to match.' },
      { name: 'Identify physical vs chemical change', desc: 'New substance formed → chemical. Same substance, different state/shape → physical.' }
    ]
  },
  questions: [
    { q: 'A neutral atom has equal numbers of protons and:', type: 'mcq', choices: ['Neutrons', 'Electrons', 'Photons', 'Quarks'], correct: 1, difficulty: 'E', explanation: 'Protons (+) balanced by electrons (−).' },
    { q: 'A pH of 2 indicates the substance is:', type: 'mcq', choices: ['Strongly basic', 'Neutral', 'Strongly acidic', 'A salt'], correct: 2, difficulty: 'E', explanation: 'pH below 7 = acidic; pH 2 = strongly acidic.' },
    { q: 'F = m·a. A 10 kg cart accelerates at 2 m/s². The applied force is:', type: 'math', correct: 20, difficulty: 'E', explanation: '10 × 2 = 20 N.' },
    { q: 'V = I·R. A 6 V battery drives 2 A. The resistance is:', type: 'math', correct: 3, difficulty: 'M', explanation: 'R = V/I = 6/2 = 3 Ω.' },
    { q: 'Which is a chemical change?', type: 'mcq', choices: ['Ice melting', 'Salt dissolving in water', 'Iron rusting', 'Cutting paper'], correct: 2, difficulty: 'M', explanation: 'Rusting forms a new substance (iron oxide).' },
    { q: 'Heat traveling from the sun to Earth is by:', type: 'mcq', choices: ['Conduction', 'Convection', 'Radiation', 'Friction'], correct: 2, difficulty: 'M', explanation: 'No medium between Sun and Earth → radiation.' },
    { q: 'In a parallel circuit:', type: 'mcq', choices: [
      'All components share the same current',
      'Voltage is the same across each branch',
      'Breaking one branch shuts off all branches',
      'There is only one path'
    ], correct: 1, difficulty: 'M', explanation: 'Parallel branches share voltage; current divides.' },
    { q: 'Newton\'s 1st law is also known as:', type: 'mcq', choices: ['Action-reaction', 'F = ma', 'Inertia', 'Conservation of momentum'], correct: 2, difficulty: 'E', explanation: 'Inertia: objects keep doing what they\'re doing.' },
    { q: 'Kinetic energy of a 2 kg object moving at 5 m/s:', type: 'math', correct: 25, difficulty: 'M', explanation: 'KE = ½·m·v² = ½·2·25 = 25 J.' },
    { q: 'Two like magnetic poles will:', type: 'mcq', choices: ['Attract', 'Repel', 'Have no effect', 'Form a current'], correct: 1, difficulty: 'E', explanation: 'Like poles repel.' },
    { q: 'Which is NOT an example of an electromagnetic wave?', type: 'mcq', choices: ['Light', 'Radio waves', 'Sound', 'X-rays'], correct: 2, difficulty: 'M', explanation: 'Sound is a mechanical wave (needs a medium); the others are EM waves (don\'t).' }
  ]
};
