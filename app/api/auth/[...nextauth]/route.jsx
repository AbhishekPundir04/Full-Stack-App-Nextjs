

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../models/user"
console.log({
  clientId: process.env.GOOGLE_CLIENT_ID ?? "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
});

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
    async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email
    })
    session.user.id = sessionUser._id.toString();
    
    return session;
  },
  async signIn({profile}){
    try{
      await connectToDB()
      const userExist = await User.findOne({
        email: profile.email
      })
      if(!userExist) {
        await User.create({
          email:profile.email,
          username:profile.name.replace("","").toLowerCase(),
          image:profile.image

        })
      }
      //every next js route is serve-less route which means its  a lamda function it

      return true;
    }catch(err){
      console.log(err)
      return false;

    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
