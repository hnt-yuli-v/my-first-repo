import { speak as speakHello } from './library/SpeakHello.js';
import { speak as speakGoodbye } from './library/SpeakGoodBye.js';
import { speakAdd as speakAddGoodbye } from './library/SpeakGoodBye.js';
(function() {
var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {
  if (names[i][0].toLowerCase() === 'j') {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}

var additionalSelection = function(name) {
    
    if (name.charAt(name.length - 1).toLowerCase() === 'a') {
        console.log(name + " ends with 'a'");
    }
};

names.forEach(function(name) {
    additionalSelection(name);
});

