import { homeNavItem } from "@/app/types/homeNaveItem";

export default function getHomeNavItemNames() : homeNavItem[] {
  
    const itemNames = [
        {
            itemName:"Home",
            targetRef: "/"
        },
        {
            itemName:"Rooms & Suites",
            targetRef: "/rooms"
        },
        {
            itemName:"Conferences & Events",
            targetRef: "/conferences"
        },
        {
            itemName:"Amenities",
            targetRef: "/amenities"
        },
        {
            itemName:"Reservations",
            targetRef: "/reservations"
        },
       
        
        
        // "Home",
        // "Rooms & Suites",
        // "Conferences & Events",
        // "Amenities",
        // "Reservations",
        // "More"
    ]

    return itemNames;
}
