import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import "./Card.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalCard(props) {
  const [open, setOpen] = React.useState(true);

  const [values, setValues] = React.useState({
    name: props.name,
    mail: props.email,
    phone: props.phone,
    website: props.website,
    keyVal: props.keyVal,
  });

  React.useEffect(() => {
    setValues({ ...values, name: props.name });
    setValues({ ...values, website: props.website });
    setValues({ ...values, phone: props.phone });
    setValues({ ...values, mail: props.email });
  }, [open]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  let keyVal = props.keyVal;

  props.func(open);

  const handleClose = () => {
    if(values.name && values.website && values.mail && values.phone){
      setOpen(false);
      props.details(values, keyVal);
    }
  };

  const close = () => {
    setOpen(false);
  }

  return (
    <div>
      <BootstrapDialog
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={close}
        >
          Basic Modal
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="alignModal">
            <div className="alginParams">
              <span style={{ color: "red" }}> * </span>Name :
            </div>
            <FormControl error sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                error={values.name ? false : true}
                id="name"
                margin="dense"
                defaultValue={values.name}
                variant="filled"
                size="small"
                onChange={handleChange("name")}
              />
              {values.name.length < 1 ? (
                <FormHelperText id="component-error-text">
                  This field is required
                </FormHelperText>
              ) : (
                <FormHelperText
                  id="component-error-text"
                  sx={{ height: "3ch" }}
                ></FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="alignModal">
            <div className="alginParams">
              <span style={{ color: "red" }}> * </span>Email :
            </div>
            <FormControl error sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                error={values.mail ? false : true}
                id="mail"
                margin="dense"
                defaultValue={values.mail}
                variant="filled"
                size="small"
                // value={values.name}
                onChange={handleChange("mail")}
              />
              {values.mail.length < 1 ? (
                <FormHelperText id="component-error-text">
                  This field is required
                </FormHelperText>
              ) : (
                <FormHelperText
                  id="component-error-text"
                  sx={{ height: "3ch" }}
                ></FormHelperText>
              )}
            </FormControl>
          </div>{" "}
          <div className="alignModal">
            <div className="alginParams">
              <span style={{ color: "red" }}> * </span>Phone :
            </div>
            <FormControl error sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                error={values.phone ? false : true}
                id="phone"
                margin="dense"
                defaultValue={values.phone}
                variant="filled"
                size="small"
                // value={values.name}
                onChange={handleChange("phone")}
              />
              {values.phone.length < 1 ? (
                <FormHelperText id="component-error-text">
                  This field is required
                </FormHelperText>
              ) : (
                <FormHelperText
                  id="component-error-text"
                  sx={{ height: "3ch" }}
                ></FormHelperText>
              )}
            </FormControl>
          </div>{" "}
          <div className="alignModal">
            <div className="alginParams">
              <span style={{ color: "red" }}> * </span>Website :
            </div>
            <FormControl error sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                error={values.website ? false : true}
                id="website"
                margin="dense"
                defaultValue={values.website}
                variant="filled"
                size="small"
                // value={values.name}
                onChange={handleChange("website")}
              />
              {values.website.length < 1 ? (
                <FormHelperText id="component-error-text">
                  This field is required
                </FormHelperText>
              ) : (
                <FormHelperText
                  id="component-error-text"
                  sx={{ height: "3ch" }}
                ></FormHelperText>
              )}
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
        <span style={{ paddingRight: "15px" }}>
          <Button size="small" onClick={close}>
            CANCEL
          </Button>
          </span>
          <span style={{ paddingRight: "15px" }}>
            <Button
              size="small"
              onClick={handleClose}
              style={{ backgroundColor: "#1890ff", color: "white" }}
            >
              OK
            </Button>
          </span>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
