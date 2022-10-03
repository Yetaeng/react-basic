class Uploader {
    async uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    
        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        let data;
        try {
            data = await res.json();
            console.log('uploaded');
        } catch (error) {
            console.error(error);
        }

        return data;
    }
}

export default Uploader;