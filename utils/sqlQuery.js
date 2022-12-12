function sqlQuery(connection){
    this._connection = connection
}

sqlQuery.prototype.select = function (query){
    return new Promise ((resolve, reject) => {
        this._connection.query(query, function(err, rows, fields){
            if (err) return reject(err)
            resolve(rows)
        })
    })
}

sqlQuery.prototype.update = function (query){
    this._connection.query(query)
    //this._connection.end()
}
sqlQuery.prototype.insert = function (query){
    this._connection.query(query)
    //this._connection.end()
}

module.exports = sqlQuery;