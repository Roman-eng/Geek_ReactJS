import React from 'react';
import Child from './Child.jsx';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Наш первый React-компонент', counter: 0};
    }
    //state = {
    //    text: 'Наш первый React-компонент'
    //};
    componentWillMount() {
        console.log('componentWillMount');
    }
 
    componentDidMount() {
        console.log('componentDidMount');
    }
 
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
   
    handleClick() {
        this.setState({ counter: this.state.counter + 1 })
    }; 

    render() {
        setTimeout(() => this.setState({'text': 'Обновленный React-компонент'}), 1000);
        return (
            <div>
                <h1>{this.state.text}</h1>
                <Child counter={ this.state.counter } />
                <button onClick={ this.handleClick.bind(this) }>+1</button>
           </div>
       )
   }
}
