import React from 'react'
import { IonCard, IonCardContent, IonRow, IonCol } from '@ionic/react';

const BmiResult: React.FC<{ bmiResult: number }> = props => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent className="ion-text-center">
                        <h2>Your Body Mass Index</h2>
                        <h3>{props.bmiResult.toFixed(2)}</h3>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmiResult;