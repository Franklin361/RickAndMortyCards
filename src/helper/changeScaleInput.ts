export const changeScale = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.target?.parentElement?.parentElement?.classList.toggle('efecto')
};