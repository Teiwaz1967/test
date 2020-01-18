var money = prompt("What is your budget for a month ?");
var time = prompt("Enter a date in the format YYYY-MM-DD");
var answerFirstQuestion = prompt("Enter a required cost item this month");
var answerSecondQuestion = prompt("How much will it cost ?");
var dailyBudget = (money - answerSecondQuestion) / 30;
var appData = {
    "budget": money,
    "timeData": time,
    "expenses": {
        "answerFirstQuestion": answerSecondQuestion
    },
    "optionalExpenses": {},
    "income": [],
    "savings": false
};
alert("Your daily budget " + dailyBudget);

