import { Box, Card, CardContent, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";

const myData = {
  nodes: [
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
      selected: 1,
      connection: 5,
      title: "General-purpose Programming Language",
    },
  ],
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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 2,
    height: "95%",
  },
});
export default function Graph({ data }) {
  const forceRef = useRef();
  const classes = useStyles();

  useEffect(() => {}, []);
  return (
    <Container>
      <Grid container spacing={15}>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ForceGraph2D
                  graphData={myData}
                  width="500"
                  height="500"
                  minZoom={2}
                  nodeAutoColorBy="selected"
                  nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.id;
                    const fontSize = 20 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    const textWidth = ctx.measureText(label).width;
                    const bckgDimensions = [textWidth, fontSize].map(
                      (n) => n + fontSize * 0.2
                    ); // some padding
                    ctx.textAlign = "top";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = node.color;
                    ctx.fillText(label, node.x, node.y);

                    node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
