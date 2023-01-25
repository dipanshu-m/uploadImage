import uploadImage from '../controllers/uploadImageController';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { FormType } from '../App';

const Form = () => {
  const [image, setImage] = useState<File>(new File(['', ''], ''));
  const [loading, setLoading] = useState<boolean>(false);

  function handleImage(target: EventTarget & HTMLInputElement): void {
    const files: FileList | null = target.files;

    if (files && files.length > 0) {
      setImage(files[0]);
    }
  }
  function handleSubmit() {
    setLoading(true);
    uploadImage(image).then(() => {
      setImage(new File(['', ''], ''));
      setLoading(false);
    });
  }

  return loading ? (
    <Loading />
  ) : (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <img
        src={URL.createObjectURL(image)}
        alt='Preview'
      />
      <label htmlFor='imageInput'>Image:</label>
      <input
        type='file'
        name='imageInput'
        id=''
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          event.preventDefault();
          handleImage(event.target);
        }}
      />
      <button
        type='submit'
        onClick={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ): void => {
          event.preventDefault();
          handleSubmit();
        }}>
        Submit
      </button>
    </form>
  );
};

export default Form;
