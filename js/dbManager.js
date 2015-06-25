module.exports = {
  getRecords: function(req, res) {    
        var pg = require('pg');        
        //You can run command "heroku config" to see what is Database URL from Heroku belt
        var conString = process.env.DATABASE_URL || "postgres://iwzexazhfjxbbt:4JVMJFooosyfdM5Y79Si-c691D@ec2-54-217-202-110.eu-west-1.compute.amazonaws.com:5432/d8u6uelvine6d6?ssl=true";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("SELECT title, release_date, vote_average FROM movie ORDER BY release_date, vote_average DESC LIMIT 20");
        query.on("row", function (row, result) { 
            result.addRow(row); 
        });
        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });
  }}