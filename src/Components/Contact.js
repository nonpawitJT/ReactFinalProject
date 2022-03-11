import React from 'react'
import styled  from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'

const Contact = () => {
  return (
    <ContactStyled>
<section class="page-contain">

  <a href="https://www.facebook.com/TaN2554/" class="data-card">
    <h3>Facebook</h3>
    <h4>Nonpawit Nittaworn</h4>
    <p>https://www.facebook.com/TaN2554/</p>
    <span class="link-text">
      Click Here
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg>
    </span>
  </a>
  <a href="#" class="data-card">
    <h3>Email</h3>
    <p>ni.nonpawit_st@tni.ac.th</p>
    <span class="link-text">
    
    
    </span>
  </a>
  <a href="https://github.com/nonpawitJT" class="data-card">
    <h3>GitHub</h3>
    <h4>nonpawitJT</h4>
    <p>https://github.com/nonpawitJT</p>
    <span class="link-text">
    Click Here
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg>
    </span>
  </a>
  
</section></ContactStyled>
  )
}
const ContactStyled = styled.div`

* {
    box-sizing: border-box;
  }
  
  .page-contain {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
 
    padding: 2em;
    font-family: 'Open Sans', sans-serif;
  }
  
  .data-card {
    display: flex;
    flex-direction: column;
    max-width: 20.75em;
    min-height: 20.75em;
    overflow: hidden;
    border-radius: .5em;
    text-decoration: none;
    background: white;
    margin: 1em;
    padding: 2.75em 2.5em;
    box-shadow: 0 1.5em 2.5em -.5em rgba(#000000, .1);
    transition: transform .45s ease, background .45s ease;
    
    h3 {
      color: #2E3C40;
      font-size: 3.5em;
      font-weight: 600;
      line-height: 1;
      padding-bottom: .5em;
      margin: 0 0 0.142857143em;
      border-bottom: 2px solid var(--primary-color);
      transition: color .45s ease, border .45s ease;
    }
  
    h4 {
      color: #627084;
      text-transform: uppercase;
      font-size: 1.125em;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.1em;
      margin: 0 0 1.777777778em;
      transition: color .45s ease;
    }
  
    p {
        font-size: 1rem;
      opacity: 0;
      color: #FFFFFF;
      font-weight: 600;
      line-height: 1.8;
      margin: 0 0 1.25em;
      transform: translateY(-1em);
      transition: opacity .45s ease, transform .5s ease;
    }
  
    .link-text {
      display: block;
      color: var(--primary-color);
      font-size: 1.125em;
      font-weight: 600;
      line-height: 1.2;
      margin: auto 0 0;
      transition: color .45s ease;
  
      svg {
          
        margin-left: .5em;
        transition: transform .6s ease;
        
        path {
            fill: var(--primary-color);
          transition: fill .45s ease;
        }
      }
    }
    
    &:hover {
      background: var(--primary-color);
      transform: scale(1.02);
      
      h3 {
        color: #FFFFFF;
        border-bottom-color: var(--white-color);
      }
  
      h4 {
        color: #FFFFFF;
      }
  
      p {
        opacity: 1;
        transform: none;
      }
  
      .link-text {
        color: #FFFFFF;
  
        svg {
          animation: point 1.25s infinite alternate;
          
          path {
            fill: #FFFFFF;
          }
        }
      }
    }
  }
  
  @keyframes point {
    0% {
     transform: translateX(0);
    }
    100% {
      transform: translateX(.125em);
    }
  }



`;

export default Contact