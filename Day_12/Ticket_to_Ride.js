function processData(input) {
  input = input.split('\n');
  var numCities = parseInt(input[0]);
  var plans = [];
  for(var i = 1; i < numCities+1; i++) 
    plans[i] = {};
    
  for(var i = 1; i < numCities; i++) {
    var plan = input[i].split(' ').map(function(v) { return parseInt(v); });
    var planObj = { length : plan[2], visited : false}
    plans[plan[0]][plan[1]] = planObj;
    plans[plan[1]][plan[0]] = planObj;
  }
  
  var numTickets = parseInt(input[numCities]);
  var tickets = {};
  var ticketsArr = [];
  for(var i = 0; i < numTickets; i++) {
    var ticket = input[numCities+1+i].split(' ');
    var key = Math.min(ticket[0], ticket[1]) + "-" + Math.max(ticket[0], ticket[1]);
    tickets[key] = ticket[2];
    ticketsArr.push(ticket);
  }
  var cache  = {};
  var profit = 0;
  for(var i = 1; i <= numCities; i++) {
      
    profit = Math.max(profit, getOptimalProfit(i.toString(), plans, ticketsArr, 0, cache, [i.toString()]));
  }
  console.log(profit);
} 

function getOptimalProfit(cityA, plans, tickets, pathLength, cache, path) {
  var maxProfit = computeTotalUsefulTicketCost(path, tickets) - pathLength;
  
  var candidates = Object.keys(plans[cityA]).filter(function(city) { return !plans[cityA][city].visited });
  candidates.forEach(function(c) {
    var plan = plans[cityA][c];
    plan.visited = true;
    var profit = getOptimalProfit(c, plans, tickets, pathLength + plan.length, cache, path.concat(c));
    plan.visited = false;
    if(profit > maxProfit)
      maxProfit = profit;
  })
  return maxProfit;
}

function computeTotalUsefulTicketCost(path, tickets) {
  var total = tickets.reduce(function(last, t) {
    return last + ((path.includes(t[0]) && path.includes(t[1])) ? parseInt(t[2]) : 0);
    
  }, 0);
    
  return total;
}

function getUsefulTicketCosts(path, costs) {
  var totalCost = 0;
  for(var i = 0; i < path.length; i++) {
    for(var j = i+1; j < path.length; j++) {

      var key = Math.min(path[i],path[j]) +"-" + Math.max(path[i], path[j]);
      if(costs.hasOwnProperty(key))
        totalCost += costs[key];
    }
  }
  return totalCost;
}

function getMinimalLengthPath(cityA, cityB, plans, visited, cache) {
  var cacheKey = Math.min(cityA, cityB)+'-'+Math.max(cityA, cityB)
  if(cache[cacheKey])
    return cache[cacheKey];
  if(cityA == cityB)
    return [[cityB],0];
  
  var minResult = [[], Number.MAX_SAFE_INTEGER];
  
  var candidates  = plans[cityA];
  candidates.forEach(function(c) {
    if(!visited.includes(c[0])) {
      var result = getMinimalLengthPath(c[0], cityB, plans, visited.concat([cityA]), cache);
      result[1] += c[1]; 
      if(result[1] < minResult[1]) 
        minResult = result;
    }
  })
  minResult[0] = [cityA].concat(minResult[0]);
  return minResult;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
