const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getLogbook = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addLogbook = (req, res) => {
    const { nama_siswa, nama_guru, tanggal, waktu_mulai, waktu_berakhir, kegiatan } = req.body;

    pool
    .query(queries.insertData, [nama_siswa, nama_guru, tanggal, waktu_mulai, waktu_berakhir, kegiatan])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addAttandance", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updateLogbook = (req, res) => {
    const { nama_siswa, nama_guru, tanggal, waktu_mulai, waktu_berakhir, kegiatan, id } = req.body;

    pool
    .query(queries.updateData, [nama_siswa, nama_guru, tanggal, waktu_mulai, waktu_berakhir, kegiatan, id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updateAttandance", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deleteLogbook = (req, res) => {
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
        console.log("error deleteAttandance", e);
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
    getLogbook,
    addLogbook,
    updateLogbook,
    deleteLogbook,
    // sumExpense,
}