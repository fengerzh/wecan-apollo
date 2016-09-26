const typeDefinitions = `
type AProject {
  ida_project: Int
  pro_name: String
  group_name: String
}
type Query {
  aproject(pro_name: String, group_name: String): AProject
  getFortuneCookie: String
}
schema {
  query: Query
}
`;

export default [typeDefinitions];
