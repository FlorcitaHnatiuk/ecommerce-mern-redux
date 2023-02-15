import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import productsDAO from "../components/dao/productsDAO";

const schema = buildSchema(`
    input ProductInput {
        name: String,
        seller: ObjectId,
        image: String,
        brand: String,
        category: String,
        description: String,
        price: Number,
        countInStock: Number,
    }
    type Product {
        id: ID!
        name: String,
        seller: ObjectId,
        image: String,
        brand: String,
        category: String,
        description: String,
        price: Number,
        countInStock: Number,
        rating: Number,
        numReviews: Number,
    }
    type Query {
        getProducts: [Product],
    }
    type Mutation {
        createProduct(datos: ProductInput): Product
        deleteProducts: [Product],
    }
`);

export default class GraphQLController {
    constructor() {
        const api = new productsDAO()
        return graphqlHTTP({
            schema: schema,
            rootValue: {
                getProduct: api.getProduct,
                createProduct: api.createProduct,
            },
            graphiql: true,
        })
    }
}