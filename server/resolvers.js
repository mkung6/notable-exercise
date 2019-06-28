import Physician from './physician';
import Patient from './patient';
import Appointment from './appointment';
import { filter } from 'lodash';

let physicians = [
    { id: 1, firstName: "Julius", lastName: "Hibbert" },
    { id: 2, firstName: "Algernop", lastName: "Krieger", patients: [1,2,3,4,5] },
    { id: 3, firstName: "Nick", lastName: "Riviera" },
];
let appointments = [
    { id: 1, firstName: "Sterling", lastName: "Archer", physician: 2, time: 800, am: true, kind: "New Patient"},
    { id: 2, firstName: "Cyril", lastName: "Figis", physician: 2, time: 830, am: true, kind: "Follow-up"},
    { id: 3, firstName: "Ray", lastName: "Gilette", physician: 2, time: 900, am: true, kind: "Follow-up"},
    { id: 4, firstName: "Lana", lastName: "Kane", physician: 2, time: 930, am: true, kind: "New Patient"},
    { id: 5, firstName: "Pam", lastName: "Poovey", physician: 2, time: 1000, am: true, kind: "New Patient"},
];

export default {
    Query: {
        physicians: () => physicians,
        appointments: (_, id) => filter(appointments, {physician: id.physician}),
    }
}
