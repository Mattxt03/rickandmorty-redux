import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/store';
import { Link } from 'react-router-dom';
import { removeFavoriteChar } from '../../redux/favSlice';

export const FavoriteCharacters = () => {

    const dispatch = useDispatch();

    const favoriteCharacters = useSelector((state: State) => state.favorites.characters);

    if(favoriteCharacters.length === 0) return <p className="text-4xl mx-4 mt-4"> No favorites :c </p>

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
                            <h2 className="card-title font-normal text-5xl">{name}</h2>
                            <p className="text-2xl text-gray-500"> Current Status: </p>
                            <p className={`text-3xl ${status === 'Alive' ? 'text-green-500' : status === 'Dead' ? 'text-red-500' : 'text-orange-500'}`}>{status}</p>

                            <p className="text-2xl text-gray-500"> Gender: </p>
                            <p className="text-3xl">{gender}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary font-normal" onClick={() => handleRemoveFavChar(id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
