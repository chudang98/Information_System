// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
let _DB = process.env.DATABASE;
Grid.mongo = mongoose.mongo;
const _conn = mongoose.createConnection(_DB);

module.exports = {
  timAnhTheoTen,
};

// const _storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       const fileInfo = {
//         filename: file.originalname,
//         bucketName: 'uploads',
//       };
//       resolve(fileInfo);
//     });
//   },
// });
// const _upload = multer({ _storage });

let gfs;
_conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

async function timAnhTheoTen(ten) {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      });
    }
    // File exists
    return res.json(file);
  });
}
