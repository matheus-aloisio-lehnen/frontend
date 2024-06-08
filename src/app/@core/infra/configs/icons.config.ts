import { IconRegistry } from "../../domain/type/icon-registry.type";
import { SVG_YOUTUBE } from "../../../../assets/icon/constants/youtube.svg";
import { SVG_FACEBOOK } from "../../../../assets/icon/constants/facebook.svg";
import { SVG_INSTAGRAM } from "../../../../assets/icon/constants/instagram.svg";
import { SVG_WHATSAPP } from "../../../../assets/icon/constants/whatsapp.svg";
import { SVG_PDF } from "../../../../assets/icon/constants/pdf.svg";
import { SVG_EXCEL } from "../../../../assets/icon/constants/excel.svg";
import { SVG_CSV } from "../../../../assets/icon/constants/csv.svg";
import { SVG_EDIT } from "../../../../assets/icon/constants/edit.svg";
import { SVG_TRASH } from "../../../../assets/icon/constants/trash.svg";
import { Icon } from "../../domain/enum/icon.enum";

export const ICONS: IconRegistry[] = [
    { label: Icon.youtube, value: SVG_YOUTUBE },
    { label: Icon.facebook, value: SVG_FACEBOOK },
    { label: Icon.instagram, value: SVG_INSTAGRAM },
    { label: Icon.whatsapp, value: SVG_WHATSAPP },
    { label: Icon.pdf, value: SVG_PDF },
    { label: Icon.excel, value: SVG_EXCEL },
    { label: Icon.csv, value: SVG_CSV },
    { label: Icon.edit, value: SVG_EDIT },
    { label: Icon.trash, value: SVG_TRASH },
]
