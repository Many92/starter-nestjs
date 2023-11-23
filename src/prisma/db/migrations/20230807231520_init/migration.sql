-- CreateTable
CREATE TABLE "Users" (
    "id" UUID NOT NULL,
    "username" CHAR(25) NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "avatar" TEXT,
    "activo" BOOLEAN DEFAULT true,
    "roles" TEXT[],

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" UUID NOT NULL,
    "rol" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cultivos" (
    "id" UUID NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Cultivos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidad_productiva" (
    "id" UUID NOT NULL,
    "tipo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Unidad_productiva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fertilizantes" (
    "id" UUID NOT NULL,
    "nombre" TEXT NOT NULL,
    "nitrogeno" INTEGER NOT NULL,
    "fosforo" INTEGER NOT NULL,
    "potacio" INTEGER NOT NULL,

    CONSTRAINT "Fertilizantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dosis_fertilizantes" (
    "id" UUID NOT NULL,
    "evaluacion_muestra_id" UUID NOT NULL,
    "fertilizante_Id" UUID NOT NULL,

    CONSTRAINT "Dosis_fertilizantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recepcion_muestras" (
    "id" UUID NOT NULL,
    "codigo" BIGINT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "fecha_entrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "base_productiva_Id" UUID NOT NULL,
    "cultivo_Id" UUID NOT NULL,
    "latitud" TEXT NOT NULL,
    "longitud" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "tipo_suelo" TEXT NOT NULL,

    CONSTRAINT "Recepcion_muestras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evaluacion" (
    "id" UUID NOT NULL,
    "muestra_Id" UUID NOT NULL,
    "acides_php_agua" DOUBLE PRECISION NOT NULL,
    "acides_php_cp" DOUBLE PRECISION NOT NULL,
    "fosforo" DOUBLE PRECISION NOT NULL,
    "potacio" DOUBLE PRECISION NOT NULL,
    "materia_organica" DOUBLE PRECISION NOT NULL,
    "conducto_electrico" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Evaluacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Evaluacion_muestra_Id_key" ON "Evaluacion"("muestra_Id");

-- AddForeignKey
ALTER TABLE "Dosis_fertilizantes" ADD CONSTRAINT "Dosis_fertilizantes_evaluacion_muestra_id_fkey" FOREIGN KEY ("evaluacion_muestra_id") REFERENCES "Evaluacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dosis_fertilizantes" ADD CONSTRAINT "Dosis_fertilizantes_fertilizante_Id_fkey" FOREIGN KEY ("fertilizante_Id") REFERENCES "Fertilizantes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recepcion_muestras" ADD CONSTRAINT "Recepcion_muestras_base_productiva_Id_fkey" FOREIGN KEY ("base_productiva_Id") REFERENCES "Unidad_productiva"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recepcion_muestras" ADD CONSTRAINT "Recepcion_muestras_cultivo_Id_fkey" FOREIGN KEY ("cultivo_Id") REFERENCES "Cultivos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluacion" ADD CONSTRAINT "Evaluacion_muestra_Id_fkey" FOREIGN KEY ("muestra_Id") REFERENCES "Recepcion_muestras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
