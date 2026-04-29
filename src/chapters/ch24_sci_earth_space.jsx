import React from 'react';
import { Callout, Table, Term } from '../components/Visual.jsx';

export default {
  id: 24,
  title: 'Science 3 — Earth & Space Science',
  subtitle: 'Earth\'s structure, resources, weather and climate, the solar system, and the universe.',
  blocks: [
    {
      id: 'earth-structure',
      title: "Structure of Earth",
      content: (
        <>
          <Table
            headers={['Layer', 'Description']}
            rows={[
              ['Crust', 'Thin, rocky outer layer. Continental (~35 km) thicker than oceanic (~7 km).'],
              ['Mantle', 'Thick layer of hot semi-solid rock below the crust. Convection here drives plate motion.'],
              ['Outer core', 'Liquid iron and nickel — generates Earth\'s magnetic field.'],
              ['Inner core', 'Solid iron and nickel under enormous pressure.']
            ]}
          />

          <Callout kind="info" title="Plate tectonics">
            Earth\'s outer shell is broken into <Term>tectonic plates</Term> that move slowly on the mantle below. Their interactions cause:
            <ul className="list-disc ml-5 text-sm space-y-1 mt-1">
              <li><strong>Convergent boundary</strong>: plates collide → mountains, volcanoes, deep trenches</li>
              <li><strong>Divergent boundary</strong>: plates separate → mid-ocean ridges, rifts</li>
              <li><strong>Transform boundary</strong>: plates slide past → earthquakes (San Andreas Fault)</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-3">The rock cycle</p>
          <Table
            headers={['Rock type', 'How it forms']}
            rows={[
              ['Igneous', 'Cools from magma/lava (granite, basalt)'],
              ['Sedimentary', 'Layers of sediment compacted (limestone, sandstone)'],
              ['Metamorphic', 'Existing rock transformed by heat/pressure (marble from limestone)']
            ]}
          />
        </>
      )
    },
    {
      id: 'earths-resources',
      title: "Earth's Resources",
      content: (
        <>
          <Table
            headers={['Resource', 'Examples', 'Status']}
            rows={[
              ['Renewable', 'Solar, wind, water, biomass, geothermal', 'Replenishes naturally'],
              ['Nonrenewable', 'Oil, coal, natural gas, most minerals', 'Finite on human timescales']
            ]}
          />
          <Callout kind="info" title="The water cycle">
            Evaporation → Condensation → Precipitation → Collection (runoff/groundwater) → Evaporation. Powered by the sun.
          </Callout>
          <p className="font-semibold mt-3">Soil & ecosystems</p>
          <p>Soil forms from weathered rock + organic material. Layers (A: topsoil; B: subsoil; C: parent material; R: bedrock) take centuries to develop. Erosion can destroy soil far faster than it forms.</p>
        </>
      )
    },
    {
      id: 'weather-climate',
      title: 'Weather & Climate',
      content: (
        <>
          <Callout kind="warn" title="Weather vs Climate">
            <strong>Weather</strong> = short-term atmospheric conditions (today\'s temperature, this week\'s storm).<br/>
            <strong>Climate</strong> = long-term average weather over decades for a region.
          </Callout>

          <p className="font-semibold mt-3">Atmospheric layers (low → high)</p>
          <Table
            headers={['Layer', 'Notes']}
            rows={[
              ['Troposphere', '0-12 km — weather happens here'],
              ['Stratosphere', '12-50 km — ozone layer; jets fly here'],
              ['Mesosphere', '50-85 km — meteors burn up here'],
              ['Thermosphere', '85-600 km — auroras, ISS orbit'],
              ['Exosphere', '600+ km — fades into space']
            ]}
          />

          <p className="font-semibold mt-3">Air masses & fronts</p>
          <Table
            headers={['Front', 'What happens']}
            rows={[
              ['Cold front', 'Cold air pushes under warm air → thunderstorms, then cooler/clearer'],
              ['Warm front', 'Warm air rides over cold air → gradual warming, light rain'],
              ['Stationary front', 'Boundary doesn\'t move much → prolonged cloudy/rainy weather'],
              ['Occluded front', 'Cold front catches up to warm front → mixed conditions']
            ]}
          />

          <Callout kind="info" title="Climate change basics">
            Greenhouse gases (CO₂, methane, water vapor) trap heat from Earth\'s surface. Human activities (burning fossil fuels, deforestation) have raised CO₂ levels &gt;30% since the industrial era, warming the planet. Effects: rising sea levels, intensified storms, shifted growing zones, ocean acidification.
          </Callout>
        </>
      )
    },
    {
      id: 'solar-system',
      title: 'Earth in the Solar System',
      content: (
        <>
          <Table
            headers={['Planet', 'Type', 'Notes']}
            rows={[
              ['Mercury', 'Rocky', 'Closest to sun, no atmosphere, extreme temps'],
              ['Venus', 'Rocky', 'Hottest planet — runaway greenhouse'],
              ['Earth', 'Rocky', 'Liquid water, life, magnetic field'],
              ['Mars', 'Rocky', 'Cold, thin atmosphere, evidence of past water'],
              ['Jupiter', 'Gas giant', 'Largest, Great Red Spot, 80+ moons'],
              ['Saturn', 'Gas giant', 'Famous rings'],
              ['Uranus', 'Ice giant', 'Tilted on its side'],
              ['Neptune', 'Ice giant', 'Strong winds, blue color']
            ]}
          />
          <Callout kind="info" title="Sun-Earth-Moon">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>Earth orbits the sun once every ~365 days (a year).</li>
              <li>Earth rotates on its axis once every 24 hours (day/night).</li>
              <li>Earth\'s axial tilt (~23.5°) causes seasons.</li>
              <li>Moon orbits Earth every ~27 days (lunar phases ~29.5 days).</li>
              <li><strong>Solar eclipse</strong>: moon between sun and Earth.</li>
              <li><strong>Lunar eclipse</strong>: Earth between sun and moon.</li>
              <li>Tides are caused mainly by the moon\'s gravity (sun assists).</li>
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
            <li><strong>Stars</strong> form from clouds of gas and dust collapsing under gravity. They fuse hydrogen into helium, releasing energy.</li>
            <li><strong>Solar life cycle</strong>: nebula → main-sequence star → red giant → white dwarf (small stars) or supernova → neutron star/black hole (large stars).</li>
            <li><strong>Galaxies</strong> are huge collections of stars (Milky Way contains 100+ billion). Types: spiral, elliptical, irregular.</li>
            <li><strong>Big Bang</strong>: ~13.8 billion years ago, the universe began expanding from an extremely hot, dense state. Evidence includes cosmic background radiation and the redshift of distant galaxies.</li>
            <li><strong>Light-year</strong>: distance light travels in one year (~9.5 trillion km). Used because cosmic distances are too vast for ordinary units.</li>
          </ul>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Plate tectonics', def: 'Theory that Earth\'s lithosphere is divided into moving plates.', tag: 'KEY', tagColor: 'sky' },
      { term: 'Magma vs lava', def: 'Magma = molten rock underground; lava = same molten rock at the surface.' },
      { term: 'Climate', def: 'Long-term average weather of a region.' },
      { term: 'Greenhouse effect', def: 'Trapping of heat by atmospheric gases.' },
      { term: 'Big Bang', def: 'The expanding origin of the universe ~13.8 billion years ago.' }
    ],
    laws: [
      { name: 'Three plate boundaries', desc: 'Convergent (collide) · divergent (separate) · transform (slide past).' },
      { name: 'Water cycle', desc: 'Evaporation → condensation → precipitation → collection.' }
    ],
    methods: [
      { name: 'Eclipse mnemonic', desc: 'SOLAR: Sun-mOon-eaRth. LUNAR: sUn-eartH-moOn (S-O-E for solar, the Moon comes between).' }
    ]
  },
  questions: [
    { q: 'Earth\'s magnetic field is generated by:', type: 'mcq', choices: ['The crust', 'The mantle', 'The liquid outer core', 'The atmosphere'], correct: 2, difficulty: 'M', explanation: 'Iron-nickel currents in the liquid outer core.' },
    { q: 'Two plates pulling apart create a:', type: 'mcq', choices: ['Convergent boundary', 'Divergent boundary', 'Transform boundary', 'Rift volcano'], correct: 1, difficulty: 'M', explanation: 'Divergent boundaries separate plates.' },
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
      'Earth is between the sun and the moon',
      'The moon is between the sun and Earth',
      'The sun is between Earth and the moon',
      'There is a full moon'
    ], correct: 1, difficulty: 'M', explanation: 'Moon blocks the sun\'s light from reaching Earth.' },
    { q: 'A "light-year" measures:', type: 'mcq', choices: ['Time', 'Energy', 'Distance', 'Brightness'], correct: 2, difficulty: 'M', explanation: 'Distance — how far light travels in a year.' },
    { q: 'Earth\'s seasons are caused by:', type: 'mcq', choices: [
      'Distance from the sun',
      'Earth\'s axial tilt as it orbits the sun',
      'The moon\'s phases',
      'Solar storms'
    ], correct: 1, difficulty: 'M', explanation: '~23.5° tilt → different hemispheres get more direct sunlight at different times.' }
  ]
};
