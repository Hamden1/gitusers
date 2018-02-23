import React from "react";

export class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleOnChange(e) {
        this.props.onSearch(e.currentTarget.value);
    }

    handleKeyDown(e) {
        this.props.onKeyApply(e.keyCode);
    }

    render () {
        return (
            <div>                
                <input 
                    className="form-control input-lg" 
                    placeholder="Type a github username"
                    onChange={this.handleOnChange} 
                    onKeyDown={this.handleKeyDown} />                    
            </div>
        )
    }
}