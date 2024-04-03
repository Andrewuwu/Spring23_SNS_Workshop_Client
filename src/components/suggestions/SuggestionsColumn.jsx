import React from "react";
import SearchBar from "./SearchBar";
import SuggestionsList from "./SuggestionsList";

// Search Bar
// "What's happening"
// Who to Follow
// 

function SuggestionsColumn(){
    return (
        <>
            <SearchBar></SearchBar>
            <SuggestionsList></SuggestionsList>
        </>
    );
}

export default SuggestionsColumn;