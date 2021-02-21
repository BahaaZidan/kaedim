import "./MovieDetails.css";
import { Typography, Image, Descriptions } from "antd";
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
        <h1 className="movieTitle">{movieDetails.Title}</h1>
        <Image
          alt="movie poster"
          src={movieDetails.Poster}
          fallback={FALLBACK_IMAGE_BASE64}
          preview={false}
        />
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Release Date">
            {movieDetails.Released}
          </Descriptions.Item>
          <Descriptions.Item label="Plot">
            {movieDetails.Plot}
          </Descriptions.Item>
          <Descriptions.Item label="Writer">
            {movieDetails.Writer}
          </Descriptions.Item>
          <Descriptions.Item label="Director">
            {movieDetails.Director}
          </Descriptions.Item>
          <Descriptions.Item label="Genre">
            {movieDetails.Genre}
          </Descriptions.Item>
          <Descriptions.Item label="Actors">
            {movieDetails.Actors}
          </Descriptions.Item>
        </Descriptions>
      </section>
    </>
  );
};

export default MovieDetails;
