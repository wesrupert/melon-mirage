# Notes
- This was my first time using Vue 3, my prior experience was in Vue 2. I wanted to use this as a dual opportunity to familiarize myself with the changes and the composition API.
- Transparent rounded borders threw me a curveball, harder to solve than I expected. I had to take a couple different approaches, depending on the part of the app.
- I over-engineered the "add source" feature for this assignment. I could have completed that part faster if I'd simplified it.
- I wasn't aware Vuex had been deprecated! I didn't want to also add that learning to this assignment, but I'll have to check out its successor.
- Looking back, I would probably implement the media state a bit simpler for this assignment, but I wanted to avoid keeping references across state properties in case more editing features came along in the spirit of the assignment. It took up more of my time than it needed to.
- Another retrospective, I didn't quite grok the level of detail in the buttons until I'd spent more time than I would like on the other elements. I would have portioned my time better if I'd caught that detail earlier.

# Takeaways

## How long did it take you to complete this assignment?
Just over four hours, spread over two evenings.

## What about this assignment did you find most challenging?
I think my largest challenge was the buttons, actually. The layout buttons had a lot of small parts, and enough going on that it didn't feel right to just take the figma raster export. I wasn't expecting those going in to take as long as they did.

## What about this assignment did you find unclear?
The assignment was pretty clear to me. The Figma really helped clear things up compared to the doc.

## What challenges did you face that you did not expect?
Spending the time to make the UI polished in an unfamiliar style tripped me up more than I was expecting! Both of my previous roles have either preferred a more barebones style, or deprioritized UX feel (much to my disagreement, more than once). It was refreshing getting to make something look good, first and foremost.

## Do you feel like this assignment has an appropriate level of difficulty?
It was appropriate, though I felt a bit crunched with 4 hours. I didn't want to make too large of tradeoffs with the code quality for speed, as the code isn't particulary dense already. I don't think the floating "Go live" bar has much impact on the app from an interviewing perspective for the time spent, its tests are all captured by other elements.

## Briefly explain your decisions to use tools, frameworks, and libraries like React, Vue, etc.
I was already familiar with Vue/Vuex, and Vue was the recommended tool anyways, so it was a pretty easy decision for me. For the additional tooling (Vuex), it was the stack I was familiar with from my past work.

## Did you make certain assumptions and decisions around the UI/UX? Please elaborate on your reasonings.
Most of my assumptions came from the document (min sizing, mobile support, etc). I *did* make an assumption of modern browser features/compatability for the sake of the assignment; I don't currently have a good compatability benchmark for testing, and felt it wouldn't add as much value as focusing on other parts of the project for the purposes of the assignment.
