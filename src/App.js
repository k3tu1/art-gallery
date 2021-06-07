import { useEffect, useState } from "react";
import { Album } from "./Album";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import theme from "./theme";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { CircularProgress } from "@material-ui/core";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Footer } from "./Footer";
import Modal from "./Modal";

const SPREADSHEET_ID = "1_INaQV0DSY_40O3attFP5mjcKQ_kzBxzOQdjy79GPb8";
const CLIENT_EMAIL = "eventsheet@event-1613853599722.iam.gserviceaccount.com";
const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDrLUhpArdUzh11\ntK8tfG+ax6MgQJ2/WZ27CKJQGNDdnwoRvRVkm86aFBEr18VUP3s86oOWYiDnt1pU\nbbqYZyWHXWNpzi/+gGGJNJYwwPm9AAnUp8H0zuN4TPUaArwK2qTTQBV900QWpr6d\nIc0d1SK5OlDSnJybf7wcgmGf+Zxm7Ij7OVWQa4nZGaI6j+0ZZh3EX6+eFwWfzKTY\nlX5wNKZ/qEfAshA6JxNLFnZ9rbwJCh+urfnPfQJscI5Fjkc8uiQj/DFQImnPlTo+\nkfMpH0IHdtdofv3Cce0tCu/8Tj0ajCfdoynAgKpuVdmCognlWDV7H248W7LB+cWK\nhtG2eE1PAgMBAAECggEAB0ubUG6eI0pVjZ4yRPX0PFfvDoQSoKn2A6RL7LIoYIeb\nd1tnO3y91vfCZJrH60og143q0RJwNN/yNGZHAI1Kk71o5RJZWMrAu9HeytphpORI\nacleceqtEcFJZSoqjSelL0xwnjuchBteFF/FDiTbc+WENlRXY1d+DWBaCO1kVaj3\niOR91Qzx1zNI8HrnOBXPK58zDqADOdNmrQs1Iy5VqhQWDsCTUen5/jgcp9nyTdZy\nD3wT7uo7Xn3xFGI+zD7Ir75ukLdg1Y3aegF1ge2q6zJBdzIJFwkwEgmZR5Ab6L0R\nfVgP23E6FAOuSiqYCzhzOgwpmp+9hUt3h6WyAQN00QKBgQD6gUU+Q8SiVE10/+mX\nGJboiZM5rGmHXwUir6sbkOAcdHKT8jMFruw+53V/1qkosFnuI5KK81M0TlN+NofQ\nSxzpvm/EtgfBSMwRxYwG2HCyS/8zy/r0P/F223ZFcpLr+cJIiRgNy7MBvglrFJyA\nsRXcKccbDYSOMysWDUmKwJNQ+QKBgQDwVe+36HIoGT5/G7FUPeDOC4f/2d6fI5zB\n8ker+/snZQYWLBpLVQu/FWr1ZdcZGmNkzXNmbJNK0MITKm92ACXcxRvPjud26/DR\n2x/spObeMvIUANAO6lpLWc6tKXpoUSVDYvR7FwsrXZkUaiH3yYpyMA1x71UL/6Ki\ngT2SrS3qhwKBgCQf/kdTaIjsVVs5CIuknSadqGCZz4IZHtl4sdlA1EDmPhu9wsPg\nDOupX1V3NF/MxrtD3/8vxeD2Jq492Ood2uaOcvnQMmAaSmuJrH7UObRMp1nl4aPV\nkNHOJkkvk6Z6Fx10v8ZFiOQIbr1FdKhOYVOlprPtCB+lm2ILun5K9TOpAoGBAJRh\nmkUDQCe9njY/1LXcFkVgHTE7RBUgmZGskc9/HUrvNljOFdXYxg3NnWGw5KJdBmyf\n49WixzVzub63fmVuJfItx8PXyNRFS0NldEpYbSlWbtsmvU3YJrNK2S1T5H0vTEBU\ngfjU+1Jk0TQnap1fUxi4zjQ/vVRRGgoWnPtH7IdVAoGBALxd4x+zEbCNnFwZXqBv\nET04ONhblY9aceHdvBr49nESRw/laiWbKX2GyydxnpNw0AZ7747uLEKZpBXwIpwN\n1LgvgRakgOCUliq4lynThEiJ/m5K62ahsPRladbO4dHPV40wudzzUQ7IpS8B5lmZ\ndJNrexgibwWTTxoEi6J+r7F/\n-----END PRIVATE KEY-----\n";
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
const App = () => {
  const [data, setdata] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const onConfirm = () => setopenModal(!openModal);
  const myFun = async () => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo(); // loads document properties and worksheets
      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();

      const compileData = rows.map((row, index) => {
        return {
          Id: index + 1,
          ImageDescription: row.ImageDescription,
          ImageURL: row.ImageURL,
        };
      });
      return compileData;
    } catch (e) {
      console.error("Error: ", e);
    }
  };
  useEffect(() => {
    myFun().then((data) => {
      setdata(data);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Modal isOpen={openModal} modalHandler={onConfirm} />
      <Header modalHandler={onConfirm} />
      {!data.length && (
        <CircularProgress
          size={50}
          thickness={8}
          style={{
            position: "fixed",
            top: "49%",
            left: "49%",
            zIndex: 1,
          }}
        />
      )}
      <Album data={data} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
