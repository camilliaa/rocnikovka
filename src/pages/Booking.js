import React from 'react';
import '../styles/Booking.css'; 

function Booking() {
    return (
        <div className="container">
            <h1>BOOKING</h1>

            <div className="form-group">
                <label htmlFor="name">Jméno *</label>
                <input type="text" id="name" placeholder="Napiš jméno" />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" placeholder="Napiš e-mail" />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Telefon *</label>
                <input type="tel" id="phone" placeholder="Napiš telefon" />
            </div>

            <div className="form-group">
                <label htmlFor="placement">Umístění tetování *</label>
                <input type="text" id="placement" placeholder="Např. předloktí" />
            </div>

            <div className="form-group">
                <label htmlFor="placement-photo">Fotka umístění</label>
                <div className="file-input">
                    <input type="file" id="placement-photo" />
                    <span className="file-description">Napiš fotka vašeho předloktí (max. 5MB)</span>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="description">Popis *</label>
                <textarea id="description" placeholder="Popište Vaši představu o motivu, barvách, kompozici..." rows="4" maxLength="800"></textarea>
                <div className="file-description" style={{ textAlign: 'right' }}>0 / 800</div>
            </div>

            <div className="reference-photos">
                <div className="file-input">
                    <label>Referenční fotka motivu</label>
                    <input type="file" />
                    <span className="file-description">Není zvolený žádný soubor<br />(max. 3MB)</span>
                </div>
                <div className="file-input">
                    <label>Referenční fotka motivu</label>
                    <input type="file" />
                    <span className="file-description">Není zvolený žádný soubor<br />(max. 3MB)</span>
                </div>
                <div className="file-input">
                    <label>Referenční fotka motivu</label>
                    <input type="file" />
                    <span className="file-description">Není zvolený žádný soubor<br />(max. 3MB)</span>
                </div>
                <div className="file-input">
                    <label>Referenční fotka motivu</label>
                    <input type="file" />
                    <span className="file-description">Není zvolený žádný soubor<br />(max. 3MB)</span>
                </div>
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
                <button type="submit">Odeslat</button>
            </div>
        </div>
    );
}

export default Booking;