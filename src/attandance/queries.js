// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from attandance order by id";

const insertData = "INSERT INTO attandance (nama_siswa, tanggal, waktu, lokasi, foto, signature) values ($1, $2, $3, $4, $5, $6)";

const updateData = "UPDATE attandance set nama_siswa =$1,tanggal = $2, waktu = $3, lokasi = $4, foto = $5, signature = $6 where id= $7";

const deleteData = "DELETE FROM attandance where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}