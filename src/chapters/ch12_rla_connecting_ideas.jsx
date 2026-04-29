import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 12,
  title: 'RLA 5 — Connecting Ideas',
  subtitle: 'Paragraph organization, logical order, and transitions between sentences and paragraphs.',
  blocks: [
    {
      id: 'paragraphs',
      title: 'Organizing Ideas into Paragraphs',
      content: (
        <>
          <p>Each <Term>paragraph</Term> covers one main idea. Strong paragraphs follow a 3-part structure:</p>
          <Table
            headers={['Part', 'Purpose']}
            rows={[
              ['Topic sentence', 'States the main idea — usually first'],
              ['Body', 'Supporting details, examples, evidence — 3-6 sentences'],
              ['Closing/transition', 'Wraps up the idea or leads to the next paragraph']
            ]}
          />
          <Callout kind="tip" title="One idea per paragraph">
            If you find yourself writing about a new idea mid-paragraph, start a new paragraph. If a paragraph is over ~8 sentences, split it.
          </Callout>
        </>
      )
    },
    {
      id: 'logical-order',
      title: 'Logical Order & Relevance',
      content: (
        <>
          <p>Information should appear in an order the reader can follow. Common patterns:</p>
          <Table
            headers={['Order', 'Use when']}
            rows={[
              ['Chronological', 'Telling a story or describing a process'],
              ['Order of importance', 'Persuasive writing — strongest argument first or last'],
              ['Spatial', 'Describing a scene from left-to-right, top-to-bottom, etc.'],
              ['General-to-specific', 'Introducing a topic with overview, then zooming in'],
              ['Specific-to-general', 'Building from examples to a broad conclusion']
            ]}
          />
          <Callout kind="warn" title="Cut irrelevant sentences">
            On the GED, "Which sentence should be deleted?" questions reward removing details that don't support the paragraph's main idea — even if the detail is true or interesting.
          </Callout>
        </>
      )
    },
    {
      id: 'relate-sentences',
      title: 'Relating Sentences & Paragraphs (Transitions)',
      content: (
        <>
          <p><Term>Transitions</Term> are words or phrases that show how ideas connect. Choose them based on the relationship.</p>
          <Table
            headers={['Relationship', 'Transitions']}
            rows={[
              ['Adding', 'also, in addition, furthermore, moreover, besides'],
              ['Contrasting', 'however, on the other hand, but, in contrast, although, yet'],
              ['Cause-effect', 'because, as a result, therefore, consequently, thus, hence'],
              ['Example', 'for example, for instance, such as, namely'],
              ['Sequence', 'first, next, then, finally, subsequently, afterward'],
              ['Emphasis', 'indeed, in fact, certainly, of course'],
              ['Summary', 'in conclusion, to summarize, overall, all in all'],
              ['Comparison', 'similarly, likewise, in the same way']
            ]}
          />
          <Callout kind="tip" title="The 'so what?' test">
            After every paragraph, ask "so what — why does this matter for the next idea?" The answer becomes your transition.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Topic sentence', def: 'The sentence stating a paragraph\'s main idea, usually first.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Transition', def: 'Word/phrase showing how ideas relate.' },
      { term: 'Coherence', def: 'How smoothly ideas flow from one to the next.' },
      { term: 'Unity', def: 'The quality of all sentences in a paragraph supporting the same main idea.' }
    ],
    laws: [
      { name: 'One-idea rule', desc: 'Every paragraph covers exactly one main idea.' },
      { name: 'Match transition to relationship', desc: 'Pick "however" for contrast, "therefore" for cause-effect, etc.' }
    ],
    methods: [
      { name: '3-part paragraph', desc: 'Topic sentence → support → closing/transition.' },
      { name: 'Cut what doesn\'t fit', desc: 'On revision questions, sentences that drift off-topic should be removed.' }
    ]
  },
  questions: [
    { q: 'Which transition signals cause-and-effect?', type: 'mcq', choices: ['However', 'Similarly', 'Therefore', 'Meanwhile'], correct: 2, difficulty: 'E', explanation: '"Therefore" expresses a result — cause-and-effect.' },
    { q: 'A paragraph\'s main idea is usually stated in the:', type: 'mcq', choices: ['Last sentence', 'Topic sentence', 'Title', 'Random middle sentence'], correct: 1, difficulty: 'E', explanation: 'Topic sentence states the main idea.' },
    { q: 'A paragraph contains: 1) Cars are getting safer. 2) Modern cars have airbags. 3) The history of seat belts started in 1959. 4) Today\'s cars also include lane-departure warning. Which sentence is irrelevant to the main idea?', type: 'mcq', choices: ['1', '2', '3', '4'], correct: 2, difficulty: 'M', explanation: 'Sentence 3 detours to history; the rest are about modern car safety features.' },
    { q: 'Best transition: "I studied for hours. ___ I felt prepared for the test."', type: 'mcq', choices: ['However', 'Nevertheless', 'As a result', 'In contrast'], correct: 2, difficulty: 'E', explanation: 'Studying caused feeling prepared — cause-effect.' },
    { q: 'Best transition: "I studied for hours. ___ I forgot half of it during the test."', type: 'mcq', choices: ['Therefore', 'Likewise', 'However', 'Furthermore'], correct: 2, difficulty: 'M', explanation: 'Contrast — studied yet forgot.' },
    { q: 'Best order: when describing how to make pasta:', type: 'mcq', choices: ['Order of importance', 'Spatial order', 'Chronological/sequence', 'General to specific'], correct: 2, difficulty: 'E', explanation: 'Recipes follow time order.' }
  ]
};
