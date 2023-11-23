import { PrismaClient } from '@prisma/client';
import { Roles } from '../../roles/entities/role.entity';
import { Users } from '../../users/entities/user.entity';
import { cultivos } from '../../cultivos/entities/cultivo.entity';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
  for (const rol of Roles) {
    await prisma.roles.create({
      data: rol,
    });
  }
  for (const user of Users) {
    user.password = bcrypt.hashSync(user.password, 10);
    user.email.toLowerCase().trim();
    await prisma.users.create({
      data: user,
    });
  }
  for (const cult of cultivos) {
    await prisma.cultivos.create({
      data: cult,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
