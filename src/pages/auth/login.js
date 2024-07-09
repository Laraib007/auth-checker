import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";

export default function SignIn () {
    const  onSubmit = () =>{

    }
    return <Form signin={true} onFormSubmit={onSubmit} />
};
