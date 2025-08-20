-- CreateTable
CREATE TABLE `Investimento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_investimento` VARCHAR(191) NOT NULL,
    `tipo_investimento` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `data_investimento` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
