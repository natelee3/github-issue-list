
import React from 'react';
import IssueList from '../components/IssueList';
import renderer from 'react-test-renderer';

it('renders correctly', ()=> {
    const tree = renderer
      .create(<IssueList />)
      .toJSON();
    expect(tree).toMatchSnapshot()
})

