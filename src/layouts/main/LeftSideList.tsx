import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import {
  reactlinkitem,
  webapilinkitem,
  ReduxLinkitem,
  MaterialListitem,
  LibListitem,
} from "../../views/Router";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "0",
      padding: "0",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 36,
    "&$expanded": {
      minHeight: 36,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    margin: "0",
    padding: "0",
    minHeight: 36,
  },
}))(MuiAccordionDetails);

const leftSideListAreaWidth = "250px";

const useStyles = makeStyles((theme: Theme) => ({
  leftroot: {
    gridArea: "left",
  },
  home: {
    marginTop: "0",
    marginBottom: "0",
    marginRight: "0",
    padding: "0",
  },
  drawer: {
    width: leftSideListAreaWidth,
    // flexShrink: 0,
  },
  drawerPaper: {
    width: leftSideListAreaWidth,
    backgroundColor: "#fff",
  },
  toolbar: theme.mixins.toolbar,
  link: {
    color: "inherit",
    textDecorationLine: "none",
  },
  listItem: {
    width: "100%",
    padding: "0",
    paddingLeft: "8px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "100%",
    flexShrink: 0,
  },
}));

const LeftSideList = () => {
  const classes = useStyles();

  const [menuid, setMeueid] = useState(0);
  const [expanded, setExpanded] = useState(0);

  return (
    <div className={classes.leftroot}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List component="nav">
          <Link className={classes.link} to="/" key="home" replace>
            <ListItem
              selected={menuid === 0}
              className={classes.listItem}
              onClick={() => {
                setMeueid(0);
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="home" />
            </ListItem>
          </Link>
        </List>

        <Accordion
          onChange={() => {
            setExpanded(expanded === 1 ? 0 : 1);
          }}
          expanded={expanded === 1}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>React + Hooks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listItem}>
              {reactlinkitem.map((linkitem) => (
                <Link
                  className={classes.link}
                  to={`/${linkitem.key}`}
                  key={linkitem.id}
                  replace
                >
                  <ListItem
                    className={classes.listItem}
                    selected={menuid === linkitem.menu}
                    key={linkitem.id}
                    onClick={() => {
                      setMeueid(linkitem.menu);
                    }}
                  >
                    <ListItemText primary={linkitem.name} key={linkitem.id} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          onChange={() => {
            setExpanded(expanded === 2 ? 0 : 2);
          }}
          expanded={expanded === 2}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>WEB API</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listItem}>
              {webapilinkitem.map((linkitem) => (
                <Link
                  className={classes.link}
                  to={`/${linkitem.key}`}
                  key={linkitem.id}
                  replace
                >
                  <ListItem
                    className={classes.listItem}
                    selected={menuid === linkitem.menu}
                    key={linkitem.id}
                    onClick={() => {
                      setMeueid(linkitem.menu);
                    }}
                  >
                    <ListItemText primary={linkitem.name} key={linkitem.id} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          onChange={() => {
            setExpanded(expanded === 3 ? 0 : 3);
          }}
          expanded={expanded === 3}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>ReduxToolKit</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listItem}>
              {ReduxLinkitem.map((linkitem) => (
                <Link
                  className={classes.link}
                  to={`/${linkitem.key}`}
                  key={linkitem.id}
                  replace
                >
                  <ListItem
                    className={classes.listItem}
                    selected={menuid === linkitem.menu}
                    key={linkitem.id}
                    onClick={() => {
                      setMeueid(linkitem.menu);
                    }}
                  >
                    <ListItemText primary={linkitem.name} key={linkitem.id} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          onChange={() => {
            setExpanded(expanded === 4 ? 0 : 4);
          }}
          expanded={expanded === 4}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Material-UI</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listItem}>
              {MaterialListitem.map((linkitem) => (
                <Link
                  className={classes.link}
                  to={`/${linkitem.key}`}
                  key={linkitem.id}
                  replace
                >
                  <ListItem
                    className={classes.listItem}
                    selected={menuid === linkitem.menu}
                    key={linkitem.id}
                    onClick={() => {
                      setMeueid(linkitem.menu);
                    }}
                  >
                    <ListItemText primary={linkitem.name} key={linkitem.id} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          onChange={() => {
            setExpanded(expanded === 5 ? 0 : 5);
          }}
          expanded={expanded === 5}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>ライブラリ</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.listItem}>
              {LibListitem.map((linkitem) => (
                <Link
                  className={classes.link}
                  to={`/${linkitem.key}`}
                  key={linkitem.id}
                  replace
                >
                  <ListItem
                    className={classes.listItem}
                    selected={menuid === linkitem.menu}
                    key={linkitem.id}
                    onClick={() => {
                      setMeueid(linkitem.menu);
                    }}
                  >
                    <ListItemText primary={linkitem.name} key={linkitem.id} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Drawer>
    </div>
  );
};

export default LeftSideList;
