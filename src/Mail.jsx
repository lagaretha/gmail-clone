import { IconButton } from "@mui/material";
import "./Mail.css";
import { ArrowBack, MoveToInbox } from "@mui/icons-material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <ErrorOutlineIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <MarkEmailUnreadOutlinedIcon />
          </IconButton>
          <IconButton>
            <WatchLaterOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddTaskIcon />
          </IconButton>
          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMoreOutlinedIcon />
          </IconButton>
          <IconButton>
            <PrintOutlinedIcon />
          </IconButton>
          <IconButton>
            <ExitToAppOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantOutlinedIcon className="mail_important" />
          <p>{selectedMail?.title}</p>
          <p className="mail_time">{selectedMail?.time}</p>
        </div>

        <div className="mail_message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
