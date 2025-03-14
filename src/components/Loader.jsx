import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core" />
        </div>  
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(359deg);
    }
  }

  @keyframes spin3D {
    from {
      transform: rotate3d(.5,.5,.5, 360deg);
    }

    to {
      transform: rotate3d(0deg);
    }
  }

  @keyframes configure-clockwise {
    0% {
      transform: rotate(0);
    }

    25% {
      transform: rotate(90deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(270deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes configure-xclockwise {
    0% {
      transform: rotate(45deg);
    }

    25% {
      transform: rotate(-45deg);
    }

    50% {
      transform: rotate(-135deg);
    }

    75% {
      transform: rotate(-225deg);
    }

    100% {
      transform: rotate(-315deg);
    }
  }

  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }

    to {
      opacity: .25;
      transform: scale(.75);
    }
  }

  .circle-border {
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63,249,220);
    background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgb(5, 255, 138) 100%);
    animation: spin .8s linear 0s infinite;
  }

  .circle-core {
    width: 100%;
    height: 100%;
    background-color: #04090e00;
    border-radius: 50%;
  }`;

export default Loader;
