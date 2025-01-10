import Link from 'next/link';
import React from 'react'
import { homeNavItem } from '../types/homeNaveItem';

type HomeNavigationProps = {
    items: homeNavItem[];
};
  
export default function HomeNavigationItems({items}: HomeNavigationProps) {
  return (
    <div className="sm:flex items-center space-x-3 shrink-0">
        {
            items.map((item, index) => (
                <Link key={index} href={item.targetRef} className="text-sm border-slate-300 border px-5 py-2 dark:border-slate-400 rounded-3xl text-slate-700 dark:text-slate-300">{item.itemName}</Link>
            ))
        }
    </div>
  )
}