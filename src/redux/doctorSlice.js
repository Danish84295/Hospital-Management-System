import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    doctors:[
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      specialization: "Cardiologist",
      experience: "10 Years",
      fees: 500
    },
    {
      id: 2,
      name: "Dr. Rohit",
      specialization: "Dermatologist",
      experience: "8 Years",
      fees: 500
    },
    {
      id: 3,
      name: "Dr. Amit Verma",
      specialization: "Neurologist",
      experience: "12 Years",
      fees: 500
    },
  ],
};

const doctorSlice=createSlice({
    name:"doctor",
    initialState,
    reducers:{
        SelectedDoctor:(state,action)=>{
            state.SelectedDoctor=action.payload;
        },
    },
});

export const {SelectedDoctor}=doctorSlice.actions;
export default doctorSlice.reducer;