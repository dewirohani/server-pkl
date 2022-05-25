// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from instansi order by id";

const insertData = "INSERT INTO instansi (nama_instansi, alamat, kecamatan, kota,nama_pembimbing, kontak, kuota , guru) values ($1, $2, $3, $4, $5, $6, $7, $8)";

const updateData = "UPDATE instansi set nama_instansi = $1, alamat = $2, kecamatan = $3, kota = $4, nama_pembimbing = $5, kontak =$6, kuota = $7, guru = $8 where id= $9";

const deleteData = "DELETE FROM instansi where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}