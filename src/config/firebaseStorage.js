import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import firebaseApp from "./firebaseConfig";

const storage = getStorage(firebaseApp);

// upload file
const uploadFile = async (path, file) => {
  try {
    const storageRef = ref(storage, path);
    let res = await uploadBytes(storageRef, file);
    let url = await getDownloadURL(storageRef);
    console.log(res);
    return url;
  } catch (error) {
    console.log("Error in uploading file: ", error);
  }
};

// delete file
const deleteFile = async (path) => {
  try {
    const storageRef = ref(storage, path);
    let res = await deleteObject(storageRef);
    return res;
  } catch (error) {
    console.log("Error in deleting file: ", error);
  }
};

export { uploadFile, deleteFile };
export default storage;
