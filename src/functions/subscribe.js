/*
 * Based on:
 * https://github.com/jamesqquick/Learn-Build-Teach-Site/blob/master/functions/subscribe.js
 */

const path = require("path");
const axios = require("axios");

require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.mailchimp"),
});

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_DATA_CENTER = process.env.MAILCHIMP_DATA_CENTER;
// Username can be any string
const MAILCHIMP_USERNAME = "The Littoral Line";
// the mailchimp audience list id
const MAILCHIMP_LIST_ID = "3eb35e7129";

/*
 * Subscribe a new user to the Mailchimp audience list
 *
 * @api {post}
 *
 * @apiParam {string} email
 * @apiParam {string} name
 *
 * @apiError Error 400 Invalid email address
 * @apiErrorExample 400 { msg: "Invalid Email" }
 * @apiError Error 500 Error subscribing to mailchimp
 * @apiErrorExample 500 { msg: "Failed to subscribe" }
 * @apiSuccess 200 {string} msg - Success message
 */
exports.handler = function(event, context, callback) {
  if (!MAILCHIMP_API_KEY) {
    console.error("No MailChimp API Key include in environment variables");
    process.exit(1);
  }

  const parsedBody = JSON.parse(event.body);
  const email = parsedBody.email;

  // Email regex
  // eslint-disable-next-line no-useless-escape
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ msg: "Invalid Email" }),
    });
  }

  console.log(
    `https://${MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/`
  );
  axios({
    method: "post",
    url: `https://${MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/`,
    data: {
      email_address: email,
      merge_fields: {
        name: parsedBody.name,
      },
      status: "subscribed",
    },
    auth: {
      username: MAILCHIMP_USERNAME,
      password: MAILCHIMP_API_KEY,
    },
  })
    .then(() => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: "Olé!" }),
      });
    })
    .catch(({ response }) => {
      const title = (response && response.data && response.data.title) || "";

      if (title === "Member Exists") {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            msg: "You're already subscribed!",
          }),
        });
        return;
      }

      console.log("Error subscribing:", title);

      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          msg: `Failed to subscribe.`,
          errorTitle: title,
        }),
      });
    });
};
