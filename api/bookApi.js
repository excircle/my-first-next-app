import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/books";

export function getBooks() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}