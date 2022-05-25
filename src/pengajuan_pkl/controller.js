const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getPengajuan_pkl = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addPengajuan_pkl = (req, res) => {
    const { nama_siswa, nama_instansi, periode  } = req.body;

    pool
    .query(queries.insertData, [nama_siswa, nama_instansi, periode ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addPengajuan_pkl", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updatePengajuan_pkl = (req, res) => {
    const { nama_siswa, nama_instansi, periode , id } = req.body;

    pool
    .query(queries.updateData, [nama_siswa, nama_instansi, periode , id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updatePengajuan_pkl", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deletePengajuan_pkl = (req, res) => {
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
        console.log("error deletePengajuan_pkl", e);
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
    getPengajuan_pkl,
    addPengajuan_pkl,
    updatePengajuan_pkl,
    deletePengajuan_pkl,
    // sumExpense,
}