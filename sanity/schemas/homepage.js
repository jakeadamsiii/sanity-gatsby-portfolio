import { AiFillHome } from 'react-icons/ai'

export default {
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    icon: AiFillHome,
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'alt',
            title: 'Hero image Alt tag',
            type: 'string',
            description: 'Image alt tag - visual description for accessabilty'
        },
        {
            name: 'content',
            title: 'Page Content',
            type: 'array', 
            of: [{type: 'block'}]
        } 
    ]
};