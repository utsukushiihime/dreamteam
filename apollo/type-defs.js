import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    id: ID!
    createdAt: Int!
    image: String
    name: String!
    title: String
    email: String!
    bio: String
    address: String
    city: String
    state: String
    zip: Int
    skills: String
    projects: [Project]
    skill: [Skill]
    assessments: [Assessment]
  }

  type Project {
    id: ID!
    createdAt: Int!
    description: String!
    name: String!
    user: User
  }

  type Skill {
    id: ID!
    name: String!
    createdAt: Int!
    isValidated: Int
    user: User
  }

  type Assessment {
    id: ID!
    name: String!
    createdAt: Int!
    isCorrect: Int!
    question: String!
    answer: String!
    skill: Skill
    user: User
  }

  input SignUpInput {
    name: String!
    email: String!
    password: String!
    title: String
    image: String
    address: String
    city: String
    state: String
    zip: Int
    bio: String
    skills: String
  }
  input UpdateUserProfileInput {
    name: String!
    email: String!
    password: String!
    title: String
    image: String
    address: String
    city: String
    state: String
    zip: Int
    bio: String
    skills: String
  }

  input SignInInput {
    email: String!
    password: String!
  }

  input AddProjectInput {
    name: String!
    description: String!
  }
  input AddSkillInput {
    name: String!
  }

  type SignUpPayload {
    user: User!
  }

  type SignInPayload {
    user: User!
  }

  type UpdateUserProfilePayload {
    user: User!
  }

  type AddProjectPayload {
    project: Project!
  }
  type AddSkillPayload {
    skill: Skill!
  }

  type Query {
    user(id: ID!): User!
    users: [User]!
    viewer: User
    getProject: Project
    skill(id: ID!): Skill!
    project(id: ID!): Project!
    projects: Project
    assessment(id: ID!): Assessment!
    assessments: Assessment
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    addProject(input: AddProjectInput!): AddProjectPayload!
    addSkill(input: AddSkillInput!): AddSkillPayload!
    updateUser(input: UpdateUserProfileInput!): UpdateUserProfilePayload!
    deleteUser(id: ID!): ID!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`;
