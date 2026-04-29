import React from 'react';
import { Callout, Table, Term, M, Formula, Example } from '../components/Visual.jsx';

export default {
  id: 22,
  title: 'Science 1 — Science Practices',
  subtitle: 'The scientific method, reading scientific texts, statistics in science, and applying formulas.',
  blocks: [
    {
      id: 'comprehend',
      title: 'Reading Scientific Presentations',
      content: (
        <>
          <p>Science passages on the GED include experimental reports, journal abstracts, news articles, and lab procedures. To read them well:</p>
          <Callout kind="tip" title="Science-passage strategy">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Title</strong> tells the topic and often the conclusion.</li>
              <li><strong>Question or hypothesis</strong> the experiment was testing.</li>
              <li><strong>Method</strong> — what they did, with what controls.</li>
              <li><strong>Results</strong> — what they observed, often in a table or graph.</li>
              <li><strong>Conclusion</strong> — what the data show.</li>
              <li><strong>Limitations</strong> — what the experiment can't tell us.</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'scientific-method',
      title: 'The Scientific Method',
      content: (
        <>
          <Table
            headers={['Step', 'Description']}
            rows={[
              ['1. Question / observation', 'Notice a phenomenon and ask why.'],
              ['2. Hypothesis', 'A testable, falsifiable prediction.'],
              ['3. Experiment / data collection', 'Test the hypothesis with controlled procedures.'],
              ['4. Analyze data', 'Look for patterns; calculate averages, statistical significance.'],
              ['5. Conclusion', 'Does the data support or reject the hypothesis?'],
              ['6. Communicate', 'Publish so others can replicate.']
            ]}
          />

          <Callout kind="info" title="Key experimental terms">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Independent variable</strong>: what YOU change (e.g., dose).</li>
              <li><strong>Dependent variable</strong>: what you MEASURE (e.g., blood pressure).</li>
              <li><strong>Control group</strong>: gets a placebo or no treatment — the baseline.</li>
              <li><strong>Experimental group</strong>: gets the treatment.</li>
              <li><strong>Constants</strong>: things kept the same across both groups.</li>
              <li><strong>Replication</strong>: repeating with new groups to confirm.</li>
            </ul>
          </Callout>

          <Callout kind="warn" title="Theory vs hypothesis vs law">
            A <Term>hypothesis</Term> is a testable guess. A <Term>theory</Term> is a well-supported explanation backed by extensive evidence (gravity, evolution, germ theory). A <Term>law</Term> is a mathematical or descriptive pattern (Newton's laws). "Just a theory" — in science — means very strongly supported.
          </Callout>
        </>
      )
    },
    {
      id: 'reasoning',
      title: 'Reasoning with Scientific Information',
      content: (
        <>
          <p>Common reasoning tasks on the GED Science test:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Drawing conclusions</strong> from a graph or table.</li>
            <li><strong>Predicting</strong> what would happen if a variable were changed.</li>
            <li><strong>Identifying flaws</strong> in an experimental design.</li>
            <li><strong>Distinguishing observation from inference</strong>.</li>
          </ul>
          <Callout kind="warn" title="Spot bad experiments">
            Bad experiments often have one of these flaws:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li>No control group</li>
              <li>Sample too small (only 3 mice tested)</li>
              <li>Multiple variables changed at once (can\'t tell which mattered)</li>
              <li>Results not replicated</li>
              <li>Conflict of interest (sponsor profits from outcome)</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'express',
      title: 'Expressing & Applying Scientific Information',
      content: (
        <>
          <p>You'll need to choose appropriate ways to display data:</p>
          <Table
            headers={['Data type', 'Best display']}
            rows={[
              ['Change over time', 'Line graph'],
              ['Comparing groups', 'Bar chart'],
              ['Parts of a whole', 'Pie/circle chart'],
              ['Relationship between two variables', 'Scatter plot'],
              ['Distribution / frequency', 'Histogram']
            ]}
          />
        </>
      )
    },
    {
      id: 'stats-prob',
      title: 'Statistics & Probability in Science',
      content: (
        <>
          <p>Same as math chapter 4, with science emphasis:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><Term>Sample size</Term> matters — bigger and more random = better.</li>
            <li><Term>Mean, median, mode</Term> describe central tendency.</li>
            <li><Term>Standard deviation</Term> tells you how spread out the data is.</li>
            <li><Term>P-value</Term> &lt; 0.05 is the common threshold for "statistically significant."</li>
            <li>An <Term>outlier</Term> may be a real extreme case OR a measurement error.</li>
          </ul>
        </>
      )
    },
    {
      id: 'formulas',
      title: 'Applying Scientific Formulas',
      content: (
        <>
          <Callout kind="formula" title="Common GED science formulas">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Density</strong>: D = m/V (mass / volume)</li>
              <li><strong>Speed</strong>: v = d/t</li>
              <li><strong>Acceleration</strong>: a = (v_f − v_i) / t</li>
              <li><strong>Force (Newton's 2nd law)</strong>: F = m·a</li>
              <li><strong>Work</strong>: W = F · d</li>
              <li><strong>Power</strong>: P = W/t</li>
              <li><strong>Kinetic energy</strong>: KE = ½ · m · v²</li>
              <li><strong>Potential energy (gravity)</strong>: PE = m · g · h (g ≈ 9.8 m/s²)</li>
              <li><strong>Ohm's law</strong>: V = I · R</li>
            </ul>
          </Callout>

          <Example
            problem='A 2 kg object accelerates at 3 m/s². What force was applied?'
            steps={[
              <>F = m·a.</>,
              <>F = 2 × 3 = 6.</>,
              <>Units: kg·m/s² = N (newtons).</>
            ]}
            answer="6 N"
          />

          <Example
            problem='A car travels 240 km in 3 hours. What is its average speed?'
            steps={[
              <>v = d/t = 240 / 3 = 80 km/hr.</>
            ]}
            answer="80 km/hr"
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Hypothesis', def: 'Testable, falsifiable prediction.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Theory', def: 'Well-supported scientific explanation.' },
      { term: 'Independent variable', def: 'The variable you change in an experiment.' },
      { term: 'Dependent variable', def: 'The variable you measure.' },
      { term: 'Control group', def: 'Baseline group without treatment.' }
    ],
    laws: [
      { name: 'Scientific method', desc: 'Question → Hypothesis → Experiment → Analyze → Conclude → Communicate.' },
      { name: 'F = m·a', desc: 'Newton\'s 2nd law.' },
      { name: 'D = m/V', desc: 'Density.' },
      { name: 'v = d/t', desc: 'Average speed.' }
    ],
    methods: [
      { name: 'Spot bad design', desc: 'No control · small sample · too many variables · no replication · conflict of interest.' }
    ]
  },
  questions: [
    { q: 'In an experiment, the group that does NOT receive the treatment is called the:', type: 'mcq', choices: ['Experimental group', 'Control group', 'Sample', 'Variable'], correct: 1, difficulty: 'E', explanation: 'Control = baseline.' },
    { q: 'A 5 kg ball accelerates at 4 m/s². The force applied is:', type: 'math', correct: 20, difficulty: 'E', explanation: 'F = m·a = 5 × 4 = 20 N.' },
    { q: 'Density = mass / volume. A 60 g object has volume 20 cm³. Density?', type: 'math', correct: 3, difficulty: 'E', explanation: 'D = 60/20 = 3 g/cm³.' },
    { q: 'A "theory" in science means:', type: 'mcq', choices: [
      'A guess',
      'A well-supported explanation backed by evidence',
      'An untested idea',
      'A hypothesis'
    ], correct: 1, difficulty: 'M', explanation: 'A theory is robustly tested and supported.' },
    { q: 'The strongest experiment design has all of these EXCEPT:', type: 'mcq', choices: [
      'A control group',
      'Large sample size',
      'Replication',
      'A conflict of interest'
    ], correct: 3, difficulty: 'M', explanation: 'Conflict of interest weakens credibility.' },
    { q: 'A scientist tests four temperatures and four soil types simultaneously without controls. The main flaw is:', type: 'mcq', choices: [
      'The experiment is too cheap',
      'Too many variables changed at once',
      'Use of metric units',
      'Lack of beautiful graphs'
    ], correct: 1, difficulty: 'M', explanation: 'Confounded variables — can\'t isolate cause.' },
    { q: 'A car goes from 0 to 24 m/s in 6 seconds. Acceleration?', type: 'math', correct: 4, difficulty: 'M', explanation: 'a = Δv/t = 24/6 = 4 m/s².' },
    { q: 'For data showing change over time, the best chart is a:', type: 'mcq', choices: ['Pie chart', 'Bar chart', 'Line graph', 'Histogram'], correct: 2, difficulty: 'E', explanation: 'Line graphs show trends across time.' }
  ]
};
