import { AiOutlineMail } from 'react-icons/ai'

export default {
    name: 'contactpage',
    title: 'Contact Page',
    type: 'document',
    icon: AiOutlineMail,
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        } 
    ]
};