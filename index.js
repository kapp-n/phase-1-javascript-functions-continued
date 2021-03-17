function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork('work from home');

function wrapAdjective(special = '*') {
   return function(emphatic) {
       return `You are ${special}${emphatic}${special}!`;
   }
}
wrapAdjective()('a hard worker');
wrapAdjective('||')('a dedicated programmer');