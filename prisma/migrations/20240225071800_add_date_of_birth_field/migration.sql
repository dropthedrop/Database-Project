/*
  Warnings:

  - Made the column `dateOfBirth` on table `Person` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "dateOfBirth" SET NOT NULL;
