import React from 'react';
import { Callout, Table, Term, Pill } from '../components/Visual.jsx';

export default {
  id: 18,
  title: 'Social Studies 2 — U.S. History',
  subtitle: 'From colonial founding through the Civil Rights era — major events, themes, and turning points.',
  blocks: [
    {
      id: 'colonial-revolution',
      title: 'Exploration, Colonialism & the American Revolution',
      content: (
        <>
          <Table
            headers={['Era', 'Key events / dates']}
            rows={[
              ['Exploration', 'Columbus 1492 · Jamestown 1607 · Plymouth 1620'],
              ['13 colonies', 'New England, Middle, Southern — diverse economies & religions'],
              ['Triangular trade & slavery', 'Goods, enslaved Africans, raw materials traded across Atlantic'],
              ['French and Indian War', '1754-1763 — British victory, but huge debt → taxes on colonies'],
              ['Stamp Act (1765), Tea Act (1773), Boston Massacre (1770), Boston Tea Party (1773)', 'Tensions between colonies and Britain rise'],
              ['Declaration of Independence', 'July 4, 1776 — Jefferson; "all men are created equal"'],
              ['Revolutionary War', '1775-1783 — Lexington/Concord, Saratoga (turning point), Yorktown (1781)'],
              ['Treaty of Paris', '1783 — Britain recognizes U.S. independence'],
              ['Articles of Confederation', '1781-1789 — weak federal gov\'t — replaced by Constitution'],
              ['U.S. Constitution', '1787 — ratified 1788; effective 1789']
            ]}
          />
          <Callout kind="info" title="Why the Revolution happened">
            <strong>"No taxation without representation."</strong> Colonists were taxed by Parliament but had no MPs. Combined with restrictions on trade and frontier expansion, this drove the break.
          </Callout>
        </>
      )
    },
    {
      id: 'westward-civil-war',
      title: 'Westward Expansion, Civil War & Reconstruction',
      content: (
        <>
          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Louisiana Purchase', '1803 — Jefferson buys territory from France, doubling U.S. size'],
              ['Manifest Destiny', '19th c. belief that the U.S. was destined to expand to Pacific'],
              ['Trail of Tears', '1838 — forced relocation of Cherokee and other tribes'],
              ['Mexican-American War', '1846-1848 — U.S. gains California, Texas, Southwest'],
              ['Compromises over slavery', 'Missouri (1820), Compromise of 1850, Kansas-Nebraska (1854)'],
              ['Civil War', '1861-1865 — North (Union) vs South (Confederacy)'],
              ['Emancipation Proclamation', '1863 — freed enslaved people in Confederate states'],
              ['Gettysburg', '1863 — Union turning point + Lincoln\'s address'],
              ['13th, 14th, 15th Amendments', 'End slavery (13), citizenship & equal protection (14), Black male suffrage (15)'],
              ['Reconstruction', '1865-1877 — rebuilding South, mixed results']
            ]}
          />
          <Callout kind="tip" title="Causes of the Civil War — the big three">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Slavery</strong>: economic, social, and moral conflict — the central cause.</li>
              <li><strong>States' rights</strong> vs federal authority.</li>
              <li><strong>Sectional differences</strong>: Industrial North vs agrarian South.</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'industrial-progressive',
      title: 'Industrialization, Immigration & the Progressive Era',
      content: (
        <>
          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Industrial Revolution (U.S.)', 'Late 1800s — railroads, steel (Carnegie), oil (Rockefeller), electricity (Edison)'],
              ['Robber barons / monopolies', 'Carnegie, Rockefeller, J.P. Morgan, Vanderbilt — concentrated wealth'],
              ['Labor movement', 'Strikes (Pullman 1894), unions (AFL, Knights of Labor), 8-hour day push'],
              ['Mass immigration', '1870s-1920s — Ellis Island; Eastern/Southern Europeans, Chinese (CA)'],
              ['Urbanization', 'Cities boom; tenements; "How the Other Half Lives"'],
              ['Progressive Era', '1890s-1920s — anti-corruption, regulation, civil rights early steps'],
              ['Key Progressive laws', 'Pure Food and Drug Act (1906), antitrust enforcement, Federal Reserve (1913)'],
              ['19th Amendment', '1920 — women\'s suffrage'],
              ['18th Amendment / Prohibition', '1919-1933 — banned alcohol, repealed by 21st Amendment']
            ]}
          />
        </>
      )
    },
    {
      id: 'world-power',
      title: 'The U.S. as an Emerging World Power',
      content: (
        <>
          <Table
            headers={['Era', 'Key facts']}
            rows={[
              ['Spanish-American War', '1898 — gained Puerto Rico, Guam, Philippines'],
              ['World War I', '1914-1918; U.S. entered 1917 — "The war to end all wars"'],
              ['Treaty of Versailles & League of Nations', '1919 — U.S. did NOT join the League'],
              ['Roaring Twenties', 'Economic boom, jazz, women\'s rights, mass consumerism'],
              ['Great Depression', '1929 stock market crash → 25% unemployment'],
              ['New Deal (FDR)', 'Social Security, FDIC, SEC, public works (TVA, WPA, CCC)'],
              ['World War II', '1939-1945; U.S. entered Dec 1941 (Pearl Harbor); Allies vs Axis'],
              ['Holocaust', '6 million Jews + millions others murdered by Nazi Germany'],
              ['D-Day', 'June 6, 1944 — Allied invasion of Normandy'],
              ['Atomic bombs', 'Hiroshima/Nagasaki Aug 1945 — Japan surrenders']
            ]}
          />
        </>
      )
    },
    {
      id: 'cold-war-civil-rights',
      title: 'The Cold War & Civil Rights Era',
      content: (
        <>
          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Cold War', '1947-1991 — U.S. (capitalism/democracy) vs USSR (communism)'],
              ['Containment', 'Truman Doctrine, Marshall Plan, NATO formed 1949'],
              ['Korean War', '1950-1953 — divided North/South Korea'],
              ['Cuban Missile Crisis', '1962 — closest the world came to nuclear war'],
              ['Vietnam War', '1955-1975 — U.S. attempt to stop communism in S. Vietnam; ended in withdrawal'],
              ['Brown v. Board of Education', '1954 — segregated schools unconstitutional'],
              ['Montgomery Bus Boycott', '1955-1956 — Rosa Parks, MLK rises to prominence'],
              ['March on Washington', '1963 — MLK\'s "I Have a Dream"'],
              ['Civil Rights Act 1964', 'Banned discrimination in public places, employment'],
              ['Voting Rights Act 1965', 'Outlawed voting discrimination'],
              ['Fall of Berlin Wall', '1989 — symbol of Cold War end'],
              ['USSR collapse', '1991']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Manifest Destiny', def: '19th-c. belief that the U.S. was destined to expand to the Pacific.' },
      { term: 'Reconstruction', def: 'The 1865-1877 era of rebuilding the South after the Civil War.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Suffrage', def: 'Right to vote.' },
      { term: 'Containment', def: 'Cold War policy of preventing communist expansion.' },
      { term: 'Robber baron', def: 'Wealthy industrialist of the late 1800s, often accused of exploitation.' },
      { term: 'New Deal', def: 'FDR\'s 1930s programs to fight the Great Depression.' }
    ],
    laws: [
      { name: '13th Amendment', desc: 'Abolished slavery (1865).' },
      { name: '14th Amendment', desc: 'Citizenship & equal protection (1868).' },
      { name: '15th Amendment', desc: 'Voting rights regardless of race (1870).' },
      { name: '19th Amendment', desc: 'Women\'s suffrage (1920).' },
      { name: 'Civil Rights Act 1964', desc: 'Prohibited discrimination based on race, color, religion, sex, national origin.' },
      { name: 'Voting Rights Act 1965', desc: 'Banned racial discrimination in voting.' }
    ],
    methods: [
      { name: 'Date anchor', desc: 'When in doubt, anchor: 1776 Declaration · 1865 end of Civil War · 1929 Depression · 1945 WWII end · 1964 Civil Rights Act.' }
    ]
  },
  questions: [
    { q: 'The Declaration of Independence was signed in what year?', type: 'math', correct: 1776, difficulty: 'E', explanation: 'July 4, 1776.' },
    { q: 'Which document granted citizenship to formerly enslaved people?', type: 'mcq', choices: ['10th Amendment', '13th Amendment', '14th Amendment', '15th Amendment'], correct: 2, difficulty: 'M', explanation: '14th = citizenship + equal protection.' },
    { q: 'The Louisiana Purchase doubled the size of the U.S. and was bought from:', type: 'mcq', choices: ['Britain', 'Spain', 'France', 'Mexico'], correct: 2, difficulty: 'M', explanation: 'Jefferson bought it from Napoleon\'s France in 1803.' },
    { q: 'The Civil War ended in what year?', type: 'math', correct: 1865, difficulty: 'E', explanation: 'April 1865 — Lee surrendered at Appomattox.' },
    { q: 'Which event triggered U.S. entry into WWII?', type: 'mcq', choices: ['Sinking of the Lusitania', 'Pearl Harbor', 'D-Day', 'Cuban Missile Crisis'], correct: 1, difficulty: 'E', explanation: 'Japan attacked Pearl Harbor on Dec 7, 1941.' },
    { q: 'What was the central economic conflict between the North and South before the Civil War?', type: 'mcq', choices: [
      'Tariffs only',
      'Slavery, especially in expanding territories',
      'Whether to join the League of Nations',
      'Currency standards'
    ], correct: 1, difficulty: 'M', explanation: 'Slavery in new territories was the central, escalating conflict.' },
    { q: 'The 1954 Brown v. Board of Education decision:', type: 'mcq', choices: [
      'Allowed segregated schools as long as they were "equal"',
      'Banned segregation in public schools',
      'Established the right to vote',
      'Ended Reconstruction'
    ], correct: 1, difficulty: 'M', explanation: 'Brown overturned "separate but equal" in education.' },
    { q: 'The Cold War was a long political/military rivalry between the U.S. and:', type: 'mcq', choices: ['China', 'Britain', 'Soviet Union (USSR)', 'Germany'], correct: 2, difficulty: 'E', explanation: 'U.S. (capitalism) vs USSR (communism).' },
    { q: 'Which is true about the Articles of Confederation?', type: 'mcq', choices: [
      'They created a strong central government',
      'They were the first U.S. constitution but had a weak federal government',
      'They permitted slavery',
      'They started the Revolutionary War'
    ], correct: 1, difficulty: 'M', explanation: 'Articles (1781-89) had no taxing power, no executive — replaced by Constitution.' },
    { q: 'Manifest Destiny is the idea that:', type: 'mcq', choices: [
      'God determined the outcome of elections',
      'The U.S. was destined to expand across the continent',
      'America must lead globally after WWII',
      'Industrialization was inevitable'
    ], correct: 1, difficulty: 'M', explanation: 'A 19th-century belief in westward expansion as a God-given destiny.' }
  ]
};
