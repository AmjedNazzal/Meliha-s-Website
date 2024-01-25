import React from 'react';

export const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
        <path d="M6.50004 12.4166C9.49158 12.4166 11.9167 9.99152 11.9167 6.99998C11.9167 4.00844 9.49158 1.58331 6.50004 1.58331C3.5085 1.58331 1.08337 4.00844 1.08337 6.99998C1.08337 9.99152 3.5085 12.4166 6.50004 12.4166Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.5 4.83331V9.16665" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.33337 7H8.66671" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const CoursesIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M5.25 12.75H10.5V11.25H5.25V12.75ZM5.25 9.75H12.75V8.25H5.25V9.75ZM5.25 6.75H12.75V5.25H5.25V6.75ZM3.75 15.75C3.3375 15.75 2.9845 15.6033 2.691 15.3097C2.3975 15.0162 2.2505 14.663 2.25 14.25V3.75C2.25 3.3375 2.397 2.9845 2.691 2.691C2.985 2.3975 3.338 2.2505 3.75 2.25H14.25C14.6625 2.25 15.0157 2.397 15.3097 2.691C15.6038 2.985 15.7505 3.338 15.75 3.75V14.25C15.75 14.6625 15.6033 15.0157 15.3097 15.3097C15.0162 15.6038 14.663 15.7505 14.25 15.75H3.75ZM3.75 14.25H14.25V3.75H3.75V14.25Z" fill={color}/>
    </svg>
);

export const QuestionsIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3.25745 4.5H13.0074" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.25745 9.5H13.0074" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.25745 14.5H13.0074" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.25 4.5H2.2575" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.25 9.5H2.2575" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.25 14.5H2.2575" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const TagsIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M15.4425 10.0575L10.065 15.435C9.92569 15.5745 9.76026 15.6851 9.57816 15.7606C9.39606 15.8361 9.20087 15.8749 9.00375 15.8749C8.80663 15.8749 8.61144 15.8361 8.42934 15.7606C8.24724 15.6851 8.08181 15.5745 7.9425 15.435L1.5 9V1.5H9L15.4425 7.9425C15.7219 8.22354 15.8787 8.60372 15.8787 9C15.8787 9.39628 15.7219 9.77646 15.4425 10.0575V10.0575Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.25 5.25H5.2575" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const RankingIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clip-path="url(#clip0_2111_64)">
            <path d="M9 11.25C11.8995 11.25 14.25 8.8995 14.25 6C14.25 3.10051 11.8995 0.75 9 0.75C6.10051 0.75 3.75 3.10051 3.75 6C3.75 8.8995 6.10051 11.25 9 11.25Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.1575 10.4175L5.25 17.25L9 15L12.75 17.25L11.8425 10.41" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_2111_64">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
        </defs>
  </svg>
);

export const YourQuestionsIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g clip-path="url(#clip0_1_2451)">
            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.8175 6.75C6.99383 6.24875 7.34187 5.82608 7.79997 5.55685C8.25807 5.28762 8.79668 5.1892 9.32039 5.27903C9.8441 5.36886 10.3191 5.64114 10.6613 6.04765C11.0035 6.45415 11.1908 6.96864 11.19 7.5C11.19 9 8.94 9.75 8.94 9.75" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 12.75H9.0075" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_1_2451">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

export const YourAnswesIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M15.75 8.62499C15.7526 9.61489 15.5213 10.5914 15.075 11.475C14.5458 12.5338 13.7323 13.4244 12.7256 14.047C11.7189 14.6695 10.5587 14.9995 9.375 15C8.3851 15.0026 7.40859 14.7713 6.525 14.325L2.25 15.75L3.675 11.475C3.2287 10.5914 2.99742 9.61489 3 8.62499C3.00046 7.44131 3.33046 6.28113 3.95304 5.2744C4.57562 4.26768 5.46619 3.45417 6.525 2.92499C7.40859 2.47869 8.3851 2.24741 9.375 2.24999H9.75C11.3133 2.33623 12.7898 2.99606 13.8969 4.10314C15.0039 5.21021 15.6638 6.68673 15.75 8.24999V8.62499Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const YourLikesIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2544 2.24863 12.7125 2.24863C12.1706 2.24863 11.6341 2.35539 11.1335 2.56281C10.6329 2.77023 10.1781 3.07425 9.795 3.4575L9 4.2525L8.205 3.4575C7.43123 2.68373 6.38177 2.24903 5.2875 2.24903C4.19322 2.24903 3.14377 2.68373 2.37 3.4575C1.59623 4.23127 1.16153 5.28072 1.16153 6.375C1.16153 7.46927 1.59623 8.51873 2.37 9.2925L3.165 10.0875L9 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3173 8.45461 16.5247 7.95401C16.7321 7.45342 16.8389 6.91686 16.8389 6.375C16.8389 5.83313 16.7321 5.29657 16.5247 4.79598C16.3173 4.29539 16.0132 3.84056 15.63 3.4575V3.4575Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const NewIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <g clip-path="url(#clip0_1_1891)">
    <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 3V6L8 7" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_1_1891">
    <rect width="12" height="12" fill="white"/>
    </clipPath>
    </defs>
    </svg>
);

export const TopIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 9.5L9.5 2.5" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.5 2.5H9.5V9.5" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export const HotIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6.25 12C5.38982 12 4.59435 11.7832 3.86358 11.3496C3.13281 10.916 2.55619 10.3242 2.13371 9.57422C1.71124 8.82422 1.5 8.00781 1.5 7.125C1.5 6.78125 1.54948 6.4707 1.64844 6.19336C1.7474 5.91602 1.86919 5.66797 2.01382 5.44922C2.15845 5.23047 2.30308 4.99219 2.44772 4.73438C2.59235 4.47656 2.71414 4.13672 2.8131 3.71484C2.91206 3.29297 2.96154 2.80469 2.96154 2.25C2.96154 2.32812 3.0015 2.4043 3.08143 2.47852C3.16136 2.55273 3.25651 2.62695 3.36689 2.70117C3.47726 2.77539 3.59906 2.90625 3.73227 3.09375C3.86548 3.28125 3.97396 3.5 4.05769 3.75C4.17949 4.13281 4.3774 4.47852 4.65144 4.78711C4.92548 5.0957 5.21474 5.25 5.51923 5.25C5.91506 5.25 6.2519 5.01953 6.52975 4.55859C6.80759 4.09766 7.01312 3.47656 7.14633 2.69531C7.27955 1.91406 7.34615 1.01562 7.34615 0C7.46034 0.34375 7.63542 0.703125 7.87139 1.07812C8.10737 1.45312 8.35667 1.79297 8.61929 2.09766C8.88191 2.40234 9.15785 2.75 9.44712 3.14062C9.73638 3.53125 9.99329 3.91211 10.2178 4.2832C10.4424 4.6543 10.6289 5.08789 10.7773 5.58398C10.9258 6.08008 11 6.59375 11 7.125C11 8.00781 10.7888 8.82422 10.3663 9.57422C9.94381 10.3242 9.36719 10.916 8.63642 11.3496C7.90565 11.7832 7.11018 12 6.25 12ZM7.71154 4.5C7.32332 5.5625 6.95793 6.3125 6.61538 6.75C6.47075 6.9375 6.28996 7.10547 6.07302 7.25391C5.85607 7.40234 5.65815 7.52148 5.47927 7.61133C5.30038 7.70117 5.1272 7.80273 4.95974 7.91602C4.79227 8.0293 4.66096 8.17383 4.56581 8.34961C4.47065 8.52539 4.42308 8.74219 4.42308 9C4.42308 9.47656 4.60387 9.8457 4.96544 10.1074C5.32702 10.3691 5.75521 10.5 6.25 10.5C6.98077 10.5 7.58974 10.3027 8.07692 9.9082C8.5641 9.51367 8.80769 8.97656 8.80769 8.29688C8.80769 7.77344 8.76583 7.32227 8.68209 6.94336C8.59836 6.56445 8.50321 6.2832 8.39663 6.09961C8.29006 5.91602 8.16827 5.68164 8.03125 5.39648C7.89423 5.11133 7.78766 4.8125 7.71154 4.5Z" fill={color}/>
  </svg>
);

export const ClosedIcon = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <g clip-path="url(#clip0_1_1865)">
      <path d="M11 5.53999V5.99999C10.9994 7.07821 10.6503 8.12733 10.0047 8.99091C9.35908 9.85448 8.45164 10.4862 7.41768 10.7919C6.38372 11.0977 5.27863 11.0609 4.26724 10.6873C3.25584 10.3136 2.39233 9.62304 1.80548 8.71853C1.21863 7.81401 0.939896 6.74403 1.01084 5.66815C1.08178 4.59228 1.4986 3.56816 2.19914 2.74853C2.89968 1.9289 3.84639 1.35768 4.89809 1.12007C5.9498 0.882448 7.05013 0.991162 8.035 1.42999" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 2L6 7.005L4.5 5.505" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1_1865">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);


export const ThreeDotsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M12 13.5C12.5523 13.5 13 13.0523 13 12.5C13 11.9477 12.5523 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5C11 13.0523 11.4477 13.5 12 13.5Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 6.5C12.5523 6.5 13 6.05228 13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94772 11 5.5C11 6.05228 11.4477 6.5 12 6.5Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 20.5C12.5523 20.5 13 20.0523 13 19.5C13 18.9477 12.5523 18.5 12 18.5C11.4477 18.5 11 18.9477 11 19.5C11 20.0523 11.4477 20.5 12 20.5Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const SeenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
        <path d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const CommentsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
        <path d="M13.125 9.875C13.125 10.2065 12.9933 10.5245 12.7589 10.7589C12.5245 10.9933 12.2065 11.125 11.875 11.125H4.375L1.875 13.625V3.625C1.875 3.29348 2.0067 2.97554 2.24112 2.74112C2.47554 2.5067 2.79348 2.375 3.125 2.375H11.875C12.2065 2.375 12.5245 2.5067 12.7589 2.74112C12.9933 2.97554 13.125 3.29348 13.125 3.625V9.875Z" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const UpvotesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
        <path d="M7.5 12.375V3.625" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.125 8L7.5 3.625L11.875 8" stroke="#808080" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);


export const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

export const SocialIcons = ({ name, color }) => (
    <>
    {name === 'linkedin' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_2298_264)">
            <path d="M4.83333 13.1667V7.33333M16.5 5.66667V12.3333C16.5 13.4384 16.061 14.4982 15.2796 15.2796C14.4982 16.061 13.4384 16.5 12.3333 16.5H5.66667C4.5616 16.5 3.50179 16.061 2.72039 15.2796C1.93899 14.4982 1.5 13.4384 1.5 12.3333V5.66667C1.5 4.5616 1.93899 3.50179 2.72039 2.72039C3.50179 1.93899 4.5616 1.5 5.66667 1.5H12.3333C13.4384 1.5 14.4982 1.93899 15.2796 2.72039C16.061 3.50179 16.5 4.5616 16.5 5.66667Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.2 13V10.4003M8.2 10.4003V7.40056M8.2 10.4003C8.2 7.40056 13 7.40056 13 10.4003V13M5 5.0088L5.008 5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_2298_264">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )}
    {name === 'instagram' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_1_2098)">
            <path d="M12.75 1.5H5.25C3.17893 1.5 1.5 3.17893 1.5 5.25V12.75C1.5 14.8211 3.17893 16.5 5.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V5.25C16.5 3.17893 14.8211 1.5 12.75 1.5Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8.52751C12.0926 9.1517 11.986 9.78918 11.6953 10.3493C11.4047 10.9094 10.9449 11.3636 10.3812 11.6473C9.8176 11.931 9.17886 12.0297 8.55586 11.9295C7.93287 11.8292 7.35734 11.5351 6.91115 11.0889C6.46496 10.6427 6.17082 10.0672 6.07058 9.44417C5.97033 8.82118 6.06907 8.18243 6.35277 7.61879C6.63647 7.05515 7.09066 6.59532 7.65076 6.30469C8.21086 6.01407 8.84834 5.90745 9.47252 6.00001C10.1092 6.09443 10.6987 6.39111 11.1538 6.84624C11.6089 7.30137 11.9056 7.89082 12 8.52751Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.125 4.875H13.1325" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_2098">
                <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )}
    {name === 'facebook' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M13.5 1.5H11.25C10.2554 1.5 9.30161 1.89509 8.59835 2.59835C7.89509 3.30161 7.5 4.25544 7.5 5.25V7.5H5.25V10.5H7.5V16.5H10.5V10.5H12.75L13.5 7.5H10.5V5.25C10.5 5.05109 10.579 4.86032 10.7197 4.71967C10.8603 4.57902 11.0511 4.5 11.25 4.5H13.5V1.5Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )}
    </>
);