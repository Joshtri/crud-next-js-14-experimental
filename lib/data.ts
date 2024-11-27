import {prisma} from '@/lib/prisma';


export const getContacts = async()=>{
    try {
        const contacts = await prisma.contact.findMany();
        return contacts
    } catch (error) {
        throw new Error('failed fetching contact data');
        
    }
}