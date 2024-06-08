export const scrollTo = (el: HTMLElement) => {
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" })
}
