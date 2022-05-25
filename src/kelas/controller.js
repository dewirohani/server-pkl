const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getKelas = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addKelas = (req, res) => {
    const { nama_kelas, jurusan, jumlah_siswa, keterangan  } = req.body;

    pool
    .query(queries.insertData, [nama_kelas, jurusan, jumlah_siswa, keterangan ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addKelas", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updateKelas = (req, res) => {
    const { nama_kelas, jurusan, jumlah_siswa, keterangan , id } = req.body;

    pool
    .query(queries.updateData, [nama_kelas, jurusan, jumlah_siswa, keterangan , id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updateKelas", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deleteKelas = (req, res) => {
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
        console.log("error deleteKelas", e);
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
    getKelas,
    addKelas,
    updateKelas,
    deleteKelas,
    // sumExpense,
}