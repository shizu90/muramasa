import axios from "axios";
import { useState } from "react";
const url = "https://muramasa-api.herokuapp.com";

export default function useApi(token?: string) {
    const [response, setResponse] = useState<any>();

    const axiosInstance = axios.create({
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    function login(data: object) {
        axiosInstance.post(`${url}/login`, data)
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }

    function register(data: object) {
        axiosInstance.post(`${url}/users`, data)
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }

    function getAllUsers() {
        axiosInstance.get(`${url}/users`)
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }

    function getUser(id: string) {
        axiosInstance.get(`${url}/users/${id}`)
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }

    function updateUser(id: string, data: object, token: string) {
        axiosInstance.put(`${url}/users/${id}`, data, {
            headers: {
                "Authorization": token
            }
        })
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }

    function deleteUser(id: string, token: string) {
        axiosInstance.delete(`${url}/users/${id}`, {
            headers: {
                "Authorization": token
            } 
        })
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }

    function addFavorites(id: string, media: object, token: string) {
        axiosInstance.post(`${url}/users/${id}/favorites`, media, {
            headers: {
                "Authorization": token
            }
        })
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }
    
    function removeFavorites(id: string, media: object, token: string) {
        axiosInstance.put(`${url}/users/${id}/favorites`, media, {
            headers: {
                "Authorization": token
            },
        })
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }

    function updateList(id: string, media: object, token: string) {
        axiosInstance.put(`${url}/users/${id}/list`, {...media}, {
            headers: {
                "Authorization": token
            }
        })
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => console.log(err));
    }

    function getMediaFromList(id: string, media: any, token: string) {
        axiosInstance.get(`${url}/users/${id}/list/${media.type}/${media.id}`, {
            headers: {
                "Authorization": token
            }
        })
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err));
    }

    function removeList(id: string, media: any, token: string) {
        axiosInstance.delete(`${url}/users/${id}/list/${media.type}/${media.id}`, {
            headers: {
                "Authorization": token
            },
            data: {
                ...media
            }
        })
        .then(res => setResponse(JSON.parse(JSON.stringify(res))))
        .catch(err => setResponse(err.response.data));
    }

    function validateToken(token: string | undefined) {
        if(token !== undefined) {
            axiosInstance.get(`${url}/validateToken/${token}`)
            .then(res => setResponse(res))
            .catch(err => setResponse(err));
       }
    }

    function uploadImage(file: any, token: string) {
        if(token !== undefined) {
            const formData = new FormData();
            formData.append("file", file);
            axios.post(`${url}/upload`, formData, {
                headers: {
                    "content-type": "multipart/form-data",
                    "Authorization": token
                }
            })
            .then(res => setResponse(JSON.parse(JSON.stringify(res))))
            .catch(err => console.log(err));
        }
    }
    
    return {
        response,
        login,
        register,
        addFavorites,
        removeFavorites,
        updateUser,
        deleteUser,
        updateList,
        removeList,
        validateToken,
        getUser,
        getAllUsers,
        getMediaFromList,
        uploadImage
    }
}