const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getSiswa = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addSiswa = (req, res) => {
    const { nis, nama_siswa, kelas, jurusan, alamat,  tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp, tahun_masuk} = req.body;

    pool
    .query(queries.insertData, [nis, nama_siswa, kelas, jurusan, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp, tahun_masuk])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addSiswa", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updateSiswa = (req, res) => {
    const { nis, nama_siswa, kelas, jurusan, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp, tahun_masuk, id } = req.body;

    pool
    .query(queries.updateData, [nis, nama_siswa, kelas, jurusan, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp, tahun_masuk, id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updateSiswa", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deleteSiswa = (req, res) => {
    const {id} = req.params;

    pool
    .query(queries.deleteData, [parseInt(id)])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menghapus data",
        });
    })

    .catch((e) => {
        console.log("error deleteSiswa", e);
        return res.status(500).json({
            message : "Gagal menghapus data",
        });
    });
};

// const sumExpense = (req, res) => {
//     pool.query(queries.sumData).then((result) => {
    
//     let totalExpense = result.rows[0].sum
//     return res.status(200).json(
//         {
//             total : parseInt(totalExpense),
//         }
//     );
//     })
// }
 
module.exports = {
    getSiswa,
    addSiswa,
    updateSiswa,
    deleteSiswa,
    // sumExpense,
}