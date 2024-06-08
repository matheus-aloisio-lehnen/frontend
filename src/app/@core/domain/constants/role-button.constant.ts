import { RoleButton } from "../type/role.button";
import { Role } from "../enum/role.enum";
import { Icon } from "../enum/icon.enum";

export const ROLE_BUTTONS: RoleButton[] = [
    {
        title: 'Gerador',
        role: Role.wasteGenerator,
        icon: Icon.wasteGenerator,
    },
    {
        title: 'Ponto de Coleta',
        role: Role.dropOffSpot,
        icon: Icon.dropOffSpot,
    },
    {
        title: 'Coletor',
        role: Role.collector,
        icon: Icon.collector,
    },
    {
        title: 'Indústria',
        role: Role.industry,
        icon: Icon.industry,
    }
]
