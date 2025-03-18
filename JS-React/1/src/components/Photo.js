import React from 'react';

const Photo = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <h3>{photo.title}</h3>
      <a href={photo.url} target="_blank" rel="noopener noreferrer">
        View Full Image
      </a>
    </div>
  );
};

export default Photo;
