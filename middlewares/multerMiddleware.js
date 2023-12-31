const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    console.log(file.mimetype);
    const ext = file.mimetype.split("/")[1]
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix+'.'+ext);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
