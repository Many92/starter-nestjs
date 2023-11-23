-- CreateEnum
CREATE TYPE "notification_status" AS ENUM ('EN_PROCESO', 'LEIDA', 'ELIMINADA');

-- AlterTable
ALTER TABLE "Notificacion" ADD COLUMN     "status" "notification_status" NOT NULL DEFAULT 'EN_PROCESO';
