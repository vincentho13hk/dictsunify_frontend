import { Box, FormControl, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { searchWord } from "../../store/slices/wordSlice";

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [word, setWord] = useState<String>("");
  const handleChange = (e) => {
    setWord(e.target.value);
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const seacrhWord = e.target.value;
      dispatch(searchWord(seacrhWord));
      navigate(`/words/${seacrhWord}`);
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ marginTop: 3 }}
    >
      <Grid item>
        <Box>
          <TextField
            onKeyPress={handleSearch}
            value={word}
            onChange={handleChange}
            fullWidth
            label="Search a word..."
            id="search"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SearchPage;
