
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13; foods.grapes = 35; foods.strawberries = 27;
// Only change code above this line

console.log(foods);

//////////////
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online =45;
// Only change code above this line

console.log(userActivity);

////////

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
 return foods[scannedItem]
  // Only change code above this line
}

console.log(checkInventory("apples"));

////////

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.plums; delete foods.strawberries; delete foods.oranges;
// Only change code above this line

console.log(foods);

//////////////////
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
 if (
    obj.hasOwnProperty("Alan") &&
    obj.hasOwnProperty("Jeff") &&
    obj.hasOwnProperty("Sarah") &&
    obj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
  // Only change code above this line
}

console.log(isEveryoneHere(users));


////////////////
function countOnline(usersObj) {
  // Only change code below this line
 let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}