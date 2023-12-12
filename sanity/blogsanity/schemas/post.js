export default {
  name: 'post',
  type: 'document',
  title: 'Post 1',
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighter: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body content',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
