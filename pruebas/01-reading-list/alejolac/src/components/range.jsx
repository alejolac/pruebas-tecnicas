import React, { useState } from 'react';

function Range({ handle }) {
    const [selectedOption, setSelectedOption] = useState(1); // Estado para almacenar la opción seleccionada

    const handleChange = (event) => {
        setSelectedOption(parseInt(event.target.value, 10)); // Actualizamos el estado cuando cambia la opción
    };

    return (
        <div className="input-range-container">
            <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={selectedOption}
                onChange={handleChange}
                className="input-range"
            />
            <div className="options">
                <span
                    className={`option ${selectedOption === 1 ? 'selected' : ''}`}
                    data-text="Opción 1"
                >
                    Opción 1
                </span>
                <span
                    className={`option ${selectedOption === 2 ? 'selected' : ''}`}
                    data-text="Opción 2"
                >
                    Opción 2
                </span>
                <span
                    className={`option ${selectedOption === 3 ? 'selected' : ''}`}
                    data-text="Opción 3"
                >
                    Opción 3
                </span>
                <span
                    className={`option ${selectedOption === 4 ? 'selected' : ''}`}
                    data-text="Opción 4"
                >
                    Opción 4
                </span>
                <span
                    className={`option ${selectedOption === 5 ? 'selected' : ''}`}
                    data-text="Opción 5"
                >
                    Opción 5
                </span>
            </div>
        </div>
    );
}

export default Range