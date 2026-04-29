import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 14,
  title: 'RLA 7 — Polishing Your Writing',
  subtitle: 'Cutting filler, choosing precise words, and untangling commonly confused word pairs.',
  blocks: [
    {
      id: 'why-polish',
      title: 'Why "Polishing" Is Tested',
      content: (
        <>
          <p>The GED RLA test includes lots of "best version of this sentence" questions where two of the four answers are technically grammatical but one is clearer, more concise, or uses a more accurate word. Knowing how to spot the better version is a teachable skill.</p>
          <p>This chapter covers three skills: <strong>tightening sentences</strong>, <strong>fixing organization</strong>, and <strong>picking the right word</strong> from commonly confused pairs.</p>
        </>
      )
    },
    {
      id: 'strengthen-sentences',
      title: 'Strengthen Sentences — Three Quick Wins',
      content: (
        <>
          <Table
            headers={['Issue', 'Before', 'After']}
            rows={[
              ['Wordy filler', '"Due to the fact that"', '"Because"'],
              ['Wordy filler', '"In order to"', '"To"'],
              ['Wordy filler', '"At this point in time"', '"Now"'],
              ['Wordy filler', '"The reason is because"', '"Because"'],
              ['Wordy filler', '"It is important to note that"', '(just delete it)'],
              ['Passive voice (when active is clearer)', '"The ball was thrown by Maria."', '"Maria threw the ball."'],
              ['Vague verbs', '"Things were done in the meeting."', '"Sara presented her proposal."'],
              ['Vague nouns', '"The thing on the table"', '"The notebook"']
            ]}
          />

          <Callout kind="info" title="Active vs passive voice">
            <p><strong>Active voice</strong>: subject does the action. "Maria threw the ball." Direct, vivid, usually shorter.</p>
            <p><strong>Passive voice</strong>: subject receives the action. "The ball was thrown by Maria." Indirect, often vague (the doer can be hidden: "The ball was thrown.").</p>
            <p>Active voice is usually better, but passive has its uses — when the doer is unknown ("The window was broken") or unimportant ("The patient was given antibiotics").</p>
          </Callout>

          <Callout kind="tip" title="If a sentence sounds 'fancy,' look for fluff">
            Long, formal-sounding phrases are often hiding emptiness. "Due to the fact that..." instead of "Because." "In the event that..." instead of "If." On the GED, the simpler phrasing is usually right.
          </Callout>
        </>
      )
    },
    {
      id: 'improve-organization',
      title: 'Improve Organization',
      content: (
        <>
          <p>The GED tests organization in two ways: rearranging sentences within a paragraph, and identifying where a paragraph break should go. After you draft something, scan for:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Out-of-order paragraphs</strong> — does the flow make logical sense?</li>
            <li><strong>Missing transitions</strong> between paragraphs.</li>
            <li><strong>Buried thesis</strong> — your main claim should be in the intro, not paragraph 3.</li>
            <li><strong>Conclusion that wanders</strong> — keep it tied to the thesis.</li>
            <li><strong>Sentences that don\'t belong</strong> — interesting but irrelevant.</li>
          </ul>

          <Callout kind="tip" title="The reverse outline test">
            After drafting an essay, write a one-sentence summary of each paragraph. Read those summaries in order. Does the argument build clearly from one to the next? If not, rearrange paragraphs. If a paragraph\'s summary doesn\'t fit, the paragraph itself probably doesn\'t belong.
          </Callout>

          <Callout kind="info" title="Sentence-rearrangement strategy">
            When the GED gives you 4 sentences and asks "What is the best order?", look for:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li>The sentence that introduces the topic (usually first).</li>
              <li>Sentences with "this" or "that" referring to a previous sentence — those come AFTER what they refer to.</li>
              <li>Sentences with conclusion words ("therefore," "in summary") — usually last.</li>
              <li>Sentences with sequence markers ("first," "next," "finally") — they tell you their position.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'word-choice',
      title: 'Word Choice — Diction & Precision',
      content: (
        <>
          <p>Choose the most specific, accurate word. The GED loves to give a vague word as one choice and a precise alternative as another.</p>
          <Table
            headers={['Vague', 'Specific options']}
            rows={[
              ['nice', 'kind, generous, attentive, considerate'],
              ['good', 'effective, reliable, persuasive, well-crafted'],
              ['bad', 'flawed, dangerous, ineffective, harmful'],
              ['big', 'enormous, substantial, significant, considerable'],
              ['small', 'minor, slight, insignificant, modest'],
              ['said', 'argued, claimed, insisted, replied, whispered, shouted'],
              ['went', 'walked, drove, hurried, strolled, fled'],
              ['thing', 'item, issue, concept, problem (specify!)'],
              ['stuff', '(usually replace with the actual category)']
            ]}
          />

          <Callout kind="warn" title="Words frequently confused — memorize these">
            These pairs trip up nearly everyone. The GED tests them constantly:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><Term>affect</Term> (verb, "to influence") vs <Term>effect</Term> (noun, "a result")</li>
              <li><Term>accept</Term> (to receive) vs <Term>except</Term> (other than, excluding)</li>
              <li><Term>then</Term> (next, time) vs <Term>than</Term> (comparison)</li>
              <li><Term>their</Term> (possessive) / <Term>there</Term> (location, "is/are") / <Term>they\'re</Term> ("they are")</li>
              <li><Term>your</Term> (possessive) / <Term>you\'re</Term> ("you are")</li>
              <li><Term>its</Term> (possessive) vs <Term>it\'s</Term> ("it is" or "it has")</li>
              <li><Term>fewer</Term> (countable: fewer apples) vs <Term>less</Term> (uncountable: less water)</li>
              <li><Term>between</Term> (two things) vs <Term>among</Term> (three or more)</li>
              <li><Term>amount</Term> (uncountable) vs <Term>number</Term> (countable)</li>
              <li><Term>further</Term> (figurative) vs <Term>farther</Term> (physical distance)</li>
              <li><Term>lay</Term> (place something) vs <Term>lie</Term> (recline)</li>
              <li><Term>principal</Term> (head of school; main) vs <Term>principle</Term> (rule, belief)</li>
              <li><Term>stationary</Term> (not moving) vs <Term>stationery</Term> (paper)</li>
              <li><Term>complement</Term> (completes) vs <Term>compliment</Term> (praise)</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="Quick replacement tests">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>its / it\'s</strong>: Try "it is." If the sentence still works, use "it\'s." Otherwise "its."</li>
              <li><strong>your / you\'re</strong>: Same — try "you are."</li>
              <li><strong>their / they\'re / there</strong>: "they\'re" → "they are." "there" → "in that place" or "is/are." Otherwise "their."</li>
              <li><strong>then / than</strong>: "than" is for comparisons (bigger than, older than). "then" is for time (and then we left).</li>
              <li><strong>fewer / less</strong>: count it. "Fewer apples" (you can count). "Less water" (you can\'t count individual water).</li>
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
      { name: 'Specific over vague', desc: 'Choose the most precise word available.' },
      { name: 'Cut filler', desc: 'Replace bloated phrases with single words: "due to the fact that" → "because".' }
    ],
    methods: [
      { name: 'Reverse outline', desc: 'After drafting, summarize each paragraph in one sentence and read those summaries.' },
      { name: 'Substitution test for confused words', desc: 'Try expanding contractions ("it is", "you are") to choose between its/it\'s, your/you\'re.' }
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
    { q: 'Choose the correct word: "How will the new law ___ small businesses?"', type: 'mcq', choices: ['affect', 'effect'], correct: 0, difficulty: 'M', explanation: '"Affect" = verb, to influence.' },
    { q: 'Choose the correct word: "She is older ___ her brother."', type: 'mcq', choices: ['then', 'than'], correct: 1, difficulty: 'E', explanation: '"Than" is for comparisons.' },
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
    ], correct: 2, difficulty: 'M', explanation: '"Fewer" for countable items (apples). "Less" for uncountable (water, time, money).' },
    { q: 'Choose: "The ___ effect of the new policy is unclear."', type: 'mcq', choices: ['principal', 'principle'], correct: 0, difficulty: 'M', explanation: '"Principal" = main, primary. "Principle" = rule.' },
    { q: 'Choose: "We need to find ___ keys."', type: 'mcq', choices: ['there', 'their', 'they\'re'], correct: 1, difficulty: 'E', explanation: '"Their" = possessive, belonging to them.' }
  ]
};
