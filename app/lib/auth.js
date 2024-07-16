/** @format */

// /** @format */

// import { createGuest, getGuest } from "./data-service";

// const authConfig = {
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
//   callbacks: {
//     authorized({ auth, request }) {
//       return !!auth?.user;
//     },
//     async signIn({ user, account, profile }) {
//       try {
//         const existingGuest = await getGuest(user.email);

//         if (!existingGuest)
//           await createGuest({ email: user.email, fullName: user.name });
//         return true;
//       } catch {
//         return false;
//       }
//     },
//     async session({ user, session }) {
//       const guest = await getGuest(session.user.email);

//       session.user.guestId = guest.id;

//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// export const {
//   auth,
//   signIn,
//   signOut,
//   handlers: { GET, POST },
// } = NextAuth(authConfig);

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
