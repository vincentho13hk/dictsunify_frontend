import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";

interface Dictionary {
  name: string;
  url: string;
}

const dictionaries: Dictionary[] = [
  {
    name: "Macmillan Dictionary",
    url: "https://www.macmillandictionary.com/",
  },
  {
    name: "Wordreference enzh",
    url: "https://www.wordreference.com/enzh/",
  },
  {
    name: "Wordreference English Usage",
    url: "https://www.wordreference.com/EnglishUsage/",
  },
  {
    name: "Wordreference English Definition",
    url: "https://www.wordreference.com/definition/",
  },
  {
    name: "Vocabulary.com",
    url: "https://www.vocabulary.com/dictionary/",
  },
  {
    name: "Etymonline",
    url: "https://www.etymonline.com/",
  },
];

const DictionariesPage = () => {
  return (
    <>
      <Box margin={3}>
        <Typography variant="h5">Current Supported Dictionaries</Typography>
      </Box>
      <Grid container spacing={2}>
        {dictionaries.map((dictionary, i) => {
          return (
            <Grid item xs={6} key={i} sx={{ marginLeft: 3 }}>
              <Card>
                <CardContent>
                  <Typography fontWeight="bold">{dictionary.name}</Typography>
                  <Link rel="noopener" href={dictionary.url} target="_blank">
                    {dictionary.url}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default DictionariesPage;
