const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('matsedill', { title: 'Matseðill FB'})
});

app.get('/Gullfoss', (req, res) => {
    res.render('gullfoss', { title: 'Upplýsingar um Gullfoss'})
});

app.listen(PORT, () => {
    console.log(`Server keyrir á http://localhost:${PORT}`);
});