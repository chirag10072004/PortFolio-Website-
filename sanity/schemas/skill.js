export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Programming', value: 'Programming' },
          { title: 'Web Development', value: 'Web' },
          { title: 'Machine Learning', value: 'ML' },
          { title: 'Tools', value: 'Tools' },
        ],
      },
    },
  ],
}
