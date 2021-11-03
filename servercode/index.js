const express = require("express");
const router = express.Router();

const processSomething = callback => {
  setTimeout(callback, 20000);
}
const app = express();
app.listen(3000);
app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.post("/hook", (req, res, next) => {
 
  processSomething(() => {
    const webhookUrl = req.params.url;
    /**
     * Your Kafka action or something else. There
     * you should collect info about success or
     * fail of client's action.
     */

    /** 
     * Your API call to webhookUrl with 
     * your defined body about status of event
     */
  });

  res.status(200).send('OK')
});

module.exports = router;