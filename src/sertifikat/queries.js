// const getData = "SELECT  t.*, TO_CHAR(t.input_time, 'DD-MM-YYYY HH24:MI:SS') as time_indonesia FROM  transaksi t WHERE t.category='2'";

const getData = "select * from sertifikat order by id";

const insertData = "INSERT INTO sertifikat (nama_siswa, guru_pembimbing, sertifikat) values ($1, $2, $3)";

const updateData = "UPDATE sertifikat set nama_siswa =$1, guru_pembimbing = $2, sertifikat = $3  where id= $4";

const deleteData = "DELETE FROM sertifikat where id=$1";

// const sumData = "SELECT SUM(t.amount) FROM transaksi t WHERE t.category='2'";

module.exports = {
     getData,
     insertData,
     updateData,
     deleteData,
}