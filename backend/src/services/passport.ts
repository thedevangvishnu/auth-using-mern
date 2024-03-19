import passport from "passport";
import passportGoogle from "passport-google-oauth20";

export const setupPassport = () => {
  const GoogleStrategy = passportGoogle.Strategy;
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: "/api/auth/google/callback",
        scope: ["email", "profile"],
      },
      (accessToken, refreshToken, profile, done) => {}
    )
  );
};
