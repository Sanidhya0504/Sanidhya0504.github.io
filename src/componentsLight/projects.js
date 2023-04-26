import React from "react";
import "../styles/projects.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Fade } from "react-awesome-reveal";
function Projects() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center project-wrap">
      <h2 className="project--head">Projects</h2>
      <Fade down>
        <div className="m-3 p-3">
          <CardGroup className="wrap">
            <Card className="p-3 card--opacity" text="dark">
              <Card.Img
                variant="top"
                src="https://imagefilesystem.blob.core.windows.net/myfiles/portfolio.png"
              />
              <Card.Body>
                <Card.Title>Personal Portfolio</Card.Title>
                <Card.Text>
                  Personal Protfolio website made with React js. It has a
                  Particle.js background and a Dark mode.
                </Card.Text>
              </Card.Body>
              <a
                href="https://github.com/Sanidhya0504/Sanidhya0504.github.io"
                className="stretched-link"
              ></a>
            </Card>

            <Card className="p-3 card--opacity" text="dark">
              <Card.Img
                variant="top"
                src="https://imagefilesystem.blob.core.windows.net/myfiles/discord.png"
              />
              <Card.Body>
                <Card.Title>Discord UI Clone</Card.Title>
                <Card.Text>
                  This is a Clone of all major pages of Discord's website UI
                  made with React js.
                </Card.Text>
              </Card.Body>
              <a
                href="https://github.com/Sanidhya0504/discord-clone"
                className="stretched-link"
              ></a>
            </Card>

            <Card className="p-3 card--opacity" text="dark">
              <Card.Img
                variant="top"
                src="https://imagefilesystem.blob.core.windows.net/myfiles/dijkstra.png"
              />
              <Card.Body>
                <Card.Title>Dijkstra's Path Finding Visualizer</Card.Title>
                <Card.Text>
                  This is a visual implementation of Dijkstra's path finding
                  algoritham made with angular.
                </Card.Text>
              </Card.Body>
              <a
                href="https://github.com/Sanidhya0504/Dijkstra-s-pathfinding-visualizer"
                className="stretched-link"
              ></a>
            </Card>
          </CardGroup>
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
