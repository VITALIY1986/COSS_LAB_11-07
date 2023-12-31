import { gql } from "@apollo/client";

/**
 * GraphQL categorie query.
 */
const GET_CATEGORIES_QUERY = gql`query {

	productCategories(first: 100) {
		nodes {
			id
			name
			slug
			image {
				sourceUrl
				altText
			}
		}
	}
	
}`;

export default GET_CATEGORIES_QUERY;
