import React from 'react';
import { Callout, Table, Pill, Formula, M, Steps, Example, NumberLine, Term } from '../components/Visual.jsx';

export default {
  id: 1,
  title: 'Math 1 — Number Sense & Problem Solving',
  subtitle: 'How our number system actually works, the four operations from the ground up, the on-screen calculator, and turning English into math.',
  blocks: [
    {
      id: 'why-this-matters',
      title: 'Before We Start — Why This Matters & What to Expect',
      subtitle: 'Read this first. It\'s the map for the whole math test.',
      content: (
        <>
          <p>The GED <Term>Mathematical Reasoning</Term> test is <strong>115 minutes long</strong> and has about <strong>46 questions</strong>. It is split into two parts. <strong>Part 1</strong> is short (about 5 questions) and you do it <em>without</em> a calculator. <strong>Part 2</strong> is everything else, and you get an on-screen TI-30XS calculator. You'll also have an on-screen formula sheet. So the test isn't really asking "do you remember every formula?" — it's asking "can you read a real-world problem and figure out which operation to do?"</p>

          <Callout kind="info" title="What the GED actually tests in math">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>Quantitative reasoning (~45%)</strong>: number operations, fractions/decimals/percents, ratios, basic geometry, data interpretation. This whole chapter and chapters 2–4 are this material.</li>
              <li><strong>Algebraic reasoning (~55%)</strong>: writing/solving equations, inequalities, functions, lines on the coordinate plane. Chapters 5–6.</li>
            </ol>
            Geometry (chapter 7) shows up in both halves.
          </Callout>

          <p>If you've been out of school for a while, here is the most important thing to know: <strong>everything in math is built on counting</strong>. Adding is fast counting. Multiplying is repeated adding. Dividing is "how many of these fit inside that?" Once you see the pattern, the formulas stop feeling random — they're shorthand for things you already do in your head when you're, say, splitting a check or figuring out how much paint you need for a wall.</p>

          <Callout kind="tip" title="The single best test-taking habit on GED math">
            <strong>Estimate before you compute.</strong> If you're asked "what is 23% of 480?" you should already be thinking "well, 25% of 480 is 120, so this answer should be a little less than 120." If your final answer ends up at 1,200 or 12, you know to check your work. This catches more mistakes than anything else.
          </Callout>
        </>
      )
    },
    {
      id: 'place-value',
      title: 'Place Value & Comparing Numbers',
      subtitle: 'Why "207" is different from "270" and how to read big numbers without panicking.',
      content: (
        <>
          <p>Our number system is called <strong>base-10</strong>, which just means we group everything in tens. We have ten digits (0 through 9), and once we run out of digits we move one place to the left and start over. That "moving one place to the left" is the whole secret of place value.</p>

          <p>Every digit in a number sits in a <Term>place</Term>, and that place tells you how much the digit is actually worth. Think of it like the spots in a parking lot — the same car (the digit 5) is worth a different amount depending on which spot it parks in.</p>

          <Table
            headers={['Place', 'Value of 1 in this place', 'Example digit (in 52,907)']}
            rows={[
              ['Ten-thousands', '10,000', '5 → 50,000'],
              ['Thousands', '1,000', '2 → 2,000'],
              ['Hundreds', '100', '9 → 900'],
              ['Tens', '10', '0 → 0'],
              ['Ones (units)', '1', '7 → 7']
            ]}
          />

          <p>So the number <M>52,907</M> isn\'t just "five-two-nine-zero-seven." It\'s a <strong>sum</strong>: <M>{`50,000 + 2,000 + 900 + 0 + 7`}</M>. Reading it that way is called <Term>expanded form</Term>, and it\'s how you should think about big numbers any time the problem gets confusing.</p>

          <p>Notice that each step to the LEFT multiplies the place value by 10 (1 → 10 → 100 → 1,000 → ...), and each step to the RIGHT divides by 10 (we\'ll get to decimals soon). That pattern never stops — it\'s what makes our number system so powerful. The Romans, who used letters like XLVII, had a hard time with arithmetic because their system didn\'t have place value.</p>

          <Callout kind="tip" title="How to read a big number out loud">
            Group the digits into chunks of three from the right, separated by commas. Then read each chunk like a 3-digit number, and add the group name (thousand, million, billion). <M>4,062,517</M> = "four million, sixty-two thousand, five hundred seventeen."
          </Callout>

          <p className="font-semibold mt-4">Comparing numbers — the place-by-place method</p>
          <p>To compare two numbers, line them up by place value (line up the right edges) and walk LEFT to RIGHT. The first place where the digits differ wins.</p>

          <Example
            problem={<>Which is larger: <M>4,829</M> or <M>4,891</M>?</>}
            steps={[
              <>Both have 4 thousand. Tie.</>,
              <>Both have 8 hundred. Tie.</>,
              <>Tens place: 2 vs 9. <strong>9 is bigger</strong>, so 4,891 wins.</>,
              <>We don\'t even need to look at the ones place — once you find a difference going left-to-right, the comparison is decided.</>
            ]}
            answer={<>4,891 &gt; 4,829</>}
          />

          <Callout kind="warn" title="Watch out: more digits ≠ bigger when there are decimals">
            For whole numbers, more digits really does mean bigger. <M>1,000</M> is bigger than <M>999</M>. But for decimals, this rule fails: <M>0.7</M> is bigger than <M>0.65</M>, even though "0.65" looks longer. We\'ll cover decimals in Math 2.
          </Callout>

          <p className="font-semibold mt-4">Rounding — when "good enough" is what the question wants</p>
          <p>Rounding replaces a precise number with a nearby simpler one. You round to the place the question asks for ("nearest hundred," "nearest thousand," etc.). The rule is the same every time:</p>

          <Callout kind="formula" title="The rounding rule">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li>Find the digit in the place you\'re rounding to.</li>
              <li>Look at the digit immediately to its <strong>right</strong> (the "decider digit").</li>
              <li>If the decider is <strong>5 or more</strong>, round the original digit UP by 1.</li>
              <li>If the decider is <strong>4 or less</strong>, leave the original digit alone.</li>
              <li>Replace every digit to the right of the rounded place with <strong>0</strong>.</li>
            </ol>
          </Callout>

          <Example
            problem={<>Round <M>67,839</M> to the nearest thousand.</>}
            steps={[
              <>The thousands digit is the second-from-the-left: <strong>7</strong>, in <M>6<u>7</u>,839</M>.</>,
              <>The decider is the digit immediately to the right — the hundreds digit: <strong>8</strong>.</>,
              <>8 is "5 or more," so round the 7 UP to 8.</>,
              <>Replace every digit to the right with zeros: <M>68,000</M>.</>
            ]}
            answer="68,000"
          />

          <Example
            problem={<>Round <M>3,247</M> to the nearest hundred.</>}
            steps={[
              <>Hundreds digit: <strong>2</strong>, in <M>3,<u>2</u>47</M>.</>,
              <>Decider (tens digit): 4. That\'s "4 or less," so the 2 stays put.</>,
              <>Replace tens and ones with zeros: <M>3,200</M>.</>
            ]}
            answer="3,200"
          />

          <Callout kind="info" title="Why we round">
            Real-world questions often don\'t need exactness. "About how many people came to the festival?" is better answered "about 20,000" than "exactly 19,847." The GED uses rounding to test whether you can choose a sensible level of precision. It also uses rounding in word problems to make sure your final answer matches the form the question asks for ("round to the nearest cent," "round to the nearest whole number").
          </Callout>
        </>
      )
    },
    {
      id: 'four-operations',
      title: 'The Four Operations — Adding, Subtracting, Multiplying, Dividing',
      subtitle: 'What each one really means, when to use which, and how to do them on paper and on the calculator.',
      content: (
        <>
          <p>You already know how to add, subtract, multiply, and divide. What\'s easy to forget is what each operation actually <strong>means</strong> — because if you can\'t recognize what a word problem is asking for, the calculator can\'t help you.</p>

          <Table
            headers={['Operation', 'Plain English meaning', 'Real-world example']}
            rows={[
              ['Addition (+)', 'Combining or putting things together', 'Two paychecks of $1,200 + $1,400 = $2,600 total income'],
              ['Subtraction (−)', 'Taking away, or "how much more / less"', 'You had $300 and spent $80; you have $220 left'],
              ['Multiplication (×)', 'Repeated addition, or "groups of"', '6 boxes × 12 cans per box = 72 cans'],
              ['Division (÷)', 'Splitting into equal groups, or "how many fit"', '$60 split among 4 friends = $15 each']
            ]}
          />

          <p className="font-semibold mt-4">PEMDAS — the order of operations</p>
          <p>Once you have an expression with more than one operation in it, you need a rule that says which operation to do first. Otherwise, two people computing <M>{`2 + 3 × 4`}</M> would get different answers. (Without a rule: <M>{`2 + 3 = 5`}</M>, then <M>{`5 × 4 = 20`}</M>. With the rule: <M>{`3 × 4 = 12`}</M>, then <M>{`2 + 12 = 14`}</M>. The right answer is 14.) The rule everyone agrees on is called <strong>PEMDAS</strong>:</p>

          <Callout kind="formula" title="PEMDAS — Order of Operations">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>P</strong>arentheses (and other groupers like brackets) — do these first.</li>
              <li><strong>E</strong>xponents and roots.</li>
              <li><strong>M</strong>ultiplication and <strong>D</strong>ivision — go LEFT to RIGHT, in the order they appear.</li>
              <li><strong>A</strong>ddition and <strong>S</strong>ubtraction — go LEFT to RIGHT, in the order they appear.</li>
            </ol>
            Mnemonic: "Please Excuse My Dear Aunt Sally."
          </Callout>

          <Callout kind="warn" title="The biggest PEMDAS trap">
            "Multiplication before division" is <strong>WRONG</strong>. M and D are TIED in priority — you do them left to right. Same with A and S. So <M>{`8 ÷ 2 × 4`}</M> goes left-to-right: <M>{`8 ÷ 2 = 4`}</M>, then <M>{`4 × 4 = 16`}</M>. Not 1.
          </Callout>

          <Example
            problem={<>Compute <M>{`12 + 3 × (8 − 5)² ÷ 9`}</M></>}
            steps={[
              <>P first — what\'s in parentheses: <M>{`8 − 5 = 3`}</M>. Now: <M>{`12 + 3 × 3² ÷ 9`}</M>.</>,
              <>E next — exponents: <M>{`3² = 3 × 3 = 9`}</M>. Now: <M>{`12 + 3 × 9 ÷ 9`}</M>.</>,
              <>M and D, left to right: <M>{`3 × 9 = 27`}</M>. Now: <M>{`12 + 27 ÷ 9`}</M>.</>,
              <>Still in M/D — keep going left to right: <M>{`27 ÷ 9 = 3`}</M>. Now: <M>{`12 + 3`}</M>.</>,
              <>A: <M>{`12 + 3 = 15`}</M>.</>
            ]}
            answer="15"
          />

          <p className="font-semibold mt-4">Long subtraction with regrouping ("borrowing")</p>
          <p>The trickiest case: subtracting when a top digit is smaller than the bottom digit, and the digit you\'d normally borrow from is a 0. You have to borrow ACROSS the zeros.</p>

          <Example
            problem={<>Subtract <M>{`8,003 − 1,549`}</M></>}
            steps={[
              <>Stack with the right edges aligned. Start at the ones column: <M>{`3 − 9`}</M>. 9 is bigger than 3, so we have to borrow.</>,
              <>The tens column has 0 — nothing to borrow there. The hundreds also has 0 — nothing there either. We have to go all the way to thousands (8) and borrow from there.</>,
              <>The 8 thousands becomes 7 thousands. That borrowed thousand becomes 10 hundreds. Borrow 1 hundred for the tens column → hundreds drops to 9, tens becomes 10. Borrow 1 ten for the ones column → tens drops to 9, ones becomes 13.</>,
              <>Now subtract column by column. Ones: <M>{`13 − 9 = 4`}</M>. Tens: <M>{`9 − 4 = 5`}</M>. Hundreds: <M>{`9 − 5 = 4`}</M>. Thousands: <M>{`7 − 1 = 6`}</M>.</>
            ]}
            answer="6,454"
          />

          <Callout kind="tip" title="Sanity check by adding back">
            Subtraction has a built-in self-test: the difference plus the smaller number should equal the bigger number. Here: <M>{`6,454 + 1,549 = 8,003`}</M>. ✓ Always do this on real test problems where you have the time.
          </Callout>

          <p className="font-semibold mt-4">Multiplication — what it means and a few shortcuts</p>
          <p>Multiplication is just repeated addition. <M>{`6 × 4`}</M> is "six fours added together": <M>{`4 + 4 + 4 + 4 + 4 + 4 = 24`}</M>. That\'s why "of" in word problems often signals multiplication: "20% of 250" means "twenty hundredths of 250" = <M>{`0.20 × 250`}</M>.</p>

          <Callout kind="info" title="Quick mental-math shortcuts">
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li><strong>×10, ×100, ×1,000</strong>: just append zeros. <M>{`47 × 100 = 4,700`}</M>.</li>
              <li><strong>×11 (for 2-digit numbers)</strong>: split the digits, add them, drop the sum in the middle. <M>{`52 × 11`}</M>: 5 _ 2 with (5+2)=7 in the middle → 572.</li>
              <li><strong>×5</strong>: multiply by 10 and divide by 2. <M>{`84 × 5 = 840 ÷ 2 = 420`}</M>.</li>
              <li><strong>Squaring numbers ending in 5</strong>: <M>{`25² = 625`}</M>; <M>{`35² = 1,225`}</M>. Pattern: take the tens digit, multiply by (tens digit + 1), then write 25 at the end. <M>{`25²`}</M>: <M>{`2 × 3 = 6`}</M>, then 25 → 625.</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-4">Long division</p>
          <p>The slowest of the four — but the most useful when the calculator is locked on Part 1. Division asks "how many of the divisor fit inside the dividend?" In <M>{`1,548 ÷ 12`}</M>, "how many 12s fit inside 1,548?"</p>

          <Example
            problem={<>Divide <M>{`1,548 ÷ 12`}</M></>}
            steps={[
              <>Start at the leftmost digits of the dividend. Does 12 fit into 1? No (1 is too small). Does it fit into 15? Yes — once. Write "1" above the 5.</>,
              <>Multiply: <M>{`12 × 1 = 12`}</M>. Subtract: <M>{`15 − 12 = 3`}</M>. Bring down the next digit (4) to make 34.</>,
              <>How many times does 12 fit into 34? Twice (because <M>{`12 × 3 = 36`}</M>, too big). Write "2" on top.</>,
              <>Multiply: <M>{`12 × 2 = 24`}</M>. Subtract: <M>{`34 − 24 = 10`}</M>. Bring down the next digit (8) to make 108.</>,
              <>How many times does 12 fit into 108? <M>{`12 × 9 = 108`}</M>. Exact fit. Write "9" on top.</>,
              <>Subtract: <M>{`108 − 108 = 0`}</M>. No remainder. The quotient (the digits on top) reads <strong>129</strong>.</>
            ]}
            answer="129"
          />

          <Callout kind="tip" title="Sanity-check by multiplying back">
            Division\'s self-test: quotient × divisor should equal the dividend. <M>{`129 × 12 = 1,548`}</M>. ✓
          </Callout>
        </>
      )
    },
    {
      id: 'word-problems',
      title: 'Translating Word Problems — English ⇆ Math',
      subtitle: 'Why this matters more than the arithmetic itself.',
      content: (
        <>
          <p>About <strong>30% of GED math is word problems</strong>. The arithmetic is usually easy — the hard part is figuring out which arithmetic to do. Build the habit of <strong>reading once for understanding, then a second time with a pen, marking up keywords</strong>. Don\'t reach for the calculator until you\'ve written down what you\'re going to compute.</p>

          <Table
            headers={['Words / Phrases in English', 'Operation it usually signals']}
            rows={[
              ['sum, total, in all, combined, added to, increased by, plus, more than, gain', '+'],
              ['difference, less than, decreased by, fewer than, minus, take away, reduce, lose', '−'],
              ['product, times, of, twice (×2), tripled (×3), doubled (×2), per (in pricing)', '×'],
              ['quotient, per (in rates), divided by, ratio of, split equally among, each', '÷'],
              ['is, equals, results in, gives, was, will be, becomes, has', '='],
              ['a number, a value, the unknown, an amount', 'pick a variable (e.g., x or n)']
            ]}
          />

          <Callout kind="warn" title="The single biggest English-to-math trap: word order">
            <p>"5 less than x" is <M>{`x − 5`}</M>, NOT <M>{`5 − x`}</M>. The phrase "less than" reverses the order of what you read.</p>
            <p>"10 subtracted from y" is <M>{`y − 10`}</M>. Same trap.</p>
            <p>If you\'re ever unsure, plug in numbers. "5 less than 20" should be 15, and only <M>{`20 − 5`}</M> gives 15 — so the variable form must be <M>{`x − 5`}</M>.</p>
          </Callout>

          <p className="font-semibold mt-4">A 4-step routine that works on every word problem</p>
          <Callout kind="formula" title="The translation routine">
            <ol className="list-decimal ml-5 text-sm space-y-1">
              <li><strong>What is the question asking for?</strong> Underline the actual question. (Often the LAST sentence.)</li>
              <li><strong>What information are you given?</strong> Circle the numbers and what each one represents.</li>
              <li><strong>What operation connects them?</strong> Use the keyword table above.</li>
              <li><strong>Estimate, then compute, then check the answer makes sense.</strong></li>
            </ol>
          </Callout>

          <Example
            problem='A theater sold 145 adult tickets at $9 each and 78 child tickets at $5 each. How much did the theater earn?'
            steps={[
              <>Question: "how much did the theater earn?" — total dollars.</>,
              <>Given: 145 adult tickets at $9 each; 78 child tickets at $5 each.</>,
              <>"At $9 each" + multiple tickets → multiply: adult earnings = <M>{`145 × 9 = 1,305`}</M>.</>,
              <>Same for children: <M>{`78 × 5 = 390`}</M>.</>,
              <>"Total" → add the two: <M>{`1,305 + 390 = 1,695`}</M>.</>,
              <>Estimate check: 145×$9 ≈ 150×$9 = $1,350. 78×$5 ≈ $400. Total ≈ $1,750. Our $1,695 is close — sane.</>
            ]}
            answer="$1,695"
          />

          <Example
            problem='A delivery van drives 312 miles on Monday and 285 miles on Tuesday. If gas costs $3.40 per gallon and the van gets 24 mpg, how much was spent on gas over those two days?'
            steps={[
              <>Question: total dollars spent on gas.</>,
              <>Step 1: total miles = <M>{`312 + 285 = 597`}</M>.</>,
              <>Step 2: gallons used. "Mpg" means miles per gallon, so gallons = miles ÷ mpg = <M>{`597 ÷ 24 = 24.875`}</M>.</>,
              <>Step 3: dollars = gallons × price/gallon = <M>{`24.875 × 3.40 = 84.575`}</M>.</>,
              <>"How much was spent" — money, so round to dollars and cents: <strong>$84.58</strong>.</>
            ]}
            answer="$84.58"
          />

          <Callout kind="tip" title="Two-step word problems are the most common kind">
            On the GED, almost every word problem requires <strong>at least two operations</strong>. The trap is rushing to the first calculation, picking that as the answer, and missing the second step. Always re-read the question after computing — does what you have answer it? Or is there one more thing to do?
          </Callout>
        </>
      )
    },
    {
      id: 'calculator',
      title: 'The On-Screen TI-30XS Calculator',
      subtitle: 'What you can use, what you can\'t, and the buttons that trip people up.',
      content: (
        <>
          <p>For Part 2 of the math test (and for the science and social-studies tests), you have an on-screen <Term>TI-30XS MultiView</Term> calculator. It is genuinely a great calculator — better than a basic 4-function — but if you haven\'t used a scientific calculator before, a few buttons can confuse you. Practice these BEFORE test day.</p>

          <Callout kind="formula" title="Critical buttons to know">
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li><strong>2nd</strong> (top-left orange): activates the <em>orange</em> function above each key. So if you see "%" written above a key in orange, you press <code>2nd</code> then that key.</li>
              <li><strong>n/d</strong>: enter a fraction. Type the numerator, press n/d, type the denominator. The display shows it as a real fraction, not as a decimal.</li>
              <li><strong>Mixed number</strong>: <code>2nd</code> + n/d gives you the option for whole-number-plus-fraction.</li>
              <li><strong>x²</strong>: squares whatever you just typed. <strong>^</strong>: raises to any power. <strong>√</strong> (often <code>2nd</code> + x²): square root.</li>
              <li><strong>(−)</strong>: the negation key, on the bottom row near "Enter." This is <em>different</em> from the subtraction key. Use this for negative numbers entered alone, like <M>{`(−4)²`}</M>.</li>
              <li><strong>−</strong>: the subtraction key. Used between two numbers.</li>
              <li><strong>2nd → ANS</strong>: recalls the last calculated answer. Useful for chaining steps without retyping.</li>
              <li><strong>2nd → ⇄</strong>: toggle the displayed answer between fraction form and decimal form.</li>
            </ul>
          </Callout>

          <p className="font-semibold mt-4">Things the calculator will get wrong if you don\'t know its rules</p>

          <Callout kind="warn" title="Negation pitfall">
            <p>If you type <code>−4 x² Enter</code>, the calculator returns <strong>−16</strong>, NOT <strong>16</strong>. That\'s because PEMDAS says "exponents before subtraction" — the calculator squares the 4 first to get 16, then applies the minus sign.</p>
            <p>If you actually want <M>{`(−4)²`}</M>, you must type the parentheses yourself: <code>( (−) 4 ) x²</code>. That returns 16.</p>
          </Callout>

          <Callout kind="warn" title="Implicit grouping pitfall">
            <p>If you want <M>{`(8 + 4) ÷ 2`}</M>, you have to type the parentheses. If you just type <code>8 + 4 ÷ 2 Enter</code>, the calculator does <M>{`4 ÷ 2 = 2`}</M> first, then <M>{`8 + 2 = 10`}</M> — not the 6 you wanted.</p>
            <p>Habit: <strong>any time the question shows a fraction bar separating a sum from something else, type a parenthesis.</strong></p>
          </Callout>

          <p className="font-semibold mt-4">Calculator strategy on the test</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Even with the calculator, <strong>set up the calculation on scratch paper first</strong>. Don\'t type a long chain blindly.</li>
            <li>For multi-step problems, <strong>write down intermediate results</strong>. Don\'t trust ANS alone — if your finger slips, you lose track.</li>
            <li>If an answer comes out wildly bigger or smaller than you estimated, you almost certainly fat-fingered something. Re-enter.</li>
            <li>The calculator does <strong>not</strong> simplify radicals or solve equations for you. It\'s arithmetic only.</li>
          </ul>
        </>
      )
    },
    {
      id: 'distance-cost',
      title: 'Distance, Rate, Time & Unit Cost',
      subtitle: 'Two formulas that come up everywhere — buy them once, use them forever.',
      content: (
        <>
          <p>These two relationships show up on almost every GED and in real life every day — paying for groceries, driving, calculating wages. Memorize them cold.</p>

          <Formula label="Distance">distance = rate × time   (d = r · t)</Formula>
          <Formula label="Total cost">total cost = price per unit × number of units</Formula>

          <p>Both formulas are really the same idea: <strong>multiply a "per-something" number by how many somethings there are</strong>. "55 miles per hour" times "3 hours" = "165 miles." "$0.40 per can" times "12 cans" = "$4.80." When you see "per" in a problem, that\'s your signal — multiply.</p>

          <p className="font-semibold mt-4">Rearranging the distance formula</p>
          <p>Sometimes the question doesn\'t give you the distance — it gives you two of the three pieces and asks for the third. You can rearrange the formula by treating it like algebra: divide both sides by what you don\'t want.</p>

          <Table
            headers={['You\'re solving for…', 'Formula', 'In words']}
            rows={[
              ['distance', 'd = r × t', 'rate × time'],
              ['rate (speed)', 'r = d ÷ t', 'distance ÷ time'],
              ['time', 't = d ÷ r', 'distance ÷ rate']
            ]}
          />

          <Example
            problem='A truck drives at 55 mph for 3.5 hours. How far does it go?'
            steps={[
              <>Identify: rate r = 55 mph; time t = 3.5 hr.</>,
              <>Apply distance formula: d = r · t = 55 × 3.5.</>,
              <>Compute: 55 × 3.5 = 192.5 miles.</>,
              <>Sanity check: 55 × 3 = 165 miles. We have a half hour more, so add 27.5 → 192.5. ✓</>
            ]}
            answer="192.5 miles"
          />

          <Example
            problem='A jet covers 1,800 miles in 4 hours. What is its average speed?'
            steps={[
              <>Solving for rate: r = d ÷ t = 1,800 ÷ 4.</>,
              <>= 450 mph.</>
            ]}
            answer="450 mph"
          />

          <p className="font-semibold mt-4">Unit cost — the supermarket use case</p>
          <Example
            problem='A 12-pack of soda costs $4.80. What is the price per can?'
            steps={[
              <>"Per can" means dollars ÷ cans. Total cost ÷ number of units.</>,
              <>$4.80 ÷ 12 = $0.40.</>
            ]}
            answer="$0.40 per can"
          />

          <Example
            problem='Brand A: 24 oz of cereal for $5.04. Brand B: 18 oz for $3.42. Which is the better deal?'
            steps={[
              <>Compare unit prices (dollars per ounce).</>,
              <>Brand A: 5.04 ÷ 24 = $0.21 per oz.</>,
              <>Brand B: 3.42 ÷ 18 = $0.19 per oz.</>,
              <>Brand B is cheaper per ounce.</>
            ]}
            answer="Brand B"
          />

          <p className="font-semibold mt-4">The classic round-trip trap</p>
          <Example
            problem={"Maria drives from her home to her sister's house, a distance of 165 miles, in 3 hours. Coming back, traffic is heavy and the trip takes 5 hours. What is her average speed for the entire round trip?"}
            steps={[
              <>"Average speed" = total distance ÷ total time. NOT the average of the two speeds.</>,
              <>Total distance = round trip = <M>{`165 × 2 = 330`}</M> miles.</>,
              <>Total time = <M>{`3 + 5 = 8`}</M> hours.</>,
              <>Average speed = <M>{`330 ÷ 8 = 41.25`}</M> mph.</>
            ]}
            answer="41.25 mph"
          />

          <Callout kind="warn" title="Average speed ≠ average of the two speeds">
            <p>Speeds were 55 mph there (165÷3) and 33 mph back (165÷5). The naive average (55+33)/2 = 44 mph would be WRONG. The correct average speed weighs the time spent at each speed, which is exactly what total-distance ÷ total-time does.</p>
            <p>This is a favorite GED trap. Whenever you see "average speed" and two different speeds, do total / total.</p>
          </Callout>
        </>
      )
    },
    {
      id: 'numberline-vis',
      title: 'The Number Line — Why It\'s Worth Drawing',
      subtitle: 'Especially helpful with negatives and ordering.',
      content: (
        <>
          <p>The <Term>number line</Term> is the simplest tool in math for visualizing comparisons, ordering, and signed (positive/negative) numbers. The rule is just: numbers to the RIGHT are <strong>greater</strong>; numbers to the LEFT are <strong>less</strong>. So <M>−5</M> is less than <M>−2</M>, even though "5" by itself is bigger than "2" — the negative reverses everything.</p>

          <NumberLine min={-5} max={5} marks={[
            { x: -3, label: 'A', color: '#dc2626' },
            { x: 2, label: 'B', color: '#0ea5e9' },
            { x: 4, label: 'C', color: '#16a34a' }
          ]} />
          <p className="text-sm">A is at −3, B is at 2, C is at 4. Order from least to greatest: A &lt; B &lt; C.</p>

          <p className="font-semibold mt-4">Adding and subtracting on the number line</p>
          <p>Think of any addition or subtraction as starting at the first number and moving:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><strong>Adding a positive</strong> = move RIGHT.</li>
            <li><strong>Subtracting a positive</strong> = move LEFT.</li>
            <li><strong>Adding a negative</strong> (which is the same as subtracting a positive) = move LEFT.</li>
            <li><strong>Subtracting a negative</strong> (which equals adding a positive) = move RIGHT.</li>
          </ul>

          <Example
            problem={<>Find <M>{`−7 + 4`}</M> using the number line.</>}
            steps={[
              <>Start at −7.</>,
              <>"+4" means move 4 units RIGHT.</>,
              <>From −7: −7 → −6 → −5 → −4 → −3.</>
            ]}
            answer="−3"
          />

          <Example
            problem={<>Find <M>{`3 − 8`}</M> using the number line.</>}
            steps={[
              <>Start at 3. "−8" means move 8 units LEFT.</>,
              <>3 → 2 → 1 → 0 → −1 → −2 → −3 → −4 → −5.</>
            ]}
            answer="−5"
          />

          <Callout kind="tip" title="Why this is worth doing in your head">
            For most adults coming back to math, the trickiest moments are signed-number arithmetic and "subtract a negative." Picturing the number line makes those click. By the time you\'re comfortable with it, the algebra in chapter 5 is going to feel a lot more natural.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Place value', def: 'The amount a digit is worth based on its position in a number.', tag: 'CORE', tagColor: 'sky' },
      { term: 'Quotient', def: 'The result of a division.', tag: 'OP' },
      { term: 'Product', def: 'The result of a multiplication.', tag: 'OP' },
      { term: 'Sum', def: 'The result of an addition.', tag: 'OP' },
      { term: 'Difference', def: 'The result of a subtraction.', tag: 'OP' },
      { term: 'Round', def: 'Replace digits to the right of a chosen place with 0s, adjusting up or down based on the next digit.', tag: 'METHOD' },
      { term: 'Per', def: 'A keyword meaning "for each" — usually a multiplication or rate signal.' },
      { term: 'Average / mean', def: 'Sum of values ÷ count of values.' }
    ],
    laws: [
      { name: 'Order of operations (PEMDAS)', desc: 'Parentheses, Exponents, Multiplication/Division (left→right), Addition/Subtraction (left→right). M&D are tied; A&S are tied.' },
      { name: 'Distance = rate × time', desc: 'Rearrangeable: r = d/t and t = d/r.' },
      { name: 'Total cost = price × quantity', desc: 'Unit price = total cost ÷ quantity.' },
      { name: 'Average speed', desc: 'Total distance ÷ total time. NOT the average of two speeds.' },
      { name: 'Rounding rule', desc: 'If the next digit is 5 or more, round up; else round down. Then zero out everything to the right.' }
    ],
    methods: [
      { name: 'PEMDAS', expand: 'Please Excuse My Dear Aunt Sally', desc: 'Mnemonic for order of operations.' },
      { name: 'Translate then solve', desc: 'In word problems: 1) underline the question, 2) circle the data, 3) decide the operation, 4) estimate, compute, sanity-check.' },
      { name: 'Estimate to sanity check', desc: 'Round to the nearest 10 or 100 and recompute mentally to spot huge errors.' },
      { name: 'Add-back / multiply-back', desc: 'Subtraction self-test: difference + smaller = bigger. Division self-test: quotient × divisor = dividend.' }
    ]
  },
  questions: [
    {
      q: 'Round 42,861 to the nearest thousand.',
      type: 'mcq',
      choices: ['42,000', '42,900', '43,000', '43,900'],
      correct: 2,
      difficulty: 'E',
      explanation: 'Thousands digit is 2 in 42,861. The decider (hundreds) is 8, which is 5 or more, so round 2 UP to 3 → 43,000.'
    },
    {
      q: 'Compute 7 + 6 × (10 − 4) ÷ 3.',
      type: 'math',
      correct: 19,
      tolerance: 0,
      difficulty: 'M',
      explanation: 'PEMDAS: parens first → 10−4=6. Then 7 + 6×6÷3. M and D left-to-right: 6×6=36, 36÷3=12. Then add: 7+12=19.'
    },
    {
      q: 'A store sells notebooks at $2.75 each. How much for 14 notebooks?',
      type: 'math',
      correct: 38.5,
      tolerance: 0.001,
      difficulty: 'E',
      explanation: '"Per notebook" times "number of notebooks": 14 × 2.75 = 38.50.'
    },
    {
      q: 'A car travels 240 miles in 4 hours. What is its rate (average speed)?',
      type: 'math',
      correct: 60,
      difficulty: 'E',
      explanation: 'r = d/t = 240/4 = 60 mph.'
    },
    {
      q: 'Which is the correct math for "5 less than twice a number n"?',
      type: 'mcq',
      choices: ['5 − 2n', '2n − 5', '2(n − 5)', 'n/2 − 5'],
      correct: 1,
      difficulty: 'M',
      explanation: '"Twice a number" = 2n. "Less than" reverses order: subtract 5 from 2n. So 2n − 5. (Test: "5 less than twice 10" should be 15. 2(10) − 5 = 15. ✓)'
    },
    {
      q: 'Maria drives 180 miles at 60 mph and another 150 miles at 50 mph. What was her total time on the road?',
      type: 'math',
      correct: 6,
      difficulty: 'M',
      explanation: 'First leg: t = d/r = 180/60 = 3 hr. Second leg: 150/50 = 3 hr. Total: 6 hours.'
    },
    {
      q: 'Place these numbers in order from least to greatest: 8,304; 8,043; 8,340; 8,034.',
      type: 'mcq',
      choices: [
        '8,034 < 8,043 < 8,304 < 8,340',
        '8,043 < 8,034 < 8,304 < 8,340',
        '8,034 < 8,304 < 8,043 < 8,340',
        '8,340 < 8,304 < 8,043 < 8,034'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'All start with 8 thousands. Compare hundreds: two have 0, two have 3. Among the 0-hundreds pair, tens are 3 vs 4 → 8,034 < 8,043. Among the 3-hundreds pair, tens are 0 vs 4 → 8,304 < 8,340. Final order: 8,034 < 8,043 < 8,304 < 8,340.'
    },
    {
      q: 'A school orders 24 boxes of pencils. Each box has 36 pencils. After distributing 750 pencils, how many remain?',
      type: 'math',
      correct: 114,
      difficulty: 'M',
      explanation: 'Two-step problem. Total: 24 × 36 = 864 pencils. Remaining: 864 − 750 = 114.'
    },
    {
      q: 'A 5-pound bag of rice costs $4.20. What is the cost per pound?',
      type: 'math',
      correct: 0.84,
      tolerance: 0.001,
      difficulty: 'E',
      explanation: '$4.20 ÷ 5 lb = $0.84 per lb.'
    },
    {
      q: 'Compute 9² − 3 × 4 + 5.',
      type: 'mcq',
      choices: ['74', '76', '70', '90'],
      correct: 0,
      difficulty: 'M',
      explanation: 'PEMDAS: exponent first, 9² = 81. Then multiplication: 3×4 = 12. Then add/subtract left to right: 81 − 12 + 5 = 74.'
    },
    {
      q: 'A round trip is 240 miles each way. Going took 4 hours; returning took 6 hours. What was the average speed for the entire round trip?',
      type: 'math',
      correct: 48,
      difficulty: 'H',
      explanation: 'Total distance 480; total time 10. Average speed = 480/10 = 48 mph. (Naive (60+40)/2 = 50 would be WRONG.)'
    },
    {
      q: 'A homework problem says "Round 7,495 to the nearest hundred." The answer is:',
      type: 'mcq',
      choices: ['7,400', '7,500', '7,000', '8,000'],
      correct: 1,
      difficulty: 'E',
      explanation: 'Hundreds digit is 4. Decider (tens) is 9, which is ≥5, so round up: 7,500.'
    }
  ]
};
