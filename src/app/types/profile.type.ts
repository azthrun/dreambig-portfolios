export interface Profile {
    portfolioOwner: string,
    selfDescription: string,
    contacts: Contact[],
}

interface Contact {
    type: string,
    value: string,
}