import { axiosClient } from './axiosClient'

export const CategoryAPI = {
    list() {
        const url = `/category`;
        return axiosClient.get(url)
    },
    read(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url)
    },
    remove(id) {
        const url = `/category/${id}`;
        return axiosClient.delete(url)
    },
    add(category) {
        const url = `/category/create`;
        return axiosClient.post(url, category);
    },
    update(id, data) {
        const url = `/category/${id}`
        return axiosClient.put(url, data);
    }
}

