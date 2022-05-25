// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from logbook order by id";

const insertData = "INSERT INTO logbook (nama_siswa, nama_guru, tanggal, waktu_mulai, waktu_berakhir, kegiatan) values ($1, $2, $3, $4, $5, $6)";

const updateData = "UPDATE logbook set nama_siswa = $1, nama_guru = $2, tanggal = $3, waktu_mulai = $4, waktu_berakhir = $5, kegiatan = $6  where id= $7";

const deleteData = "DELETE FROM logbook where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}