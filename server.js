const app = require('./src/app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/aviacao', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))

app.listen(port, () => {
  console.log('Aplicação executando na porta ', port);
});
