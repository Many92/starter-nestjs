/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `Recepcion_muestras` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recepcion_muestras_codigo_key" ON "Recepcion_muestras"("codigo");
