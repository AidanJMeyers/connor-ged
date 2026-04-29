import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 19,
  title: 'Social Studies 3 — Civics & Government',
  subtitle: 'How U.S. government works. Constitution, branches, federalism, elections, and the role of citizens. (~50% of the GED Social Studies test — STUDY THIS HARDEST.)',
  blocks: [
    {
      id: 'why-civics',
      title: 'Why Civics is Half the Test',
      content: (
        <>
          <p>Civics and Government is approximately <strong>50% of the GED Social Studies test</strong>. If you only have time to study one chapter\'s worth of content, study this one. The questions are predictable — they ask about basic structures of U.S. government, the Constitution, and how citizens participate.</p>

          <Callout kind="info" title="The big questions to be able to answer">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>What are the three branches of government and what does each do?</li>
              <li>How does a bill become a law?</li>
              <li>What does the Constitution protect (Bill of Rights)?</li>
              <li>What are checks and balances?</li>
              <li>How are presidents and members of Congress elected?</li>
              <li>What rights and responsibilities do U.S. citizens have?</li>
              <li>What\'s the difference between federal and state powers?</li>
            </ol>
            If you can answer those seven, you\'re prepared.
          </Callout>
        </>
      )
    },
    {
      id: 'historic-basis',
      title: 'Historic Basis for the U.S. System',
      content: (
        <>
          <p>The Founders didn\'t invent democracy from scratch. They borrowed from English law, Enlightenment philosophy, and earlier colonial experience. Knowing where the ideas came from helps the system make sense.</p>
          <Table
            headers={['Influence', 'Contribution to U.S. system']}
            rows={[
              ['Magna Carta (1215)', 'Limited the English king\'s power; established due process. First major document saying even the king is subject to law.'],
              ['English Bill of Rights (1689)', 'Protected rights of subjects; established parliamentary supremacy.'],
              ['Enlightenment thinkers', 'John Locke: natural rights to "life, liberty, property"; government by consent. Montesquieu: separation of powers into branches. Rousseau: social contract.'],
              ['Mayflower Compact (1620)', 'First instance in the colonies of self-government by mutual consent.'],
              ['Declaration of Independence (1776)', 'Stated natural rights and government by consent of the governed. Justified breaking from Britain.'],
              ['Articles of Confederation (1781)', 'First attempt at federal government — too weak (no power to tax, no executive). Showed the Founders what NOT to do.'],
              ['U.S. Constitution (1787)', 'Replaced Articles. Currently in force. Often called "the world\'s oldest written constitution still in use."']
            ]}
          />

          <Callout kind="info" title="Foundational principles in the Constitution">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Popular sovereignty</strong>: power flows from the people. ("We the People" opens the Constitution.)</li>
              <li><strong>Limited government</strong>: government has only the powers granted to it.</li>
              <li><strong>Separation of powers</strong>: divided into three branches.</li>
              <li><strong>Checks and balances</strong>: each branch can limit the others.</li>
              <li><strong>Federalism</strong>: power split between national and state governments.</li>
              <li><strong>Republicanism</strong>: citizens elect representatives.</li>
              <li><strong>Individual rights</strong>: protected, especially via the Bill of Rights.</li>
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
          <p>The U.S. Constitution has three sections: a Preamble (purpose statement), seven Articles (the original structure), and 27 Amendments (later additions).</p>

          <Callout kind="info" title="The seven Articles in plain English">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Article I — Legislative branch (Congress).</li>
              <li>Article II — Executive branch (President).</li>
              <li>Article III — Judicial branch (Supreme Court).</li>
              <li>Article IV — Relationships between states (each state must respect others\' laws).</li>
              <li>Article V — How to amend the Constitution.</li>
              <li>Article VI — National supremacy ("supreme law of the land").</li>
              <li>Article VII — Ratification (how the Constitution becomes effective).</li>
            </ol>
          </Callout>

          <p className="font-semibold mt-4">The Bill of Rights — first 10 amendments (ratified 1791)</p>
          <Table
            headers={['Amendment', 'What it protects']}
            rows={[
              ['1st', 'Speech, religion, press, peaceful assembly, petition'],
              ['2nd', 'Right to bear arms'],
              ['3rd', 'No quartering soldiers in private homes'],
              ['4th', 'No unreasonable search or seizure (warrant required)'],
              ['5th', 'Due process; no double jeopardy; no self-incrimination ("plead the fifth"); eminent domain (gov\'t can take private property only with just compensation)'],
              ['6th', 'Speedy public trial, jury, attorney, confront witnesses'],
              ['7th', 'Jury trial in civil cases'],
              ['8th', 'No cruel or unusual punishment; no excessive bail'],
              ['9th', 'Rights not listed here are still retained by the people'],
              ['10th', 'Powers not given to the federal gov\'t are reserved to the states or the people']
            ]}
          />

          <Callout kind="tip" title="Other key amendments">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>13th</strong> (1865): abolished slavery</li>
              <li><strong>14th</strong> (1868): citizenship, equal protection</li>
              <li><strong>15th</strong> (1870): voting rights regardless of race</li>
              <li><strong>16th</strong> (1913): allowed federal income tax</li>
              <li><strong>17th</strong> (1913): direct election of senators (previously chosen by state legislatures)</li>
              <li><strong>18th</strong> (1919): Prohibition (banned alcohol)</li>
              <li><strong>19th</strong> (1920): women\'s suffrage</li>
              <li><strong>21st</strong> (1933): repealed Prohibition</li>
              <li><strong>22nd</strong> (1951): limits president to two terms</li>
              <li><strong>26th</strong> (1971): voting age 18</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'branches',
      title: 'The Three Branches of Government',
      content: (
        <>
          <Table
            headers={['Branch', 'Body', 'Main job', 'Length of term']}
            rows={[
              ['Legislative', 'Congress (Senate + House of Representatives)', 'Make laws', 'Senate: 6 years; House: 2 years'],
              ['Executive', 'President + Cabinet + agencies', 'Enforce laws', 'President: 4 years (max 2 terms)'],
              ['Judicial', 'Supreme Court + federal courts', 'Interpret laws', 'Lifetime appointment']
            ]}
          />

          <Callout kind="formula" title="Checks and balances — how branches limit each other">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>President can <strong>veto</strong> laws passed by Congress.</li>
              <li>Congress can <strong>override a veto</strong> with a 2/3 vote of both houses.</li>
              <li>Supreme Court can declare laws or executive actions <strong>unconstitutional</strong> (judicial review).</li>
              <li>Senate confirms presidential appointments (judges, cabinet, ambassadors).</li>
              <li>Senate ratifies treaties.</li>
              <li>House can <strong>impeach</strong> federal officials (including the president); Senate then conducts the trial.</li>
              <li>President <strong>nominates</strong> federal judges; Senate confirms them.</li>
              <li>Congress controls the budget — even the executive branch needs Congress to fund its operations.</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-4">Congress — the legislative branch in detail</p>
          <Table
            headers={['Body', 'Members', 'Term', 'Key powers']}
            rows={[
              ['Senate', '100 (2 per state, regardless of population)', '6 years', 'Confirms appointments, ratifies treaties, holds impeachment trials'],
              ['House of Representatives', '435 (allocated by population)', '2 years', 'Originates revenue (tax) bills, votes to impeach']
            ]}
          />

          <Callout kind="info" title="How a bill becomes a law">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>A bill is introduced in either the House or Senate.</li>
              <li>It goes to a committee for review and possible amendments.</li>
              <li>If the committee approves, the bill goes to the full chamber for debate and vote.</li>
              <li>If passed, it goes to the OTHER chamber for the same process.</li>
              <li>If both chambers pass DIFFERENT versions, a "conference committee" reconciles them.</li>
              <li>Once both chambers pass identical versions, it goes to the President.</li>
              <li>President signs it (becomes law) OR vetoes it (Congress can override with 2/3).</li>
            </ol>
          </Callout>

          <p className="font-semibold mt-4">Federalism — federal vs state powers</p>
          <Table
            headers={['Type of power', 'Examples']}
            rows={[
              ['Federal (delegated)', 'Coin money, declare war, regulate interstate commerce, immigration, foreign treaties, post offices'],
              ['State (reserved by 10th Amendment)', 'Run elections, education, traffic laws, marriage, driver\'s licenses, intra-state commerce'],
              ['Concurrent (shared)', 'Tax, build roads, courts, borrow money, establish public health rules']
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
              ['Electoral College', '538 electors total. To win the presidency, a candidate needs 270 electoral votes. Most states are winner-take-all (the winner of the state\'s popular vote gets ALL its electors).'],
              ['Number of electors per state', 'Equal to the state\'s representatives + senators. So states with bigger populations have more electors, but every state has at least 3 (because every state has 2 senators and at least 1 representative).'],
              ['Primaries / caucuses', 'Each party chooses its nominee state by state during spring of the election year.'],
              ['General election', 'First Tuesday after the first Monday in November every 4 years.'],
              ['Two-party system', 'Democrats and Republicans dominate. Third parties exist but rarely win major offices.'],
              ['Voter registration', 'Required in most states. Eligibility: 18+ on Election Day, U.S. citizen.']
            ]}
          />

          <Callout kind="info" title="Popular vote vs Electoral College — they can disagree">
            <p>A candidate can win the popular vote but lose the presidency. This has happened five times: 1824, 1876, 1888, 2000 (Bush vs Gore), and 2016 (Trump vs Clinton).</p>
            <p>This happens because of the winner-take-all structure of most states + the constitutional minimum of 3 electors per state. Smaller states are slightly over-represented.</p>
            <p>The GED may ask whether the popular vote and Electoral College can disagree (yes), how electors are allocated (representatives + senators), or how many electors are needed to win (270).</p>
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
              ['Vote', 'Right (and civic responsibility)'],
              ['Free speech, religion, assembly', 'Right (1st Amendment)'],
              ['Bear arms', 'Right (2nd Amendment)'],
              ['Due process / trial by jury', 'Right (5th, 6th, 7th Amendments)'],
              ['Pay taxes', 'Duty'],
              ['Obey laws', 'Duty'],
              ['Serve on jury when called', 'Duty'],
              ['Register for Selective Service (males 18-25)', 'Duty'],
              ['Defend the country if drafted', 'Duty'],
              ['Attend school (if minor)', 'Duty in most states']
            ]}
          />

          <Callout kind="info" title="How U.S. citizenship is acquired">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Birth in the U.S.</strong> ("jus soli" — right of soil). Born here = citizen.</li>
              <li><strong>Birth to U.S. citizen parents abroad</strong> ("jus sanguinis" — right of blood). Born to U.S. citizens, you\'re a citizen wherever you\'re born.</li>
              <li><strong>Naturalization</strong> — for immigrants who meet requirements: lawful permanent residence (usually 5 years), good moral character, knowledge of English and U.S. civics, oath of allegiance.</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="Civic engagement beyond voting">
            Voting is essential, but citizens can also contact representatives, attend town halls, serve on local boards, run for office, volunteer for campaigns, organize for causes, peacefully protest, and join political parties. The GED sometimes asks about these forms of participation.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Federalism', def: 'Power split between national and state governments.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Bill of Rights', def: 'First 10 amendments to the Constitution.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Veto', def: 'President\'s power to reject a bill passed by Congress.' },
      { term: 'Impeach', def: 'House vote charging a federal official with misconduct (Senate then tries).' },
      { term: 'Judicial review', def: 'Supreme Court power to declare laws unconstitutional.' },
      { term: 'Electoral College', def: '538-elector body that formally elects the president; 270 needed to win.' },
      { term: 'Naturalization', def: 'Process by which a non-citizen becomes a citizen.' },
      { term: 'Due process', def: 'Government must follow fair procedures when affecting an individual\'s rights.' }
    ],
    laws: [
      { name: '270 to win', desc: 'Need 270 of 538 electoral votes to be elected president.' },
      { name: '2/3 override', desc: 'Congress can override a presidential veto with 2/3 vote of both houses.' },
      { name: 'Two senators per state', desc: 'Equal Senate representation regardless of population.' },
      { name: '435 representatives', desc: 'House size is fixed; allocated by state population.' },
      { name: '4-year president, 2-term limit', desc: '22nd Amendment limits to two elected terms.' }
    ],
    methods: [
      { name: 'Three-branch quick recall', desc: 'Legislative MAKES laws · Executive ENFORCES · Judicial INTERPRETS.' },
      { name: 'Federalism quick test', desc: 'If a power is something the federal government does (war, money, immigration), it\'s federal. Education, marriage, traffic — state. Taxes — both.' }
    ]
  },
  questions: [
    { q: 'Which branch makes laws?', type: 'mcq', choices: ['Executive', 'Judicial', 'Legislative', 'Federal Reserve'], correct: 2, difficulty: 'E', explanation: 'Legislative branch (Congress) makes laws.' },
    { q: 'How many U.S. senators are there?', type: 'math', correct: 100, difficulty: 'E', explanation: '2 per state × 50 states.' },
    { q: 'What does the Bill of Rights refer to?', type: 'mcq', choices: ['The Articles of Confederation', 'The first 10 amendments to the Constitution', 'A list of taxes', 'The Declaration'], correct: 1, difficulty: 'E', explanation: 'First 10 amendments — ratified 1791.' },
    { q: 'A president can veto a bill. Congress can override with what vote?', type: 'mcq', choices: ['Simple majority', 'Two-thirds of both houses', 'Three-fourths of states', 'Unanimous'], correct: 1, difficulty: 'M', explanation: '2/3 of each house.' },
    { q: 'How many electoral votes are needed to win the presidency?', type: 'math', correct: 270, difficulty: 'M', explanation: '270 of 538 = majority.' },
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
    ], correct: 1, difficulty: 'M', explanation: 'Power divided between levels.' },
    { q: 'Judicial review was established by:', type: 'mcq', choices: ['Plessy v. Ferguson', 'Marbury v. Madison', 'Brown v. Board', 'Roe v. Wade'], correct: 1, difficulty: 'H', explanation: 'Marbury v. Madison (1803) established the Supreme Court\'s power to declare laws unconstitutional.' },
    { q: 'A state government typically handles which?', type: 'mcq', choices: ['Coining money', 'Declaring war', 'Education and driver\'s licenses', 'Foreign treaties'], correct: 2, difficulty: 'M', explanation: 'Reserved (state) powers include education, traffic laws, marriage.' },
    { q: 'The 1st Amendment protects all of these EXCEPT:', type: 'mcq', choices: ['Speech', 'Religion', 'Right to bear arms', 'Peaceful assembly'], correct: 2, difficulty: 'M', explanation: 'Right to bear arms is in the 2nd Amendment, not the 1st.' },
    { q: 'A representative\'s term in the House is:', type: 'math', correct: 2, difficulty: 'E', explanation: 'House members serve 2 years; senators serve 6.' }
  ]
};
