const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, '../public')));

const routes = require('./src/routes/routes');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}`);
});