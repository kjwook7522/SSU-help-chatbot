import React from 'react';
import { useLocation } from 'react-router-dom';
import query from 'query-string';
import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';
import BookDetailTemplate from 'templates/BookDetailTemplate/BookDetailTemplate';
import BookDetailContent from 'components/organisms/BookDetailContent/BookDetailContent';
import BookRecommendContent from 'components/organisms/BookRecommendContent/BookRecommendContent';
import { TEMP_BOOK_DATA } from 'common/bookdata';

/* global BookQuery */

const BookDetail: React.FC = () => {
  const location = useLocation();
  const queryData: BookQuery = query.parse(location.search);
  
  // useEffect로 query data가 serach인지 barcode인지에 따라 api 호출을 각각한다

  return (
    <>
      <IndexBackground />
      <BookDetailTemplate
        searchValue={queryData.search}
        detailSection={
          <BookDetailContent
            bookTitle="설민석의 역사 강의"
            author="설민석"
            publisher="항해 출판사"
            publishDate="2021. 09. 10"
            price={30000}
          />
        }
        recommendSection={<BookRecommendContent books={TEMP_BOOK_DATA} />}
      />
    </>
  );
};

export default BookDetail;
