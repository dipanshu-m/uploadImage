import { ref, StorageReference, uploadBytes } from 'firebase/storage';
import { storage } from '../model/firebaseConfig';

const createNewDate = () => {
  return new Date().getTime();
};

export default function uploadImage(file: File): Promise<void> {
  // Reference to imgRef storage in image folder
  // file format-> [:date(in ms)][:file-name]
  const imgRef: StorageReference = ref(
    storage,
    `image/${createNewDate()}${file.name}`
  );
  const val = uploadBytes(imgRef, file)
    .then((snapshot) => {
      console.log('successfull');
      return snapshot;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return val;
}
