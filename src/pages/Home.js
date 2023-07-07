import React, { useState } from 'react'
import MainPageLayout from './layouts/MainPageLayout'
import { apiGet } from '../store/config'
import ShowGrid from '../components/ShowGrid'
import { useLastQuery } from '../store/custom-hooks'
import {
  SearchButtonWrapper,
  SearchInput,
} from './styles/Home.styled'

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
    });
  }

  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return (
        <ShowGrid data={results} />
      )
    }
    return null;
  }

  return (
    <div>
      <MainPageLayout>
        <SearchInput
          type="text"
          placeholder='Search for something'
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        <SearchButtonWrapper>
          <button type='button' onClick={onSearch}>
            Search
          </button>
        </SearchButtonWrapper>
        {renderResult()}
      </MainPageLayout>
    </div>
  )
}

export default Home