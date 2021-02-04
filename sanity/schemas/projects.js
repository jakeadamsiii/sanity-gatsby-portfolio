import { GrDocumentText } from 'react-icons/gr'

export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    icon: GrDocumentText,
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 100,
            },
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of project for surfacing on homepage ',
            maxLength: 100
        },
        {
            name: 'content',
            title: 'Page Content',
            type: 'array', 
            of: [{type: 'block'}]
        } 
    ]
};