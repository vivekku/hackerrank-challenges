function andXorOr(a) {
  let stack = [];
  let max = a[0]^a[1];
  for(let i=0; i<a.length; i++){
	while(stack.length > 0){
	  let element = stack[stack.length - 1];
	  let sum = (a[i]^element);
	  if(sum > max){
		max = sum;
	  }
	  if(a[i] < element){
		stack.pop();
	  }
	  else {
		break;
	  }
	}
	stack.push(a[i]);
  }
  return max;
}