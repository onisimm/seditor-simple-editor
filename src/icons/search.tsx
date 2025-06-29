import { IconProps } from '../types/icon';
import { StyledSVG } from './styled-svg';

export default function SearchIcon({
  size = 24,
  color = '#fafafa',
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill={color}
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9c-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8zm6.31 16.9c1.33-2.11.69-4.9-1.4-6.22c-2.11-1.33-4.91-.68-6.22 1.4c-1.34 2.11-.69 4.89 1.4 6.22c1.46.93 3.32.93 4.79.02L22 23.39L23.39 22zm-3.81.1a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5"></path>
    </svg>
  );
}
