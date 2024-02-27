import { IconStyle } from "./styled";
import { ReactComponent as githubLogo } from "./gitHubLogo.svg";
import { ReactComponent as linkedinLogo } from "./linkedinLogo.svg"

export const socials = [
    {
        name: "github",
        url: "https://github.com/michalwodniczak",
        Icon: IconStyle(githubLogo)
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/micha%C5%82-wodniczak/",
        Icon: IconStyle(linkedinLogo)
    },
];