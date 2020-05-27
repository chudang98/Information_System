var express = require('express');
var app = express();
app.listen(3001);

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/seller/thongtinkh', function(request, response) {
    response.render('/seller/thongtinkh.pug');
});