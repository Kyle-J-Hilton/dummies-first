

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

require('dotenv').config();

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions);
