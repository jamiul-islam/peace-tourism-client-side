import React from "react";
import HomeMain from "../Home/HomeMain/HomeMain";
import swal from "sweetalert";
import axios from "axios";
import { useForm } from "react-hook-form";
import Footer from "../Shared/Footer/Footer";

const AddPlan = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://gory-fangs-99021.herokuapp.com/addplan", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          swal("Added to database!", "success");
          reset();
        }
      });
  };

  return (
    <div>
      <HomeMain />
      <div className="container">
        <div className="m-5">
          <h1>Plan your own Tour</h1>
          <h5 className="mb-4">best price available</h5>
          <hr />
          <div>
            <h2 className="mt-8">add tour info</h2>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4 d-flex flex-column">
                  <input
                    className="p-3 m-1"
                    type="text"
                    name="packageName"
                    ref={register}
                    placeholder="where do you wanna go?"
                  />
                  <input
                    className="p-3 m-1"
                    type="number"
                    name="price"
                    ref={register}
                    placeholder="your budget"
                  />
                  <input
                    className="p-3 m-1"
                    name="imgURL"
                    ref={register}
                    placeholder="share a link of the picture"
                  />
                  <input className="p-3 m-1 btn btn-success" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default AddPlan;
