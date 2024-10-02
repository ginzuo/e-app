import { gql } from 'graphql-tag'

export const products = gql`
    query {
        products {
            id
            title
            price
            images
            category {
                id
                name
            }
        }
        categories {
            id
            name
        }
    }
`

export const product = gql`
    query product($id: ID!) {
        product(id: $id) {
            id
            title
            price
            description
            images
            category {
                id
                name
                image
            }
        }
    }
`