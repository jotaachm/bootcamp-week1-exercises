/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

const noun1 = "Harvard";
const verb1 = "met";
const adjective1 = "nice";
const adjective2 = "interesting"
const verb2 = "eating"
const noun2 = "food"
const noun3 = "Annenberg"

const story = `
At ${noun1}, I've ${verb1} many ${adjective1} people and taken incredibly ${adjective2} classes. However, 
the best part of my experience so far has been ${verb2} great ${noun2} in ${noun3}.
`
console.log(story)
