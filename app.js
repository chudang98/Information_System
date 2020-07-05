const express = require('express'),
    path = require('path'),
    mongoSanitize = require('express-mongo-sanitize'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    cors = require('cors');
// Package for import image to DB.

// const xss = require('xss-clean');

// const handlerError = require('./controllers/errorController');

const userRoute = require('./routers/userRoutes');
const nhanVienRoute = require('./routers/nhanvienRouters');
const adminRoute = require('./routers/adminRouters');
const khoRoute = require('./routers/khoRouters');
const nhanVienbanhangRoute = require('./routers/nhanvienbanhangRouters');
const apiUserRoute = require('./routers/apiRouters');
const testRoute = require('./routers/testRouters');
const ajaxRoute = require('./routers/ajaxRouters');

const app = express();

app.use(express.json());

app.use(bodyParser());
app.use(cookieParser());
app.use(cors());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(mongoSanitize());

app.use(express.static('public'));
// Serving static files
app.use(express.static(`${__dirname}/public`));

app.use('/', userRoute);
app.use('/user', nhanVienRoute);
app.use('/seller', nhanVienbanhangRoute);
app.use('/admin', adminRoute);
app.use('/nvkho', khoRoute);
app.use('/api/user', apiUserRoute);
app.use('/test', testRoute);
app.use('/ajax/', ajaxRoute);
app.use(express.static(path.join(__dirname, 'public')));

// app.use(handlerError);

module.exports = app;