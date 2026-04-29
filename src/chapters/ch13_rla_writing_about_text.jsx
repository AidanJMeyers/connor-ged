import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 13,
  title: 'RLA 6 — The Extended Response Essay',
  subtitle: 'The 45-minute essay on the GED. How to plan it, draft it, and finish on time.',
  blocks: [
    {
      id: 'about-er',
      title: 'What the Extended Response Actually Is',
      content: (
        <>
          <Callout kind="info" title="The format">
            <p>The Extended Response is a single essay you write during the GED RLA test. You\'ll have <strong>45 minutes</strong> after a 10-minute break.</p>
            <p>You\'ll be given <strong>two short articles</strong> arguing different sides of the same issue (around 350-500 words total). Your job: <strong>analyze which argument is better-supported by evidence and reasoning</strong> — and write an essay defending that judgment with quotes and references to the passages.</p>
          </Callout>

          <Callout kind="warn" title="What the GED is NOT asking">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>It is NOT asking your personal opinion on the topic.</li>
              <li>It is NOT asking you to summarize the passages.</li>
              <li>It is NOT asking you to bring in outside facts.</li>
              <li>It is NOT asking you to write fancy prose.</li>
            </ul>
            It IS asking: which side\'s ARGUMENT is stronger, and how do you know? Use evidence from the passages, and explain WHY that evidence makes the argument stronger.
          </Callout>

          <Callout kind="tip" title="How it\'s scored">
            <p>The Extended Response is scored on three traits, each 0-2 points (so 0-6 total, then doubled to 0-12):</p>
            <ol className="list-decimal ml-5 text-sm space-y-1 mt-1">
              <li><strong>Analysis of arguments and use of evidence</strong> — Did you analyze which argument is stronger and cite specific evidence?</li>
              <li><strong>Development of ideas and organizational structure</strong> — Is your essay clearly organized with thesis, body paragraphs, and conclusion?</li>
              <li><strong>Clarity and command of standard English conventions</strong> — Grammar, mechanics, sentence structure.</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'unpack-prompt',
      title: 'Unpack the Prompt',
      content: (
        <>
          <p>The first 10 minutes are not writing time. They\'re reading and planning time. Use them well.</p>
          <Callout kind="formula" title="What to read for">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Identify both passages\' main arguments.</strong> Underline a sentence from each that captures the claim.</li>
              <li><strong>Note specific evidence each side uses.</strong> Statistics? Expert quotes? Examples? Anecdotes?</li>
              <li><strong>Look for which side has STRONGER types of evidence.</strong> Peer-reviewed research beats anecdotes.</li>
              <li><strong>Look for fallacies or weak reasoning.</strong> Hasty generalizations, ad hominems, appeals to emotion?</li>
            </ol>
          </Callout>

          <Callout kind="warn" title="Common pitfall — writing about the topic instead of the arguments">
            If the passages are about whether cellphones in classrooms help or hurt learning, your essay is NOT about cellphones. It is about HOW the two authors argue. The topic is just the vehicle for testing your analysis. Stay focused on the argumentation.
          </Callout>
        </>
      )
    },
    {
      id: 'identify-arguments',
      title: 'Identify Each Passage\'s Argument & Evidence',
      content: (
        <>
          <p>For each passage, capture these elements on scratch paper:</p>
          <Table
            headers={['Element', 'How to find it']}
            rows={[
              ['Main claim / thesis', 'The sentence(s) telling you what the author wants you to believe.'],
              ['Evidence types', 'Statistics, expert quotes, studies, examples, anecdotes — note which kinds appear.'],
              ['Assumptions', 'Beliefs the argument depends on but doesn\'t state outright.'],
              ['Reasoning', 'How evidence connects to the claim. Logical or shaky?'],
              ['Counterargument handling', 'Does the author address opposing views, or ignore them?']
            ]}
          />

          <Callout kind="info" title="Quality checklist">
            <p>An argument is STRONGER when it:</p>
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li>Uses verifiable evidence (peer-reviewed studies, government statistics).</li>
              <li>Cites specific names, dates, numbers.</li>
              <li>Acknowledges and refutes counterarguments.</li>
              <li>Stays focused on the claim.</li>
              <li>Avoids fallacies.</li>
            </ul>
            <p>An argument is WEAKER when it:</p>
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li>Relies on emotional language or anecdotes alone.</li>
              <li>Uses vague evidence ("many people say").</li>
              <li>Ignores opposing viewpoints.</li>
              <li>Drifts off-topic.</li>
              <li>Contains fallacies (hasty generalization, ad hominem, etc.).</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'thesis',
      title: 'Develop a Thesis Statement',
      content: (
        <>
          <p>Your <Term>thesis</Term> is the one-sentence answer to "Which side is better-supported, and why?" It belongs at the END of your introduction paragraph and should preview your reasons.</p>
          <Callout kind="formula" title="Thesis template">
            "Although both passages address [topic], the author of [Passage X] presents a stronger argument because they [reason 1], [reason 2], and [reason 3]."
          </Callout>

          <Callout kind="tip" title="Examples">
            <p><strong>Weak:</strong> "Passage 1 is better."<br/>
            <em>Why it\'s weak: no reasons, no specifics. The reader has to take your word for it.</em></p>
            <p><strong>Strong:</strong> "Although both authors address school start times, Passage 1\'s argument is stronger because it cites peer-reviewed research, addresses opposing views fairly, and avoids emotional language."<br/>
            <em>Why it works: clear preference, three specific reasons, sets up body paragraphs.</em></p>
          </Callout>

          <Callout kind="warn" title="Don\'t hedge">
            Avoid wishy-washy theses like "Both passages have good points." Pick a side. The graders want to see you commit to a judgment and defend it. (You can still acknowledge counterpoints in your essay — but the THESIS takes a clear stand.)
          </Callout>
        </>
      )
    },
    {
      id: 'evidence',
      title: 'Collecting Supporting Evidence',
      content: (
        <>
          <p>Your essay must <strong>quote or paraphrase specific lines</strong> from the passages. General statements like "Passage 1 has good evidence" don\'t count. The graders want to see you naming the evidence and analyzing why it strengthens the argument.</p>
          <Callout kind="info" title="What strong evidence-handling looks like in your essay">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Quote a specific statistic and explain what it shows.</strong> "Passage 1 cites a 2019 study finding that 'students at schools with later start times improved test scores by 8%.\' This is data, not opinion."</li>
              <li><strong>Identify a fallacy in the opposing passage and name it.</strong> "Passage 2 argues that we shouldn\'t change start times because \'we\'ve always done it this way\' — an appeal to tradition rather than evidence."</li>
              <li><strong>Note the type of source.</strong> "Passage 1 cites a peer-reviewed study, while Passage 2 relies on anecdotes from a single principal."</li>
              <li><strong>Show the author considering counterarguments — or failing to.</strong> "Passage 1 acknowledges that later start times complicate after-school sports but explains how schools can adapt. Passage 2 ignores opposing views entirely."</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'plan-draft',
      title: 'The 5-Paragraph Plan',
      content: (
        <>
          <Table
            headers={['Paragraph', 'Contents', 'Length']}
            rows={[
              ['1. Introduction', 'Briefly summarize both passages. End with your thesis.', '3-5 sentences'],
              ['2. Body — Reason 1', 'First reason your chosen passage is stronger, with quoted evidence.', '4-6 sentences'],
              ['3. Body — Reason 2', 'Second reason, with evidence.', '4-6 sentences'],
              ['4. Body — Reason 3 OR Address weaker passage', 'Either a third reason for your choice OR analysis of the weaker passage\'s flaws.', '4-6 sentences'],
              ['5. Conclusion', 'Restate the thesis in fresh words; final reflection.', '2-4 sentences']
            ]}
          />
          <Callout kind="tip" title="The 45-minute time budget">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>~10 minutes</strong>: read both passages, mark evidence, plan structure</li>
              <li><strong>~30 minutes</strong>: write</li>
              <li><strong>~5 minutes</strong>: revise and proofread</li>
            </ul>
            If you skip the planning phase, you\'ll often write yourself into a corner partway through and run out of time. The 10 minutes upfront pays for itself.
          </Callout>
        </>
      )
    },
    {
      id: 'draft',
      title: 'Drafting — Tone, Voice & QEC',
      content: (
        <>
          <Callout kind="info" title="Tone for the GED essay">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Formal academic tone.</li>
              <li>NO "I think" or "in my opinion" — state the analysis directly.</li>
              <li>Avoid contractions ("don\'t" → "do not"; "isn\'t" → "is not").</li>
              <li>Use third person.</li>
              <li>Don\'t address the reader as "you."</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-4">QEC — the formula for using evidence well</p>
          <p>Don\'t just drop a quote and move on. Every quote should be wrapped in analysis. Use <strong>QEC: Quote → Explain → Connect</strong>.</p>

          <Callout kind="tip" title="QEC example">
            <p><strong>Quote:</strong> "Author 1 cites a study showing \'27% of students improved their grades after later school start times.\'"</p>
            <p><strong>Explain:</strong> "This is statistical evidence from peer-reviewed research — among the most credible types of support."</p>
            <p><strong>Connect:</strong> "By contrast, Author 2 relies entirely on anecdotes about one disgruntled parent, which provides much weaker support for a policy claim."</p>
          </Callout>

          <Callout kind="warn" title="Don\'t over-quote">
            Use 2-4 quotes total in your essay, not 10. The quotes are evidence; your analysis is what the graders want to see. A short, well-explained quote beats a long passage you copy verbatim.
          </Callout>
        </>
      )
    },
    {
      id: 'revise',
      title: 'Revise & Edit — Save 5 Minutes',
      content: (
        <>
          <p>Save 5 minutes at the end. Quickly check, in this priority order:</p>
          <Table
            headers={['Layer', 'Quick check']}
            rows={[
              ['Argument', 'Did you take a clear side and stick with it throughout?'],
              ['Evidence', 'Is every claim backed by a specific quote or paraphrase?'],
              ['Structure', 'Intro, 3 body paragraphs, conclusion?'],
              ['Transitions', 'Between paragraphs and within them?'],
              ['Sentences', 'Run-ons, fragments, comma splices?'],
              ['Grammar', 'Subject-verb agreement, verb tense, pronouns?'],
              ['Mechanics', 'Capitalization, commas, spelling?']
            ]}
          />

          <Callout kind="tip" title="Don\'t rewrite — fix">
            With only 5 minutes, you don\'t have time to rewrite paragraphs. Cross out small errors, insert words above the line. Focus on errors that change MEANING (a missing "not" reverses your argument) over errors that just look wrong.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Extended Response', def: 'The 45-minute essay on the GED RLA test.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Thesis', def: 'The one-sentence main argument of an essay.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Evidence', def: 'Specific facts, quotes, or examples that back a claim.' },
      { term: 'Counterargument', def: 'A point against your thesis, often acknowledged then refuted.' },
      { term: 'QEC', def: 'Quote → Explain → Connect. The formula for using evidence in an essay.' }
    ],
    laws: [
      { name: 'Argue evidence quality, not personal opinion', desc: 'The Extended Response asks which passage is better-supported, not which is "right."' },
      { name: 'QEC formula', desc: 'Every quote needs explanation and a connection to your thesis.' },
      { name: 'Five-paragraph structure', desc: 'Intro · 3 body paragraphs · conclusion.' },
      { name: 'Time budget', desc: '10 min plan · 30 min write · 5 min revise.' }
    ],
    methods: [
      { name: 'Plan before writing', desc: 'Spend the first 10 minutes reading and planning, not writing.' },
      { name: 'Formal tone', desc: 'No first person, no contractions, no slang, no "you".' }
    ]
  },
  questions: [
    { q: 'The GED Extended Response asks you to:', type: 'mcq', choices: [
      'Tell your personal opinion.',
      'Determine which passage is better-supported by evidence.',
      'Summarize both passages.',
      'Critique the writing style.'
    ], correct: 1, difficulty: 'E', explanation: 'You analyze evidence quality, not personal stance.' },
    { q: 'Which is the strongest thesis?', type: 'mcq', choices: [
      'Passage 1 is better than Passage 2.',
      'I think Passage 1 wins.',
      'Passage 1 presents the stronger argument because it relies on peer-reviewed studies, addresses counterarguments, and avoids fallacies.',
      'Both passages have good points.'
    ], correct: 2, difficulty: 'M', explanation: 'Specific reasons + clear preference + based on evidence.' },
    { q: 'How should you organize the essay?', type: 'mcq', choices: [
      'One long paragraph',
      'Five paragraphs: intro, three body, conclusion',
      'Two paragraphs',
      'Whatever feels right'
    ], correct: 1, difficulty: 'E', explanation: '5-paragraph essay is the GED standard.' },
    { q: 'In the Extended Response, "I think Passage 1 is more compelling" should be:', type: 'mcq', choices: [
      'Kept as written',
      'Changed to "Passage 1 is more compelling"',
      'Changed to a question',
      'Deleted entirely'
    ], correct: 1, difficulty: 'M', explanation: 'Avoid first person and "I think" — state the analysis directly.' },
    { q: 'QEC stands for:', type: 'mcq', choices: ['Question, Evidence, Conclusion', 'Quote, Explain, Connect', 'Quick, Easy, Clear', 'Quote, Examine, Confirm'], correct: 1, difficulty: 'M', explanation: 'Quote, Explain, Connect — the formula for using evidence.' },
    { q: 'How much of the 45 minutes should you spend revising?', type: 'mcq', choices: ['No time', '~5 minutes', '~20 minutes', 'The whole 45 minutes'], correct: 1, difficulty: 'E', explanation: 'About 5 minutes; spend most time drafting.' },
    { q: 'How much of the 45 minutes should you spend reading and planning?', type: 'mcq', choices: ['~10 minutes', 'Skip it', '~25 minutes', '5 minutes'], correct: 0, difficulty: 'E', explanation: 'About 10 minutes — saves you from writing yourself into a corner later.' }
  ]
};
