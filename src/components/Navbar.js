import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "32px", xs: "20px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: { sm: "center", lg: "flex-start" },
        ml: { sm: "0", lg: "120px" },
      }}
      px="20px"
    >
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
