const cloudinary = require('cloudinary');
const fs = require('fs')

cloudinary.config({
  cloud_name: 'dlxhxzwgf',
  api_key: '893844832791213',
  api_secret: 'pRX2yAqVhS8yVTKZK2NSO1Z2T7E'
});

const uploadFile = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath,
      { public_id: "users" })
      fs.unlinkSync(filePath);

    return result
  } catch (error) {
    console.log(error.massage);
  }
}

module.exports = {
  uploadFile
}