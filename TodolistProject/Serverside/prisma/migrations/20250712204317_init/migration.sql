/*
  Warnings:

  - You are about to drop the column `content` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `content`,
    ADD COLUMN `completed` BOOLEAN NOT NULL DEFAULT false;
