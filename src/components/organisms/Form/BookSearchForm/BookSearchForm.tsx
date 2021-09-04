import React from 'react';
import { useInput } from 'common/hooks/useInput';
import { useHistory } from 'react-router-dom';
import SearchInput from 'components/molecules/SearchInput/SearchInput';
import { StyledBookSearchForm } from './BookSearchForm.styled';

const BookSearchFrom: React.FC = () => {
  const [search, handleSearch] = useInput();

  const history = useHistory();

  const handleSubmit: React.FormEventHandler = event => {
    event.preventDefault();

    history.push({ pathname: '/detail', search: `?search=${search}` });
  };

  return (
    <StyledBookSearchForm onSubmit={handleSubmit}>
      <SearchInput filterOptions={['제목', '작성자']} value={search} onChange={handleSearch} />
    </StyledBookSearchForm>
  );
};

export default BookSearchFrom;
