const express = require('express');
const bodyParser = require('body-parser');

const foodRoutes = require('./routes/food-routes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/api/foods', foodRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
