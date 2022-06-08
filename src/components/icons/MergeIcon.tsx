import * as React from 'react';
import { IconProps } from './types';

const MergeIcon: React.FC<IconProps> = ({ width = 15, height = 16, color = '#272B33' }) => (
  <svg width={width} height={height} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.29927 3.07296L8.69081 0.676963C8.72571 0.64191 8.77021 0.618027 8.81868 0.608344C8.86714 0.598661 8.91738 0.603612 8.96303 0.622571C9.00869 0.64153 9.04769 0.673642 9.0751 0.714836C9.10252 0.756031 9.1171 0.804453 9.11701 0.853963V5.64596C9.1171 5.69547 9.10252 5.7439 9.0751 5.78509C9.04769 5.82628 9.00869 5.8584 8.96303 5.87736C8.91738 5.89631 8.86714 5.90127 8.81868 5.89158C8.77021 5.8819 8.72571 5.85802 8.69081 5.82296L6.29927 3.42696C6.27603 3.40374 6.2576 3.37615 6.24502 3.34578C6.23244 3.31541 6.22596 3.28285 6.22596 3.24996C6.22596 3.21708 6.23244 3.18452 6.24502 3.15415C6.2576 3.12377 6.27603 3.09619 6.29927 3.07296ZM2.87865 2.49996C2.68011 2.49996 2.4897 2.57898 2.34931 2.71963C2.20892 2.86029 2.13005 3.05105 2.13005 3.24996C2.13005 3.44888 2.20892 3.63964 2.34931 3.78029C2.4897 3.92095 2.68011 3.99996 2.87865 3.99996C3.07719 3.99996 3.2676 3.92095 3.40799 3.78029C3.54838 3.63964 3.62725 3.44888 3.62725 3.24996C3.62725 3.05105 3.54838 2.86029 3.40799 2.71963C3.2676 2.57898 3.07719 2.49996 2.87865 2.49996ZM0.632839 3.24996C0.632963 2.83749 0.746255 2.433 0.960333 2.08068C1.17441 1.72836 1.48104 1.44177 1.8467 1.25224C2.21236 1.06271 2.62299 0.977534 3.03371 1.00601C3.44443 1.03449 3.83943 1.17553 4.17555 1.41372C4.51166 1.65191 4.77596 1.97808 4.93955 2.35659C5.10314 2.7351 5.15974 3.15138 5.10314 3.55993C5.04655 3.96848 4.87895 4.35359 4.61866 4.67316C4.35837 4.99273 4.01541 5.23447 3.62725 5.37196V10.628C4.12701 10.8049 4.54824 11.1531 4.81649 11.6111C5.08473 12.0692 5.18272 12.6074 5.09313 13.1308C5.00354 13.6542 4.73214 14.129 4.32691 14.4713C3.92167 14.8136 3.40869 15.0013 2.87865 15.0013C2.34861 15.0013 1.83563 14.8136 1.43039 14.4713C1.02516 14.129 0.753758 13.6542 0.664168 13.1308C0.574578 12.6074 0.672566 12.0692 0.940812 11.6111C1.20906 11.1531 1.63029 10.8049 2.13005 10.628V5.37196C1.69208 5.21683 1.3129 4.92944 1.04476 4.5494C0.776613 4.16936 0.632698 3.71537 0.632839 3.24996ZM10.1152 2.49996H9.11701V3.99996H10.1152C10.3799 3.99996 10.6338 4.10532 10.8209 4.29286C11.0081 4.48039 11.1133 4.73475 11.1133 4.99996V10.628C10.6135 10.8049 10.1923 11.1531 9.92406 11.6111C9.65581 12.0692 9.55782 12.6074 9.64741 13.1308C9.737 13.6542 10.0084 14.129 10.4136 14.4713C10.8189 14.8136 11.3319 15.0013 11.8619 15.0013C12.3919 15.0013 12.9049 14.8136 13.3102 14.4713C13.7154 14.129 13.9868 13.6542 14.0764 13.1308C14.166 12.6074 14.068 12.0692 13.7997 11.6111C13.5315 11.1531 13.1103 10.8049 12.6105 10.628V4.99996C12.6105 4.33692 12.3476 3.70104 11.8796 3.2322C11.4117 2.76336 10.777 2.49996 10.1152 2.49996ZM11.1133 12.75C11.1133 12.5511 11.1922 12.3603 11.3326 12.2196C11.4729 12.079 11.6634 12 11.8619 12C12.0604 12 12.2508 12.079 12.3912 12.2196C12.5316 12.3603 12.6105 12.5511 12.6105 12.75C12.6105 12.9489 12.5316 13.1396 12.3912 13.2803C12.2508 13.4209 12.0604 13.5 11.8619 13.5C11.6634 13.5 11.4729 13.4209 11.3326 13.2803C11.1922 13.1396 11.1133 12.9489 11.1133 12.75ZM2.87865 12C2.68011 12 2.4897 12.079 2.34931 12.2196C2.20892 12.3603 2.13005 12.5511 2.13005 12.75C2.13005 12.9489 2.20892 13.1396 2.34931 13.2803C2.4897 13.4209 2.68011 13.5 2.87865 13.5C3.07719 13.5 3.2676 13.4209 3.40799 13.2803C3.54838 13.1396 3.62725 12.9489 3.62725 12.75C3.62725 12.5511 3.54838 12.3603 3.40799 12.2196C3.2676 12.079 3.07719 12 2.87865 12Z"
      fill={color}
    />
  </svg>
);

export { MergeIcon };
