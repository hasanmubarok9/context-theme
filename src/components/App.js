import React from 'react';
import { Content } from './Content';
import { ThemeContext } from '../contexts/ThemeContext';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
        
        this.state = { theme: 'light' };
    }
    
    toggleTheme() {
        if (this.state.theme === 'light') {
            this.setState({ theme: 'dark' });
        } else {
            this.setState({ theme: 'light' });
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <div className='ui container'>
                    <button onClick={this.toggleTheme}>Toggle Theme</button>
                    <Content />
                </div>
            </ThemeContext.Provider>
        );
    }
}
