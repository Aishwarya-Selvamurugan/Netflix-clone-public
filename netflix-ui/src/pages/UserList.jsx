import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import Card from "../components/Card";
import styled from "styled-components";
import Navbar from "../components/navbar";
// import { getUsersLikedMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setmovies } from "../store";
import { memo } from "react";

export default memo(function NetFlix() {
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userListLoaded = useSelector((state) => state.netflix.userListLoaded);
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [Movies, setMovies] = useState(true);
  let len = true;

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  const getUsersLikedMovies = async () => {
    try {
      console.log(email + "client");
      await axios
        .get(`http://localhost:3001/api/user/liked/${email}`)
        .then((res) => {
          console.log(res.data.movies);
          setMovies(false);
          dispatch(setmovies(res.data.movies));
        });
      // console.log(likedMovies + " hii");
      // dispatch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(email + " email");
    if (email) {
      getUsersLikedMovies();
    }
  }, [email]);

  if (movies === undefined) {
    len = false;
  }
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        {len && (
          <div className="grid flex">
            {movies.map((movie, index) => {
              return (
                <Card
                  movieData={movie}
                  index={index}
                  key={movie.id}
                  isLiked={true}
                />
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
});

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
