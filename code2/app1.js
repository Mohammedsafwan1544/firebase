const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

const serviceAccount = require('./student-management-v2-firebase-adminsdk-7fsg2-e964ee4b4e.json');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/authenticate', (req, res) => {
  const idToken = req.body.idToken;

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      res.status(200).json(decodedToken);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
