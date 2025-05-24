import "styled-components";
import type { fonts, colors, gradients } from "@/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: typeof fonts;
    colors: typeof colors;
    gradients: typeof gradients;
  }
}
