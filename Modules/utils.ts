export const GET_ELEM_BY_ID = (id: string) => {
    return document.getElementById(id) as HTMLElement;
};

export const GET_ELEM_BY_CLASS = (id: string) => {
    return document.getElementsByClassName(id);
};