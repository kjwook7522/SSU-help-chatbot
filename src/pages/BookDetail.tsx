import React from 'react';
import { useLocation } from 'react-router-dom';
import query from 'query-string';

const BookDetail: React.FC = () => {
  const location = useLocation();
  const queryData = query.parse(location.search);

  return <div>search: {queryData.search}</div>;
};

export default BookDetail;
