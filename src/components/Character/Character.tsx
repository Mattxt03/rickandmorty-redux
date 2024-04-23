import React from 'react';
import { useGetCharactersByIdQuery } from '../../redux/ramApi';
import { useParams } from 'react-router-dom';

export const Character = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCharactersByIdQuery(Number(id));

  const charData = data;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!charData) return <div>No character data</div>;

  return (
    <div className="card w-96 bg-base-100 mx-auto border-2 border-gray-300 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={charData.image} alt={charData.name} />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-3xl">{charData.name}</h2>
            <p className="text-2xl text-gray-500"> Current Status: </p>
            <p className={`text-3xl ${charData.status === 'Alive' ? 'text-green-500' : charData.status === 'Dead' ? 'text-red-500' : 'text-orange-500'}`}>{charData.status}</p>

            <p className="text-2xl text-gray-500"> Gender: </p>
            <p className="text-3xl">{charData.gender}</p>
        </div>
    </div>
  );
};
