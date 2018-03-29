import React, { Component } from 'react';
import AddBusinessCard from './AddBusinessCard.js';
import FormatBusinessCard from './FormatBusinessCard.js';

class MainView extends Component {
    constructor() {
        super();

        this.state = {
            newCard: [],
            addCardButton: true,
        }
        this.getBusinessCardPayload = this.getBusinessCardPayload.bind(this);
        this.removeBusinessCard = this.removeBusinessCard.bind(this);
    } 


    getBusinessCardPayload(cardPayload) {
        const newCardInfo = Array.from(this.state.newCard);
        newCardInfo.push(cardPayload);

        this.setState({ 
            newCard: newCardInfo
        });

    }

    removeBusinessCard(index) {
        const excerciseState = this.state.newCard;

        excerciseState.splice(index, 1);

        this.setState({
            excercises: excerciseState
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const sendWorkout = this.state.newCard;
        this.props.getWorkoutPayload(sendWorkout);

        this.setState({
            newCard: [],
        })
    }

    render() {
        const { addCardButton } = this.state;
        return(
            <div>
                <div>
                    <button 
                        onClick={() => this.toggle()}
                    >
                    </button>
                        { addCardButton &&
                            < AddBusinessCard 
                                getBusinessCardPayload={this.getBusinessCardPayload} 
                            />
                        }
                </div>
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