import { Box, Card, CardContent, Container, Grid } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useEffect, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      height: "95%",
    },
  })
);

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
                  graphData={data}
                  nodeLabel={"title"}
                  nodeAutoColorBy="selected"
                  width={500}
                  height={500}
                  minZoom={2.5}
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
