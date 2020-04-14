import React from 'react'
import { IonCard, IonCardContent, IonRow, IonCol } from '@ionic/react';

const BmiResult: React.FC<{ bmiResult: number | string }> = props => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent>
                        <h2>BMI: {props.bmiResult}</h2>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmiResult;