import passport from "passport";
import passportGoogle from "passport-google-oauth20";

const GoogleStrategy = passportGoogle.Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "/auth/google/callback",
    },
    () => {}
  )
);
