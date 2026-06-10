import DoctorCard from "../components/DoctorCard";
import {useSelector} from "react-redux";


function Doctors() {

  const doctors=useSelector(
    (state)=>state.doctor.doctors
  );
  

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Our Doctors
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}   
            doctor={doctor}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;