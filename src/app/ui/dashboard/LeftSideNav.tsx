import Link from 'next/link';
import LeftSideNavLinks from '@/app/ui/dashboard/left-nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';

export default function LeftSideNav() {
  return (
    <div className="flex flex-col">
      <div className="flex grow flex-row justify-between gap-[30px] md:flex-col md:space-x-0 bg-white">
        <LeftSideNavLinks />
        
        {/* <form
        // action={async () => {
        //   'use server';
        //   await signOut();
        // }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
    </div>
  );
}
