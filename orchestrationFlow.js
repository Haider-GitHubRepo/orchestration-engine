import { Appointment } from "./Appointment.js";

const clinic = new Appointment();

export const TASKS = [
  { name: "Verification", tasks: [() => clinic.patientVerification()] },
  {
    name: "Validation",
    tasks: [
      () => clinic.isSpecialistAvailable(),
      () => clinic.isInsuaranceApproved(),
    ],
  },
  { name: "Billing", tasks: [() => clinic.processPayment()] },
  {
    name: "Completion",
    tasks: [
      () => clinic.lockCalendar(),
      () => clinic.sendNotification(),
      () => clinic.createMedicalRecord(),
    ],
  },
];
