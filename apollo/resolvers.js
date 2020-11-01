import { AuthenticationError, UserInputError } from "apollo-server-micro";
import { createUser, findUser, validatePassword } from "../lib/user";
import { createProfile, findProfile } from "../lib/profile";
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
    async member(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req);

        if (session) {
          return findProfile({ id: member.id });
        }
      } catch (error) {
        throw new UserInputError(
          `${error}. Please try again. Contact <support@creativarian.com> to report errors.`
        );
      }
    },
  },
  Mutation: {
    async addProfile(_parent, args, _context, _info) {
      const profile = await createProfile(args.input);
      return { profile };
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
