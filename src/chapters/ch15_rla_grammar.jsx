import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 15,
  title: 'RLA 8 — Using Grammar Correctly',
  subtitle: 'Pronoun-antecedent agreement, verb tenses (regular & irregular), and subject-verb agreement.',
  blocks: [
    {
      id: 'why-grammar',
      title: 'What "Grammar" Really Means on the GED',
      content: (
        <>
          <p>"Grammar" sounds intimidating, but on the GED it boils down to three predictable patterns: pronouns matching their antecedents, verbs taking the right form for the time period and subject, and verbs agreeing in number with their subjects. Most native English speakers already do most of this correctly by ear — the GED just tests the cases where ear isn\'t enough.</p>
          <p>The good news: there are a small number of trap patterns that come up over and over. If you know them, the questions become almost mechanical.</p>
        </>
      )
    },
    {
      id: 'pronoun-agreement',
      title: 'Pronoun-Antecedent Agreement',
      content: (
        <>
          <p>A <Term>pronoun</Term> is a word like he, she, it, they, who. Every pronoun refers back to a noun called its <Term>antecedent</Term>. The pronoun must agree with its antecedent in three ways: <strong>number</strong> (singular/plural), <strong>gender</strong>, and <strong>person</strong> (first/second/third).</p>

          <Callout kind="warn" title="The most common pronoun error">
            <p><strong>Wrong:</strong> "Each student turned in their paper." (Each = singular; their = plural.)</p>
            <p><strong>Right (formal):</strong> "Each student turned in his or her paper."</p>
            <p><strong>Right (casual modern):</strong> "All students turned in their papers."</p>
            <p><em>Note:</em> "their" as a singular gender-neutral pronoun is increasingly accepted in modern writing, but the GED traditionally still expects "his or her" for a strict singular indefinite. Be aware of both styles; on the GED, prefer the technically traditional answer.</p>
          </Callout>

          <p className="font-semibold mt-4">Indefinite pronouns — singular vs plural</p>
          <p>Some pronouns SOUND like they could be plural but are actually singular:</p>
          <Table
            headers={['Always SINGULAR (use he/she/it/his/her)', 'Always PLURAL (use they/them/their)']}
            rows={[
              ['everyone, everybody, each, no one, nobody, somebody, someone, anyone, anybody, neither, either, one', 'both, several, many, few']
            ]}
          />

          <Callout kind="tip" title='The "everyone is" test'>
            "Everyone IS happy" — singular. "Everybody HAS a coat" — singular. Yes, the meaning feels plural ("a lot of people"), but grammatically these words are singular. The GED tests this.
          </Callout>

          <p className="font-semibold mt-4">Pronoun case — subject vs object vs possessive</p>
          <Table
            headers={['Subject (does the action)', 'Object (receives the action)', 'Possessive']}
            rows={[
              ['I, we, he, she, they, who', 'me, us, him, her, them, whom', 'my/mine, our/ours, his, her/hers, their/theirs, whose']
            ]}
          />

          <Callout kind="tip" title="Drop-the-other test">
            <p>"Connor and (I/me) studied." → Drop "Connor and." "I studied" sounds right; "Me studied" doesn\'t. So: "Connor and I studied."</p>
            <p>"She gave the book to Connor and (I/me)." → "She gave the book to me" is right (after a preposition, you need an object pronoun). So: "Connor and me."</p>
            <p>This trick works every time. Cover the other person, see which pronoun sounds correct alone.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'verb-tenses',
      title: 'Verb Forms & Tenses',
      content: (
        <>
          <p><Term>Tense</Term> is the form of a verb showing when an action takes place. English has 12 main tenses, but only a handful matter for the GED.</p>
          <Table
            headers={['Tense', 'Form (with "walk")', 'Use']}
            rows={[
              ['Simple present', 'walks', 'Habitual or general truth ("She walks daily")'],
              ['Simple past', 'walked', 'Completed action ("She walked yesterday")'],
              ['Simple future', 'will walk', 'Future action ("She will walk tomorrow")'],
              ['Present continuous', 'is walking', 'Happening right now'],
              ['Past continuous', 'was walking', 'Ongoing action in the past'],
              ['Future continuous', 'will be walking', 'Ongoing action in the future'],
              ['Present perfect', 'has walked', 'Started in past, continues to or affects the present'],
              ['Past perfect', 'had walked', 'Completed before another past action'],
              ['Future perfect', 'will have walked', 'Will be completed before a future point']
            ]}
          />

          <Callout kind="warn" title="Tense consistency — the most common GED tense error">
            Don\'t shift tenses without a reason. Once you start in past tense, stay in past tense unless something genuinely happens in a different time.<br/>
            <strong>Wrong:</strong> "Sara walked to school and sees her friend." (Past, then present.)<br/>
            <strong>Right:</strong> "Sara walked to school and saw her friend." (Both past.)
          </Callout>

          <p className="font-semibold mt-4">Irregular verbs — the high-frequency ones</p>
          <p>Most English verbs form past tense by adding -ed (walk → walked). But the most common verbs in English are irregular — they change form unpredictably. Memorize these:</p>
          <Table
            headers={['Base', 'Past', 'Past Participle (with "have")']}
            rows={[
              ['be', 'was/were', 'been'],
              ['begin', 'began', 'begun'],
              ['break', 'broke', 'broken'],
              ['bring', 'brought', 'brought'],
              ['choose', 'chose', 'chosen'],
              ['come', 'came', 'come'],
              ['do', 'did', 'done'],
              ['drink', 'drank', 'drunk'],
              ['eat', 'ate', 'eaten'],
              ['fall', 'fell', 'fallen'],
              ['give', 'gave', 'given'],
              ['go', 'went', 'gone'],
              ['know', 'knew', 'known'],
              ['lay (place)', 'laid', 'laid'],
              ['lie (recline)', 'lay', 'lain'],
              ['ride', 'rode', 'ridden'],
              ['rise', 'rose', 'risen'],
              ['run', 'ran', 'run'],
              ['see', 'saw', 'seen'],
              ['set (place)', 'set', 'set'],
              ['sit', 'sat', 'sat'],
              ['take', 'took', 'taken'],
              ['write', 'wrote', 'written']
            ]}
          />

          <Callout kind="warn" title="Lay vs lie — the classic confusion">
            <strong>Lay</strong> means to place something somewhere; takes a direct object. "I lay the book on the table." (past: laid, past participle: laid)<br/>
            <strong>Lie</strong> means to recline; no direct object. "I lie down to rest." (past: lay, past participle: lain)<br/>
            The past tense of "lie" is "lay" — that\'s why people get confused!
          </Callout>
        </>
      )
    },
    {
      id: 'sv-agreement',
      title: 'Subject-Verb Agreement',
      content: (
        <>
          <p>The verb must agree with the SUBJECT in number. Singular subject → singular verb (usually with -s ending in present tense); plural subject → plural verb (no -s).</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>"The cat <strong>runs</strong>." (singular)</li>
            <li>"The cats <strong>run</strong>." (plural)</li>
          </ul>

          <Callout kind="info" title="Tricky cases the GED loves to test">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Subjects joined by "and"</strong>: usually plural. "Connor and Maria <em>are</em> here."</li>
              <li><strong>Subjects joined by "or" / "nor"</strong>: verb agrees with the closer subject. "Neither the teachers nor the principal <em>is</em> here." vs "Neither the principal nor the teachers <em>are</em> here."</li>
              <li><strong>Indefinite pronouns</strong>: "Each, every, everybody, no one, somebody" → singular. "Each of the students <em>has</em> a book."</li>
              <li><strong>Collective nouns</strong>: usually singular when acting as one unit. "The team <em>plays</em> tonight." (Use plural only when emphasizing individuals: "The team are arguing among themselves.")</li>
              <li><strong>Phrases between subject and verb</strong>: ignore them. "The box of nails <em>is</em> on the bench." Subject is "box", not "nails."</li>
              <li><strong>"There is/are"</strong>: agreement with the noun that follows. "There <em>are</em> three reasons." "There <em>is</em> a problem."</li>
              <li><strong>Questions</strong>: subject often comes after the verb. "Where <em>are</em> the keys?" Subject is "keys."</li>
            </ul>
          </Callout>

          <Callout kind="warn" title="The most common GED trap">
            Long modifying phrases between the subject and the verb are designed to confuse you about which word is the actual subject.<br/>
            "The list of reasons (is/are) long." → Subject is "list" (singular), not "reasons." → "is."<br/>
            "The collection of antique books (is/are) valuable." → Subject is "collection" → "is."<br/>
            Cross out the prepositional phrase, then look at what\'s left.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Antecedent', def: 'The noun a pronoun refers back to.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Indefinite pronoun', def: 'Pronouns like everyone, somebody, each — usually singular.' },
      { term: 'Tense', def: 'The form of a verb showing when the action takes place.' },
      { term: 'Collective noun', def: 'Noun for a group: team, jury, family. Usually singular.' },
      { term: 'Past participle', def: 'Verb form used with "have" or "be": "have eaten," "is broken."' }
    ],
    laws: [
      { name: 'SV agreement', desc: 'Subject and verb must agree in number.' },
      { name: 'Pronoun-antecedent rule', desc: 'A pronoun must match its antecedent in number, gender, and person.' },
      { name: 'Tense consistency', desc: 'Don\'t shift tenses unless time actually changes.' },
      { name: 'Or/nor rule', desc: 'With "or" or "nor", the verb agrees with the CLOSER subject.' }
    ],
    methods: [
      { name: 'Drop-the-other test', desc: 'For "Connor and I/me," remove "Connor and" and use the pronoun that sounds right alone.' },
      { name: 'Ignore the modifier', desc: 'For SV agreement, mentally cross out prepositional phrases between subject and verb.' }
    ]
  },
  questions: [
    { q: 'Choose the correct verb: "Each of the students ___ ready."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'M', explanation: '"Each" is singular → "is."' },
    { q: '"The team ___ playing well this season."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'M', explanation: 'Collective noun "team" acts as a single unit.' },
    { q: '"Connor and ___ went to the library."', type: 'mcq', choices: ['I', 'me'], correct: 0, difficulty: 'E', explanation: 'Subject pronoun "I" because they did the action.' },
    { q: '"The box of pencils ___ on the desk."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'M', explanation: 'Subject is "box" (singular). "Of pencils" is a modifier.' },
    { q: '"Neither the teachers nor the principal ___ available today."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'H', explanation: 'Verb agrees with the CLOSER subject "principal" (singular).' },
    { q: 'Past tense of "see":', type: 'mcq', choices: ['seen', 'sawed', 'saw', 'seed'], correct: 2, difficulty: 'E', explanation: 'See / saw / seen.' },
    { q: '"He ___ already finished his homework when I called."', type: 'mcq', choices: ['has', 'had', 'have', 'is'], correct: 1, difficulty: 'M', explanation: 'Past perfect: action completed BEFORE another past action.' },
    { q: '"Everyone should bring ___ pencil."', type: 'mcq', choices: ['their', 'his or her', 'they\'re', 'there'], correct: 1, difficulty: 'M', explanation: 'On the GED, "everyone" is singular, and the formal answer is "his or her" (though "their" is increasingly accepted).' },
    { q: 'Past participle of "go":', type: 'mcq', choices: ['went', 'gone', 'going', 'goed'], correct: 1, difficulty: 'M', explanation: 'Go / went / gone. "Have gone."' },
    { q: '"The number of applicants ___ rising."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'H', explanation: 'Subject is "number" (singular). "Of applicants" is a modifier. Note: "A number of applicants ARE..." would be plural — different idiom.' }
  ]
};
