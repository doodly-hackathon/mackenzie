/*
 * Project Doodly GetDoodlies service
 */
var esmodule = require("../../esmodule"); 
exports.requestDeliveryImpl = function (req, res)
{
    var data = req.body;
    
    //send delivery request details to magna
    //expected reply is which joint is going to handle the delivery 
    //send back joint details to client, where client animates joint icon by showing some movements or tool tip 
    //after some time package icon displayed in requeted location will hidden indicating joint picked up it
    //res.writeHead(200, "OK", {'Content-Type': 'text/html'});    
    //res.end("Fasoos");
    esmodule.createBooking(data, function(packageId, jointId){
            res.writeHead(200, "OK", {'Content-Type': 'text/html'});    
            res.end(jointId);

    });

    //res.end(JSON.stringify(data));
};
