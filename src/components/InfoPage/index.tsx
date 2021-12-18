import { Card, CardContent, Grid, Typography } from "@mui/material";

const InfoPage = () => {
  return (
    <Grid container sx={{ marginTop: 2 }} spacing={2}>
      <Grid item sx={{ marginLeft: 2 }} width="80%">
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom component="div">
              Purpose
            </Typography>
            <Typography fontSize={20} gutterBottom>
              This is a simple web application, which try to unify the searching
              result of dictionary sites with different perspectives
              (definition, translation, usage, examples), to facilitate the
              learning process of a new vocabulary.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sx={{ marginLeft: 2 }} width="80%">
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom component="div">
              Planning Functionalities
            </Typography>
            <Typography fontSize={20} gutterBottom>
              <ul>
                <li>User system</li>
                <li>Allow to customize the dictionary list</li>
                <li>Manage a vocabulary list</li>
                <li>Cache drag/size status of a vocabulary</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sx={{ marginLeft: 2 }} width="80%">
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom component="div">
              Technologies
            </Typography>
            <Typography fontSize={20} gutterBottom>
              This website is built primary with React, Express, Typescript, and
              support libraries like Puppeteer, MaterialUI, React-Draggable
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sx={{ marginLeft: 2 }} width="80%">
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom component="div">
              Feedback
            </Typography>
            <Typography fontSize={20} gutterBottom>
              If you have any feedbacks or ideas about this simple application,
              you can contact through{" "}
              <a href="mailto: hoshukwan1@gmail.com">Email</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InfoPage;
