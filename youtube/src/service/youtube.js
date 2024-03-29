class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 10,
            },
        });
        return response.data.items;
    }

    async searchVideo(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                q: query,
                type: 'video',
            },
        });
        return response.data.items.map((item) => ({
            ...item,
            id: item.id.videoId
        }));
    }
}

export default Youtube;