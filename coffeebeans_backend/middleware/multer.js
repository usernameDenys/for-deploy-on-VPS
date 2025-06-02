import multer from "multer";
import { v4 as uuidv4 } from "uuid";

// Config storage for multer
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    // Extract file extension
    const extension = file.originalname.split(".").pop();

    // Generate a filename using UUID + original extension
    callback(null, `${uuidv4()}.${extension}`);
  },
});

const upload = multer({ storage });

export default upload;
