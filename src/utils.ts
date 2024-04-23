import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://rrqgnzvd:PtejfFfcq98MtkSVIpcdj_0KX6FjgTQP@tai.db.elephantsql.com/rrqgnzvd");
    await client.connect();
    return client;
}