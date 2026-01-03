import { TASKS } from "./orchestrationFlow.js";

const refund = async () => {
  console.log("Refund initiated");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Refund Successfull");
};

const orchestrate = async (TASKS) => {
  for (const stage of TASKS) {
    console.log("Started -->", stage.name, "\n");

    try {
      const result = await Promise.all(stage.tasks.map((task) => task()));
      console.log(result, "\n");
    } catch (err) {
      console.log(`${stage.name} failed :`, err, "\n");
      if (err.errTask === "createMedicalRecord") {
        await refund();
      }
      break;
    }

    console.log("Successful -->", stage.name, "\n");
  }

  console.log("Orchestration successful\n");
};

orchestrate(TASKS);
