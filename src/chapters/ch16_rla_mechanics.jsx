import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 16,
  title: 'RLA 9 — Writing Mechanics',
  subtitle: 'Comma rules, capitalization, possessives & contractions, homonyms.',
  blocks: [
    {
      id: 'commas',
      title: 'Comma Rules',
      content: (
        <>
          <Callout kind="formula" title="The 8 essential comma rules">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Series</strong>: items in a list of 3+. <em>Eggs, milk, and bread.</em></li>
              <li><strong>Compound sentences</strong>: before FANBOYS joining two independent clauses. <em>I studied, but I forgot.</em></li>
              <li><strong>Introductory elements</strong>: after intro phrase or clause. <em>After dinner, we walked.</em></li>
              <li><strong>Nonessential clauses</strong>: around extra info that could be removed. <em>My friend, who lives in Texas, called.</em></li>
              <li><strong>Direct address</strong>: <em>Connor, please listen.</em></li>
              <li><strong>Coordinate adjectives</strong>: between equal adjectives describing same noun. <em>The dark, stormy night.</em> (NOT between cumulative ones: "old red brick.")</li>
              <li><strong>Dates and addresses</strong>: <em>March 5, 2026, was rainy.</em> / <em>Austin, Texas, is hot.</em></li>
              <li><strong>Quotations</strong>: <em>She said, "I'll be there."</em></li>
            </ol>
          </Callout>
          <Callout kind="warn" title="Don't add a comma">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Between subject and verb: <strong>NOT</strong> "The student, walked home."</li>
              <li>Between verb and object: <strong>NOT</strong> "She brought, her notebook."</li>
              <li>Before "that" in restrictive clauses: <strong>NOT</strong> "The book, that I read, was great."</li>
              <li>Just because there's a pause when reading aloud.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'capitalization',
      title: 'Capitalization',
      content: (
        <>
          <Table
            headers={['Capitalize', 'Examples']}
            rows={[
              ['First word of a sentence', '"The dog barked."'],
              ['Proper nouns (names)', 'Connor, Texas, Walmart, Tuesday, December, Spanish, Christianity'],
              ['Titles before names', 'President Lincoln, Doctor Smith, Aunt Maria'],
              ['Important words in titles of works', 'War and Peace, Pride and Prejudice'],
              ['Direction when it names a region', 'I moved to the West Coast. (but: "Drive west on I-10.")'],
              ['First word of a quoted sentence', 'She said, "Be quiet."']
            ]}
          />
          <Callout kind="warn" title="Don't capitalize">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Seasons (spring, summer, fall, winter)</li>
              <li>Common nouns (the president, my doctor, my mom — without name)</li>
              <li>Compass directions when used as direction (drive south)</li>
              <li>Subjects unless they're names (math, history; but English, Spanish)</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'possessives-contractions',
      title: 'Possessives & Contractions',
      content: (
        <>
          <p className="font-semibold">Possessives</p>
          <Table
            headers={['Form', 'Rule', 'Example']}
            rows={[
              ['Singular noun', 'Add \'s', 'the dog\'s bone'],
              ['Singular noun ending in s', 'Add \'s (or just \' for traditional style)', 'James\'s book or James\' book'],
              ['Plural noun ending in s', 'Add only \'', 'the dogs\' bones'],
              ['Plural noun NOT ending in s', 'Add \'s', 'the children\'s books'],
              ['Joint possession', 'Apostrophe on the LAST name only', 'Sara and Maria\'s project (one project)'],
              ['Separate possession', 'Apostrophe on EACH name', 'Sara\'s and Maria\'s projects (two projects)']
            ]}
          />

          <p className="font-semibold mt-3">Contractions</p>
          <Table
            headers={['Words', 'Contraction']}
            rows={[
              ['it is / it has', 'it\'s'],
              ['they are', 'they\'re'],
              ['you are', 'you\'re'],
              ['who is / who has', 'who\'s'],
              ['will not', 'won\'t'],
              ['I would / I had', 'I\'d'],
              ['cannot', 'can\'t']
            ]}
          />
          <Callout kind="warn" title="The most-tested confusion">
            <strong>Its</strong> = possessive (the dog wagged <em>its</em> tail).<br/>
            <strong>It's</strong> = "it is" or "it has" (<em>It's</em> raining).
          </Callout>
        </>
      )
    },
    {
      id: 'homonyms',
      title: 'Common Homonyms (Sound-Alike Words)',
      content: (
        <>
          <Table
            headers={['Word', 'Meaning']}
            rows={[
              ['accept / except', 'receive vs other than'],
              ['affect / effect', 'verb (influence) vs noun (result)'],
              ['its / it\'s', 'possessive vs contraction of "it is"'],
              ['lose / loose', 'misplace vs not tight'],
              ['principal / principle', 'main, head of school vs rule/belief'],
              ['stationary / stationery', 'standing still vs writing paper'],
              ['than / then', 'comparison vs sequence'],
              ['their / there / they\'re', 'possessive / location / "they are"'],
              ['to / too / two', 'preposition / also-very / number'],
              ['who\'s / whose', '"who is" vs possessive'],
              ['weather / whether', 'climate vs if'],
              ['your / you\'re', 'possessive vs "you are"'],
              ['piece / peace', 'a part vs absence of war/quiet'],
              ['allowed / aloud', 'permitted vs spoken'],
              ['break / brake', 'crack vs stop pedal'],
              ['flour / flower', 'baking ingredient vs plant bloom']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Possessive', def: 'A form showing ownership, usually with apostrophe + s.' },
      { term: 'Contraction', def: 'Two words combined with an apostrophe (don\'t = do not).' },
      { term: 'Homonym', def: 'Words that sound alike but mean different things.' },
      { term: 'Proper noun', def: 'Specific name of a person, place, or thing — always capitalized.' }
    ],
    laws: [
      { name: 'Comma + FANBOYS', desc: 'When joining two independent clauses with for/and/nor/but/or/yet/so.' },
      { name: 'No comma between subject and verb', desc: 'Even with a long phrase between, do not insert a comma.' },
      { name: 'Apostrophe placement', desc: 'Singular: \'s. Plural ending in s: just \'. Plural not ending in s: \'s.' }
    ],
    methods: [
      { name: 'Replace test', desc: 'For its/it\'s and your/you\'re, expand the contraction. If "it is" fits, use "it\'s".' },
      { name: 'Drop and recheck', desc: 'For nonessential commas, mentally remove the phrase. If the sentence still works, use commas.' }
    ]
  },
  questions: [
    { q: 'Choose the correct sentence:', type: 'mcq', choices: [
      'The dog wagged it\'s tail.',
      'The dog wagged its tail.',
      'The dog wagged its\' tail.',
      'The dog wagged it tail.'
    ], correct: 1, difficulty: 'E', explanation: '"Its" without apostrophe = possessive.' },
    { q: '"Sarah ___ studying for her test."', type: 'mcq', choices: ['is', 'are', 'were', 'be'], correct: 0, difficulty: 'E', explanation: 'Singular subject "Sarah" → singular verb "is".' },
    { q: 'Which is correctly punctuated?', type: 'mcq', choices: [
      'I bought eggs milk and bread.',
      'I bought eggs, milk, and bread.',
      'I bought eggs, milk, and, bread.',
      'I bought, eggs, milk, and bread.'
    ], correct: 1, difficulty: 'E', explanation: 'Series comma rule.' },
    { q: '"The childrens books" should be written:', type: 'mcq', choices: ['the children\'s books', 'the childrens\' books', 'the children books', 'the children\'s\' books'], correct: 0, difficulty: 'M', explanation: '"Children" is plural not ending in s, so add \'s.' },
    { q: 'Choose the correct sentence:', type: 'mcq', choices: [
      'Whose going to the game?',
      'Who\'s going to the game?',
      'Whos going to the game?',
      'Who\'s\' going to the game?'
    ], correct: 1, difficulty: 'M', explanation: 'Who\'s = "who is".' },
    { q: 'Which word should be capitalized?', type: 'mcq', choices: [
      'Drive south on the highway.',
      'I love spring weather.',
      'My favorite class is spanish.',
      'The doctor will see you now.'
    ], correct: 2, difficulty: 'M', explanation: 'Languages (Spanish, English) are capitalized; seasons and directions used generally are not.' },
    { q: 'Choose the right word: "I would have gone, ___ I was busy."', type: 'mcq', choices: ['but', 'than', 'then', 'and'], correct: 0, difficulty: 'E', explanation: '"But" expresses contrast.' },
    { q: 'Choose the right word: "The principal told us about the importance of ___."', type: 'mcq', choices: ['principal', 'principle', 'principles\'', 'principal\'s'], correct: 1, difficulty: 'M', explanation: '"Principle" = a rule/belief. "Principal" = head of school.' }
  ]
};
