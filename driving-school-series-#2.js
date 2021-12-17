/* Fast & Furious Driving School's (F&F) charges for lessons are as below:

Time	Cost
Up to 1st hour	$30
Every subsequent half hour**	$10
** Subsequent charges are calculated by rounding up to nearest half hour.
For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and
if he has a lesson for 5 minutes, he will be charged $30 for the full hour.

Out of the kindness of its heart, F&F also provides a 5 minutes grace period.
So, if student X were to have a lesson for 65 minutes or 1 hr 35 mins, he will only have to pay for an hour or 1hr 30 minutes respectively.

For a given lesson time in minutes (min) , write a function price to calculate how much the lesson costs. */

function cost (mins) { 
  
  let valueCost = 0;
  let hours = Math.floor(mins / 60);
  let halfHour = Math.floor((mins - 60) / 30)
  let remainingMins = mins - 60 - halfHour * 30;
      
  if (hours === 0) {
    return 30;
  } else {
    valueCost += 30;
    hours--;
  }
  
  if (halfHour > 0) {
    valueCost += halfHour * 10
  }
  
  if (remainingMins > 5) {
    valueCost += 10
  }
  
  return valueCost;
} 
  