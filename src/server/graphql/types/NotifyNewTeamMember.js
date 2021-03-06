import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import Notification, {notificationInterfaceFields} from 'server/graphql/types/Notification';

const NotifyNewTeamMember = new GraphQLObjectType({
  name: 'NotifyNewTeamMember',
  description: 'A notification sent to someone who was just added to a team',
  interfaces: () => [Notification],
  fields: () => ({
    ...notificationInterfaceFields,
    // inviterName: {
    //  type: new GraphQLNonNull(GraphQLString),
    //  description: 'The name of the person that invited them onto the team'
    // },
    teamName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the team the user is joining'
    },
    preferredName: {
      type: GraphQLString,
      description: 'The name of the person that joined/rejoined the team'
    }
  })
});

export default NotifyNewTeamMember;
