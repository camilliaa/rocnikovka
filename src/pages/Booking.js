import React from 'react';
import '../styles/Booking.css'; 

function Booking() {
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
                    <label htmlFor="file-upload" className="custom-button">Vyberte soubor</label>
                    <input type="file" id="placement-photo" className="hidden-file" />
                    <span className="file-description">(max. 5MB)</span>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="description">Popis *</label>
                <textarea id="description" placeholder="Popište Vaši představu o motivu, barvách, kompozici..." rows="4" maxLength="800"></textarea>
                <div className="file-description" style={{ textAlign: 'right' }}>0 / 800</div>
            </div>

            <div className="reference-photos">
                <div className="file-input">
                    <label htmlFor="file-upload" className="custom-button">Vyberte soubor</label>
                    <input type="file" id="file-upload" className="hidden-file" />
                    <span className="file-description">Není zvolen žádný soubor<br />(max. 3MB)</span>
                </div>
                <div className="file-input">
                    <label htmlFor="file-upload" className="custom-button">Vyberte soubor</label>
                    <input type="file" id="file-upload" className="hidden-file" />
                    <span className="file-description">Není zvolen žádný soubor<br />(max. 3MB)</span>
                </div>
                <div className="file-input">
                    <label htmlFor="file-upload" className="custom-button">Vyberte soubor</label>
                    <input type="file" id="file-upload" className="hidden-file" />
                    <span className="file-description">Není zvolen žádný soubor<br />(max. 3MB)</span>
                </div>
                <div className="file-input">
                    <label htmlFor="file-upload" className="custom-button">Vyberte soubor</label>
                    <input type="file" id="file-upload" className="hidden-file" />
                    <span className="file-description">Není zvolen žádný soubor<br />(max. 3MB)</span>
                </div>
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
                <button type="submit">Odeslat</button>
            </div>
        </div>
    );
}

export default Booking;