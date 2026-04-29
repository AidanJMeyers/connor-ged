import React from 'react';
import { Callout, Table, Term, Pill } from '../components/Visual.jsx';

export default {
  id: 23,
  title: 'Science 2 — Life Science (Biology)',
  subtitle: 'Cells, energy & metabolism, body systems, genetics, evolution, and ecosystems.',
  blocks: [
    {
      id: 'cell-structure',
      title: 'Cell Structures & Functions',
      content: (
        <>
          <p>The <Term>cell</Term> is the basic unit of life. All organisms are made of one or more cells.</p>
          <Table
            headers={['Cell type', 'Examples', 'Has nucleus?', 'Examples of organelles']}
            rows={[
              ['Prokaryotic', 'Bacteria, archaea', 'No', 'Cytoplasm, ribosomes, cell wall, plasmid'],
              ['Eukaryotic', 'Plants, animals, fungi, protists', 'Yes', 'Nucleus, mitochondria, ER, Golgi, lysosomes']
            ]}
          />

          <Table
            headers={['Organelle', 'Job']}
            rows={[
              ['Nucleus', 'Stores DNA, controls cell activities'],
              ['Mitochondria', '"Powerhouse" — generates ATP via cellular respiration'],
              ['Ribosomes', 'Build proteins'],
              ['Endoplasmic Reticulum (ER)', 'Rough ER (with ribosomes) makes proteins; Smooth ER makes lipids'],
              ['Golgi apparatus', 'Modifies, packages, ships proteins'],
              ['Lysosomes', 'Digestion, waste breakdown'],
              ['Chloroplasts (plants only)', 'Photosynthesis'],
              ['Cell wall (plants/bacteria)', 'Rigid outer support'],
              ['Cell membrane', 'Selectively permeable boundary']
            ]}
          />

          <Callout kind="info" title="Plant vs animal cell">
            Plant cells have <strong>cell wall, chloroplasts, large central vacuole</strong>. Animal cells do not. Both have nucleus, mitochondria, ER, Golgi, ribosomes, cell membrane.
          </Callout>
        </>
      )
    },
    {
      id: 'cell-energy',
      title: 'Cell Processes & Energy',
      content: (
        <>
          <Callout kind="formula" title="Photosynthesis (in plants)">
            6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ (glucose) + 6 O₂
          </Callout>
          <Callout kind="formula" title="Cellular respiration (in all life)">
            C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ATP (energy)
          </Callout>
          <p className="text-sm">Photosynthesis stores energy from the sun in glucose. Respiration releases that energy as ATP, the cell's energy currency.</p>

          <p className="font-semibold mt-3">Cell division</p>
          <Table
            headers={['Process', 'Result']}
            rows={[
              ['Mitosis', 'One cell → two identical cells (growth, repair)'],
              ['Meiosis', 'One cell → four cells, half the chromosomes (sex cells)']
            ]}
          />

          <p className="font-semibold mt-3">Transport across membranes</p>
          <Table
            headers={['Type', 'How it works']}
            rows={[
              ['Diffusion', 'Particles move from high → low concentration. No energy needed.'],
              ['Osmosis', 'Diffusion specifically of water across a membrane.'],
              ['Active transport', 'Moves against the gradient — uses ATP.']
            ]}
          />
        </>
      )
    },
    {
      id: 'body-systems',
      title: 'Human Body Systems',
      content: (
        <>
          <Table
            headers={['System', 'Main organs', 'Function']}
            rows={[
              ['Circulatory', 'Heart, blood vessels, blood', 'Transports oxygen, nutrients, hormones'],
              ['Respiratory', 'Lungs, trachea, diaphragm', 'Gas exchange — O₂ in, CO₂ out'],
              ['Digestive', 'Mouth, stomach, intestines, liver, pancreas', 'Breaks down food, absorbs nutrients'],
              ['Nervous', 'Brain, spinal cord, nerves', 'Communication, control, sensation'],
              ['Endocrine', 'Hormone-producing glands (pituitary, thyroid, pancreas)', 'Slow, body-wide signaling via hormones'],
              ['Muscular', 'Skeletal, smooth, cardiac muscle', 'Movement'],
              ['Skeletal', 'Bones, cartilage, ligaments', 'Support, protection, blood-cell production'],
              ['Excretory', 'Kidneys, bladder, skin, lungs', 'Removes waste, regulates fluid balance'],
              ['Reproductive', 'Ovaries/testes, uterus, etc.', 'Produces offspring'],
              ['Immune / Lymphatic', 'White blood cells, lymph nodes, spleen', 'Defends against pathogens']
            ]}
          />
        </>
      )
    },
    {
      id: 'health-issues',
      title: 'Health Issues',
      content: (
        <>
          <Table
            headers={['Topic', 'Notes']}
            rows={[
              ['Pathogens', 'Bacteria, viruses, fungi, parasites — cause disease'],
              ['Antibiotics', 'Kill bacteria — useless against viruses'],
              ['Vaccines', 'Train the immune system to recognize a pathogen safely'],
              ['Communicable diseases', 'Spread between people (flu, COVID-19, TB)'],
              ['Non-communicable', 'Don\'t spread (heart disease, cancer, diabetes)'],
              ['Risk factors', 'Genetic + lifestyle (diet, exercise, smoking)'],
              ['Mental health', 'Depression, anxiety — real medical conditions, often treatable']
            ]}
          />
        </>
      )
    },
    {
      id: 'reproduction-heredity',
      title: 'Reproduction & Heredity',
      content: (
        <>
          <p><Term>DNA</Term> stores genetic information in sequences of <strong>A, T, G, C</strong> bases. <Term>Genes</Term> are sections of DNA that code for proteins. <Term>Chromosomes</Term> are condensed DNA + protein structures. Humans have 46 chromosomes (23 pairs).</p>

          <Callout kind="info" title="Mendelian genetics">
            <strong>Alleles</strong> are different versions of a gene. <strong>Dominant</strong> alleles (capital letter, e.g., B) mask <strong>recessive</strong> ones (lowercase, b).<br/>
            Genotype = the alleles. Phenotype = the visible trait.<br/>
            BB or Bb → dominant phenotype. bb → recessive phenotype.
          </Callout>

          <p className="font-semibold mt-3">Punnett square example</p>
          <p>Cross Bb × Bb (both parents heterozygous):</p>
          <Table
            headers={['', 'B', 'b']}
            rows={[
              ['B', 'BB', 'Bb'],
              ['b', 'Bb', 'bb']
            ]}
          />
          <p className="text-sm">Result: 1 BB : 2 Bb : 1 bb → 3 dominant phenotype : 1 recessive (75% : 25%).</p>
        </>
      )
    },
    {
      id: 'modern-genetics',
      title: 'Modern Genetics',
      content: (
        <>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Mutations</strong> = changes in DNA sequence. Most are neutral; some harmful, some beneficial.</li>
            <li><strong>Genetic engineering</strong>: directly modifying DNA (CRISPR, GMOs).</li>
            <li><strong>Pedigrees</strong> trace inheritance through family trees.</li>
            <li><strong>Sex-linked traits</strong>: alleles on X or Y chromosomes (e.g., color blindness on X — more common in males).</li>
          </ul>
        </>
      )
    },
    {
      id: 'evolution',
      title: 'Evolution & Natural Selection',
      content: (
        <>
          <p><Term>Evolution</Term> = change in heritable traits of a population over generations. Driven by <Term>natural selection</Term> (Darwin):</p>
          <Callout kind="formula" title="Natural selection in 4 steps">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Individuals in a population <strong>vary</strong> genetically.</li>
              <li>Variants are <strong>inherited</strong>.</li>
              <li>More offspring are produced than can <strong>survive</strong>.</li>
              <li>Variants that improve survival/reproduction become <strong>more common</strong> over generations.</li>
            </ol>
          </Callout>

          <Callout kind="info" title="Evidence for evolution">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Fossil record</strong> — gradual change over millions of years</li>
              <li><strong>Anatomy</strong> — homologous structures (whale fin/human arm/bat wing have same bones)</li>
              <li><strong>Embryology</strong> — early embryos of vertebrates look similar</li>
              <li><strong>DNA</strong> — closely related species share more genes</li>
              <li><strong>Direct observation</strong> — antibiotic-resistant bacteria, peppered moths</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'ecosystems',
      title: 'Organization of Ecosystems',
      content: (
        <>
          <Table
            headers={['Level', 'Description']}
            rows={[
              ['Organism', 'Single living individual'],
              ['Population', 'All members of a species in an area'],
              ['Community', 'All populations interacting'],
              ['Ecosystem', 'Community + abiotic environment (water, air, soil)'],
              ['Biome', 'Large region with similar climate (desert, rainforest, tundra)'],
              ['Biosphere', 'All life on Earth']
            ]}
          />

          <Callout kind="formula" title="Energy flow — food chain levels">
            Producers (plants) → Primary consumers (herbivores) → Secondary consumers (carnivores) → Tertiary consumers → Decomposers
            <br/>~10% of energy passes to the next level (the rest is lost as heat).
          </Callout>

          <Table
            headers={['Relationship', 'Effect on each species']}
            rows={[
              ['Mutualism', 'Both benefit (bees + flowers)'],
              ['Commensalism', 'One benefits, other unaffected (barnacles on whales)'],
              ['Parasitism', 'Parasite benefits, host harmed (tapeworms)'],
              ['Predation', 'Predator benefits, prey killed'],
              ['Competition', 'Both lose — fighting for the same resource']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Cell', def: 'Basic unit of life.', tag: 'KEY', tagColor: 'sky' },
      { term: 'DNA', def: 'Double-helix molecule that stores genetic information.' },
      { term: 'Mitosis', def: 'Cell division producing two identical cells.' },
      { term: 'Meiosis', def: 'Cell division producing four cells with half the chromosomes (gametes).' },
      { term: 'Allele', def: 'A variant of a gene.' },
      { term: 'Photosynthesis', def: 'Plants converting CO₂ + H₂O + light → glucose + O₂.' },
      { term: 'Natural selection', def: 'Differential survival/reproduction of inherited variants.' }
    ],
    laws: [
      { name: 'Photosynthesis', desc: '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂' },
      { name: 'Cellular respiration', desc: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP' },
      { name: 'Mendelian dominance', desc: 'Dominant alleles mask recessive ones in heterozygotes.' },
      { name: '10% rule', desc: 'About 10% of energy transfers to the next trophic level.' }
    ],
    methods: [
      { name: 'Punnett square', desc: 'Grid for predicting offspring genotype/phenotype ratios.' }
    ]
  },
  questions: [
    { q: 'Which organelle generates most of a cell\'s ATP?', type: 'mcq', choices: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Golgi'], correct: 1, difficulty: 'E', explanation: 'Mitochondria — the "powerhouse."' },
    { q: 'What process do plants use to make glucose?', type: 'mcq', choices: ['Cellular respiration', 'Mitosis', 'Photosynthesis', 'Diffusion'], correct: 2, difficulty: 'E', explanation: 'Photosynthesis converts CO₂ + H₂O + light → glucose.' },
    { q: 'In a Bb × Bb cross, what fraction of offspring will display the recessive phenotype?', type: 'mcq', choices: ['1/4', '1/2', '3/4', 'None'], correct: 0, difficulty: 'M', explanation: '1 BB : 2 Bb : 1 bb. Only bb = 25% recessive.' },
    { q: 'Mitosis produces:', type: 'mcq', choices: [
      'Four cells with half the chromosomes',
      'Two cells genetically identical to the parent',
      'Sex cells',
      'No new cells'
    ], correct: 1, difficulty: 'M', explanation: 'Mitosis = identical division for growth/repair.' },
    { q: 'A bee pollinating a flower is an example of:', type: 'mcq', choices: ['Predation', 'Parasitism', 'Mutualism', 'Competition'], correct: 2, difficulty: 'E', explanation: 'Both benefit — mutualism.' },
    { q: 'Antibiotics work against:', type: 'mcq', choices: ['Viruses', 'Bacteria', 'Fungi only', 'Cancer cells'], correct: 1, difficulty: 'M', explanation: 'Antibiotics target bacteria, not viruses.' },
    { q: 'Approximately what percent of energy passes from one trophic level to the next?', type: 'math', correct: 10, difficulty: 'M', explanation: '~10% rule.' },
    { q: 'A genetic mutation is:', type: 'mcq', choices: ['Always harmful', 'A change in the DNA sequence', 'Caused only by radiation', 'A type of disease'], correct: 1, difficulty: 'E', explanation: 'A mutation is any change in DNA. Effects vary.' },
    { q: 'Natural selection requires variation, inheritance, and:', type: 'mcq', choices: ['Migration', 'Differential survival/reproduction', 'Earthquake', 'Mutation in every generation'], correct: 1, difficulty: 'M', explanation: 'Some variants survive/reproduce more than others.' }
  ]
};
