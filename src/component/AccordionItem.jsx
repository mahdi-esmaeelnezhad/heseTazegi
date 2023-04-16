import React from 'react';
import {AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "../chevron-down.svg";
import classes from "../App.module.scss";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={classes.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={classes.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${classes.itemBtn} ${isEnter && classes.itemBtnExpanded}`
    }}
    contentProps={{ className: classes.itemContent }}
    panelProps={{ className: classes.itemPanel }}
  />
);

export default AccordionItem;
