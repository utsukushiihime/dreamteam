import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    createdAt: Int!
  }

  type Profile {
    id: ID!
    image: String
    email: String!
    firstName: String!
    lastName: String!
    title: String
    address1: String
    address2: String
    city: String!
    state: String
    zip: Int
    country: String!
    bio: String
    skills: String
    twitter: String
    facebook: String
    linkedin: String
    github: String
    youtube: String
    createdAt: Int
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
    isValidated: Int!
    users: [User]
  }

  type Assessment {
    id: ID!
    name: String!
    createdAt: Int!
    isCorrect: Int!
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

  input AddProfileInput {
    image: String
    email: String!
    firstName: String!
    lastName: String!
    title: String
    address1: String
    address2: String
    city: String!
    state: String
    zip: Int
    country: String!
    bio: String
    skills: String
    twitter: String
    facebook: String
    linkedin: String
    github: String
    youtube: String
  }
  input AddProjectInput {
    name: String!
    description: String!
  }
  input UpdateProfileInput {
    email: String!
    image: String
    firstName: String!
    lastName: String!
    title: String
    address1: String
    address2: String
    city: String!
    state: String
    zip: Int
    country: String!
    bio: String
    skills: String
    twitter: String
    facebook: String
    linkedin: String
    github: String
    youtube: String
  }

  type SignUpPayload {
    user: User!
  }

  type SignInPayload {
    user: User!
  }

  type AddProfilePayload {
    profile: Profile!
  }

  type AddProjectPayload {
    project: Project!
  }

  type UpdateProfilePayload {
    profile: Profile!
  }

  type Query {
    user(id: ID!): User!
    users: [User]!
    viewer: User
    profile(id: ID!): Profile!
    profiles: [Profile]!
    skill(id: ID!): Skill!
    skills: Skill
    project(id: ID!): Project!
    projects: Project
    assessment(id: ID!): Assessment!
    assessments: Assessment
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    addProfile(input: AddProfileInput!): AddProfilePayload!
    addProject(input: AddProjectInput!): AddProjectPayload!
    updateProfile(input: UpdateProfileInput!): UpdateProfilePayload!
    deleteProfile(id: ID!): Profile!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`;
