import { axiosClient } from './axiosClient'

export const CartAPI = {
    list() {
        const url = `/cart`;
        return axiosClient.get(url)
    }, 
    add(cart) {
        const url = `/cart`;
        return axiosClient.post(url, cart);
    },
    read(id) {
        const url = `/cart/${id}`;
        return axiosClient.get(url)
    }, 
    edit(id,cart) {
        const url = `/cart/edit/${id}`;
        return axiosClient.put(url, cart);
    },
    remove(id){
        const url = `/cart/delete/${id}`;
        return axiosClient.delete(url)
    }
}

