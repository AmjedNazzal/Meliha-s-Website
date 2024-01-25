'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import * as Icons from './SVGIcons';


export default function RightSideNavLinks() {
  const pathname = usePathname();

  const links = [
    {
      name: 'Please read rules before you start working on a platform',
      href: '/dashboard/courses',
    },
    {
      name: 'Vision & Strategy of Alemhelp',
      href: '/dashboard/questions',
    },
    {
      name: 'Alem.School dashboard',
      href: '/dashboard/tags',
    },
    {
      name: 'Golang best-practices',
      href: '/dashboard/ranking',
    },
  ];
  return (
    <>
    <ul className="list-disc flex flex-col gap-[10px] items-start">
        {links.map((link) => (
            <li key={link.name} className="flex items-start">
            <span
                className="w-[17px] h-[17px] text-[24px] text-blue-500 rounded-full flex items-center justify-center"
            >
                &bull; {/* Bullet character */}
            </span>
            <Link href={link.href}>
                <p style={{ letterSpacing: '0.65px', lineHeight: '17px', color:'#1682FD', fontSize:'11px' }}>{link.name}</p>   
            </Link>
            </li>
        ))}
    </ul>
    </>
  );
}
