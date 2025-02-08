export const typeDef = `#graphql

type Geo {
    lat:String!
    lng:String!
  }

  type Company{
    name:String!
    catchPhrase:String!
    bs:String!
  }
  type Address {
    street: String!
    city: String!
    suite: String!
    zipcode: String!
    geo: Geo!
  }

`