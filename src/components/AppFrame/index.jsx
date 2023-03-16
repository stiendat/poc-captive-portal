import React from "react";
import {Outlet} from "react-router-dom";
import {Box, Stack, Text} from "@chakra-ui/react";

export default function AppFrame() {

    return (
        <>
            <Stack>
                <Box padding={"12px"}>
                    <Text align={"center"} fontSize={"x-large"} fontWeight={"extrabold"}>
                        Aruba Captive Portal Test
                    </Text>
                </Box>
            </Stack>
            <Stack>
                <Outlet/>
            </Stack>
        </>
    )
}