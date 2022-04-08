import { Typography } from "@material-ui/core";
import AdminLogin from "../Admin/Login/Login";
import AdminRegister from "../Admin/Login/Register";
import StudentLogin from "../Student/Login/Login";
import StudentRegister from "../Student/Login/Register";
import TeacherLogin from "../Teacher/Login/Login";
import TeacherRegister from "../Teacher/Login/Register";
import useStyles from "./styles";

const ColorBox = ({ user, color, register }) => {
  const classes = useStyles();

  let login;
  if (user === "Admin") {
    login = register ? <AdminRegister /> : <AdminLogin />;
  } else if (user === "Student") {
    login = register ? <StudentRegister /> : <StudentLogin />;
  } else if (user === "Teacher") {
    login = register ? <TeacherRegister /> : <TeacherLogin />;
  }
  let firstDiv = <div className={classes.loginContainer}>{login}</div>;

  let secondDiv = (
    <div className={classes.infoContainer}>
      
    </div>
  );

  if (user === "Teacher") {
    const temp = secondDiv;
    secondDiv = firstDiv;
    firstDiv = temp;
  }

  return (
    <div
      className={
        color === "blue" ? classes.blueContainer : classes.whiteContainer
      }
      style={register ? { minHeight: "100vh" } : {}}
    >
      {firstDiv}
      {secondDiv}
    </div>
  );
};

export default ColorBox;
