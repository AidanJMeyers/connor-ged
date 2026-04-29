import React from 'react';
import { Callout, Table, Term, Pill } from '../components/Visual.jsx';

export default {
  id: 18,
  title: 'Social Studies 2 — U.S. History',
  subtitle: 'From colonial founding through the Civil Rights era. The big stories, key dates, and how each era shaped the next.',
  blocks: [
    {
      id: 'why-history',
      title: 'How to Study U.S. History for the GED',
      content: (
        <>
          <p>U.S. history is about <strong>20% of the Social Studies test</strong> — usually 6-8 questions. The GED won\'t ask trivia ("what was Lincoln\'s middle name?") — it asks why things happened, what changed, and how to interpret historical documents.</p>

          <Callout kind="info" title="The smartest way to study">
            Don\'t memorize random dates. Instead, learn the BIG STORY of each era — what was the conflict, who were the players, how did it end? Once you have the narrative, the dates and names hang on it. The five eras below cover essentially everything tested.
          </Callout>
        </>
      )
    },
    {
      id: 'colonial-revolution',
      title: 'Era 1: Exploration, Colonialism & the American Revolution (1492–1789)',
      content: (
        <>
          <p>The big story: Europeans (especially the British) settled in North America, built 13 prosperous colonies, then revolted against British rule and created a new kind of government.</p>

          <Table
            headers={['Event / Topic', 'Key facts']}
            rows={[
              ['Columbus, 1492', 'Voyages on behalf of Spain triggered massive European exploration of the Americas. Devastating impact on Native populations through disease and conquest.'],
              ['Jamestown, 1607', 'First permanent English colony, in Virginia. Tobacco-based economy.'],
              ['Plymouth, 1620', 'Pilgrims; the Mayflower Compact, an early example of self-governance.'],
              ['13 colonies', 'New England (Mass., Conn., R.I., N.H.) — small farms, shipping. Middle (NY, NJ, Penn., Del.) — diverse, religiously tolerant. Southern (Md., Va., Carolinas, Ga.) — plantations, slavery.'],
              ['Triangular trade & slavery', 'Goods, enslaved Africans, and raw materials traded across the Atlantic. Slavery was central to Southern economy.'],
              ['French and Indian War, 1754-1763', 'Britain defeats France for North America, gaining Canada. But the war left Britain in massive debt — leading to taxes on the colonies.'],
              ['Stamp Act 1765, Townshend Acts, Tea Act 1773', 'British attempts to tax colonies without their consent. "No taxation without representation" became the rallying cry.'],
              ['Boston Massacre 1770, Boston Tea Party 1773', 'Escalating tensions. The Tea Party — colonists dumped 342 chests of tea into Boston Harbor.'],
              ['Declaration of Independence, July 4, 1776', 'Drafted by Thomas Jefferson. Declared independence from Britain. Famous line: "all men are created equal" and have unalienable rights to "life, liberty, and the pursuit of happiness."'],
              ['Revolutionary War, 1775-1783', 'Lexington/Concord (1775, "shot heard \'round the world"); Saratoga (1777, turning point that brought France in as ally); Yorktown (1781, British surrender).'],
              ['Treaty of Paris, 1783', 'Britain recognized U.S. independence.'],
              ['Articles of Confederation, 1781-1789', 'First U.S. constitution — but federal government too weak (no power to tax, no executive). Replaced by U.S. Constitution.'],
              ['U.S. Constitution, 1787 (ratified 1788)', 'Created the current system: 3 branches, federal-state split, Bill of Rights added 1791.']
            ]}
          />

          <Callout kind="info" title="Why the Revolution happened — the deeper story">
            <p>Britain didn\'t suddenly become tyrannical in the 1760s. The colonies had been left mostly alone for 150 years (an unofficial policy called "salutary neglect"). After the French and Indian War, Britain was deeply in debt and decided the colonies should help pay it off through new taxes.</p>
            <p>The colonies objected because they had no representatives in the British Parliament — "no taxation without representation." Combined with restrictions on westward expansion (Proclamation of 1763) and on trade, this drove the break.</p>
            <p>The Revolution wasn\'t inevitable. As late as 1774, most colonists wanted reconciliation — they just wanted the same rights as British subjects. Independence emerged when reconciliation failed.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'westward-civil-war',
      title: 'Era 2: Westward Expansion, the Civil War & Reconstruction (1789–1877)',
      content: (
        <>
          <p>The big story: the U.S. doubled, then tripled in size. The country split apart over slavery in those new territories, fought a brutal civil war, freed enslaved people, and tried (incompletely) to rebuild the South.</p>

          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Louisiana Purchase, 1803', 'Jefferson bought territory from France for $15M, doubling the size of the U.S. Includes most of the modern Midwest.'],
              ['Lewis and Clark Expedition, 1804-06', 'Explored the new territory. Mapped routes, documented Native nations, plants, animals.'],
              ['War of 1812', 'U.S. vs Britain again. Stalemate, but boosted American national identity.'],
              ['Manifest Destiny', '19th-century belief that the U.S. was destined to expand to the Pacific Ocean. Used to justify expansion at the expense of Native nations and Mexico.'],
              ['Trail of Tears, 1838-39', 'Andrew Jackson\'s forced relocation of Cherokee and other tribes from the Southeast. Thousands died on the journey to Oklahoma.'],
              ['Mexican-American War, 1846-48', 'U.S. gained California, the Southwest, and Texas after defeating Mexico. Massive territorial expansion.'],
              ['Compromises over slavery', 'Missouri Compromise (1820): Missouri admitted as slave state, Maine as free, line drawn at 36°30′. Compromise of 1850: California free; Fugitive Slave Act. Kansas-Nebraska Act (1854): popular sovereignty in new territories — fighting in "Bleeding Kansas."'],
              ['Lincoln elected, 1860', 'Republican opposed to slavery\'s expansion. Triggered Southern secession.'],
              ['Civil War, 1861-1865', 'Union (North) vs Confederacy (South). Bull Run, Antietam, Gettysburg (1863, turning point), Vicksburg (1863). Total deaths: over 600,000 — more than any other U.S. war.'],
              ['Emancipation Proclamation, 1863', 'Lincoln declared enslaved people in Confederate states "forever free." More symbolic than immediately effective, but reframed the war as about slavery.'],
              ['Gettysburg Address, 1863', 'Lincoln\'s short, famous speech. "Government of the people, by the people, for the people."'],
              ['Lee surrenders, April 1865', 'Confederate General Lee surrenders at Appomattox. War ends.'],
              ['Lincoln assassinated, April 1865', 'Just days after the war ends. John Wilkes Booth.'],
              ['13th Amendment, 1865', 'Abolished slavery throughout the U.S.'],
              ['14th Amendment, 1868', 'Citizenship to all born in U.S.; equal protection under law.'],
              ['15th Amendment, 1870', 'Voting rights regardless of race (in practice, often blocked by Southern states).'],
              ['Reconstruction, 1865-1877', 'Federal effort to rebuild the South and integrate freed African Americans. Mixed results — ended when federal troops withdrew. Jim Crow laws followed.']
            ]}
          />

          <Callout kind="tip" title="Causes of the Civil War — the big three">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Slavery</strong>: economic, social, and moral conflict — the central cause. Whether it would expand into new territories was the breaking point.</li>
              <li><strong>States\' rights</strong> vs federal authority. Southern states argued they had the right to secede; the federal government said they did not.</li>
              <li><strong>Sectional differences</strong>: the industrial, urban North had a different economy and culture from the agrarian, plantation-based South.</li>
            </ol>
            <em>Modern historians overwhelmingly agree that slavery was the central cause. "States\' rights" was primarily about the right to maintain slavery.</em>
          </Callout>
        </>
      )
    },
    {
      id: 'industrial-progressive',
      title: 'Era 3: Industrialization, Immigration & the Progressive Era (1877–1920)',
      content: (
        <>
          <p>The big story: the U.S. transformed from an agricultural nation into the world\'s largest industrial economy. Massive immigration filled cities. Wealth concentrated in the hands of "robber barons." Workers organized. Women won the right to vote. Government began regulating big business.</p>

          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Industrial Revolution (U.S.)', 'Late 1800s: railroads (transcontinental completed 1869), steel (Andrew Carnegie), oil (John D. Rockefeller), electricity (Thomas Edison), telephones (Alexander Graham Bell).'],
              ['Robber barons / monopolies', 'Carnegie, Rockefeller, J.P. Morgan, Vanderbilt — concentrated enormous wealth and power. Critics called them robber barons; their defenders called them captains of industry.'],
              ['Labor movement', 'Workers organized in response to unsafe conditions and low wages. Strikes: Pullman (1894), Homestead (1892). Unions: Knights of Labor, AFL (Samuel Gompers).'],
              ['Mass immigration, 1870s-1920s', 'Millions arrived through Ellis Island (NYC) and Angel Island (San Francisco). Predominantly Eastern and Southern Europeans (Italians, Poles, Russian Jews); Chinese in California (faced 1882 Chinese Exclusion Act).'],
              ['Urbanization', 'Cities exploded: NYC, Chicago, Pittsburgh. Tenement housing. Jacob Riis\'s "How the Other Half Lives" (1890) documented poverty.'],
              ['Progressive Era, 1890s-1920s', 'Reform movement against corruption, monopolies, unsafe products. "Muckrakers" — investigative journalists exposing wrongdoing.'],
              ['Sherman Antitrust Act, 1890', 'First federal law against monopolies. Used against Standard Oil and others.'],
              ['Progressive laws', 'Pure Food and Drug Act (1906) — created the FDA. Federal Reserve Act (1913) — created modern central bank. Income tax (16th Amendment, 1913).'],
              ['Women\'s suffrage', 'Movement built for decades. 19th Amendment ratified August 1920 — women got the right to vote.'],
              ['Prohibition', '18th Amendment (1919) banned alcohol. Repealed by 21st Amendment (1933) after a chaotic decade of speakeasies and organized crime.']
            ]}
          />
        </>
      )
    },
    {
      id: 'world-power',
      title: 'Era 4: The U.S. as an Emerging World Power (1900–1945)',
      content: (
        <>
          <p>The big story: the U.S. went from regional power to global superpower. Two world wars, the Great Depression, and the rise of the modern federal government.</p>

          <Table
            headers={['Era / Topic', 'Key facts']}
            rows={[
              ['Spanish-American War, 1898', 'Brief war with Spain. U.S. gained Puerto Rico, Guam, the Philippines, and effective control of Cuba. Marked U.S. emergence as imperial power.'],
              ['World War I, 1914-1918', '"The Great War." Allies (UK, France, Russia, U.S.) vs Central Powers (Germany, Austria-Hungary, Ottoman Empire). U.S. entered 1917 after German submarine attacks on shipping. New industrial-scale warfare: trenches, machine guns, poison gas.'],
              ['Treaty of Versailles, 1919', 'Ended WWI. Punished Germany harshly (reparations, territorial losses) — sowed seeds of WWII. Created the League of Nations.'],
              ['League of Nations failure', 'U.S. Senate refused to ratify Treaty of Versailles. The U.S. did NOT join the League — weakening it.'],
              ['Roaring Twenties', 'Economic boom. Jazz, flappers, mass consumerism, automobiles, radio. Also: rise of organized crime (Prohibition), nativism, and the second Ku Klux Klan.'],
              ['Stock Market Crash, October 1929', 'Wall Street collapse triggered the Great Depression. By 1933, ~25% unemployment. Banks failing. Soup lines. The "Dust Bowl" devastated the Plains.'],
              ['New Deal under FDR (Franklin D. Roosevelt), 1933-39', 'Massive expansion of federal government. Created: Social Security, FDIC (deposit insurance), SEC (stock market regulation), and public works programs (TVA, WPA, CCC). Modern American social safety net.'],
              ['World War II, 1939-1945', 'Allies (UK, U.S., USSR, China, France) vs Axis (Nazi Germany, Italy, Japan). Sparked by Germany\'s invasion of Poland in September 1939. U.S. entered after Japan attacked Pearl Harbor on December 7, 1941.'],
              ['Holocaust', 'Systematic genocide by Nazi Germany. Six million Jews murdered, plus millions of Roma, disabled people, Slavs, political opponents, and gay men. Liberation of camps in 1945 revealed the scope.'],
              ['D-Day, June 6, 1944', 'Allied invasion of Nazi-occupied France via the Normandy beaches. Largest amphibious assault in history. Began liberation of Western Europe.'],
              ['Atomic bombs, August 1945', 'U.S. dropped atomic bombs on Hiroshima (Aug 6) and Nagasaki (Aug 9). Japan surrendered. WWII ended. Beginning of the nuclear age.']
            ]}
          />

          <Callout kind="info" title="Why the New Deal was a turning point">
            Before the New Deal, federal government was small. Most regulation was at the state level. Under FDR, the federal government became the major player it is today: regulating the economy, providing retirement income (Social Security), insuring bank deposits, building infrastructure. This was the birth of the modern American welfare state.
          </Callout>
        </>
      )
    },
    {
      id: 'cold-war-civil-rights',
      title: 'Era 5: Cold War & the Civil Rights Era (1945-present, focus on 1945-1975)',
      content: (
        <>
          <p>The big story: 50-year rivalry with the Soviet Union shapes American foreign policy. Domestically, African Americans (and women, and others) win major civil rights victories. The U.S. becomes the dominant global economy.</p>

          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Cold War', '1947-1991. U.S. (capitalism, democracy) vs USSR (communism, one-party state). No direct military conflict — but proxy wars, arms race, space race, espionage.'],
              ['Containment doctrine', 'Truman Doctrine (1947): U.S. would help any country resisting communism. Marshall Plan (1948): massive aid to rebuild Western Europe. NATO (1949): military alliance of Western nations.'],
              ['Korean War, 1950-1953', 'U.S./UN vs North Korea (and China). Ended in armistice — Korea remains divided at the 38th parallel.'],
              ['McCarthyism, early 1950s', 'Senator Joseph McCarthy led a hunt for alleged communists in government, Hollywood, etc. Many lives ruined; eventually discredited.'],
              ['Cuban Missile Crisis, October 1962', '13 days when the world came closest to nuclear war. USSR placed missiles in Cuba; U.S. blockaded the island. Ended in negotiated withdrawal.'],
              ['Vietnam War, 1955-1975 (U.S. heavy involvement 1964-73)', 'U.S. attempt to prevent communist takeover of South Vietnam. Massively unpopular at home. Ended in U.S. withdrawal and communist victory.'],
              ['Brown v. Board of Education, 1954', 'U.S. Supreme Court unanimously ruled segregated schools unconstitutional. Overturned "separate but equal" doctrine from Plessy v. Ferguson (1896).'],
              ['Montgomery Bus Boycott, 1955-56', 'Sparked when Rosa Parks refused to give up her bus seat. Year-long boycott led to desegregation of Montgomery buses. Brought Martin Luther King Jr. to national attention.'],
              ['March on Washington, 1963', '250,000 people gathered. MLK\'s "I Have a Dream" speech.'],
              ['Civil Rights Act, 1964', 'Banned discrimination based on race, color, religion, sex, or national origin in public accommodations and employment.'],
              ['Voting Rights Act, 1965', 'Banned racial discrimination in voting. Federal oversight of elections in places with history of voter suppression.'],
              ['MLK assassinated, 1968', 'Memphis. Massive shock. Riots in many cities.'],
              ['Watergate, 1972-74', 'Nixon administration\'s burglary at Democratic Party HQ. Cover-up exposed. Nixon resigned August 1974 — the only president ever to resign.'],
              ['Fall of Berlin Wall, 1989', 'Berlin Wall (built 1961) had divided East and West Berlin. Its fall symbolized the end of the Cold War.'],
              ['USSR dissolves, 1991', 'Soviet Union breaks into Russia and 14 other independent countries. End of the Cold War.']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Manifest Destiny', def: '19th-century belief that the U.S. was destined to expand to the Pacific.' },
      { term: 'Reconstruction', def: 'The 1865-1877 era of rebuilding the South after the Civil War.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Suffrage', def: 'Right to vote.' },
      { term: 'Containment', def: 'Cold War policy of preventing communist expansion.' },
      { term: 'Robber baron', def: 'Wealthy industrialist of the late 1800s, often accused of exploitation.' },
      { term: 'New Deal', def: 'FDR\'s 1930s programs to fight the Great Depression.' },
      { term: 'Cold War', def: '1947-1991 rivalry between U.S. and USSR — no direct military combat but pervasive global competition.' },
      { term: 'Jim Crow', def: 'Late-19th and 20th century laws enforcing racial segregation in the South.' }
    ],
    laws: [
      { name: '13th Amendment (1865)', desc: 'Abolished slavery.' },
      { name: '14th Amendment (1868)', desc: 'Citizenship & equal protection.' },
      { name: '15th Amendment (1870)', desc: 'Voting rights regardless of race.' },
      { name: '19th Amendment (1920)', desc: 'Women\'s suffrage.' },
      { name: 'Civil Rights Act (1964)', desc: 'Prohibited discrimination based on race, color, religion, sex, or national origin.' },
      { name: 'Voting Rights Act (1965)', desc: 'Banned racial discrimination in voting.' }
    ],
    methods: [
      { name: 'Date anchors', desc: '1492 Columbus · 1607 Jamestown · 1776 Declaration · 1865 end of Civil War · 1929 Great Depression begins · 1945 WWII ends · 1964 Civil Rights Act · 1989 Berlin Wall falls.' }
    ]
  },
  questions: [
    { q: 'The Declaration of Independence was signed in what year?', type: 'math', correct: 1776, difficulty: 'E', explanation: 'July 4, 1776.' },
    { q: 'Which document granted citizenship to formerly enslaved people?', type: 'mcq', choices: ['10th Amendment', '13th Amendment', '14th Amendment', '15th Amendment'], correct: 2, difficulty: 'M', explanation: '14th = citizenship + equal protection.' },
    { q: 'The Louisiana Purchase doubled the U.S. size and was bought from:', type: 'mcq', choices: ['Britain', 'Spain', 'France', 'Mexico'], correct: 2, difficulty: 'M', explanation: 'Jefferson bought it from Napoleon\'s France in 1803.' },
    { q: 'The Civil War ended in what year?', type: 'math', correct: 1865, difficulty: 'E', explanation: 'April 1865 — Lee surrendered at Appomattox.' },
    { q: 'Which event triggered U.S. entry into WWII?', type: 'mcq', choices: ['Sinking of the Lusitania', 'Pearl Harbor', 'D-Day', 'Cuban Missile Crisis'], correct: 1, difficulty: 'E', explanation: 'Japan attacked Pearl Harbor on Dec 7, 1941.' },
    { q: 'What was the central economic conflict between the North and South before the Civil War?', type: 'mcq', choices: [
      'Tariffs only',
      'Slavery, especially in expanding territories',
      'Whether to join the League of Nations',
      'Currency standards'
    ], correct: 1, difficulty: 'M', explanation: 'Slavery in new territories was the central conflict.' },
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
    ], correct: 1, difficulty: 'M', explanation: 'A 19th-century belief in westward expansion as a God-given destiny.' },
    { q: 'The New Deal was a response to:', type: 'mcq', choices: ['World War I', 'The Great Depression', 'The Civil War', 'The Cold War'], correct: 1, difficulty: 'E', explanation: 'FDR\'s programs addressed the 1929 economic collapse.' }
  ]
};
