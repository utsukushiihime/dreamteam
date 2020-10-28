import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    createdAt: Int!
  }

  type Profile {
    id: ID!
    email: String!
    first_name: String!
    last_name: String!
    title: String!
    address1: String!
    address2: String
    city: String!
    state: String!
    zip: Int!
    country: String!
    bio: String!
    skills: String
    isAvailable: String!
    twitter: String
    facebook: String
    linkedin: String
    github: String
    youtube: String
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
  # TODO Need to do profile inputs
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
    profile(id: ID!): Profile!
    profiles: [Profile]!
    member: Profile
    skill(id: ID!): Skill!
    skills: Skill
    project(id: ID!): Project!
    projects: Project
    assessment(id: ID!): Assessment!
    assessments: Assessment
  }
  # TODO Need to do profile mutation
  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`;
