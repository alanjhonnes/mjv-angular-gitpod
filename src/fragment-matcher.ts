
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "AddUserResult",
        "possibleTypes": [
          {
            "name": "User"
          },
          {
            "name": "AddUserError"
          }
        ]
      }
    ]
  }
};
      export default result;
    