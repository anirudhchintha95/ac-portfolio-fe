import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { RxCross1 } from "react-icons/rx";
import cx from "classnames";

import { Button, TextArea, TextInput } from "../common";
import {
  REACT_APP_EMAILJS_PUBLICK_KEY,
  REACT_APP_EMAILJS_SERVICE,
  REACT_APP_EMAILJS_TEMPLATE,
} from "../../constants.env";

const Connect = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const clearAlert = () => {
    setAlert({
      type: "",
      message: "",
    });
  };

  const onInputChange = (key) => (evt) => {
    const { value } = evt.target;
    setFormValues((values) => ({ ...values, [key]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const err = {
      name: !formValues.name,
      email: !formValues.email,
      subject: !formValues.subject,
      message: !formValues.message,
    };
    setFormErrors(err);

    if (Object.values(err).some((val) => val)) {
      setAlert({
        type: "error",
        message: "Please enter all the required fields",
      });
      return;
    }

    emailjs
      .send(
        REACT_APP_EMAILJS_SERVICE,
        REACT_APP_EMAILJS_TEMPLATE,
        formValues,
        REACT_APP_EMAILJS_PUBLICK_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setAlert({
              type: "success",
              message: "Mail sent successfully.",
            });
            setFormValues({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          } else {
            setAlert({
              type: "error",
              message:
                "There was an error while sending this mail. Please send a mail to anirudhchintha95@gmail.com directly.",
            });
          }
        },
        (error) => {
          console.log(error.text);
          setAlert({
            type: "error",
            message:
              "There was an error while sending this mail. Please send a mail to anirudhchintha95@gmail.com directly.",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="grid grid-cols-2 gap-4 m-4">
        <div
          className={cx(
            "box-border border-gray-300 col-span-2 m-0 rounded-md font-semibold text-white break-words",
            "flex justify-between items-center",
            "transition-all ease-out duration-500",
            alert.message ? "max-h-32 px-4 py-2 border-gray-300 border" : "max-h-0",
            alert.type ? (alert.type === "success" ? "bg-green-300" : "bg-red-300") : ""
          )}
        >
          {alert.message ? (
            <>
              <span className="break-all">{alert.message}</span>
              <RxCross1 onClick={clearAlert} className="cursor-pointer" />
            </>
          ) : (
            <></>
          )}
        </div>
        <TextInput
          type="text"
          name="name"
          label="Name"
          className="m-0 col-span-2 md:col-span-1"
          required
          value={formValues.name}
          onChange={onInputChange("name")}
          error={formErrors.name}
        />
        <TextInput
          type="email"
          name="email"
          label="Email"
          className="m-0 col-span-2 md:col-span-1"
          required
          value={formValues.email}
          onChange={onInputChange("email")}
          error={formErrors.email}
        />
        <TextInput
          type="subject"
          name="subject"
          label="Subject"
          className="col-span-2 m-0"
          required
          value={formValues.subject}
          onChange={onInputChange("subject")}
          error={formErrors.subject}
        />
        <TextArea
          name="message"
          label="Message"
          className="col-span-2 m-0"
          required
          value={formValues.message}
          onChange={onInputChange("message")}
          error={formErrors.message}
          rows="4"
        />
        <Button type="submit" className={cx("col-span-2")} disabled={loading} loading={loading}>
          Send
        </Button>
      </div>
    </form>
  );
};

export default Connect;
