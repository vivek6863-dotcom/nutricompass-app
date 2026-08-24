import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const question =
      typeof body?.question === "string"
        ? body.question.trim()
        : "";

    if (!question) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a nutrition question.",
        },
        { status: 400 }
      );
    }

    /*
     * Temporary server-side response.
     *
     * We are intentionally NOT connecting an external AI provider yet.
     * This API route is being created first so that the application
     * has a proper server-side endpoint before we add the AI service.
     */

    return NextResponse.json({
      success: true,
      answer:
        "Your nutrition question has been received. The AI Nutrition service will provide general nutrition information here.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process the nutrition question.",
      },
      { status: 500 }
    );
  }
}