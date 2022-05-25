// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from jurusan order by id";

const insertData = "INSERT INTO jurusan (nama_jurusan, keterangan) values ($1, $2)";

const updateData = "UPDATE jurusan set nama_jurusan = $1, keterangan = $2 where id= $3";

const deleteData = "DELETE FROM jurusan where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}