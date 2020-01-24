"use strict";
let money = prompt("What is your budget for a month ?","");
let time = prompt("Enter a date in the format YYYY-MM-DD","");
let ans1 = prompt("Enter a required cost item this month","");
let ans2 = prompt("How much will it cost ?","");
let dailyBudget = (money - ans2) / 30;
let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": false
};
  if (typeof(ans1) === "string" && typeof(ans1) != null && ans1 != "" 
  )  { appData.expenses[ans1]; if (typeof(ans2) != null && ans2 != "") {
          appData.expenses[ans1] = ans2;  alert("Your daily budget " + dailyBudget);
        }
      }
      else {alert("the data is not correct");
    };
   if (dailyBudget < 100) {
    console.log("poor");
}  else if (dailyBudget >= 100 && dailyBudget < 500)  {
    console.log("average income");
}  else {console.log("rich");
};
console.log("done");

