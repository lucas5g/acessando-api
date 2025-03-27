import { prisma } from "@/utils/prisma";

export class ServerService {
  findAll(){
    return prisma.server.findMany()
  }
}