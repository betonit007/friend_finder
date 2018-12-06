var express = require('express');
var path = require('path');

var app = express();
var PORT = 7500;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));


///////Routes////////////////////////////////////////////////////////
require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);



///////Listener//////////////////////////////////////////////////////
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})

