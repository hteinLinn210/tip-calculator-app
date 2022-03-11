"use strict";

const billEl = document.getElementById("bill");
const numOfPeople = document.getElementById("people");
const tipAmount = document.getElementById("tip-amt");
const totalAmount = document.getElementById("total-amt");
const errorMsg = document.querySelector(".error-msg");
const tipsBtn = document.querySelectorAll(".tip");
const customInput = document.getElementById("custom");
const resetBtn = document.querySelector(".reset-btn");

tipsBtn.forEach((tipBtn) =>
   tipBtn.addEventListener("click", function (e) {
      const tipPercentage = +tipBtn.innerText.slice(0, -1) / 100;
      const bill = +billEl.value;
      const people = +numOfPeople.value;

      const tipCalculate = function () {
         return ((bill * tipPercentage) / people).toFixed(2);
      };

      const totalCalculate = function () {
         return ((bill * tipPercentage + bill) / people).toFixed(2);
      };

      if (numOfPeople.value === "" || Number(numOfPeople.value) === 0) {
         errorMsg.style.display = "inline-block";
         numOfPeople.style.border = "2px solid orange";
         alert("Number of people can't be zero. Press RESET to start again!");
      } else {
         tipAmount.innerText = "$" + tipCalculate();
         totalAmount.innerText = "$" + totalCalculate();
      }
   })
);

customInput.addEventListener("input", function (e) {
   const customPercentage = +e.target.value / 100;
   const bill = +billEl.value;
   const people = +numOfPeople.value;
   const tipCalculateCustom = function () {
      return ((bill * customPercentage) / people).toFixed(2);
   };

   const totalCalculateCustom = function () {
      return ((bill * customPercentage + bill) / people).toFixed(2);
   };

   if (numOfPeople.value === "" || Number(numOfPeople.value) === 0) {
      errorMsg.style.display = "inline-block";
      numOfPeople.style.border = "2px solid orange";
      alert("Number of people can't be zero. Press RESET to start again!");
   } else {
      tipAmount.innerText = "$" + tipCalculateCustom();
      totalAmount.innerText = "$" + totalCalculateCustom();
   }
});

resetBtn.addEventListener("click", function () {
   window.location.reload();
});
