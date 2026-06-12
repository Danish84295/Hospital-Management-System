import AppointmentCard from "../components/AppointmentCard";

function Dashboard() {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Rahul Sharma",
      date: "15 June 2026",
      time: "10:00 AM",
      status: "Approved",
    },
    {
      id: 2,
      doctor: "Dr. Rohit",
      date: "20 June 2026",
      time: "11:30 AM",
      status: "Pending",
    },
    {
      id: 3,
      doctor: "Dr. Amit Verma",
      date: "25 June 2026",
      time: "03:00 PM",
      status: "Approved",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold">
            Total Appointments
          </h2>

          <p className="text-3xl font-bold">
            {appointments.length}
          </p>
        </div>

        <div className="shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold">
            Approved
          </h2>

          <p className="text-3xl font-bold">
            {
              appointments.filter(
                (a) => a.status === "Approved"
              ).length
            }
          </p>
        </div>

        <div className="shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold">
            Pending
          </h2>

          <p className="text-3xl font-bold">
            {
              appointments.filter(
                (a) => a.status === "Pending"
              ).length
            }
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        My Appointments
      </h2>

      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;