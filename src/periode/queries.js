// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from periode order by id";

const insertData = "INSERT INTO periode (nama_periode, tanggal_mulai, tanggal_berakhir, status) values ($1, $2, $3, $4)";

const updateData = "UPDATE periode set nama_periode = $1, tanggal_mulai = $2, tanggal_berakhir =$3, status = $4 where id= $5";

const deleteData = "DELETE FROM periode_pkl where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}