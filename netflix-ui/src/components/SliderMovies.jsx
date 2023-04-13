import React from "react";
import CardScroller from "./CardScroller";
import { memo } from "react";
import styled from "styled-components";

export default memo(function SliderMovies({ movies, genres }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardScroller
        title={"Trending Movies"}
        data={getMoviesFromRange(0, 50)}
      />
    </Container>
  );
});

const Container = styled.div`
  padding: 2.5rem;
`;
