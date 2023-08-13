import * as React from "react";
import Card from "../Components/Card";
import "./MainPage.css";
import { height } from "@mui/system";
import avataaars from "../assets/images/avataaars.png";
import avataaars1 from "../assets/images/avataaars1.png";
import avataaars2 from "../assets/images/avataaars2.png";
import avataaars3 from "../assets/images/avataaars3.png";
import avataaars4 from "../assets/images/avataaars4.png";
import avataaars5 from "../assets/images/avataaars5.png";
import avataaars6 from "../assets/images/avataaars6.png";
import avataaars7 from "../assets/images/avataaars7.png";
import avataaars8 from "../assets/images/avataaars8.png";
import avataaars9 from "../assets/images/avataaars9.png";

export default function MainPage() {
  const questionsMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [images, setImages] = React.useState([
    avataaars,
    avataaars1,
    avataaars2,
    avataaars3,
    avataaars4,
    avataaars5,
    avataaars6,
    avataaars7,
    avataaars8,
    avataaars9,
  ]);

  const [names, setNames] = React.useState([
    "Leanne Graham",
    "Ervin Howell",
    "Clementine Bauch",
    "Clementine Bauch",
    "Chelsey Dietrich",
    "Mrs. Dennis Schulist",
    "Kurtis Weissnat",
    "Nicholas Runolfsdottir V",
    "Glenna Reichert",
    "Clementina DuBuque",
  ]);

  const [website, setWebsite] = React.useState([
    "http://hildegard.org",
    "http://anastasia.net",
    "http://ramiro.info",
    "http://kale.biz",
    "http://demarco.info",
    "http://ola.org",
    "http://elvis.io",
    "http://jacynthe.com",
    "http://conrad.com",
    "http://ambrose.net",
  ]);

  const [phone, setPhone] = React.useState([
    "1-770-736-8031 x56442",
    "010-692-6593 x09125",
    "1-463-123-4447",
    "493-170-9623 x156",
    "(254)954-1289",
    "1-477-935-8478 x6430",
    "210.067.6132",
    "586.493.6943 x140",
    "(775)976-6794 x41206",
    "024-648-3804",
  ]);

  const [email, setEmail] = React.useState([
    "Sincere@april.biz",
    "Shanna@melissa.tv",
    "Nathan@yesenia.net",
    "Julianne.OConner@kory.org",
    "Lucio_Hettinger@annie.ca",
    "Karley_Dach@jasper.info",
    "Telly.Hoeger@billy.biz",
    "Sherwood@rosamond.me",
    "Chaim_McDermott@dana.io",
    "Rey.Padberg@karina.biz",
  ]);

  const [data, setData] = React.useState();
  const [keys1, setKeys] = React.useState();

  const pull_data = (data, i) => {
    if (data) {
      setData(data);
      setKeys(i);
    }
  };

  React.useEffect(() => {
    if (data?.name && data?.name !== data.name[keys1]) {
      setNames({ ...names, [Object.keys(names)[keys1]]: data?.name });
    }
    if (data?.website && data?.website !== website[keys1]) {
      setWebsite({ ...website, [Object.keys(website)[keys1]]: data?.website });
    }
    if (data?.phone && data?.phone !== phone[keys1]) {
      setPhone({ ...phone, [Object.keys(phone)[keys1]]: data?.phone });
    }
    if (data?.mail && data?.mail !== email[keys1]) {
      setEmail({ ...email, [Object.keys(email)[keys1]]: data?.mail });
    }
  }, [data]);

  return (
    <div className="mainGrid">
      {questionsMap.map((i) => {
        return (
          <Card
            key={questionsMap[i]}
            name={names[i]}
            website={website[i]}
            email={email[i]}
            phone={phone[i]}
            image={images[i]}
            val={questionsMap[i]}
            data={pull_data}
          ></Card>
        );
      })}
    </div>
  );
}
