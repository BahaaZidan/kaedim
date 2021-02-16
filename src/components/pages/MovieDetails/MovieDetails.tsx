import "./MovieDetails.css";
import { Typography, Image } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { usePromise } from "../../../utils/hooks";
import { getMovieDetails } from "../../../utils/requests/OMDbAPI";
import LoadingSpinner from "../../atoms/LoadingSpinner";
import Error500 from "../../molecules/Error500/Error500";
import CenteredContent from "../../templates/CenteredContent/CenteredContent";
import { FALLBACK_IMAGE_BASE64 } from "../../../utils/constants";

const MovieDetails = () => {
  const { imdbID } = useParams<any>();
  const { result, loading } = usePromise(getMovieDetails(imdbID));

  const movieDetails = result?.data;

  if (loading)
    return (
      <CenteredContent>
        <LoadingSpinner />
      </CenteredContent>
    );
  if (result?.data?.Error)
    return (
      <CenteredContent>
        <Error500 />
      </CenteredContent>
    );
  return (
    <>
      <section className="movieDetailsSection">
        <Typography.Title>{movieDetails.Title}</Typography.Title>
        <Image
          alt="movie poster"
          src={movieDetails.Poster}
          fallback={FALLBACK_IMAGE_BASE64}
        />
      </section>
    </>
  );
};

export default MovieDetails;
