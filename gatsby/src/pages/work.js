import React from 'react';
import { graphql } from 'gatsby';
import ProjectList from '../components/ProjectList';

export default function WorkPage({data}) {

	const projects = data.projects.nodes;

	return (
		<>
			<section className="container page">
				<ProjectList 
					projects={projects}
				/>
			</section>
		</>
	);
}

export const query = graphql`
	query projectQuery {
		projects: allSanityProjects {
			nodes {
				alt
				title
				image {
					asset {
						fixed(width: 400, height: 400) {
							...GatsbySanityImageFixed
						}
						fluid(maxWidth: 500) {
							...GatsbySanityImageFluid
						}
					}
				}
				slug {
					current
				}
				description
				id
			}
		}
		logo: sanityLogo {
			image {
				asset {
					fixed(width: 150) {
						...GatsbySanityImageFixed
					}
				}
			}
			alt
		}
	}
`