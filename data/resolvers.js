import { AProject } from './connectors';

const Resolvers = {
  Query: {
    aproject(_, args) {
      return AProject.find({ where: args });
    },
  },
};

export default Resolvers;
