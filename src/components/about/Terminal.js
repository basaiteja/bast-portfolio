import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
  const { text } = props;

  return (
    <Box component={'section'} className={Style.ajith}>
      <Box className={Style.header}>
        <i className={classNames(iconClass, Style.red)} />
        <i className={classNames(iconClass, Style.amber)} />
        <i className={classNames(iconClass, Style.green)} />
      </Box>
      <Box className={Style.content}>
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
