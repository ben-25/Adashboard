CREATE TABLE themes
(
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  validated BOOLEAN DEFAULT false,
  theme_id INTEGER REFERENCES themes(id)
);