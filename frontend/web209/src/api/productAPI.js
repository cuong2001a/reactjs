import { axiosClient } from './axiosClient'

export const ProductAPI = {
    list() {
        const url = `/products`;
        return axiosClient.get(url)
    },
    read(id) {
        const url = `/productDetail/${id}`;
        return axiosClient.get(url)
    },
    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url)
    },
    add(data) {
        const url = `/products/create`;
        return axiosClient.post(url,data);
    },
    update(id, data) {
        const url = `/products/${id}`
        return axiosClient.put(url, data);
    },
    listByCategory(id){
        const url = `/products/${id}`
        return axiosClient.get(url)
    }
}
