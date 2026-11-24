CREATE DATABASE IF NOT EXISTS bolo CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS bolo.bolos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  produtor VARCHAR(120) NOT NULL,
  cidade VARCHAR(120) NOT NULL,
  categoria VARCHAR(20) NOT NULL,
  descricao VARCHAR(1000) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  CONSTRAINT bolos_categoria_valida CHECK (categoria IN ('Chocolate', 'Tradicionais', 'Especiais')),
  CONSTRAINT bolos_preco_positivo CHECK (preco > 0)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
