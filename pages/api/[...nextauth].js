

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

require('dotenv').config();

export const authOptions = {
  secret: 'f100f0e710bae79f828bbc6f039d077a544ac18c01e90e1b9c287043a6fbfbfb',
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "e3dc28755b4b5d810de0",
      clientSecret: "975c09232b2f80464205bc92a34841346925e2d5",
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions);
