const express = require('express');
const app = express();
const port = 3331;

const jurusanRoutes = require('./src/jurusan/routes');
const instansiRoutes = require('./src/instansi/routes');
const periodeRoutes = require('./src/periode/routes');
const kelasRoutes = require('./src/kelas/routes');
const attandanceRoutes = require('./src/attandance/routes');
const siswaRoutes = require('./src/siswa/routes');
const guruRoutes = require('./src/guru/routes');
const logbookRoutes = require('./src/logbook/routes');
const penempatanRoutes = require('./src/penempatan_pkl/routes');
const pengajuan_pklRoutes = require('./src/pengajuan_pkl/routes');
const sertifikatRoutes = require('./src/sertifikat/routes');
const usersRoutes = require('./src/users/routes');

const cors = require('cors');

//menerima req dari insomnia rest api
app.use(cors());

// menerima req dari nuxt
app.use(express.json());

app.use(express.urlencoded(
    {
        extended: true,
    })
);

app.use('/jurusan', jurusanRoutes);
app.use('/instansi', instansiRoutes);
app.use('/periode', periodeRoutes);
app.use('/kelas', kelasRoutes);
app.use('/attandance', attandanceRoutes);
app.use('/siswa', siswaRoutes);
app.use('/guru', guruRoutes);
app.use('/logbook', logbookRoutes);
app.use('/penempatan', penempatanRoutes);
app.use('/pengajuan_pkl', pengajuan_pklRoutes);
app.use('/sertifikat', sertifikatRoutes);
app.use('/users', usersRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});