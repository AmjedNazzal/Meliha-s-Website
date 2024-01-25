'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import * as Icons from './SVGIcons';
import React, { ReactNode } from 'react';


export default function LeftSideNavLinks() {
  const pathname = usePathname();

  const Menulinks = [
    {
      name: 'Courses',
      href: '/dashboard/courses',
      icon: <Icons.CoursesIcon color={pathname === '/dashboard/courses' ? '#FFC824' : '#808080'}/>,
    },
    {
      name: 'Questions',
      href: '/dashboard/questions',
      icon: <Icons.QuestionsIcon color={pathname === '/dashboard/questions' ? '#FFC824' : '#808080'}/>,
    },
    {
      name: 'Tags',
      href: '/dashboard/tags',
      icon: <Icons.TagsIcon color={pathname === '/dashboard/tags' ? '#FFC824' : '#808080'}/>,
    },
    {
      name: 'Ranking',
      href: '/dashboard/ranking',
      icon: <Icons.RankingIcon color={pathname === '/dashboard/ranking' ? '#FFC824' : '#808080'}/>,
    },
  ];

  const ParsonalLinks = [
    {
      name: 'Your questions',
      href: '/dashboard/',
      icon: <Icons.YourQuestionsIcon color={pathname === '/dashboard/' ? '#FFC824' : '#808080'}/>,
    },
    {
      name: 'Your answers',
      href: '/dashboard/',
      icon: <Icons.YourAnswesIcon color={pathname === '/dashboard/' ? '#FFC824' : '#808080'}/>,
    },
    {
      name: 'Your likes & votes',
      href: '/dashboard/',
      icon: <Icons.YourLikesIcon color={pathname === '/dashboard/' ? '#FFC824' : '#808080'}/>,
    },
  ];

  interface Link {
    name: string;
    href: string;
    icon: ReactNode; // Assuming Icons.CoursesIcon, Icons.QuestionsIcon, etc., return ReactNode
  }


  function LinksRender({ links }: { links: Link[] }) {
    return (
      <>
      {links.map((link) => {
        return (   
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                'flex w-full h-[41px] grow items-center justify-center hover:bg-sky-100 hover:text-blue-600 text-sm font-medium md:flex-none md:justify-start',
                {
                    'hover:bg-amber-100 bg-amber-50': pathname === link.href,
                },
                )}
            >
                {pathname === link.href &&
                    <div className="SelectRect w-[5px] h-[41px] bg-amber-400" />
                }
                <div className={clsx(
                'flex px-[52.1px] gap-2 items-center justify-center',
                {
                    'px-[47.1px]': pathname === link.href,
                },
                )}>
                {link.icon}
                <p className={clsx(
                    "text-[14px] font-medium tracking-wide",
                    {
                        'text-yellow-400': pathname === link.href,
                    },
                    )}
                    style={{ letterSpacing: '0.65px' }}
                    >{link.name}</p>
                </div>
            </Link>
        );
      })}
    </>
    );
  }
  return (
    <>
    <div className="flex w-full flex-col gap-[10px]">
      <div style={{ letterSpacing: '0.24px' }} className="Title text-xs text-[13px] text-gray-500 font-medium uppercase tracking-tight px-[52.1px]">Menu</div>
      <LinksRender links={Menulinks} />
    </div>

    <div className="flex w-full flex-col gap-[10px]">
      <div style={{ letterSpacing: '0.24px' }} className="Title text-xs text-[13px] text-gray-500 font-medium uppercase tracking-tight px-[52.1px]">PERSONAL NAVIGATOR</div>
      <LinksRender links={ParsonalLinks} />
    </div>
    </>
  );
}
