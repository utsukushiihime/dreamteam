import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    createdAt: Int!
  }

  type Profile {
    id: ID!
    first_name: String!
    last_name: String!
    title: String!
    city: String!
    bio: String!
    email: String!
    skills: String!
    isAvailable: String!
    twitter: String!
    facebook: String!
    linkedin: String!
    github: String!
    youtube: String!
    users: [User]
  }

  type Project {
    id: ID!
    createdAt: Int!
    description: String!
    name: String!
    users: [User]
  }

  type Skill {
    id: ID!
    name: String!
    createdAt: Int!
    isValidated: Boolean!
    users: [User]
  }

  type Assessment {
    id: ID!
    name: String!
    createdAt: Int!
    isCorrect: Boolean!
    question: String!
    answer: String!
    skills: [Skill]
  }

  input SignUpInput {
    email: String!
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type SignUpPayload {
    user: User!
  }

  type SignInPayload {
    user: User!
  }

  type Query {
    user(id: ID!): User!
    users: [User]!
    viewer: User
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`;
