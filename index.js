const express = require('express');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
