import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";

export default function SignIn () {
    return <Form signin={true} />
};
