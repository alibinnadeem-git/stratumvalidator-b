export async function GET() {
  return Response.json({
    network: process.env.STRATUM_CHAIN_ID ?? 'stratum-devnet-1',
    validator: process.env.STRATUM_VALIDATOR_ID ?? 'validator-b',
    address: process.env.STRATUM_VALIDATOR_ADDRESS ?? 'stratum1gl2ellj5uyzr4lxtz99ta60c5cvje8ghee6ttn',
    role: 'validator',
    status: 'online'
  });
}
