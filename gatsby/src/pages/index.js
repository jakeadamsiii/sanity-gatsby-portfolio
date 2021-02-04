import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function HomePage({data}) {

	const home = data.home

	return (
		<>
			<section className="container page">
				<h1>{home.title}</h1>
				<Img fluid={home.image.asset.fluid} alt={home.alt}></Img>
			</section>
		</>
	);
}

export const query = graphql`
	query homeQuery {
		home: sanityHomepage {
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
