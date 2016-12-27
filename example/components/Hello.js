import React, { Component } from 'react'
import Singleton from '../../dist'

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
console.log(Singleton);

export default new Singleton(Hello)
