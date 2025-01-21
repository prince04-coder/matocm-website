import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div id="first">
          <div id="second">
            <div id="third">
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #080712; /* Set the background color to black */

  .loader {
    background-color: black;
    position: relative;
    width: 5em;  /* Increased loader size */
    height: 5em;  /* Increased loader size */
    transform-origin: center;
    transition: 1s;
    border-radius: 50px;
    box-shadow: inset 0px 0px 10px purple,
    inset 5px 5px 12px rgba(44, 0, 114, 0.8),
    inset 8px 8px 1px rgba(160, 120, 255, 0.7),
    0px 0px 1px rgba(160, 120, 255, 0.6);
    animation: 1.2s linear infinite 0s running first682;
  }

  .loader div {
    width: inherit;
    height: inherit;
    position: absolute;
  }

  #first {
    transform: rotate(90deg)
  }

  #first::before {
    --width: 2em;  /* Increased inner circle size */
    --height: 2em;  /* Increased inner circle size */
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width)/2);
    width: 2em;  /* Increased inner circle size */
    height: 2em;  /* Increased inner circle size */
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255),
    0px 0px 2px white;
    border-radius: 50px;
    animation: 0.8s ease-in 0s infinite running jump2;
  }

  #second {
    transform: rotate(90deg);
  }

  #second::before {
    --width: 2em;  /* Increased inner circle size */
    --height: 2em;  /* Increased inner circle size */
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width)/2);
    width: 2em;  /* Increased inner circle size */
    height: 2em;  /* Increased inner circle size */
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255),
    0px 0px 2px white;
    border-radius: 50px;
    animation: 1.5s ease-in 0s infinite running jump2;
  }

  #third {
    transform: rotate(90deg)
  }

  #third::before {
    --width: 2em;  /* Increased inner circle size */
    --height: 2em;  /* Increased inner circle size */
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width)/2);
    width: 2em;  /* Increased inner circle size */
    height: 2em;  /* Increased inner circle size */
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255),
    0px 0px 2px white;
    border-radius: 50px;
    animation: 1.6s ease-in 0s infinite running jump2;
  }

  .loader::after {
    --width: 2em;  /* Increased inner circle size */
    --height: 2em;  /* Increased inner circle size */
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - var(--width)/2);
    width: 2em;  /* Increased inner circle size */
    height: 2em;  /* Increased inner circle size */
    background-color: rgb(44, 0, 114);
    box-shadow: inset 5px 5px 10px rgb(160, 120, 255),
    0px 0px 2px white;
    border-radius: 50px;
    animation: 1.2s ease-in 1s alternate infinite running jump2;
  }

  @keyframes first682 {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(0deg);
      transform: rotate(90deg)
    }

    50% {
      transform: rotate(90deg);
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(180deg);
      transform: rotate(270deg)
    }

    100% {
      transform: rotate(270deg);
      transform: rotate(360deg);
    }
  }

  @keyframes jump2 {
    0% {
      top: 100%;
    }

    25% {
      top: 230%;
    }

    50% {
      top: 100%;
    }

    75% {
      height: 0.6em;
    }

    100% {
      height: 2em;  /* Increased jump height */
    }
  }

  

`;

export default Loader;
