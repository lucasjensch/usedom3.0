import React, { useState } from 'react';

const SearchableContent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const allContent = ['Article 1', 'Article 2', 'Article 3', /* ... */];

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const results = allContent.filter(content =>
            content.toLowerCase().includes(term)
        );

        setSearchResults(results);
    };

    return (
        <div>
            <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for content..."
            />

            <div>
                <h2>Search Results:</h2>
                <ul>
                    {searchResults.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchableContent;