import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import Home_img from "../../assets/images/home_img.png"
import { motion } from "framer-motion";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Intro() {
    const pdfUrl = "https://drive.google.com/file/d/1h8-szJks4gusHFzs_DVvqf2t1yf8KT1R/view?usp=sharing";
    const handleClick = () => {
        window.open(pdfUrl, "_blank");
    }
    return (
        <Container className="mt-5">
            <div className="row">
                <motion.div className="col-lg-6 col-md-12 mb-5 d-flex flex-column justify-content-center" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                    <h1>Who am I?</h1>
                    <p>My name is <span className="text-primary fw-bold">Mohd Ismaeel</span>, I am a passionate <span className="text-primary fw-bold">MERN stack developer</span> and <span className="text-primary fw-bold">Java programmer</span> currently pursuing my MCA from <span className="text-primary fw-bold">Aligarh Muslim University (AMU)</span>. I enjoy building robust, user-friendly, and efficient applications.</p>
                    <p>I specialize in technologies like <span className="text-primary fw-bold">JavaScript</span>, <span className="text-primary fw-bold">Node.js</span>, <span className="text-primary fw-bold">Express</span>, <span className="text-primary fw-bold">React</span>, <span className="text-primary fw-bold">MongoDB</span>. I focus on creating secure, scalable, and user-friendly applications with strong backend logic and intuitive user interfaces.</p>
                    <p>I am always eager to learn and improve my skills while working on projects that make an impact.</p>
                    <div className="typewriter-text">
                        <Typewriter
                            words={['Software Developer',
                                'Mern Stack Developer',
                                'Frontend Developer',
                                'Java Developer']}
                            loop={true}
                            typeSpeed={150}
                            deleteSpeed={150}

                        />
                    </div>
                    <div>
                        <button className="btn btn-outline-primary mt-3" onClick={handleClick}>Download Resume <FontAwesomeIcon icon={faDownload} /></button>
                    </div>
                </motion.div>
                <motion.div className="col-lg-6 col-md-12 d-flex justify-content-center" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                    <img src={Home_img} alt="Home" className="img-fluid" />
                </motion.div>
                <motion.div>

                </motion.div>
            </div>
            <style>
                {
                    `
                    .img-fluid{
                    width: 80%;
                    height: auto;
                    }
                     .typewriter-text {
                        font-size: 1.2rem;
                        font-weight: bold;
                        color:rgb(248, 8, 208);
                      }
                    `
                }
            </style>
        </Container>
    )
}

export default Intro;