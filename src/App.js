import React, { useState } from 'react';
import TextInput from './components/TextInput';
import DropdownMenu from './components/DropdownMenu';
import PersonaImage from './components/PersonaImage';
import ResponseBox from './components/ResponseBox';

function App() {
    // State for the user's text input
    const [userInput, setUserInput] = useState('');
    // State for the selected persona
    const [selectedPersona, setSelectedPersona] = useState('');
    // State for the persona's image URL
    const [personaImageUrl, setPersonaImageUrl] = useState('');
    // State for the generated response
    const [generatedResponse, setGeneratedResponse] = useState('');

    //  array for personas
    const personas = [
        { value: 'persona1', label: 'Persona 1' },
        { value: 'persona2', label: 'Persona 2' },
     
    ];

    // Event handler for changing text input
    const handleTextChange = (event) => {
        setUserInput(event.target.value);
    };

    // Event handler for persona selection
    const handlePersonaSelect = (event) => {
        const selectedValue = event.target.value;
        const persona = personas.find(p => p.value === selectedValue);
        setSelectedPersona(persona.value);
        setPersonaImageUrl(personaImageUrl)
       
    };

    //  API call and logic to generate the response
    const generateResponse = () => {
        // Placeholder logic to set generated response
        setGeneratedResponse(`Response based on ${selectedPersona} and input: ${userInput}`);
        // TODO: Connect to backend
    };

    return (
        <div className="app-container">
            <TextInput onTextChange={handleTextChange} />
            <PersonaImage imageUrl={personaImageUrl} />
            <DropdownMenu onPersonaSelect={handlePersonaSelect} personas={personas} />
            <ResponseBox response={generatedResponse} />
            <button onClick={generateResponse}>Generate</button>
        </div>
    );
}

export default App;
