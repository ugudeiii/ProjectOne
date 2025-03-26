/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Image` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Stock` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_productId_fkey";

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "Image" TEXT NOT NULL,
ADD COLUMN     "Stock" INTEGER NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL;

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderProduct";
