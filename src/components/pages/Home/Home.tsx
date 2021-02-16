import "./Home.css";
import React, { useState } from "react";
import { Button, Card, Input, Pagination, Result, Image } from "antd";
import { Link } from "react-router-dom";
import { useLazyPromise } from "../../../utils/hooks";
import { searchMovie } from "../../../utils/requests/OMDbAPI";
import { FALLBACK_IMAGE_BASE64 } from "../../../utils/constants";

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const { execute, result } = useLazyPromise(searchMovie);

  return (
    <>
      <section className="searchInputSection">
        <Input
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") execute(searchValue);
          }}
          size="large"
          placeholder="Movie name ?"
          className="searchInput"
        />
        <Button
          onClick={() => execute(searchValue)}
          type="primary"
          size="large"
          className="searchButton"
        >
          Find it!
        </Button>
      </section>
      {!result?.data?.Error ? (
        <section className="searchResultSection">
          {result?.data?.Search?.map((result: any) => (
            <Link to={`/m/${result.imdbID}`}>
              <Card
                key={result.imdbID}
                hoverable
                className="movieCard"
                cover={
                  <Image
                    alt="movie poster"
                    src={result.Poster}
                    fallback={FALLBACK_IMAGE_BASE64}
                    preview={false}
                  />
                }
              >
                <Card.Meta title={result.Title} description={result.Year} />
              </Card>
            </Link>
          ))}
        </section>
      ) : (
        <Result
          status="warning"
          title="We couldn't find a movie with that name!"
          extra={<p>Maybe try a different name ?</p>}
        />
      )}
      <Pagination
        className="searchResultPagination"
        onChange={(page) => execute(searchValue, page)}
        total={result?.data?.totalResults}
        pageSize={10}
        hideOnSinglePage
        showSizeChanger={false}
        defaultCurrent={1}
      />
    </>
  );
};

export default Home;
