import React from 'react';

function AttentionCard({cardInfo, handleChange, saveCard}) {
    return (
        <div>
            <input type="text" name="namePet" value={cardInfo.namePet} onChange={handleChange}/>
            <textarea name="action" value={cardInfo.action} onChange={handleChange} />
            <button onClick={saveCard}>Save</button>
        </div>
    );
}

export default AttentionCard;