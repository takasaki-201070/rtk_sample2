import React, { useState } from "react";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  divtextarea: {
    flex: "1 1 auto",
    width: "100%",
    margin: "20px",
  },
  divsetting: {
    flex: "1 1 auto",
    width: "100%",
    margin: "20px",
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  textfield: {
    width: "var(width)",
  },
  textwidth: {
    display: "unset",
  },
}));

const MaterialTextfield: React.FC = () => {
  const classes = useStyles();
  const [variantVal, setVariantVal] = useState<
    "filled" | "standard" | "outlined" | undefined
  >("standard");
  const [marginVal, setmarginVal] = useState<"dense" | "none" | "normal">(
    "dense"
  );
  const [myStyle, setMyStyle] = useState<React.CSSProperties>({
    width: "200px",
  });
  const [disabled, setDisabled] = useState<boolean>(false);
  const [multilineVal, setMultilineVal] = useState<boolean>(false);
  const [placeholderVal, setPlaceholderVal] = useState<string>("");
  const [typeVal, setTypeVal] = useState<string>("");
  const [labelVal, setLabelVal] = useState<string>("");
  const [helperText, setHelperText] = useState<string>("");
  const [rowsVal, setRowsVal] = useState<string>("");
  const [rowsMaxVal, setRowsMaxVal] = useState<string>("");

  const [widthVal, setWidthVal] = useState<string>("200");
  const [widthUnit, setWidthUnit] = useState<string>("px");

  const handleChangeWidth = (size: string, unit: string) => {
    // 90%以上の数値が指定された場合は90%固定にする
    if (unit === "%" && (size > "90" || size.length > 2)) {
      size = "90";
    }
    setMyStyle({ ...myStyle, width: size + unit });
  };

  const handleChangeType = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    let value: string | unknown = e.target.value;
    if (value === "") {
      value = "text";
    }

    setTypeVal(String(value));
  };

  const handleChangeMargin = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    let value: "dense" | "none" | "normal" | undefined = undefined;
    if (e.target.value === "") {
      value = "dense";
    } else if (e.target.value === "dense") {
      value = "dense";
    } else if (e.target.value === "none") {
      value = "none";
    } else if (e.target.value === "normal") {
      value = "normal";
    } else {
      value = "dense";
    }
    setmarginVal(value);
  };
  const handleChangeVariant = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    let value: "filled" | "standard" | "outlined" | undefined = undefined;
    if (e.target.value === "") {
      value = "standard";
    } else if (e.target.value === "filled") {
      value = "filled";
    } else if (e.target.value === "standard") {
      value = "standard";
    } else if (e.target.value === "outlined") {
      value = "outlined";
    } else {
      value = "standard";
    }
    setVariantVal(value);
  };
  return (
    <div className={classes.root}>
      {/* テキストボックスのサンプル表示 */}
      <div className={classes.divtextarea}>
        <InputLabel id="sampletext">サンプルテキストボックス</InputLabel>
        <TextField
          id="sampletext"
          label={labelVal}
          type={typeVal}
          variant={variantVal}
          disabled={disabled}
          helperText={helperText}
          placeholder={placeholderVal}
          multiline={multilineVal}
          rows={rowsVal}
          rowsMax={rowsMaxVal}
          margin={marginVal}
          className={classes.textfield}
          style={myStyle}
        />
      </div>
      {/*  テキストボックスの設定値変更  */}
      <div className={classes.divsetting}>
        <FormControl className={classes.formControl}>
          <TextField
            id="sel-label"
            value={labelVal}
            label="label"
            onChange={(e) => setLabelVal(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            select
            label="type"
            id="sel-type"
            value={typeVal}
            name="sel-type"
            onChange={(e) => {
              handleChangeType(e);
            }}
          >
            <MenuItem value={"text"}>text</MenuItem>
            <MenuItem value={"number"}>number</MenuItem>
            <MenuItem value={"password"}>password</MenuItem>
            <MenuItem value={"date"}>date</MenuItem>
            <MenuItem value={"datetime-local"}>datetime-local</MenuItem>
            <MenuItem value={"color"}>color</MenuItem>
          </TextField>
          <FormHelperText>TextFieldの入力値</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            select
            label="variant"
            id="sel-variant"
            value={variantVal}
            name="sel-variant"
            onChange={(e) => {
              handleChangeVariant(e);
            }}
          >
            <MenuItem value={"standard"}>standard</MenuItem>
            <MenuItem value={"filled"}>filled</MenuItem>
            <MenuItem value={"outlined"}>outlined</MenuItem>
          </TextField>
          <FormHelperText>TextFieldの外観</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormControlLabel
            control={
              <Switch
                checked={disabled}
                onChange={() => {
                  setDisabled(!disabled);
                }}
                name="disabled"
              />
            }
            label="disabled"
            labelPlacement="start"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="sel-helper"
            value={helperText}
            label="helperText"
            onChange={(e) => setHelperText(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="sel-helper"
            value={placeholderVal}
            label="helperText"
            onChange={(e) => setPlaceholderVal(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormControlLabel
            control={
              <Switch
                checked={multilineVal}
                onChange={() => {
                  setMultilineVal(!multilineVal);
                }}
                name="multiline"
              />
            }
            label="multiline"
            labelPlacement="start"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="sel-rows"
            type="number"
            disabled={!multilineVal}
            value={rowsVal}
            label="rows"
            onChange={(e) => setRowsVal(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="sel-rowsMax"
            type="number"
            disabled={!multilineVal}
            value={rowsMaxVal}
            label="rowsMax"
            onChange={(e) => setRowsMaxVal(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="sel-margin-lbl">margin</InputLabel>
          <Select
            labelId="sel-margin-lbl"
            id="sel-margin"
            value={marginVal}
            name="sel-margin"
            onChange={(e) => {
              handleChangeMargin(e);
            }}
          >
            <MenuItem value={"normal"}>normal</MenuItem>
            <MenuItem value={"dense"}>dense</MenuItem>
            <MenuItem value={"none"}>none</MenuItem>
          </Select>
          {/* <FormHelperText>TextFieldの外観</FormHelperText> */}
        </FormControl>
        <FormControl className={classes.formControl}>
          <div className={classes.textwidth}>
            <TextField
              id="sel-widthVal"
              type="number"
              value={widthVal}
              label="width"
              onChange={(e) => {
                setWidthVal(e.target.value);
                // setMyStyle({ ...myStyle, width: e.target.value + widthUnit });
                handleChangeWidth(e.target.value, widthUnit);
              }}
            />
            <TextField
              select
              id="sel-widthUnit"
              value={widthUnit}
              name="widthUnit"
              label=" "
              onChange={(e) => {
                setWidthUnit(e.target.value);
                handleChangeWidth(widthVal, e.target.value);
              }}
            >
              <MenuItem value={"px"}>px</MenuItem>
              <MenuItem value={"%"}>%</MenuItem>
            </TextField>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default MaterialTextfield;
