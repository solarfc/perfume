import data from "../current.perfume.list.json";

export const getPerfume = () => {
    // return data;
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(data)
        }, 700);
    }));
};