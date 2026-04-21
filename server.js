const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD App Running 🚀');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});
app.get('/login', (req, res) => {
  res.send('Login API');
});
app.get('/build',(req,res)=>{
    res.send("version updated deployed succesfully")
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});