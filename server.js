const logger = require("./logger");

const express = require("express");

const Food = require('./models/foodmodel')

const app = express();

const db = require("./db");

app.use(express.json());

const foodsRoute = require('./routes/foodsRoute');
const userRoute = require('./routes/userRoute');
const fbuserRoute = require('./routes/fbuserRoute');


app.use('/api/foods', foodsRoute)
app.use('/api/users/', userRoute)
app.use('/api/fbusers/', fbuserRoute)

app.get("/", (req, res) => {
    logger.log("info", "Default route executes");
    logger.error('error message');
    logger.warn('warn message');
    logger.info('info message');
    logger.verbose('verbose message');
    logger.debug('debug message');
    logger.silly('silly message');
    res.send("Server working " + port);
});

app.get("/getFoods", (req, res) => {

    logger.log("info", "getFoods route executes");

    Food.find({}, (err, docs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(docs);
        }
    })
});


const port = process.env.PORT || 8000;

app.listen(port, () => { logger.log("info", 'app listening on port 3000!') });