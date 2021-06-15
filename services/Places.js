import Service from './Service';

class Places extends Service {

    constructor() {
        super();
    }

    listPlaces() {
        return this.axiosInstance.get(`/places`);
    }

    listPlaceId(id) {
        return this.axiosInstance.get(`/places/${id}`);
    }
}

export default Places;