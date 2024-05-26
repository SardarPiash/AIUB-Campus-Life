import React, { useState } from 'react';

export default function Search({ searchText }) {
    const [inputText, setInputText] = useState('');

    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg p-1 w-full focus:border-blue-500 focus:ring-blue-500"
                onChange={(e) => setInputText(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white rounded-lg px-4 py-1 hover:bg-blue-600 transition duration-300"
                onClick={() => searchText(inputText)}
            >
                Search
            </button>
        </div>
    );
}
