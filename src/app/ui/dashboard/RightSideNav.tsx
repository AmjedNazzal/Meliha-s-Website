import Link from 'next/link';
import RightSideNavLinks from '@/app/ui/dashboard/right-nav-links';
import { StarIcon } from './SVGIcons';
import { ProfilePic, UserName, UserSocials, UserMajor } from './profile';

export default function RightSideNav() {
  return (
    <div className="flex flex-col w-full pr-[35px] py-[40px]">
      <div className="flex justify-center items-center flex-col gap-[20px] bg-white px-[20px] py-[30px]"
        style={{
          borderRadius: '5px',
          border: '1px solid var(--Border, #EAEAEA)',
          background: '#FFF',
          boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className='flex justify-center items-center h-[200px]'>
          <ProfilePic size={200} />
        </div>
        <div className='flex flex-col gap-[5px] justify-center items-center'>
          <div style={{letterSpacing: '0.65px', fontSize: '19px', fontWeight: '700' }} className='flex'>
            @<UserName />
          </div>
          <div style={{letterSpacing: '0.32px', fontSize: '15px', fontWeight: '400', color: '#808080' }}>
            <UserMajor />
          </div>
        </div>
        <span className='bg-gray-200 flex w-full h-[1px]'></span>
        <UserSocials />
      </div>
      {/* <div className="flex flex-col gap-[10px] md:flex-col bg-white px-[20px] py-[30px]"
        style={{
            borderRadius: '5px',
            border: '1px solid var(--Border, #EAEAEA)',
            background: '#FFF',
            boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className='flex w-full items-start gap-[5px]'>
            <StarIcon />
            <h1 style={{ letterSpacing: '0.65px' }} className='text-[14px] text-gray-900'>Must-read posts</h1>
        </div>
        <span className='bg-gray-200 flex w-full h-[1px]'></span>
        <RightSideNavLinks />
      </div> */}
    </div>
  );
}
