import React, { Component } from 'react';


class AddBusinessCard extends Component {
    constructor() {
        super();
        this.state = {
            businessCard: {
                name: '',
                jobTitle: '',
                company: '',
                phone: '',
                email: '',
                interactionNotes: ''
            }
        }
    }

    updateForm(key, value) {
        const { businessCard } = this.state;
        const newCard = businessCard;
        newCard[key] = value;

        this.setState({
            businessCard: newCard,
        })
        // console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault()
        const { businessCard } = this.state;
        this.props.getBusinessCardPayload(businessCard);
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1>Create New Card</h1>
                    <p>Now you dont have to worry about the stack of cards in your wallet. Fill in the information from your hard copy business card to save it to your wallet.</p>
                </div>
                <form className="addCard__form">
                    <input className="addCard__inputs"
                        type="text"
                        placeholder="Person's Name"
                        onChange={(e) => this.updateForm('name', e.target.value)}
                    />
                    <input className="addCard__inputs"
                        type="text"
                        placeholder="Job Title"
                        onChange={(e) => this.updateForm('jobTitle', e.target.value)}
                    />
                    <input className="addCard__inputs"
                        type="text"
                        placeholder="Company"
                        onChange={(e) => this.updateForm('company', e.target.value)}
                    />
                    <input className="addCard__inputs"
                        type="text"
                        placeholder="Phone"
                        onChange={(e) => this.updateForm('phone', e.target.value)}
                    />
                    <input className="addCard__inputs"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => this.updateForm('email', e.target.value)}
                    />
                    <input className="addCard__inputs"
                        type="text"
                        placeholder="Interaction Note / Reminder"
                        onChange={(e) => this.updateForm('interactionNotes', e.target.value)}
                    />
                    <button
                        className="addCard__inputs"
                        onClick={this.handleSubmit.bind(this)}>
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default AddBusinessCard;