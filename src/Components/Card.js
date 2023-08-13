import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModalCard from "./Modal";
import "./Card.css";

export default function MediaCard(props) {
  const [liked, setLiked] = React.useState(false);
  const [deletes, setDeletes] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [name, setName] = React.useState(props.name);
  const [website, setWebsite] = React.useState(props.website);
  const [phone, setPhone] = React.useState(props.phone);
  const [email, setEmail] = React.useState(props.email);
  const [datas, setDatas] = React.useState();
  const [keyval, setKeyval] = React.useState();

  let keyVal = props.val;
  props.data(datas, keyval);

  const pull_data = (data) => {
    setOpenModal(data);
  };

  const pull_Value = (data, val) => {
    setDatas(data);
    setKeyval(val);
  };

  React.useEffect(() => {
    setName(props.name);
    setWebsite(props.website);
    setPhone(props.phone);
    setEmail(props.email);
  }, [props.name, props.website, props.phone, props.email]);

  return (
    <div style={{ padding: "15px", display: deletes ? "none" : "block" }}>
      <Card>
        <div style={{ backgroundColor: "#f5f5f5" }}>
          <img src={props.image} height="200px"></img>
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            style={{ textAlign: "left", margin: "10px" }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "left" }}
          >
            <div className="alignName">
              <ForwardToInboxIcon fontSize="small" />
              {props.email}
            </div>
            <div className="alignName">
              <PhoneEnabledIcon fontSize="small" />
              {props.phone}
            </div>
            <div className="alignName">
              <LanguageIcon fontSize="small" />
              {props.website}
            </div>
          </Typography>
        </CardContent>
        <CardActions
          style={{
            backgroundColor: "#f5f5f5",
            display: "grid",
            "grid-template-columns": "auto auto auto auto auto",
          }}
        >
          {liked ? (
            <FavoriteIcon
              className="alignIcon"
              style={{ color: "red" }}
              onClick={() => setLiked(!liked)}
            />
          ) : (
            <FavoriteBorderIcon
              className="alignIcon"
              style={{ color: "red" }}
              onClick={() => setLiked(!liked)}
            />
          )}
          <span style={{color: "#e8e8e8"}}>&#124;</span>
          <BorderColorIcon
            className="alignIcon"
            onClick={() => setOpenModal(true)}
          />
          <span style={{color: "#e8e8e8"}}>&#124;</span>
          <DeleteIcon className="alignIcon" onClick={() => setDeletes(true)} />
        </CardActions>
      </Card>
      {openModal && (
        <ModalCard
          openModal={openModal}
          name={name}
          email={email}
          phone={phone}
          website={website}
          func={pull_data}
          details={pull_Value}
          keyVal={keyVal}
        ></ModalCard>
      )}
    </div>
  );
}
