export class Appointment {
  #delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  #format(task, mode, start) {
    const end = Date.now();
    return { task, mode, start, end, duration: end - start };
  }

  async patientVerification() {
    const start = Date.now();
    await this.#delay(2000);

    return this.#format("Patient Verification", "serial", start);
  }

  async isSpecialistAvailable() {
    const start = Date.now();
    await this.#delay(2000);

    return this.#format("Specialist Availability", "Parallel", start);
  }

  async isInsuaranceApproved() {
    const start = Date.now();
    await this.#delay(2000);

    return this.#format("Insuarance Pre-Approval", "Parallel", start);
  }

  async processPayment() {
    const start = Date.now();
    await this.#delay(2000);

    return this.#format("Processing Payment", "serial", start);
  }

  async lockCalendar() {
    const start = Date.now();
    await this.#delay(2000);

    return this.#format("Locking the Calendar", "Parallel", start);
  }

  async sendNotification() {
    const start = Date.now();
    await this.#delay(2000);

    return this.#format("Sending the Notification", "Parallel", start);
  }

  async createMedicalRecord() {
    const start = Date.now();
    await this.#delay(2000);

    return this.#format("Creating Medical Record", "Parallel", start);
  }
}
