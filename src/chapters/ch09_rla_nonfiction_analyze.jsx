import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 9,
  title: 'RLA 2 — Analyzing Nonfiction & Informational Text',
  subtitle: 'Author\'s purpose, evaluating arguments, validity, related themes, opposing views, and graphic information.',
  blocks: [
    {
      id: 'purpose',
      title: 'Purpose of Text',
      content: (
        <>
          <p>Every nonfiction passage exists to <strong>do</strong> something to the reader. The four most common purposes:</p>
          <Table
            headers={['Purpose', 'Goal', 'Tells you what to look for']}
            rows={[
              ['Inform', 'Share facts or explain', 'Statistics, definitions, neutral tone'],
              ['Persuade', 'Convince the reader', 'Claims + evidence, emotional appeals'],
              ['Instruct', 'Teach a process', 'Steps, "how to", imperative verbs'],
              ['Entertain / engage', 'Tell a compelling story', 'Vivid description, dialogue, anecdotes']
            ]}
          />
          <Callout kind="tip" title="Quick test">
            Ask "what does the author <strong>want me to do, think, or feel</strong> after reading this?"
          </Callout>
        </>
      )
    },
    {
      id: 'effectiveness',
      title: 'Effectiveness of Argument',
      content: (
        <>
          <p>An <Term>argument</Term> = a claim plus evidence and reasoning. To judge effectiveness, evaluate three layers:</p>
          <Callout kind="formula" title="The 3-layer check">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Claim</strong>: Is it specific and clearly stated?</li>
              <li><strong>Evidence</strong>: Is it relevant, sufficient, and credible?</li>
              <li><strong>Reasoning</strong>: Does the evidence actually support the claim?</li>
            </ol>
          </Callout>
          <Table
            headers={['Type of evidence', 'Strength']}
            rows={[
              ['Peer-reviewed research / statistics', 'Strongest'],
              ['Eyewitness testimony or expert opinion', 'Moderate — depends on credibility'],
              ['Anecdote (one personal story)', 'Weakest by itself'],
              ['Emotional appeal alone', 'Not evidence']
            ]}
          />
        </>
      )
    },
    {
      id: 'validity',
      title: 'Validity of Arguments — Logical Fallacies',
      content: (
        <>
          <p>Even an argument with clear evidence can fail logically. Common <Term>fallacies</Term> to recognize:</p>
          <Table
            headers={['Fallacy', 'Definition', 'Example']}
            rows={[
              ['Hasty generalization', 'Conclusion from too few examples', '"My two coworkers from Maine love hockey, so all Mainers do."'],
              ['Ad hominem', 'Attacking the person not the argument', '"You can\'t trust her view on tax policy — she\'s not even from here."'],
              ['Slippery slope', 'Claim that X will lead to extreme Y without evidence', '"If we ban one type of dog, soon all dogs will be banned."'],
              ['False dilemma / either-or', 'Pretending only two options exist', '"Either you support this bill or you don\'t care about kids."'],
              ['Circular reasoning', 'The conclusion is also the premise', '"It\'s the best because no other is as good."'],
              ['Appeal to emotion', 'Using fear or pity instead of evidence', '"Think of the children!" — without data.'],
              ['Bandwagon', 'Everyone\'s doing it, so it must be right', '"Most people agree, so it must be true."'],
              ['Straw man', 'Misrepresenting the other side\'s view to attack it', '"They want to ban all guns" — when they only want background checks.']
            ]}
          />
        </>
      )
    },
    {
      id: 'related-by-theme',
      title: 'Texts Related by Theme or Topic',
      content: (
        <>
          <p>The GED often pairs two passages on the same topic. Common questions:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>What viewpoint do both authors share?</li>
            <li>Which detail appears in both passages?</li>
            <li>How does Author A's view differ from Author B's?</li>
          </ul>
          <Callout kind="tip" title="Strategy for paired passages">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Read Passage 1, jot a one-sentence main idea.</li>
              <li>Read Passage 2, jot another one-sentence main idea.</li>
              <li>Mark agreements and disagreements before reading the questions.</li>
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
          <p>When two sides disagree, identify these elements for each:</p>
          <Table
            headers={['Element', 'What to capture']}
            rows={[
              ['Main claim', 'What does this side argue?'],
              ['Evidence', 'What proof do they offer?'],
              ['Assumptions', 'What unstated beliefs does the argument depend on?'],
              ['Concessions', 'What does each side admit about the other?'],
              ['Strongest weakness', 'Where does the other side\'s evidence fall short?']
            ]}
          />
          <p className="mt-3 text-sm">A balanced answer to "Which side is stronger?" usually picks the one with more diverse, more credible evidence — not the one that sounds more passionate.</p>
        </>
      )
    },
    {
      id: 'graphics',
      title: 'Texts with Related Graphic Information',
      content: (
        <>
          <p>The GED RLA test mixes text with charts, tables, and infographics. To answer correctly:</p>
          <Callout kind="tip" title="Read the graphic step-by-step">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Title — what is it about?</li>
              <li>Axes / column headers — what variables?</li>
              <li>Units — percent? dollars? years?</li>
              <li>Trend or pattern — going up, down, flat? bunched, spread?</li>
              <li>Most-extreme values — the highest and lowest.</li>
              <li>How does it support or complicate the passage's claim?</li>
            </ol>
          </Callout>
          <Callout kind="warn" title="Don't extrapolate beyond the data">
            If a graph shows 2010-2020, don't assume the trend continues into 2025 unless the passage explicitly says so.
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
      { term: 'Concession', def: 'When a writer acknowledges a point made by the opposing side.' }
    ],
    laws: [
      { name: 'Three-layer argument test', desc: 'Claim, evidence, reasoning — each must work for the argument to succeed.' },
      { name: 'Strong evidence wins', desc: 'Peer-reviewed data > expert opinion > anecdote > emotional appeal.' }
    ],
    methods: [
      { name: 'Spot the fallacy', desc: 'Hasty generalization, ad hominem, slippery slope, false dilemma, circular reasoning, appeal to emotion, bandwagon, straw man.' },
      { name: 'Mark before answering', desc: 'For paired passages, write a one-sentence main idea for each before reading questions.' }
    ]
  },
  questions: [
    { q: '"This proposal must be wrong because the senator who proposed it has been criticized before." This is which fallacy?', type: 'mcq', choices: ['Hasty generalization', 'Ad hominem', 'Slippery slope', 'False dilemma'], correct: 1, difficulty: 'M', explanation: 'Attacks the person, not the proposal — ad hominem.' },
    { q: 'Which is the strongest type of evidence?', type: 'mcq', choices: ['One personal story', 'A peer-reviewed study with a large sample', 'A passionate emotional appeal', 'A famous quote'], correct: 1, difficulty: 'E', explanation: 'Peer-reviewed research is the most reliable.' },
    { q: 'An author of an op-ed writing about climate policy is most likely:', type: 'mcq', choices: ['Informing', 'Persuading', 'Entertaining', 'Instructing'], correct: 1, difficulty: 'E', explanation: 'Op-eds aim to persuade readers to a viewpoint.' },
    { q: '"If we allow this small change, soon everything will fall apart." This is:', type: 'mcq', choices: ['Slippery slope', 'Bandwagon', 'Circular reasoning', 'Straw man'], correct: 0, difficulty: 'M', explanation: 'Predicts an extreme cascade without evidence — slippery slope.' },
    { q: 'When reading a chart paired with a passage, you should first:', type: 'mcq', choices: ['Look at the legend', 'Read the title and axis labels', 'Identify the highest data point', 'Connect it to the passage\'s claim'], correct: 1, difficulty: 'E', explanation: 'Title and axes give the basic frame — start there.' },
    { q: 'Two passages disagree about renewable energy. The most useful first step is to:', type: 'mcq', choices: ['Pick a side', 'State each passage\'s main claim in one sentence', 'Look for fallacies', 'Skip to the questions'], correct: 1, difficulty: 'E', explanation: 'You can\'t compare arguments until you\'ve summarized them.' },
    { q: '"Either you support our team or you\'re against the school." This is:', type: 'mcq', choices: ['False dilemma', 'Ad hominem', 'Hasty generalization', 'Bandwagon'], correct: 0, difficulty: 'M', explanation: 'Pretends only two options exist — false dilemma.' },
    { q: 'A nonfiction text\'s purpose is to inform. The expected tone is:', type: 'mcq', choices: ['Sarcastic', 'Neutral / objective', 'Persuasive', 'Emotional'], correct: 1, difficulty: 'E', explanation: 'Informative texts use neutral, objective tone.' }
  ]
};
