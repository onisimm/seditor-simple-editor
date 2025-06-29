import { IconProps } from '../types/icon';
import { StyledSVG } from './styled-svg';

export default function FilesIcon({
  size = 28,
  color = '#fafafa',
  props,
}: IconProps) {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      color={color}
      {...props}>
      <path
        fill={color}
        d="m212.24 67.76l-40-40A6 6 0 0 0 168 26H88a14 14 0 0 0-14 14v18H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V72a6 6 0 0 0-1.76-4.24M170 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h77.51L170 106.49Zm32-32a2 2 0 0 1-2 2h-18v-82a6 6 0 0 0-1.76-4.24l-40-40A6 6 0 0 0 136 58H86V40a2 2 0 0 1 2-2h77.51L202 74.49Zm-60-32a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6"></path>
    </StyledSVG>
  );
}
