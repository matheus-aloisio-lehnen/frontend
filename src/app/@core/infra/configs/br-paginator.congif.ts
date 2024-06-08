import { MatPaginatorIntl } from "@angular/material/paginator";

export const BR_PAGINATOR = (): MatPaginatorIntl => {
    const paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = 'Items por página:';
    paginatorIntl.nextPageLabel = 'Próxima página';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.firstPageLabel = 'Primeira página';
    paginatorIntl.lastPageLabel = 'Última página';
    paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        const start = (page * pageSize) + 1;
        const end = Math.min((page + 1) * pageSize, length);
        return `${ start } - ${ end } de ${ length } itens`;
    };
    return paginatorIntl;
}
