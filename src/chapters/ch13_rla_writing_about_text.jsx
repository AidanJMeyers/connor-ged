import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 13,
  title: 'RLA 6 — Writing About Text (Extended Response)',
  subtitle: 'The Extended Response essay: unpacking the prompt, identifying arguments, thesis, evidence, planning, drafting, revising.',
  blocks: [
    {
      id: 'unpack-prompt',
      title: 'Unpack the Writing Prompt',
      content: (
        <>
          <Callout kind="info" title="What the GED Extended Response actually asks">
            You'll read 1-2 short articles arguing different sides of an issue. Your job: <strong>analyze which argument is better-supported</strong> using evidence from the passages — NOT to give your personal opinion.
          </Callout>
          <p className="font-semibold mt-3">Reading the prompt</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li>Identify both passages' main arguments.</li>
            <li>Note specific facts, examples, statistics each side uses.</li>
            <li>Look for which side relies on stronger types of evidence.</li>
            <li>Look for fallacies or weak reasoning in either side.</li>
          </ol>
          <Callout kind="warn" title="Common pitfall">
            Don't argue which side is "right." Argue which side is better <strong>supported by evidence</strong>.
          </Callout>
        </>
      )
    },
    {
      id: 'identify-arguments',
      title: "Identifying Arguments & Assumptions",
      content: (
        <>
          <p>For each passage:</p>
          <Table
            headers={['Element', 'How to find it']}
            rows={[
              ['Main argument / claim', 'The sentence(s) stating what the author wants you to believe.'],
              ['Evidence', 'Statistics, expert quotes, studies, examples used to back the claim.'],
              ['Assumptions', 'Beliefs the argument depends on but doesn\'t state outright.'],
              ['Reasoning', 'How evidence is connected to the claim.'],
              ['Counterargument', 'Whether (and how well) the author addresses opposing views.']
            ]}
          />
        </>
      )
    },
    {
      id: 'thesis',
      title: 'Develop a Thesis Statement',
      content: (
        <>
          <p>Your <Term>thesis</Term> is the one-sentence answer to "Which side is better-supported, and why?"</p>
          <Callout kind="formula" title="Thesis template">
            "Although both passages address [topic], the author of [Passage X] presents a stronger argument because they [specific reason 1], [reason 2], and [reason 3]."
          </Callout>
          <Callout kind="tip" title="Examples">
            <strong>Weak:</strong> "Passage 1 is better."<br/>
            <strong>Strong:</strong> "Although both authors address school start times, Passage 1's argument is stronger because it cites peer-reviewed research, addresses opposing views, and avoids emotional language."
          </Callout>
        </>
      )
    },
    {
      id: 'evidence',
      title: 'Collecting Supporting Evidence',
      content: (
        <>
          <p>Your essay must <strong>quote or paraphrase specific lines</strong> from the passages. Generalizations like "Passage 1 has good evidence" don't count.</p>
          <Callout kind="info" title="What good evidence in your essay looks like">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Quote a specific statistic and explain why it strengthens the argument.</li>
              <li>Identify a concrete fallacy in the opposing passage and name it.</li>
              <li>Note the type of source (peer-reviewed study vs anecdote) and what that says about credibility.</li>
              <li>Show that the author considered counterarguments — or didn't.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'plan-draft',
      title: 'Plan Your Response (5-Paragraph Structure)',
      content: (
        <>
          <Table
            headers={['Paragraph', 'Contents', 'Length']}
            rows={[
              ['1. Introduction', 'Briefly summarize both passages, then state your thesis.', '3-5 sentences'],
              ['2. Body — Reason 1', 'First reason your chosen passage is stronger, with quoted evidence.', '4-6 sentences'],
              ['3. Body — Reason 2', 'Second reason, with evidence.', '4-6 sentences'],
              ['4. Body — Reason 3 / Address weaker argument', 'Either a third reason or analyze the weaker passage\'s flaws.', '4-6 sentences'],
              ['5. Conclusion', 'Restate the thesis in fresh words; final reflection.', '2-4 sentences']
            ]}
          />
          <Callout kind="tip" title="Time budget — 45 minutes total">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>~10 min: read passages, mark evidence, plan</li>
              <li>~30 min: write</li>
              <li>~5 min: revise & proofread</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'draft',
      title: 'Draft Your Response',
      content: (
        <>
          <Callout kind="info" title="Tone for the GED essay">
            Formal academic tone. No "I think" or "in my opinion." Avoid contractions ("don't" → "do not"). Use third person.
          </Callout>
          <p className="font-semibold mt-3">Linking evidence with analysis</p>
          <p>Don't just drop a quote. Use the <strong>QEC formula</strong>: <strong>Q</strong>uote → <strong>E</strong>xplain → <strong>C</strong>onnect.</p>
          <Callout kind="tip" title="Example">
            <strong>Q:</strong> Author 1 cites a study showing "27% of students improved their grades after later school start times."<br/>
            <strong>E:</strong> This is statistical evidence from peer-reviewed research — among the most credible types of support.<br/>
            <strong>C:</strong> By contrast, Author 2 relies on anecdotes, which weakens their position.
          </Callout>
        </>
      )
    },
    {
      id: 'revise',
      title: 'Revise & Edit Your Response',
      content: (
        <>
          <p>Save 5 minutes for revision. Look for:</p>
          <Table
            headers={['Layer', 'Check']}
            rows={[
              ['Argument', 'Did you take a clear side and stick with it?'],
              ['Evidence', 'Is every claim backed by a specific quote or paraphrase?'],
              ['Structure', 'Intro, 3 body paragraphs, conclusion?'],
              ['Transitions', 'Between paragraphs and within them?'],
              ['Sentences', 'Run-ons, fragments, comma splices?'],
              ['Grammar', 'Subject-verb agreement, verb tense, pronouns?'],
              ['Mechanics', 'Capitalization, commas, spelling?']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Extended Response', def: 'The 45-minute essay on the GED RLA test.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Thesis', def: 'The one-sentence main argument of an essay.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Evidence', def: 'Specific facts, quotes, or examples that back a claim.' },
      { term: 'Counterargument', def: 'A point against your thesis, often acknowledged then refuted.' }
    ],
    laws: [
      { name: 'Argue evidence, not opinion', desc: 'The Extended Response is graded on which passage is better-supported, not which is "right."' },
      { name: 'QEC', desc: 'Quote → Explain → Connect. Use this formula every time you cite evidence.' }
    ],
    methods: [
      { name: '5-paragraph structure', desc: 'Intro, 3 body paragraphs, conclusion.' },
      { name: '45-minute time budget', desc: '10 min plan, 30 min draft, 5 min revise.' },
      { name: 'Formal tone', desc: 'No first person, no contractions, no slang.' }
    ]
  },
  questions: [
    { q: 'The Extended Response asks you to:', type: 'mcq', choices: [
      'Tell your personal opinion.',
      'Determine which passage is better-supported by evidence.',
      'Summarize both passages.',
      'Critique the writing style.'
    ], correct: 1, difficulty: 'E', explanation: 'You analyze evidence quality, not personal stance.' },
    { q: 'Which is the stronger thesis?', type: 'mcq', choices: [
      'Passage 1 is better than Passage 2.',
      'I think Passage 1 wins.',
      'Passage 1 presents the stronger argument because it relies on peer-reviewed studies, addresses counterarguments, and avoids fallacies.',
      'Both passages have good points.'
    ], correct: 2, difficulty: 'M', explanation: 'Specific reasons + clear preference + based on evidence.' },
    { q: 'How should you organize the essay?', type: 'mcq', choices: [
      'One long paragraph',
      'Five paragraphs: intro, three body, conclusion',
      'Two paragraphs',
      'Whatever feels right at the time'
    ], correct: 1, difficulty: 'E', explanation: '5-paragraph essay is the GED standard.' },
    { q: 'In the Extended Response, "I think Passage 1 is more compelling" should be:', type: 'mcq', choices: [
      'Kept as written',
      'Changed to "Passage 1 is more compelling"',
      'Changed to a question',
      'Deleted entirely'
    ], correct: 1, difficulty: 'M', explanation: 'Avoid first person and "I think." State the analysis directly.' },
    { q: 'QEC stands for:', type: 'mcq', choices: ['Question, Evidence, Conclusion', 'Quote, Explain, Connect', 'Quick, Easy, Clear', 'Quote, Examine, Confirm'], correct: 1, difficulty: 'M', explanation: 'Quote, Explain, Connect — for using evidence.' },
    { q: 'How much time should you spend revising?', type: 'mcq', choices: ['No time', '~5 minutes', '~20 minutes', 'The whole 45 minutes'], correct: 1, difficulty: 'E', explanation: 'About 5 minutes; spend most time drafting.' }
  ]
};
