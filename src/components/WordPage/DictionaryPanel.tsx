import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createTheme,
  Grid,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../constants";
import Draggable from "react-draggable";

interface DictionaryPanelProps {
  loading: boolean;
  notFound: boolean;
  name: string;
  imageUrl: string;
}

const DictionaryPanel = (props: DictionaryPanelProps) => {
  const [imgWidth, setImgWidth] = useState<number>(300);
  const [imgHeight, setImgHeight] = useState<number>(500);
  const onImgLoad = ({ target: img }) => {
    setImgWidth(img.naturalWidth);
    setImgHeight(img.naturalHeight);
  };
  return (
    <Grid
      sx={{
        width: imgWidth + 50,
      }}
    >
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{ fontWeight: "bold" }}>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            sx={{
              height:
                props.loading || props.notFound
                  ? 50
                  : Math.min(imgHeight + 20, 500),
            }}
          >
            {props.loading ? (
              <Typography>Loading...</Typography>
            ) : props.notFound ? (
              <Typography>Not Found.</Typography>
            ) : (
              <Stack direction="row">
                <div
                  style={{
                    height: Math.min(imgHeight + 20, 500),
                    overflow: "auto",
                  }}
                >
                  <img
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    onLoad={onImgLoad}
                    src={props.imageUrl}
                    alt={props.name}
                  />
                </div>
              </Stack>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

const DraggablePanel = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable onDrag={(e, data) => trackPos(data)}>
      <div>
        <DictionaryPanel {...props} />
      </div>
    </Draggable>
  );
};

export default DraggablePanel;
