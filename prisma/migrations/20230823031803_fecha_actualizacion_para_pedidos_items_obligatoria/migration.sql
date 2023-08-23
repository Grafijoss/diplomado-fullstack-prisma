/*
  Warnings:

  - Made the column `fecha_actualizacion` on table `PedidosItems` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PedidosItems" ALTER COLUMN "fecha_actualizacion" SET NOT NULL;
