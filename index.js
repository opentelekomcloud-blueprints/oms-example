import { Client, cloud, IdentityV3 } from '@opentelekomcloud/oms';

async function authAKSK(ak, sk) {
    const c = cloud("https://iam.eu-de.otc.t-systems.com/v3").withAKSK(ak, sk).config
    const client = new Client(c)
    await client.authAkSk()
    const catalog = await client.getService(IdentityV3).listCatalog()
    console.log(JSON.stringify(catalog, null, 2))
}

authAKSK(process.argv[2], process.argv[3])