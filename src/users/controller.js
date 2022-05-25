const pool = require("../../config/db"); //untuk connect db

const queries = require("./queries"); //untuk connect query di queries

const getUser = (req, res) => {
    pool.query(queries.getData).then((result) => {
      
    return res.status(200).json(result.rows);
    })
}


const addUser = (req, res) => {
    const { username, password  } = req.body;

    pool
    .query(queries.insertData, [username, password ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil menambahkan data",
        });
    })

    .catch((e) => {
        console.log("error addUser", e);
        return res.status(500).json({
            message : "Gagal mendapatkan data",
        });
    });
};

const updateUser = (req, res) => {
    const { username, password , id } = req.body;

    pool
    .query(queries.updateData, [username, password , id ])
    .then((result) => {
    return res.status(200).json(
        {
            message: "Berhasil mengupdate data",
        });
    })

    .catch((e) => {
        console.log("error updateUser", e);
        return res.status(500).json({
            message : "Gagal mengupdate data",
        });
    });
};

const deleteUser = (req, res) => {
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
        console.log("error deleteUser", e);
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
    getUser,
    addUser,
    updateUser,
    deleteUser,
    // sumExpense,
}