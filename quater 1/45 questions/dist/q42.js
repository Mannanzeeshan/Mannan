"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = [
    "Harry Houdini",
    "David Blaine",
    "Penn Jillette",
    "Teller",
];
function show_magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = "the great " + names[i];
    }
    return names;
}
magicians = make_great(magicians);
show_magicians(magicians);
