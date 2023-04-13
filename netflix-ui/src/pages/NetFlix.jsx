import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";
import { memo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import axios from "axios";
import { setlikedmovies } from "../store";

export default memo(function NetFlix() {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);
  const [email, setEmail] = useState(undefined);
  const [user, setUser] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser.uid);
      setEmail(currentUser.email);
    } else navigate("/login");
  });

  useEffect(() => {
    dispatch(getGenres());
    console.log(genresLoaded);
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const getUsersLikedMovies = async () => {
    try {
      console.log(email + "client");
      await axios
        .get(`http://localhost:3001/api/user/liked/${email}`)
        .then((res) => {
          console.log(res.data.movies);

          // setMovies(false);
          dispatch(setlikedmovies(res.data.movies));
        });
      // console.log(likedMovies + " hii");
      // dispatch(likedMovies);
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

  // console.log("movies " + movies);

  return (
    <Container>
      <Navbar isScrolled={isScroll} />
      <div className="hero">
        <img src={backgroundImage} className="background-image" />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/player")}
            >
              <FaPlay /> Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
});

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(90%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 3rem;
      .logo {
        img {
          width: 90%;
          height: 90%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        margin-top: 3rem;
        margin-bottom: 7rem;
        gap: 1.5rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
