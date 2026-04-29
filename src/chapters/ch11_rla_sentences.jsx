import React from 'react';
import { Callout, Table, Term, M } from '../components/Visual.jsx';

export default {
  id: 11,
  title: 'RLA 4 — Writing Effective Sentences',
  subtitle: 'The four sentence types, run-ons and comma splices, modifiers, parallel structure — the foundations of clear writing.',
  blocks: [
    {
      id: 'why-sentences',
      title: 'Why Sentence Structure Matters on the GED',
      content: (
        <>
          <p>About 25% of the GED RLA test is "writing & language" — fixing errors in sentences and short paragraphs. The questions look a lot like editing tasks: "Which choice is the BEST way to write the underlined sentence?" or "Which sentence should be removed?"</p>
          <p>This chapter and the next four cover everything tested in those questions. The big skills are: building complete sentences, joining ideas correctly, choosing the right word, and using punctuation predictably. None of it requires fancy grammar terminology — but it does require knowing the patterns.</p>

          <Callout kind="info" title="Read the WHOLE sentence before answering">
            Every "best version of this sentence" question includes the original as one of the choices. Sometimes the original is right and the others introduce new errors. Read every option carefully — don\'t assume the original is wrong.
          </Callout>
        </>
      )
    },
    {
      id: 'simple-sentences',
      title: 'Simple Sentences & Sentence Fragments',
      content: (
        <>
          <p>A <Term>simple sentence</Term> = one independent clause: a subject + a verb + a complete thought. That\'s the bare minimum a sentence needs to be a sentence.</p>
          <Callout kind="info" title="Examples of simple sentences">
            "The cat slept." (Subject: cat. Verb: slept. Complete thought.)<br/>
            "Maria and Carlos drove to school." (Compound subject — still ONE clause.)<br/>
            "Connor studied and reviewed." (Compound verb — still one clause.)<br/>
            "There was a long meeting on Tuesday." (Subject: meeting. Verb: was. Complete thought.)
          </Callout>

          <p className="font-semibold mt-4">Sentence fragments — when a "sentence" isn\'t really one</p>
          <p>A <Term>fragment</Term> is missing a subject, a verb, or a complete thought. Fragments often look like sentences (capitalized, with a period at the end) but they\'re incomplete. The GED tests your ability to spot and fix them.</p>

          <Callout kind="warn" title="Common fragment patterns">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Missing a subject:</strong> "Walked to the store." (Who walked?)</li>
              <li><strong>Missing a verb:</strong> "The girl with the long hair." (What about her?)</li>
              <li><strong>Subordinate clause alone:</strong> "Because he was late." (Because he was late, what happened?)</li>
              <li><strong>"-ing" phrase alone:</strong> "Running through the park." (No subject; no main verb.)</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="Fragment fixes">
            Add what\'s missing or attach to a complete sentence:<br/>
            "Walked to the store." → "Carlos walked to the store."<br/>
            "Because he was late." → "Because he was late, he missed the bus."<br/>
            "Running through the park." → "Carlos was running through the park."
          </Callout>
        </>
      )
    },
    {
      id: 'compound-complex',
      title: 'Compound & Complex Sentences',
      content: (
        <>
          <p>Real writing doesn\'t use only simple sentences — it combines clauses to show relationships between ideas. The four sentence types:</p>
          <Table
            headers={['Type', 'Description', 'Example']}
            rows={[
              ['Simple', 'One independent clause', 'She studied.'],
              ['Compound', 'Two independent clauses joined by FANBOYS or a semicolon', 'She studied, and she passed.'],
              ['Complex', 'One independent + one or more dependent clauses', 'Because she studied, she passed.'],
              ['Compound-complex', 'Two independent + one or more dependent', 'She studied, and she passed because she practiced daily.']
            ]}
          />

          <Callout kind="formula" title="FANBOYS — the seven coordinating conjunctions">
            <strong>F</strong>or, <strong>A</strong>nd, <strong>N</strong>or, <strong>B</strong>ut, <strong>O</strong>r, <strong>Y</strong>et, <strong>S</strong>o.<br/>
            To join two independent clauses, use a <strong>comma + FANBOYS</strong>. (No comma if you\'re joining just two verbs or two nouns.)
          </Callout>

          <Callout kind="info" title="Common subordinating conjunctions">
            These start dependent clauses (which can\'t stand alone): because, although, while, when, since, before, after, if, unless, until, as, even though, whenever, whereas. A clause starting with one of these MUST be attached to an independent clause.
          </Callout>

          <Callout kind="tip" title="Independent vs dependent clause — the test">
            Read the clause aloud, alone. Does it sound like a complete thought? If yes, it\'s independent. If your brain is still waiting for "what happens next?", it\'s dependent.<br/>
            "She passed." (Complete. Independent.)<br/>
            "Because she studied." (Incomplete — what happened? Dependent.)
          </Callout>
        </>
      )
    },
    {
      id: 'runons-splices',
      title: 'Run-Ons & Comma Splices — and 5 Ways to Fix Them',
      content: (
        <>
          <p>Two of the most common GED writing errors:</p>
          <Callout kind="warn" title="Run-on sentence">
            Two independent clauses joined with NO punctuation. <br/>
            <strong>Wrong:</strong> "She studied she passed."
          </Callout>
          <Callout kind="warn" title="Comma splice">
            Two independent clauses joined with ONLY a comma — no FANBOYS. <br/>
            <strong>Wrong:</strong> "She studied, she passed."
          </Callout>

          <p className="font-semibold mt-4">5 fixes — pick whichever fits best</p>
          <ol className="list-decimal ml-6 text-sm space-y-2">
            <li><strong>Period</strong>: split into two sentences. "She studied. She passed."</li>
            <li><strong>Semicolon</strong>: when the two ideas are closely related and you want to show the connection. "She studied; she passed."</li>
            <li><strong>Comma + FANBOYS</strong>: if there\'s a clear logical relationship (and, but, so, etc.). "She studied, and she passed."</li>
            <li><strong>Subordinator</strong>: turn one clause into a dependent clause to show cause/contrast/etc. "Because she studied, she passed."</li>
            <li><strong>Semicolon + conjunctive adverb + comma</strong>: for a more formal cause-and-effect feel. "She studied; therefore, she passed."</li>
          </ol>

          <Callout kind="info" title="Conjunctive adverbs (after a semicolon)">
            However, therefore, moreover, nevertheless, consequently, indeed, furthermore, otherwise. Always preceded by a semicolon and followed by a comma.
          </Callout>
        </>
      )
    },
    {
      id: 'subordination',
      title: 'Subordinating Ideas — Tightening Choppy Writing',
      content: (
        <>
          <p><Term>Subordination</Term> is the technique of combining sentences so the LESS important idea becomes a dependent clause. This makes writing tighter, more sophisticated, and easier to follow.</p>
          <Callout kind="info" title="Before / After">
            <strong>Choppy:</strong> "Jaden was tired. He finished the report. It was past midnight."<br/>
            <strong>Subordinated:</strong> "Although Jaden was tired, he finished the report past midnight."<br/>
            <em>Notice:</em> the new sentence shows that "being tired" is contrast, not equally important to "finished the report." The subordinator "although" carries that meaning.
          </Callout>

          <Callout kind="tip" title="Match the subordinator to the relationship">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Cause/reason</strong>: because, since</li>
              <li><strong>Contrast</strong>: although, even though, while, whereas</li>
              <li><strong>Time</strong>: when, before, after, while, since, until</li>
              <li><strong>Condition</strong>: if, unless</li>
              <li><strong>Purpose</strong>: so that, in order that</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'modifiers',
      title: 'Modifying Phrases — Avoiding Misplaced & Dangling Modifiers',
      content: (
        <>
          <p>A <Term>modifier</Term> is a word, phrase, or clause that describes another word in the sentence. The rule is simple: <strong>place the modifier as close as possible to the word it modifies</strong>. When this rule is broken, the sentence becomes confusing or accidentally funny.</p>

          <Callout kind="warn" title="Misplaced modifier">
            "I almost ate the entire pizza." → You ALMOST ate it (you didn\'t).<br/>
            "I ate almost the entire pizza." → You ate MOST of it (clearer).<br/>
            <em>The position of "almost" changes the whole meaning.</em>
          </Callout>

          <Callout kind="warn" title="Dangling modifier">
            <strong>Wrong:</strong> "Walking through the park, the trees were beautiful." (The trees aren\'t walking!)<br/>
            <strong>Right:</strong> "Walking through the park, I noticed beautiful trees." (Now "walking" describes "I.")<br/>
            <em>An opening modifying phrase MUST describe the subject of the main clause that follows.</em>
          </Callout>

          <p className="font-semibold mt-4 text-sm">More dangling modifier examples</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Wrong:</strong> "After studying for hours, the test was easy." (The test didn\'t study.)</li>
            <li><strong>Right:</strong> "After studying for hours, I found the test easy."</li>
            <li><strong>Wrong:</strong> "While driving home, the radio played my favorite song."</li>
            <li><strong>Right:</strong> "While driving home, I heard my favorite song on the radio."</li>
          </ul>
        </>
      )
    },
    {
      id: 'parallel-structure',
      title: 'Parallel Structure',
      content: (
        <>
          <p><Term>Parallel structure</Term> means: items in a list, comparison, or series should share the same grammatical form. Lists feel "off" when one item breaks the pattern.</p>
          <Callout kind="warn" title="Not parallel">
            "She likes hiking, biking, and to swim."<br/>
            <em>("Hiking" and "biking" are gerunds (-ing nouns), but "to swim" is an infinitive.)</em>
          </Callout>
          <Callout kind="tip" title="Parallel — two ways to fix it">
            "She likes hiking, biking, and swimming." (all gerunds) ✓<br/>
            "She likes to hike, to bike, and to swim." (all infinitives) ✓
          </Callout>

          <Callout kind="info" title="Watch with paired conjunctions">
            <p>The phrases <strong>both ___ and ___</strong>, <strong>not only ___ but also ___</strong>, <strong>either ___ or ___</strong>, <strong>neither ___ nor ___</strong> require the two slots to be parallel.</p>
            <p><strong>Wrong:</strong> "He is both a student and works full-time." (Slot 1 is a noun; slot 2 is a verb phrase.)</p>
            <p><strong>Right:</strong> "He is both a student and a full-time worker." (Both nouns.)</p>
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Independent clause', def: 'A clause that can stand alone as a sentence (subject + verb + complete thought).' },
      { term: 'Dependent (subordinate) clause', def: 'Cannot stand alone; begins with a subordinator like because, although.' },
      { term: 'Fragment', def: 'An incomplete sentence — missing a subject, verb, or complete thought.' },
      { term: 'Run-on', def: 'Two independent clauses joined with no punctuation.' },
      { term: 'Comma splice', def: 'Two independent clauses joined with only a comma.' },
      { term: 'Modifier', def: 'A word/phrase that describes another part of the sentence.' },
      { term: 'Coordinating conjunction', def: 'FANBOYS: for, and, nor, but, or, yet, so. Joins independent clauses.' },
      { term: 'Subordinating conjunction', def: 'Begins a dependent clause: because, although, while, when, etc.' }
    ],
    laws: [
      { name: 'FANBOYS rule', desc: 'Use comma + FANBOYS to join two independent clauses.' },
      { name: 'Modifier placement', desc: 'Modifiers go right next to what they describe.' },
      { name: 'Parallelism', desc: 'Items in a list or comparison must match grammatical form.' },
      { name: 'Five run-on fixes', desc: 'Period · semicolon · comma+FANBOYS · subordinator · semicolon+conjunctive adverb+comma.' }
    ],
    methods: [
      { name: 'Read aloud', desc: 'Modifier and parallelism mistakes often sound off when read out loud.' },
      { name: 'Test each clause separately', desc: 'Read each clause alone — if it doesn\'t make sense as a complete sentence, it\'s dependent.' }
    ]
  },
  questions: [
    { q: 'Which is a comma splice?', type: 'mcq', choices: [
      'It rained, so we stayed inside.',
      'It rained, we stayed inside.',
      'It rained; we stayed inside.',
      'It rained. We stayed inside.'
    ], correct: 1, difficulty: 'E', explanation: 'Two independent clauses joined with only a comma = comma splice.' },
    { q: 'Choose the parallel sentence:', type: 'mcq', choices: [
      'She enjoys reading, jogging, and to bake.',
      'She enjoys to read, to jog, and baking.',
      'She enjoys reading, jogging, and baking.',
      'She enjoys reading, she likes jogging, and baking.'
    ], correct: 2, difficulty: 'M', explanation: 'All three items end in -ing → parallel.' },
    { q: 'Identify the dangling modifier:', type: 'mcq', choices: [
      'Running fast, Maria caught the bus.',
      'Running fast, the bus was caught by Maria.',
      'Maria, running fast, caught the bus.',
      'Maria caught the bus while running fast.'
    ], correct: 1, difficulty: 'M', explanation: '"Running fast" should describe Maria. With "the bus" as subject, "the bus" is running.' },
    { q: 'Which conjunction begins a dependent clause?', type: 'mcq', choices: ['And', 'But', 'Because', 'Or'], correct: 2, difficulty: 'E', explanation: '"Because" is a subordinator. The others are FANBOYS.' },
    { q: 'Best correction: "Maria studied she got an A."', type: 'mcq', choices: [
      'Maria studied, she got an A.',
      'Maria studied got an A.',
      'Maria studied; she got an A.',
      'Maria studied. and she got an A.'
    ], correct: 2, difficulty: 'M', explanation: 'Two independent clauses → semicolon (or period, or comma + FANBOYS).' },
    { q: 'Identify the sentence fragment:', type: 'mcq', choices: [
      'After the long meeting.',
      'The meeting ended.',
      'The meeting, which was long, ended.',
      'After the long meeting, we left.'
    ], correct: 0, difficulty: 'E', explanation: '"After the long meeting" lacks a main verb and complete thought.' },
    { q: 'Which is a complex sentence?', type: 'mcq', choices: [
      'Mira ran fast.',
      'Mira ran fast, and she won.',
      'Although Mira was tired, she ran fast.',
      'Mira ran fast and won.'
    ], correct: 2, difficulty: 'M', explanation: 'Has a dependent clause ("Although Mira was tired") + an independent clause = complex.' },
    { q: 'Pick the correct conjunction: "Connor not only studies hard ___ also helps his classmates."', type: 'mcq', choices: ['and', 'but', 'or', 'yet'], correct: 1, difficulty: 'M', explanation: 'The pair is "not only ___ but also ___".' },
    { q: 'Which sentence has correct parallelism?', type: 'mcq', choices: [
      'I came, I saw, I was conquering.',
      'I came, I saw, I conquered.',
      'I came, I was seeing, I conquered.',
      'I was coming, I saw, I conquered.'
    ], correct: 1, difficulty: 'E', explanation: 'All three verbs in simple past tense.' }
  ]
};
