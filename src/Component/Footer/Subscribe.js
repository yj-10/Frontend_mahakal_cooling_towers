import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import Weburls from "../../Redux/ApI/Weburls";
import MButton from "../../utility/MButton";
import MInput from "../../utility/MInput";
import SuccessModel from "../../utility/SuccessModel";
import { useForm } from "react-hook-form";
function Subscribe() {
  const [SuccessLoader, setSuccessLoader] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
    },
  });

  const onSubmit = (data) => {
    // e.preventDefault();

    console.log(data);
    console.log("alert");

    const result = axios
      .post(Weburls.SubPostapi, {
        ...data,
      })
      .then((res) => {
        reset();

        setSuccessLoader(true);
        document.body.style.overflow = "hidden";
        console.log(res.status);
        setTimeout(() => {
          document.body.style.overflow = "auto";
          setSuccessLoader(false);
        }, 3000);
      })
      .catch((error) => {
        setSuccessLoader(false);
      });
  };
  console.log(watch("example"));

  // console.log("........", Email);

  return (
    <>
      <form
        action="#"
        className="subscribe-form "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <h2 className="text-white mr-4">Subscribe For Updates</h2> */}

        <div className="form-group d-flex">
          <input
            {...register("Email", { required: true })}
            name={"Email"}
            className="form-control rounded-left "
            label="Enter your Email"
          />
          <input
            type="submit"
            value="Subscribe"
            className="form-control submit px-3"
          />
        </div>
      </form>
      {SuccessLoader ? <SuccessModel /> : ""}
    </>
  );
}

export default Subscribe;
