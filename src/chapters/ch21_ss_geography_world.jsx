import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 21,
  title: 'Social Studies 5 — Geography & the World',
  subtitle: 'Early civilizations through modern globalization, plus humans and the environment.',
  blocks: [
    {
      id: 'early-civ',
      title: 'Early Civilizations',
      content: (
        <>
          <Table
            headers={['Civilization', 'Era', 'Region', 'Key contributions']}
            rows={[
              ['Mesopotamia / Sumer', '~3500-2000 BCE', 'Tigris-Euphrates (modern Iraq)', 'Cuneiform writing, cities, code of Hammurabi'],
              ['Egypt', '~3000-30 BCE', 'Nile (Egypt)', 'Hieroglyphics, pyramids, mummification, calendar'],
              ['Indus Valley', '~2500-1500 BCE', 'Modern Pakistan/India', 'Urban planning, plumbing, undeciphered script'],
              ['China (Shang/Zhou)', '~1600-256 BCE', 'Yellow River', 'Bronze, writing, dynastic system'],
              ['Greece', '~800-300 BCE', 'Mediterranean', 'Democracy (Athens), philosophy, drama, Olympics'],
              ['Rome', '~753 BCE-476 CE', 'Mediterranean', 'Republic then empire, law, engineering, Latin']
            ]}
          />
          <Callout kind="info" title="What they shared">
            Ancient civilizations cluster around <strong>river valleys</strong>: water for irrigation, transportation, and food. Government, organized religion, writing, and division of labor all emerged together.
          </Callout>
        </>
      )
    },
    {
      id: 'feudalism-states',
      title: 'Feudalism to Nation-States',
      content: (
        <>
          <Table
            headers={['Era', 'Hallmarks']}
            rows={[
              ['Middle Ages', '~500-1500 CE — feudalism, manors, Catholic Church central, knights and peasants'],
              ['Crusades', '1095-1291 — religious wars between European Christians and Muslims for the Holy Land'],
              ['Black Death', '~1347-1352 — bubonic plague killed ~⅓ of Europe; weakened feudalism'],
              ['Renaissance', '~1300-1600 — rebirth of classical learning, art (Da Vinci, Michelangelo), Florence/Italy'],
              ['Reformation', '1517 onward — Martin Luther → split from Catholic Church → Protestant denominations'],
              ['Age of Exploration', '~1450-1700 — Columbus, da Gama, Magellan; Columbian Exchange'],
              ['Rise of nation-states', 'Strong centralized monarchies in Spain, France, England replace feudalism']
            ]}
          />
          <Callout kind="tip" title="Columbian Exchange">
            Two-way transfer of plants, animals, people, technologies, and diseases between the Old World and New World after 1492. Foods like corn, potatoes, tomatoes spread to Europe; horses, cattle, smallpox to the Americas.
          </Callout>
        </>
      )
    },
    {
      id: 'revolutions',
      title: 'The Age of Revolutions',
      content: (
        <>
          <Table
            headers={['Revolution', 'When', 'Outcome']}
            rows={[
              ['Scientific Revolution', '~1550-1700', 'Empirical method, heliocentric model (Copernicus), Newton'],
              ['Enlightenment', '~1685-1815', 'Reason, individual rights, social contract — Locke, Rousseau'],
              ['American Revolution', '1775-1783', 'U.S. independence; constitutional democracy'],
              ['French Revolution', '1789-1799', 'Overthrow of monarchy; "Liberty, Equality, Fraternity"; led to Napoleon'],
              ['Industrial Revolution', '~1760-1840 onward', 'Steam, factories, mass production, urbanization'],
              ['Latin American Revolutions', '~1810-1825', 'Most former Spanish/Portuguese colonies gain independence']
            ]}
          />
        </>
      )
    },
    {
      id: 'wars-colonialism',
      title: 'Exploration, Colonialism & the World Wars',
      content: (
        <>
          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Imperialism (1800s)', 'European powers carve up Africa, Asia — colonial economies, racial hierarchies'],
              ['World War I', '1914-1918 — Allies (UK, France, Russia, U.S.) vs Central Powers (Germany, Austria-Hungary, Ottomans). Trench warfare, modern weapons.'],
              ['Russian Revolution', '1917 — Lenin, Bolsheviks; led to USSR'],
              ['World War II', '1939-1945 — Allies (UK, U.S., USSR) vs Axis (Germany, Italy, Japan). 60+ million dead.'],
              ['Holocaust', 'Genocide of 6 million Jews + millions others'],
              ['Decolonization', '1945-1990s — most Asian and African colonies gain independence'],
              ['Cold War', '1947-1991 — bipolar U.S.-USSR rivalry, proxy wars, nuclear arms race'],
              ['European Union', '1993 — economic and political union of European states (UK left in 2020)'],
              ['Globalization', 'Late 20th c. — integrated trade, communications, supply chains worldwide']
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
          <Table
            headers={['Theme', 'Issue']}
            rows={[
              ['Climate change', 'Rising CO₂ → warming → sea level rise, extreme weather, species shifts'],
              ['Pollution', 'Air, water, soil — sources include industry, agriculture, transportation'],
              ['Resource depletion', 'Overuse of fish stocks, fresh water, fossil fuels'],
              ['Deforestation', 'Especially Amazon, Indonesia — biodiversity loss, carbon release'],
              ['Renewable energy', 'Solar, wind, hydro, geothermal — replacements for fossil fuels'],
              ['Conservation', 'Protected areas, sustainable agriculture, recycling'],
              ['Urbanization', 'Population shift to cities — pros (efficiency) and cons (pollution, sprawl)']
            ]}
          />
          <Callout kind="info" title="Push & pull factors in migration">
            <strong>Push</strong> (out of a place): war, famine, persecution, lack of jobs.<br/>
            <strong>Pull</strong> (into a place): jobs, safety, freedom, family reunification, education.
          </Callout>
        </>
      )
    },
    {
      id: 'using-resources',
      title: 'Using Resources Wisely',
      content: (
        <>
          <p><Term>Sustainability</Term> = meeting today's needs without compromising future generations'.</p>
          <Callout kind="formula" title="The 3 R's">
            <strong>Reduce</strong> consumption · <strong>Reuse</strong> what you can · <strong>Recycle</strong> what you can't.
          </Callout>
          <Table
            headers={['Resource type', 'Examples']}
            rows={[
              ['Renewable', 'Sunlight, wind, water, forests (if managed)'],
              ['Nonrenewable', 'Oil, coal, natural gas, most minerals — finite on human timescales']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Civilization', def: 'A complex society with cities, government, writing, and division of labor.' },
      { term: 'Feudalism', def: 'Medieval European system of land in exchange for service.' },
      { term: 'Imperialism', def: 'Policy of extending a country\'s power through colonization or military force.' },
      { term: 'Globalization', def: 'Increasing economic and cultural interconnection of countries.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Sustainability', def: 'Meeting current needs without harming future generations\' ability to meet theirs.' }
    ],
    laws: [
      { name: 'River-valley civilizations', desc: 'Early civilizations clustered along major rivers.' },
      { name: 'Push/pull migration', desc: 'Push: war/famine/no jobs. Pull: jobs/safety/family.' }
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
    ], correct: 1, difficulty: 'M', explanation: '~1300-1600 — rebirth of Greek/Roman ideas in Europe.' }
  ]
};
