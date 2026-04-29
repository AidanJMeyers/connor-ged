import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 12,
  title: 'RLA 5 — Connecting Ideas Across Sentences & Paragraphs',
  subtitle: 'How to organize a paragraph, choose the right transitions, and decide what to cut.',
  blocks: [
    {
      id: 'why-connecting',
      title: 'Why "Flow" Matters',
      content: (
        <>
          <p>Even a passage with technically perfect grammar can be hard to read if the ideas don\'t connect smoothly. The GED tests this in two main ways:</p>
          <ol className="list-decimal ml-6 text-sm space-y-1 mt-1">
            <li><strong>Transition questions</strong>: "Which transition word is best in this sentence?" The answer choices are typically four different transitions (however, therefore, similarly, furthermore), and only one matches the relationship between the ideas.</li>
            <li><strong>Sentence-relevance questions</strong>: "Which sentence should be removed from this paragraph?" The right answer is usually a sentence that drifts off-topic or repeats info already given.</li>
          </ol>
          <p className="mt-3">Both question types reward the same skill: noticing how ideas relate to each other and what kind of connection the writer needs to make.</p>
        </>
      )
    },
    {
      id: 'paragraphs',
      title: 'Paragraph Structure — One Idea at a Time',
      content: (
        <>
          <p>Each <Term>paragraph</Term> covers <strong>one main idea</strong>. Strong paragraphs follow a 3-part structure:</p>
          <Table
            headers={['Part', 'Purpose', 'Length']}
            rows={[
              ['Topic sentence', 'States the main idea — usually first', 'one sentence'],
              ['Body', 'Supporting details, examples, evidence', '3-6 sentences typically'],
              ['Closing / transition', 'Wraps up or leads to the next idea', 'one sentence (or merged into the body)']
            ]}
          />

          <Callout kind="tip" title="Two warning signs that you need a new paragraph">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>You\'re shifting to a new idea or new sub-topic.</li>
              <li>The paragraph is over ~8 sentences — readers need a visual break.</li>
            </ol>
            On the GED test, paragraphs in passages are usually 3-6 sentences. If a passage seems to lump two unrelated ideas in one paragraph, the question may ask you to identify where the new paragraph should start.
          </Callout>
        </>
      )
    },
    {
      id: 'logical-order',
      title: 'Logical Order & Relevance',
      content: (
        <>
          <p>Information should appear in an order the reader can follow. There are several common patterns:</p>
          <Table
            headers={['Order', 'When to use it', 'Example contexts']}
            rows={[
              ['Chronological', 'Telling a story or describing a process', 'recipes, biographies, instructions'],
              ['Order of importance', 'Persuasive writing — strongest argument first OR last', 'op-eds, sales pitches'],
              ['Spatial', 'Describing a scene', 'novel passages, building tours'],
              ['General-to-specific', 'Introducing a topic', 'most academic articles'],
              ['Specific-to-general', 'Building from examples to a broad conclusion', 'inductive arguments'],
              ['Compare-contrast', 'Discussing similarities and differences', 'review articles, debates']
            ]}
          />

          <Callout kind="warn" title="Cut sentences that don\'t belong">
            On "which sentence should be deleted?" questions, the right answer is usually a sentence that:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li>Goes off-topic from the paragraph\'s main idea.</li>
              <li>Repeats information already stated.</li>
              <li>Adds an interesting fact that doesn\'t support the argument.</li>
              <li>Belongs in a different paragraph.</li>
            </ul>
            <em>Don\'t pick "interesting but irrelevant" details just because they\'re true.</em>
          </Callout>
        </>
      )
    },
    {
      id: 'relate-sentences',
      title: 'Transitions — Words That Show How Ideas Connect',
      content: (
        <>
          <p><Term>Transitions</Term> are words or phrases that signal the relationship between sentences (or between paragraphs). Choosing the right transition is one of the most heavily-tested writing skills on the GED, because the wrong transition makes the writing genuinely confusing.</p>
          <Table
            headers={['Relationship', 'Common transitions']}
            rows={[
              ['Adding more', 'also, in addition, furthermore, moreover, besides, additionally'],
              ['Contrasting', 'however, on the other hand, but, in contrast, although, yet, nevertheless, conversely'],
              ['Cause and effect', 'because, since, as a result, therefore, consequently, thus, hence, accordingly'],
              ['Giving an example', 'for example, for instance, such as, namely, specifically'],
              ['Showing time order', 'first, next, then, finally, subsequently, afterward, meanwhile, eventually'],
              ['Emphasizing', 'indeed, in fact, certainly, of course, importantly'],
              ['Summarizing / concluding', 'in conclusion, to summarize, overall, all in all, in short'],
              ['Comparing', 'similarly, likewise, in the same way, just as'],
              ['Conditional', 'if, unless, provided that, in case'],
              ['Restatement', 'in other words, that is, to put it another way']
            ]}
          />

          <Callout kind="tip" title="The 'so what?' test">
            After every paragraph, ask yourself "so what — why does this matter for the next idea?" The answer becomes your transition. If the next paragraph develops the same idea further, "furthermore" or "additionally" works. If it qualifies the previous claim, "however" works. If it draws a conclusion, "therefore" works.
          </Callout>

          <Callout kind="warn" title="The classic GED trap">
            Test-makers love to put a wrong transition in the original sentence to see if you notice. "I studied for hours. <strong>Therefore</strong>, I forgot half the material during the test." Wait — studying causes forgetting? No. The right transition is "However" or "Nevertheless." A perfectly grammatical sentence can still be logically wrong.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Topic sentence', def: 'The sentence stating a paragraph\'s main idea, usually first.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Transition', def: 'Word or phrase showing how ideas relate.' },
      { term: 'Coherence', def: 'How smoothly ideas flow from one to the next.' },
      { term: 'Unity', def: 'The quality of all sentences in a paragraph supporting the same main idea.' },
      { term: 'Conjunctive adverb', def: 'A transition word like however, therefore, moreover. Often follows a semicolon.' }
    ],
    laws: [
      { name: 'One-idea rule', desc: 'Every paragraph covers exactly one main idea.' },
      { name: 'Match transition to relationship', desc: 'Pick "however" for contrast, "therefore" for cause-effect, "for example" for example, etc.' }
    ],
    methods: [
      { name: '3-part paragraph', desc: 'Topic sentence → support → closing/transition.' },
      { name: 'Cut what doesn\'t fit', desc: 'On revision questions, off-topic sentences should be removed even if true.' }
    ]
  },
  questions: [
    { q: 'Which transition signals cause-and-effect?', type: 'mcq', choices: ['However', 'Similarly', 'Therefore', 'Meanwhile'], correct: 2, difficulty: 'E', explanation: '"Therefore" expresses a result.' },
    { q: 'A paragraph\'s main idea is usually stated in the:', type: 'mcq', choices: ['Last sentence', 'Topic sentence (first sentence)', 'Title', 'Random middle sentence'], correct: 1, difficulty: 'E', explanation: 'Topic sentence usually opens the paragraph.' },
    { q: 'A paragraph contains: 1) Cars are getting safer. 2) Modern cars have airbags. 3) The history of seat belts started in 1959. 4) Today\'s cars also include lane-departure warning. Which sentence is irrelevant to the main idea?', type: 'mcq', choices: ['1', '2', '3', '4'], correct: 2, difficulty: 'M', explanation: 'Sentence 3 detours to history; the rest are about modern car safety features.' },
    { q: 'Best transition: "I studied for hours. ___ I felt prepared for the test."', type: 'mcq', choices: ['However', 'Nevertheless', 'As a result', 'In contrast'], correct: 2, difficulty: 'E', explanation: 'Studying caused feeling prepared — cause-effect.' },
    { q: 'Best transition: "I studied for hours. ___ I forgot half of it during the test."', type: 'mcq', choices: ['Therefore', 'Likewise', 'However', 'Furthermore'], correct: 2, difficulty: 'M', explanation: 'Contrast — studied yet forgot.' },
    { q: 'Best order for describing how to make pasta:', type: 'mcq', choices: ['Order of importance', 'Spatial order', 'Chronological / sequence', 'General to specific'], correct: 2, difficulty: 'E', explanation: 'Recipes follow time order.' },
    { q: 'Which transition is correct? "I love rainy days. ___, my brother prefers sunshine."', type: 'mcq', choices: ['Furthermore', 'However', 'Therefore', 'Similarly'], correct: 1, difficulty: 'E', explanation: 'Two opposite preferences — contrast.' }
  ]
};
