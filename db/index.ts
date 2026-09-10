import { Pool } from "pg";

type DbConnectionCheck = {
  status: string;
  checked_at: Date;
};

declare global {
  var postgresPool: Pool | undefined;
}

function getPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  if (!globalThis.postgresPool) {
    globalThis.postgresPool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  return globalThis.postgresPool;
}

export async function testDatabaseConnection() {
  const result = await getPool().query<DbConnectionCheck>(
    "SELECT $1::text AS status, NOW() AS checked_at",
    ["ok"],
  );

  return result.rows[0];
}
