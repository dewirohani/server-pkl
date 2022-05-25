const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getPeriode = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addPeriode = (req, res) => {
    const { nama_periode, tanggal_mulai, tanggal_berakhir, status } = req.body;

    pool
    .query(queries.insertData, [nama_periode, tanggal_mulai, tanggal_berakhir, status])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addPeriode", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updatePeriode = (req, res) => {
    const { nama_periode, tanggal_mulai, tanggal_berakhir, status, id } = req.body;

    pool
    .query(queries.updateData, [nama_periode, tanggal_mulai, tanggal_berakhir, status, id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updatePeriode", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deletePeriode = (req, res) => {
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
        console.log("error deletePeriode", e);
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
    getPeriode,
    addPeriode,
    updatePeriode,
    deletePeriode,
    // sumExpense,
}