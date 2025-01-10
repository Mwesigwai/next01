import React from 'react';
import { IconLink } from '../types/IconLink';

type SubNavProps = {
  icons: IconLink[];
};

export default function SubNav({ icons }: SubNavProps) {
  return (
    <div className="hidden sm:flex space-x-10">
      {icons.map((icon, index) => (
        <a key={icon.text} href={icon.targetRef}>
            <div key={index} className="flex flex-col items-center space-y-1">
                <img src={icon.iconImagePath} alt={icon.text} className="w-5 h-5"/>
                <span className="text-xs text-gray-600 dark:text-gray-300">{icon.text}</span>
            </div>
        </a>
      ))}
    </div>
  );
}