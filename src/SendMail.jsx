import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./SendMail.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailCollectionRef = collection(db, "emails");

  const onSubmit = (formData) => {
    console.log(formData);
    addDoc(emailCollectionRef, {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseOutlinedIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>

      <form onClick={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error">To is Required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is Required!</p>
        )}
        <input
          placeholder="Message..."
          type="text"
          className="sendMail_message"
          name="message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is Required!</p>
        )}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
