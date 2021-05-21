import React from 'react';
import './AttentionCard.css'

function AttentionCard({cardInfo, handleChange, saveCard}) {
    return (
    <div className="attention-card">
        <div className="general-info">
            <input className="card-date" type="date" name="date" value={cardInfo.date} onChange={handleChange}/>
            <div className="card-name-client">{cardInfo.nameClient}</div>
            <div className="card-name-pet">{cardInfo.namePet}</div>
        </div>
        <div className="general-info card-info">
            <label for="temperature">Tº</label>
            <input id="temperature" value={cardInfo.temperature}/>
            <label for="weight">Peso</label>
            <input id="weight" value={cardInfo.temperature}/>
            <label for="fc">FC</label>
            <input id="fc" value={cardInfo.temperature}/>
            <label for="fr">FR</label>
            <input id="fr" value={cardInfo.temperature}/>
            <label for="pulse">Pulso</label>
            <input id="pulse" value={cardInfo.temperature}/>
        </div>
        <div>
            <label for="anamnesis">Anamnesis</label>
            <textarea id="anamnesis" name="anamnesis" value={cardInfo.anamnesis} onChange={handleChange} />

            <label for="diagnostico">Diagnostico</label>
            <textarea id="diagnostico" name="diagnostico" value={cardInfo.diagnostico} onChange={handleChange} />

            <label for="tratamiento">Tratamiento</label>
            <textarea id="tratamiento" name="tratamiento" value={cardInfo.tratamiento} onChange={handleChange} />

            <label for="vacunas">Vacunas</label>
            <textarea id="vacunas" name="vacunas" value={cardInfo.vacunas} onChange={handleChange} />
        </div>

        <button onClick={saveCard}>Save</button>

        
    </div>
    );
}

export default AttentionCard;