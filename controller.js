'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("API jalan",res)
};

//menampilkan semua data warga

exports.semuadata = function(req,res){
    connection.query('SELECT * from warga', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};