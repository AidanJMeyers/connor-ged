import React from 'react';
import { Callout, Table, Term, M } from '../components/Visual.jsx';

export default {
  id: 11,
  title: 'RLA 4 — Writing Effective Sentences',
  subtitle: 'Simple, compound, and complex sentences; run-ons and comma splices; subordination, modifiers, parallelism.',
  blocks: [
    {
      id: 'simple-sentences',
      title: 'Simple Sentences',
      content: (
        <>
          <p>A <Term>simple sentence</Term> = one independent clause: a subject + a verb + a complete thought.</p>
          <Callout kind="info" title="Examples">
            "The cat slept." (subject: cat; verb: slept)<br/>
            "Maria and Carlos drove to school." (compound subject — still one clause)<br/>
            "Connor studied and reviewed." (compound verb — still one clause)
          </Callout>
          <p className="font-semibold mt-3">Sentence fragments — incomplete sentences</p>
          <Callout kind="warn">
            <strong>Fragment:</strong> "Running through the park."<br/>
            <strong>Fix:</strong> "Carlos was running through the park."
          </Callout>
        </>
      )
    },
    {
      id: 'compound-complex',
      title: 'Compound & Complex Sentences',
      content: (
        <>
          <Table
            headers={['Type', 'Description', 'Example']}
            rows={[
              ['Simple', 'One independent clause', '"She studied."'],
              ['Compound', 'Two independent clauses joined by FANBOYS or a semicolon', '"She studied, and she passed."'],
              ['Complex', 'One independent + one or more dependent', '"Because she studied, she passed."'],
              ['Compound-complex', 'Two independent + one or more dependent', '"She studied, and she passed because she practiced daily."']
            ]}
          />
          <Callout kind="formula" title="FANBOYS — coordinating conjunctions">
            <strong>F</strong>or, <strong>A</strong>nd, <strong>N</strong>or, <strong>B</strong>ut, <strong>O</strong>r, <strong>Y</strong>et, <strong>S</strong>o.<br/>
            Connect two independent clauses with <strong>comma + FANBOYS</strong>.
          </Callout>
          <Callout kind="info" title="Common subordinating conjunctions (start a dependent clause)">
            because, although, while, when, since, before, after, if, unless, until, as, even though, whenever
          </Callout>
        </>
      )
    },
    {
      id: 'runons-splices',
      title: 'Run-Ons & Comma Splices',
      content: (
        <>
          <p>Two of the most common GED writing errors:</p>
          <Callout kind="warn" title="Run-on sentence">
            Two independent clauses joined with no punctuation. <br/>
            <strong>Wrong:</strong> "She studied she passed."
          </Callout>
          <Callout kind="warn" title="Comma splice">
            Two independent clauses joined with only a comma. <br/>
            <strong>Wrong:</strong> "She studied, she passed."
          </Callout>
          <p className="font-semibold mt-3">5 ways to fix run-ons & splices</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li><strong>Period</strong>: "She studied. She passed."</li>
            <li><strong>Semicolon</strong>: "She studied; she passed."</li>
            <li><strong>Comma + FANBOYS</strong>: "She studied, and she passed."</li>
            <li><strong>Subordinator</strong>: "Because she studied, she passed."</li>
            <li><strong>Semicolon + conjunctive adverb + comma</strong>: "She studied; therefore, she passed."</li>
          </ol>
        </>
      )
    },
    {
      id: 'subordination',
      title: 'Subordinating Ideas',
      content: (
        <>
          <p><Term>Subordination</Term> = combining sentences so the less important idea becomes a dependent clause. This makes writing tighter and clearer.</p>
          <Callout kind="info" title="Before / After">
            <strong>Choppy:</strong> "Jaden was tired. He finished the report. It was past midnight."<br/>
            <strong>Subordinated:</strong> "Although Jaden was tired, he finished the report past midnight."
          </Callout>
        </>
      )
    },
    {
      id: 'modifiers',
      title: 'Modifying Ideas — Avoiding Misplaced/Dangling Modifiers',
      content: (
        <>
          <p>A <Term>modifier</Term> describes another word. Place it as close as possible to the word it modifies.</p>
          <Callout kind="warn" title="Misplaced modifier">
            "I almost ate the entire pizza." (You almost ate it — meaning you didn't.)<br/>
            "I ate almost the entire pizza." (You ate most — clearer.)
          </Callout>
          <Callout kind="warn" title="Dangling modifier">
            "Walking through the park, the trees were beautiful." (The trees aren't walking!)<br/>
            <strong>Fix:</strong> "Walking through the park, I noticed beautiful trees."
          </Callout>
          <p className="font-semibold mt-3 text-sm">The opening phrase must describe the next noun.</p>
        </>
      )
    },
    {
      id: 'parallel-structure',
      title: 'Parallel Structure',
      content: (
        <>
          <p>Items in a list, comparison, or series should share the same grammatical form.</p>
          <Callout kind="warn" title="Not parallel">
            "She likes hiking, biking, and to swim."
          </Callout>
          <Callout kind="tip" title="Parallel">
            "She likes hiking, biking, and swimming." (all gerunds)<br/>
            "She likes to hike, to bike, and to swim." (all infinitives)
          </Callout>
          <Callout kind="info" title="Watch with paired conjunctions">
            <strong>Both ___ and ___</strong>; <strong>not only ___ but also ___</strong>; <strong>either ___ or ___</strong>; <strong>neither ___ nor ___</strong>. The two slots must be parallel.<br/>
            <strong>Wrong:</strong> "He is both a student and works full time."<br/>
            <strong>Right:</strong> "He is both a student and a full-time worker."
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
      { term: 'Modifier', def: 'A word/phrase that describes another part of the sentence.' }
    ],
    laws: [
      { name: 'FANBOYS', desc: 'Use comma + FANBOYS (For, And, Nor, But, Or, Yet, So) to join two independent clauses.' },
      { name: 'Modifier placement', desc: 'Modifiers go right next to what they describe.' },
      { name: 'Parallelism', desc: 'Items in a list or comparison match grammatical form.' }
    ],
    methods: [
      { name: 'Five fixes for run-ons', desc: 'Period · semicolon · comma+FANBOYS · subordinator · semicolon+conjunctive adverb+comma.' },
      { name: 'Read aloud', desc: 'Mistakes in modifier placement and parallelism often sound off when read out loud.' }
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
    ], correct: 1, difficulty: 'M', explanation: '"Running fast" should describe Maria — but the bus is the subject, so it dangles.' },
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
    ], correct: 0, difficulty: 'E', explanation: 'No subject or main verb — incomplete thought.' },
    { q: 'Which is a complex sentence?', type: 'mcq', choices: [
      'Mira ran fast.',
      'Mira ran fast, and she won.',
      'Although Mira was tired, she ran fast.',
      'Mira ran fast and won.'
    ], correct: 2, difficulty: 'M', explanation: 'Has a dependent clause ("Although Mira was tired") + an independent clause.' },
    { q: 'Pick the correct conjunction: "Connor not only studies hard ___ also helps his classmates."', type: 'mcq', choices: ['and', 'but', 'or', 'yet'], correct: 1, difficulty: 'M', explanation: 'The pair is "not only ___ but also ___".' }
  ]
};
