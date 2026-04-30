export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'focus',
      title: 'Focus',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'passion',
      title: 'Passion',
      type: 'text',
    },
  ],
}
