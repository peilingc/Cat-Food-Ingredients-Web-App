export const checkSession = () => {
  return fetch('/api/session',  {
    method: 'GET',
  })
  .catch( () => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const createSession = ({ username }) => {
  return fetch('/api/session',  {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ username }),
  })
  .catch( () => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const endSession = () => {
  return fetch('/api/session',  {
    method: 'DELETE',
  })
  .catch( () => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const createNewPet = ({ petName, age }) => {
  return fetch('/api/newPet',  {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ petName, age }),
  })
  .catch( () => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const deleteItem = ({ item, list, petName }) => {
  return fetch('/api/item',  {
    method: 'DELETE',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ item, list, petName }),
  })
  .catch( () => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};


export const addLikeItem = ({ pet, item }) => {
  return fetch('/api/newLikeItem',  {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ pet, item }),
  })
  .catch( () => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const addDislikeItem = ({ pet, item }) => {
  return fetch('/api/newDislikeItem',  {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ pet, item }),
  })
  .catch( () => Promise.reject({ error: 'network-error' }) )
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};
