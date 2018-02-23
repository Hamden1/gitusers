import React from "react";

export class SearchResults extends React.Component {

    highlightMatchingText(text, searchText) {
        let parts = text.split(searchText);
        return (
            <span>
                <span className="highlight">{searchText}</span>
                {parts[1]}
            </span>
        )
    }

    renderResult(item, searchTerm, index, selectedIndex) {
        
        return(
            <div className={`row result-item ${index == selectedIndex && 'selected'}`} key={item.id}>
                <div className="col-xs-1 vertical-center icon">
                    <img alt="" src={item.avatar_url} className="img-thumbnail img-responsive" />
                </div>
                <div className="user col-xs-11 vertical-center">
                    {this.highlightMatchingText(item.login, searchTerm)}
                </div>
            </div>
        )
    }

    render() {
        const { users, searchTerm, selectedIndex } = this.props;
        
        if(users && users.data) {
            return (
                <div className="results">
                    <div className="row results-label">
                        <div className="col-xs-12">GITHUB USERS</div>
                    </div>
                    { (users.data.items || []).map((item, index) => (this.renderResult(item, searchTerm, index, selectedIndex)))}
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}