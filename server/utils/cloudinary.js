const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Upload image to Cloudinary
exports.uploadToCloudinary = async (filePath, folder = 'dream-holidays') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      resource_type: 'auto'
    });

    // Delete file from local storage after upload
    fs.unlinkSync(filePath);

    return {
      url: result.secure_url,
      publicId: result.public_id
    };
  } catch (error) {
    // Delete file from local storage if upload fails
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    throw error;
  }
};

// Delete image from Cloudinary
exports.deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
  }
};

// Upload multiple images
exports.uploadMultipleToCloudinary = async (files, folder = 'dream-holidays') => {
  try {
    const uploadPromises = files.map(file => 
      this.uploadToCloudinary(file.path, folder)
    );
    return await Promise.all(uploadPromises);
  } catch (error) {
    throw error;
  }
};

module.exports = cloudinary;