import React from 'react';
import { Callout, Table, Term, Pill } from '../components/Visual.jsx';

export default {
  id: 23,
  title: 'Science 2 — Life Science (Biology)',
  subtitle: 'Cells, energy, body systems, genetics, evolution, ecosystems. About 40% of the GED Science test.',
  blocks: [
    {
      id: 'why-bio',
      title: 'How to Study Biology for the GED',
      content: (
        <>
          <p>Biology is roughly <strong>40% of the GED Science test</strong> — the largest category. The good news: most questions test core ideas, not rare details. If you understand cells, energy, body systems, basic genetics, and evolution, you\'re prepared.</p>
          <Callout kind="tip" title="The big themes that connect everything">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>All life is made of cells.</strong> Cells do all the work.</li>
              <li><strong>Energy flows; matter cycles.</strong> Sunlight → plants → animals → decomposers.</li>
              <li><strong>DNA is the universal code.</strong> Same chemistry in every organism on Earth.</li>
              <li><strong>Evolution explains diversity.</strong> Variation + heredity + differential survival → species adapt over time.</li>
              <li><strong>Organisms interact with their environment.</strong> Ecology.</li>
            </ol>
          </Callout>
        </>
      )
    },
    {
      id: 'cell-structure',
      title: 'Cell Structures & Functions',
      content: (
        <>
          <p>The <Term>cell</Term> is the basic unit of life. All organisms are made of one or more cells. Cells fall into two categories:</p>
          <Table
            headers={['Cell type', 'Examples', 'Has nucleus?', 'Examples of organelles']}
            rows={[
              ['Prokaryotic', 'Bacteria, archaea', 'No (DNA loose in cytoplasm)', 'Cytoplasm, ribosomes, cell wall, plasmid'],
              ['Eukaryotic', 'Plants, animals, fungi, protists', 'Yes (DNA enclosed in nucleus)', 'Nucleus, mitochondria, ER, Golgi, lysosomes, ribosomes']
            ]}
          />
          <p className="mt-3 text-sm">All multicellular life — including humans — is made of eukaryotic cells. Bacteria are prokaryotic.</p>

          <p className="font-semibold mt-4">Major organelles ("little organs") and their jobs</p>
          <Table
            headers={['Organelle', 'Job']}
            rows={[
              ['Nucleus', 'Stores DNA, controls cell activities (the "brain")'],
              ['Mitochondria', '"Powerhouse" — generates ATP via cellular respiration'],
              ['Ribosomes', 'Build proteins from amino acids'],
              ['Endoplasmic Reticulum (ER)', 'Rough ER (covered with ribosomes) makes proteins; smooth ER makes lipids and detoxifies'],
              ['Golgi apparatus', 'Modifies, packages, and ships proteins (the "post office")'],
              ['Lysosomes', 'Digestion and waste breakdown (the "stomach")'],
              ['Chloroplasts (plants only)', 'Site of photosynthesis — capture sunlight to make sugar'],
              ['Cell wall (plants & bacteria)', 'Rigid outer layer for support and protection'],
              ['Cell membrane', 'Selectively permeable boundary controlling what enters and leaves'],
              ['Cytoplasm', 'Jelly-like fluid where organelles float and reactions occur'],
              ['Vacuole (especially in plants)', 'Storage of water, food, waste']
            ]}
          />

          <Callout kind="info" title="Plant vs animal cells — the differences">
            Both have nucleus, mitochondria, ER, Golgi, ribosomes, and cell membrane. <strong>Plant cells additionally have:</strong> cell wall (stiff outer layer), chloroplasts (for photosynthesis), and a large central vacuole. <strong>Animal cells additionally have:</strong> centrioles (involved in cell division). Knowing the differences is heavily tested.
          </Callout>
        </>
      )
    },
    {
      id: 'cell-energy',
      title: 'Cell Processes & Energy',
      content: (
        <>
          <p>Two of the most important processes in biology are mirror images of each other:</p>
          <Callout kind="formula" title="Photosynthesis (in plants and some microbes)">
            6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ (glucose) + 6 O₂<br/>
            <em>Plants take in carbon dioxide and water, use sunlight as energy, and make glucose (sugar) and oxygen.</em>
          </Callout>
          <Callout kind="formula" title="Cellular respiration (in all life)">
            C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ATP (energy)<br/>
            <em>Cells "burn" glucose with oxygen, producing carbon dioxide, water, and the energy currency ATP.</em>
          </Callout>
          <p className="mt-2 text-sm">Photosynthesis stores energy from the sun in chemical bonds (glucose). Respiration releases that energy as ATP. The CO₂/O₂ inputs and outputs of the two processes are exactly opposite, which is why plants and animals depend on each other.</p>

          <p className="font-semibold mt-4">Cell division — making new cells</p>
          <Table
            headers={['Process', 'Result', 'Purpose']}
            rows={[
              ['Mitosis', 'One cell → two genetically identical cells', 'Growth, repair, asexual reproduction'],
              ['Meiosis', 'One cell → four cells with HALF the chromosomes', 'Making sex cells (sperm, egg) for reproduction']
            ]}
          />

          <p className="font-semibold mt-4">Transport across membranes</p>
          <Table
            headers={['Type', 'How it works', 'Energy needed?']}
            rows={[
              ['Diffusion', 'Particles move from high → low concentration', 'No (passive)'],
              ['Osmosis', 'Diffusion specifically of WATER across a membrane', 'No'],
              ['Active transport', 'Moves against the gradient (low to high)', 'Yes — uses ATP']
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
          <p>The human body is organized into systems, each with specific organs and functions. The systems work together — none operates in isolation.</p>
          <Table
            headers={['System', 'Main organs', 'Function']}
            rows={[
              ['Circulatory', 'Heart, blood vessels (arteries, veins, capillaries), blood', 'Transports oxygen, nutrients, hormones, and waste'],
              ['Respiratory', 'Lungs, trachea, diaphragm, bronchi', 'Gas exchange — O₂ in, CO₂ out'],
              ['Digestive', 'Mouth, esophagus, stomach, intestines, liver, pancreas', 'Breaks down food, absorbs nutrients, eliminates waste'],
              ['Nervous', 'Brain, spinal cord, nerves, sensory organs', 'Communication, control, sensation, thought'],
              ['Endocrine', 'Hormone-producing glands (pituitary, thyroid, pancreas, adrenal)', 'Slow, body-wide signaling via hormones'],
              ['Muscular', 'Skeletal, smooth, and cardiac muscle', 'Movement, posture, heat'],
              ['Skeletal', 'Bones, cartilage, ligaments, tendons', 'Support, protection of organs, blood-cell production'],
              ['Excretory (urinary)', 'Kidneys, bladder, ureters, urethra', 'Removes waste, regulates fluid balance, blood pressure'],
              ['Reproductive', 'Ovaries/testes, uterus, etc.', 'Produces offspring'],
              ['Immune / Lymphatic', 'White blood cells, lymph nodes, spleen, thymus', 'Defends against pathogens'],
              ['Integumentary', 'Skin, hair, nails', 'Protection, temperature regulation']
            ]}
          />

          <Callout kind="info" title="System interactions — these come up on the GED">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Lungs (respiratory) bring O₂ to the bloodstream (circulatory) which carries it everywhere.</li>
              <li>Digestive system breaks down food into nutrients; circulatory delivers them.</li>
              <li>Nervous system tells muscles to contract.</li>
              <li>Endocrine system uses hormones (carried by blood) for slower, longer-lasting signals.</li>
            </ul>
          </Callout>
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
              ['Pathogens', 'Bacteria, viruses, fungi, parasites, prions — agents that cause disease.'],
              ['Antibiotics', 'Kill bacteria. Useless against viruses (which is why doctors don\'t prescribe them for colds).'],
              ['Antibiotic resistance', 'Bacteria evolve resistance to antibiotics. Major medical concern.'],
              ['Vaccines', 'Train the immune system to recognize a pathogen safely. Provide immunity without illness.'],
              ['Communicable diseases', 'Spread between people: flu, COVID-19, tuberculosis, measles, HIV.'],
              ['Non-communicable diseases', 'Don\'t spread person-to-person: heart disease, most cancers, diabetes, Alzheimer\'s.'],
              ['Risk factors', 'Genetic + lifestyle (diet, exercise, smoking, alcohol).'],
              ['Mental health', 'Depression, anxiety, schizophrenia, etc. — real medical conditions, often treatable.'],
              ['Public health', 'Sanitation, vaccination programs, food safety regulations — have saved more lives historically than any other medical intervention.']
            ]}
          />
        </>
      )
    },
    {
      id: 'reproduction-heredity',
      title: 'Reproduction & Heredity (Genetics)',
      content: (
        <>
          <p><Term>DNA</Term> (deoxyribonucleic acid) stores genetic information in sequences of four bases: <strong>A, T, G, C</strong>. It\'s organized into <Term>genes</Term> — sections of DNA that code for specific proteins. Genes are bundled into <Term>chromosomes</Term>. Humans have 46 chromosomes (23 pairs), one set from each parent.</p>

          <Callout kind="info" title="Mendelian genetics — the basics">
            <p><Term>Alleles</Term> are different versions of a gene (e.g., a gene for eye color might have a "brown" allele and a "blue" allele).</p>
            <p><strong>Dominant</strong> alleles are written with a CAPITAL letter (e.g., B). They mask <strong>recessive</strong> alleles (lowercase, b) when both are present.</p>
            <p><Term>Genotype</Term> = the actual alleles (BB, Bb, or bb).</p>
            <p><Term>Phenotype</Term> = the visible trait. BB and Bb both show the dominant trait; only bb shows the recessive.</p>
          </Callout>

          <p className="font-semibold mt-4">Punnett squares — predicting offspring</p>
          <p>A Punnett square is a grid that shows the possible offspring genotypes from two parents. Cross two heterozygous parents (Bb × Bb):</p>
          <Table
            headers={['', 'B', 'b']}
            rows={[
              ['B', 'BB', 'Bb'],
              ['b', 'Bb', 'bb']
            ]}
          />
          <p className="text-sm mt-2">Result ratio: 1 BB : 2 Bb : 1 bb. Phenotype ratio: 3 dominant : 1 recessive (75% : 25%). This is the famous "3:1 ratio" Mendel discovered with peas.</p>

          <Callout kind="tip" title="Real-world genetic conditions">
            Many genetic conditions follow simple Mendelian patterns. Sickle cell disease, cystic fibrosis, and Huntington\'s disease are tested at this level on the GED. Knowing whether a condition is dominant or recessive — and how Punnett squares predict outcomes — is key.
          </Callout>
        </>
      )
    },
    {
      id: 'modern-genetics',
      title: 'Modern Genetics',
      content: (
        <>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><Term>Mutations</Term> = random changes in DNA sequence. Most are neutral; some harmful, some beneficial. Mutations are the raw material of evolution.</li>
            <li><strong>Genetic engineering</strong>: directly modifying DNA. CRISPR-Cas9 has revolutionized this since 2012.</li>
            <li><strong>GMOs</strong> (genetically modified organisms): plants and animals with engineered DNA. Common in agriculture (corn, soy, cotton).</li>
            <li><strong>Pedigrees</strong> trace inheritance through family trees, useful for genetic counseling.</li>
            <li><strong>Sex-linked traits</strong>: alleles on X or Y chromosomes. Color blindness and hemophilia are X-linked recessive — far more common in males because males have only one X.</li>
            <li><strong>Human Genome Project</strong>: completed 2003, mapped all human genes. Foundation of personalized medicine.</li>
          </ul>
        </>
      )
    },
    {
      id: 'evolution',
      title: 'Evolution & Natural Selection',
      content: (
        <>
          <p><Term>Evolution</Term> is the change in heritable traits of a population over generations. It\'s the central organizing principle of biology — proposed in detail by Charles Darwin in <em>On the Origin of Species</em> (1859) — and supported by overwhelming evidence since.</p>
          <Callout kind="formula" title="Natural selection in 4 steps">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Individuals in a population <strong>vary</strong> genetically.</li>
              <li>This variation is <strong>inherited</strong> (passed from parents to offspring).</li>
              <li>More offspring are produced than the environment can support — only some <strong>survive and reproduce</strong>.</li>
              <li>Variants that improve survival/reproduction become <strong>more common</strong> over generations.</li>
            </ol>
            Repeat for millions of years and you get the diversity of life on Earth.
          </Callout>

          <Callout kind="info" title="Evidence for evolution — multiple independent lines">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>Fossil record</strong> — gradual change over millions of years; transitional forms.</li>
              <li><strong>Comparative anatomy</strong> — homologous structures (whale fin, human arm, bat wing all have same bone structure → common ancestor).</li>
              <li><strong>Embryology</strong> — early embryos of vertebrates look strikingly similar.</li>
              <li><strong>DNA evidence</strong> — closely related species share more genes; molecular clock matches fossil dating.</li>
              <li><strong>Direct observation</strong> — antibiotic-resistant bacteria, peppered moths in industrial Britain, Darwin\'s finches.</li>
              <li><strong>Geographic distribution</strong> — closely related species are found near each other (e.g., marsupials in Australia).</li>
            </ul>
          </Callout>

          <Callout kind="warn" title="Common misconceptions">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Evolution is NOT "individuals adapting" during their lifetime — it\'s populations changing over generations.</li>
              <li>Evolution does NOT have a "goal" — it\'s not progress toward complexity. Many lineages get simpler over time.</li>
              <li>"Survival of the fittest" doesn\'t mean "strongest." It means best adapted to the environment — which sometimes means small, social, hidden, or efficient.</li>
              <li>Humans did NOT evolve from monkeys. Humans and monkeys share a common ancestor.</li>
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
          <p>Biology zooms out from cells to organisms to populations to ecosystems. Levels of organization:</p>
          <Table
            headers={['Level', 'Description']}
            rows={[
              ['Organism', 'Single living individual'],
              ['Population', 'All members of one species in an area'],
              ['Community', 'All populations of different species interacting'],
              ['Ecosystem', 'Community + abiotic environment (water, air, soil, climate)'],
              ['Biome', 'Large region with similar climate (desert, rainforest, tundra, grassland)'],
              ['Biosphere', 'All life on Earth and the parts of Earth where life exists']
            ]}
          />

          <Callout kind="formula" title="Energy flow — food chain levels">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Producers</strong> (plants) — make their own food via photosynthesis.</li>
              <li><strong>Primary consumers</strong> (herbivores) — eat producers.</li>
              <li><strong>Secondary consumers</strong> (carnivores, omnivores) — eat herbivores.</li>
              <li><strong>Tertiary consumers</strong> (top predators) — eat other carnivores.</li>
              <li><strong>Decomposers</strong> (bacteria, fungi) — break down dead organisms, returning nutrients to soil.</li>
            </ol>
            <p className="mt-2"><strong>Only ~10% of energy passes to the next level</strong> (the rest is lost as heat). That\'s why food chains rarely have more than 4-5 levels — there\'s not enough energy to support more.</p>
          </Callout>

          <p className="font-semibold mt-4">Species relationships</p>
          <Table
            headers={['Relationship', 'Effect on each species']}
            rows={[
              ['Mutualism', 'BOTH benefit (bees + flowers, gut bacteria + humans)'],
              ['Commensalism', 'One benefits, other unaffected (barnacles on whales)'],
              ['Parasitism', 'Parasite benefits, host harmed (tapeworms, ticks)'],
              ['Predation', 'Predator benefits, prey killed'],
              ['Competition', 'Both species lose — fighting for the same limited resource']
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
      { term: 'Mitosis', def: 'Cell division producing two genetically identical cells.' },
      { term: 'Meiosis', def: 'Cell division producing four cells with half the chromosomes (gametes).' },
      { term: 'Allele', def: 'A variant of a gene.' },
      { term: 'Photosynthesis', def: 'Plants converting CO₂ + H₂O + light → glucose + O₂.' },
      { term: 'Cellular respiration', def: 'Cells extracting energy from glucose using O₂.' },
      { term: 'Natural selection', def: 'Differential survival/reproduction of inherited variants — driver of evolution.' }
    ],
    laws: [
      { name: 'Photosynthesis', desc: '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂' },
      { name: 'Cellular respiration', desc: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP' },
      { name: 'Mendelian dominance', desc: 'Dominant alleles mask recessive ones in heterozygotes.' },
      { name: '10% rule', desc: 'About 10% of energy transfers to the next trophic level.' },
      { name: 'Cell theory', desc: 'All life is made of cells. Cells come from pre-existing cells.' }
    ],
    methods: [
      { name: 'Punnett square', desc: 'Grid for predicting offspring genotype/phenotype ratios.' },
      { name: 'Compare cell types', desc: 'Plant cells have walls, chloroplasts, large vacuole. Animal cells don\'t.' }
    ]
  },
  questions: [
    { q: 'Which organelle generates most of a cell\'s ATP?', type: 'mcq', choices: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Golgi'], correct: 1, difficulty: 'E', explanation: 'Mitochondria — the "powerhouse."' },
    { q: 'What process do plants use to make glucose?', type: 'mcq', choices: ['Cellular respiration', 'Mitosis', 'Photosynthesis', 'Diffusion'], correct: 2, difficulty: 'E', explanation: 'Photosynthesis converts CO₂ + H₂O + light → glucose.' },
    { q: 'In a Bb × Bb cross, what fraction of offspring will display the recessive phenotype?', type: 'mcq', choices: ['1/4', '1/2', '3/4', 'None'], correct: 0, difficulty: 'M', explanation: '1 BB : 2 Bb : 1 bb. Only bb (1/4 of offspring) shows recessive trait.' },
    { q: 'Mitosis produces:', type: 'mcq', choices: [
      'Four cells with half the chromosomes',
      'Two cells genetically identical to the parent',
      'Sex cells',
      'No new cells'
    ], correct: 1, difficulty: 'M', explanation: 'Mitosis = identical division for growth/repair.' },
    { q: 'A bee pollinating a flower is an example of:', type: 'mcq', choices: ['Predation', 'Parasitism', 'Mutualism', 'Competition'], correct: 2, difficulty: 'E', explanation: 'Both benefit — mutualism.' },
    { q: 'Antibiotics work against:', type: 'mcq', choices: ['Viruses', 'Bacteria', 'Fungi only', 'Cancer cells'], correct: 1, difficulty: 'M', explanation: 'Antibiotics target bacteria, not viruses.' },
    { q: 'Approximately what percent of energy passes from one trophic level to the next?', type: 'math', correct: 10, difficulty: 'M', explanation: '~10% rule — most energy is lost as heat.' },
    { q: 'A genetic mutation is:', type: 'mcq', choices: ['Always harmful', 'A change in the DNA sequence', 'Caused only by radiation', 'A type of disease'], correct: 1, difficulty: 'E', explanation: 'A mutation is any change in DNA. Effects vary.' },
    { q: 'Natural selection requires variation, inheritance, and:', type: 'mcq', choices: ['Migration', 'Differential survival/reproduction', 'Earthquake', 'Mutation in every generation'], correct: 1, difficulty: 'M', explanation: 'Some variants survive/reproduce more than others.' },
    { q: 'Which organelle is found in plant cells but NOT animal cells?', type: 'mcq', choices: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'], correct: 2, difficulty: 'M', explanation: 'Chloroplasts perform photosynthesis — only in plants.' }
  ]
};
