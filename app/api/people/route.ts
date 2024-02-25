import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
    const people = await prisma.person.findMany();
    return new Response(JSON.stringify(people), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstname, lastname, phone, dateOfBirth} = body; // Use camelCase for consistency
        if (!firstname || !lastname || !phone || !dateOfBirth) { // Use camelCase
            return new Response('Missing required fields', {
                status: 400,
            });
        }
        
        const person = await prisma.person.create({
            data: {
                firstname,
                lastname,
                phone,
                dateOfBirth: new Date(dateOfBirth), // Match this with your Prisma schema
            }
        });

        // Return the data record with the correct status code
        return new Response(JSON.stringify(person), {
            status: 201, // Use 201 for Created
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error(error); // Consider logging the error for debugging
        return new Response('Error', {
            status: 500,
        });
    }
}
