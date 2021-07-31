const users = {};

const isValidUsername = function( username ) {
    const cleanUsername = username.replace(/[^a-zA-Z0-9.!@#$%^&*]/g, '');
    if(username !== cleanUsername) {
      return false;
    }
    const regex = /^(?=.*\d)(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if (!regex.test(username)){
      return false;
    }
    return true;
};
  
const isPermittedUsername = function ( username ) {
    const upperCaseUsername = username.toUpperCase();
    if (upperCaseUsername === "DOG") {
      return false;
    }
    return true;
}

const isValidPetName = function ( petName ) {
  if (!petName) {
    return false;
  }
  const cleanPetName = petName.replace(/[^a-zA-Z0-9]/g, '');
  if(petName !== cleanPetName) {
    return false;
  }
  return true;
}

const isValidAge = function ( age ) {
  if (!age){
    return false;
  }
  const cleanAge = age.replace(/[^0-9]/g, '');
  if(cleanAge !== age) {
    return false;
  }
  return true;
}

const addNewPet = function ( username, petName, age ) {
  if (users[username].hasOwnProperty(petName)){
    return false
  }
  users[username][petName] = {
    age, 
    likeList : [], 
    dislikeList : [] 
  };
  return true;
}

const deleteIngredient = function ( username, petName, list, item ) {
  if (list === "likeList"){
    const index = users[username][petName].likeList.indexOf(item);
    if (index > -1) {
      users[username][petName].likeList.splice(index,1);
      return true;
    }
    return false;
  }
  if (list === 'dislikeList') {
    const index = users[username][petName].dislikeList.indexOf(item);
    if (index > -1) {
      users[username][petName].dislikeList.splice(index,1);
      return true;
    }
    return false;
  }
  else return false;
};

const addLikeIngredient = function ( username, pet, item) {
  if (users[username][pet].likeList.includes(item)){
    return false;
  }
  users[username][pet].likeList.push(item);
  return true;
}

const addDislikeIngredient = function ( username, pet, item) {
  if (users[username][pet].dislikeList.includes(item)){
    return false;
  }
  users[username][pet].dislikeList.push(item);
  return true;
}

module.exports = {
    list: users,
    isValidUsername,
    isPermittedUsername,
    isValidPetName,
    isValidAge,
    addNewPet,
    deleteIngredient,
    addLikeIngredient,
    addDislikeIngredient,
};