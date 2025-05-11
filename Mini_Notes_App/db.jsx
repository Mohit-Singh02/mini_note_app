function getdb() {
  const db = new Dexie("notes");
  db.version(1).stores({
    notes: "++id, title, content, createdAt, updatedAt",
  });
  return db;
}

