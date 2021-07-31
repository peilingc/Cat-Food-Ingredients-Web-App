import './search.css';
import { useState, useContext } from 'react';
import { Context } from "./Context.jsx";
import { meat, vegetablesAndFruits, grains, supplements} from './ingredients';
import { addLikeItem, addDislikeItem } from './services';

const Search = function ({ setErrorMessage }) {
    const [ context, setContext ] = useContext(Context);
    const [ className, setClassName ] = useState({
        meat: "meat-list",
        vegetablesAndFruits: "vegetables-and-fruits-list-hidden",
        grains: "grains-list-hidden",
        supplements: "supplements-list-hidden"
    });
    const [ popupClassName, setPopupClassName ] = useState("popup-hidden");
    const [ selectedItem, setSelectedItem ] = useState({ item: "", list: ""});

    const showMeatList = () => {
        setClassName({
            meat: "meat-list",
            vegetablesAndFruits: "vegetables-and-fruits-list-hidden",
            grains: "grains-list-hidden",
            supplements: "supplements-list-hidden"
        });
        setErrorMessage('');
    };
    const showVegetablesAndFruitsList = () => {
        setClassName({
            meat: "meat-list-hidden",
            vegetablesAndFruits: "vegetables-and-fruits-list",
            grains: "grains-list-hidden",
            supplements: "supplements-list-hidden"
        });
        setErrorMessage('');
    };  
    const showGrainsList = () => {
        setClassName({
            meat: "meat-list-hidden",
            vegetablesAndFruits: "vegetables-and-fruits-list-hidden",
            grains: "grains-list",
            supplements: "supplements-list-hidden"
        });
        setErrorMessage('');
    };  
    const showSupplementsList = () => {
        setClassName({
            meat: "meat-list-hidden",
            vegetablesAndFruits: "vegetables-and-fruits-list-hidden",
            grains: "grains-list-hidden",
            supplements: "supplements-list"
        });
        setErrorMessage('');
    };  
    const closePopup = function () {
        setErrorMessage(''); 
        setPopupClassName("popup-hidden");
    }
    const showPopup = (e) => {
        setErrorMessage(''); 
        setPopupClassName("popup");
        setSelectedItem({ item: e.target.getAttribute("data-item"), list: e.target.getAttribute("data-list")});
    }
    const performAddLikeIngredient = (e) => {
        closePopup();
        addLikeItem({ pet: e.target.getAttribute("data-pet"), item : selectedItem.item })
        .then( userinfo => {
            setContext(userinfo.info);
            setErrorMessage(''); 
        })
        .catch( err => {
            setErrorMessage(err.error);
        });
    };
    const performAddDislikeIngredient = (e) => {
        closePopup();
        addDislikeItem({ pet: e.target.getAttribute("data-pet"), item : selectedItem.item })
        .then( userinfo => {
            setContext(userinfo.info);
            setErrorMessage(''); 
        })
        .catch( err => {
            setErrorMessage(err.error);
        });
    };
    const showDetails = (e) => {
        e.target.parentElement.className = "item-expand";
    };
    const closeDetails = (e) => {
        e.target.parentElement.className = "item-hide";
    };
    
    return (
        <div>
            <h1>Let's Start By Category</h1>
            <div className="sections">
                <button onClick={showMeatList}>Meat</button>
                <button onClick={showVegetablesAndFruitsList}>Vegetables &#38; fruits</button>
                <button onClick={showGrainsList}>Grains</button>
                <button onClick={showSupplementsList}>Supplements</button>
            </div>
            <ul className={className.meat}>
                {meat.map( item => {
                    return (
                        <li className="item-hide" key={item.name}>
                            <span className="item-name" onClick={showDetails}>{item.name}</span>
                            <button className="like" onClick={showPopup} data-item={item.name} data-list="likeList">&#128077;</button>
                            <button className="dislike" onClick={showPopup} data-item={item.name} data-list="dislikeList">&#128078;</button>
                            <button className="hide" onClick={closeDetails}>&#8722;</button>
                            <div className="details">
                                {item.details}
                            </div>
                        </li>
                    ) 
                })}
            </ul>
            <ul className={className.vegetablesAndFruits}>
                {vegetablesAndFruits.map( item => {
                    return (
                        <li className="item-hide" key={item.name}>
                            <span className="item-name" onClick={showDetails}>{item.name}</span>
                            <button className="like" onClick={showPopup} data-item={item.name} data-list="likeList">&#128077;</button>
                            <button className="dislike" onClick={showPopup} data-item={item.name} data-list="dislikeList">&#128078;</button>
                            <button className="hide" onClick={closeDetails}>&#8722;</button>
                            <div className="details">
                                {item.details}
                            </div>
                        </li>
                    ) 
                })}
            </ul>
            <ul className={className.grains}>
                {grains.map( item => {
                    return (
                        <li className="item-hide" key={item.name}>
                            <span className="item-name" onClick={showDetails}>{item.name}</span>
                            <button className="like" onClick={showPopup} data-item={item.name} data-list="likeList">&#128077;</button>
                            <button className="dislike" onClick={showPopup} data-item={item.name} data-list="dislikeList">&#128078;</button>
                            <button className="hide" onClick={closeDetails}>&#8722;</button>
                            <div className="details">
                                {item.details}
                            </div>
                        </li>
                    ) 
                })}
            </ul>
            <ul className={className.supplements}>
                {supplements.map( item => {
                    return (
                        <li className="item-hide" key={item.name}>
                            <span className="item-name" onClick={showDetails}>{item.name}</span>
                            <button className="like" onClick={showPopup} data-item={item.name} data-list="likeList">&#128077;</button>
                            <button className="dislike" onClick={showPopup} data-item={item.name} data-list="dislikeList">&#128078;</button>
                            <button className="hide" onClick={closeDetails}>&#8722;</button>
                            <div className="details">
                                {item.details}
                            </div>
                        </li>
                    ) 
                })}
            </ul>
            <div className={popupClassName}>
                <span className="helper"></span>
                <div>
                    <div className="popupCloseButton" onClick={() => closePopup()}>&times;</div>
                    {(selectedItem.list==="likeList") && (Object.getOwnPropertyNames(context).map( pet => 
                            <button onClick={performAddLikeIngredient} data-pet={pet}>&#128077; For {pet}</button>))}
                    {(selectedItem.list==="dislikeList") && (Object.getOwnPropertyNames(context).map( pet => 
                            <button onClick={performAddDislikeIngredient} data-pet={pet}>&#128078; For {pet}</button>))}
                </div>
            </div>
        </div>
    )
}

export default Search;