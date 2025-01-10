import { IconLink } from '@/app/types/IconLink';

export default function GetIconsArray():IconLink[] {
    const icons = [
        {
            iconImagePath: "/file.svg", 
            text: "call",
            targetRef: "tel:0939393939"
            
        },

        {
            iconImagePath: "/globe.svg", 
            text: "whatsapp",
            targetRef: "https://wa.me/0858585858"
        },

        {
            iconImagePath: "/window.svg", 
            text: "email",
            targetRef: "mailto:mwesigwaiee@mail.com"
        },

        {
            iconImagePath: "/next.svg", 
            text: "careers",
            targetRef: "/careers"
        },
    ]

    return icons;
}
