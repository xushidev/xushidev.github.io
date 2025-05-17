import { Box } from "@chakra-ui/react";

const ProjectCard = ({}) => {
    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        >
            {/* On click: 
                    pass ReadMe.md file and parse it through react-markdown
                    https://raw.githubusercontent.com/xushidev/{repoName}/refs/heads/main/README.md
                    repoName = repos.name
            */}
        </Box>
    );
};

export default ProjectCard;