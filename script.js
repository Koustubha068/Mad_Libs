
let adjective = prompt('Enter a adjective');
let place = prompt('Enter a noun(place)');
let person = prompt('Enter a noun(name)');

let verb = prompt('Enter a Verb');
let Noun = prompt('Enter a plural noun');

let noun = prompt('Enter a Noun');



let story=`In the ${adjective} town of ${place}, ${person}, a ${adjective} snowman, ${verb} a plan to have a snow ball fight. The snowman assembled many ${Noun} which were able to ${verb} and ${verb} several snowballs at the opposing ${noun}. At the end of the day, the snowman's team won. The town became a very ${verb} place due to the victory.`
let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML =`<p>${story}</p>`