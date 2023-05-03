import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "912146697123-4j8nv7bgt29bk035dkb251jece61rpbf.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }