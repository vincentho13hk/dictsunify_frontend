import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DictionariesPage from "./components/DictionariesPage";
import InfoPage from "./components/InfoPage";
import NotFoundPage from "./components/NotFoundPage";
import SearchPage from "./components/SearchPage";
import WordPage from "./components/WordPage";
import { useAppDispatch } from "./store/hooks";
import { updateDictionaryList } from "./store/slices/wordSlice";

// const getDictionaryList = async () => {
//   const dictionaryList = localStorage.getItem("dictionary_list");
//   if (!dictionaryList) {
//     const { data } = await axios.get(
//       `${process.env.REACT_APP_API_HOST}/api/dictionaries/list`
//     );
//     const fetchedList = data.supportedDictionaries.join("|");
//     localStorage.setItem("dictionary_list", fetchedList);
//     return data.supportedDictionaries;
//   } else {
//     return dictionaryList.split("|");
//   }
// };

const AppRoutes = () => {
  //   const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     async function setDictionaryList() {
  //       let dictList = await getDictionaryList();
  //       console.log(dictList);
  //       dispatch(updateDictionaryList(dictList));
  //     }
  //     setDictionaryList();
  //   }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="words">
          <Route path=":word" element={<WordPage />} />
        </Route>
        <Route path="/info" element={<InfoPage />} />
        <Route path="/dictionaries" element={<DictionariesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
