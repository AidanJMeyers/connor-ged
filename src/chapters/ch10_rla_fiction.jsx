import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 10,
  title: 'RLA 3 — Interpreting Fiction',
  subtitle: 'Plot, inference, character, theme, style & POV, and figurative language.',
  blocks: [
    {
      id: 'plot',
      title: 'Plot Elements',
      content: (
        <>
          <p>The standard "story arc" has 5 parts:</p>
          <Table
            headers={['Stage', 'What happens']}
            rows={[
              ['Exposition', 'Setting, characters, normal world'],
              ['Rising action', 'Conflict develops; complications stack up'],
              ['Climax', 'Turning point — the most intense moment'],
              ['Falling action', 'Aftermath of the climax; consequences play out'],
              ['Resolution / dénouement', 'Loose ends tied; new normal']
            ]}
          />
          <Callout kind="info" title="Conflict types">
            <strong>External</strong>: character vs character, character vs nature, character vs society.<br/>
            <strong>Internal</strong>: character vs self (a moral or emotional struggle).
          </Callout>
        </>
      )
    },
    {
      id: 'inference',
      title: 'Inferences in Fiction',
      content: (
        <>
          <p>Fiction rarely tells you everything outright. An <Term>inference</Term> is a "reading between the lines" conclusion based on evidence in the text.</p>
          <Callout kind="tip" title="Inference checklist">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>What does the text <strong>say</strong> directly?</li>
              <li>What does that <strong>imply</strong>?</li>
              <li>Is the inference supported by multiple clues, not just one detail?</li>
            </ol>
          </Callout>
          <p className="mt-3 text-sm">If a character "wiped his palms on his jeans before opening the door," you can infer he is nervous — even though the text never says "nervous."</p>
        </>
      )
    },
    {
      id: 'character',
      title: 'Character',
      content: (
        <>
          <Table
            headers={['Concept', 'Description']}
            rows={[
              ['Protagonist', 'The main character — usually drives the plot'],
              ['Antagonist', 'The character or force opposing the protagonist'],
              ['Round character', 'Complex, with multiple traits'],
              ['Flat character', 'One or two traits; often serves the plot'],
              ['Dynamic character', 'Changes during the story'],
              ['Static character', 'Stays the same throughout'],
              ['Direct characterization', 'Author tells you the trait outright'],
              ['Indirect characterization', 'You infer from speech, action, thought, appearance, others\' reactions']
            ]}
          />
          <Callout kind="tip" title="Indirect characterization mnemonic — STEAL">
            <strong>S</strong>peech, <strong>T</strong>houghts, <strong>E</strong>ffects on others, <strong>A</strong>ctions, <strong>L</strong>ooks.
          </Callout>
        </>
      )
    },
    {
      id: 'theme',
      title: 'Theme',
      content: (
        <>
          <p>The <Term>theme</Term> is the underlying message or insight about life that a story conveys. Distinguish:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Topic</strong>: a one-word subject (love, war, friendship).</li>
            <li><strong>Theme</strong>: a complete sentence stating the message ("Love survives even after great loss.").</li>
          </ul>
          <Callout kind="warn" title="Theme test">
            A theme should apply to <strong>more than just this one story</strong>. If your candidate theme only fits this exact plot, it's too specific. If it sounds like a fortune-cookie cliché ("be yourself"), it may be too vague.
          </Callout>
        </>
      )
    },
    {
      id: 'style-pov',
      title: 'Style & Point of View',
      content: (
        <>
          <Table
            headers={['POV', 'Pronoun', 'What the narrator knows']}
            rows={[
              ['First person', 'I, we', 'Only what the narrator sees, thinks, knows'],
              ['Second person', 'You', 'Direct address (rare in literature)'],
              ['Third person limited', 'He/she/they', 'Only one character\'s thoughts'],
              ['Third person omniscient', 'He/she/they', 'Every character\'s thoughts; godlike view'],
              ['Third person objective', 'He/she/they', 'Only external actions and dialogue — no thoughts']
            ]}
          />
          <p className="mt-3"><Term>Style</Term> is how an author writes — sentence length, vocabulary level, formality, imagery, rhythm.</p>
        </>
      )
    },
    {
      id: 'figurative',
      title: 'Figurative Language',
      content: (
        <>
          <Table
            headers={['Device', 'Definition', 'Example']}
            rows={[
              ['Simile', 'Comparison using "like" or "as"', '"Brave as a lion"'],
              ['Metaphor', 'Direct comparison without "like"/"as"', '"Time is a thief"'],
              ['Personification', 'Giving human traits to non-humans', '"The wind whispered"'],
              ['Hyperbole', 'Exaggeration for effect', '"I\'ve told you a million times"'],
              ['Symbolism', 'An object representing an abstract idea', 'A dove = peace'],
              ['Imagery', 'Sensory description (sight, sound, smell, touch, taste)', '"The bitter coffee burned my tongue"'],
              ['Irony', 'Saying or showing the opposite of what is expected', 'A fire station burns down'],
              ['Foreshadowing', 'Hint at events to come', 'Storm clouds before disaster'],
              ['Allusion', 'Reference to another work, event, or person', '"He met his Waterloo"'],
              ['Onomatopoeia', 'Word that imitates a sound', 'Buzz, hiss, sizzle']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Protagonist', def: 'Main character of a story.' },
      { term: 'Antagonist', def: 'Character or force opposing the protagonist.' },
      { term: 'Theme', def: 'The author\'s underlying message about life.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Conflict', def: 'A struggle between opposing forces, internal or external.' },
      { term: 'Climax', def: 'The peak emotional or narrative moment of a story.' },
      { term: 'Tone', def: 'Author\'s attitude toward the subject.' },
      { term: 'Mood', def: 'The emotional atmosphere created for the reader.' }
    ],
    laws: [
      { name: 'Theme test', desc: 'A theme should apply beyond this one specific plot.' },
      { name: 'STEAL', desc: 'Indirect characterization clues come from Speech, Thoughts, Effects on others, Actions, Looks.' }
    ],
    methods: [
      { name: 'Find the conflict', desc: 'Identify the central conflict to find the climax — the moment it peaks.' },
      { name: 'POV check', desc: 'Identify pronouns (I vs he/she/they) and what the narrator can see/know.' }
    ]
  },
  questions: [
    { q: 'The most intense moment of a story is the:', type: 'mcq', choices: ['Exposition', 'Rising action', 'Climax', 'Resolution'], correct: 2, difficulty: 'E', explanation: 'Climax = turning point/peak.' },
    { q: '"The fog crept in on little cat feet" is an example of:', type: 'mcq', choices: ['Simile', 'Personification', 'Hyperbole', 'Onomatopoeia'], correct: 1, difficulty: 'M', explanation: 'Fog given a human/animal action — personification.' },
    { q: 'A first-person narrator uses which pronoun?', type: 'mcq', choices: ['He', 'You', 'I', 'They'], correct: 2, difficulty: 'E', explanation: 'First person uses I/we.' },
    { q: 'A character grips the steering wheel "until her knuckles turned white." This shows:', type: 'mcq', choices: ['She is calm', 'She is exhausted', 'She is tense or angry', 'She is bored'], correct: 2, difficulty: 'M', explanation: 'White knuckles indicate strong physical tension.' },
    { q: '"Internal conflict" means:', type: 'mcq', choices: ['Two characters fighting', 'A character struggling within themselves', 'A character fighting nature', 'A character fighting society'], correct: 1, difficulty: 'E', explanation: 'Internal conflict is character vs self.' },
    { q: 'A character who changes significantly throughout the story is called:', type: 'mcq', choices: ['Static', 'Flat', 'Dynamic', 'Round'], correct: 2, difficulty: 'E', explanation: 'Dynamic = changes. Static = doesn\'t.' },
    { q: '"Theme" is best described as:', type: 'mcq', choices: ['The setting', 'A complete sentence stating the story\'s message about life', 'A list of events', 'The narrator\'s name'], correct: 1, difficulty: 'M', explanation: 'Theme = central message stated as a sentence.' },
    { q: '"The classroom buzzed with excitement before the test." "Buzzed" is:', type: 'mcq', choices: ['Hyperbole', 'Metaphor', 'Imagery', 'Allusion'], correct: 2, difficulty: 'M', explanation: 'Sound-based sensory detail — imagery.' }
  ]
};
