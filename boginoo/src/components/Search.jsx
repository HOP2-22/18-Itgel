import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const history = [];
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://hn.algolia.com/api/v1/search?", {
        params: {
          query: debouncedTerm,
        },
      });

      setResults(data.hits);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.objectID} className="item">
        <div className="right floated content">
          <a className="ui button" href={result.url}>
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Hacker News Search:</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
