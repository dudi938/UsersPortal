
const sql = require('mssql')


const config = {
    user: 'ofakim',
    password: 'Qaz123456789',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'OfakimDB',
 
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}


exports.getAllUsers = async function getAllUsers(){
	try {
		await sql.connect('mssql://ofakim:Qaz123456789@localhost/OfakimDB')
		const result = await sql.query`select * from Users`
        console.dir(result)
        sql.close()
        return result
	} catch (err) {
        console.log('ERROR: ' + err)
        sql.close()
	}
}

exports.addUsers = async function addUsers(User){
	try {
		await sql.connect('mssql://ofakim:Qaz123456789@localhost/OfakimDB')
		const result = await sql.query`INSERT INTO Users(FullName, Birthday, Email, Phone) VALUES(${User.fullName}, ${User.birthday}, ${User.email}, ${User.phone});`

        sql.close()
        return result
	} catch (err) {
        console.log('ERROR: ' + err)
        sql.close()
	}
}