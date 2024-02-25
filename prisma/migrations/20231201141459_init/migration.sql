-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
