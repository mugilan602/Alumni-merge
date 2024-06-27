import { useState } from 'react';
import { useAuthContext } from './useAuthContext'; // Import your authentication context hook
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useApplyJob = () => {
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const { user } = useAuthContext(); // Assuming useAuthContext provides user info and token

    const applyForJob = async (jobId, formData) => {
        setLoading(true);
        setError(null);
        setSuccessMessage('');

        try {
            // Form validation
            if (!formData.name || !formData.email || !formData.phoneNumber || !formData.resume) {
                throw new Error('Please fill out all fields.');
            }
            console.log(formData);
            const storage = getStorage(app);
            const file = formData.resume;
            const fileName = `${formData.email}_${Date.now()}_${file.name}`; // Generate a unique filename
            const storageRef = ref(storage, `Resume/${fileName}`); // Adjust the storage path as needed
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Upload progress monitoring
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.error('Error uploading file:', error);
                    throw new Error('Error uploading resume.');
                },
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        console.log('File available at', downloadURL);

                        // Update formData with the downloadURL
                        formData.resume = downloadURL;

                        // API call to submit job application
                        const response = await fetch(`http://localhost:3000/api/user/apply/${jobId}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData),
                        });

                        if (!response.ok) {
                            throw new Error('Failed to apply for job.');
                        }

                        const data = await response.json();
                        setSuccessMessage('Application submitted successfully!'); // Display success message
                        console.log('Job application submitted:', data); // Assuming the API returns the created job's ID
                    } catch (error) {
                        setError(error.message);
                    } finally {
                        setLoading(false);
                    }
                }
            );
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return { applyForJob, loading, error, successMessage };
};

export default useApplyJob;
