'use client';
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {


      const handleGoogleSignin = async ()=>{
  
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }




        const router = useRouter();

    const onSubmit = async (event) => {
        
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = Object.fromEntries(formData.entries());
        console.log("User data:", userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email, // required
            password: userData.password, // required
    callbackURL: "/",
});

        console.log('signup data' , data , error);

        if (error) {
            console.error("Error signing up:", error);
            alert(`Error signing up: ${error.message}`);
        } else {
            console.log("Sign up successful:", data);
            alert("Sign up successful! Please check your email to verify your account.");
             router.push(`/`)
        }

    }
    return (
        <div className="bg-[#ce752813] py-13">
            <div className="container mx-auto  flex justify-center items-center  ">
                <div className=" p-8 w-100 rounded-xl  bg-white shadow-sm  border border-gray-200">
            <h2 className="text-center text-[25px] font-black text-gray-800 mb-4">Login Account</h2>
            <Form className="" onSubmit={onSubmit}>
                {/* email */}
                <TextField
                    className='mb-4'
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    className='mb-4'
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <FieldError />
                </TextField>

                <div className="">
                    <Button className='w-full bg-[#f3790d] hover:bg-[#ff7700]'  type="submit">
                        Login account
                    </Button>
                </div>
            </Form>

            <div className="divider my-4">OR</div>

           
                <div className="flex flex-col gap-2 my-4 ">
                   <button onClick={handleGoogleSignin} className="btn border-[#ff7700] text-[#ff7700] hover:bg-[#ff7700] hover:text-white" ><FaGoogle /> Login With Google</button>
               </div>

           <p className="mt-4 text-center font-bold">
          Don t have an account  ? {" "}
          <Link href="/register" className="text-[#f3790d]">
            Register
          </Link>
        </p>

        </div>
            </div>
        </div>
    );
};

export default SignUpPage;