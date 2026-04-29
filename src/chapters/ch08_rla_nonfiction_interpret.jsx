import React from 'react';
import { Callout, Table, Pill, Term } from '../components/Visual.jsx';

export default {
  id: 8,
  title: 'RLA 1 — Interpreting Nonfiction & Informational Text',
  subtitle: 'Reading articles, essays, opinion pieces, and historical documents — finding the main idea, understanding the supporting details, and inferring what isn\'t directly stated.',
  blocks: [
    {
      id: 'about-rla',
      title: 'Before We Start — What the GED RLA Test Actually Looks Like',
      content: (
        <>
          <p>The <Term>Reasoning Through Language Arts</Term> (RLA) test is the longest section of the GED — about <strong>150 minutes</strong> with one short break, and around <strong>46 questions</strong> plus a 45-minute Extended Response (essay). It tests three things:</p>
          <ol className="list-decimal ml-6 text-sm space-y-1 mt-1">
            <li><strong>Reading comprehension</strong> — pulling meaning from passages of nonfiction (articles, history docs, workplace texts) and fiction (short stories, novel excerpts). About 75% of the passages are nonfiction.</li>
            <li><strong>Writing & language</strong> — fixing errors in sentences and paragraphs (grammar, mechanics, clarity).</li>
            <li><strong>Extended Response</strong> — a 45-minute essay analyzing two opposing arguments. Covered in chapter 13.</li>
          </ol>

          <Callout kind="info" title="Why these RLA chapters are organized this way">
            <p>Chapters 8-10 cover <strong>reading</strong>: nonfiction (interpretation), nonfiction (analysis & arguments), and fiction.</p>
            <p>Chapters 11-12 cover <strong>writing structure</strong>: building good sentences and connecting ideas into paragraphs.</p>
            <p>Chapter 13 covers the <strong>Extended Response</strong> essay specifically.</p>
            <p>Chapters 14-16 are <strong>polish, grammar, and mechanics</strong> — the surface-level rules that the GED also tests.</p>
          </Callout>

          <Callout kind="tip" title="The single most important RLA test-taking habit">
            <strong>Read the passage BEFORE you read the questions.</strong> Many test-takers try to skim for keywords and miss the bigger picture. Spend the time to read every passage once, fully and slowly, before you look at the questions. You\'ll answer them faster overall.
          </Callout>
        </>
      )
    },
    {
      id: 'main-ideas',
      title: 'Main Ideas & Supporting Details',
      content: (
        <>
          <p>Every nonfiction passage has a <Term>main idea</Term> — the central point the author wants you to take away. Around it sit <Term>supporting details</Term>: the facts, examples, statistics, expert quotes, and reasoning that prove the main idea. The main idea is the trunk of the tree; the details are the branches.</p>

          <Callout kind="formula" title="What a main idea is — and isn\'t">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>It\'s a complete <strong>SENTENCE</strong>, not just a topic. "Climate change" is a topic. "Climate change is causing measurable damage to coastal communities" is a main idea.</li>
              <li>It must be <strong>broad enough</strong> that every paragraph in the passage relates to it.</li>
              <li>It must be <strong>narrow enough</strong> to actually appear in this passage rather than describing 50 other articles too.</li>
              <li>It\'s usually <strong>argued or claimed</strong>, not just observed.</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="Where the main idea usually hides">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Title</strong> — often hints at the main idea, especially in articles.</li>
              <li><strong>First paragraph</strong>, especially the last sentence of it (a "thesis statement").</li>
              <li><strong>First sentence of body paragraphs</strong> — these are "topic sentences" supporting the main idea.</li>
              <li><strong>Last paragraph</strong>, where authors often restate the main point.</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-4">The "fit-under" test</p>
          <p>For any candidate main idea, ask: does <strong>every</strong> supporting detail in the passage fit under it? If the candidate is too narrow, some details won\'t fit. If it\'s too broad, every conceivable detail would fit (including ones not in the passage). The right answer is the most specific one that still covers everything.</p>

          <Callout kind="warn" title="Wrong-answer types to watch for">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Too narrow</strong>: covers only one paragraph or one detail.</li>
              <li><strong>Too broad</strong>: could describe many different articles, not specifically this one.</li>
              <li><strong>Off-topic</strong>: mentions something the passage discusses, but isn\'t the main argument.</li>
              <li><strong>Reverse meaning</strong>: says the OPPOSITE of what the author argues.</li>
              <li><strong>Half-right</strong>: matches part of the passage but contradicts another part.</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-4">Supporting details — what counts and what doesn\'t</p>
          <p>Strong support is specific. Weak support is general or emotional. The GED expects you to recognize the difference:</p>
          <Table
            headers={['Type of support', 'Example', 'Strength']}
            rows={[
              ['Statistic from a study', '"A 2021 NIH study found 40% improvement..."', 'Very strong'],
              ['Expert testimony', '"Dr. Chen, a 30-year cardiologist, observes..."', 'Strong (depends on credibility)'],
              ['Specific example or anecdote', '"In Houston in 2017, this happened..."', 'Moderate'],
              ['General observation', '"Many people believe..."', 'Weak'],
              ['Emotional appeal alone', '"Think of the children!"', 'Not actual evidence'],
              ['Repetition of the claim', '"The bill is bad because it\'s bad."', 'Circular — not support']
            ]}
          />
        </>
      )
    },
    {
      id: 'restatement-summary',
      title: 'Restatement & Summary — Two Different Skills',
      content: (
        <>
          <p>Both restating and summarizing involve putting an author\'s ideas in your own words, but they\'re different tasks:</p>
          <Table
            headers={['Restatement', 'Summary']}
            rows={[
              ['Same length, different words', 'Shorter than the original'],
              ['Preserves ALL key details', 'Keeps only main idea + key supporting points'],
              ['Tests your vocabulary (synonyms)', 'Tests your judgment (what\'s essential vs decorative)'],
              ['Test: "Does it mean exactly the same thing?"', 'Test: "Could a person who hasn\'t read the original get the gist?"']
            ]}
          />

          <Callout kind="warn" title="Pitfalls to avoid">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Adding new ideas</strong> not in the original. (A summary doesn\'t introduce arguments the author didn\'t make.)</li>
              <li><strong>Copying a phrase verbatim</strong> and calling it a restatement. The point of restatement is using DIFFERENT words.</li>
              <li><strong>Summarizing only one paragraph</strong> when the passage has several.</li>
              <li><strong>Changing the meaning</strong> by inserting your opinion or interpretation.</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="A summary template">
            "[Author/passage] argues that [main claim], using [type of support] like [brief example]. The author concludes [final point]." Two or three sentences should cover most short passages.
          </Callout>
        </>
      )
    },
    {
      id: 'application',
      title: 'Application of Ideas — Using a Principle in a New Situation',
      content: (
        <>
          <p>Application questions take the LOGIC from the passage and ask you to apply it somewhere else. The right answer is the new scenario most consistent with the author\'s reasoning. The wrong answers usually:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Apply the principle in the OPPOSITE direction.</li>
            <li>Look superficially similar but use different reasoning.</li>
            <li>Just repeat something already in the passage.</li>
            <li>Add unrelated information.</li>
          </ul>

          <Callout kind="formula" title="Application strategy">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>State the passage\'s principle</strong> in your own words. ("If X is true, then Y follows.")</li>
              <li><strong>For each answer choice</strong>, ask: does this scenario follow the SAME logic? Same direction?</li>
              <li><strong>Eliminate</strong> scenarios that violate the principle even if they sound plausible on their own.</li>
            </ol>
          </Callout>

          <p className="mt-3">Example: if a passage argues that "regular exercise improves mood," the application is most consistent with someone choosing to walk regularly when stressed — NOT with a passage about a new antidepressant medication, even though both relate to mood. The MECHANISM (exercise → mood) is what has to transfer, not the topic.</p>
        </>
      )
    },
    {
      id: 'cause-effect',
      title: 'Cause and Effect',
      content: (
        <>
          <p>One of the easiest ways the GED tests reading is by asking what caused what. Authors usually signal cause and effect with specific words. Watch for these:</p>
          <Callout kind="info" title="Signal words for cause-and-effect">
            <strong>Causes</strong> (looking back from an effect): because, since, due to, owing to, leads to, results in, brought about, gives rise to, triggered.<br/>
            <strong>Effects</strong> (looking forward from a cause): therefore, thus, consequently, as a result, hence, so, accordingly, that\'s why.
          </Callout>

          <Callout kind="warn" title="Correlation is not causation — a classic GED trap">
            <p>Two things happening together does NOT prove one caused the other. A passage that says "ice cream sales and shark attacks both rise in summer" does not say ice cream causes shark attacks. (Both are caused by warm weather → more swimmers + more ice cream sold.)</p>
            <p>The GED loves to put answer choices that overstate causation. If the passage only describes a CORRELATION, the right answer says they\'re "associated" or "linked" — not that one CAUSED the other.</p>
          </Callout>

          <p className="font-semibold mt-3">Cause-and-effect chains</p>
          <p>Some passages describe a chain: A causes B, which causes C, which causes D. On the GED, you might be asked the FIRST cause or the FINAL effect. Sketch the chain in shorthand on your scratch paper if it gets confusing:</p>
          <p className="font-mono text-xs bg-slate-50 p-2 rounded">drought → poor crops → food prices rise → low-income families struggle → calls for government aid</p>
        </>
      )
    },
    {
      id: 'compare-contrast',
      title: 'Compare & Contrast',
      content: (
        <>
          <p>Comparing focuses on <strong>similarities</strong>; contrasting focuses on <strong>differences</strong>. Most passages do both. The transitions tell you which mode the author is in at the moment.</p>
          <Callout kind="info" title="Signal words">
            <strong>Compare (similarities)</strong>: similarly, likewise, both, in the same way, also, like, just as, as with.<br/>
            <strong>Contrast (differences)</strong>: however, on the other hand, but, yet, while, whereas, although, in contrast, unlike, conversely, nevertheless.
          </Callout>

          <p className="mt-3">For passages comparing two things — say, two political candidates, two scientific theories, two historical events — make a quick T-chart in your head (or on scratch paper):</p>
          <Table
            headers={['Topic', 'Thing 1', 'Thing 2']}
            rows={[
              ['Origin', '...', '...'],
              ['Strength', '...', '...'],
              ['Weakness', '...', '...']
            ]}
          />
          <p className="mt-3">When the question asks "what do X and Y have in common," look for traits the author explicitly applies to both. When it asks "how does X differ from Y," scan for contrast signals.</p>
        </>
      )
    },
    {
      id: 'conclusions',
      title: 'Conclusions & Generalizations — Reading Between the Lines',
      content: (
        <>
          <p>A <Term>conclusion</Term> is a logical step BEYOND what the passage states directly — but it must still be supported by passage evidence. A <Term>generalization</Term> takes specific cases and extends them broadly. Both are common GED question types.</p>

          <Callout kind="warn" title="Test your conclusion before picking it">
            Ask yourself: "Can I point to specific lines in the passage that support this conclusion?" If yes, it\'s probably valid. If no — or if you have to bring in outside knowledge — the conclusion is not justified by THIS passage, even if it might be true in general.
          </Callout>

          <p className="mt-3">A "valid" conclusion typically <strong>combines two pieces of stated information</strong> into one inference. Example:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Stated in passage: "All employees at the company must complete safety training by July 1."</li>
            <li>Stated in passage: "Maria works at the company."</li>
            <li>Valid conclusion: "Maria must complete safety training by July 1."</li>
          </ul>

          <Callout kind="info" title="Generalizations — the right level of broad">
            <p>A good generalization is broader than the examples but not absurdly so. If a passage gives 4 examples of small businesses succeeding by using social media, a sound generalization is "social media can help small businesses grow." A WEAK generalization would be "ALL small businesses succeed if they use social media" — overstating from limited examples is a fallacy.</p>
            <p>Watch for absolute words in answer choices: <strong>all, every, none, never, always, must</strong>. These rarely match what a careful author claims.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'word-choice',
      title: 'Word Choice (Diction)',
      content: (
        <>
          <p><Term>Word choice</Term> — also called <Term>diction</Term> — is the specific vocabulary an author selects. Even when two writers report the same fact, their word choices reveal attitude, audience, and purpose.</p>
          <Table
            headers={['Tone the author wants', 'Word-choice clues']}
            rows={[
              ['Formal', '"Hence", "indeed", "consequently", "endeavor", "utilize"'],
              ['Informal/casual', 'Contractions ("don\'t"), slang, "kind of", "you know"'],
              ['Optimistic / supportive', '"Promising", "encouraging", "hopeful", "innovative"'],
              ['Critical / disapproving', '"Flawed", "questionable", "fails to", "controversial"'],
              ['Sarcastic', 'Saying the opposite of what is meant; exaggeration; ironic praise'],
              ['Objective / neutral', 'Statistics, "according to data", no emotional words'],
              ['Subjective / opinionated', '"I believe", "it seems clear", emotional language'],
              ['Loaded / persuasive', '"Patriotic", "extremist", "freedom-loving", "regime"']
            ]}
          />

          <Callout kind="tip" title="Two facts, two diction choices">
            "The bill restricts gun sales" vs "The bill curbs gun sales" vs "The bill cracks down on gun sales." All three describe the same legal change, but the verbs (restricts/curbs/cracks down) reveal the author\'s view. Whenever you see a verb where a neutral one could have been used, look for the slant.
          </Callout>
        </>
      )
    },
    {
      id: 'tone-pov',
      title: "Writer's Tone & Point of View",
      content: (
        <>
          <p><Term>Point of view</Term> is the author\'s STANCE on the topic — for, against, neutral, ambivalent. <Term>Tone</Term> is the EMOTIONAL FLAVOR conveyed by the writing — formal, casual, hopeful, sarcastic, alarmed, etc. They\'re related but distinct.</p>

          <Callout kind="tip" title="Detecting POV">
            Ask: Is the author <strong>for</strong>, <strong>against</strong>, or <strong>neutral</strong> about the topic? Look at:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li>Adjectives and adverbs (revealing approval or disapproval).</li>
              <li>What examples the author chooses (a critic of a program will pick failure stories).</li>
              <li>Whether opposing views are fairly summarized or strawmanned.</li>
              <li>Whether the conclusion endorses or rejects something.</li>
            </ul>
          </Callout>

          <p className="mt-3">"A controversial new policy" implies skepticism. "An innovative new policy" implies approval. The bare facts can be the same; the framing reveals position.</p>
        </>
      )
    },
    {
      id: 'text-structure',
      title: 'Text Structure — How a Passage is Built',
      content: (
        <>
          <p>How a passage is <strong>organized</strong>. Recognizing the structure helps you predict what comes next and find specific information faster — useful when answering questions under time pressure.</p>
          <Table
            headers={['Structure', 'How to recognize it', 'Common signal words']}
            rows={[
              ['Sequence / chronological', 'Events in time order', 'first, next, then, finally, after, before, in 1865'],
              ['Cause-and-effect', 'Explains why something happened', 'because, leads to, as a result, due to'],
              ['Compare-contrast', 'Looks at similarities and differences', 'similarly, however, on the other hand, like'],
              ['Problem-solution', 'States an issue, proposes a fix', 'the issue is, one solution, the answer is'],
              ['Description / spatial', 'Lists traits, characteristics, or layout', 'for example, characteristic of, including'],
              ['Argument / persuasion', 'Makes a claim with evidence', 'must, should, the evidence shows, therefore'],
              ['Question-answer', 'Poses a question, then explains', 'why?, how?, the reason is']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Main idea', def: 'The central point or argument of a passage. A complete sentence, not a topic.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Supporting detail', def: 'Evidence (fact, example, quote) that backs up the main idea.' },
      { term: 'Inference', def: 'A logical conclusion drawn from textual evidence and reasoning.' },
      { term: 'Tone', def: 'The author\'s emotional flavor expressed through word choice.' },
      { term: 'Diction', def: 'An author\'s word choice.' },
      { term: 'Point of view (POV)', def: 'The stance from which a text is written: for, against, neutral.' },
      { term: 'Generalization', def: 'A broad conclusion drawn from specific examples.' }
    ],
    laws: [
      { name: 'Main-idea fit-under test', desc: 'Every supporting detail should fit under the main idea. If not, the candidate is wrong.' },
      { name: 'Conclusion rule', desc: 'A valid conclusion must be supported by passage evidence — not outside knowledge.' },
      { name: 'Correlation ≠ causation', desc: 'Two things happening together does not prove one caused the other.' },
      { name: 'Watch for absolutes', desc: '"All", "every", "never" rarely match what a careful author claims.' }
    ],
    methods: [
      { name: 'Topic-sentence scan', desc: 'Read the first and last sentences of each paragraph to find the structure.' },
      { name: 'Paraphrase before answering', desc: 'Restate the question and the passage in your own words before reading the choices.' },
      { name: 'Read the passage BEFORE the questions', desc: 'Understanding the whole picture first makes answering faster.' }
    ]
  },
  questions: [
    { q: 'A passage discusses how electric vehicle adoption reduces urban air pollution. The best statement of the main idea is:', type: 'mcq', choices: [
      'EVs cost more than gasoline cars.',
      'Electric vehicles improve urban air quality by reducing tailpipe emissions.',
      'Charging stations are difficult to find in rural areas.',
      'Battery technology is improving.'
    ], correct: 1, difficulty: 'E', explanation: 'B captures the central claim. The others are details or off-topic.' },
    { q: 'Which transition signals a contrast?', type: 'mcq', choices: ['Therefore', 'Likewise', 'However', 'Furthermore'], correct: 2, difficulty: 'E', explanation: '"However" introduces contrast.' },
    { q: 'A summary should:', type: 'mcq', choices: ['Be the same length as the original', 'Add the writer\'s opinions', 'Capture the main idea and key points concisely', 'Quote the original verbatim'], correct: 2, difficulty: 'E', explanation: 'Shorter, captures essentials, no opinions.' },
    { q: 'A study finds that towns with more libraries also have higher reading test scores. The strongest valid conclusion is:', type: 'mcq', choices: [
      'Libraries cause higher test scores.',
      'There is an association between library access and test scores.',
      'Towns should build more libraries to raise scores.',
      'Test scores cause libraries to be built.'
    ], correct: 1, difficulty: 'M', explanation: 'Correlation supports association, not causation. Other options either overstate or invert.' },
    { q: 'A text uses "first," "then," and "finally" repeatedly. Its structure is:', type: 'mcq', choices: ['Cause-effect', 'Sequence', 'Compare-contrast', 'Problem-solution'], correct: 1, difficulty: 'E', explanation: 'These signal time order.' },
    { q: 'An author writes: "The new policy is yet another well-meaning failure." The tone is:', type: 'mcq', choices: ['Neutral', 'Optimistic', 'Critical', 'Objective'], correct: 2, difficulty: 'M', explanation: '"Yet another failure" is criticism even if "well-meaning" softens it.' },
    { q: 'Which is a generalization rather than a specific fact?', type: 'mcq', choices: [
      'Maria scored 87% on the test.',
      'Most students do better when they study consistently.',
      'The exam had 50 questions.',
      'The class meets at 9:00 AM.'
    ], correct: 1, difficulty: 'E', explanation: '"Most students" extends a pattern across a group.' },
    { q: 'An "application" question asks you to:', type: 'mcq', choices: ['Restate a passage', 'Apply a principle to a new scenario', 'List supporting details', 'Identify the topic'], correct: 1, difficulty: 'M', explanation: 'Application = extending the same logic to a new case.' },
    { q: 'Which is the strongest type of evidence?', type: 'mcq', choices: ['One personal story', 'Repetition of the claim', 'A peer-reviewed study with a large sample', 'An emotional appeal'], correct: 2, difficulty: 'E', explanation: 'Peer-reviewed research is the most reliable category.' }
  ]
};
