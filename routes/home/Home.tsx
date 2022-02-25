/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { Box, Container, Typography } from "@material-ui/core";
import * as React from "react";
import { useLoginDialog, useNavigate } from "../../hooks";
import Graph from "./components/graph";
import type { homeQueryResponse as Props } from "./__generated__/homeQuery.graphql";

export default function Home(props: Props): JSX.Element {
  const { me } = props;
  const loginDialog = useLoginDialog();
  const navigate = useNavigate();

  function signIn(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    loginDialog.show();
  }

  return (
    <Box>
      <Container>
        <Typography sx={{ mb: 2 }} variant="h1" align="center">
          Python Skill Cluster DNA
        </Typography>
        <Typography sx={{ mb: 4 }} variant="h3" align="center">
          General-purpose Programming Language
        </Typography>
        <Graph />
      </Container>
    </Box>
  );
}
