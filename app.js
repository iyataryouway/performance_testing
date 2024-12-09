const express = require('express');
const app = express();
const PORT = 2000;

app.get("/api/load-testing", (req, res) => {
    res.json({message: `Request processed: ${req.body}`});
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
}); 