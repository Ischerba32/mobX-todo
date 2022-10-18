import { FC } from "react";

import { Grid } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../color-mode-switcher/color-mode-switcher.component";

const Header: FC = () => {
  return (
    <Grid pt={1} templateColumns="1fr" columnGap="3">
      <ColorModeSwitcher />
    </Grid>
  );
}

export default Header;
