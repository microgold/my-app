import styled, { keyframes } from 'styled-components'

export const pulseAnimation = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
0% { font-size: 5px; width: 25px; height: 25px; }
33% { font-size: 10px;  width: 40px; height: 40px; }
66% { font-size: 15px;  width:  75px;  height: 75px; }
100% { font-size: 20px;  width: 100px; height:100px; }`



export const StyledColorBlock = styled.div < { fill: string } >`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    outline: solid 3px black;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${p => p.fill}; 
    animation-name: ${pulseAnimation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    
    @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
  }

`
export const StyledChangeColorButton = styled.button `
    width: 100px;
    height: 32px;
    background: #CC0055;
    outline: solid 2px purple;
    margin: 30px;
    color: white;
    border-radius: 5px;

    &:hover {
        background: blue;
    }
    `

