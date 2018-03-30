import React, { Component } from 'react';
import AddBusinessCard from './AddBusinessCard.js';
import FormatBusinessCard from './FormatBusinessCard.js';

class MainView extends Component {
    constructor() {
        super();

        this.state = {
            newCard: [],
            addCardButton: false
        }
        this.getBusinessCardPayload = this.getBusinessCardPayload.bind(this);
        this.removeBusinessCard = this.removeBusinessCard.bind(this);
        this.toggleCreateBusinessCard = this.toggleCreateBusinessCard.bind(this);
    } 


    getBusinessCardPayload(cardPayload) {
        const newCardInfo = Array.from(this.state.newCard);
        newCardInfo.push(cardPayload);

        this.setState({ 
            newCard: newCardInfo
        });
        this.toggleCreateBusinessCard();
    }

    removeBusinessCard(index) {
        const cardState = this.state.newCard;

        cardState.splice(index, 1);

        this.setState({
            excercises: cardState
        })
    }

    toggleCreateBusinessCard() {
        const { addCardButton } = this.state;
        
        this.setState({
            addCardButton: !this.state.addCardButton,
        })
    }


    render() {
        const { addCardButton } = this.state;
        return(
            <div className="wrapper">
                <h1>Buisy</h1>
                <h2>Digital business card...........</h2>
                <button onClick={() => this.toggleCreateBusinessCard()}>
                    Add New Business Card
                </button>
                { addCardButton &&
                    <div className={ this.state.addCardButton ? 'display':null}>
                        { 
                            < AddBusinessCard 
                                getBusinessCardPayload={this.getBusinessCardPayload} 
                            />
                        }
                    </div>
                }
                <div>
                    {this.state.newCard.map((card, i) =>{
                        return (
                            < FormatBusinessCard 
                                card={card} 
                                key={`card-${i}`}
                                remove={this.removeBusinessCard}
                                cardIndex={i}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default MainView;