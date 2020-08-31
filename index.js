const express = require("express");

const app = express();
app.get('/', (req,res) => {
    console.log('api running');
})
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`server started on ${port}`));