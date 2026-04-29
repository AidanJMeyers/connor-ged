import React from 'react';
import { Callout, Table, Pill, Term } from '../components/Visual.jsx';

export default {
  id: 8,
  title: 'RLA 1 — Interpreting Nonfiction & Informational Text',
  subtitle: 'Main ideas, summary, application, cause-effect, comparison, conclusions, word choice, tone, and structure.',
  blocks: [
    {
      id: 'main-ideas',
      title: 'Main Ideas & Supporting Details',
      content: (
        <>
          <p>The <Term>main idea</Term> is the central point of a passage. <Term>Supporting details</Term> are the facts, examples, statistics, or quotations that prove it.</p>
          <Callout kind="tip" title="Where to look first">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>First sentence</strong> often states the topic.</li>
              <li><strong>Topic sentence</strong> (often early in a paragraph) gives the paragraph's claim.</li>
              <li><strong>Last sentence</strong> often restates or concludes — useful for confirmation.</li>
              <li><strong>Title and headings</strong> hint at the main topic.</li>
            </ul>
          </Callout>
          <p className="mt-3">Test the candidate main idea with this rule: every supporting detail in the passage should "fit under" it. If a detail doesn't relate to your candidate idea, you've picked too narrow.</p>

          <Callout kind="info" title="Distractors to watch for">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Too narrow</strong>: only covers one paragraph or one detail.</li>
              <li><strong>Too broad</strong>: could describe many different articles.</li>
              <li><strong>Off-topic</strong>: mentions something the passage discusses but isn't the main argument.</li>
              <li><strong>Reverse meaning</strong>: says the opposite of the author's claim.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'restatement-summary',
      title: 'Restatement & Summary',
      content: (
        <>
          <p>A <Term>restatement</Term> says the same thing in different words — meaning is preserved exactly. A <Term>summary</Term> compresses the passage to its essentials.</p>
          <Table
            headers={['Restatement', 'Summary']}
            rows={[
              ['Same length, different wording', 'Shorter than original'],
              ['Preserves all key details', 'Keeps only the main idea + key supporting points'],
              ['Watches for synonyms', 'Drops examples, anecdotes, and minor details'],
              ['Test: "Does it mean exactly the same thing?"', 'Test: "Could a person who hasn\'t read the original get the gist?"']
            ]}
          />
          <Callout kind="warn" title="Avoid these mistakes">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Adding new ideas not in the passage.</li>
              <li>Copying a phrase verbatim and calling it a restatement.</li>
              <li>Summarizing only one paragraph when the passage has several.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'application',
      title: 'Application of Ideas',
      content: (
        <>
          <p>Application questions ask you to take a principle from the passage and apply it to a <strong>new situation</strong>. The right answer is the one most consistent with the author's reasoning.</p>
          <Callout kind="tip" title="Strategy">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>State the passage's principle in your own words.</li>
              <li>Test each answer: which scenario follows the same logic?</li>
              <li>Eliminate scenarios that violate the principle even if they sound plausible.</li>
            </ol>
          </Callout>
          <p className="mt-3 text-sm">Example: if a passage argues that "regular exercise improves mood," the application is most consistent with someone choosing to walk for stress relief — not with a passage about a new medication.</p>
        </>
      )
    },
    {
      id: 'cause-effect',
      title: 'Cause and Effect',
      content: (
        <>
          <p>Identify what the author says <strong>caused</strong> what — and beware of confusing correlation with causation.</p>
          <Callout kind="info" title="Signal words">
            <strong>Causes</strong>: because, since, due to, leads to, results in, brought about, gives rise to.<br/>
            <strong>Effects</strong>: therefore, thus, consequently, as a result, hence, so.
          </Callout>
          <p className="mt-3">A common GED trap: a passage describes two things happening together but does not claim one caused the other. Don't infer a causal link the author never made.</p>
        </>
      )
    },
    {
      id: 'compare-contrast',
      title: 'Compare & Contrast',
      content: (
        <>
          <p>Comparing focuses on <strong>similarities</strong>; contrasting focuses on <strong>differences</strong>. Many passages do both.</p>
          <Callout kind="info" title="Signal words">
            <strong>Compare</strong>: similarly, likewise, both, in the same way, also, like.<br/>
            <strong>Contrast</strong>: however, on the other hand, but, yet, while, whereas, although, in contrast, unlike.
          </Callout>
          <p className="mt-3">When asked "what do X and Y have in common," look for traits the author explicitly applies to both. When asked "how does X differ from Y," scan for contrast signals.</p>
        </>
      )
    },
    {
      id: 'conclusions',
      title: 'Conclusions & Generalizations',
      content: (
        <>
          <p>A <Term>conclusion</Term> is a logical inference based on the evidence. A <Term>generalization</Term> takes specific cases and extends them broadly. Both must be supported by the passage.</p>
          <Callout kind="warn" title="Test your conclusion">
            "Does the author actually <em>say</em> this — or does the passage <em>imply</em> this?" Both can be valid, but both require evidence in the text. If you can't point to specific lines, the conclusion is too speculative.
          </Callout>
          <p className="mt-3">A "valid" conclusion does not introduce new claims. The right answer often <strong>combines two pieces of stated information</strong> into one inference.</p>
        </>
      )
    },
    {
      id: 'word-choice',
      title: 'Word Choice & Tone',
      content: (
        <>
          <p><Term>Word choice</Term> (diction) refers to the specific words an author selects. It signals tone, audience, and purpose.</p>
          <Table
            headers={['Tone', 'Word-choice clues']}
            rows={[
              ['Formal', '"Hence", "indeed", "consequently"'],
              ['Informal/casual', 'Contractions, slang, "kind of", "you know"'],
              ['Optimistic', '"Promising", "encouraging", "hopeful"'],
              ['Critical', '"Flawed", "questionable", "fails to"'],
              ['Sarcastic', 'Saying the opposite of what is meant; exaggeration'],
              ['Objective', 'Neutral statistics, "according to data", no emotional words'],
              ['Subjective', '"I believe", "it seems clear", emotional language']
            ]}
          />
        </>
      )
    },
    {
      id: 'tone-pov',
      title: "Writer's Tone & Point of View",
      content: (
        <>
          <p><Term>Point of view</Term> is the author's stance toward the topic. <Term>Tone</Term> is the emotional flavor expressed in the writing.</p>
          <Callout kind="tip" title="Detecting POV">
            Ask: Is the author <strong>for</strong> or <strong>against</strong> the topic? <strong>Neutral</strong>? Look at modifiers — adjectives and adverbs reveal opinions even in seemingly factual writing. "A controversial new policy" implies criticism; "an innovative new policy" implies approval.
          </Callout>
        </>
      )
    },
    {
      id: 'text-structure',
      title: 'Text Structure',
      content: (
        <>
          <p>How a passage is <strong>organized</strong>. Recognizing structure helps you find information faster.</p>
          <Table
            headers={['Structure', 'Description', 'Signal words']}
            rows={[
              ['Sequence/chronological', 'Events in time order', 'first, next, then, finally, after'],
              ['Cause-and-effect', 'Why something happened', 'because, leads to, as a result'],
              ['Compare-contrast', 'Similarities and differences', 'similarly, however, on the other hand'],
              ['Problem-solution', 'Issue, then proposed fix', 'the issue is, one solution is'],
              ['Description', 'Traits, characteristics', 'for example, characteristic of, including'],
              ['Argument/persuasion', 'Claim with supporting evidence', 'must, should, the evidence shows']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Main idea', def: 'The central point or argument of a passage.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Supporting detail', def: 'Evidence (fact, example, quote) that backs up the main idea.' },
      { term: 'Inference', def: 'A logical conclusion drawn from textual evidence and reasoning.' },
      { term: 'Tone', def: 'The author\'s attitude toward the topic, expressed through word choice.' },
      { term: 'Diction', def: 'An author\'s word choice.' },
      { term: 'Point of view', def: 'The perspective from which a text is written.' }
    ],
    laws: [
      { name: 'Main-idea test', desc: 'Every supporting detail should "fit under" the main idea. If not, the candidate is too narrow.' },
      { name: 'Conclusion rule', desc: 'A valid conclusion must be supported directly by passage evidence — never by outside knowledge.' },
      { name: 'Correlation ≠ causation', desc: 'Two things happening together does not prove one caused the other.' }
    ],
    methods: [
      { name: 'Topic-sentence scan', desc: 'Read the first and last sentences of each paragraph to find the structure.' },
      { name: 'Paraphrase before answering', desc: 'Restate the question and the passage in your own words before reading the choices.' }
    ]
  },
  questions: [
    { q: 'A passage discusses how electric vehicle adoption reduces urban air pollution. The best statement of the main idea is:', type: 'mcq', choices: [
      'EVs cost more than gasoline cars.',
      'Electric vehicles improve urban air quality by reducing tailpipe emissions.',
      'Charging stations are difficult to find in rural areas.',
      'Battery technology is improving.'
    ], correct: 1, difficulty: 'E', explanation: 'B captures the central claim. The others mention details or unrelated points.' },
    { q: 'Which transition signals a contrast?', type: 'mcq', choices: ['Therefore', 'Likewise', 'However', 'Furthermore'], correct: 2, difficulty: 'E', explanation: '"However" introduces a contrast.' },
    { q: 'A summary should:', type: 'mcq', choices: ['Be the same length as the original', 'Add the writer\'s opinions', 'Capture the main idea and key points concisely', 'Quote the original verbatim'], correct: 2, difficulty: 'E', explanation: 'A summary is shorter and captures essentials, no opinions.' },
    { q: 'A study finds that towns with more libraries also have higher reading test scores. The strongest valid conclusion is:', type: 'mcq', choices: [
      'Libraries cause higher test scores.',
      'There is an association between library access and test scores.',
      'Towns should build more libraries to raise scores.',
      'Test scores cause libraries to be built.'
    ], correct: 1, difficulty: 'M', explanation: 'Correlation alone supports association, not causation.' },
    { q: 'A text uses "first," "then," and "finally" repeatedly. Its structure is:', type: 'mcq', choices: ['Cause-effect', 'Sequence', 'Compare-contrast', 'Problem-solution'], correct: 1, difficulty: 'E', explanation: 'These are sequence/chronological signal words.' },
    { q: 'An author writes: "The new policy is yet another well-meaning failure." The tone is:', type: 'mcq', choices: ['Neutral', 'Optimistic', 'Critical', 'Objective'], correct: 2, difficulty: 'M', explanation: '"Yet another failure" signals criticism, even with "well-meaning."' },
    { q: 'Which statement is a generalization rather than a specific fact?', type: 'mcq', choices: [
      'Maria scored 87% on the test.',
      'Most students do better when they study consistently.',
      'The exam had 50 questions.',
      'The class meets at 9:00 AM.'
    ], correct: 1, difficulty: 'E', explanation: '"Most students" extends a pattern across a group — that\'s a generalization.' },
    { q: 'An "application" question asks you to:', type: 'mcq', choices: ['Restate a passage', 'Apply a principle to a new scenario', 'List supporting details', 'Identify the topic'], correct: 1, difficulty: 'M', explanation: 'Application = extending the same logic to a new case.' }
  ]
};
