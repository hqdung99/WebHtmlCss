function polishNotation(expression) {
  var stack = new Array();
  var queue = new Array();
  
  // var expression = "( 22.3 + 3 ) + 22 * 66 + 11 - ( 3 + 5 )";
  var listToken = expression.split(' ');
  
  for (var i = 0; i < listToken.length; i++) {
  
    if (listToken[i] === '(') 
    {
      stack.push(listToken[i]);
    } else if (listToken[i] === ')') 
    {
      while (stack[stack.length - 1] != '(') 
      {
        queue.push(stack.pop());
      }
      stack.pop();
    } else if (listToken[i] === '+' || listToken[i] === '-' || listToken[i] === '*' || listToken[i] === '/') 
    {
      while (
              (
                  ((listToken[i] === '-' || listToken[i] === '+') && (stack[stack.length - 1] === '+' || stack[stack.length - 1] === '-' || stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')) 
                  || (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')
              ) && stack.length > 0) 
      {
        queue.push(stack.pop());
      }
      stack.push(listToken[i]);
    } else 
    {
      queue.push(listToken[i]);
    }
  }
  
  while(stack.length > 0) {
    queue.push(stack.pop());
  }
  
  // Process operator
  function processOperator(V, U, x) {
      v = parseFloat(V);
      u = parseFloat(U);
  
      if (x === '+') {
          return v + u;
      } else if (x === '-') {
          return v - u;
      } else if (x === '*') {
          return v * u;
      } else if (x === '/') {
          return v / u;
      }
  }
  
  queue.reverse();
  var x, U, V, Y;
  
  while (queue.length > 0) {
      x = queue.pop();
      if (x !== '+' && x !== '-' && x !== '*' && x !== '/') {
          stack.push(x);
      } else {
          U = stack.pop();
          V = stack.pop();
          Y = processOperator(V, U, x);
          stack.push(Y);
      }
  }
  
  var result = stack.pop();
  return result;
}