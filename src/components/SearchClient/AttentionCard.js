import React from 'react';
import './AttentionCard.css'

function AttentionCard({cardInfo, handleChange, saveCard}) {

    console.log(cardInfo.date);

    return (
    <div className="attention-card">
        <div className="general-info">
            <input className="card-date" type="date" name="date" value={cardInfo.date} onChange={handleChange}/>
            <div className="card-name-client">{cardInfo.nameClient}</div>
            <input className="card-name-pet" type="text" name="namePet" value={cardInfo.namePet} onChange={handleChange}/>
        </div>
        <div className="card-info">
            <label for="temperature">Tº</label>
            <input id="temperature" name="temperature" value={cardInfo.temperature} onChange={handleChange}/>
            <label for="weight">Peso</label>
            <input id="weight" name="weight" value={cardInfo.weight} onChange={handleChange}/>
            <label for="fc">FC</label>
            <input id="fc" name="fc" value={cardInfo.fc} onChange={handleChange}/>
            <label for="fr">FR</label>
            <input id="fr" name="fr" value={cardInfo.fr} onChange={handleChange}/>
            <label for="pulse">Pulso</label>
            <input id="pulse" name="pulse" value={cardInfo.pulse} onChange={handleChange}/>
        </div>
        <label className="next-date" for="nextDate">Proxima cita 
        <input className="card-date" id="nextDate" type="date" name="nextDate" value={cardInfo.nextDate} onChange={handleChange}/>
        </label>
        
            
        <div className="text-areas">
            <label for="anamnesis">Anamnesis</label><br></br>
            <textarea id="anamnesis" rows="4" name="anamnesis" value={cardInfo.anamnesis} onChange={handleChange} /><br></br>

            <label for="diagnostico">Diagnostico</label><br></br>
            <textarea id="diagnostico" rows="4" name="diagnostico" value={cardInfo.diagnostico} onChange={handleChange} /><br></br>

            <label for="tratamiento">Tratamiento</label><br></br>
            <textarea id="tratamiento" rows="4" name="tratamiento" value={cardInfo.tratamiento} onChange={handleChange} /><br></br>

            <label for="vacunas">Vacunas</label><br></br>
            <textarea id="vacunas" rows="4" name="vacunas" value={cardInfo.vacunas} onChange={handleChange} /><br></br>
        </div>

        <button onClick={saveCard}>Save</button>

        
    </div>
    );
}

export default AttentionCard;