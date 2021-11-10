const multer = require("multer");
const fs = require("fs");
const path = require("path");

exports.userFile = (req, res, next) => {
  const getFileType = (file) => {
    const mimetype = file.mimetype.split("/");
    return mimetype[mimetype.length - 1];
  };

  const generateFileName = (req, file, cb) => {
    const extesion = getFileType(file);
    const filename =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + extesion;
    cb(null, file.filename + "-" + filename);
  };

  const fileFilter = (req, file, cb) => {
    const extesion = getFileType(file);

    const allowedType = /jpeg|jpg|png|/;

    const passed = allowedType.test(extesion);

    if (passed) {
      return cb(null, true);
    }
    return cb(null, false);
  };

  const storage = multer.disStorage({
    destination: function (req, file, cb) {
      const { id } = req.user;
      const dest = `uploads/user/${id}`;

      fs.access(dest, (error) => {
        // doesm't exist
        if (error) {
          return fs.mkdir(dest, (error) => {
            cb(error, dest);
          });
          // exist
        } else {
          fs.readdir(dest, (error, files) => {
            if (error) throw error;

            for (const file of files) {
              fs.unlink(path.join(dest, file), (error) => {
                if (error) throw error;
              });
            }
          });
          return cb(null, dest);
        }
      });
    },
    filename: generateFileName,
  });
  return multer({ storage }, fileFilter).single("avatar");
};
