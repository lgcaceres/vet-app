import React from 'react';
import { useParams } from 'react-router';

const SearchForm = () => {
    const {id} = useParams();
    return (
        <div>
            Hello {id}
        </div>
    );
}

export default SearchForm;