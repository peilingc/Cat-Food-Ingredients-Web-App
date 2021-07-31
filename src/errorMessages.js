const errorMessages = { 
    'session-required' : 'Please log in.',
    'session-invalid' : 'Invalid session: please log in again.',
    'username-required' : 'Please type username.',
    'username-invalid' : 'Please follow the requirement above.',
    'forbidden-username' : 'Username should not be dog.',
    'network-error' : 'There was a problem connecting to the network, try again.',
    'petName-invalid' : 'Pet name cannot be empty, and should contain only letters and numbers.',
    'age-invalid' : 'Age cannot be empty, and should contain only numbers.',
    'item-invalid' : 'There is something wrong when deleting the item. Please try again.',
    'item-duplicate' : 'Item is already existed.',
    'petName-duplicate' : 'This pet is already existed.'
};

const transferErrorMessage = function ( error ) {
    return errorMessages[error] || error;
}

export default transferErrorMessage;