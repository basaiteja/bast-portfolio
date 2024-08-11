import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';

export default function BaseLayout() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
  const refHome = useScrollObserver(setActive);
  const refAbout = useScrollObserver(setActive);
  const refPortfolio = useScrollObserver(setActive);

  return (
    <Box className={Style.light}>
      <Grid container display={'flex'} minHeight={'100vh'}>
        <Grid item className="hidden md:block">
          {/* <Navbar active={active} setActive={setActive} /> */}
        </Grid>
        <Grid item flexGrow={1}>
          {singlePage ? <SinglePageRoutes refs={{ refHome, refAbout, refPortfolio }} /> : <MultiPageRoutes />}
        </Grid>
      </Grid>
    </Box>
  );
}
