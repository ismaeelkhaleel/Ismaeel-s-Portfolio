import React from 'react';
import styled from 'styled-components';
import CertificateData from '../../data/certificate.js'; // Import your certificate data
import { Container } from 'react-bootstrap';

const Certificate = () => {
    return (
        <Container className="mt-5 mb-5">
            <h2 className="mb-2">Certificates:</h2>
            <StyledWrapper>
                {CertificateData.map((CertificateData, index) => (
                    <div className="card-wrapper" key={CertificateData.id}>
                        <div className="card">
                            <img src={CertificateData.img} alt={CertificateData.title} className="card__image" />
                            <div className="card__content">
                                <p className="card__title"><strong>Title:</strong> {CertificateData.title}</p>
                                <p className="card__description">
                                    <strong>Institute:</strong> {CertificateData.institute}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </StyledWrapper>
        </Container>
    );
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 0.5s;

  .card-wrapper {
    animation: scatter 1s ease forwards;
    opacity: 0;
    animation-delay: ${({ index }) => `${index * 0.2}s`}; /* Delay for each card */
  }

  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #333;
    font-weight: 500;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
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

export default Certificate;
