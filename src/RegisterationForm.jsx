import { useReducer, useState } from "react";
import Header from "./Header";

const initialState = {
  step: 1,
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    // update field
    case "update_field":
      return { ...state, [action.field]: action.value };
    // next step
    case "next_step":
      return { ...state, step: state.step + 1 };
    // prev step
    case "prev_step":
      return { ...state, step: state.step - 1 };
    // reset form
    case "reset_form":
      return (state = initialState);
    default:
      return state;
  }
};

const RegisterationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [error, setError] = useState("");

  const handleNextStepOne = (e) => {
    e.preventDefault();

    if (!state.firstname.trim() || !state.lastname.trim()) {
      setError("please fill inputs correctlly");
    } else {
      setError("");
      dispatch({ type: "next_step" });
    }
  };

  const handleNextStepTwo = (e) => {
    e.preventDefault();

    if (!state.email.trim() || !state.phone.trim()) {
      setError("please fill the input correctly");
    } else {
      setError("");
      dispatch({ type: "next_step" });
    }
  };

  return (
    <>
      <Header state={state}/>
      <div className="flex flex-col font-mono items-center mt-12 justify-between w-full max-w-2xl mx-auto">
        {/* Registeration Form */}
        <form className="w-full">
          {/* // step one */}
          {state.step === 1 && (
            <div className="space-y-5">
              {/* input group */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-gray-500" htmlFor="firstname">First Name:</label>
                <input
                  className="border border-gray-300 p-2 rounded-lg w-full outline-0 focus:border-blue-200"
                  type="text"
                  placeholder="Enter Your Firstname"
                  value={state.firstname}
                  onChange={(e) =>
                    dispatch({
                      type: "update_field",
                      field: "firstname",
                      value: e.target.value,
                    })
                  }
                />
              </div>
              {/* input group */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-gray-500" htmlFor="lastname">Last Name:</label>
                <input
                  className="border border-gray-300 p-2 rounded-lg w-full outline-0 focus:border-blue-200"
                  type="text"
                  placeholder="Enter Your Lastname"
                  value={state.lastname}
                  onChange={(e) =>
                    dispatch({
                      type: "update_field",
                      field: "lastname",
                      value: e.target.value,
                    })
                  }
                />
              </div>
              {error && <p className="text-red-400 text-base">{error}</p>}
              <button
                className="py-2 px-6 text-white bg-blue-400 rounded-lg"
                type="submit"
                onClick={handleNextStepOne}
              >
                Next
              </button>
            </div>
          )}
          {/*  step two */}
          {state.step === 2 && (
            <div className="space-y-5">
              {/* input group */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-gray-500" htmlFor="email">Email:</label>
                <input
                  className="border border-gray-300 p-2 rounded-lg w-full outline-0 focus:border-blue-200"
                  type="email"
                  placeholder="Enter Your email"
                  value={state.email}
                  onChange={(e) =>
                    dispatch({
                      type: "update_field",
                      field: "email",
                      value: e.target.value,
                    })
                  }
                />
              </div>
              {/* input group */}
              <div className="flex flex-col w-full gap-2">
                <label className="text-gray-500" htmlFor="lastname">Phone:</label>
                <input
                  className="border border-gray-300 p-2 rounded-lg w-full outline-0 focus:border-blue-200"
                  type="number"
                  placeholder="Enter Your Phone"
                  value={state.phone}
                  onChange={(e) =>
                    dispatch({
                      type: "update_field",
                      field: "phone",
                      value: e.target.value,
                    })
                  }
                />
              </div>
              {error && <p className="text-red-400 text-base">{error}</p>}

              <button
                className="py-2 mr-2 px-6 text-white bg-gray-400 rounded-lg"
                type="button"
                onClick={() => dispatch({ type: "prev_step" })}
              >
                Back
              </button>
              <button
                className="py-2 px-6 text-white bg-blue-400 rounded-lg"
                type="submit"
                onClick={handleNextStepTwo}
              >
                Next
              </button>
            </div>
          )}
        </form>

        {/* Review */}
        {state.step === 3 && (
          <div className="space-y-4  p-4 rounded bg-gray-300 w-full">
            <div className="space-y-4">
              <p>
                <strong>Firstname:</strong> {state.firstname}
              </p>
              <p>
                <strong>lastname:</strong> {state.lastname}
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong>email:</strong> {state.email}
              </p>
              <p>
                <strong>phone:</strong> {state.phone}
              </p>
            </div>

            <button
              className="py-2 mt-4 mr-2 px-6 text-white bg-gray-400 rounded-lg"
              type="button"
              onClick={() => dispatch({ type: "prev_step" })}
            >
              Back
            </button>
            <button
              className="py-2 px-6 text-white bg-blue-400 rounded-lg"
              onClick={() => {
                alert("Form submitted successfully!");
                dispatch({ type: "reset_form" });
              }}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterationForm;
