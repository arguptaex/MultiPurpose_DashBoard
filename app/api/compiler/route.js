import { NextResponse } from "next/server"






export async function POST(request) {
    const { code, lang } = await request.json();

    const url = "https://api.jdoodle.com/v1/execute";
    const JDOODLE_CLIENT_ID = "34291c18543f2478ad8a018ed8fd2430";
    const JDOODLE_SECRET_KEY = "40eba1718b71849d77881978aa7f062a087f71dccdedad2d692f5535368e9b1f";

    const payload = {
        clientId: JDOODLE_CLIENT_ID,
        clientSecret: JDOODLE_SECRET_KEY,
        script: code,
        language: "python3",
        versionIndex: 3
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log(data.output);

        return new Response(JSON.stringify({ msg: "API WORKING", data }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error) {
        console.error(error);

        return new Response(JSON.stringify({ msg: "API ERROR", error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
// export default async function handler(req, res) {
//     if (req.method === "GET") {
//         console.log("API hit");

//     }
//     return NextResponse.json({ msg: "API WORKING" })
// }
