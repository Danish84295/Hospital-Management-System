import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function BookAppointment() {
    const doctors=useSelector(
        (state)=>state.doctor.doctors
    );
    const selectedDoctors=useSelector(
        (state)=>state.doctor.SelectedDoctor
    );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const isEmergency = watch("isEmergency");

  async function onsubmit(data) {
    if (data.isEmergency) {
      data.time = "Emergency";
    }

    console.log("Submitting the form", data);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Book Appointment
      </h1>

      <h2 className="text-xl font-semibold mb-4">
        Enter Patient Details →
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
        
        {selectedDoctors? (
  <div className="mb-4">
    <label className="font-semibold">
      Selected Doctor
    </label>

    <input
      type="text"
      value={selectedDoctors.name}
      readOnly
      className="w-full border p-2 rounded mt-1"
    />
  </div>
) : (
  <div className="mb-4">
    <label className="font-semibold">
      Select Doctor
    </label>

    <select className="w-full border p-2 rounded mt-1">
      <option value="">
        Select Doctor
      </option>

      {doctors.map((doctor) => (
        <option
          key={doctor.id}
          value={doctor.id}
        >
          {doctor.name}
        </option>
      ))}
    </select>
  </div>
)}

        {/* First Name */}
        <div>
          <label>First Name:</label>
          <input
            placeholder="Enter Patient First Name"
            className={`w-full border p-2 rounded ${
              errors.firstName ? "border-red-500" : ""
            }`}
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 3,
                message: "Minimum length should be 3",
              },
              maxLength: {
                value: 10,
                message: "Maximum length should be 10",
              },
            })}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        {/* Middle Name */}
        <div>
          <label>Middle Name:</label>
          <input
            placeholder="Enter Patient Middle Name"
            className="w-full border p-2 rounded"
            {...register("middleName")}
          />
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name:</label>
          <input
            placeholder="Enter Patient Last Name"
            className={`w-full border p-2 rounded ${
              errors.lastName ? "border-red-500" : ""
            }`}
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 3,
                message: "Minimum length should be 3",
              },
              maxLength: {
                value: 10,
                message: "Maximum length should be 10",
              },
            })}
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label>Mobile No:</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className={`w-full border p-2 rounded ${
              errors.mobileno ? "border-red-500" : ""
            }`}
            {...register("mobileno", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be exactly 10 digits",
              },
            })}
          />
          {errors.mobileno && (
            <p className="text-red-500">{errors.mobileno.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            placeholder="Enter Email"
            className={`w-full border p-2 rounded ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Emergency Case */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="emergency"
            {...register("isEmergency")}
          />
          <label htmlFor="emergency">Emergency Case</label>
        </div>

        {/* Date */}
        <div>
          <label>Date:</label>
          <input
            type="date"
            className={`w-full border p-2 rounded ${
              errors.date ? "border-red-500" : ""
            }`}
            {...register("date", {
              required: "Date is required",
            })}
          />
          {errors.date && (
            <p className="text-red-500">{errors.date.message}</p>
          )}
        </div>

        {/* Time - Only for non-emergency cases */}
        {!isEmergency && (
          <div>
            <label>Appointment Time:</label>
            <input
              type="time"
              className={`w-full border p-2 rounded ${
                errors.time ? "border-red-500" : ""
              }`}
              {...register("time", {
                required: "Appointment time is required",
              })}
            />
            {errors.time && (
              <p className="text-red-500">{errors.time.message}</p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;