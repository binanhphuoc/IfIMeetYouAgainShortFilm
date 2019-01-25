express = require("express");

app = express();

app.get("/.well-known/acme-challenge/SUQKxNB7zm52zZdMOpsuMFG3k_ViWna-kCUQRJwvx5M", (req, res) => {
  res.send("SUQKxNB7zm52zZdMOpsuMFG3k_ViWna-kCUQRJwvx5M.9WT6oplCzS4uXrBLjNWoLLrn0vXOtFmG2ylbFypRXnM");
});

app.listen(5000);
