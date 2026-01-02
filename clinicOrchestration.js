import { Appointment } from "./Appointment.js";

const clinicOrchestration = async () => {
  const tasks = new Appointment();

  const serialTask1 = await tasks.patientVerification();
  console.log(serialTask1);

  const parallelTask1 = await Promise.all([
    tasks.isSpecialistAvailable(),
    tasks.isInsuaranceApproved(),
  ]);
  console.log(parallelTask1);

  const serialTask2 = await tasks.processPayment();
  console.log(serialTask2);

  const parallelTask2 = await Promise.all([
    tasks.lockCalendar(),
    tasks.sendNotification(),
    tasks.createMedicalRecord(),
  ]);
  console.log(parallelTask2);
};

clinicOrchestration();
