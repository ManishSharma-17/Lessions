'use strict';
// const openButton = document.querySelector("#open");
// const aside = document.querySelector("aside");

// openButton.addEventListener("click", () => {
//     aside.classList.toggle("extend")
// });  
const video = {
    title: 'a',
    dfja() {
        console.log(this);
    }
};
console.log(this)
console.log(this, 'hi')
// video.stop = function () {
//     console.log(this)
// }
video.dfja();

// function playVideo(title) {
//     this.title = title;
//     console.log(this)
// }

// const v = new playVideo('b');
// video.stop();

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
// };
// person.name = function () {
//     return this.firstName + " " + this.lastName;
// };
// console.log("My friend is " + person.name());
