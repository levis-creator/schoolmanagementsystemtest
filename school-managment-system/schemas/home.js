import {defineField, defineType} from 'sanity'
import Footer from '../../src/components/Footer';

export default defineType({
    name:'home',
    title:'Home Page',
    type:'document',
    fields:[

        // Hero
        defineField({
            name:'backgroundImageHero',
            title:'Background Image Hero',
            type:'image',
            options:{
                hotspot:true,
            },
        }),
        defineField({
            name:'heroHeadText',
            title:'Hero header text',
            type:'string',
        }),
        defineField({
            name:'mission',
            title:'Mission',
            type:'string',
        }),
        defineField({
            name:'backgroundImageMission',
            title:'Background image for mission ',
            type:'image',
            options:{
                hotspot:true,
            },
            validation:Rule=>Rule.required()
        }),
        defineField({
            name:'about',
            title:'About us',
            type:'string',
        }),
        // Footer
    
       
    ]
})