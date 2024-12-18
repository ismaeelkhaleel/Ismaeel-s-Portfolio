import React from "react";
import styled from "styled-components";

function Skill() {
  const cards = [
    { index: 0, colorCard: "142, 249, 252", title: "C++", rating: 4 },
    { index: 1, colorCard: "142, 252, 204", title: "Java", rating: 5 },
    { index: 2, colorCard: "142, 252, 157", title: "React.js", rating: 4 },
    { index: 3, colorCard: "215, 252, 142", title: "Node.js", rating: 3 },
    { index: 4, colorCard: "252, 252, 142", title: "Express.js", rating: 3 },
    { index: 5, colorCard: "252, 208, 142", title: "Rest API", rating: 4 },
    { index: 6, colorCard: "252, 142, 142", title: "MongoDB", rating: 3 },
    { index: 7, colorCard: "252, 142, 239", title: "MySQL", rating: 4 },
    { index: 8, colorCard: "204, 142, 252", title: "Github", rating: 5 },
    { index: 9, colorCard: "142, 202, 252", title: "Python", rating: 5 },
  ];

  return (
    <StyledWrapper cardCount={cards.length}>
      <div className="wrapper">
        <div className="inner">
          {cards.map((card) => (
            <div
              key={card.index}
              className="card"
              style={{
                "--index": card.index,
                "--color-card": card.colorCard,
                animationDelay: `${card.index * 0.3}s`, // Add delay for individual cards
              }}
            >
              <div className="content">
                <h4>{card.title}</h4>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < card.rating ? "star filled" : "star"}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  --w: 100px;
  --h: 150px;
  --translateZ: calc((var(--w) + var(--h)) + 0px);
  --rotateX: -15deg;
  --perspective: 1000px;

  .wrapper {
    width: 100%;
    height: 60vh;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
  }

  .inner {
    position: absolute;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    width: var(--w);
    height: var(--h);
    background-color: rgba(var(--color-card), 0.8);
    border: 2px solid rgba(var(--color-card), 1);
    border-radius: 12px;
    overflow: hidden;
    transform: translate(
        calc(-100vw + ${() => Math.random() * 200}vw),
        calc(-100vh + ${() => Math.random() * 200}vh)
      )
      scale(0.1);
    animation: scatterToCircle 1.5s ease-out forwards;
    animation-delay: var(--animation-delay); /* Stagger animations */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    color: #333;
  }

  h4 {
    margin: 0;
    font-size: 14px;
  }

  .stars {
    margin: 5px 0;
    display: flex;
    justify-content: center;
  }

  .star {
    font-size: 14px;
    color: #ccc;
  }

  .star.filled {
    color: #ffcc00;
  }

  @keyframes scatterToCircle {
    0% {
      transform: translate(
          calc(-100vw + ${() => Math.random() * 200}vw),
          calc(-100vh + ${() => Math.random() * 200}vh)
        )
        scale(0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: rotateY(calc((360deg / ${(props) => props.cardCount}) * var(--index)))
        translateZ(var(--translateZ));
      scale(1);
    }
  }
`;

export default Skill;
