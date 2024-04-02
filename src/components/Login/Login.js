import { React, useState } from 'react'
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
const Login = () => {
    const [open, setOpen] = useState();
    const handleOpen = (value) => (setOpen(value));
    return (
        <>
            <Button onClick={() => handleOpen("login")}>Sign In</Button>
            <Dialog
                size="xs"
                open={open === "login"}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem] bg-main text-text p-4">
                    <CardBody className="flex flex-col gap-4 ">
                        <Typography variant="h4" color="white">
                            Sign In
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="white"
                        >
                            Enter your email and password to Sign In.
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                            Your Email
                        </Typography>
                        <Input color='white'
                            label="Email" size="lg"
                        />
                        <Typography className="-mb-2" variant="h6" color='white'>
                            Your Password
                        </Typography>
                        <Input color='white' label="Password" size="lg" />
                        <div className="-ml-2.5 -mt-3">
                            <Checkbox color='gray' label={<Typography color="white" className="font-medium">
                                Remember Me
                            </Typography>} />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                            Don&apos;t have an account?&ensp;
                            <Typography
                                as="a"
                                variant="small"
                                color="white"
                                className="ml-1 font-bold cursor-pointer hover:text-highlight active:underline"
                                onClick={() => handleOpen("signup")}
                            >
                                Sign up
                            </Typography>

                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
            {/*             SIGN UP                  */}
            <Dialog
                size="xs"
                open={open === "signup"}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="bg-main py-8 px-10 mx-auto w-full max-w-[24rem] text-text" shadow={false}>
                    <Typography variant="h4" color="white">
                        Sign Up
                    </Typography>
                    <Typography color="white" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form className=" mt-3 max-w-screen-lg">
                        <div className="mb-1 flex flex-col gap-3">
                            <Typography variant="h6" color="white" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                color='white'
                                label='Name'
                            />
                            <Typography variant="h6" color="white" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                color='white'
                                label='Email'
                            />
                            <Typography variant="h6" color="white" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                color='white'
                                label='Password'
                            />
                            <Typography variant="h6" color="white" className="-mb-3">
                                Confirm Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                color='white'
                                label='Confirm Password'
                            />
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    &nbsp;Terms and Conditions
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button className="mt-3 " variant='gradient' fullWidth>
                            Sign Up
                        </Button>
                        <Typography variant='small' color="white" className="flex justify-center mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Typography
                                as="a"
                                variant="small"
                                color="white"
                                className="ml-1 font-bold cursor-pointer hover:text-highlight active:underline"
                                onClick={() => handleOpen("login")}
                            >
                                Sign In
                            </Typography>
                        </Typography>
                    </form>
                </Card>
            </Dialog>
        </>
    )
}

export default Login
