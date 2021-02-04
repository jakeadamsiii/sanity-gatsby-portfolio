import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto;
  margin-top: 7rem;
`

const ProjectStyles = styled.div`
    .grid {
        display: grid;
        color: var(--black);
        text-decoration: none;
        position: relative;
        /* Take your row sizing not from the pizzaStyles div, but from the  PizzaGridStyles grid */
        @supports not (grid-template-rows: subgrid) {
            --rows: auto auto 1fr;
        }

        grid-template-rows: var(--rows, subgrid);
        grid-row: span 3;
        grid-gap: 1rem;

        h2,
        p,
        a {
            margin: 0;
        }

        p{
            position: absolute;
            bottom: 0;
            background: white;
            transform: translateY(-50%);
        }
    }
`;

function SingleProject({ project }) {
    return(
        <ProjectStyles>
            <Link to={`/work/${project.slug.current}`} className="grid">
                <h2>{project.title}</h2>
                <Img fluid={project.image.asset.fluid} alt={project.alt}>
                </Img>
                <p>{project.description}</p>
            </Link>
        </ProjectStyles>
        
    )
}

export default function ProjectList({ projects }) {
    return(
    <ProjectGridStyles>
        {projects.map((project) => (
            <SingleProject project={project} key={project.id} />
        ))}
    </ProjectGridStyles>
    )
}