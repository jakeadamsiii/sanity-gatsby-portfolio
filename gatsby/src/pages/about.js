import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function AboutPage({data}) {

	const about = data.about; 

	return (
		<>
			<section className="container page">
				<h1>{about.title}</h1>
				<Img fluid={about.image.asset.fluid} alt={about.alt}></Img>
			</section>
		</>
	);
}

export const query = graphql`
	query aboutQuery {
		about: sanityAboutpage {
			id
			title
			image {
				asset {
					fluid(maxWidth: 1400) {
						...GatsbySanityImageFluid
					}
				}
			}
			alt
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