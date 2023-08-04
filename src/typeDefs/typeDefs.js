const typeDefs = `#graphql
    type Restaurant {
        id: ID
        restaurant_name: String
        restaurant_address: String
        zipcode: Int
        menu_list: [Menu]
    }

    type Menu {
        id: ID
        dish_name:  String
        price: Float
        restaurant_id: ID
    }
    type Query {
        restaurant: [Restaurant]
    }
`
exports.typeDefs = typeDefs;