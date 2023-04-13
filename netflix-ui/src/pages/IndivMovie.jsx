import React from "react";
import video from "../assets/video.mp4";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function IndivMovie() {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar />
      <div className="hero">
        <video
          src={video}
          autoPlay={true}
          loop
          muted
          onClick={() => navigate("/player")}
        />
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
      {/* <p>Hello</p> */}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  overflow-y: hidden;
  background-color: black;
  .hero {
    position: relative;
    .container {
      position: absolute;
      top: 3rem;
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
