import useFetch from "react-fetch-hook";
import { Note } from "../types/notes.type";
import { BASE_URL, userName } from "../config";

export const useGetNotes = () => {
    const { isLoading, data, error } = useFetch<Note[]>(`${BASE_URL}/notes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': userName
        }
    });

    return { isLoading, data, error }
};
export const usePostNote = () => {
    const postNote = (note: Note) => {
        return fetch(`${BASE_URL}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userName
            },
            body: JSON.stringify(note)
        });
    };

    return { postNote };
};

export const usePutNote = () => {
    const putNote = (note: Note) => {
        return fetch(`${BASE_URL}/notes/${note.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userName
            },
            body: JSON.stringify(note)
        });
    };

    return { putNote };
};
export const useDeleteNote = () => {
    const deleteNote = (id: number) => {
        return fetch(`${BASE_URL}/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userName
            }
        });
    };

    return { deleteNote };
};
