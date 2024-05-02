var http = require('http');
var querystring=require('querystring');
var qs,name,email;
 http.createServer(function(req, res) {  
        var d= '';
        
    req.on('data', function(chunk) {   
                    console.log(chunk);
                    d += chunk;  
                    console.log("Data in String format: "+d);
                    });
    req.on('end', function() {
                console.log("Data: "+d);
                
                qs=querystring.parse(d);
                console.log(qs);
                name=qs["username"];
                email=qs["email"];
                mobile=qs["mobile"];
                age=qs["age"];
        
                
                res.write('<html><head><title>Registration Confirmation</title><style>body {font-family: Arial, sans-serif;background-image: url("https://i.pinimg.com/564x/6b/0b/fa/6b0bfa1980265e685de73f84c1cb93ed.jpg");background-size: cover;}</style></head><body>');
                res.write("<h1 style='color: white; text-align: center;'>Registration Successful</h1>");
                res.write("<br><br><h3 style='color: white;'>WELCOME "+name+"</h3>");
                res.write("<br><p style='color: white;'><strong>" + name + "</strong>, of age <strong>" + age + "</strong>, with email id <strong>" + email + "</strong> has been registered successfully with your mobile number: <strong>" + mobile + "</strong></p>");
                res.write('</body></html>');
                res.end();
                });
    }).listen(8800);
console.log("Server started running...");
