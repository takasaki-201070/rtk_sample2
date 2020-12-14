import React from "react";

import { AppBar, Toolbar, Box } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  headerroot: {
    gridArea: "header",
  },
  appBar: {
    backgroundColor: "#009CFF",
    color: "white",
    zIndex: theme.zIndex.drawer + 1,
  },
  box: {
    flexGrow: 1,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerroot}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Box className={classes.box} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
