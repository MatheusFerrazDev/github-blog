import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}

declare module '@phosphor-icons/react'{
    export const PhLink: React.FC<React.SVGProps<SVGSVGElement>>
}