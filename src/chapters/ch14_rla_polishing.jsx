import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 14,
  title: 'RLA 7 — Polishing Your Writing',
  subtitle: 'Strengthening sentences, improving organization, choosing precise words.',
  blocks: [
    {
      id: 'strengthen-sentences',
      title: 'Strengthen Sentences',
      content: (
        <>
          <p>Three quick wins:</p>
          <Table
            headers={['Issue', 'Before', 'After']}
            rows={[
              ['Wordiness', '"Due to the fact that"', '"Because"'],
              ['Passive voice (when active is clearer)', '"The ball was thrown by Maria."', '"Maria threw the ball."'],
              ['Vague verbs', '"Things were done in the meeting."', '"Sara presented her proposal."']
            ]}
          />
          <Callout kind="tip" title="Cut filler phrases">
            "In order to" → "To". "At this point in time" → "Now". "The reason is because" → "Because". "It is important to note that" → just delete it.
          </Callout>
        </>
      )
    },
    {
      id: 'improve-organization',
      title: 'Improve Organization',
      content: (
        <>
          <p>Once you've drafted, scan for:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Out-of-order paragraphs</strong> — does the flow make sense?</li>
            <li><strong>Missing transitions</strong> between paragraphs.</li>
            <li><strong>Buried thesis</strong> — your main claim should be in the intro, not the third paragraph.</li>
            <li><strong>Conclusion that wanders</strong> — keep it tied to the thesis.</li>
          </ul>
          <Callout kind="tip" title="Reverse outline test">
            After drafting, write a one-sentence summary of each paragraph. Read those sentences in order. Does the argument build clearly? If not, reorder.
          </Callout>
        </>
      )
    },
    {
      id: 'word-choice',
      title: 'Word Choice — Diction & Precision',
      content: (
        <>
          <p>Choose the most specific, accurate word.</p>
          <Table
            headers={['Vague', 'Specific']}
            rows={[
              ['nice', 'kind, generous, attentive'],
              ['good', 'effective, reliable, persuasive'],
              ['bad', 'flawed, dangerous, ineffective'],
              ['big', 'enormous, substantial, significant'],
              ['said', 'argued, claimed, insisted, replied']
            ]}
          />
          <Callout kind="warn" title="Words frequently confused">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><Term>affect</Term> (verb, "to influence") vs <Term>effect</Term> (noun, "a result")</li>
              <li><Term>accept</Term> (to receive) vs <Term>except</Term> (other than)</li>
              <li><Term>then</Term> (next, time) vs <Term>than</Term> (comparison)</li>
              <li><Term>their</Term> / <Term>there</Term> / <Term>they're</Term></li>
              <li><Term>your</Term> / <Term>you're</Term></li>
              <li><Term>its</Term> (possessive) vs <Term>it's</Term> ("it is")</li>
              <li><Term>fewer</Term> (countable) vs <Term>less</Term> (uncountable)</li>
            </ul>
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Diction', def: 'Word choice.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Wordiness', def: 'Using more words than needed.' },
      { term: 'Passive voice', def: 'Subject receives the action ("The cake was eaten").' },
      { term: 'Active voice', def: 'Subject does the action ("Sam ate the cake").' }
    ],
    laws: [
      { name: 'Active voice default', desc: 'Use active voice unless the doer is unknown or unimportant.' },
      { name: 'Specific over vague', desc: 'Choose the most precise word available.' }
    ],
    methods: [
      { name: 'Reverse outline', desc: 'After drafting, summarize each paragraph in one sentence and read those summaries.' },
      { name: 'Cut filler', desc: 'Look for "in order to", "due to the fact that", "at this point in time" — replace or delete.' }
    ]
  },
  questions: [
    { q: 'Which is the active-voice version?', type: 'mcq', choices: [
      'The report was written by Connor.',
      'Connor wrote the report.',
      'The report has been written.',
      'It was written that Connor wrote a report.'
    ], correct: 1, difficulty: 'E', explanation: 'Active = subject does the action.' },
    { q: 'Replace "due to the fact that" with:', type: 'mcq', choices: ['However', 'Because', 'Therefore', 'Although'], correct: 1, difficulty: 'E', explanation: '"Because" expresses cause cleanly.' },
    { q: 'Choose the correct word: "How will the new law ___ small businesses?"', type: 'mcq', choices: ['affect', 'effect'], correct: 0, difficulty: 'M', explanation: '"Affect" = to influence (verb).' },
    { q: 'Choose the correct word: "She is older ___ her brother."', type: 'mcq', choices: ['then', 'than'], correct: 1, difficulty: 'E', explanation: '"Than" is for comparisons; "then" is for time/sequence.' },
    { q: 'Which is the more precise sentence?', type: 'mcq', choices: [
      'Several things happened during the event.',
      'Three guest speakers presented their research at the conference.',
      'Stuff was discussed.',
      'A bunch of presenters did stuff.'
    ], correct: 1, difficulty: 'M', explanation: 'Specific subject, action, place — concrete.' },
    { q: 'Which uses "fewer" correctly?', type: 'mcq', choices: [
      'I have fewer money than yesterday.',
      'There is fewer water in the bottle.',
      'I have fewer apples than oranges.',
      'She has fewer time to study.'
    ], correct: 2, difficulty: 'M', explanation: '"Fewer" for countable items (apples). "Less" for uncountable (water, time, money).' }
  ]
};
