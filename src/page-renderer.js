

import React from 'react';
import { useMatch} from 'react-router-dom';

const generatePage = page => {
  // eslint-disable-next-line no-unreachable
  console.log('page', page);
  try {
    const component = () => require(`./pages/${page}`).default;
    return React.createElement(component());
  } catch (err) {
    console.warn(err);
    return 404;
  }
};

const PageRenderer = () => {
  // debugger;
  console.log('hi');
  const match = useMatch("/:page"); // Using useMatch with the correct pattern
  console.log('match', match);

  if (!match) {
    return 'No match found for this page'; // Handling case where match is null
  }

  const { params: { page } } = match;
  console.log('page1', page);

  return generatePage(page);
};

export default PageRenderer;