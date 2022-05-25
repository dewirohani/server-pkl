const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getInstansi = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addInstansi = (req, res) => {
    const {nama_instansi, alamat, kecamatan, kota,nama_pembimbing, kontak, kuota , guru } = req.body;

    pool
    .query(queries.insertData, [nama_instansi, alamat, kecamatan, kota,nama_pembimbing, kontak, kuota , guru])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addinstansi", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updateInstansi = (req, res) => {
    const {nama_instansi, alamat, kecamatan, kota,nama_pembimbing, kontak, kuota , guru, id } = req.body;

    pool
    .query(queries.updateData, [nama_instansi, alamat, kecamatan, kota,nama_pembimbing, kontak, kuota , guru, id])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updateinstansi", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deleteInstansi = (req, res) => {
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
        console.log("error deleteinstansi", e);
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
    getInstansi,
    addInstansi,
    updateInstansi,
    deleteInstansi,
    // sumExpense,
}