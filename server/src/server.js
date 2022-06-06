const fs = require('fs');
const https = require('https');
const nodeMailer = require('nodemailer');

require('dotenv').config();

const app = require('./app');
const { readPlanetsData } = require('./model/planets.model');
const { loadLaunchesData } = require('./model/launches.model');
const {connectMongoDb} = require('./services/mongo');

const PORT = process.env.PORT;

// const transporter = nodeMailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "kosimbanefo3@gmail.com",
//     pass: "Korruption42",
//   },
// });

const mailOptions = {
  from: "kosimbanefo3@gmail.com",
  to: "kosimbanefo@gmail.com",
  subject: "Server online",
  text: "server is online hurray!",
};

const server = https.createServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
}, app);
 
const startServer = async () => {
  await connectMongoDb();
  await readPlanetsData();
  await loadLaunchesData();

  server.listen(PORT, () => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
}

startServer()

//google oauth2.0 flow

// const https = require("https");
// const fs = require('fs');
// const path = require('path')
// const express = require("express");
// const helmet = require("helmet");
// const passport = require("passport");
// const cookieSession = require('cookie-session');

// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// const AUTH_OPTIONS = {
//   callbackURL: "/auth/google/callback",
//   clientID: "458719732464-1ag0eacq663tfbbs639ojtqkt4ichltn.apps.googleusercontent.com",
//   clientSecret: "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",
// };

// function verifyCallback(accessToken, refreshToken, profile, done) {
//   console.log(accessToken);
//   console.log(profile);
//   done(null, profile);
// }

// const checkIsLoggedIn = (req, res, next) => {
//   const isLoggedIn = req.isAuthenticated() && req.user;
//   if (!isLoggedIn) {
//     return res.status(401).json({
//       error: "you must log in",
//     });
//   }
//   next();
// };

// passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));
// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });

// const app = express();

// app.use(helmet());
// app.use(cookieSession({
//   name: 'session',
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: ['secret key one', 'secret key 2']
// }))
// app.use(passport.initialize());
// app.use(passport.session());

// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["email"],
//   })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/failure",
//     successRedirect: "/secrets",
//     session: true,
//   }),
//   (req, res) => {
//     console.log("google called us back");
//   }
// );

// app.get("/auth/logout", () => {
//   req.logout();
//   res.redirect('/');
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index2.html'))
// })

// app.use("/secrets", checkIsLoggedIn, (req, res) => {
//   res.status(200).json({ message: "your secret no is 147" });
// });

// app.use("/failure", (req, res) => {
//   res.json({ message: "login unsuccessfull" });
// });

// const server = https.createServer({
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem")
// },app);

// server.listen(3000);