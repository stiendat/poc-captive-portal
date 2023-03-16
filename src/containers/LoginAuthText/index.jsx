import React, {useState} from "react";
import {Box, Button, ButtonGroup, FormControl, FormLabel, Input, Stack, Text} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";

export default function LoginAuthText() {
    const [authenticated, setAuthenticated] = useState(true);
    const [username, setUsername] = useState("");

    async function login(data) {
        console.log(data);
        setUsername(data.username);
        if (data.username === "guest" || data.username === "espot") {
            setAuthenticated(!authenticated);
        }
    }

    return (
        <Box className="App" border="10" borderStyle={"solid"} rounded={"md"} bg={"mintcream"}>
            <Box padding={"24px"}>
                <Formik  initialValues={
                    {
                        "username": "guest",
                        "password": "Password12!!"
                    }}
                         onSubmit={async (data) => {
                             await login(data);
                         }}
                >
                    <Form>
                        <Stack>
                            <Field name="username">
                                {({field}) => (
                                    <FormControl>
                                        <FormLabel>
                                            Username
                                        </FormLabel>
                                        <Input {...field}></Input>
                                    </FormControl>
                                )}
                            </Field>
                        </Stack>
                        <Stack>
                            <Field name="password">
                                {({field}) => (
                                    <>
                                        <FormControl>
                                            <FormLabel>
                                                Password
                                            </FormLabel>
                                            <Input {...field}></Input>
                                        </FormControl>
                                    </>
                                )}
                            </Field>
                        </Stack>
                        <Stack>
                            <ButtonGroup>
                                <Button type="submit">
                                    Submit
                                </Button>
                                <Button onClick={async () => await login({username: "guest"})}>
                                    Login as Guest
                                </Button>
                            </ButtonGroup>
                        </Stack>
                        <Stack>
                            <Box hidden={authenticated}>
                                <Text fontSize={"lg"} fontWeight={"extrabold"} pd={"12px"} align={"center"}>
                                    Authenticated as {username}
                                </Text>
                                <Text color={"#ffffff"} id={"authentication-text"}>{authenticated ? "HU4ha7sf234hn23HA7832" : ""}</Text>
                            </Box>
                        </Stack>
                    </Form>
                </Formik>
            </Box>
        </Box>
    )
}