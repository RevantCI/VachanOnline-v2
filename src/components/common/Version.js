import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Version(props) {
  const classes = useStyles();
  const [version, setVersion] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setVersion(event.target.value);
  };
  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="version">
          Version
        </InputLabel>
        <Select
          native
          value={version}
          onChange={handleChange}
          input={
            <OutlinedInput
              name="version"
              labelWidth={labelWidth}
              id="version"
            />
          }
        >
          {props.versions.map(version => (
            <option value={version}>{version}</option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
