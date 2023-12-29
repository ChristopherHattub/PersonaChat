import React from 'react';

const DropdownMenu = ({ onPersonaSelect, personas }) => {
    return (
        <select onChange={onPersonaSelect} className="dropdown-menu">
            {personas.map((persona, index) => (
                <option key={index} value={persona.value}>
                    {persona.label}
                </option>
            ))}
        </select>
    );
};

export default DropdownMenu;
