import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 21,
  title: 'Social Studies 5 — Geography & the World',
  subtitle: 'Early civilizations through globalization, plus humans and the environment.',
  blocks: [
    {
      id: 'why-geography',
      title: 'Why World History Matters for the GED',
      content: (
        <>
          <p>About <strong>15% of the GED Social Studies test</strong> covers world geography and history. The GED isn\'t looking for trivia about every dynasty or empire — it\'s looking for major patterns: when civilizations rose, what drove them, how they connected, and how environment shapes human life.</p>
          <p>This chapter is broad. Don\'t panic about details — focus on the big stories of each era.</p>
        </>
      )
    },
    {
      id: 'early-civ',
      title: 'Early Civilizations',
      content: (
        <>
          <p>The first civilizations appeared independently in several places between roughly 3500 BCE and 1500 BCE. They share a striking pattern: all clustered around <strong>major river valleys</strong>, where reliable water made agriculture possible, which allowed permanent settlement, which led to specialization, which led to government, religion, writing, and division of labor.</p>
          <Table
            headers={['Civilization', 'Era', 'Region', 'Key contributions']}
            rows={[
              ['Mesopotamia / Sumer', '~3500-2000 BCE', 'Tigris-Euphrates rivers (modern Iraq)', 'Cuneiform writing (first writing system), wheel, sailboat, irrigation, Code of Hammurabi (early law code)'],
              ['Egypt', '~3000-30 BCE', 'Nile River', 'Hieroglyphics, pyramids, mummification, 365-day calendar, advanced medicine'],
              ['Indus Valley', '~2500-1500 BCE', 'Indus River (modern Pakistan/India)', 'Sophisticated urban planning, indoor plumbing, standardized weights, undeciphered script'],
              ['China (Shang/Zhou)', '~1600-256 BCE', 'Yellow River', 'Bronze metallurgy, oracle-bone writing, dynastic system, silk'],
              ['Greece (classical)', '~800-300 BCE', 'Mediterranean / Aegean', 'Democracy (Athens), philosophy (Socrates, Plato, Aristotle), drama, Olympics, geometry'],
              ['Rome', '~753 BCE-476 CE', 'Mediterranean', 'Republic then empire, Roman law, engineering (aqueducts, roads), Latin language, codified Christianity']
            ]}
          />

          <Callout kind="info" title="Why river valleys?">
            Rivers offered: reliable water for crops; predictable flooding that fertilized soil (especially the Nile); transportation to move goods and people; defensive barriers; fish and other food. Without these, the year-round food surpluses needed for cities couldn\'t happen.
          </Callout>

          <Callout kind="tip" title="World religions emerged in this era">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Hinduism</strong> (~1500 BCE in India) — oldest major religion, no single founder, polytheistic with one underlying reality.</li>
              <li><strong>Judaism</strong> (~1300 BCE) — first major monotheistic religion.</li>
              <li><strong>Buddhism</strong> (~500 BCE in India) — founded by Siddhartha Gautama; spread across Asia.</li>
              <li><strong>Christianity</strong> (~30 CE in Roman-controlled Israel) — derived from Judaism; became Rome\'s official religion under Constantine; spread worldwide via missionary work and colonization.</li>
              <li><strong>Islam</strong> (~622 CE in Arabia) — founded by Muhammad; spread rapidly across the Middle East, North Africa, and Asia.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'feudalism-states',
      title: 'Feudalism to Nation-States',
      content: (
        <>
          <p>After Rome\'s collapse in the West (~476 CE), Europe entered a long period of fragmented power. The big arc: from feudalism through the Crusades, plague, Renaissance, and Reformation, ending with strong centralized monarchies — the early nation-states.</p>
          <Table
            headers={['Era', 'Hallmarks']}
            rows={[
              ['Middle Ages', '~500-1500 CE — feudalism (lords, vassals, peasants tied to land), manors, Catholic Church central authority, knights and chivalric culture'],
              ['Crusades', '1095-1291 — religious wars between European Christians and Muslims for control of the Holy Land. Brought new ideas, trade, and goods to Europe.'],
              ['Black Death (Bubonic Plague)', '~1347-1352 — killed roughly 1/3 of Europe\'s population. Weakened feudal system: labor scarcity gave surviving peasants more bargaining power.'],
              ['Renaissance', '~1300-1600 — "rebirth" of classical learning and art, starting in Italy (Florence). Da Vinci, Michelangelo, Raphael. Humanism — focus on human potential and reason.'],
              ['Reformation', '1517 onward — Martin Luther\'s 95 Theses challenged the Catholic Church. Led to Protestant denominations (Lutheran, Calvinist, Anglican, etc.). Centuries of religious wars followed.'],
              ['Age of Exploration', '~1450-1700 — Portugal and Spain led, then Britain, France, Netherlands. Columbus (1492), Vasco da Gama (1498 to India), Magellan (1519-22 circumnavigation).'],
              ['Rise of nation-states', 'Strong centralized monarchies in Spain, France, England, Portugal replace fragmented feudal authority. Foundation for modern countries.']
            ]}
          />

          <Callout kind="tip" title="The Columbian Exchange">
            <p>The two-way transfer of plants, animals, people, technologies, and diseases between the Old World (Europe, Africa, Asia) and the New World (Americas) after 1492.</p>
            <p><strong>Old → New:</strong> horses, cattle, pigs, sugar cane, wheat, smallpox, measles (devastating Native populations).</p>
            <p><strong>New → Old:</strong> potatoes, corn, tomatoes, peppers, tobacco, cocoa, syphilis. Potatoes and corn dramatically increased European food supply, supporting population growth.</p>
            <p>This exchange transformed both worlds, for better and worse.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'revolutions',
      title: 'The Age of Revolutions',
      content: (
        <>
          <p>The 1500s-1800s saw a cascading series of revolutions in thought and politics — each one shaping the next.</p>
          <Table
            headers={['Revolution', 'When', 'Outcome']}
            rows={[
              ['Scientific Revolution', '~1550-1700', 'Empirical scientific method emerged. Copernicus (heliocentric model), Galileo, Newton (laws of motion and gravity). Foundation of modern science.'],
              ['Enlightenment', '~1685-1815', 'Reason, individual rights, social contract — Locke (life, liberty, property), Rousseau, Voltaire, Montesquieu. Ideas underlying both the American and French Revolutions.'],
              ['American Revolution', '1775-1783', 'U.S. independence from Britain; constitutional democracy with separation of powers.'],
              ['French Revolution', '1789-1799', 'Overthrew the French monarchy; Declaration of the Rights of Man. Slogan: "Liberty, Equality, Fraternity." Devolved into the Reign of Terror, then Napoleon\'s rise.'],
              ['Industrial Revolution', '~1760-1840 onward', 'Began in Britain. Steam engine, mechanized factories, mass production, urbanization. Living standards eventually rose dramatically; in the short term, urban poverty and child labor were widespread.'],
              ['Latin American Revolutions', '~1810-1825', 'Most former Spanish and Portuguese colonies in the Americas gained independence. Simón Bolívar led much of South America\'s liberation.']
            ]}
          />
        </>
      )
    },
    {
      id: 'wars-colonialism',
      title: 'Imperialism, World Wars & the Modern Era',
      content: (
        <>
          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Imperialism, 1800s', 'European powers carved up Africa, Asia, and the Pacific. By 1914, Britain controlled 1/4 of the world\'s land. Colonial economies extracted resources and exploited labor; left lasting damage.'],
              ['World War I, 1914-1918', '"The Great War." Triggered by assassination of Archduke Ferdinand. Allies (UK, France, Russia, U.S. from 1917) vs Central Powers (Germany, Austria-Hungary, Ottoman Empire). Trench warfare, machine guns, poison gas. ~17 million dead.'],
              ['Russian Revolution, 1917', 'Bolsheviks (Lenin, Trotsky, Stalin) overthrew the tsar; created the Soviet Union, the world\'s first communist state.'],
              ['World War II, 1939-1945', 'Allies (UK, U.S., USSR, China, France) vs Axis (Nazi Germany, Italy, Japan). Began with Germany\'s invasion of Poland. ~60+ million dead, the deadliest war in history.'],
              ['Holocaust', 'Genocide of 6 million Jews + millions of Roma, disabled people, Slavs, gay men, political opponents. The defining moral horror of the 20th century.'],
              ['Decolonization, 1945-1990s', 'Most Asian and African colonies gained independence. India (1947), Indonesia (1949), African nations through 1960s. Often violent transitions.'],
              ['Cold War, 1947-1991', 'U.S.-USSR rivalry. Bipolar global politics. Proxy wars (Korea, Vietnam, Afghanistan), nuclear arms race, space race.'],
              ['European Union', 'Founded 1993 (precursors back to 1950s). Economic and political union of European states. UK left in 2020 ("Brexit"). 27 members.'],
              ['Globalization', 'Late 20th century onward. Integrated trade, communications, supply chains worldwide. Lifted hundreds of millions out of poverty; also created winners and losers within each country.'],
              ['Information Age', '1990s onward. Internet, smartphones, social media. Reshaping work, politics, and culture worldwide.']
            ]}
          />
        </>
      )
    },
    {
      id: 'humans-environment',
      title: 'Humans & the Environment',
      content: (
        <>
          <p>Geography also covers how humans interact with their physical environment — and how environment has shaped human history.</p>
          <Table
            headers={['Theme', 'Issue / details']}
            rows={[
              ['Climate change', 'Rising CO₂ → global warming → sea level rise, extreme weather, ecosystem shifts, species extinction. Driven primarily by burning fossil fuels and deforestation.'],
              ['Pollution', 'Air, water, soil. Sources include industry, agriculture, transportation. Affects health and ecosystems.'],
              ['Resource depletion', 'Overuse of fish stocks, fresh water, fossil fuels, topsoil, rare minerals. Future scarcity.'],
              ['Deforestation', 'Especially the Amazon, Indonesia, Central Africa. Causes biodiversity loss and releases stored carbon.'],
              ['Renewable energy', 'Solar, wind, hydro, geothermal — replacements for fossil fuels. Costs falling rapidly since 2010s.'],
              ['Conservation', 'Protected national parks, sustainable agriculture, recycling.'],
              ['Urbanization', 'Population shift to cities. Now over half the world\'s population lives in urban areas. Pros (efficiency, jobs, services); cons (pollution, sprawl, inequality).']
            ]}
          />

          <Callout kind="info" title="Push and pull factors in migration">
            Why people move from one place to another:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><strong>Push factors</strong> (out of a place): war, famine, persecution, lack of jobs, natural disasters.</li>
              <li><strong>Pull factors</strong> (into a place): jobs, safety, freedom, family already there, education, climate.</li>
            </ul>
            Most migration is driven by some combination of both. The GED tests this distinction.
          </Callout>
        </>
      )
    },
    {
      id: 'using-resources',
      title: 'Using Resources Wisely — Sustainability',
      content: (
        <>
          <p><Term>Sustainability</Term> = meeting today\'s needs without compromising future generations\' ability to meet theirs. The basic question: are we using resources at a rate they can be replaced?</p>
          <Callout kind="formula" title="The 3 R\'s">
            <strong>Reduce</strong> consumption · <strong>Reuse</strong> what you can · <strong>Recycle</strong> what you can\'t reuse.
          </Callout>
          <Table
            headers={['Resource type', 'Examples']}
            rows={[
              ['Renewable', 'Sunlight, wind, water, forests (if managed sustainably). Replenish naturally on human timescales.'],
              ['Nonrenewable', 'Oil, coal, natural gas, most minerals. Finite — once used, effectively gone for human purposes.']
            ]}
          />
          <Callout kind="tip" title="Why this matters on the GED">
            The test asks both factual questions ("which is renewable?") AND application questions ("which policy would best reduce dependence on fossil fuels?"). Knowing the categories AND the policy implications matters.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Civilization', def: 'A complex society with cities, government, writing, and division of labor.' },
      { term: 'Feudalism', def: 'Medieval European system of land in exchange for military service.' },
      { term: 'Imperialism', def: 'Policy of extending a country\'s power through colonization or military force.' },
      { term: 'Globalization', def: 'Increasing economic and cultural interconnection of countries.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Sustainability', def: 'Meeting current needs without harming future generations\' ability to meet theirs.' },
      { term: 'Columbian Exchange', def: 'Two-way transfer of plants, animals, diseases between Old and New Worlds after 1492.' }
    ],
    laws: [
      { name: 'River-valley civilizations', desc: 'Early civilizations clustered along major rivers — water for irrigation, food, transport.' },
      { name: 'Push/pull migration', desc: 'Push: war, famine, no jobs. Pull: jobs, safety, family.' }
    ],
    methods: [
      { name: 'Era anchors', desc: '~3000 BCE Egypt · 500-1500 Middle Ages · 1500-1700 Age of Exploration · 1789 French Rev · 1914 WWI · 1939 WWII · 1991 USSR collapse.' }
    ]
  },
  questions: [
    { q: 'Which ancient civilization developed cuneiform writing?', type: 'mcq', choices: ['Egypt', 'Sumer (Mesopotamia)', 'China', 'Greece'], correct: 1, difficulty: 'M', explanation: 'Sumerians invented cuneiform around 3200 BCE.' },
    { q: 'The "Columbian Exchange" describes:', type: 'mcq', choices: [
      'A treaty after WWI',
      'The transfer of plants, animals, and diseases between Old and New Worlds after 1492',
      'A trade dispute',
      'A religious schism'
    ], correct: 1, difficulty: 'M', explanation: 'Two-way exchange following Columbus\'s voyages.' },
    { q: 'World War II began in:', type: 'math', correct: 1939, difficulty: 'E', explanation: 'Germany invaded Poland on Sept 1, 1939.' },
    { q: 'Which event marked the symbolic end of the Cold War?', type: 'mcq', choices: ['D-Day', 'Fall of the Berlin Wall (1989)', 'Cuban Missile Crisis', 'Korean War'], correct: 1, difficulty: 'M', explanation: 'Berlin Wall fell in 1989; USSR dissolved 1991.' },
    { q: 'The "3 R\'s" of sustainability are:', type: 'mcq', choices: [
      'Read, Run, Repair',
      'Reduce, Reuse, Recycle',
      'Refuel, Refill, Restore',
      'React, Resist, Recover'
    ], correct: 1, difficulty: 'E', explanation: 'Reduce → Reuse → Recycle.' },
    { q: 'Which is a NONRENEWABLE resource?', type: 'mcq', choices: ['Sunlight', 'Wind', 'Coal', 'Wood (sustainably managed)'], correct: 2, difficulty: 'E', explanation: 'Fossil fuels are finite on human timescales.' },
    { q: 'A "push factor" of migration is:', type: 'mcq', choices: [
      'Better job opportunities in a new country',
      'Family already living abroad',
      'Civil war in the home country',
      'Free education in the destination'
    ], correct: 2, difficulty: 'M', explanation: 'War, famine, persecution = push (out of home).' },
    { q: 'The Renaissance was a period of:', type: 'mcq', choices: [
      'Religious wars',
      'Renewed interest in classical learning, art, and science',
      'Industrialization',
      'Decolonization'
    ], correct: 1, difficulty: 'M', explanation: '~1300-1600 — rebirth of Greek/Roman ideas in Europe.' },
    { q: 'The Industrial Revolution started in:', type: 'mcq', choices: ['Germany', 'France', 'Britain', 'United States'], correct: 2, difficulty: 'M', explanation: 'Britain in the late 18th century — coal, steam engines, textile mills.' }
  ]
};
