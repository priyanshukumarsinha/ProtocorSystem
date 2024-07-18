import {connectDB} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';



connectDB();


export async function POST(request: NextRequest) {
    try {
        const {email, password, isTeacher} = await request.json();
        // validation
        if (!email || !password) {
            return NextResponse.json({error: 'Please fill all fields'}, {status: 400});
        }       

        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500});
        
    }
}