import React from 'react';
import { graphql } from 'gatsby';

export default function ContactPage({data}) {

	const contact = data.contact;

	return (
		<>
			<section className="container page">
				<p>{contact.email}</p>
			</section>
		</>
	);
}

export const query = graphql`
	query contactQuery {
		contact: sanityContactpage {
			email
			id
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