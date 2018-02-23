import React from "react";

import { connect } from "react-redux";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { debounce, isEmpty } from 'lodash';

// Home page component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.handleKeyApply = this.handleKeyApply.bind(this);
    this.debouncedSearch = debounce(this.onSearch, 250);
    this.state = {
      selectedIndex: 0
    }
  }  

  onSearch(searchTerm) {
    this.props.dispatch({ type: 'USERS_FETCH_LIST', searchTerm });
  }

  handleKeyApply(keyCode) {
    const { results } = this.props.users;

    if(results && results.data && results.data.items) { 
      let element = document.querySelector('.selected');
      let containerElement = document.querySelector('.results');  
      var el = element.getBoundingClientRect();
      var container = containerElement.getBoundingClientRect();

      const itemsCount = results.data.items.length;
      console.log('items count: ', itemsCount);
      switch(keyCode) {
        case 13: // enter
          const index = this.state.selectedIndex;
          const url = results.data.items[index].url;
          window.open(url,'_blank');
        break;
        case 38: // up
          this.setState((prevState) => {
            return { 
              selectedIndex: prevState.selectedIndex > 0 ? prevState.selectedIndex - 1 : 0
            }
          });

          if(el.top < container.top) {
            element.scrollIntoView(false);
          }
          console.log('up: ', el.top, container.top);
        break;
        case 40: // down
          this.setState((prevState) => {
            return { 
              selectedIndex: prevState.selectedIndex < itemsCount - 1 ? 
                              prevState.selectedIndex + 1 : 
                              itemsCount - 1
            }
          });
          
          if(el.bottom > container.bottom) {
            element.scrollIntoView(true);
          }
          
        break;
      }
    }
  }

  // render
  render() {
    const { results, searchTerm } = this.props.users;
    return (
      <div className="page-home">
        <div className="control">
          <SearchBox onSearch={this.onSearch} onKeyApply={this.handleKeyApply} />
          {/* { users && !isEmpty(users.data.items) ? (
            <SearchResults users={users} searchTerm={searchTerm}/>
            ) : (<div>Loading...</div>)} */}
            <SearchResults users={results} searchTerm={searchTerm} selectedIndex={this.state.selectedIndex} />
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    users: state.users || [],
  };
})(Home);
