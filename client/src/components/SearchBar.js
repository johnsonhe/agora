const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="searchbar">Search for a subject</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search for a Subject"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;
