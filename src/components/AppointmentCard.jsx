function AppointmentCard({ appointment }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">
        {appointment.doctor}
      </h2>

      <p>Date: {appointment.date}</p>

      <p>Time: {appointment.time}</p>

      <p
        className={`font-semibold ${
          appointment.status === "Approved"
            ? "text-green-600"
            : "text-yellow-600"
        }`}
      >
        {appointment.status}
      </p>
    </div>
  );
}

export default AppointmentCard;