import React, { Component } from "react";
import axios from 'axios'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            note: '',
            notes: []
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleBtnClk = this.handleBtnClk.bind(this)
    }
    componentDidMount() {
        axios.get('http://5a83402398bd81001246c901.mockapi.io/notes?sortBy=createdAt&order=desc')
            .then(({ data }) => {
                this.setState({ notes: data })
                //console.log(response)
            })
    }

    handleInput(e) {
        this.setState({ note: e.target.value })
        // console.log(e.target.value)
    }

    handleBtnClk(e) {
        axios.post('http://5a83402398bd81001246c901.mockapi.io/notes', { note: this.state.note })
            .then(({ response }) => {
                axios.get('http://5a83402398bd81001246c901.mockapi.io/notes?sortBy=createdAt&order=desc')
                    .then(({ data }) => {
                        this.setState({ notes: data, note: '' })
                    })
            })
    }

    render() {
        const notes = this.state;
        console.log(notes)
        return (
            <div className="card" style={{ width: '700px', display: 'inline-block', float: 'left' }}>
                <h5 style={{ textAlign: 'left' }}>Note:</h5>
                <div className="md-text-field">
                    <input type="text" placeholder="" value={this.state.note}
                        onChange={this.handleInput} />
                </div>
                <div><button className="button btn-cta" onClick={this.handleBtnClk} >Add Note</button></div>
                <div>
                    {
                        this.state.notes.length > 0 &&
                        this.state.notes.map(element => (
                            <div className='card'>{element.note} {element.createdAt=Date.now()}</div>
                        ))
                    }
                </div>
            </div>

        );
    }
}
export default Search