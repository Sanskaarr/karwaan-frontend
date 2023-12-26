// import dbConn from "@/models/dbConn"
// import Contact from "@/models/contact"
 const submitContact=async (data)=>{
    try{
        await dbConn();
        await Contact.create(data);
        return {status:"ok",message:"Message send successsfully!"};
    }catch(e){
        return{status:"ERROR", message:"server error, please try again" };
    }
}
export default  submitContact