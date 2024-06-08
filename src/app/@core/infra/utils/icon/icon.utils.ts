import { MatIconRegistry } from "@angular/material/icon";
import { inject } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ICONS } from "../../configs/icons.config";
import { IconRegistry } from "../../../domain/type/icon-registry.type";


export const registerIcon = (icon: IconRegistry) => {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIconLiteral(icon.label, sanitizer.bypassSecurityTrustHtml(icon.value));
}

export const registerAllIcons = () => {
    ICONS.forEach((icon: IconRegistry) => {
        registerIcon(icon);
    })
}
