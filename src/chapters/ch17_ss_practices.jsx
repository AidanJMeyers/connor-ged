import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 17,
  title: 'Social Studies 1 — Social Studies Practices',
  subtitle: 'Reading & analyzing historical documents, maps, charts, political cartoons, and statistics.',
  blocks: [
    {
      id: 'central-idea',
      title: 'Central Idea & Conclusions',
      content: (
        <>
          <p>Social Studies passages on the GED come from speeches, founding documents, history textbooks, news articles, and political analyses. The reading skills are the same as RLA, but the content is heavier on dates, names, and policy.</p>
          <Callout kind="tip" title="Quick scan">
            Look at the source line first ("Excerpt from the Federalist Papers, 1787" or "President Roosevelt's address, December 1941"). The source tells you author, audience, era, and likely viewpoint.
          </Callout>
          <p className="font-semibold mt-3">Drawing conclusions from documents</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li>What is the author's <strong>main claim</strong>?</li>
            <li>What <strong>evidence</strong> do they use?</li>
            <li>What <strong>era</strong> and <strong>audience</strong> shaped this?</li>
            <li>What does the document <em>imply</em> beyond what it states?</li>
          </ol>
        </>
      )
    },
    {
      id: 'words-ideas',
      title: 'Interpreting Words & Ideas in Historical Texts',
      content: (
        <>
          <p>Older texts use older language. Common shifts:</p>
          <Table
            headers={['Old usage', 'Modern equivalent']}
            rows={[
              ['"Suffrage"', 'Right to vote'],
              ['"Mankind" / "men"', 'Often used to mean all people in older docs'],
              ['"Faction"', 'Special interest group, party'],
              ['"Tyranny"', 'Oppressive rule'],
              ['"Liberty"', 'Freedom — often paired with rights'],
              ['"Posterity"', 'Future generations'],
              ['"Tariff"', 'Tax on imports']
            ]}
          />
          <Callout kind="tip" title="Use context">
            If a word is unfamiliar, look at the surrounding sentences. Authors often define key terms, especially in a speech or essay aimed at the public.
          </Callout>
        </>
      )
    },
    {
      id: 'author-pov',
      title: "Author's Purpose & Point of View",
      content: (
        <>
          <p>For each Social Studies primary source, identify:</p>
          <Table
            headers={['Question', 'Why it matters']}
            rows={[
              ['Who wrote it?', 'Identifies viewpoint, profession, era'],
              ['When was it written?', 'Places it in historical context'],
              ['Who was the audience?', 'Tells you the tone and assumptions'],
              ['What was the goal?', 'To inform? Persuade? Justify a policy?'],
              ['What is left out?', 'What perspectives are missing?']
            ]}
          />
          <Callout kind="warn" title="Bias is everywhere">
            All historical documents reflect the perspective of who wrote them. A British account of the American Revolution will frame events differently than a colonial account. Neither is wrong — both must be read critically.
          </Callout>
        </>
      )
    },
    {
      id: 'reasoning-evidence',
      title: "Evaluating Author's Reasoning & Evidence",
      content: (
        <>
          <p>Same RLA-style fallacy checks apply: hasty generalization, ad hominem, slippery slope, false dilemma, etc. In Social Studies, watch especially for:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Cherry-picking</strong> — using only data that supports the claim and ignoring contrary evidence.</li>
            <li><strong>Appeal to tradition</strong> — "We've always done it this way."</li>
            <li><strong>Appeal to authority</strong> — name-dropping a famous figure without explaining their reasoning.</li>
            <li><strong>Loaded language</strong> — words like "regime," "patriot," "extremist" carry built-in judgments.</li>
          </ul>
        </>
      )
    },
    {
      id: 'relationships',
      title: 'Analyzing Relationships Between Materials',
      content: (
        <>
          <p>Social Studies often pairs a primary source (speech, treaty, photo) with a chart or map. To compare:</p>
          <Callout kind="tip" title="The compare-contrast frame">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>What main claim does <strong>each</strong> source make?</li>
              <li>What evidence does <strong>each</strong> use?</li>
              <li>Do they <strong>agree</strong>, <strong>disagree</strong>, or <strong>complement</strong> each other?</li>
              <li>If they disagree, can you tell <strong>why</strong> (different era, different audience, different goal)?</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'data-stats',
      title: 'Interpreting Data, Statistics & Maps',
      content: (
        <>
          <p>Map types:</p>
          <Table
            headers={['Map type', 'Purpose']}
            rows={[
              ['Political map', 'Shows borders, capitals, country/state names'],
              ['Physical map', 'Shows landforms, rivers, mountains, elevation'],
              ['Thematic map (e.g., choropleth)', 'Color-codes regions by data (population density, GDP, etc.)'],
              ['Climate map', 'Color codes by climate zone or temperature'],
              ['Election map', 'Shows voting results by region'],
              ['Historical map', 'Shows borders/territories at a specific time']
            ]}
          />
          <Callout kind="tip" title="Always check">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Title</li>
              <li>Legend / key</li>
              <li>Scale</li>
              <li>Compass rose (orientation)</li>
              <li>Date</li>
            </ul>
          </Callout>
          <Callout kind="warn" title="Statistics traps">
            Watch for graphs with <strong>truncated y-axis</strong> (makes small differences look big), <strong>misleading proportions</strong> (3D pie charts distort slice sizes), and <strong>cherry-picked time ranges</strong> (a stock chart that starts at the previous high looks like decline).
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Primary source', def: 'Original document from the era under study (letter, speech, photograph).', tag: 'KEY', tagColor: 'sky' },
      { term: 'Secondary source', def: 'A later analysis or summary of primary sources (textbook, history article).' },
      { term: 'Bias', def: 'Inclination toward a particular perspective.' },
      { term: 'Suffrage', def: 'The right to vote.' },
      { term: 'Tyranny', def: 'Oppressive, absolute, or cruel rule.' }
    ],
    laws: [
      { name: 'Source the source', desc: 'Always identify author, date, and audience before drawing conclusions.' },
      { name: 'Multiple sources rule', desc: 'A single document is one viewpoint. Cross-reference for the fuller picture.' }
    ],
    methods: [
      { name: 'Map checklist', desc: 'Title, legend, scale, compass, date — verify all five.' },
      { name: 'Spot the loaded word', desc: 'Highlight any word that carries a value judgment ("regime," "freedom fighter," "extremist").' }
    ]
  },
  questions: [
    { q: 'A primary source is:', type: 'mcq', choices: [
      'A modern textbook',
      'A document from the era under study',
      'A summary of older documents',
      'An online encyclopedia'
    ], correct: 1, difficulty: 'E', explanation: 'Primary = directly from the time period.' },
    { q: '"Suffrage" most nearly means:', type: 'mcq', choices: ['Suffering', 'Right to vote', 'Slavery', 'Tax'], correct: 1, difficulty: 'E', explanation: 'Suffrage = voting rights.' },
    { q: 'A graph that starts the y-axis at 50% instead of 0% is most likely:', type: 'mcq', choices: ['More accurate', 'Easier to read', 'Designed to exaggerate small differences', 'Standard practice'], correct: 2, difficulty: 'M', explanation: 'Truncated y-axis is a classic visual exaggeration.' },
    { q: 'When evaluating a historical speech, which question matters MOST?', type: 'mcq', choices: [
      'How long is it?',
      'Who wrote it, when, and to whom?',
      'Is the vocabulary modern?',
      'Does it use rhetoric?'
    ], correct: 1, difficulty: 'E', explanation: 'Source context is essential to interpretation.' },
    { q: 'A choropleth map color-codes regions by data. It best shows:', type: 'mcq', choices: ['Mountain ranges', 'Population density across states', 'Borders only', 'Coastlines'], correct: 1, difficulty: 'M', explanation: 'Choropleth = thematic data by region (often demographic or economic).' },
    { q: 'Two passages disagree about whether the Industrial Revolution improved life. The best response is to:', type: 'mcq', choices: [
      'Pick the side you agree with',
      'Read both, identify what kinds of evidence each uses, and note their context',
      'Average their conclusions',
      'Skip the question'
    ], correct: 1, difficulty: 'M', explanation: 'Critical reading requires evidence-based comparison.' }
  ]
};
