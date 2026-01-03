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

    const isVerified = Math.random() > 0.2;
    if (!isVerified) {
      const err = new Error(
        "\nPatient not registered - Registration needed\n",
      );
      err.errTask = "patientVerification";
      throw err;
    }

    return this.#format("Patient Verification", "serial", start);
  }

  async isSpecialistAvailable() {
    const start = Date.now();
    await this.#delay(2000);

    const isAvailable = Math.random() > 0.1;
    if (!isAvailable) {
      const err = new Error(
        "\nSpecialist not available - Try some other day\n",
      );
      err.errTask = "isSpecialistAvailable";
      throw err;
    }

    return this.#format("Specialist Availability", "Parallel", start);
  }

  async isInsuaranceApproved() {
    const start = Date.now();
    await this.#delay(2000);

    const isApproved = Math.random() > 0.1;
    if (!isApproved) {
      const err = new Error("\nInsuarance not approved\n");
      err.errTask = "isInsuaranceApproved";
      throw err;
    }

    return this.#format("Insuarance Pre-Approval", "Parallel", start);
  }

  async processPayment() {
    const start = Date.now();
    await this.#delay(2000);

    const isSuccessfull = Math.random() > 0.4;
    if (!isSuccessfull) {
      const err = new Error(
        "\nPayment Failed - Try again\n",
      );
      err.errTask = "processPayment";
      throw err;
    }

    return this.#format("Processing Payment", "serial", start);
  }

  async lockCalendar() {
    const start = Date.now();
    await this.#delay(2000);

    const isAvailable = Math.random() > 0.1;
    if (!isAvailable) {
      const err = new Error(
        "\nDate not available - Look for another date\n",
      );
      err.errTask = "lockCalendar";
      throw err;
    }

    return this.#format("Locking the Calendar", "Parallel", start);
  }

  async sendNotification() {
    const start = Date.now();
    await this.#delay(2000);

    const isDone = Math.random() > 0.1;
    if (!isDone) {
      const err = new Error(
        "\nServer down failed to send notification - Try after some time\n",
      );

      err.errTask = "sendNotification";

      throw err;
    }

    return this.#format("Sending the Notification", "Parallel", start);
  }

  async createMedicalRecord() {
    const start = Date.now();
    await this.#delay(2000);

    const isCreated = Math.random() > 1;
    if (!isCreated) {
      const err = new Error(
        "\nServer Issue Failed to create medical record - We will inform you as soon as it's done or you will get the refund\n",
      );
      err.errTask = "createMedicalRecord";
      throw err;
    }

    return this.#format("Creating Medical Record", "Parallel", start);
  }
}
