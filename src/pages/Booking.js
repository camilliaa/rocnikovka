import React, { useState } from 'react';
import '../styles/Booking.css'; 

function Booking() {
    const [placementFile, setPlacementFile] = useState(null);
    const [referenceFiles, setReferenceFiles] = useState([null, null, null, null]);
    const [description, setDescription] = useState("");
    const maxDescriptionLength = 800;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const maxSizeMB = 3;

    const validateFile = (file) => {
        if (!file) return null;

        if (!allowedTypes.includes(file.type)) {
            alert("Povoleny jsou pouze soubory .jpg, .png a .webp!");
            return null;
        }

        if (file.size > maxSizeMB * 1024 * 1024) {
            alert(`Maximální velikost souboru je ${maxSizeMB} MB!`);
            return null;
        }

        return file;
    };

    const handlePlacementFileChange = (e) => {
        const file = validateFile(e.target.files[0]);
        setPlacementFile(file ? file.name : null);
    };

    const handleReferenceFileChange = (index, e) => {
        const file = validateFile(e.target.files[0]);
        setReferenceFiles((prevFiles) => {
            const newFiles = [...prevFiles];
            newFiles[index] = file ? file.name : null;
            return newFiles;
        });
    };

    const handleDescriptionChange = (e) => {
        const text = e.target.value;
        if (text.length <= maxDescriptionLength) {
            setDescription(text);
        }
    };

    return (
        <div className="booking">
            <h1>BOOKING</h1>

            <div className="form-group">
                <label htmlFor="name">Jméno *</label>
                <input type="text" id="name" placeholder="Vaše jméno" />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" placeholder="Váš e-mail" />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Telefon *</label>
                <input type="tel" id="phone" placeholder="Vaše telefonní číslo" />
            </div>
            <div className="form-group">
                <label htmlFor="placement">Umístění tetování *</label>
                <input type="text" id="placement" placeholder="stehno, předloktí, kotník..." />
            </div>

            <div className="form-group">
                <label htmlFor="placement-photo">Fotografie umístění</label>
                <div className="file-input">
                    <label htmlFor="placement-photo" className="custom-button">Vyberte soubor</label>
                    <input 
                        type="file" 
                        id="placement-photo" 
                        className="hidden-file" 
                        accept=".jpg, .jpeg, .png, .webp" 
                        onChange={handlePlacementFileChange} 
                    />
                    <span className="file-description">
                        {placementFile || `(max. ${maxSizeMB}MB, .jpg, .png, .webp)`}
                    </span>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="description">Popis *</label>
                <textarea 
                    id="description" 
                    placeholder="Popište Vaši představu o motivu, barvách, kompozici..." 
                    rows="4" 
                    maxLength={maxDescriptionLength} 
                    value={description}
                    onChange={handleDescriptionChange}
                ></textarea>
                <div className="file-description" style={{ textAlign: 'right' }}>
                    {description.length} / {maxDescriptionLength}
                </div>
            </div>

            <div className="reference-photos">
                {referenceFiles.map((fileName, index) => (
                    <div className="file-input" key={index}>
                        <label htmlFor={`file-upload-${index}`} className="custom-button">Vyberte soubor</label>
                        <input 
                            type="file" 
                            id={`file-upload-${index}`} 
                            className="hidden-file" 
                            accept=".jpg, .jpeg, .png, .webp" 
                            onChange={(e) => handleReferenceFileChange(index, e)} 
                        />
                        <span className="file-description">
                            {fileName || `Není zvolen žádný soubor (max. ${maxSizeMB}MB, .jpg, .png, .webp)`}
                        </span>
                    </div>
                ))}
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
                <button type="submit">Odeslat</button>
            </div>
        </div>
    );
}

export default Booking;