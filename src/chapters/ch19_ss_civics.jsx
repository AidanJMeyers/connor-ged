import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 19,
  title: 'Social Studies 3 — Civics & Government',
  subtitle: 'The Constitution, branches of government, federalism, elections, and the role of citizens.',
  blocks: [
    {
      id: 'historic-basis',
      title: 'Historic Basis for the U.S. System',
      content: (
        <>
          <Table
            headers={['Influence', 'Contribution']}
            rows={[
              ['Magna Carta (1215)', 'Limited the king\'s power; due process'],
              ['English Bill of Rights (1689)', 'Rights of subjects, parliamentary supremacy'],
              ['Enlightenment thinkers', 'Locke (life, liberty, property), Montesquieu (separation of powers), Rousseau (social contract)'],
              ['Mayflower Compact (1620)', 'Self-government by consent'],
              ['Declaration of Independence (1776)', 'Natural rights, government by consent of the governed'],
              ['Articles of Confederation (1781)', 'First U.S. gov\'t — too weak'],
              ['U.S. Constitution (1787)', 'Replaced Articles; current framework']
            ]}
          />
          <Callout kind="info" title="Foundational principles in the Constitution">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Popular sovereignty</strong> — power comes from the people.</li>
              <li><strong>Limited government</strong> — government has only the powers granted to it.</li>
              <li><strong>Separation of powers</strong> — three branches.</li>
              <li><strong>Checks and balances</strong> — each branch can limit the others.</li>
              <li><strong>Federalism</strong> — power split between national and states.</li>
              <li><strong>Republicanism</strong> — citizens elect representatives.</li>
              <li><strong>Individual rights</strong> — protected by the Bill of Rights.</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'constitution',
      title: 'The Constitution & Bill of Rights',
      content: (
        <>
          <p>The Constitution has a Preamble + 7 Articles + 27 Amendments. The first 10 amendments = the <Term>Bill of Rights</Term> (ratified 1791).</p>
          <Table
            headers={['Amendment', 'What it protects']}
            rows={[
              ['1st', 'Speech, religion, press, assembly, petition'],
              ['2nd', 'Right to bear arms'],
              ['3rd', 'No quartering soldiers'],
              ['4th', 'No unreasonable search / seizure (warrant required)'],
              ['5th', 'Due process; no double jeopardy; no self-incrimination; eminent domain'],
              ['6th', 'Speedy trial, jury, attorney, confront witnesses'],
              ['7th', 'Jury trial in civil cases'],
              ['8th', 'No cruel/unusual punishment; no excessive bail'],
              ['9th', 'Rights not listed are still retained by the people'],
              ['10th', 'Powers not given to the federal gov\'t are reserved to states/people']
            ]}
          />
          <Callout kind="tip" title="Other key amendments">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>13th</strong>: abolished slavery (1865)</li>
              <li><strong>14th</strong>: citizenship, equal protection (1868)</li>
              <li><strong>15th</strong>: voting rights regardless of race (1870)</li>
              <li><strong>19th</strong>: women\'s suffrage (1920)</li>
              <li><strong>22nd</strong>: limits president to two terms (1951)</li>
              <li><strong>26th</strong>: voting age 18 (1971)</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'branches',
      title: 'Three Branches of Government',
      content: (
        <>
          <Table
            headers={['Branch', 'Body', 'Main job']}
            rows={[
              ['Legislative', 'Congress (Senate + House of Representatives)', 'Make laws'],
              ['Executive', 'President + Cabinet + agencies', 'Enforce laws'],
              ['Judicial', 'Supreme Court + federal courts', 'Interpret laws']
            ]}
          />
          <Callout kind="formula" title="Checks and balances examples">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>President can <strong>veto</strong> laws.</li>
              <li>Congress can <strong>override</strong> a veto with 2/3 vote of both houses.</li>
              <li>Supreme Court can declare laws <strong>unconstitutional</strong> (judicial review).</li>
              <li>Congress confirms presidential appointments (Senate) and can <strong>impeach</strong> the President.</li>
              <li>President <strong>nominates</strong> federal judges; Senate confirms.</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-3">Congress at a glance</p>
          <Table
            headers={['Body', 'Members', 'Term', 'Key power']}
            rows={[
              ['Senate', '100 (2 per state)', '6 years', 'Confirms appointments, ratifies treaties, holds impeachment trials'],
              ['House', '435 (population-based)', '2 years', 'Originates revenue bills, votes to impeach']
            ]}
          />

          <p className="font-semibold mt-3">Levels of federalism</p>
          <Table
            headers={['Power type', 'Examples']}
            rows={[
              ['Federal (delegated)', 'Coin money, declare war, regulate interstate commerce, immigration'],
              ['State (reserved)', 'Run elections, education, traffic laws, marriage, driver\'s licenses'],
              ['Concurrent (shared)', 'Tax, build roads, courts, borrow money']
            ]}
          />
        </>
      )
    },
    {
      id: 'elections',
      title: 'The Electoral System',
      content: (
        <>
          <Table
            headers={['Concept', 'Details']}
            rows={[
              ['Electoral College', '538 electors total. Win 270 to win presidency. Most states are winner-take-all.'],
              ['Primaries / caucuses', 'Parties choose nominees state by state.'],
              ['General election', 'First Tuesday after the first Monday in November every 4 years.'],
              ['Two-party system', 'Democrats and Republicans dominate, though third parties exist.'],
              ['Voter registration', 'Required in most states; eligibility: 18+, U.S. citizen.']
            ]}
          />
          <Callout kind="info" title="Popular vote vs Electoral College">
            A candidate can win the popular vote but lose the presidency (2000, 2016). Electoral votes per state = senators (2) + representatives (varies). Smaller states are slightly over-represented.
          </Callout>
        </>
      )
    },
    {
      id: 'role-of-citizen',
      title: 'Role of the Citizen',
      content: (
        <>
          <Table
            headers={['Right or duty', 'Type']}
            rows={[
              ['Vote', 'Right + civic responsibility'],
              ['Free speech, religion, assembly', 'Right (1st Amendment)'],
              ['Bear arms', 'Right (2nd Amendment)'],
              ['Trial by jury', 'Right'],
              ['Pay taxes', 'Duty'],
              ['Obey laws', 'Duty'],
              ['Serve on jury', 'Duty (when called)'],
              ['Register for Selective Service (males 18-25)', 'Duty'],
              ['Defend the country if drafted', 'Duty']
            ]}
          />
          <p className="mt-3 text-sm">Citizenship can be acquired by birth in the U.S. (jus soli), being born to U.S. citizens (jus sanguinis), or through naturalization.</p>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Federalism', def: 'Power split between national and state governments.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Bill of Rights', def: 'First 10 amendments to the Constitution.' },
      { term: 'Veto', def: 'President\'s power to reject a bill.' },
      { term: 'Impeach', def: 'House vote charging an official with misconduct (Senate then tries).' },
      { term: 'Judicial review', def: 'Supreme Court power to declare laws unconstitutional.' },
      { term: 'Electoral College', def: '538-elector body that formally elects the president.' }
    ],
    laws: [
      { name: '270 to win', desc: 'Need 270 of 538 electoral votes.' },
      { name: '2/3 override', desc: 'Congress can override a presidential veto with 2/3 vote of both houses.' },
      { name: 'Two senators per state', desc: 'Equal Senate representation regardless of population.' }
    ],
    methods: [
      { name: 'Three-branch quick recall', desc: 'Legislative makes laws · Executive enforces · Judicial interprets.' }
    ]
  },
  questions: [
    { q: 'Which branch makes laws?', type: 'mcq', choices: ['Executive', 'Judicial', 'Legislative', 'Federal Reserve'], correct: 2, difficulty: 'E', explanation: 'Legislative branch (Congress) makes laws.' },
    { q: 'How many U.S. senators are there?', type: 'math', correct: 100, difficulty: 'E', explanation: '2 per state × 50 states.' },
    { q: 'What does the Bill of Rights refer to?', type: 'mcq', choices: ['The Articles of Confederation', 'The first 10 amendments to the Constitution', 'A list of taxes', 'The Declaration'], correct: 1, difficulty: 'E', explanation: 'First 10 amendments — ratified 1791.' },
    { q: 'A president can veto a bill. Congress can override with what vote?', type: 'mcq', choices: ['Simple majority', 'Two-thirds of both houses', 'Three-fourths of states', 'Unanimous'], correct: 1, difficulty: 'M', explanation: '2/3 of each house.' },
    { q: 'How many electoral votes are needed to win the presidency?', type: 'math', correct: 270, difficulty: 'M', explanation: '270 of 538.' },
    { q: 'The 19th Amendment guaranteed:', type: 'mcq', choices: [
      'Freedom of speech',
      'The right to a jury trial',
      'Women\'s right to vote',
      'The end of slavery'
    ], correct: 2, difficulty: 'E', explanation: '19th = women\'s suffrage (1920).' },
    { q: 'Federalism means:', type: 'mcq', choices: [
      'Only the federal government has power',
      'Power is split between national and state governments',
      'States have all the power',
      'A monarchy with limited power'
    ], correct: 1, difficulty: 'M', explanation: 'Power is divided.' },
    { q: 'Judicial review was established by:', type: 'mcq', choices: ['Plessy v. Ferguson', 'Marbury v. Madison', 'Brown v. Board', 'Roe v. Wade'], correct: 1, difficulty: 'H', explanation: 'Marbury v. Madison (1803) — Supreme Court can declare laws unconstitutional.' },
    { q: 'A state government typically handles which?', type: 'mcq', choices: ['Coining money', 'Declaring war', 'Education and driver\'s licenses', 'Foreign treaties'], correct: 2, difficulty: 'M', explanation: 'Reserved (state) powers include education, traffic laws, marriage.' }
  ]
};
