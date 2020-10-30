import React from 'react';

class OpenEyes extends React.Component{
    render(){
        return(
            <h1>Open Your Eyes - {this.props.name}</h1>
        )
    }
}

/*function OpenEyes(props){
    return(
    <h1>Open Your Eyes - {props.name}</h1>
    );
}*/

export default OpenEyes;