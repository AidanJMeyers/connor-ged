import React from 'react';
import { Callout, Table, Term, M, Formula, Example } from '../components/Visual.jsx';

export default {
  id: 22,
  title: 'Science 1 — Science Practices',
  subtitle: 'How science actually works: the scientific method, controls and variables, statistics, and using formulas. The skills underneath every science question.',
  blocks: [
    {
      id: 'about-science',
      title: 'About the GED Science Test',
      content: (
        <>
          <Callout kind="info" title="The Science test at a glance">
            <p>About <strong>90 minutes</strong>, around <strong>34 questions</strong>. The content is split:</p>
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><strong>Life Science (Biology)</strong>: ~40%</li>
              <li><strong>Physical Science (Chemistry & Physics)</strong>: ~40%</li>
              <li><strong>Earth & Space Science</strong>: ~20%</li>
            </ul>
            <p>The test relies HEAVILY on reading comprehension. About 50% of questions give you a passage or experimental scenario and ask what conclusion follows. So the science-practices skills in this chapter — reading experiments critically, distinguishing correlation from causation, applying formulas — will help you on every other science question, regardless of topic.</p>
          </Callout>

          <Callout kind="tip" title="The most common GED science question">
            "Based on the experiment described, which conclusion is BEST supported by the data?" The answer is almost never the most dramatic-sounding option — it\'s the one most modestly supported by the actual data shown. When in doubt, pick the more cautious answer.
          </Callout>
        </>
      )
    },
    {
      id: 'comprehend',
      title: 'Reading Scientific Presentations',
      content: (
        <>
          <p>Science passages on the GED include experimental reports, journal abstracts, news articles, and lab procedures. To read them well, follow this 6-step framework:</p>
          <Callout kind="formula" title="Science-passage strategy">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Title</strong> — what topic? often hints at the conclusion.</li>
              <li><strong>Question or hypothesis</strong> — what is the experiment testing?</li>
              <li><strong>Method</strong> — what did they do? what controls were used?</li>
              <li><strong>Results</strong> — what did they observe? often in a table or graph.</li>
              <li><strong>Conclusion</strong> — what do the data show?</li>
              <li><strong>Limitations</strong> — what can\'t this experiment tell us?</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'scientific-method',
      title: 'The Scientific Method — How Science Actually Works',
      content: (
        <>
          <p>The "scientific method" you may have learned in school is more of a flowchart than a strict recipe. Real science loops back through these steps repeatedly. But the basic structure is reliable:</p>
          <Table
            headers={['Step', 'Description']}
            rows={[
              ['1. Question / observation', 'Notice something puzzling and ask why it happens.'],
              ['2. Hypothesis', 'A specific, testable, falsifiable prediction. (If A is true, then B should happen.)'],
              ['3. Experiment / data collection', 'Test the hypothesis under controlled conditions.'],
              ['4. Analyze data', 'Look for patterns; calculate statistics; check for significance.'],
              ['5. Conclusion', 'Does the evidence support or reject the hypothesis?'],
              ['6. Communicate', 'Publish so others can replicate. Replication is what makes science self-correcting.']
            ]}
          />

          <Callout kind="info" title="Key experimental terms — memorize these">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Independent variable</strong>: what the experimenter CHANGES on purpose (the treatment, the dose).</li>
              <li><strong>Dependent variable</strong>: what the experimenter MEASURES to see the effect (the outcome).</li>
              <li><strong>Control group</strong>: gets a placebo or no treatment — the baseline for comparison.</li>
              <li><strong>Experimental group</strong>: gets the treatment.</li>
              <li><strong>Constants (controlled variables)</strong>: factors kept the same across all groups, so they don\'t confound the results.</li>
              <li><strong>Replication</strong>: repeating the experiment with new groups (or by other scientists) to confirm.</li>
              <li><strong>Sample size (n)</strong>: how many subjects in each group. Bigger is generally more reliable.</li>
              <li><strong>Random assignment</strong>: subjects placed in groups by chance, eliminating selection bias.</li>
              <li><strong>Double-blind</strong>: neither the subjects nor the researchers know who got the treatment until results are tallied. Eliminates expectation effects.</li>
            </ul>
          </Callout>

          <Callout kind="warn" title="Theory vs hypothesis vs law — these are NOT the same">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>A <Term>hypothesis</Term> is a testable, specific guess. Small in scope.</li>
              <li>A <Term>theory</Term> is a well-supported explanation of natural phenomena, backed by extensive evidence and many tests. Examples: theory of gravity, theory of evolution, germ theory of disease.</li>
              <li>A <Term>law</Term> is a mathematical or descriptive pattern observed consistently in nature. Examples: Newton\'s laws, the law of conservation of energy.</li>
            </ul>
            <p className="mt-2"><strong>"It\'s just a theory" is a common misunderstanding.</strong> In science, "theory" means the BEST kind of explanation, robustly supported. Evolution, gravity, and germ theory are not "guesses" — they are extensively tested explanations.</p>
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
            <li><strong>Drawing conclusions</strong> from a graph or data table.</li>
            <li><strong>Predicting</strong> what would happen if a variable were changed.</li>
            <li><strong>Identifying flaws</strong> in an experimental design.</li>
            <li><strong>Distinguishing observation from inference</strong>.</li>
            <li><strong>Distinguishing correlation from causation</strong>.</li>
          </ul>

          <Callout kind="warn" title="Spot bad experiments — common GED test pattern">
            Bad experimental designs share these flaws. The GED loves to ask "what is the main flaw with this experiment?":
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><strong>No control group</strong> (you can\'t tell if the treatment did anything).</li>
              <li><strong>Sample too small</strong> (3 mice, 5 students, etc.).</li>
              <li><strong>Multiple variables changed at once</strong> (you can\'t tell which one mattered).</li>
              <li><strong>Results not replicated</strong> by other scientists.</li>
              <li><strong>Conflict of interest</strong> — sponsor profits from the outcome (e.g., a sugar company funding research showing sugar is healthy).</li>
              <li><strong>Selection bias</strong> — subjects weren\'t randomly assigned.</li>
              <li><strong>Observation only, no experiment</strong> — can\'t establish causation.</li>
            </ul>
          </Callout>

          <Callout kind="tip" title='The "but maybe..." test'>
            For any conclusion drawn from an experiment, ask: "What ELSE could explain this result?" If you can think of another plausible explanation, the conclusion is weak. Strong conclusions rule out alternatives by careful experimental design.
          </Callout>
        </>
      )
    },
    {
      id: 'express',
      title: 'Expressing & Applying Scientific Information',
      content: (
        <>
          <p>You\'ll need to choose appropriate ways to display data. Each chart type is best for a specific task:</p>
          <Table
            headers={['Data type', 'Best display']}
            rows={[
              ['Change over time', 'Line graph'],
              ['Comparing groups (categories)', 'Bar chart'],
              ['Parts of a whole (percentages)', 'Pie/circle chart'],
              ['Relationship between two variables', 'Scatter plot'],
              ['Distribution / frequency of values', 'Histogram'],
              ['Categorical with subgroups', 'Stacked bar chart']
            ]}
          />

          <Callout kind="info" title="Reading scatter plots — correlation but not always causation">
            A scatter plot showing two variables that rise together has a <strong>positive correlation</strong>. If one rises and the other falls, that\'s a <strong>negative correlation</strong>. If the dots are scattered randomly, no correlation. <strong>Correlation alone does NOT prove causation.</strong>
          </Callout>
        </>
      )
    },
    {
      id: 'stats-prob',
      title: 'Statistics & Probability in Science',
      content: (
        <>
          <p>Science uses statistics to deal with the fact that real-world data has variation. Some basics:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><Term>Sample size</Term> matters — bigger and more random = more reliable.</li>
            <li><Term>Mean, median, mode</Term> describe central tendency. (See Math chapter 4 for how to calculate.)</li>
            <li><Term>Standard deviation</Term> tells you how spread out the data is. Small SD = data tightly grouped; large SD = data spread out.</li>
            <li><Term>P-value</Term> &lt; 0.05 is the common threshold for "statistically significant" — meaning the result is unlikely to have happened by chance.</li>
            <li>An <Term>outlier</Term> may be a real extreme case OR a measurement error. Look at it carefully before deciding.</li>
          </ul>

          <Callout kind="tip" title="Statistical significance vs practical significance">
            A result can be "statistically significant" (unlikely by chance) but "practically insignificant" (the effect is too small to matter). A drug that lowers blood pressure by 0.1 mmHg might be statistically significant in a huge study but useless in real medicine. The GED occasionally tests this distinction.
          </Callout>
        </>
      )
    },
    {
      id: 'formulas',
      title: 'Applying Scientific Formulas',
      content: (
        <>
          <Callout kind="formula" title="Common GED science formulas — memorize these">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Density</strong>: D = m/V (mass / volume)</li>
              <li><strong>Speed</strong>: v = d/t (distance / time)</li>
              <li><strong>Acceleration</strong>: a = (v_f − v_i) / t (change in velocity over time)</li>
              <li><strong>Force (Newton\'s 2nd law)</strong>: F = m·a</li>
              <li><strong>Work</strong>: W = F · d (force × distance)</li>
              <li><strong>Power</strong>: P = W/t (work per unit time)</li>
              <li><strong>Kinetic energy</strong>: KE = ½ · m · v²</li>
              <li><strong>Potential energy (gravitational)</strong>: PE = m · g · h (g ≈ 9.8 m/s²)</li>
              <li><strong>Ohm\'s law</strong>: V = I · R (voltage = current × resistance)</li>
            </ul>
          </Callout>

          <Example
            problem='A 2 kg object accelerates at 3 m/s². What force was applied?'
            steps={[
              <>Use Newton\'s 2nd law: F = m·a.</>,
              <>F = 2 × 3 = 6.</>,
              <>Units: kg·m/s² = N (newtons).</>
            ]}
            answer="6 N"
          />

          <Example
            problem='A car travels 240 km in 3 hours. What is its average speed?'
            steps={[
              <>v = d/t = 240 / 3.</>,
              <>= 80 km/hr.</>
            ]}
            answer="80 km/hr"
          />

          <Callout kind="tip" title="The GED gives you formulas — but you have to KNOW which to use">
            Memorizing the formula isn\'t the hard part — the test usually provides them. The hard part is identifying which formula applies to a given problem. Always start by asking: "What is being measured (the unknown)? What information am I given? Which formula connects those?"
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Hypothesis', def: 'Testable, falsifiable prediction.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Theory', def: 'Well-supported scientific explanation backed by extensive evidence.' },
      { term: 'Independent variable', def: 'The variable the experimenter changes.' },
      { term: 'Dependent variable', def: 'The variable that\'s measured to see the effect.' },
      { term: 'Control group', def: 'Baseline group without treatment.' },
      { term: 'Replication', def: 'Repeating an experiment to confirm results.' }
    ],
    laws: [
      { name: 'Scientific method', desc: 'Question → Hypothesis → Experiment → Analyze → Conclude → Communicate.' },
      { name: 'F = m·a', desc: 'Newton\'s 2nd law.' },
      { name: 'D = m/V', desc: 'Density formula.' },
      { name: 'v = d/t', desc: 'Average speed.' },
      { name: 'Correlation ≠ causation', desc: 'Two correlated variables don\'t prove that one causes the other.' }
    ],
    methods: [
      { name: 'Spot bad design', desc: 'No control · small sample · too many variables · no replication · conflict of interest · selection bias.' },
      { name: 'Read graphics in order', desc: 'Title → axes → units → trend → outliers.' }
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
    { q: 'For data showing change over time, the best chart is a:', type: 'mcq', choices: ['Pie chart', 'Bar chart', 'Line graph', 'Histogram'], correct: 2, difficulty: 'E', explanation: 'Line graphs show trends across time.' },
    { q: 'A study finds that ice cream sales and crime rates rise in the same months. The best conclusion is:', type: 'mcq', choices: [
      'Ice cream causes crime',
      'Crime causes ice cream sales',
      'Both are likely caused by a third factor (warmer weather)',
      'The study is wrong'
    ], correct: 2, difficulty: 'M', explanation: 'Correlation is not causation — usually a confounding variable (warm weather → more outdoor activity → more crime AND more ice cream).' }
  ]
};
