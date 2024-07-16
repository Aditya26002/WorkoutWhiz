import React from "react";

import BodyPartImage from "../assests/icons/body-part.png";
import EquipmentImage from "../assests/icons/equipment.png";
import TargetImage from "../assests/icons/target.png";
import { Stack, Typography, Button } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { name, bodyPart, gifUrl, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: EquipmentImage, name: equipment },
    { icon: TargetImage, name: target },
  ];

  return (
    <Stack
      gap={"60px"}
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gsp: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong.{name}
          {` `} is one of the best exercise to target your {target}. It will
          help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item.name}
            direction={"row"}
            gap={"24px"}
            alignItems={"center"}
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img src={item.icon} alt={item.name} />
            </Button>
            <Typography variant="h5" style={{ width: "50px", height: "50px" }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Detail;
