import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
      text: "#fff",
    },
    secondary: {
      main: deepOrange[500],
    },
  },
});

export default theme;
