const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="searchbar">search for a subject.</span>
        </label>
        <input className="search_Box"
            type="text"
            id="header-search"
            placeholder="search for a subject."
            name="s" 
        />
        <button className="Search_button" type="submit">Search.</button>
    </form>
);

export default SearchBar;
