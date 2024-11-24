export interface Profile {
    portfolioOwner: string,
    selfDescription: string,
    contacts: Contact[],
    aboutMe?: string,
    experiences?: Experience[],
}

interface Contact {
    type: string,
    value: string,
}

interface Experience {
    order: number,
    value: string,
    company: string,
    startDate: string,
    endDate: string,
}