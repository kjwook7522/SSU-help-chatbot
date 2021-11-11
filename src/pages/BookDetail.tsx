import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import query from 'query-string';
import IndexBackground from 'components/organisms/Background/IndexBackground/IndexBackground';
import BookDetailTemplate from 'templates/BookDetailTemplate/BookDetailTemplate';
import BookDetailContent from 'components/organisms/BookDetailContent/BookDetailContent';
import BookRecommendContent from 'components/organisms/BookRecommendContent/BookRecommendContent';
import { fetchBarcodeBook, fetchRecommendBooks, fetchSearchBook } from 'common/apis/book';

/* global BookQuery, SearchBookBody, BookInfromation */

const BookDetail: React.FC = () => {
  const location = useLocation();
  const queryData: BookQuery = query.parse(location.search);

  const [bookInformation, setBookInformation] = useState<BookInfromation>();
  const [recommendBooks, setRecommendBooks] = useState<BookInfromation[]>([]);

  const setSearchBookInfo = async (text: string, option: string) => {
    const body: SearchBookBody = {
      text,
      option,
    };

    const searchBookResponse = await fetchSearchBook(body);
    if (!searchBookResponse) return;

    setBookInformation(searchBookResponse.data);

    const recommendBookResponse = await fetchRecommendBooks(body);
    if (!recommendBookResponse) return;

    setRecommendBooks(recommendBookResponse.data);
  };

  const setBarcodeBookInfo = async (barcode: string) => {
    const barcodeBookResponse = await fetchBarcodeBook(barcode);
    if (!barcodeBookResponse) return;

    setBookInformation(barcodeBookResponse.data);
  };

  // useEffect로 query data가 serach인지 barcode인지에 따라 api 호출을 각각한다
  useEffect(() => {
    if (queryData.search) {
      setSearchBookInfo(queryData.search, 'title');
    } else if (queryData.barcode) {
      setBarcodeBookInfo(queryData.barcode);
    }
  }, [queryData.search, queryData.barcode]);

  return (
    <>
      <IndexBackground />
      <BookDetailTemplate
        searchValue={queryData.search}
        detailSection={
          <BookDetailContent
            bookTitle={bookInformation?.title}
            author={bookInformation?.author}
            imageSrc={bookInformation?.image}
            publisher={bookInformation?.publisher}
            publishDate={bookInformation?.publisher}
            price={bookInformation?.price}
            bookRating={bookInformation?.rating}
            bookRank={
              bookInformation?.year.length === 0 ? '' : `${bookInformation?.year[0]}년도 ${bookInformation?.rank[0]}위`
            }
          />
        }
        recommendSection={<BookRecommendContent books={recommendBooks} />}
      />
    </>
  );
};

export default BookDetail;
