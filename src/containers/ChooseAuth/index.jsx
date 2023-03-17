import React from "react";
import {Box, Button, SimpleGrid, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export default function ChooseAuth() {
    const navigate = useNavigate();
    return (
        <Box alignSelf={"center"} bg={"mintcream"} padding={"24px"}>
            <SimpleGrid column={"2"} spacing={"12px"}>
                <Button rounded={"md"} colorScheme={"blackAlpha"} onClick={() => navigate("/radius")}>
                    <Text fontStyle={"oblique"} fontSize={"lg"} margin={"12px"}>Radius POC</Text>
                </Button>
                <Button rounded={"md"} colorScheme={"blackAlpha"} onClick={() => navigate("/authtext")}>
                    <Text fontStyle={"oblique"} fontSize={"lg"} margin={"12px"}>AuthText POC</Text>
                </Button>
            </SimpleGrid>
        </Box>
    )
}