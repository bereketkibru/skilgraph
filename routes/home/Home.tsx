/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { Box, Button, Container, Typography } from "@material-ui/core";
import { Api, GitHub } from "@material-ui/icons";
import ForceGraph2D from 'react-force-graph-2d';
import * as React from "react";
import { config } from "../../core";
import { useLoginDialog, useNavigate } from "../../hooks";
import type { homeQueryResponse as Props } from "./__generated__/homeQuery.graphql";

const myData = {
  "nodes": [
    {
      "id": "Java",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Programming Language"
    },
    {
      "id": "SQL",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Query Language"
    },
    {
      "id": "Cloud",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Cloud infrastructure"
    },
    {
      "id": "Linux",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Operating System"
    },
    {
      "id": "AWS",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Cloud platforms"
    },
    {
      "id": "Continuous Integration",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Continuous Integration"
    },
    {
      "id": "Docker",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Containerization software"
    },
    {
      "id": "Git",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Version Control Software"
    },
    {
      "id": "Azure",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Cloud Computing"
    },
    {
      "id": "Business Intelligence",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Data Management"
    },
    {
      "id": "C#",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Multi-paradigm Programming Language"
    },
    {
      "id": "DevOps",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Information Technology Management"
    },
    {
      "id": "C++",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Programming Language"
    },
    {
      "id": "CD",
      "group": 1,
      "selected": 0,
      "connection": 5,
      "title": "Software Development Process"
    },
    {
      "id": "Python",
      "group": 1,
      "selected": 1,
      "connection": 5,
      "title": "General-purpose Programming Language"
    }
  ],
  "links": [
    { "source": "Python", "target": "Java", "value": 2 },
    { "source": "Python", "target": "SQL", "value": 2 },
    { "source": "Python", "target": "Cloud", "value": 2 },
    { "source": "Python", "target": "Linux", "value": 2 },
    { "source": "Python", "target": "AWS", "value": 2 },
    { "source": "Java", "target": "AWS", "value": 1 },
    { "source": "Java", "target": "Cloud", "value": 1 },
    { "source": "Java", "target": "Continuous Integration", "value": 1 },
    { "source": "Java", "target": "Docker", "value": 1 },
    { "source": "Java", "target": "Git", "value": 1 },
    { "source": "SQL", "target": "AWS", "value": 1 },
    { "source": "SQL", "target": "Azure", "value": 1 },
    { "source": "SQL", "target": "Business Intelligence", "value": 1 },
    { "source": "SQL", "target": "C#", "value": 1 },
    { "source": "SQL", "target": "Cloud", "value": 1 },
    { "source": "Cloud", "target": "AWS", "value": 1 },
    { "source": "Cloud", "target": "Azure", "value": 1 },
    { "source": "Cloud", "target": "Continuous Integration", "value": 1 },
    { "source": "Cloud", "target": "DevOps", "value": 1 },
    { "source": "Cloud", "target": "Docker", "value": 1 },
    { "source": "Linux", "target": "C++", "value": 1 },
    { "source": "Linux", "target": "Cloud", "value": 1 },
    { "source": "Linux", "target": "Docker", "value": 1 },
    { "source": "Linux", "target": "Git", "value": 1 },
    { "source": "Linux", "target": "Java", "value": 1 },
    { "source": "AWS", "target": "Azure", "value": 1 },
    { "source": "AWS", "target": "CD", "value": 1 },
    { "source": "AWS", "target": "Continuous Integration", "value": 1 },
    { "source": "AWS", "target": "DevOps", "value": 1 }
  ]
}



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
      <Container sx={{ py: "20vh" }} maxWidth="sm">
        <Typography sx={{ mb: 2 }} variant="h1" align="center">
        Python  Skill Cluster DNA
        </Typography>
        <Typography sx={{ mb: 4 }} variant="h3" align="center">
        General-purpose Programming Language
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            ".MuiButton-root": { m: 1 },
          }}
        >
          <ForceGraph2D graphData={myData} nodeAutoColorBy="selected"
    nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 22/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding




            ctx.textAlign = 'top';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = node.color;
            ctx.fillText(label, node.x, node.y);

            node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
          }}

  />
        </Box>
      </Container>
    </Box>
  );
}
