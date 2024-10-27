import { Box, VStack, HStack } from '@chakra-ui/react';

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
                return (
                    <a href={"#" + n.path}
                     className="navLink"
                     key={n.id}
                     onClick={handleClick}>
                    <p>{n.title}</p>
                    </a>
                )
            })}
        </HStack>
        
    )
}

const Header = () => {
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
            <VStack>
                <NavBar/>
            </VStack>
        </Box>
    );    
}

export default Header;