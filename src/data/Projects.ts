export default interface Project {
    id : number,
    title : string,
    description : string,
    website : string | null,
    github : string,
    imageFolder : string | null,
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
        tags: [".NET", "Azure", "Cosmos"],
        highlight: false,
    },
];