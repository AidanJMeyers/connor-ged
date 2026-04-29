import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 15,
  title: 'RLA 8 — Using Grammar Correctly',
  subtitle: 'Noun-pronoun agreement, verb forms and tenses, subject-verb agreement.',
  blocks: [
    {
      id: 'pronoun-agreement',
      title: 'Pronoun-Antecedent Agreement',
      content: (
        <>
          <p>A <Term>pronoun</Term> must agree with its <Term>antecedent</Term> (the noun it replaces) in <strong>number</strong>, <strong>gender</strong>, and <strong>person</strong>.</p>
          <Callout kind="warn" title="Common errors">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Wrong:</strong> "Each student turned in their paper." (each = singular; their = plural)</li>
              <li><strong>Right:</strong> "Each student turned in his or her paper." (formal)</li>
              <li><strong>Right (modern):</strong> "All students turned in their papers."</li>
            </ul>
          </Callout>
          <p className="font-semibold mt-3">Indefinite pronouns — singular vs plural</p>
          <Table
            headers={['Always singular', 'Always plural']}
            rows={[
              ['everyone, everybody, each, no one, nobody, somebody, someone, anyone, anybody, neither, either', 'both, several, many, few']
            ]}
          />

          <p className="font-semibold mt-3">Pronoun case</p>
          <Table
            headers={['Subject (does action)', 'Object (receives action)', 'Possessive']}
            rows={[
              ['I, we, he, she, they, who', 'me, us, him, her, them, whom', 'my/mine, our/ours, his, her/hers, their/theirs, whose']
            ]}
          />
          <Callout kind="tip" title="Trick: drop the other person">
            "Connor and (I/me) studied." → drop "Connor and": "I studied." → so "Connor and I studied."<br/>
            "She gave the book to Connor and (I/me)." → "She gave the book to me." → so "Connor and me."
          </Callout>
        </>
      )
    },
    {
      id: 'verb-tenses',
      title: 'Verb Forms & Tenses',
      content: (
        <>
          <Table
            headers={['Tense', 'Form', 'Use']}
            rows={[
              ['Simple present', 'walks', 'habitual or general truth'],
              ['Simple past', 'walked', 'completed action'],
              ['Simple future', 'will walk', 'future action'],
              ['Present continuous', 'is walking', 'happening right now'],
              ['Past continuous', 'was walking', 'ongoing in the past'],
              ['Future continuous', 'will be walking', 'ongoing in the future'],
              ['Present perfect', 'has walked', 'started in past, continues or relevant now'],
              ['Past perfect', 'had walked', 'completed before another past action'],
              ['Future perfect', 'will have walked', 'completed before a future point']
            ]}
          />
          <Callout kind="warn" title="Tense consistency">
            Don't shift tenses without reason. <strong>Wrong:</strong> "Sara walked to school and sees her friend." <strong>Right:</strong> "Sara walked to school and saw her friend."
          </Callout>

          <p className="font-semibold mt-3">Irregular verbs — common ones</p>
          <Table
            headers={['Base', 'Past', 'Past Participle']}
            rows={[
              ['be', 'was/were', 'been'],
              ['begin', 'began', 'begun'],
              ['bring', 'brought', 'brought'],
              ['choose', 'chose', 'chosen'],
              ['drink', 'drank', 'drunk'],
              ['eat', 'ate', 'eaten'],
              ['go', 'went', 'gone'],
              ['lay (place)', 'laid', 'laid'],
              ['lie (recline)', 'lay', 'lain'],
              ['ride', 'rode', 'ridden'],
              ['rise', 'rose', 'risen'],
              ['see', 'saw', 'seen'],
              ['set (place)', 'set', 'set'],
              ['sit', 'sat', 'sat'],
              ['take', 'took', 'taken'],
              ['write', 'wrote', 'written']
            ]}
          />
        </>
      )
    },
    {
      id: 'sv-agreement',
      title: 'Subject-Verb Agreement',
      content: (
        <>
          <p>The verb must agree with the subject in number. Singular subject → singular verb; plural subject → plural verb.</p>
          <Callout kind="info" title="Tricky cases">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Subjects joined by "and"</strong>: usually plural. "Connor and Maria <em>are</em> here."</li>
              <li><strong>Subjects joined by "or"/"nor"</strong>: verb agrees with the closer subject. "Neither the teachers nor the principal <em>is</em> here." vs "Neither the principal nor the teachers <em>are</em> here."</li>
              <li><strong>Indefinite pronouns</strong>: "Each, every, everybody, no one, somebody" → singular. "Each of the students <em>has</em> a book."</li>
              <li><strong>Collective nouns</strong>: usually singular when acting as one unit. "The team <em>plays</em> tonight."</li>
              <li><strong>Phrases between subject and verb</strong>: ignore them. "The box of nails <em>is</em> on the bench."</li>
              <li><strong>"There is/are"</strong>: agreement with the noun that follows. "There <em>are</em> three reasons."</li>
            </ul>
          </Callout>

          <Callout kind="warn" title="Most common GED trap">
            "The list of reasons (is/are) long." → Subject is "list" (singular), not "reasons." → "is."
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Antecedent', def: 'The noun a pronoun refers back to.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Indefinite pronoun', def: 'A pronoun like everyone, somebody, each.' },
      { term: 'Tense', def: 'The form of a verb showing when the action takes place.' },
      { term: 'Collective noun', def: 'A noun for a group: team, jury, family.' }
    ],
    laws: [
      { name: 'SV agreement', desc: 'Subject and verb must agree in number.' },
      { name: 'Pronoun-antecedent rule', desc: 'A pronoun must match its antecedent in number, gender, and person.' },
      { name: 'Tense consistency', desc: 'Don\'t shift tenses unless time actually changes.' }
    ],
    methods: [
      { name: 'Drop the other', desc: 'For "Connor and I/me", remove "Connor and" and use the pronoun that sounds right alone.' },
      { name: 'Ignore the modifier', desc: 'For SV agreement, ignore prepositional phrases between subject and verb.' }
    ]
  },
  questions: [
    { q: 'Choose the correct verb: "Each of the students ___ ready."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'M', explanation: '"Each" is singular → "is".' },
    { q: '"The team ___ playing well this season."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'M', explanation: 'Collective noun "team" acts as a single unit.' },
    { q: '"Connor and ___ went to the library."', type: 'mcq', choices: ['I', 'me'], correct: 0, difficulty: 'E', explanation: 'Subject pronoun "I" because they did the action.' },
    { q: '"The box of pencils ___ on the desk."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'M', explanation: 'Subject is "box" (singular). "Of pencils" is a modifier.' },
    { q: '"Neither the teachers nor the principal ___ available today."', type: 'mcq', choices: ['is', 'are'], correct: 0, difficulty: 'H', explanation: 'Verb agrees with the closer subject "principal" (singular).' },
    { q: 'Past tense of "see":', type: 'mcq', choices: ['seen', 'sawed', 'saw', 'seed'], correct: 2, difficulty: 'E', explanation: 'See / saw / seen.' },
    { q: '"He ___ already finished his homework when I called."', type: 'mcq', choices: ['has', 'had', 'have', 'is'], correct: 1, difficulty: 'M', explanation: 'Past perfect: action completed before another past action.' },
    { q: '"Everyone should bring ___ pencil."', type: 'mcq', choices: ['their', 'his or her', 'they\'re', 'there'], correct: 1, difficulty: 'M', explanation: 'On the GED, "everyone" is singular and the formal answer is "his or her" (though "their" is increasingly accepted).' }
  ]
};
