export const GET_ELEM_BY_ID = (id: string) => {
    return document.getElementById(id) as HTMLElement | null;
};

export const GET_ELEM_BY_SELECTOR = (classSelector: string) => {
    return document.querySelectorAll(classSelector) as NodeList | null;
};

export const GET_ELEM_BY_CLASS = (id: string) => {
    return document.getElementsByClassName(id) as HTMLCollection | null;
};