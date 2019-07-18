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
    marginTop: theme.spacing(1),
    minWidth: 120
  },
  indexSelect: {
    height: 50,
    padding: "0px"
  }
}));

export default function Combo({ name, label, options, onchange }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
    onchange(event.target.value);
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
        className={classes.indexSelect}
      >
        {options.map((text, i) => (
          <option key={i} value={text}>
            {text}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
