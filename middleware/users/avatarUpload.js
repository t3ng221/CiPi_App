function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["images/jpeg", "images/jpg", "images/png"],
    1000000,
    "Only jpg,jpeg,png format allowed"
  );
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err_message,
          },
        },
      });
    } else {
      next();
    }
  });
}
module.exports = avatarUpload;
