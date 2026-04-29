import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 20,
  title: 'Social Studies 4 — Economics',
  subtitle: 'Supply, demand, the U.S. economic system, the Federal Reserve, and personal finance basics.',
  blocks: [
    {
      id: 'why-econ',
      title: 'Why Economics Is on the GED',
      content: (
        <>
          <p>Economics is roughly <strong>15% of the GED Social Studies test</strong>. The GED tests basic concepts that show up in everyday life: why prices rise and fall, how taxes work, what a recession is, and how to manage money personally. None of it requires advanced math.</p>

          <Callout kind="info" title="Two scales of economics">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Microeconomics</strong>: individual buyers, sellers, and markets — how prices form, how supply and demand work, how firms compete.</li>
              <li><strong>Macroeconomics</strong>: the whole economy — GDP, unemployment, inflation, government policies that affect the whole country.</li>
            </ul>
            The GED tests both, with a slight emphasis on micro (supply/demand basics) and a chunk of macro for things like the Federal Reserve and recessions.
          </Callout>
        </>
      )
    },
    {
      id: 'basic-econ',
      title: 'Basic Economic Concepts',
      content: (
        <>
          <p>Every economy answers three fundamental questions: <strong>What</strong> to produce? <strong>How</strong> to produce it? <strong>For whom</strong>? Different systems answer these differently.</p>

          <Table
            headers={['Concept', 'Definition']}
            rows={[
              ['Scarcity', 'Limited resources vs unlimited wants — the foundational problem of economics.'],
              ['Opportunity cost', 'What you give up by choosing one option (the next-best alternative).'],
              ['Goods', 'Tangible things produced and sold (food, clothing, cars).'],
              ['Services', 'Intangible work performed for someone (haircut, dental visit, banking).'],
              ['Producers', 'Make goods or provide services.'],
              ['Consumers', 'Buy goods or use services.'],
              ['Resources / factors of production', 'Land (natural resources), labor (human work), capital (machines, buildings, money), entrepreneurship (organizing production).']
            ]}
          />

          <Callout kind="formula" title="The law of supply and demand">
            <p><strong>Demand</strong>: as price goes DOWN, quantity demanded goes UP. (Buyers want more when it\'s cheaper.) Curve slopes downward.</p>
            <p><strong>Supply</strong>: as price goes UP, quantity supplied goes UP. (Sellers offer more when they earn more.) Curve slopes upward.</p>
            <p><strong>Equilibrium</strong>: the price where the two curves cross. The market settles at this price.</p>
          </Callout>

          <Callout kind="info" title="What shifts the curves">
            <p><strong>Demand shifts UP</strong> (people want more at every price) when:</p>
            <ul className="list-disc ml-5 text-sm">
              <li>Income rises</li>
              <li>The number of buyers increases</li>
              <li>Tastes change in favor of the product</li>
              <li>Substitute goods become more expensive</li>
            </ul>
            <p className="mt-2"><strong>Supply shifts UP</strong> (sellers offer more at every price) when:</p>
            <ul className="list-disc ml-5 text-sm">
              <li>Input costs (raw materials, labor) drop</li>
              <li>Technology improves</li>
              <li>Regulations ease</li>
              <li>The number of producers increases</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="Real-world examples">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Hurricane destroys orange groves → supply of oranges falls → orange prices rise.</li>
              <li>New diet trend favors avocados → demand for avocados rises → avocado prices rise.</li>
              <li>New technology makes solar panels cheaper to produce → supply rises → prices fall.</li>
              <li>Recession → people have less income → demand for restaurants falls → restaurants drop prices or go out of business.</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'us-economy',
      title: 'The U.S. Economic System',
      content: (
        <>
          <p>The U.S. is a <Term>mixed-market economy</Term>: mostly private ownership and free markets, with government regulation and some public services. There are four classical types of economic systems:</p>
          <Table
            headers={['System', 'Who decides what to produce', 'Examples']}
            rows={[
              ['Market (capitalist)', 'Individuals and private firms via prices', 'U.S., Canada, Japan'],
              ['Command (socialist / communist)', 'Government', 'North Korea, Cuba; historical USSR'],
              ['Mixed', 'Mostly markets, with significant government regulation and social programs', 'Most modern economies — including the U.S., UK, Germany'],
              ['Traditional', 'Custom, family, tribal practice', 'Some indigenous and pre-industrial societies']
            ]}
          />

          <Callout kind="info" title='What "mixed" really means in the U.S.'>
            <p>Most decisions in the U.S. are made by private buyers and sellers in markets. But the government:</p>
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li>Provides public services (roads, schools, military, courts).</li>
              <li>Regulates safety (food, drugs, workplaces).</li>
              <li>Operates social safety nets (Social Security, Medicare, Medicaid, unemployment insurance).</li>
              <li>Manages the money supply (Federal Reserve).</li>
              <li>Taxes income, profits, and consumption.</li>
            </ul>
            <p>The U.S. is more market-oriented than most European countries but less than 100% pure laissez-faire.</p>
          </Callout>

          <p className="font-semibold mt-4">Money & banking basics</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Money</strong> serves three roles: medium of exchange (you trade it for stuff), unit of account (you measure value in dollars), store of value (you can save it for later).</li>
            <li><strong>Banks</strong> accept deposits and make loans. They profit from the interest spread (charging more on loans than they pay on deposits).</li>
            <li>The <Term>Federal Reserve</Term> ("the Fed") is the U.S. central bank — it\'s NOT a normal commercial bank. Its job is to control the money supply and keep the economy stable.</li>
          </ul>
        </>
      )
    },
    {
      id: 'gov-economy',
      title: 'The Economy & the U.S. Government',
      content: (
        <>
          <p>Two main tools the government uses to steer the economy:</p>
          <Table
            headers={['Policy', 'Run by', 'Tools']}
            rows={[
              ['Monetary policy', 'Federal Reserve', 'Interest rates, money supply, reserve requirements, buying/selling government bonds'],
              ['Fiscal policy', 'Congress + President', 'Government spending and taxation']
            ]}
          />

          <Callout kind="info" title="The Fed\'s playbook">
            <p><strong>To fight a recession</strong>: lower interest rates → cheaper to borrow → more spending and investment → economic growth.</p>
            <p><strong>To fight inflation</strong>: raise interest rates → more expensive to borrow → less spending → cooler economy → prices stabilize.</p>
            <p>This is why you hear news about the Fed "raising rates" or "cutting rates" — it\'s the central tool of monetary policy.</p>
          </Callout>

          <p className="font-semibold mt-4">Key macroeconomic indicators</p>
          <Table
            headers={['Indicator', 'What it measures', 'What\'s "good"']}
            rows={[
              ['GDP (Gross Domestic Product)', 'Total value of goods and services produced in a year', 'Steady growth (~2-3% per year)'],
              ['Unemployment rate', '% of workforce actively seeking but lacking jobs', 'Low (~3-5%)'],
              ['Inflation rate (CPI)', 'Average rise in consumer prices', 'Low and steady (~2%)'],
              ['Interest rates', 'Cost of borrowing money', 'Depends on context'],
              ['Stock market indexes', 'Aggregate value of public companies (S&P 500, Dow)', 'Generally rising long-term']
            ]}
          />

          <Callout kind="warn" title="Recession definition">
            A <Term>recession</Term> is commonly defined as two consecutive quarters of negative GDP growth. Comes with rising unemployment, falling consumer spending, and often falling stock prices. The opposite is an expansion. Recessions and expansions together make up the "business cycle."
          </Callout>
        </>
      )
    },
    {
      id: 'labor-consumer',
      title: 'Labor & Consumer Issues',
      content: (
        <>
          <Table
            headers={['Topic', 'Key facts']}
            rows={[
              ['Labor unions', 'Workers organize to bargain collectively for wages, hours, and conditions. Major U.S. union era was 1935-1970s.'],
              ['Minimum wage', 'Federal floor (currently $7.25/hr); states can set higher. Many states and cities have done so.'],
              ['Right-to-work laws', 'Some states ban requiring union membership as a condition of employment.'],
              ['OSHA', 'Occupational Safety and Health Administration — federal workplace safety regulator.'],
              ['EEOC', 'Equal Employment Opportunity Commission — enforces anti-discrimination employment law.'],
              ['Consumer protection', 'FTC (Federal Trade Commission), FDA (Food & Drug Administration), CFPB (Consumer Financial Protection Bureau) enforce rules against fraud and unsafe products.'],
              ['Antitrust', 'Sherman Antitrust Act (1890), Clayton Act (1914) — prevent monopolies and anti-competitive behavior.']
            ]}
          />

          <p className="font-semibold mt-4">Personal finance — basics every adult needs</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Budget</strong>: track income vs expenses; aim for spending &lt; income. The 50-30-20 rule: 50% needs, 30% wants, 20% savings/debt.</li>
            <li><strong>Credit score</strong>: 300-850. Affects loan rates and rental applications. Built by paying on time, keeping balances low, and not opening too many accounts at once.</li>
            <li><strong>Compound interest</strong>: interest on previous interest. Helps savings (you earn interest on your interest); hurts unpaid credit cards (you pay interest on your interest).</li>
            <li><strong>Saving vs investing</strong>: savings = stability and short-term security (low return, low risk). Investing = growth (higher return, higher risk).</li>
            <li><strong>Insurance</strong>: pay a regular premium to transfer the risk of catastrophic loss (health, auto, home, life, disability).</li>
            <li><strong>Tax-advantaged retirement accounts</strong>: 401(k) (through employer) and IRA. Money grows tax-free or tax-deferred. Especially powerful when started young.</li>
          </ul>

          <Callout kind="tip" title="Why compound interest is the most important math you\'ll learn">
            <p>$1,000 at 7% per year for 40 years becomes $14,974. That\'s not the same number times 40 — it\'s the result of interest earning interest. Saving early matters more than saving large amounts later.</p>
            <p>Same in reverse: a $5,000 credit card balance at 20% interest, only paying minimums, can take 25+ years to pay off and cost over $20,000 in interest. Compound interest works against you with debt.</p>
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Scarcity', def: 'Limited resources relative to unlimited wants — the foundation of economics.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Opportunity cost', def: 'What you give up by making a choice.' },
      { term: 'Supply', def: 'Quantity producers offer at different prices.' },
      { term: 'Demand', def: 'Quantity consumers want at different prices.' },
      { term: 'GDP', def: 'Total value of all final goods and services produced in a country in a year.' },
      { term: 'Inflation', def: 'A general rise in prices over time.' },
      { term: 'Recession', def: 'Two consecutive quarters of negative GDP growth.' },
      { term: 'Federal Reserve', def: 'The U.S. central bank, which sets monetary policy.' },
      { term: 'Compound interest', def: 'Interest calculated on previous interest, not just the original principal.' }
    ],
    laws: [
      { name: 'Law of demand', desc: 'Price ↑ → quantity demanded ↓ (and vice versa).' },
      { name: 'Law of supply', desc: 'Price ↑ → quantity supplied ↑.' },
      { name: 'Equilibrium', desc: 'The price where supply = demand.' }
    ],
    methods: [
      { name: 'Fed playbook', desc: 'Recession → lower rates. Inflation → raise rates.' },
      { name: 'Distinguish micro vs macro', desc: 'Micro = one market, one firm. Macro = whole economy.' }
    ]
  },
  questions: [
    { q: 'A "market economy" means decisions are mainly made by:', type: 'mcq', choices: ['Government', 'Tradition', 'Private individuals and firms', 'Religious authorities'], correct: 2, difficulty: 'E', explanation: 'Market = decisions through private supply, demand, prices.' },
    { q: 'When demand goes up and supply stays the same, price will likely:', type: 'mcq', choices: ['Drop', 'Rise', 'Stay the same', 'Disappear'], correct: 1, difficulty: 'E', explanation: 'More buyers competing for the same stock → higher price.' },
    { q: 'Opportunity cost is best described as:', type: 'mcq', choices: ['Money lost in a bad investment', 'The value of the next-best option you gave up', 'Inflation', 'A type of tax'], correct: 1, difficulty: 'M', explanation: 'It\'s what you sacrificed by choosing one option over another.' },
    { q: 'GDP measures:', type: 'mcq', choices: [
      'Government taxes collected',
      'Total goods/services produced in a country in a year',
      'Number of unemployed people',
      'Stock prices'
    ], correct: 1, difficulty: 'M', explanation: 'GDP = total value of production over a year.' },
    { q: 'To slow down high inflation, the Fed typically:', type: 'mcq', choices: [
      'Lowers interest rates',
      'Raises interest rates',
      'Eliminates taxes',
      'Prints more money'
    ], correct: 1, difficulty: 'M', explanation: 'Raising rates cools borrowing and demand → tames inflation.' },
    { q: 'Which is a fiscal policy tool?', type: 'mcq', choices: ['Reserve requirements', 'Open-market operations', 'Government spending and taxes', 'Setting the federal funds rate'], correct: 2, difficulty: 'M', explanation: 'Fiscal = Congress/President. Spending + taxes.' },
    { q: 'A monopoly is:', type: 'mcq', choices: [
      'Many small competitors',
      'One firm controlling a market',
      'A government agency',
      'A type of tax'
    ], correct: 1, difficulty: 'E', explanation: 'Single seller dominates the market.' },
    { q: 'A higher credit score generally means:', type: 'mcq', choices: ['Higher interest rates on loans', 'Lower interest rates on loans', 'No effect on borrowing', 'Higher taxes'], correct: 1, difficulty: 'M', explanation: 'Better credit → cheaper loans because you\'re less risky.' },
    { q: 'A recession is officially defined as:', type: 'mcq', choices: [
      'Any year of economic struggle',
      'Two consecutive quarters of negative GDP growth',
      'When unemployment exceeds 10%',
      'When the stock market falls 20%'
    ], correct: 1, difficulty: 'M', explanation: 'Standard definition: two quarters of GDP decline.' }
  ]
};
