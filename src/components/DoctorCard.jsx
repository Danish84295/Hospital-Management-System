import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { SelectedDoctor } from "../redux/doctorSlice";

function DoctorCard({doctor}){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    return(
        <div className='border rounded-lg p-4 shadow-md'>
            <h2 className='text-xl font-bold'>{doctor.name}</h2>

            <p className='text-grey-600'>
                Specialization: {doctor.specialization}
            </p>
            
            <p className='text-grey-600'>
                Experience: {doctor.experience}
            </p>
            <p className='text-grey-600'>
                Consultation Fee: ₹{doctor.fees}
            </p>
            
            

            <button 
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 disabled:bg-gray-400"
                onClick={()=>{
                    dispatch(SelectedDoctor(doctor));
                    navigate("/book");
                }}
            >
                Book Appointment
            </button>
        </div>
    );
}

export default DoctorCard
