import './App.css'
import {Box, Button, ButtonGroup, Flex, FormControl, FormLabel, Input, Stack, Text} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import axios from "axios";

function App() {
    const OPENWISP_URL = "https://openwisp2.espot.vn";

    const arubaParams = new URLSearchParams(document.location.search);

    const [doDisplayResult, toogleDisplayResult] = useState(true);
    const [currentUser, setCurrentUser] = useState("");

    const validate = async (tokenResponse) => {
        await axios.post(OPENWISP_URL + '/api/v1/radius/organization/espot/account/token/validate/',
            { token: tokenResponse.key })
            .then((response) => {
                return response.data.response_code === "AUTH_TOKEN_VALIDATION_SUCCESSFUL" ? response.data.auth_token : null
            })
            .catch((exception) => console.log(exception))
    }
    const login = async (loginCred) => {
        console.log(loginCred);
        let userDetail;
        await axios.post(OPENWISP_URL + '/api/v1/radius/organization/espot/account/token/', loginCred)
            .then((response) => {
                userDetail = response.data;
                toogleDisplayResult(false);
            })
            .catch((exception) => console.log(exception))
        await setCurrentUser(validate(userDetail));
        if (!(currentUser === "")) {
            let _curerntUser = currentUser;
            await axios.post(arubaParams.switchip, {
                cmd: "authenticate",
                user: userDetail.username,
                password: _curerntUser
            })
                .then(() => {
                    localStorage.setItem("auth_success", "true");
                    localStorage.setItem("auth_key", currentUser);
                    alert("Success");
                })
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
                  await login(data)
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
                              <FormControl>
                                  <FormLabel>
                                      Password
                                  </FormLabel>
                                  <Input {...field}></Input>
                              </FormControl>
                          )}
                      </Field>
                  </Stack>
                  <Stack>
                      <ButtonGroup>
                          <Button type="submit">
                              Submit
                          </Button>
                          <Button>
                              Login as Guest
                          </Button>
                      </ButtonGroup>
                  </Stack>
                  <Stack>
                      <Box hidden={doDisplayResult}>
                          <Text fontSize={"lg"} fontWeight={"extrabold"} pd={"12px"}>
                              User detail
                          </Text>
                          <Text fontSize={"lg"}>
                              {}
                          </Text>
                      </Box>
                  </Stack>
              </Form>
          </Formik>
        </Box>
    </Box>
  )
}

export default App
