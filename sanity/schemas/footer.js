import { GiBarefoot } from 'react-icons/gi'

export default {
    name: 'footer',
    title: 'Footer content',
    type: 'document',
    icon: GiBarefoot,
    fields: [
        {
            name: 'image',
            title: 'Logo (optional)',
            type: 'image',
        },
        {
            name: 'alt',
            title: 'Logo alt tag (optional)',
            type: 'string',
            description: 'Image alt tag - visual description for accessabilty'
        },
        {
            name: 'facebook',
            title: 'Facebook link (optional)',
            type: 'string',
            description: 'Link to your facebook page'
        },
        {
            name: 'twitter',
            title: 'Twitter Link (optional)',
            type: 'string',
            description: 'Link to your twitter page'
        },
        {
            name: 'instagram',
            title: 'Instagram (optiona;)',
            type: 'string',
            description: 'Link to your instagram page'
        },
        {
            name: 'linkedin',
            title: 'LinkedIn (optional)',
            type: 'string',
            description: 'Link to your Linkedin page'
        },
        {
            name: 'github',
            title: 'Github (optional)',
            type: 'string',
            description: 'Link to your github page'
        },
        {
            name: 'email',
            title: 'Email (optional)',
            type: 'string',
            description: 'include your contact email in the footer'
        },
    ]
};