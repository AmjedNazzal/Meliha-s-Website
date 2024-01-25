import LeftSideNav from '@/app/ui/dashboard/LeftSideNav';
import RightSideNav from '../ui/dashboard/RightSideNav';
import TopBar from '@/app/ui/dashboard/topBar';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='block h-full w-full bg-gray-50'>
        <TopBar />
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden gap-[45px]">
        <div className="flex-none w-[310px] my-[2px] pt-[40px] bg-white">
            <LeftSideNav />
        </div>
        <div className="flex py-[20px] flex-col items-start gap-[30px]">{children}</div>
        <RightSideNav />
    </div>
    </div>
  );
}