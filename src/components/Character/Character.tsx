import React from 'react';
import { useGetCharactersByIdQuery } from '../../redux/ramApi';
import { useParams } from 'react-router-dom';

export const Character = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCharactersByIdQuery(Number(id));

  const charData = data;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!charData) return <div>No data available for this character</div>;

  return (
    <div className="card w-96 bg-base-100 mx-auto border-2 border-gray-300 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={charData.image} alt={charData.name} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{charData.name}</h2>
            <p>Status: {charData.status}</p>
            <p>Species: {charData.species}</p>
        </div>
    </div>
  );
};
