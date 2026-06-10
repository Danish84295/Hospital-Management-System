import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-700 mb-6">
            Your Health, Our Priority
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Book appointments with experienced doctors quickly and easily.
          </p>

          <Link
            to="/book"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Expert Doctors
            </h3>
            <p>
              Consult highly qualified doctors from different specialties.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Easy Booking
            </h3>
            <p>
              Book appointments in just a few clicks.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Secure Records
            </h3>
            <p>
              Keep your medical history safe and organized.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;