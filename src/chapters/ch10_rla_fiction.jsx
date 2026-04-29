import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 10,
  title: 'RLA 3 — Interpreting Fiction',
  subtitle: 'Plot, character, theme, point of view, figurative language — and why fiction tests REWARD reading slowly.',
  blocks: [
    {
      id: 'why-fiction',
      title: 'Why the GED Tests Fiction',
      content: (
        <>
          <p>About 25% of GED RLA reading passages come from <Term>fiction</Term> — short stories, novel excerpts, sometimes a play scene. Fiction is on the test for a few reasons: (1) it tests your ability to read carefully and infer beyond the surface, (2) it shows up everywhere in life (movies, TV, books), and (3) it tests vocabulary in a richer context than most nonfiction.</p>

          <Callout kind="info" title="What\'s different about reading fiction">
            <p>In nonfiction, the author USUALLY tells you what they think. In fiction, the author SHOWS you a scene and lets you draw conclusions. So fiction questions almost always involve some form of <strong>inference</strong> — reading between the lines.</p>
            <p>Slow down. Re-read pivotal moments. The clue is usually a small detail (a character\'s gesture, a single word choice) that changes the meaning of everything else.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'plot',
      title: 'Plot Elements — The Story Arc',
      content: (
        <>
          <p>Most stories follow a five-stage <Term>plot arc</Term>. Knowing it lets you locate yourself in any passage:</p>
          <Table
            headers={['Stage', 'What happens']}
            rows={[
              ['Exposition', 'Setting, characters, normal world. Sets up the story.'],
              ['Rising action', 'Conflict develops; complications stack up; tension builds.'],
              ['Climax', 'Turning point — the most intense moment. The protagonist faces the central conflict head-on.'],
              ['Falling action', 'Aftermath of the climax; consequences play out.'],
              ['Resolution / dénouement', 'Loose ends tied up; new normal. Sometimes ambiguous in modern fiction.']
            ]}
          />

          <Callout kind="info" title="Conflict — what drives the story">
            Every story has at least one <Term>conflict</Term>. Two main types:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><strong>External conflict</strong>: character versus something outside themselves.
                <ul className="list-circle ml-5">
                  <li>Character vs character (the protagonist vs the antagonist)</li>
                  <li>Character vs nature (storms, animals, geography)</li>
                  <li>Character vs society (laws, expectations, prejudice)</li>
                </ul>
              </li>
              <li><strong>Internal conflict</strong>: character versus self — moral, emotional, or psychological struggle.</li>
            </ul>
          </Callout>

          <Callout kind="tip" title="GED passages are usually short">
            A typical GED fiction passage is 1-3 pages — usually a scene from somewhere in the rising action or climax, not the whole story arc. The questions ask what\'s happening in this moment, what\'s motivating the characters, and what we can infer about what comes before or after.
          </Callout>
        </>
      )
    },
    {
      id: 'inference',
      title: 'Inferences in Fiction',
      content: (
        <>
          <p>Fiction rarely tells you everything outright. An <Term>inference</Term> is a "reading between the lines" conclusion based on textual clues. Authors leave clues in:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Dialogue</strong> — what characters say (and don\'t say).</li>
            <li><strong>Body language</strong> — gestures, facial expressions described in the text.</li>
            <li><strong>Setting</strong> — choices about weather, location, time of day often parallel mood.</li>
            <li><strong>Word choice</strong> — characters described as "shuffling" feel different from characters who "stride."</li>
            <li><strong>Other characters\' reactions</strong> — how others respond reveals what the protagonist is doing.</li>
          </ul>

          <Callout kind="formula" title="Inference 3-step">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>What does the text SAY directly?</strong></li>
              <li><strong>What does that IMPLY?</strong></li>
              <li><strong>Is the inference supported by MULTIPLE clues, not just one detail?</strong></li>
            </ol>
          </Callout>

          <p className="mt-3 text-sm">Example: if a character "wiped his palms on his jeans before opening the door," you can infer he is nervous — even though the text never says "nervous." A second detail might be "his voice cracked when he greeted her," reinforcing the inference. The right GED answer is the one supported by multiple clues, not just the first one you spot.</p>
        </>
      )
    },
    {
      id: 'character',
      title: 'Character — The People in the Story',
      content: (
        <>
          <Table
            headers={['Concept', 'Description']}
            rows={[
              ['Protagonist', 'The main character — usually drives the plot'],
              ['Antagonist', 'The character or force opposing the protagonist'],
              ['Round character', 'Complex, with multiple traits and contradictions'],
              ['Flat character', 'One or two traits; often serves the plot'],
              ['Dynamic character', 'CHANGES during the story — grows, learns, or falls'],
              ['Static character', 'STAYS THE SAME throughout'],
              ['Foil', 'A character who contrasts with the protagonist to highlight the protagonist\'s qualities'],
              ['Direct characterization', 'Author tells you the trait outright ("Sarah was generous")'],
              ['Indirect characterization', 'You infer from what they say, do, think, look like, and how others react']
            ]}
          />
          <Callout kind="tip" title="Indirect characterization mnemonic — STEAL">
            <strong>S</strong>peech, <strong>T</strong>houghts, <strong>E</strong>ffects on others, <strong>A</strong>ctions, <strong>L</strong>ooks. When the author shows rather than tells, look at these five categories.
          </Callout>

          <p className="mt-3">The GED loves "What can you infer about Character X based on what they do?" type questions. Always pick the answer with the most evidence in the text, not the most dramatic-sounding one.</p>
        </>
      )
    },
    {
      id: 'theme',
      title: 'Theme — The Author\'s Message About Life',
      content: (
        <>
          <p>The <Term>theme</Term> of a story is the underlying message or insight the author wants the reader to take away. It\'s NOT the same as the topic.</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Topic</strong>: a one-word subject — love, war, friendship, ambition, family.</li>
            <li><strong>Theme</strong>: a complete sentence stating the message — "Love can survive even after great loss" or "Ambition without ethics destroys those who hold it."</li>
          </ul>

          <Callout kind="warn" title="Theme test">
            <p>A good theme should apply to <strong>more than just this one story</strong>. If your candidate theme only fits this exact plot ("never trust a magic ring"), it\'s too specific. If it sounds like a fortune-cookie cliché ("be yourself"), it might be too vague to be useful.</p>
            <p>The GED right answer is usually a moderately abstract statement that genuinely captures what the story is about.</p>
          </Callout>

          <Callout kind="info" title="Common GED themes">
            Themes from frequently used passages: the cost of ambition; the conflict between duty and desire; the loss of innocence; the danger of judging by appearances; the redemptive power of forgiveness; the difference between truth and reputation; the way memory shapes identity. If you read a passage and can connect it to one of these, you\'re likely on the right track.
          </Callout>
        </>
      )
    },
    {
      id: 'style-pov',
      title: 'Style & Point of View',
      content: (
        <>
          <p><Term>Point of view (POV)</Term> is who is telling the story and how much they know. The narrator filters everything you see.</p>
          <Table
            headers={['POV', 'Pronoun', 'What the narrator knows']}
            rows={[
              ['First person', 'I, we', 'Only what the narrator personally sees, thinks, knows'],
              ['Second person', 'You', 'Direct address to the reader (rare in literature, common in instructions)'],
              ['Third person limited', 'He / she / they', 'Only one character\'s thoughts; everything else from outside'],
              ['Third person omniscient', 'He / she / they', 'Everyone\'s thoughts; godlike view'],
              ['Third person objective', 'He / she / they', 'Only external actions and dialogue — no thoughts at all']
            ]}
          />

          <Callout kind="tip" title="POV affects what you trust">
            A first-person narrator can be <strong>unreliable</strong> — biased, mistaken, even lying. When a story is told in first person, ask: do I have any reason to doubt this narrator? Sometimes the GED tests whether you can identify when a narrator\'s view is colored by self-interest or limited knowledge.
          </Callout>

          <p className="mt-3"><Term>Style</Term> is how an author writes — the texture of the prose. Sentence length, vocabulary level, formality, imagery, rhythm. A passage in long meandering sentences with abstract vocabulary feels different from one with short, punchy sentences and concrete details, even if both describe the same event.</p>
        </>
      )
    },
    {
      id: 'figurative',
      title: 'Figurative Language',
      content: (
        <>
          <p><Term>Figurative language</Term> means saying something in a non-literal way — using comparisons, exaggeration, or symbolic substitutions. The GED tests your ability to recognize and interpret these devices.</p>
          <Table
            headers={['Device', 'Definition', 'Example']}
            rows={[
              ['Simile', 'Comparison using "like" or "as"', '"Brave as a lion"; "her smile was like sunshine"'],
              ['Metaphor', 'Direct comparison without "like"/"as" — one thing IS another', '"Time is a thief"; "the classroom was a zoo"'],
              ['Personification', 'Giving human traits to non-human things', '"The wind whispered through the trees"'],
              ['Hyperbole', 'Exaggeration for effect, not meant literally', '"I\'ve told you a million times"'],
              ['Symbolism', 'An object or image standing for an abstract idea', 'A dove for peace; a flag for nationhood'],
              ['Imagery', 'Vivid sensory description (sight, sound, smell, touch, taste)', '"The bitter coffee burned my tongue"'],
              ['Irony', 'Saying or showing the opposite of what is expected or what seems', 'A fire station burns down; a thief gets robbed'],
              ['Foreshadowing', 'Hint at events to come', 'Storm clouds gathering before disaster'],
              ['Allusion', 'Reference to another work, event, or person — usually well-known', '"He met his Waterloo" (refers to Napoleon)'],
              ['Onomatopoeia', 'A word that imitates a sound', 'Buzz, hiss, sizzle, crash'],
              ['Alliteration', 'Repetition of initial consonant sounds', '"She sells seashells by the seashore"'],
              ['Idiom', 'A phrase whose meaning isn\'t literal', '"It\'s raining cats and dogs"; "kick the bucket"']
            ]}
          />

          <Callout kind="warn" title='Watch for "literal versus figurative" trick questions'>
            If a passage says "her face turned to stone," the GED might offer "she became petrified" (literal) and "she became expressionless" (figurative). The figurative answer is right. Authors don\'t mean their characters actually became rocks.
          </Callout>
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
      { term: 'Mood', def: 'The emotional atmosphere created for the reader.' },
      { term: 'Inference', def: 'A conclusion drawn from textual clues, not directly stated.' },
      { term: 'Foil', def: 'A character whose contrast highlights the protagonist\'s traits.' }
    ],
    laws: [
      { name: 'Theme test', desc: 'A theme should apply beyond this one specific plot.' },
      { name: 'STEAL — indirect characterization', desc: 'Speech, Thoughts, Effects on others, Actions, Looks.' },
      { name: 'Inference rule', desc: 'A valid inference is supported by multiple clues, not just one detail.' }
    ],
    methods: [
      { name: 'Find the conflict', desc: 'Identify the central conflict to find the climax — the moment it peaks.' },
      { name: 'POV check', desc: 'Identify pronouns (I vs he/she/they) and what the narrator can see/know.' },
      { name: 'Mark unfamiliar words', desc: 'Use context to guess; the GED won\'t test obscure vocabulary that has no contextual clue.' }
    ]
  },
  questions: [
    { q: 'The most intense moment of a story is the:', type: 'mcq', choices: ['Exposition', 'Rising action', 'Climax', 'Resolution'], correct: 2, difficulty: 'E', explanation: 'Climax = turning point/peak.' },
    { q: '"The fog crept in on little cat feet" is an example of:', type: 'mcq', choices: ['Simile', 'Personification', 'Hyperbole', 'Onomatopoeia'], correct: 1, difficulty: 'M', explanation: 'Fog given a human/animal action — personification.' },
    { q: 'A first-person narrator uses which pronoun?', type: 'mcq', choices: ['He', 'You', 'I', 'They'], correct: 2, difficulty: 'E', explanation: 'First person uses I/we.' },
    { q: 'A character grips the steering wheel "until her knuckles turned white." This shows:', type: 'mcq', choices: ['She is calm', 'She is exhausted', 'She is tense or angry', 'She is bored'], correct: 2, difficulty: 'M', explanation: 'White knuckles indicate strong physical tension.' },
    { q: '"Internal conflict" means:', type: 'mcq', choices: ['Two characters fighting', 'A character struggling within themselves', 'A character fighting nature', 'A character fighting society'], correct: 1, difficulty: 'E', explanation: 'Internal = character vs self.' },
    { q: 'A character who changes significantly throughout the story is called:', type: 'mcq', choices: ['Static', 'Flat', 'Dynamic', 'Round'], correct: 2, difficulty: 'E', explanation: 'Dynamic = changes. Static = doesn\'t.' },
    { q: '"Theme" is best described as:', type: 'mcq', choices: ['The setting', 'A complete sentence stating the story\'s message about life', 'A list of events', 'The narrator\'s name'], correct: 1, difficulty: 'M', explanation: 'Theme = central message stated as a sentence.' },
    { q: '"The classroom buzzed with excitement before the test." "Buzzed" is:', type: 'mcq', choices: ['Hyperbole', 'Metaphor', 'Imagery', 'Allusion'], correct: 2, difficulty: 'M', explanation: 'Sound-based sensory detail — imagery.' },
    { q: '"I\'ve told you a million times to clean your room!" is:', type: 'mcq', choices: ['Simile', 'Metaphor', 'Hyperbole', 'Personification'], correct: 2, difficulty: 'E', explanation: 'Obvious exaggeration for effect = hyperbole.' }
  ]
};
