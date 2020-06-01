import <%= storyName %><%= storyTypeSingular %> from './<%= storyName %>';
import faker from 'faker';

export default {
  title: '<%= storyType %>|<%= storyName %>',

  parameters: {
    component: <%= storyName %><%= storyTypeSingular %>
  }
}

export const Default = () => ({
  components: { <%= storyName %><%= storyTypeSingular %> },
  template: '<<%= storyName %><%= storyTypeSingular %> />'
})
