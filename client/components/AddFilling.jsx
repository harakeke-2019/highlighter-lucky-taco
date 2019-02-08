import React from 'react'
import { addTacoFilling } from '../tacoApi'
import { Redirect } from 'react-router-dom'

export default class AddFilling extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addFilling = this.addFilling.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFilling(e) {
        addTacoFilling(this.state)
        .then(() => {return <Redirect to='/'/>})
    }

    render() {
        return (
            <div className='add-widget'>
                <form>
                    <p><input placeholder='Name' name='name'
                        onChange={this.handleChange}
                        value={this.state.name}
                    /></p>
                    <p><input placeholder='Image' name='image'
                        onChange={this.handleChange}
                        value={this.state.image}
                    /></p>
                    <button type='button' onClick={this.addFilling}>Add Filling</button>
                </form>
                
            </div>
        )
    }
}
