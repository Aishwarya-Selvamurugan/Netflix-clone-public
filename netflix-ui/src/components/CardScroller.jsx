import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import { memo } from "react";
import { Grid } from "@mui/material";

export default memo(function CardScroller({ data, title }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <Container
      className="flex column"
      showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <Grid
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((movie, index) => {
          return (
            <Grid item key={index}>
              <div>
                <Card key={movie.id} movieData={movie} index={index} />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
});
const Container = styled.div`
  gap: 1rem;
  padding-left: 3%;
  padding-right: 3%;
  postition: relative;
  h1 {
    padding-bottom: 2rem;
  }
  .div {
    padding-bottom: 15%;
  }
  .item {
    position: absolute;
    padding: 1.5%;
  }
`;
