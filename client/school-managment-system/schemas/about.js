import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
        name:'aboutImage',
        title: 'About background image',
        type:'image',
        options:{
            hotspot:true,
        },
    }),
    defineField({
        name:'body',
        title:'about body',
        type:'blockContent'
    })
  ],

})
