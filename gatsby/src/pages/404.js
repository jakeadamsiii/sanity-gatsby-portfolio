import React from 'react';
import { graphql } from 'gatsby';

export default function ErrorPage() {
	return (
		<>
			<section className="container page">
				<p>Oops Error page not found.</p>
			</section>
		</>
	);
}

export const query = graphql`
	query {
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