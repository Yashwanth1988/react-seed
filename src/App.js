import React from 'react';

export class App extends React.Component {

    
    render(){
       
        return (
            <div>
                <h1>Hi {this.props.message}, to the React world.</h1>
            </div>
        )
    }

}

export default App;
