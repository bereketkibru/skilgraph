/* SPDX-FileCopyrightText: 2014-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { useState } from "react";
import Graph from "./graph";
import Skills from "./skills";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);
export default function App() {
  const [selected, setSelected] = useState({ id: "Python" });
  const x = [
    {
      id: "Java",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Programming Language",
    },
    {
      id: "SQL",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Query Language",
    },
    {
      id: "Cloud",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Cloud infrastructure",
    },
    {
      id: "Linux",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Operating System",
    },
    {
      id: "AWS",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Cloud platforms",
    },
    {
      id: "Continuous Integration",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Continuous Integration",
    },
    {
      id: "Docker",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Containerization software",
    },
    {
      id: "Git",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Version Control Software",
    },
    {
      id: "Azure",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Cloud Computing",
    },
    {
      id: "Business Intelligence",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Data Management",
    },
    {
      id: "C#",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Multi-paradigm Programming Language",
    },
    {
      id: "DevOps",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Information Technology Management",
    },
    {
      id: "C++",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Programming Language",
    },
    {
      id: "CD",
      group: 1,
      selected: 0,
      connection: 5,
      title: "Software Development Process",
    },
    {
      id: "Python",
      group: 1,
      selected: 0,
      connection: 5,
      title: "General-purpose Programming Language",
    },
  ];
  const nodeVal = x.map((item) =>
    item.id === selected.id
      ? { ...item, selected: 1 }
      : { ...item, selected: 0 }
  );
  const myData = {
    nodes: nodeVal,
    links: [
      { source: "Python", target: "Java", value: 2 },
      { source: "Python", target: "SQL", value: 2 },
      { source: "Python", target: "Cloud", value: 2 },
      { source: "Python", target: "Linux", value: 2 },
      { source: "Python", target: "AWS", value: 2 },
      { source: "Java", target: "AWS", value: 1 },
      { source: "Java", target: "Cloud", value: 1 },
      { source: "Java", target: "Continuous Integration", value: 1 },
      { source: "Java", target: "Docker", value: 1 },
      { source: "Java", target: "Git", value: 1 },
      { source: "SQL", target: "AWS", value: 1 },
      { source: "SQL", target: "Azure", value: 1 },
      { source: "SQL", target: "Business Intelligence", value: 1 },
      { source: "SQL", target: "C#", value: 1 },
      { source: "SQL", target: "Cloud", value: 1 },
      { source: "Cloud", target: "AWS", value: 1 },
      { source: "Cloud", target: "Azure", value: 1 },
      { source: "Cloud", target: "Continuous Integration", value: 1 },
      { source: "Cloud", target: "DevOps", value: 1 },
      { source: "Cloud", target: "Docker", value: 1 },
      { source: "Linux", target: "C++", value: 1 },
      { source: "Linux", target: "Cloud", value: 1 },
      { source: "Linux", target: "Docker", value: 1 },
      { source: "Linux", target: "Git", value: 1 },
      { source: "Linux", target: "Java", value: 1 },
      { source: "AWS", target: "Azure", value: 1 },
      { source: "AWS", target: "CD", value: 1 },
      { source: "AWS", target: "Continuous Integration", value: 1 },
      { source: "AWS", target: "DevOps", value: 1 },
    ],
  };

  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            {selected.id} Skill Cluster DNA
          </Typography>
          <Skills selected={selected} setSelected={setSelected} />
        </Toolbar>
      </AppBar>
      <Box m={1} p={4}>
        <Graph data={myData} />
      </Box>
    </Box>
  );
}
