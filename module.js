// here is an object literal with four key-value pairs
let sandwich = {
    cheese: 'Smoked Gouda',
    meat: 'Dry-aged Bison',
    sauce: 'Chipotle Aioli',
    veggies: 'Caramelized Onions'
}
for(let topping in sandwich){
    // when we log 'topping', we notice it's a key
    console.log(topping);
