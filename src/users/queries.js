// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from users order by id";

const insertData = "INSERT INTO users (username, password) values ($1, $2)";

const updateData = "UPDATE users set username = $1, password = $2 where id= $3";

const deleteData = "DELETE FROM users where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}