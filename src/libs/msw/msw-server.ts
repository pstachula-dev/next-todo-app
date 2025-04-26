import { setupServer } from "msw/node";
import { getTodos200 } from "./handlers";

export const mswServer = setupServer(getTodos200);
