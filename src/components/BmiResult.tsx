import React from 'react'
import { IonCard, IonCardContent } from '@ionic/react';

import './BmiResult.css'

const BmiResult: React.FC<{ bmiResult: number }> = props => {
    return (
        <IonCard id="result-card" className="ion-no-margin ion-margin-top">
            <IonCardContent className="ion-text-center">
                <h2>Your Body Mass Index</h2>
                <h3>{props.bmiResult.toFixed(2)}</h3>
            </IonCardContent>
        </IonCard>
    );
};

export default BmiResult;