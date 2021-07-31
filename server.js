const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 5000; 
const session = require('./session');
const { addDislikeIngredient, addLikeIngredient, deleteIngredient, addNewPet, isValidPetName, isValidAge } = require('./user');

app.use(cookieParser());
app.use(express.json());
app.use(express.static('./build'));

//get access
app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }
  res.json( session.details[sid] );
});

//create account or login
app.post('/api/session', (req, res) => {
  const username = req.body.username;
  const { sid, error } = session.create({ username });
  if( error ) {
    res.status(400).json({ error });
    return;
  }
  res.cookie('sid', sid);
  res.json( session.details[sid] );
});

//logout
app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }
  session.remove(sid);
  res.clearCookie('sid');
  res.json({ sid, status: 'removed' });
});

//add new pet
app.post('/api/newpet', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }
  const username = session.details[sid].username;
  const petName = req.body.petName;
  const age = req.body.age;
  if (!isValidPetName( petName )){
    res.status(400).json({ error: 'petName-invalid' });
    return;
  }
  if (!isValidAge( age )){
    res.status(400).json({ error: 'age-invalid' });
    return;
  }
  if (!addNewPet( username, petName, age )){
    res.status(400).json({ error: 'petName-duplicate' });
    return;
  };
  res.json( session.details[sid] );
})

//delete ingredients from pet's list
app.delete('/api/item', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }
  const username = session.details[sid].username;
  const { item, list, petName } = req.body;
  if (!deleteIngredient(username, petName, list, item)){
    res.status(400).json({ error: 'item-invalid' });
    return;
  }
  res.json( session.details[sid] );
});

//add new item to pet's like list
app.post('/api/newLikeItem', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }
  const username = session.details[sid].username;
  const { item, pet } = req.body;
  if (!addLikeIngredient( username, pet, item )){
    res.status(400).json({ error: 'item-duplicate' });
  }
  res.json( session.details[sid] );
});

//add new item to pet's dislike list
app.post('/api/newDislikeItem', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid ) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if( !session.isValid(sid) ) {
    res.status(403).json({ error: 'session-invalid' });
    return;
  }
  const username = session.details[sid].username;
  const { item, pet } = req.body;
  if (!addDislikeIngredient( username, pet, item )){
    res.status(400).json({ error: 'item-duplicate' });
  }
  res.json( session.details[sid] );
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});

