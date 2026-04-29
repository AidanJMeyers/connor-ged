import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 9,
  title: 'RLA 2 — Analyzing Nonfiction & Informational Text',
  subtitle: "Author's purpose, evaluating arguments, spotting logical fallacies, comparing texts, and reading charts paired with text.",
  blocks: [
    {
      id: 'why-analyze',
      title: 'Why "Analyzing" Goes Beyond "Interpreting"',
      content: (
        <>
          <p>Chapter 8 was about <strong>understanding</strong> a passage — what does the author say, what\'s the main idea, what details support it. This chapter is about <strong>evaluating</strong> a passage — is the argument any good? Is the evidence trustworthy? What\'s the author trying to do to me?</p>

          <p>This is one of the most useful skills the GED tests, because the world is full of arguments — from advertisements to op-eds to political speeches to social-media posts — and most people accept or reject them based on whether they like the conclusion, rather than whether the reasoning is sound. Becoming good at argument analysis is genuinely life-changing.</p>

          <Callout kind="info" title="The 3-question framework you\'ll use over and over">
            For any persuasive passage, ask:
            <ol className="list-decimal ml-5 text-sm space-y-1 mt-1">
              <li>What is the author CLAIMING?</li>
              <li>What EVIDENCE do they offer?</li>
              <li>Does the evidence actually SUPPORT the claim?</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'purpose',
      title: 'Purpose of Text — What the Author Is Trying to Do',
      content: (
        <>
          <p>Every nonfiction passage exists to <strong>do</strong> something to the reader — change a belief, share information, teach a process, or simply hold attention. Recognizing the purpose helps you understand what counts as success in that passage.</p>
          <Table
            headers={['Purpose', 'Goal', 'Tells you to look for']}
            rows={[
              ['Inform', 'Share facts or explain a topic', 'Statistics, definitions, neutral tone, no clear opinion'],
              ['Persuade', 'Convince the reader of a position', 'Claims + evidence, emotional appeals, calls to action'],
              ['Instruct', 'Teach a process or skill', 'Steps, "how to", imperative verbs ("press", "stir")'],
              ['Entertain / engage', 'Tell a compelling story', 'Vivid description, dialogue, anecdotes, suspense'],
              ['Reflect', 'Share a personal experience or insight', 'First person, emotional moments, life lessons']
            ]}
          />
          <Callout kind="tip" title="The fastest way to spot purpose">
            Ask: "What does the author want me to <strong>do, think, or feel</strong> after reading this?" An informational passage wants you to know things. A persuasive passage wants you to agree. An instructional passage wants you to be able to do something. A narrative passage wants you to feel something.
          </Callout>
        </>
      )
    },
    {
      id: 'effectiveness',
      title: 'Effectiveness of an Argument',
      content: (
        <>
          <p>An <Term>argument</Term> = a claim plus evidence and reasoning. To judge how effective an argument is, evaluate three layers:</p>
          <Callout kind="formula" title="The 3-layer check">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Claim</strong>: Is it specific and clearly stated? Vague claims (like "things are bad") are hard to defend or attack.</li>
              <li><strong>Evidence</strong>: Is it relevant, sufficient, and credible?</li>
              <li><strong>Reasoning</strong>: Does the evidence actually support the claim, or is there a logical gap?</li>
            </ol>
          </Callout>

          <Table
            headers={['Type of evidence', 'Strength', 'Why']}
            rows={[
              ['Peer-reviewed research / large studies', 'Strongest', 'Methodology vetted by other experts; results replicate'],
              ['Government / NGO statistics', 'Strong', 'Independent collection; usually large samples'],
              ['Expert testimony', 'Moderate', 'Depends on who\'s talking and what evidence they\'re citing'],
              ['Specific case study', 'Moderate', 'Concrete but limited generalizability'],
              ['Anecdote (one personal story)', 'Weak by itself', 'A single experience is one data point'],
              ['Common-sense statement', 'Weak', '"Everyone knows" doesn\'t mean it\'s true'],
              ['Pure emotional appeal', 'Not evidence', 'Feelings are not facts']
            ]}
          />

          <Callout kind="warn" title="Quantity ≠ quality">
            A passage with many anecdotes still has weaker support than one peer-reviewed study with thousands of participants. Don\'t be impressed by sheer volume; ask about credibility.
          </Callout>
        </>
      )
    },
    {
      id: 'validity',
      title: 'Validity & Logical Fallacies — When Reasoning Goes Wrong',
      content: (
        <>
          <p>Even an argument with seemingly clear evidence can fail logically. <Term>Fallacies</Term> are common reasoning errors. Politicians, advertisers, and op-ed writers use them constantly — sometimes by accident, sometimes on purpose. Memorize these:</p>

          <Table
            headers={['Fallacy', 'Definition', 'Example']}
            rows={[
              ['Hasty generalization', 'Drawing a broad conclusion from too few examples', '"My two coworkers from Maine love hockey, so all Mainers do."'],
              ['Ad hominem', 'Attacking the person making the argument, not the argument itself', '"You can\'t trust her view on tax policy — she\'s never even been to Wyoming."'],
              ['Slippery slope', 'Claim that one small change will inevitably lead to extreme results, with no evidence for the chain', '"If we ban one type of dog, soon all dogs will be banned."'],
              ['False dilemma (either-or)', 'Pretending only two options exist when there are more', '"Either you support this bill or you don\'t care about kids."'],
              ['Circular reasoning (begging the question)', 'Using the conclusion as the premise', '"It\'s the best because no other is as good."'],
              ['Appeal to emotion', 'Using fear, pity, or anger instead of evidence', '"Just think of the poor children!" — without data.'],
              ['Bandwagon', 'Claiming something is right because everyone\'s doing it', '"Most people agree, so it must be true."'],
              ['Straw man', 'Misrepresenting an opponent\'s view to make it easier to attack', '"They want to ban ALL guns" — when they only want background checks.'],
              ['Red herring', 'Distracting from the issue with an unrelated point', '"Sure, the bridge is unsafe, but what about the budget?"'],
              ['Appeal to authority', 'Citing a famous person who isn\'t actually an expert in the topic', '"This actor recommends this medical treatment."'],
              ['False cause', 'Assuming because B happened after A, A caused B', '"I wore my lucky socks and we won — the socks won the game."']
            ]}
          />

          <Callout kind="tip" title="Don\'t worry about memorizing every Latin name">
            The GED won\'t demand you label "post hoc ergo propter hoc" by name. It will give you an argument and ask which choice describes the FLAW. As long as you can recognize the pattern, you\'ll get the answer right.
          </Callout>
        </>
      )
    },
    {
      id: 'related-by-theme',
      title: 'Texts Related by Theme or Topic — Comparing Two Passages',
      content: (
        <>
          <p>The GED often pairs two passages on the same topic. Common questions:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>What viewpoint do both authors share?</li>
            <li>Which detail appears in both passages?</li>
            <li>How does Author A\'s view differ from Author B\'s?</li>
            <li>Which passage has stronger evidence — and why?</li>
          </ul>

          <Callout kind="tip" title="Strategy for paired passages">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Read Passage 1. Jot a one-sentence main idea on scratch paper.</li>
              <li>Read Passage 2. Jot another one-sentence main idea.</li>
              <li>Mark agreements and disagreements before reading the questions. (You can mentally underline a point of agreement and circle a point of disagreement.)</li>
              <li>Now hit the questions — you\'ll know exactly where to look.</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'opposing-args',
      title: 'Texts with Opposing Arguments',
      content: (
        <>
          <p>When two passages openly disagree, the GED expects you to evaluate them. Use this checklist for each passage:</p>
          <Table
            headers={['Element', 'What to capture']}
            rows={[
              ['Main claim', 'What is this side arguing for?'],
              ['Evidence', 'What proof do they offer? How credible is each piece?'],
              ['Assumptions', 'What unstated beliefs does this argument rely on?'],
              ['Concessions', 'Does this side admit any points to the other? (Mature arguments do.)'],
              ['Strongest weakness', 'Where does this side\'s evidence or reasoning fall short?']
            ]}
          />

          <p className="mt-3">A balanced answer to "which side is stronger?" usually picks the one with more diverse and credible evidence — NOT the one that sounds more passionate, NOT the one with more concrete examples, and NOT the one you personally agree with.</p>

          <Callout kind="warn" title="Watch your own bias">
            On controversial topics (politics, social issues), you may agree with one side already. The GED is testing whether you can evaluate ARGUMENT QUALITY, not which side is morally right. The "right" answer is the side whose case is better-supported BY THIS PASSAGE.
          </Callout>
        </>
      )
    },
    {
      id: 'graphics',
      title: 'Texts with Related Charts, Graphs & Tables',
      content: (
        <>
          <p>The GED RLA test mixes text with charts, tables, and infographics. The data either reinforces the passage\'s claim or qualifies it.</p>
          <Callout kind="tip" title="Read the graphic step-by-step">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Title</strong> — what is the chart about?</li>
              <li><strong>Axes / column headers</strong> — what variables?</li>
              <li><strong>Units</strong> — percent? dollars? years? hundreds?</li>
              <li><strong>Trend or pattern</strong> — going up, down, flat? evenly distributed or bunched?</li>
              <li><strong>Most-extreme values</strong> — the highest and lowest data points.</li>
              <li><strong>Connection to the passage</strong> — does the chart support the author\'s claim, or qualify it?</li>
            </ol>
          </Callout>

          <Callout kind="warn" title="Don\'t extrapolate beyond the data shown">
            If a graph shows employment data 2010-2020, don\'t assume the trend continues into 2025 unless the passage explicitly says so. A common GED wrong-answer type is "this trend will continue forever" — usually unsupported by what the chart actually shows.
          </Callout>

          <Callout kind="info" title="Types of graphics common on the GED">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Bar chart</strong> — comparing distinct categories.</li>
              <li><strong>Line graph</strong> — change over time.</li>
              <li><strong>Pie chart</strong> — parts of a whole, percentages.</li>
              <li><strong>Scatter plot</strong> — relationship between two variables.</li>
              <li><strong>Table</strong> — exact values for many cases.</li>
              <li><strong>Map / heatmap</strong> — geographic patterns.</li>
              <li><strong>Infographic</strong> — mixed elements; read the labels carefully.</li>
            </ul>
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Argument', def: 'A claim plus evidence and reasoning.' },
      { term: 'Fallacy', def: 'A flaw in reasoning that weakens an argument.', tag: 'KEY', tagColor: 'red' },
      { term: 'Evidence', def: 'Facts, statistics, examples, or expert testimony backing a claim.' },
      { term: 'Assumption', def: 'An unstated belief that an argument depends on.' },
      { term: 'Concession', def: 'When a writer acknowledges a point made by the opposing side.' },
      { term: 'Counterargument', def: 'A point against the main argument, often acknowledged then refuted.' }
    ],
    laws: [
      { name: 'Three-layer argument test', desc: 'Claim, evidence, reasoning — each must work for the argument to succeed.' },
      { name: 'Strong evidence wins', desc: 'Peer-reviewed data > government statistics > expert opinion > anecdote > emotional appeal.' },
      { name: 'Quantity ≠ quality', desc: 'Many weak examples still don\'t outweigh one strong study.' }
    ],
    methods: [
      { name: 'Spot the fallacy', desc: 'Hasty generalization, ad hominem, slippery slope, false dilemma, circular reasoning, appeal to emotion, bandwagon, straw man, red herring.' },
      { name: 'Mark before answering', desc: 'For paired passages, write a one-sentence main idea for each before reading questions.' },
      { name: 'Read the chart in order: title → axes → units → scale → trend', desc: 'Avoids being misled.' }
    ]
  },
  questions: [
    { q: '"This proposal must be wrong because the senator who proposed it has been criticized before." This is which fallacy?', type: 'mcq', choices: ['Hasty generalization', 'Ad hominem', 'Slippery slope', 'False dilemma'], correct: 1, difficulty: 'M', explanation: 'Attacks the person, not the proposal — ad hominem.' },
    { q: 'Which is the strongest type of evidence?', type: 'mcq', choices: ['One personal story', 'A peer-reviewed study with a large sample', 'A passionate emotional appeal', 'A famous quote'], correct: 1, difficulty: 'E', explanation: 'Peer-reviewed research is the most reliable.' },
    { q: 'An author of an op-ed writing about climate policy is most likely:', type: 'mcq', choices: ['Informing', 'Persuading', 'Entertaining', 'Instructing'], correct: 1, difficulty: 'E', explanation: 'Op-eds aim to persuade readers to a viewpoint.' },
    { q: '"If we allow this small change, soon everything will fall apart." This is:', type: 'mcq', choices: ['Slippery slope', 'Bandwagon', 'Circular reasoning', 'Straw man'], correct: 0, difficulty: 'M', explanation: 'Predicts an extreme cascade without evidence.' },
    { q: 'When reading a chart paired with a passage, your FIRST step should be:', type: 'mcq', choices: ['Find the highest point', 'Read the title and axis labels', 'Look at the legend', 'Connect to the passage'], correct: 1, difficulty: 'E', explanation: 'Title + axes give you the basic frame.' },
    { q: 'Two passages disagree about renewable energy. The most useful first step is to:', type: 'mcq', choices: ['Pick a side', 'State each passage\'s main claim in one sentence', 'Look for fallacies', 'Skip to the questions'], correct: 1, difficulty: 'E', explanation: 'You can\'t compare arguments until you\'ve summarized them.' },
    { q: '"Either you support our team or you\'re against the school." This is:', type: 'mcq', choices: ['False dilemma', 'Ad hominem', 'Hasty generalization', 'Bandwagon'], correct: 0, difficulty: 'M', explanation: 'Pretends only two options exist.' },
    { q: 'A nonfiction text whose purpose is to inform should have what kind of tone?', type: 'mcq', choices: ['Sarcastic', 'Neutral / objective', 'Persuasive', 'Emotional'], correct: 1, difficulty: 'E', explanation: 'Informative texts use neutral, objective tone.' },
    { q: '"My uncle smoked his whole life and lived to 90, so smoking can\'t really be that harmful." This is:', type: 'mcq', choices: ['Hasty generalization', 'Bandwagon', 'Circular reasoning', 'Red herring'], correct: 0, difficulty: 'M', explanation: 'Drawing a broad conclusion from one example is hasty generalization.' }
  ]
};
