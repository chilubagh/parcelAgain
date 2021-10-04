import name from "./multiplefile";
import helloWorld from "./helloworld";
import FetchWrapper from "./fetch-wrapper";
import simple_number_formatter from "Semigradsky/simple-number-formatter";
import snackbar from "snackbar";
import "snackbar/dist/snackbar.min.css";
console.log("hello again...", name);

const API = new FetchWrapper(
  "https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/james9876"
);
API.ger().then((data) => {
  console.log(data);
});
snackbar.show("missing data");
let result = simple_number_formatter(7588373);
console.log(result);
