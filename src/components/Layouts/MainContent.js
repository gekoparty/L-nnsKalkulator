import Form from "../Form/Form";
import classes from "./MainContent.module.css";
import Sidebar from "./Sidebar";

const MainContent = (props) => {
  return (
    <div className={classes.row}>
      <Sidebar />
      <Form />
    </div>
  );
};

export default MainContent;
