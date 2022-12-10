import React from "react";
import PropTypes from 'prop-types';

function SearchModules({ keyword, keywordChange }) {
    return (
        <section className="search-bar">
            <input type="text" placeholder="Cari Nama Pelajaran ..." value={keyword} onChange={(event) => keywordChange(event.target.value)} />
        </section>
    );
}

SearchModules.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchModules;