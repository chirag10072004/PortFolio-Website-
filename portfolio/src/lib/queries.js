export const projectsQuery = '*[_type == "project"] | order(_createdAt desc)';
export const skillsQuery = '*[_type == "skill"] | order(_createdAt asc)';
export const educationQuery = '*[_type == "education"] | order(_createdAt desc)';
export const certificationsQuery = '*[_type == "certification"] | order(_createdAt desc)';
export const aboutQuery = '*[_type == "about"][0]'; // Fetch the first/main about document
export const experienceQuery = '*[_type == "experience"] | order(_createdAt desc)';
