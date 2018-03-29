import React from 'react';

export default function(props) {
    return (
        <div>
            <ul>
                <li><span></span> {props.card.name}</li>
                <li><span></span> {props.card.jobTitle}</li>
                <li><span></span> {props.card.company}</li>
                <li><span></span> {props.card.phone}</li>
                <li><span></span> {props.card.email}</li>
                <li><span>Interaction Notes:</span> {props.card.interactionNotes}</li>
                <li>
                    <button onClick={() => props.remove(props.cardIndex)}>Delete Business Card From Wallet</button>
                </li>
            </ul>
            
        </div>
    )
}
