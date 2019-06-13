'use strict';
const mysql = require('mysql');
const connection = require('express-myconnection');

var con = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'asterisk',
	database: 'nine_star'
})

exports.getUsers = function(req, res) {
	try{
		con.getConnection(function (err, connection){
			if(err)
			{
				throw err; 
			}
			else
			{
				connection.query("SELECT * FROM tbl_drivers WHERE id=?",[1], function(err, result, fields){
					if(err)
					{
						throw err;
					}
					else
					{
						res.status(200).json({message: 'success', data: result});
					}
				})
			}
		})	
	} catch(e)
	{
		console.log(err);
		res.status(500).json({message: 'Internal server error'});
	}
};


exports.PostUsers = function(req, res) {
	res.status(200).json({ message: 'users' , data: req.body.first_name});
};

