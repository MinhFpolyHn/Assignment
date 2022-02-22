import intance from "./instance";

export const getAll = () => {
    const url = "/post";
    return intance.get(url);
};
export const get = (id) => {
    const url = `/post/${id}`;
    return intance.get(url);
};
export const add = (post) => {
    const url = "/post";
    return intance.get(url, post);
};
export const remove = (id) => {
    const url = `/post/${id}`;
    return intance.delete(url);
};
export const update = (post) => {
    const url = `/post/${post.id}`;
    // eslint-disable-next-line no-undef
    return intance.delete(url, post);
};
