export const initState = {
    theme:'light',
};

export const reducer = (state, action) => {
    switch(action.type) {
        case 'changeTheme':
            return { ...state, theme: action.theme };
        //if some cases never listed above
        default:
            return state;
    }
};