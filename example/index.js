import React, { Component } from 'react'
import { render } from 'react-dom'
import Hello from './components/Hello'

class Main extends Component {
    render() {
        return (
            <div>
                <button onClick={ e => Hello.show() }>Show Tips</button>
                <button onClick={ e => Hello.hide() }>Hide Tips</button>
            </div>
        )
    }
}
render(
    <Main />,
    document.getElementById('app')
)
