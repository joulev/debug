import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
    await req.text();

    return NextResponse.json({test: 'dummy'});
}