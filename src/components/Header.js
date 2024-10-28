import resume from "../assets/shaffer-resume.pdf";
import { VStack, HStack } from '@chakra-ui/react';

const navItems = [
    {id: 0, title: "ABOUT", path: "./"},
    {id: 1, title: "PROJECTS", path: "projects"},
    {id: 2, title: "EXPERIENCE", path: "experience"},
    {id: 3, title: "RESUME", path: ""},
]

const NavBar = () => {
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
}

const Header = () => {
    return (
        <VStack mt={4} mb={8}>
            <NavBar/>
        </VStack>
    );    
}

export default Header;