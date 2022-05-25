const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getPenempatan = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addPenempatan = (req, res) => {
    const { nama_siswa, periode, nama_guru, kelas, jurusan  } = req.body;

    pool
    .query(queries.insertData, [nama_siswa, periode, nama_guru, kelas, jurusan ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addPenempatan", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updatePenempatan = (req, res) => {
    const { nama_siswa, periode, nama_guru, kelas, jurusan , id } = req.body;

    pool
    .query(queries.updateData, [nama_siswa, periode, nama_guru, kelas, jurusan , id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updatePenempatan", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deletePenempatan = (req, res) => {
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
        console.log("error deletePenempatan", e);
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
    getPenempatan,
    addPenempatan,
    updatePenempatan,
    deletePenempatan,
    // sumExpense,
}