import React from "react";


export const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/other-tools', title: 'Other Tools' },
    { href: '/privacy-policy', title: 'Privacy Policy' },
    { href: '/contact-us', title: 'Contact us' },
    {
      href: '', title: 'Language',
      children: [
        { href: '/', title: 'English' },
        { href: '/br', title: 'Português (BR)' },
        { href: '/es', title: 'Español (ES)' },
        { href: '/id', title: 'Indonesia (ID)' },
      ]
    },
]

//ArrowDownIcon
export const ArrowDownIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[22px] w-[22px]"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M10 15a.75.75 0 0 1-.53-.22l-4.25-4a.75.75 0 1 1 1.06-1.06L10 13.94l3.72-3.72a.75.75 0 0 1 1.06 1.06l-4.25 4a.75.75 0 0 1-.53.22z"
            clipRule="evenodd"
        />
    </svg>
);

//ArrowUpIcon
export const ArrowUpIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M10 5a.75.75 0 0 1 .53.22l4.25 4a.75.75 0 1 1-1.06 1.06L10 6.06 6.28 9.78a.75.75 0 0 1-1.06-1.06l4.25-4A.75.75 0 0 1 10 5z"
            clipRule="evenodd"
        />
    </svg>
);

