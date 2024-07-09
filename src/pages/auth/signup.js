import Form from "@/components/auth/form";

export default function SignUp () {
    const  onSubmit = async (email, password) =>{
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json"
        }
       })
       if(response.ok){
        alert("SignUp successfull")
    }
    } 
    return <Form signin={false} onFormSubmit={onSubmit} />
};
