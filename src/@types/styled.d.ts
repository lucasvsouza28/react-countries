import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      body: string,
      element: string;
    },
    text: {
      black: string;
    }
  }
}
