import React from 'react'
import { IonButton, IonIcon, IonRow, IonCol } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void }> = props => {
    return (
        <IonRow className="ion-margin-top">
            <IonCol size="12" size-md="6" className="ion-text-center">
                <IonButton size="large" expand="block" color="tertiary" onClick={props.onCalculate}>
                    <IonIcon slot="start" icon={calculatorOutline} />
              Calculate
            </IonButton>
            </IonCol>
            <IonCol size="12" size-md="6" className="ion-text-center">
                <IonButton expand="block" size="large" color="medium" fill="clear" onClick={props.onReset}>
                    <IonIcon slot="start" icon={refreshOutline} />
              Reset
            </IonButton>
            </IonCol>
        </IonRow>
    );
}

export default BmiControls;