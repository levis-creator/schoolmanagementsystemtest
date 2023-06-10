import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAdminContext from "../../../../hooks/useAdminContext";
import AddIcon from "@mui/icons-material/Add";
import { OPEN_FORM } from "../../../../constants/studenConstant";

const FloatingAdd = ({staff}) => {
  const [hide, setHide] = useState(false);
  const { openForm, isUpdate, adminContextDispatch } = useAdminContext();

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, "3000");
  }, []);
  return (
    <div
      className=" fixed bottom-20 right-10 flex justify-center py-3"
      style={{ display: openForm ? "none" : "" }}
    >
      <Fab
        variant={hide ? "" : "extended"}
        sx={{
          bgcolor: "rgb(153 27 27)",
          "&:hover": {
            bgcolor: "rgb(185 28 28)",
          },
        }}
        onClick={() => adminContextDispatch({ type: OPEN_FORM })}
      >
        <div
          className="capitalize text-white"
          style={{
            display: hide ? "none" : "",
          }}
        >
          Add {staff?"Staff":"Student"}
        </div>
        <div className="text-xl">
          <AddIcon sx={{ color: "white", fontSize: "40px" }} />
        </div>
      </Fab>
    </div>
  );
};

export default FloatingAdd;
