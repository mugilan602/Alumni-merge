import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const useSignup = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCZ7guSkzx20Yf86r05w2lDAEVxI-DnMqk",
    authDomain: "alumni-profiles-1608.firebaseapp.com",
    projectId: "alumni-profiles-1608",
    storageBucket: "alumni-profiles-1608.appspot.com",
    messagingSenderId: "309882351608",
    appId: "1:309882351608:web:d4d0ecdddec04de658f00d",
    measurementId: "G-PHN7HC4E4N"
  };

  const app = initializeApp(firebaseConfig);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (formData) => {
    setError(null);
    setLoading(true);

    try {
      // Step 1: Submit the initial form data with profileImage as an empty string
      const initialFormData = { ...formData, profileImage: "" };

      const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(initialFormData),
      });

      const data = await response.json();
      const userId = data.userId;

      if (!response.ok) {
        setError(data.error || 'Signup failed.');
        setLoading(false);
        return;
      }

      // Initialize Firebase Storage
      const storage = getStorage(app);
      const file = formData.profileImage;
      let name = file.name;
      name = userId + name; // Setting the filename as the userId
      const storageRef = ref(storage, 'AlumniProfiles/' + name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Upload progress monitoring
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error('Error uploading file:', error);
          setError('Error uploading file. Please try again.');
          setLoading(false);
        },
        async () => {
          // On upload success, get download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);

          // Step 2: Update the user's profile with the download URL
          const updateResponse = await fetch(`http://localhost:3000/api/user/${userId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ profileImage: downloadURL }),
          });

          if (!updateResponse.ok) {
            setError('Error updating profile image. Please try again.');
            setLoading(false);
            return;
          }

          // Update local storage and context
          const updatedData = { ...data, profileImage: downloadURL };
          localStorage.setItem('user', JSON.stringify(updatedData));
          dispatch({ type: 'LOGIN', payload: updatedData });
          navigate('/');
          window.scrollTo(0, 0);
        }
      );
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
