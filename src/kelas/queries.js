// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from kelas order by id";

const insertData = "INSERT INTO kelas (nama_kelas, jurusan, jumlah_siswa, keterangan) values ($1, $2, $3, $4)";

const updateData = "UPDATE kelas set nama_kelas =$1, jurusan = $2, jumlah_siswa = $3, keterangan = $4 where id= $5";

const deleteData = "DELETE FROM kelas where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}