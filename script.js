/* Javascript basic syntax practice

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28; 

var fullAge = true;
console.log(fullAge);

var job;

job = 'Teacher';

console.log(job);


var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);

*/





/*
****** Coding challenge 1
*/

/*
var markMass, markHeight, johnMass, johnHeight;
markMass = 60;
markHeight = 1.7;
johnMass = 80;
johnHeight = 2.0;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var isMarkHigherBMI;
isMarkHigherBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s BMI? ' + isMarkHigherBMI);
*/




/*
      Coding Challenge 2 
*/
/*
var avgScoreJohn, avgScoreMike;
avgScoreJohn = (101 + 83 + 76) / 3;
avgScoreMike = (106 + 64 + 44) / 3;

if (avgScoreJohn > avgScoreMike){
    console.log('John is the winner over the last 3 games with an average score of '+ avgScoreJohn);
}
else if(avgScoreJohn === avgScoreMike){
         console.log('The game was a draw');
        }
else{
    console.log('Mike is the winner over the last 3 games with an average score of '+ avgScoreMike);
}

*/

/*
      Coding Challenge 3
*/
/* 
function CalculateTip(bill){
    if (bill < 50){
        return bill * 0.2;
    }
    else if (50 < bill && bill < 200){
        return bill * 0.15;
    }
    else{
        return bill * 0.1;
    }
}


var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

var tips = [CalculateTip(bill1), CalculateTip(bill2), CalculateTip(bill3)];
var totalBills = [tips[0] + bill1, tips[1] + bill2, tips[2] + bill3];

console.log(tips);
console.log(totalBills);
*/



/*
      Coding Challenge 4
*/



/*

var mark = {
  fullName : 'Mark Springer', 
  mass : 60,  
  height : 1.7,   
  calcBMI : function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  } 
};

var john = {
  fullName : 'John Doe', 
  mass : 80,  
  height : 2.0,   
  calcBMI : function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};



if (mark.calcBMI() > john.calcBMI()){
    console.log(mark.fullName + ' has the highest BMI with a BMI of ' + mark.BMI);
}

else if (mark.BMI() < john.BMI()){
     console.log(john.fullName + ' has the highest BMI with a BMI of ' + john.BMI);
}

else{
    console.log('They both have the same BMI');
}

*/



/*
      Coding Challenge 5
*/



var tips = [];
var totalBills = [];
var markTips = [];
var markTotalBills = [];



var johnBill = {
    bills: [124, 48, 268, 180, 42],

    calcTip: function(billAmmounts){
    var percentage;
    
    for(var i = 0; i < billAmmounts.length; i++){
    
    if (billAmmounts[i] < 50) {
        percentage = .2;
    } else if (billAmmounts[i] >= 50 && billAmmounts[i] < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    tips.push(percentage * billAmmounts[i]);
    totalBills.push(tips[i] + billAmmounts[i]);

}
}
};

johnBill.calcTip(johnBill.bills);
console.log(tips);
console.log(totalBills);


var markBill = {
    bills: [77, 375, 110, 45],

    calcTip: function(billAmmounts){
    var percentage;
    
    for(var i = 0; i < billAmmounts.length; i++){
    
    if (billAmmounts[i] < 100) {
        percentage = .2;
    } else if (billAmmounts[i] >= 100 && billAmmounts[i] < 300) {
        percentage = .10;
    } else {
        percentage = .25;
    }
    markTips.push(percentage * billAmmounts[i]);
    markTotalBills.push(markTips[i] + billAmmounts[i]);

}
}
};

markBill.calcTip(markBill.bills);
console.log(markTips);
console.log(markTotalBills);


function averageTips(tipsArray){
    
    var totalTips = 0;
    for (var i = 0; i < tipsArray.length; i++){
        totalTips += tipsArray[i];
    }
    
    var avg = totalTips / tipsArray.length;
    return avg;

}


var averageTipsJohn = (averageTips(tips));
var averageTipsMark = (averageTips(markTips));
console.log(averageTipsJohn);
console.log(averageTipsMark);

if (averageTipsJohn > averageTipsMark){
    console.log('John\'s family paid the most in tips');
}
else{
    console.log('Mark\'s family paid the most in tips')
}



















