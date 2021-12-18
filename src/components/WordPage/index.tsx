import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import WordBoard from "./WordBoard";
import { searchWord } from "../../store/slices/wordSlice";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const WordPage = () => {
  let params = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (typeof params.word === "string") {
      dispatch(searchWord(params.word));
    }
  }, []);

  return (
    <Grid
      sx={{ marginTop: 2 }}
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item sx={{ width: "90%" }}>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center">
              {params.word}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        {typeof params.word === "string" ? (
          <WordBoard word={params.word} />
        ) : (
          <div>Error</div>
        )}
      </Grid>
    </Grid>
  );
};

export default WordPage;
