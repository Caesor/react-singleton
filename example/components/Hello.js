import React, { Component } from 'react'
import Singleton from '../../dist/singleton.min.js'

class Hello extends Component {
    state = {
        show: true
    }
    render() {
        return (
            <div>
                <p>This is a hello tips</p>
            </div>
        )
    }
}

export default new Singleton(Hello)
