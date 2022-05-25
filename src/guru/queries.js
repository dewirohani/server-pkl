// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from guru order by id";

const insertData = "INSERT INTO guru (nip, nama_guru, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp) values ($1, $2, $3, $4, $5, $6, $7, $8)";

const updateData = "UPDATE guru set nip = $1, nama_guru = $2, alamat = $3, tempat_lahir = $4, tanggal_lahir = $5, jenis_kelamin = $6, agama = $7, no_hp = $8 where id= $9";

const deleteData = "DELETE FROM guru where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}