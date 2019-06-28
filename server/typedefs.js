export default `
    type Physician {
        id: Int!
        firstName: String
        lastName: String
        patients: [Int]
    }
    type Appointment {
        id: Int!
        firstName: String
        lastName: String
        physician: Int
        time: Int
        am: Boolean
        kind: String
    }
    type Query {
        physicians: [Physician]
        appointments(physician: Int): [Appointment]
    }
`;
