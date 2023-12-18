import { Box, Link, VStack } from "@chakra-ui/layout";
import React from "react";

// Maybe this is the canonical way to repeat elements with a certain style?
const FooterLink = ({ children, ...props }) => {
    return <Link {...props} borderBottom="1px dotted" borderBottomColor="gray.400" _hover={{ borderBottomColor: "gray.800" }}>{children}</Link>
};

const Footer = ({ ...props }) => {
    return <VStack textAlign="center" color="gray.600" borderTop="1px dotted" borderColor="gray.400" {...props}>
        <Box>
            Made by <FooterLink href="https://words.yuvi.in">Yuvi Panda</FooterLink> | <FooterLink href="mailto:yuvipanda@gmail.com">Tell me</FooterLink> you like it! | <FooterLink href="https://github.com/notebook-sharing-space/nbss">Report bugs</FooterLink> | <FooterLink href="mailto:yuvipanda+abuse@gmail.com">Report abuse</FooterLink>
        </Box>
    </VStack >
}
export { Footer };
