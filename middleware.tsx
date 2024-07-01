import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const prefix = "prefix";
	const responseUrl = new URL(request.url);
	responseUrl.pathname = `/${prefix}${responseUrl.pathname}`;

	const response = NextResponse.rewrite(responseUrl);
	return response;
}

export const config = {
	matcher: ["/page-with-prefix", "/cached-page-with-prefix"],
};
