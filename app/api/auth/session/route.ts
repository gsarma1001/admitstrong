import { pbkdf2Sync, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function hashPassword(password: string, email: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, `${salt}:${email}`, 100_000, 32, "sha256").toString("hex");

  return {
    hash,
    salt,
  };
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload || typeof payload !== "object") {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const mode = payload.mode === "signup" ? "signup" : "login";
    const name = String(payload.name ?? "Student").trim() || "Student";
    const email = normalizeEmail(String(payload.email ?? ""));
    const password = String(payload.password ?? "");

    if (!email || !email.includes("@") || !password.trim()) {
      return NextResponse.json(
        { error: "Please provide a valid email and password." },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long." },
        { status: 400 },
      );
    }

    const hashedPassword = hashPassword(password, email);

    return NextResponse.json({
      success: true,
      mode,
      session: {
        name,
        email,
      },
      passwordMeta: {
        algorithm: "PBKDF2-SHA256",
        hash: hashedPassword.hash,
        salt: hashedPassword.salt,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error while creating the authentication session.",
      },
      { status: 500 },
    );
  }
}
