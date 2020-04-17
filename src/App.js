import React from 'react';
import { Button, InputText } from 'react-lib'

export class App extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			name: 'test'
		}
	}
	
    
    render(){
        return (
            <div>
                <h1>Hi {this.props.message}, to the React world.</h1>
                <InputText id="what_your_name"
                	className="myName"
                	value={this.state.name}
                	onChange={
                		(e) => {
                			this.setState({
                				name: e.target.value
                			})
                		}
                	}
                 />
                <Button 
                	id="test_id"
                	className="myButton"
                	label={'My label Hello..!'}
                	onClick={function(){
                		alert('Here is the click event..!')
                	}} />
            </div>
        )
    }

}

export default App;
