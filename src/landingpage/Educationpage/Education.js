import React from 'react';
import styled from 'styled-components';
import EducationData from '../../data/education.js'; // Import your education data
import { Container } from 'react-bootstrap';

function Education() {
  return (
    <Container className='mt-5 mb-5'>
      <h2>Academic Qualifications:</h2>
      <StyledWrapper>
        <div className="book-container mb-2">
          {EducationData.map((card, index) => (
            <div key={card.id} className="book-wrapper">
              <div className="book">
                <div className="cover">
                  <div className="front">
                    <img src={card.img} alt={card.title} />
                    <div className="cardInfo">
                      <h4>{card.title}</h4>
                    </div>
                  </div>
                  <div className="back">
                    <div className="cardInfo">
                      <p><strong>College: </strong>{card.college}</p>
                      <p><strong>Level: </strong>{card.level}</p>
                      <p><strong>Percentage: </strong>{card.percentage}</p>
                      <p><strong>Duration: </strong>{card.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </Container>
  );
}

const StyledWrapper = styled.div`
  .book-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 0.5s;
  }

  .book-wrapper {
    animation: scatter 1s ease forwards;
    opacity: 0;
    animation-delay: ${({ index }) => `${index * 0.2}s`}; /* Delay for each card */
  }

  .book {
    position: relative;
    width: 220px;
    height: 350px;
    perspective: 2000px;
  }

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    box-shadow: 1px 1px 12px #000;
  }

  .book:hover .cover {
    transform: rotateY(180deg);
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 1px 1px 12px #000;
  }

  .front {
    background-color: lightgray;
  }

  .back {
    background-color: whitesmoke;
    transform: rotateY(180deg);
  }

  .cover img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

  .cardInfo {
    color: #000;
  }

  .cardInfo h4 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  .cardInfo p {
    font-size: 14px;
    font-weight: 500;
  }

  /* Animation for scatter effect */
  @keyframes scatter {
    0% {
      transform: translate(0, -100px) rotate(360deg);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 1;
    }
  }

  /* Fade-in animation for the book container */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Education;
