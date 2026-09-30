import React from "react";

const UserContext =  React.createContext();   //create context bhi ek hook hi hota hai jaise useState

export default UserContext;


{/* <UserContext>     provider hai
<Login/>
<Dashboard>                     //jitne bhi UserContext ke ander hai subka access rehta hai UserContext ko  
    <Right/>                        //Yeh ek global variable ki tarah hai
    <Left/>                      // saare state(data) ka access le sakte hai
</Dashboard>
<UserContext/> */}