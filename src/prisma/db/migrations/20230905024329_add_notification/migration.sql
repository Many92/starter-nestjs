-- CreateTable
CREATE TABLE "Muestras_Analizadas" (
    "id" UUID NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "acides_php_agua" TEXT NOT NULL,
    "acides_php_cp" TEXT NOT NULL,
    "fosforo" TEXT NOT NULL,
    "potacio" TEXT NOT NULL,
    "materia_organica" TEXT NOT NULL,
    "conducto_electrico" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Muestras_Analizadas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacion" (
    "id" UUID NOT NULL,
    "mensage" TEXT NOT NULL,
    "dirigido_a" TEXT,
    "departe_de" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notificacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Muestras_Analizadas_codigo_key" ON "Muestras_Analizadas"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Muestras_Analizadas_nombre_key" ON "Muestras_Analizadas"("nombre");
