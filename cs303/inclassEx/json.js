"use strict";
// • The window's title?
// • The image's third coordinate?
// • The number of messages?
// • The y-offset of the last message?
const jsonString = {
  window: {
    title: "Sample Widget",
    width: 500,
    height: 500,
  },
  image: {
    src: "images/logo.png",
    coords: [250, 150, 350, 400],
    alignment: "center",
  },
  messages: [
    { text: "Save", offset: [10, 30] },
    { text: "Help", offset: [0, 50] },
    { text: "Quit", offset: [30, 10] },
  ],
  debug: "true",
};
const str = JSON.stringify(jsonString);
const data = JSON.parse(str);
console.log(data.window.title);
console.log(data.image.coords[2]);
console.log(data.messages.length);
console.log(data.messages[2].offset[1]);
