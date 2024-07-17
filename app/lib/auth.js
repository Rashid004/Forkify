/** @format */

// /** @format */

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async session({ session, token, user }) {
//       return session;
//     },
//     async jwt({ token, user, account, profile }) {
//       return token;
//     },
//   },
//   pages: {
//     signIn: "/signin", // Custom sign-in page URL
//   },
// });

// export const { get, post } = NextAuth;
