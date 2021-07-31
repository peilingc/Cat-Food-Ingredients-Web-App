import './myPets.css';
import { useState, useContext } from 'react';
import { Context } from "./Context.jsx";
import { createNewPet, deleteItem } from './services';

const MyPets = function ({ setErrorMessage }) {
    const [ context, setContext ] = useContext(Context);
    const [ addAPetClassName, setAddAPetClassName ] = useState("add-pet-hidden");
    const [ mainPageClassName, setMainPageClassName ] = useState("my-pets-main-page");
    const [ detailsPageClassName, setDetailsPageClassName ] = useState("my-pets-details-page-hidden");
    const [ newPet, setNewPet ] = useState({ name : "", age : "" });
    const [ list, setList ] = useState({ selectedPet : "", likeList : [], dislikeList : [] });

    const onNameInput = (e) => {
        setNewPet({ ...newPet, name: e.target.value })
    }
    const onAgeInput = (e) => {
        setNewPet({ ...newPet, age: e.target.value });
    };
    const addNewPet = function() {
        createNewPet({ petName : newPet.name, age: newPet.age })
        .then( userinfo => {
            setContext(userinfo.info);
            setErrorMessage(''); 
            setAddAPetClassName("add-pet-hidden");
        })
        .catch( err => {
            setErrorMessage(err.error);
        });
    };
    const showList = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setMainPageClassName("my-pets-main-page-hidden");
        setDetailsPageClassName("my-pets-details-page");
        const selectedPet = e.target.getAttribute("data-value");
        setList({ 
            selectedPet,
            likeList : context[selectedPet].likeList,
            dislikeList : context[selectedPet].dislikeList
        });
    }
    const showMainPage = () => {
        setErrorMessage('');
        setMainPageClassName("my-pets-main-page");
        setDetailsPageClassName("my-pets-details-page-hidden");
    }
    const performDelete = (e) => {
        const selectedItem = e.target.getAttribute("data-item");
        const selectedList = e.target.getAttribute("data-list");
        
        deleteItem({ item : selectedItem, list : selectedList, petName : list.selectedPet })
        .then( userinfo => {
            setContext(userinfo.info);
            setList({ 
                ...list,
                likeList : userinfo.info[list.selectedPet].likeList, 
                dislikeList : userinfo.info[list.selectedPet].dislikeList 
            })
            setErrorMessage(''); 
        })
        .catch( err => {
            setErrorMessage(err.error);
        });
    };

    return (
        <div>
            <div className={mainPageClassName}>
                <button className="add-button" onClick={ () => setAddAPetClassName("add-pet")}>Add A Pet</button>
                <div className={addAPetClassName}>
                    <label>Name:</label>
                    <input className="pet-name-field" onChange={onNameInput} />
                    <label>Age:</label>
                    <input className="pet-age-field" onChange={onAgeInput} />
                    <button className="add" onClick={addNewPet} >Add</button>
                </div>
                <ol className="petList">
                { Object.keys(context).map( key => 
                    ( <li key={key}>Name: {key}, Age: {context[key].age}<a href="#list" onClick={showList} data-value={key}> See &gt;</a></li> ) ) }
                </ol>
            </div>
            <div className={detailsPageClassName}>
                <button className="back" onClick={showMainPage}>&lt; Back</button>
                <h1 className="pet-name">{list.selectedPet}</h1>
                <h2>Like</h2>
                { !list.likeList.length && <label>Add something your furry friend likes!</label>}
                <ol>
                    {list.likeList.map( item => (
                        <li key={item}>{item}
                            <button onClick={performDelete} data-list="likeList" data-item={item}>x</button>
                        </li>
                    ))}
                </ol>
                <h2>Dislike</h2>
                { !list.dislikeList.length && <label>Do your furry friend hates pomegranate?</label>}
                <ol>
                    {list.dislikeList.map( item => (
                    <li key={item}>{item}
                        <button onClick={performDelete} data-list="dislikeList" data-item={item}>x</button>
                    </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default MyPets;