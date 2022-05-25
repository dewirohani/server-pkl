// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from pengajuan order by id";

const insertData = "INSERT INTO pengajuan (nama_siswa, nama_instansi, periode) values ($1, $2, $3)";

const updateData = "UPDATE pengajuan set nama_siswa =$1, nama_instansi = $2, periode = $3 where id= $4";

const deleteData = "DELETE FROM pengajuan where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}