import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SupportedDictionaries } from "../../constants";
import { useAppSelector } from "../../store/hooks";
// import { supportedDictionaries } from "../../store/slices/wordSlice";
import DictionaryPanel from "./DictionaryPanel";

interface WordBoardProps {
  word: string;
}

interface ScreenshotStatus {
  name: string;
  loading: boolean;
  notFound: boolean;
  error?: string;
}

const WordBoard = (props: WordBoardProps) => {
  const dictionaryList = SupportedDictionaries;
  const [screenshotsStatus, setScreenshotsStatus] = useState<
    ScreenshotStatus[]
  >(
    dictionaryList.map((dict) => ({
      name: dict,
      loading: true,
      notFound: false,
      error: "Fetching",
    }))
  );

  useEffect(() => {
    // const setInitialStatus = async () => {
    //   setScreenshotsStatus(
    //     dictionaryList.map((dict) => ({
    //       name: dict,
    //       loading: true,
    //       notFound: false,
    //       error: "Fetching",
    //     }))
    //   );
    // };
    const requestScreenShots = async () => {
      console.log(dictionaryList);
      dictionaryList.forEach(async (dictName) => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_HOST}/api/words/${props.word}/${dictName}`
        );

        let newScreenshotsStatus = [...screenshotsStatus];
        const matchedDict = newScreenshotsStatus.filter(
          (dict) => dict.name === dictName
        )[0];
        console.log(newScreenshotsStatus);
        if (!data.exist && !data.create) {
          matchedDict.loading = false;
          matchedDict.notFound = true;
          matchedDict.error = "Result not found";
        } else if (data.exist) {
          matchedDict.loading = false;
        } else if (data.create) {
          matchedDict.loading = false;
        }
        console.log(newScreenshotsStatus);
        setScreenshotsStatus(newScreenshotsStatus);
      });
    };
    // setInitialStatus();
    requestScreenShots();
  }, []);
  // const [myTasks, moveMyTask] = useState(props.tasks);

  return (
    <Grid container spacing={2}>
      {/* <div>Word Board</div> */}
      {screenshotsStatus.map((status, i) => {
        return (
          <Grid item key={i}>
            <DictionaryPanel
              notFound={status.notFound}
              loading={status.loading}
              name={status.name}
              imageUrl={`${process.env.REACT_APP_API_HOST}/screenshots/${status.name}_${props.word}.png`}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WordBoard;
