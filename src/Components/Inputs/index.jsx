 
"use client"
 
import { Input, Typography } from "@material-tailwind/react";
export function InputDefault({placeholder, type, label}) {
  return (
    <div className="w-[100%] md:w-96">
       <Typography
        variant="small"
        color="blue-gray"
        className="mb-1 font-medium"
      >
        {label}
      </Typography>
      <Input
      placeholder={placeholder} 
       type={type} 
       className="placeholder-ellipsis w-full truncate overflow-hidden whitespace-nowrap"
      
       />
    </div>
  );
}