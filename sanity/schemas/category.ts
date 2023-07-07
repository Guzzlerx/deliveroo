import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of Category',
      type: 'image',
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
