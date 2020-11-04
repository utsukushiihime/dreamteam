import { AuthenticationError, UserInputError } from "apollo-server-micro";
import { createUser, findUser, validatePassword } from "../lib/user";
import { createProject, findProject } from "../lib/project";
import { createSkill, findSkill } from "../lib/skill";
import { setLoginSession, getLoginSession } from "../lib/auth";
import { removeTokenCookie } from "../lib/auth-cookies";

export const resolvers = {
  Query: {
    async viewer(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req);

        if (session) {
          return findUser({ email: session.email });
        }
      } catch (error) {
        throw new AuthenticationError(
          "Authentication token is invalid, please log in"
        );
      }
    },
    async getProject(_parent, _args, context, _info) {
      try {
        const project = await findProject(context.req);

        if (project) {
          return findProject({
            id: project.id,
            name: project.name,
            description: project.description,
          });
        }
      } catch (error) {
        throw new UserInputError("Cannot find. Sorry about that. Try again!");
      }
    },
  },
  Mutation: {
    async addSkill(_parent, args, _context, _info) {
      const skill = await createSkill(args.input);
      return { skill };
    },
    async addProject(_parent, args, _context, _info) {
      const project = await createProject(args.input);
      return { project };
    },

    async signUp(_parent, args, _context, _info) {
      const user = await createUser(args.input);
      return { user };
    },

    async signIn(_parent, args, context, _info) {
      const user = await findUser({ email: args.input.email });

      if (user && (await validatePassword(user, args.input.password))) {
        const session = {
          id: user.id,
          email: user.email,
        };

        await setLoginSession(context.res, session);

        return { user };
      }

      throw new UserInputError("Invalid email and password combination");
    },
    async signOut(_parent, _args, context, _info) {
      removeTokenCookie(context.res);
      return true;
    },
  },
};
