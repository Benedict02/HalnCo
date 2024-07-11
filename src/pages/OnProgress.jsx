import { Stack } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { Link } from "react-router-dom";

const OnProgress = () => {
  return (
    <>
      <Stack className="torso" spacing={10}>
        <img
          src="https://britespanbuildings.com/wp-content/uploads/2023/02/aviation-aircraft-airlines-hangar.jpg"
          alt="hangar"
          className="bgimg"
        />
        <Stack>
          <p style={{ fontSize: "2em" }}>
            <WarningIcon sx={{ color: "#f5b042" }} />
            Website in progress!
          </p>
        </Stack>
        <Stack>
          <p>
            For RFQ please contact{" "}
            <Link to="https://mail.google.com/mail/u/0/?to=hhartawan.assist@halnco.com&fs=1&tf=cm">
              hhartawan.assist@halnco.com
            </Link>
          </p>
        </Stack>
      </Stack>
    </>
  );
};

export default OnProgress;
