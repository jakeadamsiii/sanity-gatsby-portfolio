import { BsFillImageFill } from 'react-icons/bs'

export default {
    name: 'logo',
    title: 'Logo',
    type: 'document',
    icon: BsFillImageFill,
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: false
            }
        },
        {
            name: 'alt',
            title: 'Alt tag',
            type: 'string',
            description: 'Image alt tag - visual description for accessabilty'
        }
        
    ]
};