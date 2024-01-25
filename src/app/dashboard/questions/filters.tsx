'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import * as Icons from '@/app/ui/dashboard/SVGIcons';


export default function QuestionsFilters() {
  const pathname = usePathname();

  const filters = [
    {
      name: 'New',
      icon: <Icons.NewIcon color='#808080'/>,
    },
    {
      name: 'Top',
      icon: <Icons.TopIcon color='#808080'/>,
    },
    {
      name: 'Hot',
      icon: <Icons.HotIcon color='#808080'/>,
    },
    {
      name: 'Closed',
      icon: <Icons.ClosedIcon color='#808080'/>,
    },
  ];
  return (
    <>
      {filters.map((filter) => {
        return (   
            <button
                key={filter.name}
                className='flex bg-gray-200 h-full px-[10px] items-center gap-[5px]'
                style={{ borderRadius: '100px' }}
            >
                {filter.icon}
                <p style={{ letterSpacing: '0.65px' }} className='text-[14px] text-gray-500'>{filter.name}</p>    
            </button>
        );
      })}
    </>
  );
}
