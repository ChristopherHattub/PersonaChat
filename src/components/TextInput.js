import React from 'react';

const TextInput = ({ onTextChange }) => {
    return (
        <input
            type="text"
            placeholder="Enter Prompt Here"
            onChange={onTextChange}
            className="text-input"
        />
    );
};

export default TextInput;
