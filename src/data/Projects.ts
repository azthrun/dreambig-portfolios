export default interface Project {
    id : number,
    title : string,
    description : string,
    website : string | null,
    github : string,
    imageFolder : string | null,
    imageCount : number,
    tags : string[],
    highlight : boolean,
}

export const getAll = () : Project[] => projects;

export const getHighlighted = () : Project[] => projects.filter(p => p.highlight);

const projects : Project[] = [
    {
        id: 1,
        title: "Inventory Mobile",
        description: "A mobile application managing inventory usages, implemented with Flutter and Google Firebase/Firestore technologies.",
        website: null,
        github: "https://github.com/azthrun/CHaN/tree/main/flutter/inventory",
        imageFolder: "img/inventory",
        imageCount: 1,
        tags: ["Flutter", "Firebase"],
        highlight: true,
    },
    {
        id: 2,
        title: "DreamBig To-Dos",
        description: "A React TypeScript web application managing To-do items, protected by Google Authentications and supported by Firebase/Firestore technologies.",
        website: "https://dreambig-todos.web.app",
        github: "https://github.com/azthrun/dreambig-todos",
        imageFolder: "img/todo",
        imageCount: 2,
        tags: ["React", "Firebase", "TypeScript"],
        highlight: true,
    },
    {
        id: 3,
        title: "Calendar Web3.0",
        description: "An appointment scheduling site interacting with Ethereum blockchain (testnet), implemented with Web3 technologies. <br/>All data used in this website are stored on the blockchain (testnet).",
        website: null,
        github: "https://github.com/azthrun/learning-web3",
        imageFolder: "img/calendar",
        imageCount: 6,
        tags: ["Web3", "React", "Solidity"],
        highlight: true,
    },
    {
        id: 4,
        title: "Inventory Api",
        description: "A .NET 6 web api with custom authentication provider that talks to Azure Cosmos database as the backend data storage",
        website: null,
        github: "https://github.com/azthrun/CHaN/tree/main/dotnet/Inventory.Api",
        imageFolder: null,
        imageCount: 0,
        tags: [".NET", "Azure", "Cosmos"],
        highlight: false,
    },
    {
        id: 5,
        title: "React Portfolio",
        description: "A Web2.0 application displaying my portfolio (this website), implemented with React and TypeScript.",
        website: "https://dreambig-portfolios.web.app/",
        github: "https://github.com/azthrun/dreambig-portfolios",
        imageFolder: "img/portfolio",
        imageCount: 1,
        tags: ["React", "TypeScript"],
        highlight: false,
    },
];