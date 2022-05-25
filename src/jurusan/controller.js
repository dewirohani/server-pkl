const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getJurusan = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addJurusan = (req, res) => {
    const { nama_jurusan, keterangan } = req.body;
    pool
    .query(queries.insertData, [nama_jurusan, keterangan])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addJurusan", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updateJurusan = (req, res) => {
    const { nama_jurusan, keterangan, id } = req.body;

    pool
    .query(queries.updateData, [nama_jurusan, keterangan, id])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updateJurusan", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deleteJurusan = (req, res) => {
    const {id } = req.params;

    pool
    .query(queries.deleteData, [parseInt(id)])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menghapus data",
        });
    })

    .catch((e) => {
        console.log("error deleteJurusan", e);
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
    getJurusan,
    addJurusan,
    updateJurusan,
    deleteJurusan,
    // sumExpense,
}