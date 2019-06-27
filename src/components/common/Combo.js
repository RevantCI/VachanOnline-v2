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
  }
}));

export default function Combo({ name, label, options }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor={name}>
        {label}
      </InputLabel>
      <Select
        native
        value={value}
        onChange={handleChange}
        input={<OutlinedInput name={name} labelWidth={labelWidth} id={name} />}
        className="indexSelect"
      >
        {options.map(text => (
          <option key={text} value={text}>
            {text}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
