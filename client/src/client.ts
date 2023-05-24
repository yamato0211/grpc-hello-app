import { MessangerClient } from "./helloworld/HelloworldServiceClientPb";

export type GRPCClients = {
  messengerClient: MessangerClient;
};

export const gRPCClients = {
  messengerClient: new MessangerClient(`http://localhost:8080`)
};
