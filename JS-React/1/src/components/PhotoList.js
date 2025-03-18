import React from 'react';
import Photo from './Photo';
import '../App.css';  

const photos = [
  {
    albumId: 1,
    id: 1,
    title: "green",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "purple",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  
];

const PhotoList = () => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
