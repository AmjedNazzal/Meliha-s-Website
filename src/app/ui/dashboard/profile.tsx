'use client';

import * as Icons from './SVGIcons';

interface ProfilePicProps {
    size: number;
}

export const ProfilePic = ({ size }: ProfilePicProps) => {
    return( 
        <div className={`hidden md:block h-[${size}px] w-[${size}px] overflow-hidden rounded-full`}>
            <img
                src="/1658488070027.jpeg"
                alt="Screenshots of the dashboard project showing desktop version"
                className="w-full h-full object-cover"
            />
        </div>
    );
};


export const UserName = () => {
    return( 
        <div style={{ letterSpacing: '0.65px' }} className={`block text-gray-900`}>
            <h1>Golanginya</h1>
        </div>
    );
};

export const UserMajor = () => {
    return( 
        <div style={{ letterSpacing: '0.32px' }} className={`block text-gray-500`}>
            <p>Chemical Engineering</p>
        </div>
    );
};


export const UserSocials = () => {
    const socials = [
        {
          name: 'linkedin',
          link: 'link',
        },
        {
          name: 'instagram',
          link: '',
        },
        {
          name: 'facebook',
          link: 'link',
        }
    ];
    return( 
        <div style={{ letterSpacing: '0.65px' }} className='flex justify-center items-center gap-[20px]'>
            {socials.map((social) => (
                <div key={social.name} className='flex justify-center items-center'>
                    <Icons.SocialIcons name={social.name} color={social.link ? '#808080' : '#CAC9C9'} />
                </div>
            ))}
        </div>
    );
};