import { ConnectDB } from "@/app/lib/config/db"
import { connectToDB } from "@/app/lib/utils";

const { NextResponse } = require("next/server")

const LoadDB = async () => {

    await connectToDB();

}




export async function GET(request) {
    LoadDB();
    console.log("Blog get Hit")
    return NextResponse.json({ msg: "API WORKING" })
}

// export async function POST(request) {
//     const formData = await request.formData();
//     const timeStamp = date.now();
// }