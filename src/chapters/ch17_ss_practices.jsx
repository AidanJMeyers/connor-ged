import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 17,
  title: 'Social Studies 1 — Social Studies Practices',
  subtitle: 'How to read primary source documents, political cartoons, charts, and historical maps. The skills underneath every social studies question.',
  blocks: [
    {
      id: 'about-ss',
      title: 'About the GED Social Studies Test',
      content: (
        <>
          <Callout kind="info" title="The Social Studies test at a glance">
            <p>About <strong>70 minutes</strong>, around <strong>35 questions</strong>. The content breaks down roughly:</p>
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><strong>Civics & Government</strong> (~50%)</li>
              <li><strong>U.S. History</strong> (~20%)</li>
              <li><strong>Economics</strong> (~15%)</li>
              <li><strong>Geography & the World</strong> (~15%)</li>
            </ul>
            Yes, civics is HALF the test. So while this textbook covers all four areas, focus the most study time on chapter 19 (civics & government).
          </Callout>

          <Callout kind="tip" title="The Social Studies test is mostly a reading test">
            Most questions give you a passage, document, chart, map, or political cartoon and ask you to interpret it. Memorizing dates is useful, but reading-comprehension skills (chapters 8-9) help just as much. The test is designed so a strong reader can do well even on topics they\'ve never specifically studied.
          </Callout>
        </>
      )
    },
    {
      id: 'central-idea',
      title: 'Central Idea & Drawing Conclusions from Documents',
      content: (
        <>
          <p>Social Studies passages on the GED come from many sources: speeches, founding documents, history textbooks, court rulings, news articles, and political analyses. The reading skills are similar to RLA, but the content is heavier on dates, names, places, and policies.</p>

          <Callout kind="tip" title="Always read the source line first">
            <p>Before reading the passage itself, look at the introduction or attribution: "Excerpt from the Federalist Papers, 1787" or "President Roosevelt\'s address, December 1941." This source line tells you:</p>
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><strong>Author</strong> — gives you their likely viewpoint and biases.</li>
              <li><strong>Audience</strong> — who they were addressing.</li>
              <li><strong>Era</strong> — what was going on historically.</li>
              <li><strong>Genre</strong> — speech vs essay vs treaty has different rhetorical moves.</li>
            </ul>
            <p>A speech from 1941 is going to be about WWII, even if you can\'t recognize every name. A document signed in 1787 is about the founding of the U.S. Use these clues.</p>
          </Callout>

          <p className="font-semibold mt-4">Drawing conclusions from documents</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li>What is the author\'s <strong>main claim</strong>?</li>
            <li>What <strong>evidence</strong> do they use?</li>
            <li>What <strong>era</strong> and <strong>audience</strong> shaped this?</li>
            <li>What does the document <em>imply</em> beyond what it states?</li>
            <li>What does the author NOT say that you might expect?</li>
          </ol>
        </>
      )
    },
    {
      id: 'words-ideas',
      title: 'Interpreting Words & Ideas in Historical Texts',
      content: (
        <>
          <p>Older texts use older language. Authors before 1900 wrote longer sentences, used more abstract vocabulary, and assumed a level of classical education most modern readers don\'t share. Use context to decode.</p>
          <Table
            headers={['Old / formal usage', 'Modern equivalent']}
            rows={[
              ['"Suffrage"', 'The right to vote'],
              ['"Mankind" / "men" (in older docs)', 'Often used to mean all people'],
              ['"Faction"', 'Special interest group, party'],
              ['"Tyranny"', 'Oppressive rule'],
              ['"Liberty"', 'Freedom — often paired with rights'],
              ['"Posterity"', 'Future generations'],
              ['"Tariff"', 'Tax on imports'],
              ['"Despotism"', 'Rule by an absolute ruler with no checks'],
              ['"Bondage"', 'Slavery'],
              ['"Sovereign"', 'Having supreme authority; king/queen of an independent state'],
              ['"Inalienable"', 'Cannot be taken away'],
              ['"Endowed"', 'Given (often as a natural right)'],
              ['"Usurp"', 'To seize power illegally']
            ]}
          />

          <Callout kind="tip" title="Use context for unfamiliar words">
            If you don\'t know a word, look at the surrounding sentences. Authors often define key terms — especially in a speech or essay aimed at the general public. The context will narrow the possibilities even if you can\'t define the word precisely.
          </Callout>
        </>
      )
    },
    {
      id: 'author-pov',
      title: "Author's Purpose & Point of View",
      content: (
        <>
          <p>For each Social Studies primary source, run through this checklist:</p>
          <Table
            headers={['Question', 'Why it matters']}
            rows={[
              ['Who wrote it?', 'Identifies viewpoint, profession, era'],
              ['When was it written?', 'Places it in historical context'],
              ['Who was the audience?', 'Tells you the tone and assumptions'],
              ['What was the goal? (Inform? Persuade? Justify?)', 'Reveals what to look for'],
              ['What is left out or ignored?', 'What perspectives are missing?']
            ]}
          />

          <Callout kind="warn" title="Bias is everywhere — and that\'s okay">
            <p>Every historical document reflects the perspective of who wrote it. A British account of the American Revolution will frame events differently than a colonial one. A slaveholder\'s justification of slavery will frame the institution differently than a formerly enslaved person\'s memoir. Neither is "wrong" as a historical source — both must be read critically and compared to each other.</p>
            <p>The GED expects you to recognize bias, not to dismiss biased sources. Often the question is: "What does this passage REVEAL about the author\'s viewpoint?" The answer is exactly the bias you noticed.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'reasoning-evidence',
      title: "Evaluating Author's Reasoning & Evidence",
      content: (
        <>
          <p>Same RLA-style fallacy checks apply here: hasty generalization, ad hominem, slippery slope, false dilemma, etc. (See chapter 9.) In Social Studies passages, watch especially for:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Cherry-picking</strong> — using only data that supports the claim and ignoring contrary evidence.</li>
            <li><strong>Appeal to tradition</strong> — "We\'ve always done it this way" as a reason for keeping it.</li>
            <li><strong>Appeal to authority</strong> — name-dropping a famous figure without explaining their reasoning. (Especially when the figure isn\'t actually an expert in the relevant area.)</li>
            <li><strong>Loaded language</strong> — words like "regime," "patriot," "extremist," "freedom-loving" carry built-in judgments.</li>
            <li><strong>Anachronism</strong> — judging past actions by present standards without acknowledging the difference, or applying modern meanings to historical words.</li>
          </ul>

          <Callout kind="tip" title="A good source for THIS source">
            The strongest evaluation: "This is a useful source for understanding [X], but limited because [Y]." A British soldier\'s letter is useful for understanding British military experience, but limited as evidence about colonial life. Recognize what a source is good for AND what it can\'t tell you.
          </Callout>
        </>
      )
    },
    {
      id: 'relationships',
      title: 'Analyzing Relationships Between Materials',
      content: (
        <>
          <p>Social Studies often pairs a primary source (speech, treaty, photo) with a chart, map, or another document. To analyze the relationship:</p>
          <Callout kind="tip" title="Compare-contrast frame">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>What main claim does <strong>each</strong> source make?</li>
              <li>What evidence does <strong>each</strong> use?</li>
              <li>Do they <strong>agree</strong>, <strong>disagree</strong>, or <strong>complement</strong> each other?</li>
              <li>If they disagree, can you tell <strong>why</strong> (different era, different audience, different goal)?</li>
              <li>Does one source CHALLENGE assumptions in the other?</li>
            </ul>
          </Callout>

          <Callout kind="info" title="A common GED setup">
            A 19th-century speech praises westward expansion. A 21st-century textbook excerpt describes the impact on Native Americans. The two sources don\'t contradict — they look at the same events from very different perspectives. The right answer recognizes BOTH as valid historical sources, illuminating different aspects of the same period.
          </Callout>
        </>
      )
    },
    {
      id: 'data-stats',
      title: 'Interpreting Data, Statistics & Maps',
      content: (
        <>
          <p>The GED Social Studies test uses several types of maps. Each is good at showing different things:</p>
          <Table
            headers={['Map type', 'Purpose']}
            rows={[
              ['Political map', 'Borders, capitals, country/state names'],
              ['Physical map', 'Landforms, rivers, mountains, elevation'],
              ['Thematic map (e.g., choropleth)', 'Color-codes regions by data: population density, GDP, education levels'],
              ['Climate map', 'Color codes by climate zone or temperature'],
              ['Election map', 'Voting results by region — common in modern social studies'],
              ['Historical map', 'Borders/territories at a specific time (e.g., "U.S. in 1820")'],
              ['Migration map', 'Arrows showing movement of people, often immigration patterns'],
              ['Economic map', 'Trade routes, resource locations, industrial centers']
            ]}
          />

          <Callout kind="tip" title="Always check before interpreting">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Title — what is the map about?</li>
              <li>Legend / key — what do the colors and symbols mean?</li>
              <li>Scale — how big is the area shown?</li>
              <li>Compass rose — orientation (north is usually up).</li>
              <li>Date — borders and populations change over time.</li>
            </ul>
          </Callout>

          <Callout kind="warn" title="Statistics traps in Social Studies">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Truncated y-axis</strong>: makes small differences look big. (Same trap as in math.)</li>
              <li><strong>Misleading proportions</strong>: 3D pie charts distort slice sizes.</li>
              <li><strong>Cherry-picked time ranges</strong>: a chart starting at the previous high looks like decline.</li>
              <li><strong>Per-capita vs raw numbers</strong>: a country with twice the population will have twice the raw deaths even if the per-capita rate is the same.</li>
            </ul>
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
      { term: 'Tyranny', def: 'Oppressive, absolute, or cruel rule.' },
      { term: 'Posterity', def: 'Future generations.' },
      { term: 'Inalienable', def: 'Cannot be taken away.' }
    ],
    laws: [
      { name: 'Source the source', desc: 'Always identify author, date, and audience BEFORE drawing conclusions.' },
      { name: 'Multiple sources rule', desc: 'A single document is one viewpoint. Cross-reference for the fuller picture.' },
      { name: 'Bias isn\'t a disqualifier', desc: 'Biased sources are still useful — they reveal the perspective of who wrote them.' }
    ],
    methods: [
      { name: 'Map checklist', desc: 'Title, legend, scale, compass, date — verify all five.' },
      { name: 'Spot the loaded word', desc: 'Highlight any word that carries a value judgment ("regime," "freedom fighter," "extremist").' },
      { name: 'Per-capita check', desc: 'When comparing countries with different populations, compare rates, not raw numbers.' }
    ]
  },
  questions: [
    { q: 'A primary source is:', type: 'mcq', choices: [
      'A modern textbook',
      'A document from the era under study',
      'A summary of older documents',
      'An online encyclopedia'
    ], correct: 1, difficulty: 'E', explanation: 'Primary = directly from the time period.' },
    { q: '"Suffrage" most nearly means:', type: 'mcq', choices: ['Suffering', 'Right to vote', 'Slavery', 'Tax burden'], correct: 1, difficulty: 'E', explanation: 'Suffrage = voting rights.' },
    { q: 'A graph that starts the y-axis at 50% instead of 0% is most likely:', type: 'mcq', choices: ['More accurate', 'Easier to read', 'Designed to exaggerate small differences', 'Standard practice'], correct: 2, difficulty: 'M', explanation: 'Truncated y-axis is a classic visual exaggeration.' },
    { q: 'When evaluating a historical speech, which question matters MOST?', type: 'mcq', choices: [
      'How long is it?',
      'Who wrote it, when, and to whom?',
      'Is the vocabulary modern?',
      'Does it use rhetoric?'
    ], correct: 1, difficulty: 'E', explanation: 'Source context is essential to interpretation.' },
    { q: 'A choropleth map color-codes regions by data. It best shows:', type: 'mcq', choices: ['Mountain ranges', 'Population density across states', 'Borders only', 'Coastlines'], correct: 1, difficulty: 'M', explanation: 'Choropleth = thematic data by region.' },
    { q: 'Two passages disagree about whether the Industrial Revolution improved life. The best response is to:', type: 'mcq', choices: [
      'Pick the side you agree with',
      'Read both, identify what kinds of evidence each uses, and note their context',
      'Average their conclusions',
      'Skip the question'
    ], correct: 1, difficulty: 'M', explanation: 'Critical reading requires evidence-based comparison.' },
    { q: 'A diary written by a Civil War soldier is most useful for understanding:', type: 'mcq', choices: [
      'The war\'s ultimate political outcome',
      'The personal experience of soldiers',
      'Modern interpretations of the war',
      'Civilian opinion at the time'
    ], correct: 1, difficulty: 'M', explanation: 'Primary sources show the perspective of who wrote them — here, soldier experience.' }
  ]
};
