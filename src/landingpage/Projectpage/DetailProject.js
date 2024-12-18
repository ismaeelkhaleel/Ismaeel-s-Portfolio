import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../../data/project.js";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function ProjectDetail() {
    const { id } = useParams(); // Get project ID from URL
    const project = projectData.find((p) => p.id === parseInt(id));

    if (!project) {
        return <Container><h2 className="text-center mt-5">Project not found</h2></Container>;
    }

    return (
        <>
            {/* Inline Style for the Page */}
            <style>
                {`
                .project-detail {
                    background-color:rgb(0, 0, 0);
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    margin-top: 100px;
                }
                .project-detail-card {
                    border: none;
                    background-color:rgb(0, 0, 0);
                    color: white;
                }
                .project-image {
                    border-radius: 10px;
                    overflow: hidden;
                    max-height: 400px;
                }
                .project-image img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
                .project-detail h2 {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .project-detail .btn {
                    margin-right: 10px;
                }
                `} 
            </style>

            <Container className="project-detail">
                <Row>

                    <Col md={6} className="project-image d-flex align-items-center justify-content-center">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img src={project.img} alt={project.title} />
                        </motion.div>
                    </Col>

                    <Col md={6}>
                        {/* Apply motion.div for the card animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Card className="project-detail-card">
                                <Card.Body>
                                    <h2>{project.title}</h2>
                                    <Card.Text>
                                        <strong>Technology:</strong> {project.technology}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Level:</strong> {project.level}
                                    </Card.Text>
                                    <Card.Text>
                                        {project.description || "No description available for this project."}
                                    </Card.Text>
                                    <div className="mt-4">
                                        <Button
                                            href={project.github}
                                            target="_blank"
                                            variant="primary"
                                            disabled={!project.github}
                                        >
                                            GitHub
                                        </Button>
                                        <Button
                                            href={project.demo}
                                            target="_blank"
                                            variant="success"
                                            disabled={!project.demo}
                                        >
                                            Live Demo
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProjectDetail;
