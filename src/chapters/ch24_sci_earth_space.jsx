import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 24,
  title: 'Science 3 — Earth & Space Science',
  subtitle: "Earth's structure, plate tectonics, weather and climate, the solar system, and the universe.",
  blocks: [
    {
      id: 'why-earth-space',
      title: 'How Earth & Space Science Fits on the GED',
      content: (
        <>
          <p>About <strong>20% of the GED Science test</strong> covers Earth and space. The questions blend geology (Earth\'s structure, rocks, plate tectonics), meteorology (weather, climate, atmosphere), and astronomy (solar system, universe).</p>
          <Callout kind="tip" title="Connections to other GED science topics">
            Earth science connects strongly to physical science (chemistry of rocks; physics of weather), to biology (life depends on a habitable planet), and to social studies (climate change, natural resources). Many questions cross these boundaries.
          </Callout>
        </>
      )
    },
    {
      id: 'earth-structure',
      title: "Structure of Earth",
      content: (
        <>
          <p>Earth has a layered structure, like an onion:</p>
          <Table
            headers={['Layer', 'Composition & description', 'Approximate thickness']}
            rows={[
              ['Crust', 'Thin, rocky outer layer. Continental crust (~35 km) is thicker than oceanic (~7 km).', '7-70 km'],
              ['Mantle', 'Thick, hot, semi-solid rock below the crust. Convection currents in the mantle drive plate motion.', '~2,900 km'],
              ['Outer core', 'Liquid iron and nickel. Generates Earth\'s magnetic field through fluid motion.', '~2,300 km'],
              ['Inner core', 'Solid iron and nickel under enormous pressure. About the size of the Moon.', '~1,200 km radius']
            ]}
          />

          <Callout kind="info" title="Plate tectonics — the unifying theory of geology">
            <p>Earth\'s outer shell is broken into roughly 15 large <Term>tectonic plates</Term> that move slowly (a few cm per year) on the partially-molten mantle below. Where plates meet, dramatic things happen.</p>
            <ul className="list-disc ml-5 text-sm space-y-1 mt-2">
              <li><strong>Convergent boundary</strong>: plates collide. Creates mountains (Himalayas), volcanoes, and deep ocean trenches. Earthquakes common.</li>
              <li><strong>Divergent boundary</strong>: plates pull apart. Creates mid-ocean ridges (where new sea floor forms) and rift valleys (East African Rift).</li>
              <li><strong>Transform boundary</strong>: plates slide past each other. Causes earthquakes (San Andreas Fault in California).</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-4">The rock cycle — rocks transform between three types</p>
          <Table
            headers={['Rock type', 'How it forms', 'Examples']}
            rows={[
              ['Igneous', 'Cools from magma (underground) or lava (surface)', 'Granite (slow cooling), basalt (fast cooling)'],
              ['Sedimentary', 'Layers of sediment compacted and cemented over time', 'Limestone, sandstone, shale'],
              ['Metamorphic', 'Existing rock transformed by heat and/or pressure (without melting)', 'Marble (from limestone), slate (from shale), gneiss']
            ]}
          />
          <p className="text-sm mt-2">Rocks of any type can become any other type through different geological processes — that\'s what "cycle" means. Marble started as ocean sediment, became limestone (sedimentary), then was buried, heated, and pressurized into marble (metamorphic).</p>
        </>
      )
    },
    {
      id: 'earths-resources',
      title: "Earth's Resources",
      content: (
        <>
          <Table
            headers={['Resource type', 'Examples', 'Key characteristic']}
            rows={[
              ['Renewable', 'Solar, wind, water, biomass, geothermal', 'Replenishes naturally on human timescales'],
              ['Nonrenewable', 'Oil, coal, natural gas, most minerals', 'Finite — formed over millions of years; effectively depleted once used']
            ]}
          />

          <Callout kind="info" title="The water cycle">
            Earth\'s water is constantly recycled through six main processes:
            <ol className="list-decimal ml-5 text-sm space-y-1 mt-1">
              <li><strong>Evaporation</strong>: liquid water → vapor (from oceans, lakes).</li>
              <li><strong>Condensation</strong>: vapor → tiny droplets (forming clouds).</li>
              <li><strong>Precipitation</strong>: water falls as rain, snow, sleet, hail.</li>
              <li><strong>Runoff</strong>: water flows over the surface back to oceans.</li>
              <li><strong>Infiltration</strong>: water seeps into the ground (groundwater).</li>
              <li><strong>Transpiration</strong>: plants release water vapor through leaves.</li>
            </ol>
            All powered by solar energy. The water you\'re drinking has been cycling through Earth for billions of years.
          </Callout>

          <p className="font-semibold mt-4">Soil and ecosystems</p>
          <p>Soil forms slowly from weathered rock + decomposed organic material. Layers (called "horizons") develop over centuries: A (topsoil, rich in organic matter), B (subsoil), C (parent rock material), R (bedrock). Soil erosion can destroy soil far faster than it forms — a major cause of agricultural failure historically (the Dust Bowl, the loss of Roman agriculture in North Africa).</p>
        </>
      )
    },
    {
      id: 'weather-climate',
      title: 'Weather & Climate',
      content: (
        <>
          <Callout kind="warn" title="Weather vs Climate — these are different!">
            <p><strong>Weather</strong> = short-term atmospheric conditions (today\'s temperature, this week\'s storm).</p>
            <p><strong>Climate</strong> = long-term average weather over decades for a region.</p>
            <p>"It snowed yesterday" doesn\'t disprove climate change — that\'s weather. "Average global temperatures have risen 1.1°C since 1880" is climate.</p>
          </Callout>

          <p className="font-semibold mt-4">Atmospheric layers (low to high altitude)</p>
          <Table
            headers={['Layer', 'Altitude', 'What\'s there']}
            rows={[
              ['Troposphere', '0-12 km', 'Where we live; weather happens here; airplanes fly low here'],
              ['Stratosphere', '12-50 km', 'Ozone layer (filters UV); jets fly here for stable air'],
              ['Mesosphere', '50-85 km', 'Where most meteors burn up'],
              ['Thermosphere', '85-600 km', 'Auroras occur here; ISS orbits here'],
              ['Exosphere', '600+ km', 'Fades into space']
            ]}
          />

          <p className="font-semibold mt-4">Air masses & weather fronts</p>
          <Table
            headers={['Front type', 'What happens']}
            rows={[
              ['Cold front', 'Cold air mass pushes UNDER warmer air → thunderstorms, then cooler/clearer weather'],
              ['Warm front', 'Warm air rides OVER cold air → gradual warming, light prolonged rain'],
              ['Stationary front', 'Boundary doesn\'t move much → prolonged cloudy/rainy weather'],
              ['Occluded front', 'Cold front catches up to warm front → mixed conditions, often complex weather']
            ]}
          />

          <Callout kind="info" title="Climate change basics — what every educated adult should know">
            <p>Greenhouse gases (CO₂, methane, water vapor, nitrous oxide) trap heat from Earth\'s surface, keeping the planet warm enough for life. But human activities — primarily burning fossil fuels and deforestation — have raised CO₂ levels by &gt;30% since the industrial era began (~1750), with most of the rise since 1950.</p>
            <p>Effects: rising global temperatures, melting ice caps, rising sea levels, more intense storms and droughts, ocean acidification, shifting growing zones, species extinctions. The scientific consensus on this is overwhelming — measured by NASA, NOAA, and thousands of independent climate scientists.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'solar-system',
      title: 'Earth in the Solar System',
      content: (
        <>
          <p>Our solar system has 8 planets orbiting the Sun. Inner planets (Mercury, Venus, Earth, Mars) are small, rocky, and dense. Outer planets are large gas or ice giants.</p>
          <Table
            headers={['Planet', 'Type', 'Notable features']}
            rows={[
              ['Mercury', 'Rocky', 'Closest to Sun, no atmosphere, extreme day/night temperatures'],
              ['Venus', 'Rocky', 'Hottest planet (~462°C surface) due to runaway greenhouse effect; rotates backward'],
              ['Earth', 'Rocky', 'Liquid water, life, magnetic field, one moon'],
              ['Mars', 'Rocky', 'Cold, thin atmosphere, evidence of past liquid water; targets for human exploration'],
              ['Jupiter', 'Gas giant', 'Largest planet, Great Red Spot (huge storm), 80+ moons including Europa and Ganymede'],
              ['Saturn', 'Gas giant', 'Famous rings (mostly ice), many moons including Titan (with thick atmosphere)'],
              ['Uranus', 'Ice giant', 'Tilted on its side (98° axial tilt), pale blue from methane'],
              ['Neptune', 'Ice giant', 'Strong winds (over 2,000 km/h), deep blue color, smallest gas giant']
            ]}
          />
          <Callout kind="info" title="Sun-Earth-Moon relationships">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Earth orbits the Sun once every ~365 days (a year).</li>
              <li>Earth rotates on its axis once every ~24 hours (day/night).</li>
              <li>Earth\'s axial tilt (~23.5°) causes seasons. When the Northern Hemisphere tilts toward the Sun, it\'s summer there and winter in the Southern Hemisphere.</li>
              <li>The Moon orbits Earth every ~27 days. Lunar phases (full, new, quarters) take ~29.5 days due to Earth\'s motion around the Sun.</li>
              <li><strong>Solar eclipse</strong>: Moon between Sun and Earth — Moon\'s shadow falls on Earth.</li>
              <li><strong>Lunar eclipse</strong>: Earth between Sun and Moon — Earth\'s shadow falls on Moon.</li>
              <li>Tides: caused mainly by the Moon\'s gravity (the Sun assists, especially at full and new moon → "spring tides").</li>
            </ul>
          </Callout>
        </>
      )
    },
    {
      id: 'expanding-universe',
      title: 'The Expanding Universe',
      content: (
        <>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Stars</strong> form from giant clouds of gas and dust collapsing under gravity. They fuse hydrogen into helium in their cores, releasing energy as light and heat.</li>
            <li><strong>Solar life cycle</strong>: nebula → main-sequence star (like our Sun) → red giant → white dwarf (smaller stars) OR supernova → neutron star/black hole (larger stars).</li>
            <li>Our Sun is a middle-aged star, about 4.6 billion years old, with about 5 billion years of fuel left.</li>
            <li><strong>Galaxies</strong> are huge collections of stars, gas, and dust held together by gravity. Our Milky Way contains 100+ billion stars. Three main types: spiral, elliptical, irregular.</li>
            <li><strong>Big Bang theory</strong>: the universe began ~13.8 billion years ago from an extremely hot, dense state and has been expanding ever since. Evidence includes the cosmic microwave background radiation and the redshift of distant galaxies.</li>
            <li><strong>Light-year</strong>: the distance light travels in one year (~9.5 trillion km). Used because cosmic distances are too vast for normal units. The nearest star to us (besides the Sun) is 4.2 light-years away.</li>
          </ul>

          <Callout kind="tip" title="Looking back in time">
            When you look at a star, you\'re seeing light that left it years (or millions of years, for distant galaxies) ago. Telescopes are time machines. The James Webb Space Telescope can see galaxies whose light has been traveling for ~13 billion years — almost the age of the universe itself.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Plate tectonics', def: 'Theory that Earth\'s lithosphere is divided into moving plates.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Magma vs lava', def: 'Magma = molten rock underground; lava = same rock at the surface.' },
      { term: 'Climate', def: 'Long-term average weather of a region.' },
      { term: 'Greenhouse effect', def: 'Trapping of heat by atmospheric gases.' },
      { term: 'Big Bang', def: 'The expanding origin of the universe ~13.8 billion years ago.' },
      { term: 'Light-year', def: 'Distance light travels in one year — ~9.5 trillion km.' }
    ],
    laws: [
      { name: 'Three plate boundaries', desc: 'Convergent (collide) · divergent (separate) · transform (slide past).' },
      { name: 'Water cycle', desc: 'Evaporation → condensation → precipitation → collection → repeat.' },
      { name: 'Seasons cause', desc: 'Earth\'s axial tilt, NOT distance from the Sun.' }
    ],
    methods: [
      { name: 'Eclipse mnemonic', desc: 'SOLAR eclipse: Moon between Sun and Earth. LUNAR eclipse: Earth between Sun and Moon.' }
    ]
  },
  questions: [
    { q: 'Earth\'s magnetic field is generated by:', type: 'mcq', choices: ['The crust', 'The mantle', 'The liquid outer core', 'The atmosphere'], correct: 2, difficulty: 'M', explanation: 'Iron-nickel currents in the liquid outer core generate the magnetic field.' },
    { q: 'Two plates pulling apart create a:', type: 'mcq', choices: ['Convergent boundary', 'Divergent boundary', 'Transform boundary', 'Rift volcano'], correct: 1, difficulty: 'M', explanation: 'Divergent = separating plates.' },
    { q: 'Which is a renewable resource?', type: 'mcq', choices: ['Coal', 'Natural gas', 'Oil', 'Solar energy'], correct: 3, difficulty: 'E', explanation: 'Sunlight is replenished daily.' },
    { q: 'Climate change is primarily driven by:', type: 'mcq', choices: [
      'Volcanic eruptions',
      'Increased greenhouse gas emissions from human activities',
      'Sun spot cycles',
      'Ocean salinity changes'
    ], correct: 1, difficulty: 'M', explanation: 'Anthropogenic CO₂ is the dominant driver of recent warming.' },
    { q: 'Limestone undergoing intense heat and pressure becomes:', type: 'mcq', choices: ['Granite', 'Marble', 'Sandstone', 'Basalt'], correct: 1, difficulty: 'M', explanation: 'Metamorphic transformation: limestone → marble.' },
    { q: 'The largest planet in our solar system:', type: 'mcq', choices: ['Earth', 'Saturn', 'Jupiter', 'Neptune'], correct: 2, difficulty: 'E', explanation: 'Jupiter is by far the largest.' },
    { q: 'A solar eclipse occurs when:', type: 'mcq', choices: [
      'Earth is between the Sun and the Moon',
      'The Moon is between the Sun and Earth',
      'The Sun is between Earth and the Moon',
      'There is a full moon'
    ], correct: 1, difficulty: 'M', explanation: 'Moon blocks the Sun\'s light from reaching Earth.' },
    { q: 'A "light-year" measures:', type: 'mcq', choices: ['Time', 'Energy', 'Distance', 'Brightness'], correct: 2, difficulty: 'M', explanation: 'Distance — how far light travels in a year.' },
    { q: 'Earth\'s seasons are caused by:', type: 'mcq', choices: [
      'Distance from the Sun',
      'Earth\'s axial tilt as it orbits the Sun',
      'The Moon\'s phases',
      'Solar storms'
    ], correct: 1, difficulty: 'M', explanation: '~23.5° tilt → different hemispheres get more direct sunlight at different times.' },
    { q: 'Weather and climate differ in that:', type: 'mcq', choices: [
      'Weather is global, climate is local',
      'Weather is short-term, climate is long-term',
      'They mean the same thing',
      'Weather is always cold'
    ], correct: 1, difficulty: 'E', explanation: 'Weather = today/this week. Climate = decade-plus averages.' }
  ]
};
