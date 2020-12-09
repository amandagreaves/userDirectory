import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        placeholder: "Search Employee Name"
    }

    handleSearch = e => {
        console.log("searched! " , e)
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="searchBar"
                        placeholder={this.state.placeholder}
                        onChange={this.handleSearch}
                    />
                </form>
            </div>
        )
    }
};

export default SearchBar;