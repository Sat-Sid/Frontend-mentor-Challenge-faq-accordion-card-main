//Short code
var n = document.querySelectorAll(".que-icon-table").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".que-icon-table")[i].addEventListener("click", function() {


    var tableClassClickedOn = this.classList[1];

    var tableValue = tableClassClickedOn.slice(5, 6);

    var a = document.querySelector(".question" + (tableValue)).classList.length;
    var b = document.querySelector(".answer" + (tableValue)).classList.length;
    var c = document.querySelector(".icon-down" + (tableValue)).classList.length;

    if (a === 2 && b === 2 && c === 2) {

      clearReset();

      document.querySelector(".question" + (tableValue)).classList.add("jsOnClickQuestions");
      document.querySelector(".answer" + (tableValue)).classList.add("jsOnClickAnswer");
      document.querySelector(".icon-down" + (tableValue)).classList.add("jsOnClickIcon");
    } else {
      // if (a === 3 && b === 3 && c === 3) {

      clearReset();

      // document.querySelector(".question"+(tableValue)).classList.remove("jsOnClickQuestions");
      // document.querySelector(".answer"+(tableValue)).classList.remove("jsOnClickAnswer");
      // document.querySelector(".icon-down"+(tableValue)).classList.remove("jsOnClickIcon");
    }

  });

}

function clearReset() {

  for (var j = 0; j < n; j++) {

    document.querySelectorAll(".question")[j].classList.remove("jsOnClickQuestions");
    document.querySelectorAll(".answer")[j].classList.remove("jsOnClickAnswer");
    document.querySelectorAll(".icon-down")[j].classList.remove("jsOnClickIcon");

  }

}






//Lengthy code
// var numberOfQuestons = document.querySelectorAll(".question").length;
// for (var i = 0; i < numberOfQuestons; i++) {
//
//   document.querySelectorAll(".que-icon-table")[i].addEventListener("click", function() {
//
//     alert("i was clicked");
//     var tableClassClickedOn = this.classList[1];
//
//     var tableValue = tableClassClickedOn.slice(5, 6);
//     console.log(tableValue);
//
//     switch (tableValue) {
//       case "0":
//         document.querySelector(".question0").classList.toggle("jsOnClickQuestions");
//         document.querySelector(".answer0").classList.toggle("jsOnClickAnswer");
//         document.querySelector(".icon-down0").classList.toggle("jsOnClickIcon");
//         break;
//
//       case "1":
//         document.querySelector(".question1").classList.toggle("jsOnClickQuestions");
//         document.querySelector(".answer1").classList.toggle("jsOnClickAnswer");
//         document.querySelector(".icon-down1").classList.toggle("jsOnClickIcon");
//         break;
//
//       case "2":
//         document.querySelector(".question2").classList.toggle("jsOnClickQuestions");
//         document.querySelector(".answer2").classList.toggle("jsOnClickAnswer");
//         document.querySelector(".icon-down2").classList.toggle("jsOnClickIcon");
//         break;
//
//       case "3":
//         document.querySelector(".question3").classList.toggle("jsOnClickQuestions");
//         document.querySelector(".answer3").classList.toggle("jsOnClickAnswer");
//         document.querySelector(".icon-down3").classList.toggle("jsOnClickIcon");
//         break;
//
//       case "4":
//         document.querySelector(".question4").classList.toggle("jsOnClickQuestions");
//         document.querySelector(".answer4").classList.toggle("jsOnClickAnswer");
//         document.querySelector(".icon-down4").classList.toggle("jsOnClickIcon");
//         break;
//
//       default: console.log(tableValue);
//
//     }
//
//
//   });
// }
//
//
//
