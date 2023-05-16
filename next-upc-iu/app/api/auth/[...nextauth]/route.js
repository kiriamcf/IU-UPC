import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "912146697123-4j8nv7bgt29bk035dkb251jece61rpbf.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const id = user.user.id;
      const provider = user.account.provider;

      const res = await fetch(`http://localhost:3000/api/users/${id}?provider=${provider}`);
      const data = await res.json();
      if (data == null) {
        const userData = {
          name: user.user.name.split(' ')[0],
          surname: user.user.name.split(' ').slice(1).join(' '),
          email: user.user.email,
          password: 'null',
          id_google: id
        };

        const newUser = await fetch('http://localhost:3000/api/users/', {
          body: JSON.stringify(userData),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',         
            'Accept': 'application/json',
          },
        });
      }
      
      return true;
    },
    async session({ session, token, user }) {
      session.user.id = token.sub;

      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }