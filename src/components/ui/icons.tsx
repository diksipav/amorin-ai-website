import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const EmailIcon = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WebsiteIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 64 64"
      className={className}
    >
      <path d="M53.85 47.85A27 27 0 0 1 24 57.8V56l3-3v-4l4-4v-3l4 4h5l2-2h8z" />
      <path d="M42 20.59v2.56L38.07 27H31l-5.36 5.26L31 37.51v5.06L27.44 39h-4.58L16 32.11V24.2L11.8 20h-4A27 27 0 0 1 32 5a26.55 26.55 0 0 1 7.06.94L36 9h-6v4l4 4h4.33z" />
      <path
        strokeWidth="2"
        stroke="currentColor"
        d="M32 60a28 28 0 1 1 28-28 28 28 0 0 1-28 28zm0-54a26 26 0 1 0 26 26A26 26 0 0 0 32 6z"
      />
    </svg>
  );
};

export const InstagramIcon = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        ry="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="17.5"
        y1="6.5"
        x2="17.51"
        y2="6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const LinkedinIcon = ({ className = "", size = 64 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PhoneIcon: React.FC<IconProps> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1469 21.5902 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9454 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09456 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28262 3.30351 2.17028C3.55722 2.05794 3.83156 2.00026 4.10999 2H7.10999C7.59522 1.99522 8.06579 2.16708 8.43373 2.48353C8.80168 2.79999 9.042 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97348 7.27675 9.89381 7.65376C9.81413 8.03078 9.62877 8.38356 9.35999 8.67L8.08999 9.94C9.51355 12.5815 11.9385 15.0065 14.58 16.43L15.85 15.16C16.1364 14.8912 16.4892 14.7058 16.8662 14.6262C17.2432 14.5465 17.6321 14.5754 17.99 14.71C18.8973 15.0486 19.8399 15.2834 20.8 15.41C21.2847 15.4785 21.7284 15.7222 22.0464 16.0945C22.3644 16.4668 22.5334 16.9407 22.52 17.43L22 16.92Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
