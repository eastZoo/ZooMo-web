import { logInAPI } from "@/api/userApi";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        id: { label: "Text", type: "text", placeholder: "me" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { id, password } = credentials as {
          id: string;
          password: string;
        };

        try {
          const user: any = await logInAPI({
            id: id,
            password: password,
          });
          console.log("user :", user);
          return user;
        } catch (error) {
          const response = error as unknown as any;
          throw new Error(response.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
};

export default NextAuth(authOptions);
