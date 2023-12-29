import React from 'react';

const PersonaImage = ({ imageUrl }) => {
    return (
        <div className="persona-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    );
};

export default PersonaImage;
