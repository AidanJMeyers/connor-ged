import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 20,
  title: 'Social Studies 4 — Economics',
  subtitle: 'Supply & demand, the U.S. economic system, the role of government, labor & consumer issues.',
  blocks: [
    {
      id: 'basic-econ',
      title: 'Basic Economic Concepts',
      content: (
        <>
          <p>Every economy answers three questions: <strong>What</strong> to produce? <strong>How</strong> to produce it? <strong>For whom</strong>?</p>

          <Table
            headers={['Concept', 'Definition']}
            rows={[
              ['Scarcity', 'Limited resources vs unlimited wants — the core of economics.'],
              ['Opportunity cost', 'What you give up by choosing one option (the next-best alternative).'],
              ['Goods', 'Tangible things produced and sold.'],
              ['Services', 'Intangible work performed for someone (haircut, dental visit).'],
              ['Producers', 'Make goods/services.'],
              ['Consumers', 'Buy goods/services.'],
              ['Resources / factors of production', 'Land, labor, capital, entrepreneurship.']
            ]}
          />

          <Callout kind="formula" title="Law of supply and demand">
            <strong>Demand</strong>: as price ↓, quantity demanded ↑ (buyers want more when it\'s cheaper).<br/>
            <strong>Supply</strong>: as price ↑, quantity supplied ↑ (sellers offer more when they earn more).<br/>
            <strong>Equilibrium</strong>: the price where supply = demand.
          </Callout>

          <Callout kind="info" title="Shifters">
            Demand shifts up with: income up, more buyers, taste change, related-goods price change.<br/>
            Supply shifts up with: cheaper inputs, better technology, fewer regulations, more producers.
          </Callout>
        </>
      )
    },
    {
      id: 'us-economy',
      title: 'The U.S. Economic System',
      content: (
        <>
          <p>The U.S. is a <Term>mixed-market economy</Term>: mostly private ownership and free markets, with government regulation and some public services.</p>
          <Table
            headers={['System', 'Who decides', 'Examples']}
            rows={[
              ['Market (capitalist)', 'Individuals, private firms', 'U.S., U.K., Japan'],
              ['Command (socialist/communist)', 'Government', 'North Korea (extreme); historical USSR'],
              ['Mixed', 'Mostly markets, some government regulation', 'Most modern economies, including U.S.'],
              ['Traditional', 'Custom, family, tribal practice', 'Some indigenous societies']
            ]}
          />

          <p className="font-semibold mt-3">Money & banking basics</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Money</strong> serves three roles: medium of exchange, unit of account, store of value.</li>
            <li>Banks accept deposits and make loans, profiting from the interest spread.</li>
            <li>The <Term>Federal Reserve</Term> (the Fed) is the U.S. central bank — it sets monetary policy and influences interest rates.</li>
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
              ['Monetary', 'Federal Reserve', 'Interest rates, money supply, reserve requirements'],
              ['Fiscal', 'Congress + President', 'Government spending and taxation']
            ]}
          />

          <Callout kind="info" title="Fed actions to fight a recession">
            Lower interest rates → more borrowing → more spending → more growth.
            <br/><strong>To fight inflation:</strong> raise interest rates → less borrowing → cooler economy.
          </Callout>

          <p className="font-semibold mt-3">Key macroeconomic indicators</p>
          <Table
            headers={['Indicator', 'What it measures']}
            rows={[
              ['GDP', 'Total value of goods/services produced in a year'],
              ['Unemployment rate', '% of workforce actively seeking but lacking jobs'],
              ['Inflation rate (CPI)', 'Average rise in consumer prices'],
              ['Interest rates', 'Cost of borrowing money'],
              ['Stock market indexes', 'Aggregate value of public companies (S&P 500, Dow)']
            ]}
          />
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
              ['Labor unions', 'Workers organize to bargain collectively for wages, hours, conditions.'],
              ['Minimum wage', 'Federal floor; states can set higher.'],
              ['Right-to-work laws', 'Some states ban requiring union membership.'],
              ['OSHA', 'Workplace safety regulator (federal).'],
              ['EEOC', 'Enforces anti-discrimination employment law.'],
              ['Consumer Protection', 'FTC, FDA, CFPB enforce rules against fraud and unsafe products.'],
              ['Antitrust', 'Sherman & Clayton Acts prevent monopolies.']
            ]}
          />

          <p className="font-semibold mt-3">Personal finance literacy</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Budget</strong>: track income vs expenses; aim for spending &lt; income.</li>
            <li><strong>Credit score</strong>: 300-850 — affects loan rates. Pay on time, keep balances low.</li>
            <li><strong>Compound interest</strong>: interest on interest. Helps savings; hurts unpaid credit cards.</li>
            <li><strong>Saving vs investing</strong>: savings = stability; investing = growth (with risk).</li>
            <li><strong>Insurance</strong>: pay a premium to transfer the risk of catastrophic loss.</li>
          </ul>
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
      { term: 'Inflation', def: 'A general rise in prices over time.' }
    ],
    laws: [
      { name: 'Law of demand', desc: 'Price ↑ → quantity demanded ↓.' },
      { name: 'Law of supply', desc: 'Price ↑ → quantity supplied ↑.' },
      { name: 'Equilibrium', desc: 'The price where supply = demand.' }
    ],
    methods: [
      { name: 'Fed playbook', desc: 'Recession → lower rates. Inflation → raise rates.' }
    ]
  },
  questions: [
    { q: 'A "market economy" means decisions are mainly made by:', type: 'mcq', choices: ['Government', 'Tradition', 'Private individuals and firms', 'Religious authorities'], correct: 2, difficulty: 'E', explanation: 'Market = decisions through private supply, demand, prices.' },
    { q: 'When demand goes up and supply stays the same, price will likely:', type: 'mcq', choices: ['Drop', 'Rise', 'Stay the same', 'Disappear'], correct: 1, difficulty: 'E', explanation: 'More buyers competing for the same stock → higher price.' },
    { q: 'Opportunity cost is best described as:', type: 'mcq', choices: ['Money lost in a bad investment', 'The value of the next-best option you gave up', 'Inflation', 'A type of tax'], correct: 1, difficulty: 'M', explanation: 'It\'s what you sacrificed by choosing one option.' },
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
    ], correct: 1, difficulty: 'M', explanation: 'Raising rates cools borrowing and demand.' },
    { q: 'Which is a fiscal policy tool?', type: 'mcq', choices: ['Reserve requirements', 'Open-market operations', 'Government spending and taxes', 'Setting the federal funds rate'], correct: 2, difficulty: 'M', explanation: 'Fiscal = Congress/President. Spending + taxes.' },
    { q: 'A monopoly is:', type: 'mcq', choices: [
      'Many small competitors',
      'One firm controlling a market',
      'A government agency',
      'A type of tax'
    ], correct: 1, difficulty: 'E', explanation: 'Single seller dominates the market.' },
    { q: 'A higher credit score generally means:', type: 'mcq', choices: ['Higher interest rates on loans', 'Lower interest rates on loans', 'No effect on borrowing', 'Higher taxes'], correct: 1, difficulty: 'M', explanation: 'Better credit → cheaper loans.' }
  ]
};
