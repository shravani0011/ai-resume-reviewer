import { testDatabaseConnection } from "@/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const connection = await testDatabaseConnection();

    return Response.json({
      database: connection.status,
      checkedAt: connection.checked_at,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown database error";

    return Response.json(
      {
        database: "error",
        message,
      },
      { status: 500 },
    );
  }
}
