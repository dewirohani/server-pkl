const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getSertifikat = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addSertifikat = (req, res) => {
    const {nama_siswa, guru_pembimbing, sertifikat  } = req.body;

    pool
    .query(queries.insertData, [nama_siswa, guru_pembimbing, sertifikat ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addSertifikat", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updateSertifikat = (req, res) => {
    const {nama_siswa, guru_pembimbing, sertifikat, id } = req.body;

    pool
    .query(queries.updateData, [nama_siswa, guru_pembimbing, sertifikat, id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updateSertifikat", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deleteSertifikat = (req, res) => {
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
        console.log("error deleteSertifikat", e);
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
    getSertifikat,
    addSertifikat,
    updateSertifikat,
    deleteSertifikat,
    // sumExpense,
}