// import React from "react";
// import { Button } from "@/components/ui/button";
// import { HiOutlineCurrencyDollar } from "react-icons/hi2";
// import { BsPerson } from "react-icons/bs";
// import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
// import { Input } from "@/components/ui/input"
// import { useFormContext } from 'react-hook-form';
// import { useNavigate } from "react-router-dom";
// import SelectOne from "@/common/static/SelectOne";

// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select"




// const Header = () => {


// const yearData = ["2023", "2024"];
//     const monthData = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const dayData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

//     const navigate = useNavigate();
//     const { register, handleSubmit, setValue } = useFormContext();

//     const [selectedYear, setSelectedYear] = useState(null);
//     const [selectedMonth, setSelectedMonth] = useState(null);
//     const [selectedDay, setSelectedDay] = useState(null);

//     const handleLogout = () => {
//         localStorage.clear();
//         console.log("Logged out and local storage cleared");
//         navigate("/");
//     };

//     const onSubmit = (data) => {
//         const formData = {
//             services_ids: [], 
//             annotate_type: "price", 
//             hospital_id: 1, 
//             dates: {
//                 year: selectedYear,
//                 month: selectedMonth,
//                 day: selectedDay
//             }
//         };

//         console.log(formData);
//     };


//     const handleSelectYear = (year) => {
//       setSelectedYear(year);
//       setValue("year", year); 
//   };

//   const handleSelectMonth = (month) => {
//       setSelectedMonth(month);
//       setValue("month", month); 
//   };

//   const handleSelectDay = (day) => {
//       setSelectedDay(day);
//       setValue("day", day); 
//   };


  
//   return (
//     <div className="container flex mt-6 justify-between items-center ">
//       <div className=" flex space-x-4 ">
//         <Button className="bg-white px-6 py-4 border border-[#E8E8E8] text-[#474A4A] hover:bg-white   hover:text-[#068F84] hover:border-[#068F84] ">
//           Hospitals
//         </Button>

//         <Button className="bg-[#068F84] px-6 py-4 hover:bg-[#0A6B63] ">Services</Button>
//       </div>
      

//       <div className=" space-x-3 flex ml-28">

//       <SelectOne 
//                     selectData={yearData} 
//                     selectValue={'Year'} 
//                     selectWidth={'80px'} 
//                     onSelect={handleSelectYear}
//                 />
//                 <SelectOne 
//                     selectData={monthData} 
//                     selectValue={'Month'} 
//                     selectWidth={'112px'} 
//                     onSelect={handleSelectMonth}
//                     disabled={!selectedYear}
//                 />
//                 <SelectOne 
//                     selectData={dayData} 
//                     selectValue={'Day'} 
//                     selectWidth={'64px'} 
//                     onSelect={handleSelectDay}
//                     disabled={!selectedYear || !selectedMonth}
//                 />

//       </div>

// <div className="  ml-16 flex space-x-3 ">

// <Button className="bg-[#068F84] px-6 py-4 hover:bg-[#0A6B63] ">Price  <HiOutlineCurrencyDollar  className=" h-6 w-6" /></Button>






//       <Button 
//        className="   bg-white px-6 py-4 border border-[#E8E8E8] font-sans font-medium text-[#7A7A7A]   hover:bg-white   hover:text-[#068F84] hover:border-[#068F84]   ">Count 
//         <TbDeviceIpadHorizontalSearch className="text-gray-500 h-4 w-4  ml-2 hover:text-[#068F84] focus:text-[#068F84]" /> 
//     </Button>
      
     
   
   

//     <Button className="bg-white px-4 py-4 border border-[#E8E8E8] font-sans   font-medium text-[#7A7A7A] hover:bg-white   hover:text-[#068F84] hover:border-[#068F84]">
//       Number of Patiens
//       <BsPerson className="w-6 h-6 ml-2"/>
//     </Button>

//     <Button className= "bg-white px-4 py-4 border border-[#E8E8E8] font-sans   font-medium text-[#7A7A7A] hover:bg-white   hover:text-[#068F84] hover:border-[#068F84]" onClick={handleLogout}>
//       Log Out
//     </Button>


// </div>


//     </div>
    
//   );
// };

// export default Header;







import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import SelectOne from "@/common/static/SelectOne";

const Header = () => {
  const {  handleSubmit, setValue } = useFormContext();
  const navigate = useNavigate();

  const yearData = ["2023", "2024"];
  const monthData = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    console.log("Logged out and local storage cleared");
    navigate("/");
  };

  const onSubmit = (data) => {
    const formData = {
      services_ids: [], 
      annotate_type: "price", 
      hospital_id: 1, 
      dates: {
        year: selectedYear,
        month: selectedMonth,
        day: selectedDay
      }
    };

    console.log(formData);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setValue("year", year); 
  };

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setValue("month", month); 
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setValue("day", day); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container flex mt-6 justify-between items-center ">
        <div className="flex space-x-4">
          <Button className="bg-white px-6 py-4 border border-[#E8E8E8] text-[#474A4A] hover:bg-white hover:text-[#068F84] hover:border-[#068F84]">
            Hospitals
          </Button>

          <Button className="bg-[#068F84] px-6 py-4 hover:bg-[#0A6B63]">Services</Button>
        </div>

        <div className="space-x-3 flex ml-28">
          <SelectOne 
            selectData={yearData} 
            selectValue={'Year'} 
            selectWidth={'80px'} 
            onSelect={handleSelectYear}
          />
          <SelectOne 
            selectData={monthData} 
            selectValue={'Month'} 
            selectWidth={'112px'} 
            onSelect={handleSelectMonth}
            disabled={!selectedYear}
          />
          <SelectOne 
            selectData={dayData} 
            selectValue={'Day'} 
            selectWidth={'64px'} 
            onSelect={handleSelectDay}
            disabled={!selectedYear || !selectedMonth}
          />
        </div>

        <div className="ml-16 flex space-x-3">
          <Button className="bg-[#068F84] px-6 py-4 hover:bg-[#0A6B63]">
            Price <HiOutlineCurrencyDollar className="h-6 w-6" />
          </Button>

          <Button className="bg-white px-6 py-4 border border-[#E8E8E8] font-sans font-medium text-[#7A7A7A] hover:bg-white hover:text-[#068F84] hover:border-[#068F84]">
            Count 
            <TbDeviceIpadHorizontalSearch className="text-gray-500 h-4 w-4 ml-2 hover:text-[#068F84] focus:text-[#068F84]" /> 
          </Button>

          <Button className="bg-white px-4 py-4 border border-[#E8E8E8] font-sans font-medium text-[#7A7A7A] hover:bg-white hover:text-[#068F84] hover:border-[#068F84]">
            Number of Patients
            <BsPerson className="w-6 h-6 ml-2" />
          </Button>

          <Button className="bg-white px-4 py-4 border border-[#E8E8E8] font-sans font-medium text-[#7A7A7A] hover:bg-white hover:text-[#068F84] hover:border-[#068F84]" onClick={handleLogout}>
            Log Out
          </Button>
        
        </div>
      </div>
    </form>
  );
};


export default Header;
