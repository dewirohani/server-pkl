// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from penempatan order by id";

const insertData = "INSERT INTO penempatan (nama_siswa, periode, nama_guru, kelas, jurusan) values ($1, $2, $3, $4, $5)";

const updateData = "UPDATE penempatan set nama_siswa =$1, periode = $2, nama_guru = $3, kelas = $4, jurusan = $5 where id= $6";

const deleteData = "DELETE FROM penempatan where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}