import { useState } from 'react';
import MyPets from './MyPets';
import Search from './Search';
import './menu.css';

const Menu = function({ theme, dispatch, setErrorMessage }) {
    
    const [ pageSwitch, setPageSwitch ] = useState(false);

    const switchToMyPets = function () {
        setErrorMessage('');
        setPageSwitch(false);
    }
    const switchToSearch = function () {
        setErrorMessage('');
        setPageSwitch(true);
    }
    const setTheme = (e) => dispatch({
        type: 'changeTheme',
        theme: e.target.value
    });

    return (
        <div>
            <div className="menu">
                <select value={theme} onChange={setTheme}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
                <button className="my-pets" onClick={ () => switchToMyPets()}>My Pets</button>
                <button className="search" onClick={ () => switchToSearch()}>Search</button>
            </div>
            { !pageSwitch && <MyPets setErrorMessage={setErrorMessage}/> }
            { pageSwitch && <Search setErrorMessage={setErrorMessage}/> }
        </div>
    )
}

export default Menu;