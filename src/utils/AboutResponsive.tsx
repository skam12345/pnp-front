import {
  EXTRA_LARGE_PHONE,
  LARGE_PHONE,
  MEDIUM_PHONE,
  SMALL_PHONE,
} from '../config/constant/Device';

export const decreaseRepetitiveMediaQuery = (
  devices: string[],
  designValues: string[],
) => {
  const breakpoints: { [key: string]: string } = {
    small: `@media (max-width: ${SMALL_PHONE}px)`,
    medium: `@media (min-width: ${MEDIUM_PHONE[0]}px) and (max-width: ${MEDIUM_PHONE[1]}px)`,
    large: `@media (min-width: ${LARGE_PHONE[0]}px) and (max-width: ${LARGE_PHONE[1]}px)`,
    extraLarge: `@media (min-width: ${EXTRA_LARGE_PHONE[0]}px) and (max-width: ${EXTRA_LARGE_PHONE[1]}px)`,
  };

  return devices.reduce((acc, device, index) => {
    const key = device.toLowerCase();
    if (breakpoints[key]) {
      acc += `${breakpoints[key]} {
          ${designValues[index]}
        }`;
    }
    return acc;
  }, '');
};
