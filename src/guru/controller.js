const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getGuru = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addGuru = (req, res) => {
    const { nip, nama_guru, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp } = req.body;

    pool
    .query(queries.insertData, [nip, nama_guru, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addGuru", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updateGuru = (req, res) => {
    const { nip, nama_guru, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp, id } = req.body;

    pool
    .query(queries.updateData, [nip, nama_guru, alamat, tempat_lahir, tanggal_lahir, jenis_kelamin, agama, no_hp, id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updateGuru", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deleteGuru = (req, res) => {
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
        console.log("error deleteGuru", e);
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
    getGuru,
    addGuru,
    updateGuru,
    deleteGuru,
    // sumExpense,
}