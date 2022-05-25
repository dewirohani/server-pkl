// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from detail_siswa order by id";

const insertData = "INSERT INTO detail_siswa (nis, nama_siswa, kelas, jurusan, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp, tahun_masuk) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";

const updateData = "UPDATE detail_siswa set nis = $1, nama_siswa = $2, kelas = $3, jurusan = $4, alamat = $5, tempat_lahir = $6, tanggal_lahir = $7, jenis_kelamin = $8, agama = $9, no_hp = $10, tahun_masuk = $11 where id= $12";

const deleteData = "DELETE FROM detail_siswa where id=$1";


module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}