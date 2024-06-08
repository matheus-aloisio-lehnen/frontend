export type DialogBase = {
    title: string,
    content: DialogContent,
    actions: DialogAction[]
}

export type DialogContent = {
    html: string,
}

export type DialogAction = {
    label: string,
    action: () => void,
    class?: string,
}
