import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/store';
import { Link } from 'react-router-dom';
import { removeFavoriteChar } from '../../redux/favSlice';

export const FavoriteCharacters = () => {

    const dispatch = useDispatch();

    const favoriteCharacters = useSelector((state: State) => state.favorites.characters);

    if(favoriteCharacters.length === 0) return <> No favorites :c </>

    const handleRemoveFavChar = (id: number) => {
        dispatch(removeFavoriteChar(id));
    };

    return (
        <div>
            <div className="mx-4">
                {favoriteCharacters.map(({id, name, status, gender, image}) => (
                    <div className="card card-side bg-base-100 shadow-xl mx-4 mt-4">
                        <figure><img src={image} alt={name}/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{status}</p>
                            <p>{gender}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => handleRemoveFavChar(id)}>Kill him/her</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
