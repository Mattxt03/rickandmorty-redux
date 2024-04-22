import React from 'react';
import { useGetCharactersByIdQuery } from '../../redux/ramApi';
import { useParams } from 'react-router-dom';

export const Character = () => {
  const { id } = useParams(); // Get the character ID from the URL path
  const { data, error, isLoading } = useGetCharactersByIdQuery(Number(id));

  const charData = data;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!charData) return <div>No data available for this character</div>;

  return (
    <div>
      <h2>{charData.name}</h2>
      <img src={charData.image} alt={charData.name} />
      <p>Status: {charData.status}</p>
      <p>Species: {charData.species}</p>
      {/* Add more details as needed */}
    </div>
  );
};
