import { Box, Text, HStack } from "@chakra-ui/react";
import { PiCopyrightThin } from "react-icons/pi";

function Footer() {
    return (
        <Box mt={10} mb={10}>
            <HStack>
                <PiCopyrightThin />
                <Text>Kyle Shaffer, 2024</Text>
            </HStack>
        </Box>
    )
}

export default Footer;