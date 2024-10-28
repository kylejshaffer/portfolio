import resume from "../assets/shaffer-resume.pdf";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Box, Link, VStack, HStack } from '@chakra-ui/react';

function SocialBar() {
    const iconWidth = "24px";
    return (
        <HStack spacing={4} alignContent={"center"}>
            <Link href="https://www.linkedin.com/in/kyle-shaffer-0b3a054a" target="_blank" rel="noreferrer"><FaLinkedin className={"socialLink"} size={iconWidth} /></Link>
            <Link href="https://github.com/kylejshaffer" target="_blank" rel="noreferrer"><FaGithub className={"socialLink"} size={iconWidth} /></Link>
            <Link href="mailto: kyle.james.shaffer@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className={"socialLink"} size={iconWidth} /></Link>
        </HStack>
    );
};

function NavBar() {
    const navItems = [
        {id: 0, title: "ABOUT", path: "./"},
        {id: 1, title: "PROJECTS", path: "projects"},
        {id: 2, title: "EXPERIENCE", path: "experience"},
        {id: 3, title: "RESUME", path: ""},
    ];

    const handleClick = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        const anchor = e.nativeEvent.srcElement.parentElement.href.split("/").at(-1).replace("#", "");
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    
    return (
        <HStack
        align='center'
        spacing={6}
        mb={4}
        >
            {navItems.map((n) => {
                if (n.title !== "RESUME") {
                    return (
                        <a href={"#" + n.path}
                            className="navLink"
                            key={n.id}
                            onClick={handleClick}>
                        <p>{n.title}</p>
                        </a>
                    )
                } else {
                    return (
                        <a href={resume}
                            className="navLink"
                            key={n.id}
                            target="_blank"
                            rel="noreferrer">
                        <p>{n.title}</p>
                        </a>
                    )
                }
            })}
        </HStack>
    )
};

function Header() {
    return (
        <Box
        width="100%"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        >
            <VStack mt={4} mb={8}>
                <NavBar/>
                <SocialBar />
            </VStack>
        </Box>
    );    
}

export default Header;