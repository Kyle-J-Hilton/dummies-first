

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

require('dotenv').config();

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
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
