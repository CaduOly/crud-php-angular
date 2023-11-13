CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoria_id INTEGER REFERENCES categorias(id),
    valor NUMERIC NOT NULL,
    vencimento DATE,
    quantidade_estoque INTEGER NOT NULL,
    perecivel BOOLEAN NOT NULL
);






