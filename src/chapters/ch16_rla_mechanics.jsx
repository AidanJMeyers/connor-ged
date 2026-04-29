import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 16,
  title: 'RLA 9 — Writing Mechanics',
  subtitle: 'Commas, capitalization, possessives, contractions, and homonyms — the "small stuff" that adds up.',
  blocks: [
    {
      id: 'why-mechanics',
      title: 'Why Mechanics Matter',
      content: (
        <>
          <p>"Mechanics" is the umbrella term for punctuation, capitalization, and spelling. They\'re the surface layer of writing — but if you get them wrong, the meaning becomes unclear or the writing feels unprofessional. The GED tests these patterns very predictably; learn the rules and you\'ll spot the errors quickly.</p>
        </>
      )
    },
    {
      id: 'commas',
      title: 'The 8 Essential Comma Rules',
      content: (
        <>
          <p>Commas are the most-used (and most-misused) punctuation in English. Most comma errors fall into these eight categories.</p>
          <Callout kind="formula" title="The 8 essential comma rules">
            <ol className="list-decimal ml-5 text-sm space-y-2">
              <li><strong>Series</strong>: items in a list of 3+. <em>"I bought eggs, milk, and bread."</em> (The "Oxford comma" before "and" is preferred and accepted.)</li>
              <li><strong>Compound sentences</strong>: before a FANBOYS conjunction joining two independent clauses. <em>"I studied, but I forgot."</em></li>
              <li><strong>Introductory elements</strong>: after an introductory phrase or clause. <em>"After dinner, we walked."</em></li>
              <li><strong>Nonessential clauses</strong>: around extra info that could be removed without changing the basic meaning. <em>"My friend, who lives in Texas, called."</em></li>
              <li><strong>Direct address</strong>: when speaking to someone by name. <em>"Connor, please listen."</em></li>
              <li><strong>Coordinate adjectives</strong>: between equal adjectives describing the same noun. <em>"The dark, stormy night."</em> (Test: can you swap their order? Can you put "and" between them? If yes, use a comma. NOT for cumulative adjectives like "old red brick"—you wouldn\'t say "old AND red AND brick.")</li>
              <li><strong>Dates and addresses</strong>: <em>"March 5, 2026, was rainy."</em> (Yes, the comma after the year is correct.) <em>"Austin, Texas, is hot."</em></li>
              <li><strong>Quotations</strong>: introducing a quote. <em>She said, "I\'ll be there."</em></li>
            </ol>
          </Callout>

          <Callout kind="warn" title="Don\'t add a comma in these places">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Between subject and verb: <strong>NOT</strong> "The student, walked home."</li>
              <li>Between verb and direct object: <strong>NOT</strong> "She brought, her notebook."</li>
              <li>Before "that" introducing a restrictive clause: <strong>NOT</strong> "The book, that I read, was great."</li>
              <li>Just because there\'s a pause when reading aloud — pauses don\'t always need commas.</li>
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
              ['Proper nouns (specific names)', 'Connor, Texas, Walmart, Tuesday, December, Spanish, Christianity'],
              ['Titles before names', 'President Lincoln, Doctor Smith, Aunt Maria'],
              ['Important words in titles of works', '"War and Peace," "Pride and Prejudice"'],
              ['Direction when it names a region', 'I moved to the West Coast. (but: "Drive west on I-10.")'],
              ['First word of a quoted sentence', 'She said, "Be quiet."'],
              ['Languages and nationalities', 'Spanish, French, American'],
              ['Days, months, holidays', 'Monday, July, Christmas'],
              ['Specific eras', 'the Renaissance, the Industrial Revolution, World War II']
            ]}
          />

          <Callout kind="warn" title="Don\'t capitalize">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Seasons</strong> (spring, summer, fall, winter) — unless used in a proper title.</li>
              <li><strong>Common nouns</strong> (the president, my doctor, my mom — without name).</li>
              <li><strong>Compass directions</strong> when used as direction (drive south).</li>
              <li><strong>Subjects</strong> unless they\'re language names. (math, history; but English, Spanish.)</li>
              <li><strong>Articles & short prepositions in titles</strong> (unless first or last word). "The Great Gatsby" — "The" is capitalized because it\'s first; if it appeared mid-title, it would be lowercase: "Beauty and the Beast."</li>
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
          <p className="font-semibold">Possessives — apostrophes show ownership</p>
          <Table
            headers={['Form', 'Rule', 'Example']}
            rows={[
              ['Singular noun', 'Add \'s', 'the dog\'s bone'],
              ['Singular noun ending in s', 'Add \'s (or just \' for traditional style)', 'James\'s book or James\' book'],
              ['Plural noun ending in s', 'Add only \' (just an apostrophe)', 'the dogs\' bones'],
              ['Plural noun NOT ending in s', 'Add \'s', 'the children\'s books, the women\'s coats'],
              ['Joint possession (one shared item)', 'Apostrophe on the LAST name only', 'Sara and Maria\'s project (one project)'],
              ['Separate possession (separate items)', 'Apostrophe on EACH name', 'Sara\'s and Maria\'s projects (two projects)']
            ]}
          />

          <p className="font-semibold mt-4">Contractions — apostrophes replace missing letters</p>
          <Table
            headers={['Words', 'Contraction']}
            rows={[
              ['it is / it has', 'it\'s'],
              ['they are', 'they\'re'],
              ['you are', 'you\'re'],
              ['who is / who has', 'who\'s'],
              ['will not', 'won\'t (irregular)'],
              ['I would / I had', 'I\'d'],
              ['cannot', 'can\'t'],
              ['have not', 'haven\'t'],
              ['should not', 'shouldn\'t']
            ]}
          />

          <Callout kind="warn" title="The most-tested confusion: its vs it\'s">
            <p><strong>Its</strong> = possessive (the dog wagged <em>its</em> tail). NO apostrophe.</p>
            <p><strong>It\'s</strong> = "it is" or "it has" (<em>It\'s</em> raining = "It is raining").</p>
            <p>Test: try expanding to "it is." If it works, use "it\'s." If not, use "its."</p>
            <p>This trips up everyone, but the GED tests it constantly. Memorize this distinction cold.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'homonyms',
      title: 'Common Homonyms (Sound-Alike Words)',
      content: (
        <>
          <p><Term>Homonyms</Term> sound the same but mean different things. The GED tests these in "best version of this sentence" questions where the wrong choice is grammatically fine but uses the wrong homonym.</p>
          <Table
            headers={['Word pair', 'Meanings']}
            rows={[
              ['accept / except', 'to receive vs other than'],
              ['affect / effect', 'verb (influence) vs noun (result)'],
              ['its / it\'s', 'possessive vs contraction of "it is"'],
              ['lose / loose', 'misplace (lose) vs not tight (loose)'],
              ['principal / principle', 'main, head of school vs rule/belief'],
              ['stationary / stationery', 'standing still vs writing paper'],
              ['than / then', 'comparison vs sequence (time)'],
              ['their / there / they\'re', 'possessive / location / "they are"'],
              ['to / too / two', 'preposition / also-very / number 2'],
              ['who\'s / whose', '"who is" vs possessive'],
              ['weather / whether', 'climate vs if'],
              ['your / you\'re', 'possessive vs "you are"'],
              ['piece / peace', 'a part vs absence of war/quiet'],
              ['allowed / aloud', 'permitted vs spoken'],
              ['break / brake', 'crack/pause vs stopping device'],
              ['flour / flower', 'baking ingredient vs plant bloom'],
              ['hear / here', 'perceive sound vs in this place'],
              ['knew / new', 'past tense of know vs not old'],
              ['know / no', 'be aware vs negative response'],
              ['right / write', 'correct vs put words on paper'],
              ['threw / through', 'past tense of throw vs across']
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
      { term: 'Proper noun', def: 'Specific name of a person, place, or thing — always capitalized.' },
      { term: 'Common noun', def: 'General name for any of a class — not capitalized unless starting a sentence.' }
    ],
    laws: [
      { name: 'Comma + FANBOYS', desc: 'Use when joining two independent clauses with for/and/nor/but/or/yet/so.' },
      { name: 'No comma between subject and verb', desc: 'Even with a long phrase between, do not insert a comma.' },
      { name: 'Apostrophe placement', desc: 'Singular: \'s. Plural ending in s: just \'. Plural NOT ending in s: \'s.' },
      { name: 'Capitalize proper nouns, lowercase common', desc: 'Languages, days, months, names — capitalized. Seasons, common occupations — not.' }
    ],
    methods: [
      { name: 'Replace test for contractions', desc: 'For its/it\'s and your/you\'re, expand the contraction. If "it is" fits, use "it\'s."' },
      { name: 'Drop and recheck for nonessential commas', desc: 'For nonessential commas, mentally remove the phrase. If the sentence still works, use commas around the phrase.' }
    ]
  },
  questions: [
    { q: 'Choose the correct sentence:', type: 'mcq', choices: [
      'The dog wagged it\'s tail.',
      'The dog wagged its tail.',
      'The dog wagged its\' tail.',
      'The dog wagged it tail.'
    ], correct: 1, difficulty: 'E', explanation: '"Its" without apostrophe = possessive.' },
    { q: '"Sarah ___ studying for her test."', type: 'mcq', choices: ['is', 'are', 'were', 'be'], correct: 0, difficulty: 'E', explanation: 'Singular subject "Sarah" → singular verb "is."' },
    { q: 'Which is correctly punctuated?', type: 'mcq', choices: [
      'I bought eggs milk and bread.',
      'I bought eggs, milk, and bread.',
      'I bought eggs, milk, and, bread.',
      'I bought, eggs, milk, and bread.'
    ], correct: 1, difficulty: 'E', explanation: 'Series comma rule.' },
    { q: '"The childrens books" should be written:', type: 'mcq', choices: ['the children\'s books', 'the childrens\' books', 'the children books', 'the children\'s\' books'], correct: 0, difficulty: 'M', explanation: '"Children" is plural NOT ending in s, so add \'s.' },
    { q: 'Choose the correct sentence:', type: 'mcq', choices: [
      'Whose going to the game?',
      'Who\'s going to the game?',
      'Whos going to the game?',
      'Who\'s\' going to the game?'
    ], correct: 1, difficulty: 'M', explanation: 'Who\'s = "who is."' },
    { q: 'Which word should be capitalized?', type: 'mcq', choices: [
      'Drive south on the highway.',
      'I love spring weather.',
      'My favorite class is spanish.',
      'The doctor will see you now.'
    ], correct: 2, difficulty: 'M', explanation: 'Languages (Spanish, English) are capitalized; seasons and directions used generally are not.' },
    { q: 'Choose the right word: "I would have gone, ___ I was busy."', type: 'mcq', choices: ['but', 'than', 'then', 'and'], correct: 0, difficulty: 'E', explanation: '"But" expresses contrast.' },
    { q: 'Choose the right word: "The principal told us about the importance of ___."', type: 'mcq', choices: ['principal', 'principle', 'principles\'', 'principal\'s'], correct: 1, difficulty: 'M', explanation: '"Principle" = a rule/belief.' },
    { q: 'Choose: "We will go ___ the store later."', type: 'mcq', choices: ['to', 'too', 'two'], correct: 0, difficulty: 'E', explanation: '"To" is the preposition.' },
    { q: 'Where is the correct comma usage?', type: 'mcq', choices: [
      'My brother who lives in Boston is visiting.',
      'My brother, who lives in Boston, is visiting.',
      'My brother who lives in Boston, is visiting.',
      'My, brother who lives in Boston is visiting.'
    ], correct: 1, difficulty: 'M', explanation: '"Who lives in Boston" is nonessential info — surround with commas.' }
  ]
};
