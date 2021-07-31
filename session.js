const uuid = require('uuid').v4;
const user = require('./user');
const sessions = {};

const create = function({ username }) {
  if(!username) {
    return { error: 'username-required' };
  }
  if(!user.isValidUsername(username)) {
    return { error: 'username-invalid' };
  }
  if(!user.isPermittedUsername(username)) {
    return { error: 'forbidden-username' };
  }
  
  const sid = uuid();
  /**{ "Shimi" : { 
                  age : "1", 
                  likeList : [ "taurine", "chicken" ], 
                  dislikeList : [ "lamb", "pork" ] 
                  }
  } */
  user.list[username] = user.list[username] || {};

  // create session data, link to user
  sessions[sid] = {
    sid,
    username,
    info : user.list[username],
  };
  return { sid };
};

const remove = function(sid) {
  delete sessions[sid];
};

const isValid = function(sid) {
  return !!sessions[sid];
};

module.exports = {
  details: sessions,
  create,
  remove,
  isValid,
};
