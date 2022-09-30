class Uploader {
    constructor() {
        this.url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;
        this.preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
        this.loading = false;
    }

    async uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', `${this.preset}`);
    
        const res = await fetch(`${this.url}`, {
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