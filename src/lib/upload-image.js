import cloudinary from "./cloudinary";

export const ImageUpload = async (file) => {
  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);

  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: process.env.FOLDER_NAME,
      },
      async (err, result) => {
        if (err) {
          return reject(err.message);
        }
        return resolve(result);
      }
    ).end(bytes)
  });
};
