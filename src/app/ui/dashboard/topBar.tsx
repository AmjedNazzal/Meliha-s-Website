import Image from 'next/image';
import { ProfilePic } from './profile';
import { BellIcon, PlusIcon } from './SVGIcons';

export default function TopBar() {
    return (
        <div className='bg-white flex justify-between items-center h-[84px] w-full px-[52.1px]'>
            <Image
                src="/hero-desktop.png"
                width={260}
                height={500}
                className="hidden md:block"
                alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className='flex items-center justify-between w-[301.93px] h-[50px] '>
                <button className="flex items-center justify-center gap-[12px] h-[38px] w-[149px] rounded-md bg-yellow-400">
                    <PlusIcon />
                    <div className="hidden md:block text-[13px] text-white">Ask a question</div>
                </button>
                <div className="flex relative items-end h-[31px]">
                    <button className="flex">
                    <BellIcon />
                    {/* <BellIcon className="hidden md:block h-7" style={{ color: '#808080' }} /> */}
                    </button>
                    {/* Circle */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="7.5" r="6.5" fill="#1682FD" stroke="white" stroke-width="2"/>
                    </svg>
                    
                </div>
                <div className="flex items-center justify-between w-[70.93px] h-[50px]">
                    <ProfilePic size={50} />
                    {/* Arrow */}
                    <button className="flex">
                        <div
                            className="h-0 w-0 border-t-[6.93px] border-l-[4px] border-r-[4px] border-t-gray-400 border-l-transparent border-r-transparent"
                        />
                    </button>
                </div>
            </div>
            
        </div>
      );
    }