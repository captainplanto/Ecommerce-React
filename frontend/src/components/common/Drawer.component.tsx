import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
//import iconHamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import { ReactNode, FC } from "react";
import { width } from "@mui/system";
//import CartBadgeComponent from "./CartBadge.component";
type Anchor = "left" | "right";

interface IDrawer {
  children: ReactNode;
  style?: object;
 
}

const DrawerComponent: FC<IDrawer> = ({ children, style, ...props }) => {
  const [state, setState] = React.useState<boolean>(false);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
      <React.Fragment key={"left"}  >
        <img
          src={"/assets/shared/tablet/icon-hamburger.svg"}
          alt="Hamburger"
          onClick={toggleDrawer("left", true)}
        />


        <SwipeableDrawer
          anchor={"left"}
          open={state}
          onClose={toggleDrawer("left", false)}
        
          onOpen={toggleDrawer("left", true)}
        >
          {children}
        </SwipeableDrawer>
      </React.Fragment>
    
  );
};

export default DrawerComponent;
