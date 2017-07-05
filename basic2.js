function magic_multiply(x,y){
  if(x === 0 && y === 0){
    return "All inputs 0";
  }

  if (typeof x === 'string') {
    let result = '';
    for (let i = 0; i < y; i++) {
      result += x.toString();
    }

    return result;
  }

  if (x.length){
    let results = [];
    for(let i =0; i < x.length; i++){
      results.push(x[i]*y);
    }
    return results;
  }

  if (typeof y === 'string') {
    return 'Cannot multiply a string';
  }

  return x * y;
}

let test1 = magic_multiply(5, 2);
console.log(test1);

let test2 = magic_multiply(0, 0);
console.log(test2);

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

let test4 = magic_multiply(7, "three");
console.log(test4);

let test5 = magic_multiply("Brendo", 4);
console.log(test5);
