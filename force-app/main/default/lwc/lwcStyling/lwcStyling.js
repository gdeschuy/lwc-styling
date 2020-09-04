/**
 * @description       : Override css through renderedCallback
 * @author            : Glenn Deschuymer
 * @group             : LWC
 * @last modified on  : 04-09-2020
 * @last modified by  : Glenn Deschuymer
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   04-09-2020   Glenn Deschuymer   Initial Version
**/

import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    
    renderedCallback(){
        const cardStyle = document.createElement('style');
        const accordionStyle = document.createElement('style');

        cardStyle.innerText = `.slds-card__header {
            background-color: green;
        }`;

        accordionStyle.innerText = `.slds-accordion__summary-action {
            background-color: red;
        }`;

        this.template.querySelector('lightning-card').appendChild(cardStyle);
        this.template.querySelector('lightning-accordion-section').appendChild(accordionStyle);
    }        
}