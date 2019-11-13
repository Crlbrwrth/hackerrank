var me = "Devin Duffy Meade";

//  length
console.log(me.length);

// indexOf
console.log(me.indexOf("Duffy"));

// lastIndexOf
console.log(me.lastIndexOf("e"));

// search
console.log(me.search("x"));
console.log(me.search("e"));

// Extracting String Parts
// There are 3 methods for extracting a part of a string:
//
// slice(start, end)
console.log(me.slice(0, 17));

// substring(start, end) -- cannot accept negative indexes.
console.log(me.substring(0, 17));

// substr(start, length)
console.log(me.substr(0, 17));
console.log(me.substr(0));

// Replacing String Content
var replaced = me.replace("Duffy", "");
console.log(replaced);

var caseInsensitive = me.replace(/DUFFY/i, "");
console.log(caseInsensitive);

var es = me.replace("e", "a");
console.log(es);

var allEs = me.replace(/e/g, "a");
console.log(allEs);

// Converting to Upper and Lower Case
console.log(me.toLocaleUpperCase());

console.log(me.toLocaleLowerCase());

// The concat() Method

var first = "Devin";
var last = "Duffy";

console.log(first.concat(" ", "Fiachra", " ", last));

// String.trim()

var whiteSpace = "                         hey...";
console.log(whiteSpace.trim());

// // Extracting String Characters
// There are 3 methods for extracting string characters:
//
// charAt(position)

console.log(me.charAt(0));

// charCodeAt(position)

console.log(me.charCodeAt(0));

// Property access [ ]

console.log(me[0]);

var array = me.split("");
console.log(array);
