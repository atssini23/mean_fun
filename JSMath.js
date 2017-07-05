function zero_negativity(arr){
  for(let i = 0; i< arr.length; i++){
    if (arr[i]< 0){
      return false;
    }
  }
  return true;
}

function is_even(num){
  if(num % 2 === 0){
    return true;
  }
  return false;
}


function how_many_even(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if (is_even(arr[i])){
      count++
    }
  }
  return count;
}

function create_dummy_arry(n){
  let result = [];
  for(let i = 0; i < n; i++){
    result.push(Math.floor(Math.random()*10))
  }
  return result;
}
console.log(create_dummy_arry(10))

function random_choice(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
console.log(random_choice([11,23,1992,555]))
